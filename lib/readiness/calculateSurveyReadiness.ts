import "server-only";

import {
  evaluateFacilityApplicability,
  type ApplicableStandard,
} from "@/lib/applicability/evaluateFacilityApplicability";
import { prisma } from "@/lib/prisma";

export type ReadinessStatus =
  | "Ready"
  | "Needs Attention"
  | "At Risk"
  | "Missing";

export type StandardReadinessEvidence = {
  evidenceId: string;
  evidenceTitle: string;
  evidenceStatus: string;
  expirationDate: Date | null;
  mappingSource: string;
  confidence: number | null;
  evidenceStrength: string | null;
  mappedRequirements: string[];
  missingRequirements: string[];
  surveyImpact: string | null;
  isVerified: boolean;
};

export type StandardReadinessResult = {
  standardId: string;
  accreditor: string;
  chapter: string | null;
  code: string;
  title: string;
  domain: string | null;
  category: string | null;
  riskLevel: string | null;
  priority: number;
  score: number;
  status: ReadinessStatus;
  reason: string;
  hasVerifiedEvidence: boolean;
  hasCurrentEvidence: boolean;
  evidence: StandardReadinessEvidence[];
};

export type ReadinessGroup = {
  key: string;
  label: string;
  score: number;
  applicableStandards: number;
  readyStandards: number;
  needsAttentionStandards: number;
  atRiskStandards: number;
  missingStandards: number;
};

export type FacilitySurveyReadiness = {
  facility: {
    id: string;
    name: string;
    facilityType: string;
    primaryAccreditor: string | null;
    capabilities: string[];
  };
  overallReadiness: number;
  applicableStandards: number;
  readyStandards: number;
  needsAttentionStandards: number;
  atRiskStandards: number;
  missingStandards: number;
  verifiedStandards: number;
  provisionalStandards: number;
  standards: StandardReadinessResult[];
  readinessByDomain: ReadinessGroup[];
  readinessByAccreditor: ReadinessGroup[];
  calculatedAt: Date;
};

type CalculateSurveyReadinessInput = {
  facilityId: string;
  organizationId: string;
};

type EvidenceMappingRecord = {
  evidenceId: string;
  standardId: string;
  mappingSource: string;
  confidence: number | null;
  evidenceStrength: string | null;
  mappedRequirements: string[];
  missingRequirements: string[];
  surveyImpact: string | null;
  isVerified: boolean;
  evidence: {
    id: string;
    title: string;
    status: string;
    expirationDate: Date | null;
  };
};

function isExpired(date: Date | null): boolean {
  return Boolean(date && date < new Date());
}

function normalizeStrength(
  value: string | null,
): "Complete" | "Partial" | "Insufficient" | null {
  const normalized = value?.trim().toLowerCase();

  if (normalized === "complete") {
    return "Complete";
  }

  if (normalized === "partial") {
    return "Partial";
  }

  if (normalized === "insufficient") {
    return "Insufficient";
  }

  return null;
}

function mappingScore(mapping: EvidenceMappingRecord): number {
  if (isExpired(mapping.evidence.expirationDate)) {
    return 0;
  }

  const strength = normalizeStrength(
    mapping.evidenceStrength,
  );

  if (strength === "Complete") {
    return 100;
  }

  if (strength === "Partial") {
    return 50;
  }

  if (strength === "Insufficient") {
    return 0;
  }

  /*
   * Legacy mappings created before evidence-strength
   * classification receive conservative provisional credit.
   */
  if (mapping.isVerified) {
    return 75;
  }

  if (
    typeof mapping.confidence === "number" &&
    mapping.confidence >= 90
  ) {
    return 50;
  }

  return 0;
}

function statusFromScore(
  score: number,
  hasEvidence: boolean,
): ReadinessStatus {
  if (!hasEvidence) {
    return "Missing";
  }

  if (score >= 90) {
    return "Ready";
  }

  if (score >= 50) {
    return "Needs Attention";
  }

  return "At Risk";
}

function getStandardReason(
  score: number,
  evidence: EvidenceMappingRecord[],
): string {
  if (evidence.length === 0) {
    return "No current evidence is mapped to this applicable standard.";
  }

  const currentEvidence = evidence.filter(
    (mapping) =>
      !isExpired(mapping.evidence.expirationDate),
  );

  if (currentEvidence.length === 0) {
    return "Mapped evidence exists, but every supporting record is expired.";
  }

  const bestMapping = [...currentEvidence].sort(
    (first, second) =>
      mappingScore(second) - mappingScore(first),
  )[0];

  const strength = normalizeStrength(
    bestMapping?.evidenceStrength ?? null,
  );

  if (score >= 90 && strength === "Complete") {
    return bestMapping.surveyImpact?.trim() ||
      "Current evidence completely supports the mapped requirement.";
  }

  if (score >= 50) {
    return bestMapping?.surveyImpact?.trim() ||
      "Current evidence provides partial support and requires additional documentation or review.";
  }

  return bestMapping?.surveyImpact?.trim() ||
    "Mapped evidence is insufficient to demonstrate readiness for this standard.";
}

function summarizeGroup(
  key: string,
  label: string,
  standards: StandardReadinessResult[],
): ReadinessGroup {
  const totalScore = standards.reduce(
    (sum, standard) => sum + standard.score,
    0,
  );

  return {
    key,
    label,
    score:
      standards.length > 0
        ? Math.round(totalScore / standards.length)
        : 0,
    applicableStandards: standards.length,
    readyStandards: standards.filter(
      (standard) => standard.status === "Ready",
    ).length,
    needsAttentionStandards: standards.filter(
      (standard) =>
        standard.status === "Needs Attention",
    ).length,
    atRiskStandards: standards.filter(
      (standard) => standard.status === "At Risk",
    ).length,
    missingStandards: standards.filter(
      (standard) => standard.status === "Missing",
    ).length,
  };
}

