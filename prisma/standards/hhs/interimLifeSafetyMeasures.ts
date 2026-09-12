import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed interim life safety measures survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to recognize construction and impairment risks,
 * evaluate interim safeguards, identify missing evidence, and support
 * mapping to applicable regulatory and accreditation requirements.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsInterimLifeSafetyMeasuresStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-PROG-001",
    slug: "hhs-interim-life-safety-measures-program",
    title: "Interim Life Safety Measures Program",
    intent:
      "The organization maintains a coordinated process for identifying and controlling temporary life-safety risks created by construction, renovation, maintenance, system impairment, or other changes to the physical environment.",
    description:
      "The interim life safety measures program establishes responsibilities, assessment criteria, approval processes, required safeguards, inspection expectations, communication methods, documentation requirements, and closeout procedures.",
    requirement:
      "Maintain a documented interim life safety measures program that identifies when an assessment is required, assigns responsibility, defines available protective measures, documents implementation, and verifies that temporary controls remain effective until normal conditions are restored.",
    surveyorLooksFor: [
      "A current interim life safety measures policy or program",
      "Clear criteria for initiating an ILSM assessment",
      "Defined responsibility for approving and monitoring measures",
      "Available safeguards matched to identified risks",
      "Documentation showing measures remain active throughout the risk period",
      "Formal closeout when normal life-safety conditions are restored",
    ],
    evidenceExamples: [
      "Interim life safety measures policy",
      "ILSM decision matrix",
      "Completed ILSM assessments",
      "Safety committee minutes",
      "Construction meeting records",
      "ILSM closeout documentation",
    ],
    commonFindings: [
      "The organization lacks clear criteria for initiating an ILSM assessment",
      "Construction begins before temporary safeguards are approved",
      "Responsibilities are unclear",
      "Measures are listed but not monitored",
      "Temporary conditions extend beyond the documented assessment period",
      "Closeout is not documented",
    ],
    keywords: [
      "interim life safety measures",
      "ILSM",
      "temporary life safety",
      "construction safety",
      "life safety impairment",
      "construction risk",
      "temporary safeguards",
      "ILSM policy",
    ],
    aiGuidance:
      "Map organization-wide policies, decision tools, assessments, monitoring records, committee documentation, and closeout records that demonstrate a complete ILSM process. Do not treat one isolated construction inspection as proof of the entire program.",
    evidenceFrequency:
      "Reviewed at least annually and whenever the construction or impairment process changes",
    evidenceRetention:
      "Current program documents and project records from the prior survey cycle",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, active-project inspection, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Interim Life Safety Measures Framework",
        notes:
          "Original HHS operational control intended for cross-accreditor survey readiness.",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
        notes:
          "Apply the edition adopted by the applicable authority having jurisdiction.",
      },
      {
        authority: "CMS",
        title: "Life Safety Code Requirements",
        notes:
          "Apply current federal requirements and adopted code editions.",
      },
    ],
    department: "Facilities",
    domain: "Life Safety",
    category: "ILSM Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-CRA-001",
    slug: "hhs-construction-risk-assessment",
    title: "Construction Risk Assessment",
    intent:
      "Construction, renovation, demolition, repair, and maintenance activities are evaluated before work begins so the organization can identify risks to patients, staff, visitors, operations, infection prevention, utilities, and life safety.",
    description:
      "The construction risk assessment evaluates the location, scope, duration, affected systems, patient populations, egress conditions, fire protection, utility impacts, infection risks, noise, vibration, dust, security, and emergency response considerations associated with the work.",
    requirement:
      "Complete and approve a documented construction risk assessment before applicable work begins, and revise the assessment when the scope, conditions, duration, or affected systems materially change.",
    surveyorLooksFor: [
      "Assessment completed before work begins",
      "Identification of affected patient and operational areas",
      "Evaluation of life-safety and utility impacts",
      "Infection prevention participation when applicable",
      "Defined controls for identified hazards",
      "Reassessment after significant project changes",
    ],
    evidenceExamples: [
      "Construction risk assessment",
      "Preconstruction risk assessment",
      "Project hazard analysis",
      "Infection control risk assessment",
      "Utility shutdown assessment",
      "Construction kickoff meeting minutes",
    ],
    commonFindings: [
      "Work begins before the assessment is approved",
      "The assessment does not reflect the actual scope",
      "Patient-care impacts are omitted",
      "Utility or fire-protection impairments are not evaluated",
      "Changes are made without reassessment",
      "Required departments did not participate",
    ],
    keywords: [
      "construction risk assessment",
      "CRA",
      "preconstruction risk assessment",
      "PCRA",
      "project risk assessment",
      "construction hazard analysis",
      "renovation risk",
      "construction planning",
    ],
    aiGuidance:
      "Map completed and approved project-specific assessments that identify risks, controls, responsible parties, and approval dates. Blank templates, project schedules, or contracts should receive low confidence unless paired with a completed assessment.",
    evidenceFrequency:
      "Before applicable work begins and whenever project conditions materially change",
    evidenceRetention:
      "Retained with the project file through the applicable survey and record-retention period",
    responsibleRole: "Project Manager",
    validationMethod:
      "Document review, project inspection, and interview with responsible departments",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Construction Risk Assessment Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
        notes:
          "Apply adopted construction and life-safety requirements.",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
        notes:
          "Apply the edition adopted by the organization or authority having jurisdiction.",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Risk Assessment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-ASSESS-001",
    slug: "hhs-interim-life-safety-measures-assessment",
    title: "Interim Life Safety Measures Assessment",
    intent:
      "Temporary deficiencies or project conditions are evaluated to determine whether additional life-safety measures are required.",
    description:
      "The ILSM assessment evaluates the effect of the temporary condition on detection, alarm, suppression, containment, egress, emergency access, staff response, patient relocation, and fire prevention.",
    requirement:
      "Complete a documented ILSM assessment whenever construction, maintenance, or impairment may reduce the effectiveness of required life-safety features, and identify the specific temporary measures required for the duration of the condition.",
    surveyorLooksFor: [
      "A project- or impairment-specific assessment",
      "Identification of affected life-safety features",
      "A documented decision on whether ILSM measures are required",
      "Measures proportionate to the identified risk",
      "Approval by designated responsible personnel",
      "Defined start, review, and end dates",
    ],
    evidenceExamples: [
      "Completed ILSM assessment",
      "ILSM determination form",
      "Life-safety impairment assessment",
      "Temporary-measures authorization",
      "Risk-level assignment",
      "Assessment revision record",
    ],
    commonFindings: [
      "No assessment exists for an active project",
      "The assessment was completed after work began",
      "The assessment does not identify affected systems",
      "Required measures are not linked to identified risks",
      "The assessment remains open after the condition ends",
      "Significant changes are not reassessed",
    ],
    keywords: [
      "ILSM assessment",
      "interim life safety assessment",
      "life safety risk assessment",
      "temporary deficiency assessment",
      "construction ILSM",
      "impairment assessment",
      "temporary life safety measures",
    ],
    aiGuidance:
      "Map completed assessments that identify the condition, affected area, impacted systems, required safeguards, responsible parties, dates, and approvals. A generic project risk form should receive reduced confidence unless it directly addresses life-safety impacts.",
    evidenceFrequency:
      "Before the temporary condition begins and whenever risk conditions change",
    evidenceRetention:
      "Retained with the construction, maintenance, or impairment record",
    responsibleRole: "Life Safety Specialist",
    validationMethod:
      "Document review, physical verification, and responsible-person interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Interim Life Safety Measures Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
      {
        authority: "CMS",
        title: "Life Safety Code Requirements",
      },
    ],
    department: "Facilities",
    domain: "Life Safety",
    category: "ILSM Assessment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-FW-001",
    slug: "hhs-construction-and-impairment-fire-watch",
    title: "Construction and Impairment Fire Watch",
    intent:
      "A reliable fire-watch process provides temporary surveillance when fire detection, alarm, suppression, compartmentation, or other life-safety protections are impaired.",
    description:
      "The fire-watch program defines activation criteria, responsible personnel, patrol routes, frequencies, communication methods, emergency actions, documentation, relief coverage, and termination requirements.",
    requirement:
      "Implement and document an approved fire watch when required by the identified risk, adopted code, organizational policy, or authority having jurisdiction, and maintain the fire watch until the affected protection is restored or an approved alternative is established.",
    surveyorLooksFor: [
      "Clear criteria for activating a fire watch",
      "Qualified and instructed fire-watch personnel",
      "Defined patrol areas and frequencies",
      "Immediate access to emergency communication",
      "Continuous documentation for the required period",
      "Formal termination after system restoration",
    ],
    evidenceExamples: [
      "Fire-watch policy",
      "Completed fire-watch logs",
      "Fire-watch assignment roster",
      "Staff instruction record",
      "Impairment notification",
      "Fire-watch termination authorization",
    ],
    commonFindings: [
      "Fire watch begins late",
      "Logs contain time gaps",
      "Patrol areas are not identified",
      "Personnel have competing duties that interfere with surveillance",
      "Staff do not know how to initiate an alarm",
      "Fire watch continues without reassessment or formal termination",
    ],
    keywords: [
      "fire watch",
      "firewatch",
      "fire alarm impairment",
      "sprinkler impairment",
      "construction fire watch",
      "fire watch log",
      "temporary fire protection",
      "impairment patrol",
    ],
    aiGuidance:
      "Map completed fire-watch logs, assignment records, instructions, impairment records, and termination documentation. A policy alone does not prove implementation. Logs should be evaluated for continuity, required frequency, location, signatures, and alignment with impairment dates.",
    evidenceFrequency:
      "Throughout the required impairment or temporary risk period",
    evidenceRetention:
      "Retained with the related impairment or construction project record",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Log review, field observation, and staff interview",
    referencedAuthorities: [
      {
        authority: "NFPA",
        title: "Life Safety Code",
        notes:
          "Apply the adopted edition and authority-having-jurisdiction requirements.",
      },
      {
        authority: "NFPA",
        title: "Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
        notes:
          "Apply adopted impairment requirements when sprinkler protection is affected.",
      },
      {
        authority: "HHS",
        title: "Fire Watch Operational Framework",
      },
    ],
    department: "Facilities",
    domain: "Life Safety",
    category: "Fire Watch",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-IMPAIR-001",
    slug: "hhs-impaired-fire-protection-system-controls",
    title: "Impaired Fire Protection System Controls",
    intent:
      "Fire alarm, sprinkler, smoke-control, fire-pump, standpipe, and other fire-protection impairments are controlled to minimize the duration and consequence of reduced protection.",
    description:
      "The impairment process addresses authorization, notification, risk assessment, temporary safeguards, work coordination, restoration, testing, documentation, and communication to affected personnel.",
    requirement:
      "Manage fire-protection impairments through a documented process that identifies the affected system and area, evaluates risk, implements required temporary safeguards, communicates the impairment, and verifies proper restoration before returning the system to service.",
    surveyorLooksFor: [
      "Formal authorization before planned impairment",
      "Immediate response to unplanned impairment",
      "Identification of affected systems and areas",
      "Notification of required internal and external parties",
      "Implementation of temporary safeguards",
      "Documented restoration and post-work testing",
    ],
    evidenceExamples: [
      "Fire-system impairment permit",
      "Impairment notification",
      "ILSM assessment",
      "Fire-watch documentation",
      "System restoration test record",
      "Impairment closeout form",
    ],
    commonFindings: [
      "Impairments are not formally tracked",
      "Required notifications are missing",
      "The affected area is unclear",
      "Temporary safeguards are delayed",
      "Systems are returned to service without documented testing",
      "Open impairment permits remain unresolved",
    ],
    keywords: [
      "fire protection impairment",
      "fire alarm impairment",
      "sprinkler impairment",
      "fire pump impairment",
      "standpipe impairment",
      "impairment permit",
      "system out of service",
      "fire system restoration",
    ],
    aiGuidance:
      "Map impairment permits, notifications, ILSM assessments, fire-watch records, repair documentation, test results, and closeout approvals. Compare impairment start and restoration times to identify documentation gaps or periods without required temporary protection.",
    evidenceFrequency:
      "Each time a required fire-protection feature is impaired",
    evidenceRetention:
      "Retained with system maintenance and project records for the applicable survey cycle",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, system-status verification, and staff interview",
    referencedAuthorities: [
      {
        authority: "NFPA",
        title: "National Fire Alarm and Signaling Code",
        notes:
          "Apply the edition adopted by the authority having jurisdiction.",
      },
      {
        authority: "NFPA",
        title: "Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
      {
        authority: "HHS",
        title: "Fire Protection Impairment Framework",
      },
    ],
    department: "Facilities",
    domain: "Life Safety",
    category: "Fire Protection Impairment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-EGRESS-001",
    slug: "hhs-temporary-means-of-egress-protection",
    title: "Temporary Means of Egress Protection",
    intent:
      "Construction and maintenance activities do not prevent occupants from safely reaching an approved exit.",
    description:
      "Temporary egress controls address exit access, corridor width, exit signage, emergency lighting, door operation, route changes, barriers, floor conditions, staff communication, and emergency access.",
    requirement:
      "Maintain safe and clearly identifiable means of egress throughout construction, renovation, maintenance, and temporary conditions, and provide approved alternate routes when normal egress paths are affected.",
    surveyorLooksFor: [
      "Required exit routes remain continuously available",
      "Temporary route changes are clearly marked",
      "Exit signage remains visible and accurate",
      "Emergency lighting supports temporary routes",
      "Construction materials do not obstruct corridors or exits",
      "Staff understand alternate evacuation routes",
    ],
    evidenceExamples: [
      "Temporary egress plan",
      "Construction phasing plan",
      "Exit-route inspection",
      "Temporary signage approval",
      "Emergency lighting verification",
      "Staff communication record",
    ],
    commonFindings: [
      "Construction materials narrow or block the exit route",
      "Temporary signage is confusing or missing",
      "Exit signs point toward closed areas",
      "Temporary doors do not operate properly",
      "Emergency lighting is not provided for the alternate path",
      "Staff are unaware of route changes",
    ],
    keywords: [
      "temporary egress",
      "alternate exit route",
      "construction corridor",
      "blocked exit",
      "temporary exit signage",
      "means of egress",
      "construction exit plan",
      "egress inspection",
    ],
    aiGuidance:
      "Map temporary egress plans, route diagrams, completed inspections, photographs, signage approvals, and staff communications. Project drawings alone should not be treated as proof that the route remained compliant during active work.",
    evidenceFrequency:
      "Before route changes and throughout the temporary condition",
    evidenceRetention:
      "Retained with the applicable project or temporary-condition file",
    responsibleRole: "Project Manager",
    validationMethod:
      "Physical inspection, document review, and staff interview",
    referencedAuthorities: [
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
      {
        authority: "OSHA",
        title: "Means of Egress",
        citation: "29 CFR 1910 Subpart E",
      },
      {
        authority: "HHS",
        title: "Temporary Egress Protection Framework",
      },
    ],
    department: "Facilities",
    domain: "Life Safety",
    category: "Means of Egress",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-BARR-001",
    slug: "hhs-construction-barriers-and-containment",
    title: "Construction Barriers and Containment",
    intent:
      "Construction areas are separated from occupied healthcare spaces to reduce fire, smoke, dust, infection, security, and physical hazards.",
    description:
      "Barrier and containment controls address construction type, integrity, penetrations, doors, ceilings, pressure relationships, signage, access control, inspection, repair, and coordination with infection prevention.",
    requirement:
      "Install, maintain, inspect, and promptly repair construction barriers and containment appropriate to the work, location, duration, and identified risks.",
    surveyorLooksFor: [
      "Barrier construction matches the risk assessment",
      "Barriers extend and terminate as required by the approved plan",
      "Openings and penetrations are sealed",
      "Doors remain closed and secure",
      "Containment and pressure controls function as intended",
      "Deficiencies are corrected promptly",
    ],
    evidenceExamples: [
      "Barrier design or construction detail",
      "Construction barrier inspection",
      "Negative-pressure monitoring record",
      "Infection control inspection",
      "Barrier deficiency log",
      "Corrective-action documentation",
    ],
    commonFindings: [
      "Barrier penetrations are unsealed",
      "Doors are propped open",
      "Barrier materials do not match the approved risk level",
      "Dust escapes into occupied areas",
      "Negative pressure is not monitored",
      "Barrier damage remains uncorrected",
    ],
    keywords: [
      "construction barrier",
      "dust containment",
      "temporary barrier",
      "negative pressure",
      "construction containment",
      "ICRA barrier",
      "construction partition",
      "barrier inspection",
    ],
    aiGuidance:
      "Map approved barrier plans, inspection records, pressure logs, photographs, infection-prevention documentation, and corrective actions. A contractor specification alone does not prove that the barrier was installed or maintained correctly.",
    evidenceFrequency:
      "Before occupancy exposure and throughout active construction",
    evidenceRetention:
      "Retained with project quality, infection prevention, and safety records",
    responsibleRole: "Project Manager",
    validationMethod:
      "Physical inspection, pressure verification, document review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Construction Barrier and Containment Framework",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
      },
      {
        authority: "NFPA",
        title: "Standard for Safeguarding Construction, Alteration, and Demolition Operations",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Barriers and Containment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-EDU-001",
    slug: "hhs-construction-life-safety-education",
    title: "Construction Life Safety Education",
    intent:
      "Employees, contractors, and other affected personnel understand temporary hazards, protective measures, emergency procedures, access restrictions, and reporting expectations.",
    description:
      "Education is tailored to the project and may address alternate exits, fire response, hot work, impairment notification, infection controls, utility shutdowns, emergency communication, prohibited activities, and daily housekeeping.",
    requirement:
      "Provide and document project-specific life-safety education for affected employees, contractors, and temporary personnel before they perform work or enter controlled construction areas.",
    surveyorLooksFor: [
      "Training completed before applicable work begins",
      "Project-specific rather than generic content",
      "Education on emergency reporting and response",
      "Communication of temporary egress and access changes",
      "Training for contractors and subcontractors",
      "Records that identify attendees, content, and date",
    ],
    evidenceExamples: [
      "Construction safety orientation",
      "Contractor life-safety training",
      "ILSM education roster",
      "Project safety bulletin",
      "Toolbox-talk record",
      "Staff communication acknowledgment",
    ],
    commonFindings: [
      "Contractors receive no documented orientation",
      "Training is generic and does not address project risks",
      "Subcontractors are omitted",
      "Staff are unaware of alternate exit routes",
      "Training records do not identify course content",
      "Education is not repeated after major project changes",
    ],
    keywords: [
      "construction safety training",
      "contractor orientation",
      "ILSM education",
      "construction life safety",
      "toolbox talk",
      "temporary egress training",
      "construction staff education",
      "contractor safety",
    ],
    aiGuidance:
      "Map training materials, rosters, acknowledgments, toolbox talks, project communications, and competency records. A sign-in sheet without identifiable content or project linkage should receive reduced confidence.",
    evidenceFrequency:
      "Before assignment and whenever project conditions or temporary controls materially change",
    evidenceRetention:
      "Retained with contractor, employee, and project safety records",
    responsibleRole: "Project Manager",
    validationMethod:
      "Training-record review and staff or contractor interview",
    referencedAuthorities: [
      {
        authority: "OSHA",
        title: "Construction Safety and Health Regulations",
        citation: "29 CFR 1926",
      },
      {
        authority: "HHS",
        title: "Construction Life Safety Education Framework",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Staff Education",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-INSP-001",
    slug: "hhs-daily-construction-life-safety-inspections",
    title: "Daily Construction Life Safety Inspections",
    intent:
      "Active construction areas and temporary life-safety controls are routinely inspected so deficiencies are identified and corrected before they create unacceptable risk.",
    description:
      "Inspections evaluate barriers, exits, fire protection, housekeeping, combustible loading, hot-work conditions, electrical safety, access control, signage, emergency equipment, utility conditions, and required interim measures.",
    requirement:
      "Conduct and document life-safety inspections of active construction areas at a frequency appropriate to the risk, including daily inspection when required by policy, assessment, or project conditions.",
    surveyorLooksFor: [
      "Completed inspections for each required day or shift",
      "Inspection of all applicable temporary controls",
      "Identification of the inspector and inspection time",
      "Documentation of deficiencies",
      "Prompt assignment and completion of corrective actions",
      "Escalation of repeated or high-risk findings",
    ],
    evidenceExamples: [
      "Daily construction inspection log",
      "ILSM inspection checklist",
      "Contractor safety inspection",
      "Barrier inspection record",
      "Corrective-action tracker",
      "Construction deficiency photographs",
    ],
    commonFindings: [
      "Inspection records contain gaps",
      "Checklists are completed without meaningful observations",
      "High-risk deficiencies remain open",
      "Corrective actions lack owners or due dates",
      "Inspections do not cover all active work areas",
      "Repeated findings are not escalated",
    ],
    keywords: [
      "daily construction inspection",
      "ILSM inspection",
      "construction safety rounds",
      "construction checklist",
      "barrier inspection",
      "project safety inspection",
      "construction deficiency",
      "daily life safety inspection",
    ],
    aiGuidance:
      "Map completed inspection logs, photographs, deficiency records, work orders, and corrective-action closure evidence. Evaluate date continuity, inspector identity, repeated findings, overdue corrections, and alignment with the active project period.",
    evidenceFrequency:
      "At the frequency established by the risk assessment, including daily when required",
    evidenceRetention:
      "Retained with the active project and ILSM documentation",
    responsibleRole: "Project Manager",
    validationMethod:
      "Log review, physical inspection, and corrective-action verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Construction Life Safety Inspection Framework",
      },
      {
        authority: "NFPA",
        title: "Standard for Safeguarding Construction, Alteration, and Demolition Operations",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Construction Inspection",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Interim Life Safety Measures",
    code: "HHS-ILSM-CLOSE-001",
    slug: "hhs-construction-life-safety-closeout",
    title: "Construction Life Safety Closeout",
    intent:
      "Temporary measures are not discontinued until permanent life-safety features are complete, tested, documented, and accepted.",
    description:
      "Project closeout confirms removal of temporary hazards, restoration of impaired systems, completion of required inspections and testing, closure of deficiencies, updating of documents, communication to affected departments, and formal termination of ILSM controls.",
    requirement:
      "Complete a documented life-safety closeout before terminating interim measures or returning affected areas to normal use, including verification that required systems and building features are restored and functional.",
    surveyorLooksFor: [
      "Permanent life-safety features completed as designed",
      "Required inspections and acceptance testing completed",
      "Fire alarm and sprinkler systems restored",
      "Temporary barriers and signage removed appropriately",
      "Open deficiencies resolved or formally managed",
      "ILSM measures formally closed",
    ],
    evidenceExamples: [
      "ILSM closeout form",
      "Fire alarm acceptance test",
      "Sprinkler inspection or test record",
      "Final construction inspection",
      "Certificate of occupancy or approval",
      "Project deficiency closeout log",
    ],
    commonFindings: [
      "Interim measures end before systems are restored",
      "Acceptance testing is missing",
      "Temporary penetrations remain unsealed",
      "Construction deficiencies remain open",
      "Drawings or asset records are not updated",
      "No formal closeout approval exists",
    ],
    keywords: [
      "construction closeout",
      "ILSM closeout",
      "life safety closeout",
      "project completion",
      "system restoration",
      "acceptance testing",
      "construction deficiency closeout",
      "temporary measures termination",
    ],
    aiGuidance:
      "Map closeout forms, acceptance tests, inspection approvals, deficiency closure records, restored-system documentation, and final authorization. A contractor completion statement alone should not prove that all life-safety conditions were verified.",
    evidenceFrequency:
      "At completion of each applicable project, impairment, or temporary condition",
    evidenceRetention:
      "Retained with permanent project, inspection, testing, and life-safety records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, final physical inspection, and system-status verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Construction Life Safety Closeout Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
      {
        authority: "CMS",
        title: "Life Safety Code Requirements",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Project Closeout",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];