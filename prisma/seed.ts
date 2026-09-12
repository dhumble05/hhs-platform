import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../app/generated/prisma/client";
import { facilitiesOperationalTopics } from "./operationalTopics/facilities";
import type { HhsOperationalTopic } from "./operationalTopics/types";
import { cmsLifeSafetyStandards } from "./standards/cms/lifeSafety";
import { hhsBuildingMaintenanceStandards } from "./standards/hhs/buildingMaintenance";
import { hhsConstructionManagementStandards } from "./standards/hhs/constructionManagement";
import { hhsDocumentationManagementStandards } from "./standards/hhs/documentationManagement";
import { hhsEmergencyManagementStandards } from "./standards/hhs/emergencyManagement";
import { hhsEmergencyPowerStandards } from "./standards/hhs/emergencyPower";
import { hhsEnvironmentOfCareStandards } from "./standards/hhs/environmentOfCare";
import { hhsFireAlarmStandards } from "./standards/hhs/fireAlarm";
import { hhsFireDoorStandards } from "./standards/hhs/fireDoors";
import { hhsHazardousMaterialsStandards } from "./standards/hhs/hazardousMaterials";
import { hhsHvacStandards } from "./standards/hhs/hvac";
import { hhsInterimLifeSafetyMeasuresStandards } from "./standards/hhs/interimLifeSafetyMeasures";
import { hhsMeansOfEgressStandards } from "./standards/hhs/meansOfEgress";
import { hhsMedicalEquipmentStandards } from "./standards/hhs/medicalEquipment";
import { hhsMedicalGasStandards } from "./standards/hhs/medicalGas";
import { hhsSecurityManagementStandards } from "./standards/hhs/securityManagement";
import { hhsSprinklerStandards } from "./standards/hhs/sprinklers";
import { hhsStatementOfConditionsStandards } from "./standards/hhs/statementOfConditions";
import { hhsUtilitySystemsStandards } from "./standards/hhs/utilitySystems";
import { hhsWaterManagementStandards } from "./standards/hhs/waterManagement";
import { jointCommissionLifeSafety } from "./standards/jointCommission/lifeSafety";
import { jointCommissionPhysicalEnvironment } from "./standards/jointCommission/physicalEnvironment";
import type { HhsCoreStandard } from "./standards/types";

const connectionString = process.env.DIRECT_URL;

