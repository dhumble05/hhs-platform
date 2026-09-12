import type { HhsCoreStandard } from "../types";

export const jointCommissionLifeSafety: HhsCoreStandard[] = [
  {
    accreditor: "Joint Commission",
    chapter: "Life Safety",

    code: "LS.01.02.05",

    title: "Manage Fire Safety Risks",

    intent:
      "Maintain an effective fire safety program that protects patients, staff, and visitors.",

    surveyorLooksFor: [
      "Documented fire drills",
      "Staff participation",
      "Corrective actions",
      "Fire response education",
      "Ongoing compliance",
    ],

    evidenceExamples: [
      "Quarterly fire drill reports",
      "Attendance rosters",
      "Fire response training",
      "Corrective action logs",
      "Environment of Care Committee minutes",
    ],

    commonFindings: [
      "Missing drill documentation",
      "Incomplete attendance",
      "Corrective actions not completed",
      "Missing follow-up",
    ],

    keywords: [
      "fire drill",
      "RACE",
      "PASS",
      "fire safety",
      "life safety",
    ],

    aiGuidance:
      "Determine whether documentation demonstrates an effective fire drill program and verify completion of corrective actions.",

    referencedAuthorities: [
      {
        authority: "NFPA 101",
        edition: "2012",
      },
      {
        authority: "NFPA 72",
      },
      {
        authority: "CMS",
      },
    ],

    department: "Facilities",

    domain: "Life Safety",

    category: "Fire Safety",

    riskLevel: "High",

    priority: 1,

    version: "2025",

    status: "Active",

    sourceUrl:
      "https://www.jointcommission.org",

    isCustom: false,
  },
];