import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed healthcare construction management survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to evaluate healthcare construction risks,
 * identify missing evidence, recognize unsafe project conditions,
 * and support mapping to applicable regulatory, accreditation,
 * infection-prevention, life-safety, and technical authorities.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsConstructionManagementStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-PROG-001",
    slug: "hhs-healthcare-construction-management-program",
    title: "Healthcare Construction Management Program",
    intent:
      "The organization maintains a coordinated program for planning, approving, controlling, monitoring, and closing healthcare construction and renovation projects.",
    description:
      "The construction management program integrates project governance, infection prevention, interim life safety, utilities, security, patient-care continuity, hazardous materials, contractor oversight, commissioning, documentation, and post-project evaluation.",
    requirement:
      "Maintain and implement a documented construction management program that defines responsibilities, risk-assessment requirements, approval processes, project controls, monitoring expectations, corrective actions, and project-closeout requirements.",
    surveyorLooksFor: [
      "A current construction management policy or program",
      "Defined project governance and approval authority",
      "Required preconstruction risk assessments",
      "Integration of infection prevention and life safety",
      "Documented monitoring and corrective actions",
      "Formal project closeout and turnover",
    ],
    evidenceExamples: [
      "Construction management policy",
      "Project governance procedure",
      "Preconstruction risk assessment",
      "Construction meeting minutes",
      "Project inspection records",
      "Corrective-action tracker",
      "Project closeout checklist",
    ],
    commonFindings: [
      "Construction controls vary by project",
      "Roles and approval authority are unclear",
      "Risk assessments are completed after work begins",
      "Life-safety and infection controls are not integrated",
      "Deficiencies are not tracked",
      "Projects close without complete turnover records",
    ],
    keywords: [
      "healthcare construction management",
      "hospital construction program",
      "renovation management",
      "construction compliance",
      "healthcare project controls",
      "facility construction",
      "construction governance",
      "project closeout",
    ],
    aiGuidance:
      "Map construction policies, project lists, governance records, risk assessments, meeting minutes, inspection records, corrective actions, commissioning documents, and closeout packages. A contract or project schedule alone should not be treated as proof that healthcare-specific risks are controlled.",
    evidenceFrequency:
      "Reviewed at least annually and whenever project types, responsibilities, facilities, or applicable requirements materially change",
    evidenceRetention:
      "Current program documents and project records retained according to organizational, regulatory, legal, and capital-project requirements",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, active-project inspection, project-file sampling, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Management Framework",
        notes:
          "Original HHS operational control intended for cross-accreditor survey readiness.",
      },
      {
        authority: "CMS",
        title: "Physical Environment Requirements",
        notes:
          "Apply current federal requirements and interpretive guidance.",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-GOV-001",
    slug: "hhs-construction-project-governance",
    title: "Construction Project Governance",
    intent:
      "Each construction project has defined leadership, approval authority, accountability, communication, and escalation pathways.",
    description:
      "Project governance includes project sponsorship, facilities leadership, infection prevention, safety, clinical stakeholders, design professionals, contractors, finance, security, information technology, and other affected departments.",
    requirement:
      "Establish and document project governance for each applicable construction or renovation project, including responsible leaders, required stakeholders, decision authority, meeting structure, escalation pathways, and approval checkpoints.",
    surveyorLooksFor: [
      "A clearly identified project owner",
      "Participation by affected clinical and support departments",
      "Defined approval authority",
      "Routine project coordination meetings",
      "Escalation of unresolved safety or operational concerns",
      "Documented decisions and action items",
    ],
    evidenceExamples: [
      "Project charter",
      "Responsibility matrix",
      "Stakeholder list",
      "Project meeting minutes",
      "Decision log",
      "Issue-escalation record",
    ],
    commonFindings: [
      "Project ownership is unclear",
      "Infection prevention is not consistently involved",
      "Clinical users are excluded from decisions",
      "Safety issues are not escalated",
      "Meeting minutes lack action tracking",
      "Major changes occur without approval",
    ],
    keywords: [
      "construction governance",
      "project charter",
      "construction committee",
      "project responsibility matrix",
      "construction oversight",
      "project stakeholder",
      "construction meeting minutes",
      "project decision log",
    ],
    aiGuidance:
      "Map project charters, stakeholder rosters, responsibility matrices, meeting minutes, decision logs, issue escalations, and approval records. A contractor-led meeting alone should not prove organizational governance.",
    evidenceFrequency:
      "Established before project initiation and maintained throughout the project",
    evidenceRetention:
      "Retained with the permanent project file",
    responsibleRole: "Project Manager",
    validationMethod:
      "Document review, meeting-record analysis, and stakeholder interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Governance Framework",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Governance",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-PCRA-001",
    slug: "hhs-preconstruction-risk-assessment",
    title: "Preconstruction Risk Assessment",
    intent:
      "The organization identifies and controls patient, staff, visitor, life-safety, infection, utility, security, and operational risks before construction begins.",
    description:
      "The preconstruction risk assessment evaluates project scope, location, duration, patient populations, infection risk, life-safety impact, utilities, noise, vibration, dust, traffic, security, hazardous materials, emergency access, and operational continuity.",
    requirement:
      "Complete, approve, and implement a multidisciplinary preconstruction risk assessment before work begins, identify required controls, assign responsible parties, and reassess when project conditions materially change.",
    surveyorLooksFor: [
      "A completed project-specific risk assessment",
      "Multidisciplinary participation",
      "Assessment completed before work begins",
      "Controls linked to identified risks",
      "Defined monitoring responsibilities",
      "Reassessment after scope or condition changes",
    ],
    evidenceExamples: [
      "Preconstruction risk assessment",
      "Project risk matrix",
      "Risk-control plan",
      "Approval signatures",
      "Project change assessment",
      "Risk reassessment record",
    ],
    commonFindings: [
      "The assessment is generic",
      "The assessment is completed after mobilization",
      "Affected departments do not participate",
      "Controls are not linked to risks",
      "Scope changes are not reassessed",
      "Required signatures are missing",
    ],
    keywords: [
      "preconstruction risk assessment",
      "PCRA",
      "construction risk assessment",
      "healthcare construction risk",
      "project safety assessment",
      "renovation risk matrix",
      "construction hazard assessment",
      "project risk control",
    ],
    aiGuidance:
      "Map completed project-specific assessments, risk matrices, approvals, control plans, scope changes, and reassessments. Generic templates without project location, patient population, and specific controls should receive low confidence.",
    evidenceFrequency:
      "Before project initiation and whenever scope, phasing, occupied areas, utilities, or risk conditions materially change",
    evidenceRetention:
      "Retained with the permanent project file",
    responsibleRole: "Project Manager",
    validationMethod:
      "Document review, active-project inspection, and stakeholder interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Preconstruction Risk Assessment Framework",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
      },
      {
        authority: "ASHE",
        title: "Healthcare Construction Risk Assessment Guidance",
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
    chapter: "Construction Management",
    code: "HHS-CM-ICRA-001",
    slug: "hhs-infection-control-risk-assessment",
    title: "Infection Control Risk Assessment",
    intent:
      "Construction-related dust, moisture, airflow, contaminants, and worker activity are controlled to protect patients and healthcare operations.",
    description:
      "The infection control risk assessment identifies patient risk groups, construction activity type, required barrier class, pressure relationships, routes, cleaning, monitoring, personal protective equipment, remediation, and contingency actions.",
    requirement:
      "Complete and implement an infection control risk assessment before construction begins, establish project-specific infection-prevention controls, monitor compliance, and revise controls when conditions change.",
    surveyorLooksFor: [
      "A project-specific infection control risk assessment",
      "Defined patient-risk and construction-activity classifications",
      "Required barriers and pressure controls",
      "Controlled worker and debris routes",
      "Routine monitoring and documentation",
      "Corrective action for barrier or pressure failures",
    ],
    evidenceExamples: [
      "Infection control risk assessment",
      "ICRA permit",
      "Barrier inspection",
      "Negative-pressure log",
      "Particle or dust monitoring",
      "Cleaning record",
      "Corrective-action report",
    ],
    commonFindings: [
      "ICRA controls do not match project risk",
      "Barriers are damaged or incomplete",
      "Negative pressure is not maintained",
      "Logs contain gaps",
      "Debris routes cross patient-care areas",
      "Infection prevention is not notified of failures",
    ],
    keywords: [
      "infection control risk assessment",
      "ICRA",
      "construction infection control",
      "negative pressure construction",
      "construction barrier",
      "dust control",
      "healthcare renovation infection prevention",
      "construction containment",
    ],
    aiGuidance:
      "Map ICRA documents, permits, barrier inspections, pressure logs, route plans, cleaning records, monitoring data, failure reports, and corrective actions. A signed ICRA form without active monitoring should receive reduced confidence.",
    evidenceFrequency:
      "Before work begins, continuously during construction, and whenever project conditions or controls change",
    evidenceRetention:
      "Retained with construction, infection prevention, and project closeout records",
    responsibleRole: "Infection Preventionist",
    validationMethod:
      "Document review, barrier inspection, monitoring-data review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Infection Control Framework",
      },
      {
        authority: "CDC",
        title: "Environmental Infection Control Guidance",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
      },
    ],
    department: "Infection Prevention",
    domain: "Construction Management",
    category: "Infection Control",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-ILSM-001",
    slug: "hhs-construction-interim-life-safety-measures",
    title: "Construction Interim Life Safety Measures",
    intent:
      "Temporary construction conditions do not create uncontrolled life-safety risk in occupied healthcare areas.",
    description:
      "Construction-related interim life safety measures may address egress, fire barriers, fire alarm and sprinkler impairments, temporary protection, combustible loading, hot work, access, signage, surveillance, and staff education.",
    requirement:
      "Evaluate construction activities for life-safety impact, implement required interim measures before the impairment or hazard occurs, monitor compliance, and document restoration of permanent protection.",
    surveyorLooksFor: [
      "Life-safety assessment before work begins",
      "Identification of barrier and egress impacts",
      "Controls for alarm or sprinkler impairments",
      "Documented interim measures",
      "Routine compliance inspections",
      "Restoration and closeout verification",
    ],
    evidenceExamples: [
      "ILSM assessment",
      "Construction life-safety permit",
      "Daily ILSM inspection",
      "Fire-watch record",
      "Temporary egress plan",
      "Impairment record",
      "Restoration verification",
    ],
    commonFindings: [
      "ILSM assessments are not completed",
      "Temporary exits are poorly marked",
      "Fire barriers are breached without control",
      "Fire watches are incomplete",
      "Combustible loading is excessive",
      "Permanent protection is not verified after work",
    ],
    keywords: [
      "construction ILSM",
      "interim life safety measures",
      "construction fire safety",
      "temporary egress",
      "fire watch construction",
      "construction impairment",
      "life safety permit",
      "construction barrier breach",
    ],
    aiGuidance:
      "Map ILSM assessments, permits, inspection logs, fire-watch records, impairment documents, temporary egress plans, restoration records, and corrective actions. Active construction affecting fire protection or egress without documented controls should be treated as critical risk.",
    evidenceFrequency:
      "Before applicable work begins and continuously throughout the period of impairment or increased risk",
    evidenceRetention:
      "Retained with life-safety and permanent project records",
    responsibleRole: "Life Safety Manager",
    validationMethod:
      "Document review, active-project inspection, impairment verification, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Interim Life Safety Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Life Safety",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-BARRIER-001",
    slug: "hhs-construction-barrier-and-containment-management",
    title: "Construction Barrier and Containment Management",
    intent:
      "Construction zones are physically separated from occupied healthcare areas using barriers and containment appropriate to the project risk.",
    description:
      "Barrier management includes material selection, structural stability, sealing, penetrations, doors, ceilings, transitions, pressure integrity, inspection, repair, signage, and final removal.",
    requirement:
      "Install, inspect, maintain, and document construction barriers and containment systems that match the approved risk assessment and prevent uncontrolled migration of dust, debris, smoke, odors, and unauthorized persons.",
    surveyorLooksFor: [
      "Barriers appropriate to the approved risk level",
      "Complete sealing at floors, walls, and ceilings",
      "Controlled doors and penetrations",
      "Stable and damage-free construction",
      "Routine documented inspection",
      "Prompt correction of barrier failures",
    ],
    evidenceExamples: [
      "Barrier construction detail",
      "Containment inspection",
      "Barrier integrity log",
      "Pressure-monitoring record",
      "Deficiency photograph",
      "Corrective work order",
    ],
    commonFindings: [
      "Barriers are incomplete",
      "Open penetrations allow dust migration",
      "Doors are left open",
      "Barrier damage is not corrected",
      "Ceiling containment is inadequate",
      "Inspections are not documented",
    ],
    keywords: [
      "construction barrier",
      "containment wall",
      "dust barrier",
      "temporary construction wall",
      "barrier integrity",
      "construction containment",
      "infection control barrier",
      "construction zone separation",
    ],
    aiGuidance:
      "Map barrier designs, inspection logs, pressure records, photographs, deficiencies, and corrective actions. Physical evidence of barrier gaps or repeated failures should outweigh policy documentation.",
    evidenceFrequency:
      "Before construction begins and at intervals established by risk throughout the project",
    evidenceRetention:
      "Retained with infection-control and construction project records",
    responsibleRole: "Project Manager",
    validationMethod:
      "Physical inspection, document review, monitoring-record review, and corrective-action verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Barrier Framework",
      },
      {
        authority: "CDC",
        title: "Environmental Infection Control Guidance",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Containment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-PRESS-001",
    slug: "hhs-construction-pressure-and-airflow-control",
    title: "Construction Pressure and Airflow Control",
    intent:
      "Airflow and pressure relationships prevent construction contaminants from migrating into occupied healthcare areas.",
    description:
      "Pressure control includes exhaust capacity, pressure differentials, monitoring devices, alarm limits, filter condition, discharge locations, door management, loss-of-pressure response, and restoration.",
    requirement:
      "Establish, continuously maintain, monitor, and document required construction-zone pressure relationships and airflow controls, and promptly respond to deviations.",
    surveyorLooksFor: [
      "Defined pressure requirements",
      "Continuous or required-frequency monitoring",
      "Visible monitoring devices",
      "Appropriate exhaust discharge",
      "Documented response to pressure loss",
      "Verification following barrier or equipment changes",
    ],
    evidenceExamples: [
      "Pressure-monitoring log",
      "Continuous monitor trend",
      "Differential-pressure reading",
      "Exhaust setup inspection",
      "Pressure-loss incident report",
      "Corrective-action record",
    ],
    commonFindings: [
      "Negative pressure is not maintained",
      "Monitoring logs contain gaps",
      "Devices are not calibrated or verified",
      "Exhaust discharges near air intakes",
      "Pressure alarms are ignored",
      "Corrective response is not documented",
    ],
    keywords: [
      "construction negative pressure",
      "pressure monitoring",
      "construction airflow",
      "HEPA exhaust",
      "differential pressure",
      "containment pressure",
      "construction dust control",
      "pressure loss",
    ],
    aiGuidance:
      "Map pressure requirements, logs, continuous trends, monitor-verification records, alarm events, exhaust inspections, incident reports, and corrective actions. Missing monitoring during occupied construction should substantially reduce confidence.",
    evidenceFrequency:
      "Continuously or at the frequency established by the approved risk-control plan",
    evidenceRetention:
      "Retained with infection-control and construction monitoring records",
    responsibleRole: "Project Manager",
    validationMethod:
      "Trend review, field measurement, equipment inspection, and incident review",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Pressure Control Framework",
      },
      {
        authority: "CDC",
        title: "Environmental Infection Control Guidance",
      },
      {
        authority: "ASHRAE",
        title: "Ventilation of Health Care Facilities",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Airflow Control",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-UTIL-001",
    slug: "hhs-construction-utility-shutdown-management",
    title: "Construction Utility Shutdown Management",
    intent:
      "Planned construction-related utility interruptions are evaluated, approved, communicated, controlled, and restored without unacceptable patient-care or operational risk.",
    description:
      "Utility shutdown management may include electricity, emergency power, medical gas, water, sewer, HVAC, steam, communications, fire alarm, sprinkler, elevators, and information systems.",
    requirement:
      "Use a documented utility shutdown process that identifies affected systems and areas, evaluates clinical impact, obtains required approvals, communicates the outage, establishes contingency measures, verifies restoration, and documents completion.",
    surveyorLooksFor: [
      "A completed shutdown request",
      "Identification of affected departments and systems",
      "Clinical and facilities approval",
      "Documented contingency plans",
      "Timely communication before and after the outage",
      "Testing and verification before return to normal operation",
    ],
    evidenceExamples: [
      "Utility shutdown request",
      "Impact assessment",
      "Department approval",
      "Outage communication",
      "Contingency plan",
      "Restoration checklist",
      "Post-shutdown report",
    ],
    commonFindings: [
      "Shutdowns occur without formal approval",
      "Affected departments are not identified",
      "Contingency plans are incomplete",
      "Outage communication is delayed",
      "Systems are restored without testing",
      "Post-shutdown deficiencies are not documented",
    ],
    keywords: [
      "construction utility shutdown",
      "planned outage",
      "utility interruption permit",
      "medical gas shutdown",
      "electrical shutdown",
      "water shutdown",
      "construction outage",
      "utility restoration",
    ],
    aiGuidance:
      "Map shutdown requests, impact assessments, approvals, communications, contingency plans, testing, restoration records, and post-event reviews. Contractor notifications alone should not prove organizational approval or safe restoration.",
    evidenceFrequency:
      "Each time construction requires a planned utility interruption or impairment",
    evidenceRetention:
      "Retained with project, utility-management, and life-safety records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Document review, event reconstruction, system verification, and department interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Utility Shutdown Framework",
      },
      {
        authority: "NFPA",
        title: "Health Care Facilities Code",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Utility Shutdowns",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-HOT-001",
    slug: "hhs-construction-hot-work-management",
    title: "Construction Hot Work Management",
    intent:
      "Welding, cutting, brazing, soldering, grinding, roofing, and other spark- or heat-producing work is controlled to prevent fire, smoke, injury, and operational disruption.",
    description:
      "Hot-work controls include permit authorization, hazard inspection, combustible removal, fire protection, ventilation, fire watch, gas-cylinder control, alarm impairment coordination, and post-work monitoring.",
    requirement:
      "Require and document a hot-work permit process for applicable construction activities, implement required fire-prevention controls, maintain fire watch when indicated, and verify the area after work is completed.",
    surveyorLooksFor: [
      "A completed permit before hot work begins",
      "Removal or protection of combustibles",
      "Available fire-extinguishing equipment",
      "Qualified fire watch when required",
      "Control of cylinders and ignition sources",
      "Post-work inspection and permit closure",
    ],
    evidenceExamples: [
      "Hot-work permit",
      "Pre-work inspection",
      "Fire-watch log",
      "Contractor training record",
      "Post-work inspection",
      "Permit closure record",
    ],
    commonFindings: [
      "Hot work occurs without a permit",
      "Combustibles are not protected",
      "Fire watch is not documented",
      "The permit area is not clearly defined",
      "Post-work monitoring is incomplete",
      "Contractors do not understand facility requirements",
    ],
    keywords: [
      "hot work permit",
      "construction welding",
      "fire watch",
      "spark-producing work",
      "cutting and brazing",
      "construction fire safety",
      "hot work inspection",
      "contractor hot work",
    ],
    aiGuidance:
      "Map permits, pre-work inspections, fire-watch logs, contractor qualifications, impairment coordination, post-work checks, and closure records. Evidence created after the work date should receive reduced confidence.",
    evidenceFrequency:
      "For each applicable hot-work activity",
    evidenceRetention:
      "Retained according to fire-safety, construction, and organizational requirements",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Permit review, active-work inspection, fire-watch verification, and contractor interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Hot Work Framework",
      },
      {
        authority: "NFPA",
        title: "Standard for Fire Prevention During Welding, Cutting, and Other Hot Work",
        citation: "NFPA 51B",
      },
      {
        authority: "OSHA",
        title: "Welding, Cutting, and Brazing",
        citation: "29 CFR 1910 Subpart Q",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Hot Work",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-HAZ-001",
    slug: "hhs-construction-hazardous-materials-management",
    title: "Construction Hazardous Materials Management",
    intent:
      "Hazardous building materials and construction chemicals are identified and controlled before disturbance or use.",
    description:
      "Applicable hazards may include asbestos, lead, silica, mold, mercury, refrigerants, PCBs, hazardous coatings, adhesives, solvents, fuels, and contaminated materials.",
    requirement:
      "Evaluate construction areas for hazardous materials before disturbance, maintain required surveys and reports, use qualified personnel, implement containment and exposure controls, and document removal, disposal, or safe management.",
    surveyorLooksFor: [
      "Preconstruction hazardous-material review",
      "Required surveys before disturbance",
      "Qualified abatement or remediation contractors",
      "Exposure and containment controls",
      "Waste manifests and disposal records",
      "Clearance or completion documentation",
    ],
    evidenceExamples: [
      "Asbestos survey",
      "Lead assessment",
      "Silica-control plan",
      "Hazardous-material inventory",
      "Abatement report",
      "Waste manifest",
      "Clearance documentation",
    ],
    commonFindings: [
      "Materials are disturbed before assessment",
      "Surveys do not cover the work area",
      "Contractor qualifications are not verified",
      "Containment is inadequate",
      "Waste documentation is incomplete",
      "Clearance testing is missing",
    ],
    keywords: [
      "construction hazardous materials",
      "asbestos survey",
      "lead assessment",
      "silica control",
      "abatement",
      "hazardous building material",
      "construction chemical safety",
      "remediation clearance",
    ],
    aiGuidance:
      "Map surveys, assessments, abatement plans, contractor qualifications, exposure controls, air monitoring, waste manifests, clearance reports, and corrective actions. Work beginning before required assessment should be treated as critical risk.",
    evidenceFrequency:
      "Before disturbing applicable materials and throughout abatement, remediation, or hazardous-material work",
    evidenceRetention:
      "Retained according to environmental, occupational-safety, legal, and permanent project-record requirements",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review, active-work inspection, contractor-file review, and disposal-record verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Hazardous Materials Framework",
      },
      {
        authority: "OSHA",
        title: "Applicable Hazardous Materials and Exposure Standards",
      },
      {
        authority: "EPA",
        title: "Applicable Hazardous Building Material Requirements",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Hazardous Materials",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-CONTRACT-001",
    slug: "hhs-construction-contractor-oversight",
    title: "Construction Contractor Oversight",
    intent:
      "Construction contractors and subcontractors are qualified, oriented, monitored, and held accountable for healthcare-specific safety and compliance requirements.",
    description:
      "Contractor oversight includes qualification, insurance, licensing, orientation, infection control, life safety, security, permits, worker conduct, housekeeping, incident reporting, documentation, and corrective action.",
    requirement:
      "Establish and document contractor qualification, orientation, monitoring, and enforcement processes for all applicable construction contractors and subcontractors.",
    surveyorLooksFor: [
      "Verification of contractor qualifications and insurance",
      "Healthcare-specific contractor orientation",
      "Defined safety and infection-control requirements",
      "Routine contractor-performance monitoring",
      "Documented correction of violations",
      "Control of subcontractors",
    ],
    evidenceExamples: [
      "Contractor qualification file",
      "Certificate of insurance",
      "Contractor orientation record",
      "Safety acknowledgment",
      "Inspection report",
      "Violation notice",
      "Corrective-action record",
    ],
    commonFindings: [
      "Subcontractors are not oriented",
      "Insurance or licenses are expired",
      "Contractors do not follow barrier requirements",
      "Smoking or prohibited conduct occurs",
      "Violations are not documented",
      "Repeat noncompliance is not escalated",
    ],
    keywords: [
      "construction contractor oversight",
      "contractor orientation",
      "subcontractor control",
      "healthcare construction contractor",
      "contractor safety",
      "construction vendor qualification",
      "contractor violation",
      "construction compliance monitoring",
    ],
    aiGuidance:
      "Map contractor files, licenses, insurance, orientation records, acknowledgments, inspections, violations, corrective actions, and escalation records. A general safety orientation should receive reduced confidence unless healthcare-specific controls are included.",
    evidenceFrequency:
      "Before contractor access and continuously throughout project activity",
    evidenceRetention:
      "Retained with vendor, safety, construction, and project records",
    responsibleRole: "Project Manager",
    validationMethod:
      "Contractor-file review, active-project inspection, record review, and contractor interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Contractor Oversight Framework",
      },
      {
        authority: "OSHA",
        title: "Multi-Employer Workplace Safety Requirements",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Contractor Oversight",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-ACCESS-001",
    slug: "hhs-construction-access-security-and-traffic-control",
    title: "Construction Access, Security, and Traffic Control",
    intent:
      "Construction workers, materials, tools, vehicles, and debris move through the facility without compromising patient safety, security, emergency access, or normal operations.",
    description:
      "Access controls include worker identification, restricted routes, badge access, staging areas, delivery schedules, elevators, parking, loading docks, emergency routes, patient separation, and after-hours access.",
    requirement:
      "Establish and enforce project-specific access, security, traffic, delivery, and debris-removal controls that separate construction activity from patients and preserve emergency and operational access.",
    surveyorLooksFor: [
      "Defined contractor access points",
      "Controlled worker identification and badging",
      "Approved material and debris routes",
      "Preserved emergency access",
      "Secure construction-zone boundaries",
      "Coordination of deliveries and vehicle traffic",
    ],
    evidenceExamples: [
      "Construction logistics plan",
      "Access-control plan",
      "Worker badge list",
      "Delivery schedule",
      "Debris-route map",
      "Security inspection",
      "Traffic-control plan",
    ],
    commonFindings: [
      "Workers enter through patient areas",
      "Construction doors are unsecured",
      "Debris routes cross clean areas",
      "Emergency routes are blocked",
      "Deliveries disrupt patient access",
      "Badges are not controlled",
    ],
    keywords: [
      "construction access control",
      "construction security",
      "contractor badge",
      "construction traffic plan",
      "debris route",
      "construction logistics",
      "delivery route",
      "construction zone security",
    ],
    aiGuidance:
      "Map logistics plans, route maps, badge lists, delivery schedules, security inspections, incident reports, and corrective actions. Physical evidence of uncontrolled access or blocked emergency routes should significantly increase risk.",
    evidenceFrequency:
      "Established before mobilization and monitored throughout the project",
    evidenceRetention:
      "Retained with security and construction project records",
    responsibleRole: "Project Manager",
    validationMethod:
      "Physical inspection, access-record review, logistics-plan review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Access and Logistics Framework",
      },
      {
        authority: "OSHA",
        title: "Applicable Construction Access and Traffic Safety Requirements",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Access and Logistics",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-HOUSE-001",
    slug: "hhs-construction-housekeeping-and-debris-control",
    title: "Construction Housekeeping and Debris Control",
    intent:
      "Construction areas and routes are maintained to control dust, debris, combustibles, pests, trip hazards, and contamination.",
    description:
      "Housekeeping controls include routine cleaning, covered carts, debris containment, waste removal, combustible-load control, floor protection, tool storage, spill response, and final cleaning.",
    requirement:
      "Maintain construction areas, access routes, staging areas, and debris-removal pathways in a clean, orderly, and controlled condition, and document routine inspection and correction of deficiencies.",
    surveyorLooksFor: [
      "Routine construction-zone cleaning",
      "Covered and controlled debris transport",
      "Limited combustible loading",
      "Clear walking and egress paths",
      "Prompt spill and dust response",
      "Documented final cleaning before turnover",
    ],
    evidenceExamples: [
      "Construction housekeeping inspection",
      "Debris-removal plan",
      "Cleaning schedule",
      "Combustible-load inspection",
      "Deficiency report",
      "Final cleaning record",
    ],
    commonFindings: [
      "Debris accumulates in the work area",
      "Carts are uncovered",
      "Dust is visible outside containment",
      "Egress paths are obstructed",
      "Combustibles are excessive",
      "Final cleaning is incomplete",
    ],
    keywords: [
      "construction housekeeping",
      "debris control",
      "construction cleaning",
      "covered debris cart",
      "combustible loading",
      "construction dust",
      "construction waste",
      "project final cleaning",
    ],
    aiGuidance:
      "Map cleaning schedules, inspections, route plans, photographs, deficiency reports, waste records, and final cleaning documentation. Repeat dust or debris findings should increase risk.",
    evidenceFrequency:
      "Continuously maintained and inspected at intervals established by project risk",
    evidenceRetention:
      "Retained with infection-control, life-safety, and project records",
    responsibleRole: "Project Manager",
    validationMethod:
      "Physical inspection, record review, and corrective-action verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Housekeeping Framework",
      },
      {
        authority: "OSHA",
        title: "Construction Housekeeping Requirements",
      },
      {
        authority: "NFPA",
        title: "Applicable Construction Fire Safety Requirements",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Housekeeping",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-INSPECT-001",
    slug: "hhs-construction-inspection-and-compliance-monitoring",
    title: "Construction Inspection and Compliance Monitoring",
    intent:
      "Active construction is routinely inspected to verify compliance with approved safety, infection-control, life-safety, security, and operational controls.",
    description:
      "Monitoring may include barriers, pressure, housekeeping, egress, fire protection, utilities, hot work, contractor conduct, hazardous materials, signage, routes, permits, and corrective actions.",
    requirement:
      "Conduct and document construction inspections at frequencies appropriate to project risk, assign deficiencies, establish due dates, escalate significant violations, and verify closure.",
    surveyorLooksFor: [
      "Defined inspection frequency",
      "Use of project-specific criteria",
      "Multidisciplinary participation when appropriate",
      "Documented deficiencies and responsible parties",
      "Escalation of critical violations",
      "Verification of corrective-action closure",
    ],
    evidenceExamples: [
      "Construction inspection checklist",
      "Daily project round",
      "Infection-control inspection",
      "Life-safety inspection",
      "Corrective-action tracker",
      "Deficiency photographs",
      "Closure verification",
    ],
    commonFindings: [
      "Inspection frequency does not match project risk",
      "Checklists are incomplete",
      "Critical findings are not escalated",
      "Repeat violations continue",
      "Corrective actions lack due dates",
      "Closed findings are not verified",
    ],
    keywords: [
      "construction inspection",
      "project compliance round",
      "construction monitoring",
      "daily construction inspection",
      "project deficiency",
      "construction corrective action",
      "healthcare construction audit",
      "construction safety round",
    ],
    aiGuidance:
      "Map inspection records, checklists, photographs, deficiency trackers, escalation records, corrective actions, and closure verification. Evaluate date continuity, repeated violations, overdue actions, and inspection coverage.",
    evidenceFrequency:
      "At frequencies established by project risk, including daily monitoring where required",
    evidenceRetention:
      "Retained with construction, infection-control, life-safety, and closeout records",
    responsibleRole: "Project Manager",
    validationMethod:
      "Record review, active-project inspection, trend analysis, and closure verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Inspection Framework",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Inspection and Monitoring",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-COMM-001",
    slug: "hhs-construction-communication-and-notification",
    title: "Construction Communication and Notification",
    intent:
      "Affected departments receive timely and accurate information about construction risks, outages, routes, noise, access changes, and operational impacts.",
    description:
      "Communication planning addresses routine updates, emergency notifications, utility shutdowns, infection-control changes, noise and vibration, blocked routes, alarm impairments, schedule changes, and complaint response.",
    requirement:
      "Maintain and implement a project communication plan that identifies affected stakeholders, notification responsibilities, communication methods, timing, escalation requirements, and documentation expectations.",
    surveyorLooksFor: [
      "Identification of affected departments",
      "Advance notice of disruptive work",
      "Communication before utility outages",
      "Immediate notification of control failures",
      "Routine project-status updates",
      "Documentation of major communications",
    ],
    evidenceExamples: [
      "Project communication plan",
      "Department notification",
      "Construction bulletin",
      "Utility outage notice",
      "Meeting minutes",
      "Emergency notification record",
      "Complaint-response log",
    ],
    commonFindings: [
      "Departments are surprised by disruptive work",
      "Outage notifications are late",
      "Barrier or pressure failures are not communicated",
      "Patient-care impacts are not discussed",
      "Communication responsibilities are unclear",
      "Complaints are not tracked",
    ],
    keywords: [
      "construction communication",
      "project notification",
      "construction bulletin",
      "outage notice",
      "renovation communication",
      "construction impact notice",
      "project stakeholder update",
      "construction complaint",
    ],
    aiGuidance:
      "Map communication plans, stakeholder lists, notices, emails, meeting minutes, outage alerts, emergency notifications, and complaint logs. Evidence should demonstrate that communication occurred before the impact whenever possible.",
    evidenceFrequency:
      "Throughout project planning and execution and before each significant operational impact",
    evidenceRetention:
      "Retained with the permanent project file",
    responsibleRole: "Project Manager",
    validationMethod:
      "Document review, stakeholder interview, and event reconstruction",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Communication Framework",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Communication",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-COMMISSION-001",
    slug: "hhs-construction-commissioning-and-functional-testing",
    title: "Construction Commissioning and Functional Testing",
    intent:
      "New and modified building systems are tested, documented, and verified before patient care or normal operations begin.",
    description:
      "Commissioning may include HVAC, electrical systems, emergency power, medical gas, plumbing, fire alarm, sprinklers, controls, security systems, information systems, room pressure, temperature, humidity, alarms, and integrated-system performance.",
    requirement:
      "Complete and document commissioning, functional testing, balancing, certification, deficiency correction, and final acceptance for applicable new or modified systems before operational turnover.",
    surveyorLooksFor: [
      "A project-specific commissioning plan",
      "Documented functional test procedures",
      "Verification of system performance",
      "Correction and retesting of deficiencies",
      "Required certifications and approvals",
      "Formal organizational acceptance",
    ],
    evidenceExamples: [
      "Commissioning plan",
      "Functional performance test",
      "Testing and balancing report",
      "Medical gas certification",
      "Fire alarm acceptance test",
      "Deficiency log",
      "Final acceptance record",
    ],
    commonFindings: [
      "Systems are placed into service before testing",
      "Test procedures are incomplete",
      "Deficiencies remain open at occupancy",
      "Retesting is not documented",
      "Required certifications are missing",
      "Facilities staff are not involved in acceptance",
    ],
    keywords: [
      "construction commissioning",
      "functional performance testing",
      "system acceptance",
      "testing and balancing",
      "TAB report",
      "medical gas certification",
      "fire alarm acceptance",
      "project turnover testing",
    ],
    aiGuidance:
      "Map commissioning plans, test procedures, measured results, balancing reports, certifications, deficiency logs, retesting, and acceptance records. Substantial completion or contractor certification alone should not prove operational readiness.",
    evidenceFrequency:
      "Before system turnover, occupancy, or return to clinical service",
    evidenceRetention:
      "Retained as permanent facility and project records",
    responsibleRole: "Project Manager",
    validationMethod:
      "Document review, test-result verification, system sampling, and facilities interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Commissioning Framework",
      },
      {
        authority: "ASHRAE",
        title: "Commissioning Process Requirements",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
      },
      {
        authority: "NFPA",
        title: "Applicable System Testing and Acceptance Standards",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Commissioning",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-CLOSE-001",
    slug: "hhs-construction-project-closeout-and-turnover",
    title: "Construction Project Closeout and Turnover",
    intent:
      "Completed projects are formally accepted with complete records, corrected deficiencies, trained staff, updated inventories, and verified operational readiness.",
    description:
      "Closeout includes inspections, punch lists, permits, certificates, as-built drawings, operation and maintenance manuals, warranties, training, spare parts, asset setup, preventive maintenance, testing, cleaning, and occupancy authorization.",
    requirement:
      "Complete and document formal project closeout before final acceptance, including correction of critical deficiencies, turnover of required records, staff training, asset and maintenance setup, and operational authorization.",
    surveyorLooksFor: [
      "Completed final inspection",
      "Closed or risk-controlled punch-list items",
      "Required permits and occupancy approvals",
      "As-built drawings and manuals",
      "Staff training and system turnover",
      "Asset inventory and preventive-maintenance setup",
    ],
    evidenceExamples: [
      "Project closeout checklist",
      "Final inspection report",
      "Punch-list tracker",
      "Certificate of occupancy",
      "As-built drawings",
      "Operations and maintenance manuals",
      "Training records",
      "Asset turnover report",
    ],
    commonFindings: [
      "Critical punch-list items remain open",
      "As-built drawings are missing",
      "Maintenance manuals are incomplete",
      "Facilities staff are not trained",
      "New assets are absent from the CMMS",
      "Required permits or certificates are missing",
    ],
    keywords: [
      "construction closeout",
      "project turnover",
      "punch list",
      "as-built drawings",
      "operations and maintenance manuals",
      "certificate of occupancy",
      "facility turnover",
      "construction acceptance",
    ],
    aiGuidance:
      "Map closeout checklists, final inspections, punch lists, permits, certificates, as-builts, manuals, warranties, training, asset setup, preventive-maintenance setup, and acceptance records. A contractor invoice or completion letter alone should not prove full turnover.",
    evidenceFrequency:
      "At completion of each construction or renovation project",
    evidenceRetention:
      "Permanent project, facility, maintenance, warranty, and regulatory records retained according to organizational requirements",
    responsibleRole: "Project Manager",
    validationMethod:
      "Closeout-file review, physical inspection, CMMS verification, and stakeholder interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Project Closeout Framework",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
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
  {
    accreditor: "HHS",
    chapter: "Construction Management",
    code: "HHS-CM-EVAL-001",
    slug: "hhs-construction-management-program-evaluation",
    title: "Construction Management Program Evaluation",
    intent:
      "The organization periodically evaluates whether construction controls are implemented consistently and effectively protect patients, staff, visitors, and operations.",
    description:
      "Program evaluation reviews risk-assessment completion, infection-control performance, interim life safety, inspections, utility shutdowns, contractor performance, incidents, deficiencies, commissioning, closeout, and recurring project risks.",
    requirement:
      "Complete and document a periodic evaluation of the construction management program, including compliance trends, recurring deficiencies, incidents, corrective-action completion, contractor performance, and required program revisions.",
    surveyorLooksFor: [
      "A documented periodic program evaluation",
      "Review of preconstruction assessments",
      "Analysis of infection-control and life-safety performance",
      "Evaluation of project deficiencies and incidents",
      "Review of contractor compliance",
      "Documented revisions and leadership approval",
    ],
    evidenceExamples: [
      "Annual construction program evaluation",
      "Project compliance summary",
      "ICRA trend analysis",
      "ILSM deficiency report",
      "Contractor performance review",
      "Incident trend report",
      "Program revision log",
    ],
    commonFindings: [
      "No formal evaluation exists",
      "Project findings are not trended",
      "Repeat contractor violations are ignored",
      "ICRA and ILSM failures are not analyzed",
      "Closeout problems recur across projects",
      "Program revisions are not documented",
    ],
    keywords: [
      "construction program evaluation",
      "healthcare project annual review",
      "construction compliance trends",
      "ICRA performance",
      "ILSM performance",
      "contractor performance review",
      "project incident analysis",
      "construction annual report",
    ],
    aiGuidance:
      "Map annual evaluations, project summaries, inspection trends, ICRA and ILSM findings, contractor reviews, incident analyses, corrective actions, leadership approvals, and revision records. The evidence should evaluate operational effectiveness, not merely policy presence.",
    evidenceFrequency:
      "At least annually and after significant construction incidents or material program changes",
    evidenceRetention:
      "Retained with construction governance and performance-improvement records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, data analysis, project sampling, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Construction Management Program Evaluation Framework",
      },
    ],
    department: "Facilities",
    domain: "Construction Management",
    category: "Program Evaluation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];