if (!connectionString) {
  throw new Error("DIRECT_URL is not configured.");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

const coreStandards: HhsCoreStandard[] = [
  ...jointCommissionPhysicalEnvironment,

  // Keep these temporarily until the older Joint Commission
  // Life Safety records are reviewed and migrated or retired.
  ...jointCommissionLifeSafety,

  ...cmsLifeSafetyStandards,

  // HHS operational knowledge controls.
  ...hhsFireAlarmStandards,
  ...hhsFireDoorStandards,
  ...hhsSprinklerStandards,
  ...hhsEmergencyPowerStandards,
  ...hhsMedicalGasStandards,
  ...hhsMeansOfEgressStandards,
  ...hhsHvacStandards,
  ...hhsUtilitySystemsStandards,
  ...hhsHazardousMaterialsStandards,
  ...hhsInterimLifeSafetyMeasuresStandards,
  ...hhsWaterManagementStandards,
  ...hhsSecurityManagementStandards,
  ...hhsEmergencyManagementStandards,
  ...hhsEnvironmentOfCareStandards,
  ...hhsMedicalEquipmentStandards,
  ...hhsBuildingMaintenanceStandards,
  ...hhsConstructionManagementStandards,
  ...hhsDocumentationManagementStandards,
  ...hhsStatementOfConditionsStandards,
];

const coreOperationalTopics: HhsOperationalTopic[] = [
  ...facilitiesOperationalTopics,
];

type AccreditorApplicabilityRuleDefinition = {
  standardAccreditor: string;
  facilityAccreditation: string;
  notes: string;
};

const accreditorApplicabilityRules: AccreditorApplicabilityRuleDefinition[] = [
  {
    standardAccreditor: "Joint Commission",
    facilityAccreditation: "Joint Commission",
    notes:
      "Joint Commission standards apply only when Joint Commission is selected as an accreditation or oversight body for the facility.",
  },
  {
    standardAccreditor: "CMS",
    facilityAccreditation: "CMS",
    notes:
      "CMS standards apply only when CMS is selected as an accreditation or oversight body for the facility.",
  },
];

function createSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function upsertStandard(
  standard: HhsCoreStandard,
): Promise<void> {
  const existingStandard =
    await prisma.standard.findFirst({
      where: {
        code: standard.code,
        accreditor: standard.accreditor,
        organizationId: null,
      },
      select: {
        id: true,
      },
    });

  const data = {
    accreditor: standard.accreditor,
    chapter: standard.chapter ?? null,
    code: standard.code,
    slug:
      standard.slug ??
      createSlug(standard.code),
    title: standard.title,

    intent: standard.intent ?? null,
    description:
      standard.description ?? null,
    requirement:
      standard.requirement ?? null,

    surveyorLooksFor:
      standard.surveyorLooksFor ?? [],
    evidenceExamples:
      standard.evidenceExamples ?? [],
    commonFindings:
      standard.commonFindings ?? [],
    keywords: standard.keywords ?? [],
    aiGuidance:
      standard.aiGuidance ?? null,

    referencedAuthorities:
      standard.referencedAuthorities ??
      undefined,

    evidenceFrequency:
      standard.evidenceFrequency ?? null,
    evidenceRetention:
      standard.evidenceRetention ?? null,
    responsibleRole:
      standard.responsibleRole ?? null,
    validationMethod:
      standard.validationMethod ?? null,

    department:
      standard.department ?? null,
    domain: standard.domain ?? null,
    category:
      standard.category ?? null,
    riskLevel:
      standard.riskLevel ?? null,
    priority:
      standard.priority ?? 1,

    version: standard.version ?? null,
    effectiveDate:
      standard.effectiveDate ?? null,
    status:
      standard.status ?? "Active",
    sourceUrl:
      standard.sourceUrl ?? null,
    isCustom:
      standard.isCustom ?? false,
  };

  if (existingStandard) {
    await prisma.standard.update({
      where: {
        id: existingStandard.id,
      },
      data,
    });

    console.log(
      `Updated standard ${standard.accreditor} — ${standard.code}`,
    );

    return;
  }

  await prisma.standard.create({
    data,
  });

  console.log(
    `Created standard ${standard.accreditor} — ${standard.code}`,
  );
}

async function upsertOperationalTopic(
  topic: HhsOperationalTopic,
): Promise<void> {
  const existingTopic =
    await prisma.operationalTopic.findFirst({
      where: {
        code: topic.code,
        organizationId: null,
      },
      select: {
        id: true,
      },
    });

  const data = {
    code: topic.code,
    slug:
      topic.slug ??
      createSlug(topic.code),
    name: topic.name,

    description:
      topic.description ?? null,
    aiGuidance:
      topic.aiGuidance ?? null,

    domain: topic.domain ?? null,
    category:
      topic.category ?? null,

    displayOrder:
      topic.displayOrder ?? 0,
    icon: topic.icon ?? null,
    color: topic.color ?? null,

    riskLevel:
      topic.riskLevel ?? null,
    priority:
      topic.priority ?? 1,

    keywords: topic.keywords ?? [],
    evidenceExamples:
      topic.evidenceExamples ?? [],
    surveyorLooksFor:
      topic.surveyorLooksFor ?? [],
    commonFindings:
      topic.commonFindings ?? [],

    evidenceFrequency:
      topic.evidenceFrequency ?? null,
    evidenceRetention:
      topic.evidenceRetention ?? null,
    responsibleRole:
      topic.responsibleRole ?? null,
    validationMethod:
      topic.validationMethod ?? null,

    status:
      topic.status ?? "Active",
    isCustom:
      topic.isCustom ?? false,
  };

  if (existingTopic) {
    await prisma.operationalTopic.update({
      where: {
        id: existingTopic.id,
      },
      data,
    });

    console.log(
      `Updated operational topic ${topic.code}`,
    );

    return;
  }

  await prisma.operationalTopic.create({
    data,
  });

  console.log(
    `Created operational topic ${topic.code}`,
  );
}

async function seedAccreditorApplicabilityRules(): Promise<number> {
  /*
   * This first applicability pass is intentionally narrow.
   *
   * It only limits standards that belong to a specific external
   * accreditor/oversight body. HHS operational standards are left
   * without an Accreditor rule so they remain universally available
   * until facility-type and capability rules are added in the next pass.
   */
  await prisma.standardApplicabilityRule.deleteMany({
    where: {
      ruleType: "Accreditor",
      standard: {
        organizationId: null,
      },
    },
  });

  let processedRules = 0;

  for (const definition of accreditorApplicabilityRules) {
    const standards = await prisma.standard.findMany({
      where: {
        organizationId: null,
        status: "Active",
        accreditor: definition.standardAccreditor,
      },
      select: {
        id: true,
        code: true,
        accreditor: true,
      },
    });

    for (const standard of standards) {
      await prisma.standardApplicabilityRule.create({
        data: {
          standardId: standard.id,
          ruleType: "Accreditor",
          ruleValue: definition.facilityAccreditation,
          effect: "Include",
          ruleGroup: "accreditor",
          matchMode: "All",
          notes: definition.notes,
        },
      });

      processedRules += 1;

      console.log(
        `Mapped ${standard.accreditor} — ${standard.code} to facility accreditation ${definition.facilityAccreditation}`,
      );
    }
  }

  return processedRules;
}

async function main(): Promise<void> {
  console.log(
    "Seeding HHS Compliance Knowledge Graph...",
  );

  console.log(
    `Processing ${coreStandards.length} standards...`,
  );

  for (const standard of coreStandards) {
    await upsertStandard(standard);
  }

  console.log(
    `Processing ${coreOperationalTopics.length} operational topics...`,
  );

  for (const topic of coreOperationalTopics) {
    await upsertOperationalTopic(topic);
  }

  console.log(
    "Processing accreditor applicability rules...",
  );

  const accreditorRuleCount =
    await seedAccreditorApplicabilityRules();

  console.log(
    [
      "HHS Compliance Knowledge Graph seeded successfully.",
      `${coreStandards.length} standards processed.`,
      `${coreOperationalTopics.length} operational topics processed.`,
      `${accreditorRuleCount} accreditor applicability rules processed.`,
    ].join(" "),
  );
}

main()
  .catch((error: unknown) => {
    console.error(
      "HHS KNOWLEDGE GRAPH SEED ERROR",
      error,
    );

    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