function buildGroupedReadiness(
  standards: StandardReadinessResult[],
  getKey: (
    standard: StandardReadinessResult,
  ) => string | null,
  fallbackLabel: string,
): ReadinessGroup[] {
  const groups = new Map<
    string,
    StandardReadinessResult[]
  >();

  for (const standard of standards) {
    const key = getKey(standard)?.trim() || fallbackLabel;
    const existing = groups.get(key) ?? [];

    existing.push(standard);
    groups.set(key, existing);
  }

  return Array.from(groups.entries())
    .map(([key, groupedStandards]) =>
      summarizeGroup(key, key, groupedStandards),
    )
    .sort((first, second) =>
      first.label.localeCompare(second.label),
    );
}

function mapStandardResult(
  standard: ApplicableStandard,
  mappings: EvidenceMappingRecord[],
): StandardReadinessResult {
  const currentMappings = mappings.filter(
    (mapping) =>
      !isExpired(mapping.evidence.expirationDate),
  );

  const score =
    currentMappings.length > 0
      ? Math.max(
          ...currentMappings.map((mapping) =>
            mappingScore(mapping),
          ),
        )
      : 0;

  const evidence = mappings.map((mapping) => ({
    evidenceId: mapping.evidence.id,
    evidenceTitle: mapping.evidence.title,
    evidenceStatus: mapping.evidence.status,
    expirationDate: mapping.evidence.expirationDate,
    mappingSource: mapping.mappingSource,
    confidence: mapping.confidence,
    evidenceStrength: mapping.evidenceStrength,
    mappedRequirements: mapping.mappedRequirements,
    missingRequirements: mapping.missingRequirements,
    surveyImpact: mapping.surveyImpact,
    isVerified: mapping.isVerified,
  }));

  return {
    standardId: standard.id,
    accreditor: standard.accreditor,
    chapter: standard.chapter,
    code: standard.code,
    title: standard.title,
    domain: standard.domain,
    category: standard.category,
    riskLevel: standard.riskLevel,
    priority: standard.priority,
    score,
    status: statusFromScore(
      score,
      currentMappings.length > 0,
    ),
    reason: getStandardReason(score, mappings),
    hasVerifiedEvidence: currentMappings.some(
      (mapping) => mapping.isVerified,
    ),
    hasCurrentEvidence: currentMappings.length > 0,
    evidence,
  };
}

export async function calculateSurveyReadiness({
  facilityId,
  organizationId,
}: CalculateSurveyReadinessInput): Promise<FacilitySurveyReadiness> {
  const applicability =
    await evaluateFacilityApplicability({
      facilityId,
      organizationId,
    });

  const applicableStandardIds =
    applicability.applicableStandards.map(
      (standard) => standard.id,
    );

  const rawMappings =
    applicableStandardIds.length > 0
      ? await prisma.evidenceStandard.findMany({
          where: {
            standardId: {
              in: applicableStandardIds,
            },
            mappingSource: {
              not: "AI-Rejected",
            },
            evidence: {
              organizationId,
              facilityId,
            },
          },
          select: {
            evidenceId: true,
            standardId: true,
            mappingSource: true,
            confidence: true,
            evidenceStrength: true,
            mappedRequirements: true,
            missingRequirements: true,
            surveyImpact: true,
            isVerified: true,
            evidence: {
              select: {
                id: true,
                title: true,
                status: true,
                expirationDate: true,
              },
            },
          },
        })
      : [];

  const mappings =
    rawMappings as EvidenceMappingRecord[];

  const mappingsByStandardId = new Map<
    string,
    EvidenceMappingRecord[]
  >();

  for (const mapping of mappings) {
    const existing =
      mappingsByStandardId.get(mapping.standardId) ?? [];

    existing.push(mapping);
    mappingsByStandardId.set(
      mapping.standardId,
      existing,
    );
  }

  const standards =
    applicability.applicableStandards.map((standard) =>
      mapStandardResult(
        standard,
        mappingsByStandardId.get(standard.id) ?? [],
      ),
    );

  const overallReadiness =
    standards.length > 0
      ? Math.round(
          standards.reduce(
            (sum, standard) => sum + standard.score,
            0,
          ) / standards.length,
        )
      : 0;

  const readyStandards = standards.filter(
    (standard) => standard.status === "Ready",
  ).length;

  const needsAttentionStandards = standards.filter(
    (standard) =>
      standard.status === "Needs Attention",
  ).length;

  const atRiskStandards = standards.filter(
    (standard) => standard.status === "At Risk",
  ).length;

  const missingStandards = standards.filter(
    (standard) => standard.status === "Missing",
  ).length;

  const verifiedStandards = standards.filter(
    (standard) => standard.hasVerifiedEvidence,
  ).length;

  const provisionalStandards = standards.filter(
    (standard) =>
      standard.hasCurrentEvidence &&
      !standard.hasVerifiedEvidence,
  ).length;

  return {
    facility: applicability.facility,
    overallReadiness,
    applicableStandards: standards.length,
    readyStandards,
    needsAttentionStandards,
    atRiskStandards,
    missingStandards,
    verifiedStandards,
    provisionalStandards,
    standards,
    readinessByDomain: buildGroupedReadiness(
      standards,
      (standard) => standard.domain,
      "Uncategorized",
    ),
    readinessByAccreditor: buildGroupedReadiness(
      standards,
      (standard) => standard.accreditor,
      "Unspecified",
    ),
    calculatedAt: new Date(),
  };
}