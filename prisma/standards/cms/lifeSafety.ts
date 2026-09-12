import type { HhsCoreStandard } from "../types";

export const cmsLifeSafetyStandards: HhsCoreStandard[] = [
  {
    accreditor: "CMS",
    code: "HHS-CMS-LSC-FIRE-DRILL",
    title: "Fire Drill Documentation and Staff Response",
    chapter: "Life Safety Code Survey Readiness",
    description:
      "HHS evidence topic used to evaluate documentation of completed fire drills and staff response in healthcare settings.",
    requirement:
      "Evidence should demonstrate that fire drills were performed at the required frequency for the applicable occupancy and shift structure, staff response was evaluated, and identified deficiencies were corrected.",
    version: "CMS adopted NFPA 101 (2012)",
    category: "Fire Safety",
    riskLevel: "High",
    department: "Facilities",
    domain: "Life Safety",
    keywords: [
      "fire drill",
      "code red",
      "RACE",
      "PASS",
      "alarm activation",
      "smoke compartment",
      "defend in place",
      "staff response",
      "corrective action",
    ],
    evidenceExamples: [
      "Fire drill report",
      "Fire drill schedule",
      "Staff participation roster",
      "Observer evaluation",
      "Corrective action record",
      "Safety committee review",
    ],
    aiGuidance:
      "Recommend when evidence documents an actual fire drill, including date, time, location, scenario, participating roles, observed response, deficiencies, corrective actions, and follow-up. Do not treat a policy or training handout alone as proof that a drill occurred.",
    priority: 10,
    status: "Active",
    sourceUrl:
      "https://www.cms.gov/medicare/health-safety-standards/certification-compliance/life-safety-code-health-care-facilities-code-requirements",
    isCustom: true,
  },
  {
    accreditor: "CMS",
    code: "HHS-CMS-LSC-FIRE-RESPONSE",
    title: "Staff Knowledge of Fire Response Procedures",
    chapter: "Life Safety Code Survey Readiness",
    description:
      "HHS evidence topic for evaluating staff knowledge and execution of organizational fire response procedures.",
    requirement:
      "Evidence should show that staff understand alarm notification, rescue or relocation, containment, extinguisher use, and assigned responsibilities.",
    version: "CMS adopted NFPA 101 (2012)",
    category: "Fire Safety",
    riskLevel: "High",
    department: "Facilities",
    domain: "Life Safety",
    keywords: [
      "staff knowledge",
      "fire response",
      "RACE",
      "PASS",
      "relocation",
      "containment",
      "fire extinguisher",
      "alarm",
    ],
    evidenceExamples: [
      "Fire drill observer checklist",
      "Staff competency record",
      "Fire response training record",
      "Drill critique",
    ],
    aiGuidance:
      "Recommend when the document evaluates what staff actually did or demonstrated during a drill. General policy language without performance evidence is insufficient.",
    priority: 9,
    status: "Active",
    sourceUrl:
      "https://www.cms.gov/medicare/health-safety-standards/certification-compliance/life-safety-code-health-care-facilities-code-requirements",
    isCustom: true,
  },
  {
    accreditor: "CMS",
    code: "HHS-CMS-LSC-FIRE-CORRECTIVE-ACTION",
    title: "Fire Drill Findings and Corrective Action",
    chapter: "Life Safety Code Survey Readiness",
    description:
      "HHS evidence topic for evaluating whether fire drill deficiencies are documented, assigned, corrected, and followed through to closure.",
    requirement:
      "Evidence should identify observed deficiencies, responsible parties, target dates, completed actions, and verification of effectiveness.",
    version: "CMS adopted NFPA 101 (2012)",
    category: "Fire Safety",
    riskLevel: "Moderate",
    department: "Facilities",
    domain: "Life Safety",
    keywords: [
      "corrective action",
      "deficiency",
      "opportunity for improvement",
      "responsible person",
      "due date",
      "follow-up",
      "closure",
    ],
    evidenceExamples: [
      "Corrective action plan",
      "After-action report",
      "Training follow-up",
      "Safety committee minutes",
      "Completion verification",
    ],
    aiGuidance:
      "Recommend when findings are linked to specific corrective actions. Give lower readiness when actions lack ownership, completion dates, or proof of closure.",
    priority: 8,
    status: "Active",
    sourceUrl:
      "https://www.cms.gov/medicare/health-safety-standards/certification-compliance/life-safety-code-health-care-facilities-code-requirements",
    isCustom: true,
  },
  {
    accreditor: "CMS",
    code: "HHS-CMS-LSC-FIRE-DRILL-PROGRAM",
    title: "Organization-Wide Fire Drill Program",
    chapter: "Life Safety Code Survey Readiness",
    description:
      "HHS evidence topic for evaluating whether an organization maintains a complete fire drill program rather than isolated drill records.",
    requirement:
      "Evidence should demonstrate an established schedule, applicable shifts and locations, recurring completion, performance evaluation, and program oversight.",
    version: "CMS adopted NFPA 101 (2012)",
    category: "Fire Safety",
    riskLevel: "High",
    department: "Facilities",
    domain: "Life Safety",
    keywords: [
      "annual schedule",
      "quarterly",
      "shifts",
      "locations",
      "fire drill program",
      "tracking log",
      "oversight",
    ],
    evidenceExamples: [
      "Annual fire drill schedule",
      "Fire drill tracking log",
      "Completed drill reports",
      "Committee oversight records",
      "Annual program evaluation",
    ],
    aiGuidance:
      "A single drill report may support drill completion but should not by itself prove the full organization-wide program. Look for schedule coverage, recurring completion, multiple shifts or areas when applicable, and leadership oversight.",
    priority: 10,
    status: "Active",
    sourceUrl:
      "https://www.cms.gov/medicare/health-safety-standards/certification-compliance/life-safety-code-health-care-facilities-code-requirements",
    isCustom: true,
  },
];