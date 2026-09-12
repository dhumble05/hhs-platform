import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed healthcare Statement of Conditions survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to evaluate life-safety documentation, building
 * condition risks, deficiencies, plans for improvement, equivalencies,
 * drawings, and survey-readiness evidence.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsStatementOfConditionsStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-PROG-001",
    slug: "hhs-statement-of-conditions-management-program",
    title: "Statement of Conditions Management Program",
    intent:
      "The organization maintains a coordinated program for identifying, documenting, evaluating, correcting, and monitoring life-safety and physical-environment deficiencies.",
    description:
      "The Statement of Conditions management program establishes governance for life-safety drawings, building assessments, deficiency tracking, plans for improvement, interim life safety measures, equivalencies, waivers, corrective actions, documentation, and periodic evaluation.",
    requirement:
      "Maintain and implement a documented Statement of Conditions management program that identifies applicable buildings and occupancies, assigns responsibilities, maintains current life-safety information, evaluates deficiencies, tracks corrective actions, and supports survey readiness.",
    surveyorLooksFor: [
      "A current Statement of Conditions management process",
      "Defined responsibility for life-safety documentation",
      "Current building and occupancy information",
      "A complete life-safety deficiency inventory",
      "Documented corrective-action tracking",
      "Periodic program evaluation",
    ],
    evidenceExamples: [
      "Statement of Conditions policy",
      "Life-safety management procedure",
      "Building inventory",
      "Life-safety deficiency log",
      "Plan for Improvement tracker",
      "Annual program evaluation",
    ],
    commonFindings: [
      "The program is outdated",
      "Responsibilities are unclear",
      "Life-safety records are fragmented",
      "Deficiencies are not centrally tracked",
      "Corrective actions lack due dates",
      "The program is not formally evaluated",
    ],
    keywords: [
      "statement of conditions",
      "SOC program",
      "life safety documentation",
      "plan for improvement",
      "PFI",
      "life safety deficiency",
      "building compliance",
      "survey readiness",
    ],
    aiGuidance:
      "Map organization-wide Statement of Conditions policies, building inventories, life-safety drawings, deficiency logs, plans for improvement, ILSM records, equivalencies, corrective actions, and evaluations. A policy alone should not be treated as proof that deficiencies are actively managed.",
    evidenceFrequency:
      "Reviewed at least annually and whenever buildings, occupancies, life-safety features, responsibilities, or applicable requirements materially change",
    evidenceRetention:
      "Current program documents and permanent supporting records retained according to regulatory, legal, survey, and organizational requirements",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document review, building-file sampling, physical inspection, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Statement of Conditions Management Framework",
        notes:
          "Original HHS operational control intended for cross-accreditor survey readiness.",
      },
      {
        authority: "CMS",
        title: "Life Safety Code Requirements",
        notes:
          "Apply current federal requirements and interpretive guidance.",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
        citation: "NFPA 101",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-BLDG-001",
    slug: "hhs-building-and-occupancy-inventory",
    title: "Building and Occupancy Inventory",
    intent:
      "The organization maintains an accurate inventory of all buildings, additions, occupancies, construction types, and life-safety classifications within the scope of the program.",
    description:
      "The building inventory identifies facility name, address, use, occupancy classification, construction type, building age, additions, stories, square footage, sprinkler status, smoke compartments, and applicable code basis.",
    requirement:
      "Maintain a current building and occupancy inventory for all applicable healthcare buildings and update it when construction, use, ownership, occupancy, or physical configuration changes.",
    surveyorLooksFor: [
      "All applicable buildings are included",
      "Occupancy classifications are documented",
      "Construction type is identified",
      "Building additions are separately recognized when required",
      "Sprinkler and fire-protection status is current",
      "Information matches actual facility use",
    ],
    evidenceExamples: [
      "Building inventory",
      "Occupancy classification record",
      "Construction-type summary",
      "Facility profile",
      "Campus map",
      "Building-code analysis",
    ],
    commonFindings: [
      "Buildings or additions are omitted",
      "Occupancy classifications are inaccurate",
      "Mixed occupancies are not addressed",
      "Construction type is unknown",
      "Sprinkler status is outdated",
      "Inventory information conflicts with drawings",
    ],
    keywords: [
      "building inventory",
      "occupancy classification",
      "construction type",
      "healthcare occupancy",
      "ambulatory healthcare occupancy",
      "mixed occupancy",
      "facility profile",
      "building code summary",
    ],
    aiGuidance:
      "Map building inventories, code analyses, campus maps, occupancy records, construction documents, and facility profiles. Compare documented use against actual operations and flag inconsistencies between building records and drawings.",
    evidenceFrequency:
      "Continuously updated and formally reviewed at least annually",
    evidenceRetention:
      "Retained as permanent facility and life-safety records",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document review, drawing comparison, site verification, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Building and Occupancy Inventory Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
        citation: "NFPA 101",
      },
      {
        authority: "CMS",
        title: "Life Safety Code Survey Requirements",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Building Inventory",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-DRAW-001",
    slug: "hhs-life-safety-drawings",
    title: "Life Safety Drawings",
    intent:
      "Current life-safety drawings accurately represent the building configuration and critical fire- and smoke-protection features.",
    description:
      "Life-safety drawings identify occupancy classifications, smoke compartments, fire barriers, smoke barriers, hazardous areas, suites, exits, exit access, horizontal exits, shafts, fire walls, sprinkler coverage, and other applicable life-safety features.",
    requirement:
      "Maintain current, accurate, legible, and accessible life-safety drawings for each applicable building and revise them after construction, renovation, occupancy changes, or discovery of inaccuracies.",
    surveyorLooksFor: [
      "Current life-safety drawings for each building",
      "Clearly identified smoke compartments",
      "Fire and smoke barriers shown",
      "Suites and exits identified",
      "Hazardous areas marked",
      "Drawings match actual field conditions",
    ],
    evidenceExamples: [
      "Life-safety drawings",
      "Architectural floor plans",
      "Barrier-management drawings",
      "Smoke-compartment plan",
      "Suite plan",
      "Drawing revision log",
    ],
    commonFindings: [
      "Drawings are outdated",
      "Barrier ratings are missing",
      "Smoke compartments are inaccurate",
      "Suites are not identified",
      "Renovations are not reflected",
      "Field conditions do not match the drawings",
    ],
    keywords: [
      "life safety drawings",
      "life safety plans",
      "smoke compartment drawing",
      "fire barrier plan",
      "suite plan",
      "egress drawing",
      "barrier drawing",
      "life safety floor plan",
    ],
    aiGuidance:
      "Map current drawings, revision logs, architectural plans, smoke-compartment diagrams, suite plans, and barrier records. Compare drawing dates and revision status to recent construction and identified field conditions.",
    evidenceFrequency:
      "Reviewed at least annually and revised after construction, renovation, occupancy changes, barrier changes, or identified inaccuracies",
    evidenceRetention:
      "Retained as permanent facility records, including superseded versions according to organizational requirements",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Drawing review, physical field verification, project-file comparison, and survey tracing",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Life Safety Drawing Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
        citation: "NFPA 101",
      },
      {
        authority: "CMS",
        title: "Life Safety Code Survey Documentation Requirements",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Life Safety Drawings",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-ASSMT-001",
    slug: "hhs-life-safety-building-assessment",
    title: "Life Safety Building Assessment",
    intent:
      "The organization periodically evaluates each applicable building for compliance with life-safety requirements and actual field conditions.",
    description:
      "The assessment addresses construction type, occupancy, egress, fire barriers, smoke barriers, suites, hazardous areas, vertical openings, fire protection systems, interior finishes, utilities, and other applicable life-safety features.",
    requirement:
      "Conduct and document a comprehensive life-safety assessment of each applicable building, identify deficiencies, assign risk, establish corrective actions, and update the assessment when building conditions materially change.",
    surveyorLooksFor: [
      "A complete building-specific assessment",
      "Coverage of major life-safety features",
      "Field verification of conditions",
      "Identification of deficiencies",
      "Risk prioritization",
      "Linkage to corrective-action tracking",
    ],
    evidenceExamples: [
      "Life-safety assessment",
      "Building compliance survey",
      "Code-compliance checklist",
      "Deficiency photographs",
      "Risk-ranking worksheet",
      "Corrective-action log",
    ],
    commonFindings: [
      "The assessment is only a desk review",
      "Major building areas are omitted",
      "Field conditions are not verified",
      "Deficiencies are not transferred to tracking",
      "Risk ratings are inconsistent",
      "Assessments are not updated after construction",
    ],
    keywords: [
      "life safety assessment",
      "building compliance assessment",
      "life safety survey",
      "code compliance review",
      "facility life safety audit",
      "building deficiency assessment",
      "NFPA 101 assessment",
      "life safety inspection",
    ],
    aiGuidance:
      "Map building-specific assessments, checklists, photographs, risk rankings, deficiency logs, corrective actions, and reassessments. Generic checklists without facility-specific findings should receive reduced confidence.",
    evidenceFrequency:
      "At intervals established by policy and after significant construction, occupancy, system, or code-basis changes",
    evidenceRetention:
      "Retained with permanent life-safety and building records",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document review, field inspection, drawing comparison, and deficiency verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Life Safety Building Assessment Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
        citation: "NFPA 101",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Building Assessment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-DEF-001",
    slug: "hhs-life-safety-deficiency-identification",
    title: "Life Safety Deficiency Identification",
    intent:
      "Life-safety deficiencies are promptly recognized, clearly documented, risk assessed, and entered into a controlled corrective-action process.",
    description:
      "Deficiencies may be identified through inspections, testing, construction, surveys, rounds, work orders, incidents, staff reports, consultants, or authority findings.",
    requirement:
      "Document each identified life-safety deficiency with a clear description, exact location, applicable requirement, risk level, date identified, interim controls, responsible owner, and corrective-action status.",
    surveyorLooksFor: [
      "Clear deficiency descriptions",
      "Specific building and location information",
      "Applicable requirement or life-safety feature",
      "Risk assessment",
      "Assigned responsibility",
      "Linkage to corrective action",
    ],
    evidenceExamples: [
      "Life-safety deficiency log",
      "Inspection finding",
      "Survey report",
      "Deficiency photograph",
      "Work order",
      "Risk assessment",
    ],
    commonFindings: [
      "Deficiencies are described vaguely",
      "Locations are incomplete",
      "Duplicate findings are created",
      "Risk is not assessed",
      "Deficiencies remain outside the tracking system",
      "Responsible owners are not assigned",
    ],
    keywords: [
      "life safety deficiency",
      "code deficiency",
      "survey finding",
      "life safety finding",
      "building deficiency",
      "deficiency tracking",
      "NFPA finding",
      "compliance gap",
    ],
    aiGuidance:
      "Map inspection findings, work orders, survey reports, photographs, risk assessments, and deficiency logs. Normalize duplicate findings and flag entries without exact location, ownership, or corrective status.",
    evidenceFrequency:
      "Each time a life-safety deficiency or suspected noncompliant condition is identified",
    evidenceRetention:
      "Retained through verified correction and according to survey, regulatory, and organizational requirements",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Record review, physical verification, duplicate analysis, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Life Safety Deficiency Identification Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
        citation: "NFPA 101",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Deficiency Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-RISK-001",
    slug: "hhs-life-safety-deficiency-risk-classification",
    title: "Life Safety Deficiency Risk Classification",
    intent:
      "Life-safety deficiencies are prioritized according to their potential impact on patients, staff, visitors, operations, and fire protection.",
    description:
      "Risk classification considers severity, likelihood, affected population, duration, compensating features, system impairment, egress impact, barrier impact, detection capability, and emergency-response capability.",
    requirement:
      "Apply a documented and consistent risk-classification method to life-safety deficiencies and use the result to determine urgency, escalation, interim controls, and corrective-action priority.",
    surveyorLooksFor: [
      "A defined risk-ranking method",
      "Consistent scoring criteria",
      "Consideration of patient vulnerability",
      "Consideration of fire-protection impairment",
      "Linkage to ILSM and escalation",
      "Prioritization of critical conditions",
    ],
    evidenceExamples: [
      "Risk-ranking matrix",
      "Deficiency risk assessment",
      "Priority classification",
      "ILSM determination",
      "Escalation record",
      "Leadership notification",
    ],
    commonFindings: [
      "Risk ratings are subjective",
      "Similar deficiencies receive different priorities",
      "Patient vulnerability is not considered",
      "Critical impairments are not escalated",
      "Risk ratings do not trigger interim controls",
      "Long-open deficiencies are not reevaluated",
    ],
    keywords: [
      "life safety risk ranking",
      "deficiency risk assessment",
      "compliance risk classification",
      "life safety priority",
      "critical deficiency",
      "ILSM determination",
      "risk matrix",
      "survey risk",
    ],
    aiGuidance:
      "Map risk matrices, deficiency assessments, ILSM determinations, leadership notifications, and escalation records. Recalculate or challenge risk when the assigned level conflicts with the deficiency's actual effect on egress, barriers, suppression, detection, or vulnerable occupants.",
    evidenceFrequency:
      "At initial identification and whenever duration, scope, occupancy, controls, or building conditions change",
    evidenceRetention:
      "Retained with the deficiency and corrective-action record",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document review, field verification, risk-method comparison, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Life Safety Deficiency Risk Classification Framework",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Risk Classification",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-PFI-001",
    slug: "hhs-plan-for-improvement-management",
    title: "Plan for Improvement Management",
    intent:
      "Life-safety deficiencies requiring planned correction are managed through a complete, accurate, and actively monitored Plan for Improvement process.",
    description:
      "A Plan for Improvement identifies the deficiency, location, applicable requirement, corrective scope, responsible owner, interim controls, projected completion date, funding, milestones, status, and closure evidence.",
    requirement:
      "Maintain and actively manage a Plan for Improvement for applicable life-safety deficiencies, including realistic completion dates, assigned responsibility, documented progress, interim controls, escalation of delays, and verified closure.",
    surveyorLooksFor: [
      "Complete and accurate PFI entries",
      "Realistic projected completion dates",
      "Assigned responsible owners",
      "Documented progress updates",
      "Escalation of overdue items",
      "Evidence of completed correction",
    ],
    evidenceExamples: [
      "Plan for Improvement",
      "PFI tracker",
      "Project schedule",
      "Capital request",
      "Progress report",
      "Completion documentation",
      "Closure verification",
    ],
    commonFindings: [
      "PFI entries are incomplete",
      "Dates are repeatedly extended",
      "Progress is not documented",
      "Funding is not identified",
      "Overdue items are not escalated",
      "Items are closed without field verification",
    ],
    keywords: [
      "plan for improvement",
      "PFI",
      "life safety corrective plan",
      "compliance action plan",
      "deficiency correction plan",
      "PFI tracker",
      "life safety project",
      "projected completion date",
    ],
    aiGuidance:
      "Map PFI records, project schedules, funding requests, status updates, work orders, invoices, photographs, inspections, and closure evidence. Repeated extensions or closure without objective verification should significantly reduce confidence.",
    evidenceFrequency:
      "Continuously maintained from deficiency identification through verified closure",
    evidenceRetention:
      "Retained according to survey, regulatory, legal, and organizational requirements",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "PFI review, project-status analysis, physical verification, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Plan for Improvement Management Framework",
      },
      {
        authority: "CMS",
        title: "Life Safety Code Deficiency Correction Requirements",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Plan for Improvement",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-ILSM-001",
    slug: "hhs-soc-interim-life-safety-measures",
    title: "Interim Life Safety Measures for Open Deficiencies",
    intent:
      "Open life-safety deficiencies are evaluated for temporary protective measures that reduce risk until permanent correction is complete.",
    description:
      "Interim measures may include increased surveillance, fire watch, additional extinguishers, temporary egress controls, staff education, combustible-load reduction, construction controls, enhanced inspections, and operational restrictions.",
    requirement:
      "Evaluate each applicable open life-safety deficiency for interim life safety measures, implement required controls promptly, monitor continued effectiveness, and discontinue measures only after permanent correction is verified.",
    surveyorLooksFor: [
      "Documented ILSM determination",
      "Controls appropriate to the deficiency",
      "Timely implementation",
      "Ongoing monitoring",
      "Staff awareness where applicable",
      "Formal discontinuation after correction",
    ],
    evidenceExamples: [
      "ILSM assessment",
      "Interim-measure checklist",
      "Fire-watch log",
      "Staff education record",
      "Temporary signage",
      "Monitoring record",
      "ILSM discontinuation form",
    ],
    commonFindings: [
      "No ILSM assessment is completed",
      "Controls do not match the risk",
      "Fire-watch records contain gaps",
      "Staff are unaware of temporary measures",
      "Controls are not monitored",
      "ILSM is stopped before correction is verified",
    ],
    keywords: [
      "interim life safety measures",
      "ILSM",
      "open life safety deficiency",
      "temporary fire safety controls",
      "fire watch",
      "interim protection",
      "life safety mitigation",
      "temporary compliance measure",
    ],
    aiGuidance:
      "Map ILSM assessments, implementation records, fire-watch logs, staff education, inspections, temporary controls, deficiency status, and discontinuation records. Open critical deficiencies without documented mitigation should be treated as critical risk.",
    evidenceFrequency:
      "At deficiency identification, throughout the open period, and whenever risk or conditions change",
    evidenceRetention:
      "Retained with the related deficiency and corrective-action record",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document review, field inspection, log analysis, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Interim Life Safety Measures Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
        citation: "NFPA 101",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Interim Life Safety Measures",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-EQUIV-001",
    slug: "hhs-life-safety-equivalency-management",
    title: "Life Safety Equivalency Management",
    intent:
      "Approved life-safety equivalencies are fully documented, current, implemented, and monitored.",
    description:
      "Equivalency management includes the original deficiency, engineering analysis, compensating features, authority approval, implementation requirements, monitoring, changes in conditions, and renewal or reassessment.",
    requirement:
      "Maintain complete documentation for each approved life-safety equivalency, verify continued implementation of all compensating features, and reassess the equivalency when facility conditions materially change.",
    surveyorLooksFor: [
      "Formal equivalency documentation",
      "Clear identification of the underlying deficiency",
      "Approval by the appropriate authority",
      "Implemented compensating features",
      "Ongoing monitoring",
      "Reassessment after changes",
    ],
    evidenceExamples: [
      "Equivalency application",
      "Fire-safety evaluation",
      "Engineering analysis",
      "Approval letter",
      "Compensating-feature inspection",
      "Annual equivalency review",
    ],
    commonFindings: [
      "Approval documentation is missing",
      "Compensating features are not maintained",
      "The building changed after approval",
      "Required inspections are not completed",
      "Staff cannot explain the equivalency",
      "The equivalency is assumed to apply indefinitely",
    ],
    keywords: [
      "life safety equivalency",
      "fire safety evaluation system",
      "FSES",
      "equivalency approval",
      "compensating feature",
      "code equivalency",
      "life safety alternative",
      "equivalency documentation",
    ],
    aiGuidance:
      "Map equivalency applications, engineering analyses, approvals, compensating features, inspection records, change assessments, and periodic reviews. Missing approval or failed compensating features should be treated as critical risk.",
    evidenceFrequency:
      "Reviewed at least annually and whenever construction, occupancy, systems, or compensating features change",
    evidenceRetention:
      "Retained as permanent life-safety and regulatory records",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document review, field verification, approval validation, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Life Safety Equivalency Management Framework",
      },
      {
        authority: "CMS",
        title: "Fire Safety Evaluation System and Equivalency Requirements",
      },
      {
        authority: "NFPA",
        title: "Guide on Alternative Approaches to Life Safety",
        citation: "NFPA 101A",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Equivalencies",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-WAIVER-001",
    slug: "hhs-life-safety-waiver-management",
    title: "Life Safety Waiver Management",
    intent:
      "Life-safety waivers are formally approved, accurately scoped, time controlled, and supported by required protections.",
    description:
      "Waiver management includes the cited requirement, affected building and location, justification, authority approval, duration, conditions, interim protections, renewal, expiration, and final disposition.",
    requirement:
      "Maintain complete documentation for each requested or approved waiver, comply with all approval conditions, monitor expiration and renewal requirements, and prevent reliance on unapproved or expired waivers.",
    surveyorLooksFor: [
      "Formal waiver request and approval",
      "Clear scope and affected locations",
      "Defined approval conditions",
      "Expiration or renewal tracking",
      "Required interim protections",
      "Final resolution or continued authorization",
    ],
    evidenceExamples: [
      "Waiver request",
      "Authority approval letter",
      "Waiver-condition checklist",
      "Expiration tracker",
      "Renewal documentation",
      "Interim-control record",
    ],
    commonFindings: [
      "A waiver is assumed but not approved",
      "Approval conditions are not implemented",
      "The waiver scope is unclear",
      "Expiration dates are not monitored",
      "Expired waivers remain in use",
      "Facility changes invalidate the original request",
    ],
    keywords: [
      "life safety waiver",
      "CMS waiver",
      "waiver approval",
      "waiver expiration",
      "code waiver",
      "temporary waiver",
      "life safety exception",
      "waiver tracking",
    ],
    aiGuidance:
      "Map waiver requests, approvals, conditions, affected locations, expiration dates, renewal records, interim protections, and final disposition. Unapproved, expired, or conditionally noncompliant waivers should be treated as critical risk.",
    evidenceFrequency:
      "Continuously monitored throughout the waiver period and reviewed before expiration or facility changes",
    evidenceRetention:
      "Retained as permanent regulatory and life-safety records",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document review, authority-verification review, field inspection, and expiration tracking",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Life Safety Waiver Management Framework",
      },
      {
        authority: "CMS",
        title: "Life Safety Code Waiver Requirements",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Waivers",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-SURVEY-001",
    slug: "hhs-life-safety-survey-finding-management",
    title: "Life Safety Survey Finding Management",
    intent:
      "Life-safety findings from authorities, accreditors, consultants, and internal surveys are promptly analyzed, corrected, documented, and prevented from recurring.",
    description:
      "Finding management includes receipt, validation, root-cause analysis, immediate correction, ILSM assessment, corrective-action planning, evidence submission, verification, and recurrence prevention.",
    requirement:
      "Maintain a controlled process for managing life-safety survey findings from identification through verified correction and final closure.",
    surveyorLooksFor: [
      "Central tracking of survey findings",
      "Prompt risk and ILSM assessment",
      "Defined corrective actions",
      "Supporting closure evidence",
      "Leadership oversight",
      "Prevention of repeat findings",
    ],
    evidenceExamples: [
      "Survey report",
      "Finding tracker",
      "Corrective-action plan",
      "Evidence-of-compliance submission",
      "Root-cause analysis",
      "Closure letter",
      "Sustainment audit",
    ],
    commonFindings: [
      "Findings are tracked in separate systems",
      "Immediate corrections are not documented",
      "Root causes are not evaluated",
      "Evidence submissions are incomplete",
      "Closure is assumed without confirmation",
      "The same finding recurs",
    ],
    keywords: [
      "life safety survey finding",
      "survey deficiency",
      "plan of correction",
      "evidence of compliance",
      "life safety citation",
      "survey response",
      "corrective action plan",
      "repeat finding",
    ],
    aiGuidance:
      "Map survey reports, finding trackers, plans of correction, ILSM assessments, root-cause analyses, evidence submissions, authority responses, and sustainment audits. Repeat findings should increase risk even when prior items were formally closed.",
    evidenceFrequency:
      "Each time a life-safety survey finding or external deficiency is issued",
    evidenceRetention:
      "Retained according to survey, regulatory, legal, and organizational requirements",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Record review, evidence validation, physical verification, and recurrence analysis",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Life Safety Survey Finding Management Framework",
      },
      {
        authority: "CMS",
        title: "Plan of Correction and Life Safety Survey Requirements",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Survey Findings",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-CLOSE-001",
    slug: "hhs-life-safety-deficiency-closure",
    title: "Life Safety Deficiency Closure",
    intent:
      "Life-safety deficiencies are closed only after permanent correction is complete, objective evidence is available, and field conditions are verified.",
    description:
      "Closure includes completed work, inspection, testing, photographs, updated drawings, permit closure, system restoration, documentation review, ILSM discontinuation, and approval by an authorized individual.",
    requirement:
      "Require objective evidence and independent or authorized verification before closing a life-safety deficiency, Plan for Improvement, survey finding, or corrective action.",
    surveyorLooksFor: [
      "Completed corrective work",
      "Objective closure evidence",
      "Field verification",
      "Required testing or inspection",
      "Updated drawings or records",
      "Authorized closure approval",
    ],
    evidenceExamples: [
      "Completed work order",
      "Repair photograph",
      "Inspection report",
      "System test",
      "Updated life-safety drawing",
      "Permit closeout",
      "Closure approval",
    ],
    commonFindings: [
      "Items are closed based on contractor statements",
      "Field verification is missing",
      "Required testing is not completed",
      "Drawings remain outdated",
      "ILSM remains active or is stopped prematurely",
      "Closure evidence does not match the deficiency",
    ],
    keywords: [
      "life safety closure",
      "deficiency closure",
      "PFI closure",
      "corrective action verification",
      "life safety repair verification",
      "finding closure",
      "compliance closure evidence",
      "field verification",
    ],
    aiGuidance:
      "Map work orders, invoices, photographs, inspection reports, test results, drawing revisions, permit closures, ILSM discontinuation, and approval records. Contractor invoices or verbal confirmation alone should not prove closure.",
    evidenceFrequency:
      "Each time a life-safety deficiency or corrective action is proposed for closure",
    evidenceRetention:
      "Retained with the permanent deficiency, survey, and facility record",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Evidence review, physical inspection, test-result verification, and authorization review",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Life Safety Deficiency Closure Framework",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Deficiency Closure",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-DOC-001",
    slug: "hhs-life-safety-document-control",
    title: "Life Safety Document Control",
    intent:
      "Life-safety documents are current, approved, organized, protected, traceable, and rapidly retrievable.",
    description:
      "Controlled records may include drawings, code analyses, surveys, testing records, deficiency logs, PFIs, ILSM records, equivalencies, waivers, permits, inspection reports, approvals, and closure evidence.",
    requirement:
      "Maintain controlled life-safety documentation with defined ownership, version control, review dates, retention requirements, access controls, and logical organization.",
    surveyorLooksFor: [
      "Current approved documents",
      "Clear document ownership",
      "Version and revision control",
      "Logical organization",
      "Rapid retrieval",
      "Protection of permanent records",
    ],
    evidenceExamples: [
      "Life-safety document index",
      "Document register",
      "Revision history",
      "Electronic repository",
      "Retention schedule",
      "Access-control record",
    ],
    commonFindings: [
      "Documents exist in multiple uncontrolled locations",
      "Outdated drawings remain in use",
      "Permanent records are missing",
      "File names are inconsistent",
      "Records cannot be retrieved quickly",
      "Ownership is unclear",
    ],
    keywords: [
      "life safety document control",
      "SOC documentation",
      "life safety records",
      "document index",
      "drawing version control",
      "life safety repository",
      "compliance documentation",
      "survey document retrieval",
    ],
    aiGuidance:
      "Map life-safety indexes, repositories, revision histories, ownership records, retention schedules, and access controls. Duplicate versions, missing permanent records, and slow retrieval should reduce confidence.",
    evidenceFrequency:
      "Continuously maintained and formally reviewed at least annually",
    evidenceRetention:
      "Retained according to permanent facility, regulatory, survey, legal, and organizational requirements",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document-system review, retrieval testing, version comparison, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Life Safety Document Control Framework",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Documentation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-CHANGE-001",
    slug: "hhs-life-safety-change-management",
    title: "Life Safety Change Management",
    intent:
      "Construction, renovation, occupancy, operational, and system changes are evaluated for their effect on life-safety compliance and documentation.",
    description:
      "Change management includes scope review, code analysis, drawing updates, occupancy review, suite changes, barrier impacts, egress changes, fire-protection changes, hazard classification, risk assessment, and document revision.",
    requirement:
      "Evaluate proposed and completed facility changes for life-safety impact, update affected assessments and drawings, identify new deficiencies, and verify that required approvals and protections are in place.",
    surveyorLooksFor: [
      "Life-safety review before significant changes",
      "Updated drawings after construction",
      "Reevaluation of occupancy and suites",
      "Assessment of barriers and egress",
      "Updated building inventory",
      "Identification of new deficiencies",
    ],
    evidenceExamples: [
      "Life-safety project review",
      "Code analysis",
      "Construction drawing review",
      "Updated life-safety drawing",
      "Occupancy reassessment",
      "Post-construction inspection",
    ],
    commonFindings: [
      "Renovations are not reflected in drawings",
      "Suite boundaries change without review",
      "Barrier changes are not documented",
      "Occupancy use changes without analysis",
      "Fire-protection modifications are omitted",
      "Post-construction verification is incomplete",
    ],
    keywords: [
      "life safety change management",
      "construction life safety review",
      "occupancy change",
      "suite boundary change",
      "barrier modification",
      "egress change",
      "life safety drawing update",
      "post-construction life safety inspection",
    ],
    aiGuidance:
      "Map project reviews, code analyses, construction documents, change approvals, updated drawings, occupancy assessments, post-construction inspections, and new deficiency records. Recent construction without corresponding life-safety updates should increase risk.",
    evidenceFrequency:
      "Before and after applicable construction, renovation, occupancy, operational, or system changes",
    evidenceRetention:
      "Retained as permanent project and life-safety records",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Project-file review, drawing comparison, field inspection, and stakeholder interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Life Safety Change Management Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
        citation: "NFPA 101",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Change Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-ROUND-001",
    slug: "hhs-statement-of-conditions-validation-rounds",
    title: "Statement of Conditions Validation Rounds",
    intent:
      "Routine field validation confirms that documented life-safety conditions remain accurate and that new deficiencies are identified promptly.",
    description:
      "Validation rounds may review barriers, doors, egress, hazardous areas, suites, penetrations, construction areas, fire-protection status, signage, temporary controls, and previously corrected deficiencies.",
    requirement:
      "Conduct and document risk-based validation rounds that compare actual field conditions to life-safety drawings, assessments, deficiency records, and corrective-action status.",
    surveyorLooksFor: [
      "Defined round frequency",
      "Coverage of major life-safety features",
      "Comparison to drawings and records",
      "Documentation of new deficiencies",
      "Verification of prior corrections",
      "Escalation of critical findings",
    ],
    evidenceExamples: [
      "Life-safety round checklist",
      "Barrier inspection",
      "Egress inspection",
      "Deficiency photographs",
      "Validation report",
      "Corrective work order",
    ],
    commonFindings: [
      "Rounds focus only on visible housekeeping",
      "Drawings are not used during validation",
      "New penetrations are missed",
      "Repeat deficiencies are not recognized",
      "Critical findings are not escalated",
      "Corrected items are not rechecked",
    ],
    keywords: [
      "life safety rounds",
      "SOC validation round",
      "barrier inspection",
      "egress inspection",
      "life safety field validation",
      "compliance round",
      "building life safety inspection",
      "survey readiness round",
    ],
    aiGuidance:
      "Map round schedules, completed checklists, photographs, drawing references, deficiencies, work orders, escalation records, and verification results. Repeated findings across rounds should increase risk.",
    evidenceFrequency:
      "At intervals established by risk, building complexity, open deficiencies, and organizational policy",
    evidenceRetention:
      "Retained with Statement of Conditions and environment of care records",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Record review, direct observation, field inspection, and trend analysis",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Statement of Conditions Validation Round Framework",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Validation Rounds",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-LEAD-001",
    slug: "hhs-life-safety-leadership-oversight",
    title: "Life Safety Leadership Oversight",
    intent:
      "Leadership receives accurate information about significant life-safety risks, overdue corrections, funding needs, and survey exposure.",
    description:
      "Leadership oversight includes high-risk deficiencies, open PFIs, overdue corrective actions, equivalencies, waivers, recurring findings, capital needs, ILSM status, and major life-safety projects.",
    requirement:
      "Provide leadership with periodic reports on life-safety compliance status, unresolved critical risks, corrective-action performance, resource needs, and required decisions.",
    surveyorLooksFor: [
      "Routine leadership reporting",
      "Visibility of critical deficiencies",
      "Review of overdue PFIs",
      "Funding and resource decisions",
      "Escalation of unresolved risks",
      "Documented leadership actions",
    ],
    evidenceExamples: [
      "Leadership dashboard",
      "Safety committee report",
      "Environment of care committee minutes",
      "Capital request",
      "Risk-escalation memo",
      "Executive review record",
    ],
    commonFindings: [
      "Leadership receives only high-level summaries",
      "Critical deficiencies are not visible",
      "Overdue items are not escalated",
      "Funding decisions are undocumented",
      "Recurring findings are not discussed",
      "Reports do not drive action",
    ],
    keywords: [
      "life safety leadership oversight",
      "SOC dashboard",
      "PFI leadership report",
      "life safety risk report",
      "environment of care committee",
      "capital compliance request",
      "executive life safety review",
      "compliance escalation",
    ],
    aiGuidance:
      "Map dashboards, committee minutes, capital requests, escalation memos, leadership decisions, and action records. Reporting without documented decisions or follow-through should receive reduced confidence.",
    evidenceFrequency:
      "At least periodically and immediately for critical or rapidly escalating risks",
    evidenceRetention:
      "Retained with leadership, committee, risk, and life-safety governance records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, leadership interview, action-item analysis, and funding-status review",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Life Safety Leadership Oversight Framework",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Leadership Oversight",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-TRAIN-001",
    slug: "hhs-statement-of-conditions-training",
    title: "Statement of Conditions Training",
    intent:
      "Personnel responsible for life-safety compliance understand Statement of Conditions processes, documentation expectations, deficiency management, and escalation requirements.",
    description:
      "Training may include life-safety drawings, building inventory, deficiency identification, risk classification, PFIs, ILSM, equivalencies, waivers, survey response, document control, and closure verification.",
    requirement:
      "Provide and document role-specific training and competency validation for personnel responsible for Statement of Conditions and life-safety management activities.",
    surveyorLooksFor: [
      "Training before independent responsibility",
      "Role-specific life-safety education",
      "Competency in deficiency and PFI management",
      "Understanding of ILSM requirements",
      "Training after process changes",
      "Remediation when competency is not demonstrated",
    ],
    evidenceExamples: [
      "Statement of Conditions training",
      "Life-safety drawing education",
      "PFI training record",
      "ILSM competency",
      "Survey-readiness training",
      "Remediation documentation",
    ],
    commonFindings: [
      "Staff cannot explain the SOC process",
      "Only one person understands the records",
      "Backup personnel are not trained",
      "ILSM responsibilities are unclear",
      "Training records lack identifiable content",
      "Education is not updated after changes",
    ],
    keywords: [
      "statement of conditions training",
      "SOC education",
      "PFI training",
      "life safety competency",
      "ILSM training",
      "life safety documentation training",
      "survey readiness education",
      "life safety manager training",
    ],
    aiGuidance:
      "Map curricula, training rosters, competencies, role assignments, remediation, and continuing education. Sign-in sheets without identifiable content or role linkage should receive reduced confidence.",
    evidenceFrequency:
      "At orientation, before independent responsibility, periodically thereafter, and whenever processes or requirements materially change",
    evidenceRetention:
      "Retained according to human resources, facilities, education, and organizational requirements",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Training-record review, competency verification, observation, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Statement of Conditions Training Framework",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Education and Training",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Statement of Conditions",
    code: "HHS-SOC-EVAL-001",
    slug: "hhs-statement-of-conditions-program-evaluation",
    title: "Statement of Conditions Program Evaluation",
    intent:
      "The organization periodically evaluates whether its Statement of Conditions program accurately reflects building conditions and effectively drives life-safety compliance.",
    description:
      "Program evaluation reviews drawing accuracy, assessment completion, deficiency trends, PFI performance, overdue items, ILSM implementation, equivalencies, waivers, survey findings, closure quality, recurring deficiencies, and leadership oversight.",
    requirement:
      "Complete and document a periodic evaluation of the Statement of Conditions program, including performance trends, unresolved risks, recurring findings, corrective-action effectiveness, and required program revisions.",
    surveyorLooksFor: [
      "A documented periodic program evaluation",
      "Review of drawing accuracy",
      "Analysis of open and overdue deficiencies",
      "Evaluation of PFI and ILSM performance",
      "Review of recurring survey findings",
      "Documented program revisions and leadership approval",
    ],
    evidenceExamples: [
      "Annual Statement of Conditions evaluation",
      "PFI performance report",
      "Deficiency trend analysis",
      "Drawing validation report",
      "ILSM compliance report",
      "Survey finding summary",
      "Program revision log",
    ],
    commonFindings: [
      "No formal evaluation exists",
      "The evaluation only counts open deficiencies",
      "Drawing accuracy is not assessed",
      "Repeated PFI delays are not analyzed",
      "Recurring findings are not addressed",
      "Program changes are not documented",
    ],
    keywords: [
      "statement of conditions evaluation",
      "SOC annual review",
      "PFI performance",
      "life safety program evaluation",
      "deficiency trend analysis",
      "life safety dashboard",
      "SOC performance report",
      "survey readiness evaluation",
    ],
    aiGuidance:
      "Map annual evaluations, PFI reports, deficiency trends, drawing audits, ILSM reviews, waiver and equivalency status, survey findings, corrective actions, leadership approvals, and revision records. The evidence should evaluate both accuracy and operational effectiveness.",
    evidenceFrequency:
      "At least annually and after significant survey findings, building changes, or material program failures",
    evidenceRetention:
      "Retained with life-safety governance and performance-improvement records",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document review, data analysis, building-file sampling, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Statement of Conditions Program Evaluation Framework",
      },
    ],
    department: "Facilities",
    domain: "Statement of Conditions",
    category: "Program Evaluation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];