import "server-only";

import { prisma } from "@/lib/prisma";

const INCLUDE_EFFECT = "Include";
const EXCLUDE_EFFECT = "Exclude";

const FACILITY_TYPE_RULE = "FacilityType";
const ACCREDITOR_RULE = "Accreditor";
const CAPABILITY_RULE = "Capability";

export type ApplicabilityRuleResult = {
  ruleId: string;
  ruleType: string;
  ruleValue: string;
  effect: string;
  ruleGroup: string;
  matchMode: string;
  matched: boolean;
};

export type StandardApplicabilityEvaluation = {
  standardId: string;
  applicable: boolean;
  reason: string;
  matchedIncludeGroup: string | null;
  matchedExcludeRule: ApplicabilityRuleResult | null;
  ruleResults: ApplicabilityRuleResult[];
};

export type ApplicableStandard = {
  id: string;
  accreditor: string;
  chapter: string | null;
  code: string;
  slug: string | null;
  title: string;
  intent: string | null;
  description: string | null;
  requirement: string | null;
  department: string | null;
  domain: string | null;
  category: string | null;
  riskLevel: string | null;
  priority: number;
  evidenceFrequency: string | null;
  evidenceRetention: string | null;
  responsibleRole: string | null;
  validationMethod: string | null;
  applicability: StandardApplicabilityEvaluation;
};

export type FacilityApplicabilityResult = {
  facility: {
    id: string;
    name: string;
    facilityType: string;
    primaryAccreditor: string | null;
    accreditations: string[];
    capabilities: string[];
  };
  applicableStandards: ApplicableStandard[];
  excludedStandards: ApplicableStandard[];
  totalActiveStandards: number;
  totalApplicableStandards: number;
  totalExcludedStandards: number;
};

type FacilityApplicabilityInput = {
  facilityId: string;
  organizationId: string;
};

type FacilityProfile = {
  facilityType: string;
  accreditations: Set<string>;
  capabilities: Set<string>;
};

type ApplicabilityRule = {
  id: string;
  ruleType: string;
  ruleValue: string;
  effect: string;
  ruleGroup: string;
  matchMode: string;
};

function normalizeValue(value: string | null | undefined): string {
  return value?.trim().toLowerCase() ?? "";
}

function ruleMatchesFacility(
  rule: ApplicabilityRule,
  facility: FacilityProfile,
): boolean {
  const normalizedRuleType = normalizeValue(rule.ruleType);
  const normalizedRuleValue = normalizeValue(rule.ruleValue);

  if (!normalizedRuleValue) {
    return false;
  }

  if (
    normalizedRuleType ===
    normalizeValue(FACILITY_TYPE_RULE)
  ) {
    return (
      normalizeValue(facility.facilityType) ===
      normalizedRuleValue
    );
  }

  if (
    normalizedRuleType === normalizeValue(ACCREDITOR_RULE)
  ) {
    return facility.accreditations.has(normalizedRuleValue);
  }

  if (
    normalizedRuleType === normalizeValue(CAPABILITY_RULE)
  ) {
    return facility.capabilities.has(normalizedRuleValue);
  }

  return false;
}

function evaluateStandardApplicability(
  standardId: string,
  rules: ApplicabilityRule[],
  facility: FacilityProfile,
): StandardApplicabilityEvaluation {
  if (rules.length === 0) {
    return {
      standardId,
      applicable: true,
      reason:
        "No applicability rules are configured, so this active standard is treated as universally applicable.",
      matchedIncludeGroup: null,
      matchedExcludeRule: null,
      ruleResults: [],
    };
  }

  const ruleResults: ApplicabilityRuleResult[] =
    rules.map((rule) => ({
      ruleId: rule.id,
      ruleType: rule.ruleType,
      ruleValue: rule.ruleValue,
      effect: rule.effect,
      ruleGroup: rule.ruleGroup,
      matchMode: rule.matchMode,
      matched: ruleMatchesFacility(rule, facility),
    }));

  const matchedExcludeRule =
    ruleResults.find(
      (rule) =>
        normalizeValue(rule.effect) ===
          normalizeValue(EXCLUDE_EFFECT) &&
        rule.matched,
    ) ?? null;

  if (matchedExcludeRule) {
    return {
      standardId,
      applicable: false,
      reason: `Excluded because the facility matched ${matchedExcludeRule.ruleType} = ${matchedExcludeRule.ruleValue}.`,
      matchedIncludeGroup: null,
      matchedExcludeRule,
      ruleResults,
    };
  }

  const includeRules = ruleResults.filter(
    (rule) =>
      normalizeValue(rule.effect) ===
      normalizeValue(INCLUDE_EFFECT),
  );

  if (includeRules.length === 0) {
    return {
      standardId,
      applicable: true,
      reason:
        "No include rules are configured and no exclude rule matched, so the standard is applicable.",
      matchedIncludeGroup: null,
      matchedExcludeRule: null,
      ruleResults,
    };
  }

  const includeGroups = new Map<
    string,
    ApplicabilityRuleResult[]
  >();

  for (const rule of includeRules) {
    const groupName =
      rule.ruleGroup.trim() || "default";

    const existingRules =
      includeGroups.get(groupName) ?? [];

    existingRules.push(rule);
    includeGroups.set(groupName, existingRules);
  }

  for (const [groupName, groupRules] of includeGroups) {
    const groupMatchMode =
      normalizeValue(groupRules[0]?.matchMode) === "any"
        ? "Any"
        : "All";

    const groupMatches =
      groupMatchMode === "Any"
        ? groupRules.some((rule) => rule.matched)
        : groupRules.every((rule) => rule.matched);

    if (groupMatches) {
      return {
        standardId,
        applicable: true,
        reason: `Applicable because include rule group "${groupName}" matched using ${groupMatchMode} logic.`,
        matchedIncludeGroup: groupName,
        matchedExcludeRule: null,
        ruleResults,
      };
    }
  }

  return {
    standardId,
    applicable: false,
    reason:
      "The facility did not satisfy any configured include rule group.",
    matchedIncludeGroup: null,
    matchedExcludeRule: null,
    ruleResults,
  };
}

