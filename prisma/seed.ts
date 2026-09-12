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

const WRITE_BATCH_SIZE = 20;

const coreStandards: HhsCoreStandard[] = [
  ...jointCommissionPhysicalEnvironment,
  ...jointCommissionLifeSafety,
  ...cmsLifeSafetyStandards,
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

function standardKey(accreditor: string, code: string): string {
  return `${accreditor}::${code}`;
}

async function runInBatches<T>(
  items: T[],
  batchSize: number,
  worker: (item: T) => Promise<void>,
): Promise<void> {
  for (let index = 0; index < items.length; index += batchSize) {
    const batch = items.slice(index, index + batchSize);

    await Promise.all(batch.map((item) => worker(item)));

    const completed = Math.min(index + batch.length, items.length);

    console.log(`Processed ${completed}/${items.length}`);
  }
}

function buildStandardData(standard: HhsCoreStandard) {
  return {
    accreditor: standard.accreditor,
    chapter: standard.chapter ?? null,
    code: standard.code,
    slug: standard.slug ?? createSlug(standard.code),
    title: standard.title,
    intent: standard.intent ?? null,
    description: standard.description ?? null,
    requirement: standard.requirement ?? null,
    surveyorLooksFor: standard.surveyorLooksFor ?? [],
    evidenceExamples: standard.evidenceExamples ?? [],
    commonFindings: standard.commonFindings ?? [],
    keywords: standard.keywords ?? [],
    aiGuidance: standard.aiGuidance ?? null,
    referencedAuthorities:
      standard.referencedAuthorities ?? undefined,
    evidenceFrequency: standard.evidenceFrequency ?? null,
    evidenceRetention: standard.evidenceRetention ?? null,
    responsibleRole: standard.responsibleRole ?? null,
    validationMethod: standard.validationMethod ?? null,
    department: standard.department ?? null,
    domain: standard.domain ?? null,
    category: standard.category ?? null,
    riskLevel: standard.riskLevel ?? null,
    priority: standard.priority ?? 1,
    version: standard.version ?? null,
    effectiveDate: standard.effectiveDate ?? null,
    status: standard.status ?? "Active",
    sourceUrl: standard.sourceUrl ?? null,
    isCustom: standard.isCustom ?? false,
  };
}

async function seedStandards(): Promise<void> {
  const existingStandards = await prisma.standard.findMany({
    where: {
      organizationId: null,
    },
    select: {
      id: true,
      accreditor: true,
      code: true,
    },
  });

  const existingByKey = new Map(
    existingStandards.map((standard) => [
      standardKey(standard.accreditor, standard.code),
      standard.id,
    ]),
  );

  await runInBatches(
    coreStandards,
    WRITE_BATCH_SIZE,
    async (standard) => {
      const key = standardKey(
        standard.accreditor,
        standard.code,
      );
      const existingId = existingByKey.get(key);
      const data = buildStandardData(standard);

      if (existingId) {
        await prisma.standard.update({
          where: {
            id: existingId,
          },
          data,
        });
        return;
      }

      const createdStandard = await prisma.standard.create({
        data,
        select: {
          id: true,
        },
      });

      existingByKey.set(key, createdStandard.id);
    },
  );
}

function buildOperationalTopicData(topic: HhsOperationalTopic) {
  return {
    code: topic.code,
    slug: topic.slug ?? createSlug(topic.code),
    name: topic.name,
    description: topic.description ?? null,
    aiGuidance: topic.aiGuidance ?? null,
    domain: topic.domain ?? null,
    category: topic.category ?? null,
    displayOrder: topic.displayOrder ?? 0,
    icon: topic.icon ?? null,
    color: topic.color ?? null,
    riskLevel: topic.riskLevel ?? null,
    priority: topic.priority ?? 1,
    keywords: topic.keywords ?? [],
    evidenceExamples: topic.evidenceExamples ?? [],
    surveyorLooksFor: topic.surveyorLooksFor ?? [],
    commonFindings: topic.commonFindings ?? [],
    evidenceFrequency: topic.evidenceFrequency ?? null,
    evidenceRetention: topic.evidenceRetention ?? null,
    responsibleRole: topic.responsibleRole ?? null,
    validationMethod: topic.validationMethod ?? null,
    status: topic.status ?? "Active",
    isCustom: topic.isCustom ?? false,
  };
}

async function seedOperationalTopics(): Promise<void> {
  const existingTopics = await prisma.operationalTopic.findMany({
    where: {
      organizationId: null,
    },
    select: {
      id: true,
      code: true,
    },
  });

  const existingByCode = new Map(
    existingTopics.map((topic) => [topic.code, topic.id]),
  );

  await runInBatches(
    coreOperationalTopics,
    WRITE_BATCH_SIZE,
    async (topic) => {
      const existingId = existingByCode.get(topic.code);
      const data = buildOperationalTopicData(topic);

      if (existingId) {
        await prisma.operationalTopic.update({
          where: {
            id: existingId,
          },
          data,
        });
        return;
      }

      const createdTopic = await prisma.operationalTopic.create({
        data,
        select: {
          id: true,
        },
      });

      existingByCode.set(topic.code, createdTopic.id);
    },
  );
}

async function seedAccreditorApplicabilityRules(): Promise<number> {
  const supportedAccreditors =
    accreditorApplicabilityRules.map(
      (definition) => definition.standardAccreditor,
    );

  const standards = await prisma.standard.findMany({
    where: {
      organizationId: null,
      status: "Active",
      accreditor: {
        in: supportedAccreditors,
      },
    },
    select: {
      id: true,
      accreditor: true,
    },
  });

  await prisma.standardApplicabilityRule.deleteMany({
    where: {
      ruleType: "Accreditor",
      standard: {
        organizationId: null,
      },
    },
  });

  const definitionByAccreditor = new Map(
    accreditorApplicabilityRules.map((definition) => [
      definition.standardAccreditor,
      definition,
    ]),
  );

  const ruleData = standards.flatMap((standard) => {
    const definition = definitionByAccreditor.get(
      standard.accreditor,
    );

    if (!definition) {
      return [];
    }

    return [
      {
        standardId: standard.id,
        ruleType: "Accreditor",
        ruleValue: definition.facilityAccreditation,
        effect: "Include",
        ruleGroup: "accreditor",
        matchMode: "All",
        notes: definition.notes,
      },
    ];
  });

  if (ruleData.length > 0) {
    await prisma.standardApplicabilityRule.createMany({
      data: ruleData,
      skipDuplicates: true,
    });
  }

  return ruleData.length;
}

async function main(): Promise<void> {
  console.log(
    "Seeding HHS Compliance Knowledge Graph...",
  );

  console.log(
    `Processing ${coreStandards.length} standards in batches of ${WRITE_BATCH_SIZE}...`,
  );

  await seedStandards();

  console.log(
    `Processing ${coreOperationalTopics.length} operational topics...`,
  );

  await seedOperationalTopics();

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