export async function evaluateFacilityApplicability({
  facilityId,
  organizationId,
}: FacilityApplicabilityInput): Promise<FacilityApplicabilityResult> {
  const facility = await prisma.facility.findFirst({
    where: {
      id: facilityId,
      organizationId,
    },
    select: {
      id: true,
      name: true,
      facilityType: true,
      primaryAccreditor: true,
      accreditations: true,
      capabilities: {
        where: {
          enabled: true,
        },
        select: {
          capability: true,
        },
        orderBy: {
          capability: "asc",
        },
      },
    },
  });

  if (!facility) {
    throw new Error(
      "The requested facility could not be found.",
    );
  }

  const standards = await prisma.standard.findMany({
    where: {
      status: "Active",
      OR: [
        {
          organizationId: null,
        },
        {
          organizationId,
        },
      ],
    },
    select: {
      id: true,
      accreditor: true,
      chapter: true,
      code: true,
      slug: true,
      title: true,
      intent: true,
      description: true,
      requirement: true,
      department: true,
      domain: true,
      category: true,
      riskLevel: true,
      priority: true,
      evidenceFrequency: true,
      evidenceRetention: true,
      responsibleRole: true,
      validationMethod: true,
      applicabilityRules: {
        select: {
          id: true,
          ruleType: true,
          ruleValue: true,
          effect: true,
          ruleGroup: true,
          matchMode: true,
        },
        orderBy: [
          {
            ruleGroup: "asc",
          },
          {
            effect: "asc",
          },
          {
            ruleType: "asc",
          },
          {
            ruleValue: "asc",
          },
        ],
      },
    },
    orderBy: [
      {
        accreditor: "asc",
      },
      {
        code: "asc",
      },
    ],
  });

  const facilityCapabilities = facility.capabilities as Array<{
    capability: string;
  }>;

  const normalizedCapabilities = new Set<string>(
    facilityCapabilities.map((item) =>
      normalizeValue(item.capability),
    ),
  );

  const accreditationValues = [
    facility.primaryAccreditor,
    ...facility.accreditations,
  ]
    .filter(
      (value): value is string =>
        typeof value === "string" &&
        value.trim().length > 0,
    )
    .map((value) => normalizeValue(value));

  const normalizedAccreditations =
    new Set<string>(accreditationValues);

  const facilityProfile: FacilityProfile = {
    facilityType: facility.facilityType,
    accreditations: normalizedAccreditations,
    capabilities: normalizedCapabilities,
  };

  const evaluatedStandards: ApplicableStandard[] =
    standards.map((standard) => {
      const applicability =
        evaluateStandardApplicability(
          standard.id,
          standard.applicabilityRules,
          facilityProfile,
        );

      return {
        id: standard.id,
        accreditor: standard.accreditor,
        chapter: standard.chapter,
        code: standard.code,
        slug: standard.slug,
        title: standard.title,
        intent: standard.intent,
        description: standard.description,
        requirement: standard.requirement,
        department: standard.department,
        domain: standard.domain,
        category: standard.category,
        riskLevel: standard.riskLevel,
        priority: standard.priority,
        evidenceFrequency:
          standard.evidenceFrequency,
        evidenceRetention:
          standard.evidenceRetention,
        responsibleRole:
          standard.responsibleRole,
        validationMethod:
          standard.validationMethod,
        applicability,
      };
    });

  const applicableStandards =
    evaluatedStandards.filter(
      (standard) => standard.applicability.applicable,
    );

  const excludedStandards =
    evaluatedStandards.filter(
      (standard) => !standard.applicability.applicable,
    );

  return {
    facility: {
      id: facility.id,
      name: facility.name,
      facilityType: facility.facilityType,
      primaryAccreditor:
        facility.primaryAccreditor,
      accreditations: facility.accreditations,
      capabilities: facilityCapabilities.map(
        (item) => item.capability,
      ),
    },
    applicableStandards,
    excludedStandards,
    totalActiveStandards: evaluatedStandards.length,
    totalApplicableStandards:
      applicableStandards.length,
    totalExcludedStandards:
      excludedStandards.length,
  };
}
