import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed healthcare emergency management survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to evaluate healthcare emergency preparedness,
 * identify missing evidence, recognize response gaps, and support
 * mapping to applicable regulatory, accreditation, and technical
 * authorities.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsEmergencyManagementStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-PROG-001",
    slug: "hhs-healthcare-emergency-management-program",
    title: "Healthcare Emergency Management Program",
    intent:
      "The organization maintains a coordinated emergency management program capable of sustaining safe healthcare operations during emergencies and disasters.",
    description:
      "The emergency management program establishes governance, risk assessment, mitigation, preparedness, response, recovery, communication, continuity, training, exercises, documentation, and program evaluation.",
    requirement:
      "Maintain and implement a comprehensive emergency management program that addresses identified hazards, assigns responsibilities, establishes response and recovery procedures, supports continuity of operations, and evaluates program effectiveness.",
    surveyorLooksFor: [
      "A current and approved emergency management plan",
      "A documented hazard vulnerability analysis",
      "Defined emergency roles and responsibilities",
      "Response procedures linked to identified hazards",
      "Training and exercise documentation",
      "Periodic program evaluation and improvement",
    ],
    evidenceExamples: [
      "Emergency management plan",
      "Emergency operations plan",
      "Hazard vulnerability analysis",
      "Emergency management committee minutes",
      "Exercise documentation",
      "After-action reports",
      "Annual program evaluation",
    ],
    commonFindings: [
      "The emergency plan is outdated",
      "The plan does not reflect current hazards",
      "Responsibilities are unclear",
      "Departments maintain conflicting procedures",
      "Exercises do not test identified risks",
      "Corrective actions are not tracked",
    ],
    keywords: [
      "emergency management program",
      "emergency operations plan",
      "disaster preparedness",
      "emergency preparedness",
      "hospital emergency plan",
      "incident response",
      "continuity of operations",
      "emergency management",
    ],
    aiGuidance:
      "Map organization-wide emergency plans, hazard assessments, committee records, training, exercises, after-action reports, corrective actions, and annual evaluations. A policy alone should not be treated as proof that the emergency program is implemented.",
    evidenceFrequency:
      "Reviewed at least annually and whenever hazards, operations, facilities, or applicable requirements materially change",
    evidenceRetention:
      "Current program documents and emergency records from the applicable survey and organizational retention period",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review, staff interview, exercise review, and operational verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Emergency Management Framework",
        notes:
          "Original HHS operational control intended for cross-accreditor survey readiness.",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Requirements",
        notes:
          "Apply current federal emergency preparedness requirements and interpretive guidance.",
      },
      {
        authority: "FEMA",
        title: "National Incident Management System",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-HVA-001",
    slug: "hhs-hazard-vulnerability-analysis",
    title: "Hazard Vulnerability Analysis",
    intent:
      "The organization identifies and prioritizes natural, technological, human-caused, and operational hazards that could disrupt care or threaten life safety.",
    description:
      "The hazard vulnerability analysis evaluates probability, severity, preparedness, internal response capability, external response capability, infrastructure impact, patient impact, and business continuity risk.",
    requirement:
      "Complete and periodically update a documented hazard vulnerability analysis that identifies priority hazards, evaluates organizational capabilities, and informs mitigation, preparedness, training, exercise, and continuity planning.",
    surveyorLooksFor: [
      "A current organization-specific hazard vulnerability analysis",
      "Evaluation of natural, technological, and human-caused hazards",
      "Prioritization based on probability and impact",
      "Assessment of current response capabilities",
      "Use of findings in emergency planning",
      "Reassessment after significant events or changes",
    ],
    evidenceExamples: [
      "Hazard vulnerability analysis",
      "Community risk assessment",
      "Emergency preparedness risk matrix",
      "Regional hazard assessment",
      "Department-specific risk review",
      "HVA approval record",
    ],
    commonFindings: [
      "The HVA is generic",
      "Local hazards are omitted",
      "Scoring is not supported",
      "The HVA is not linked to exercises",
      "Operational changes are not reflected",
      "The analysis is not formally approved",
    ],
    keywords: [
      "hazard vulnerability analysis",
      "HVA",
      "emergency risk assessment",
      "disaster risk assessment",
      "hazard matrix",
      "community hazard assessment",
      "emergency preparedness risk",
      "facility hazard assessment",
    ],
    aiGuidance:
      "Map completed organization-specific hazard assessments, scoring tools, approvals, regional data, and planning decisions. Generic templates without local hazard analysis should receive low confidence.",
    evidenceFrequency:
      "At least annually and after significant incidents, facility changes, service changes, or newly identified hazards",
    evidenceRetention:
      "Retained with emergency planning and program evaluation records",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review, leadership interview, and comparison to emergency planning priorities",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Hazard Vulnerability Analysis Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Risk Assessment Requirements",
      },
      {
        authority: "FEMA",
        title: "Threat and Hazard Identification Guidance",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Risk Assessment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-GOV-001",
    slug: "hhs-emergency-management-governance",
    title: "Emergency Management Governance",
    intent:
      "Leadership and multidisciplinary stakeholders provide oversight of emergency preparedness, response capability, corrective actions, and program performance.",
    description:
      "Emergency management governance includes defined authority, committee participation, approval processes, resource decisions, risk escalation, performance review, and leadership reporting.",
    requirement:
      "Maintain documented emergency management governance that defines oversight responsibilities, reviews priority risks and exercises, tracks corrective actions, and communicates material preparedness concerns to leadership.",
    surveyorLooksFor: [
      "Defined emergency management leadership",
      "Multidisciplinary participation",
      "Regular review of preparedness activities",
      "Leadership approval of plans and priorities",
      "Corrective-action tracking",
      "Escalation of unresolved readiness concerns",
    ],
    evidenceExamples: [
      "Emergency management committee charter",
      "Committee roster",
      "Meeting minutes",
      "Leadership reports",
      "Corrective-action tracker",
      "Resource approval records",
    ],
    commonFindings: [
      "Emergency oversight is informal",
      "Meeting activity is not documented",
      "Key departments do not participate",
      "Exercise findings are not tracked",
      "Leadership is unaware of major gaps",
      "Resources are not aligned to identified hazards",
    ],
    keywords: [
      "emergency management committee",
      "emergency governance",
      "emergency oversight",
      "preparedness committee",
      "emergency leadership",
      "emergency management minutes",
      "preparedness corrective action",
    ],
    aiGuidance:
      "Map charters, rosters, minutes, leadership reports, risk escalations, resource decisions, and action tracking. A roster alone should not be treated as proof of active governance.",
    evidenceFrequency:
      "At the frequency established by the organization and whenever major preparedness issues require escalation",
    evidenceRetention:
      "Retained with emergency management governance records",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Emergency Management Governance Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Program Requirements",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Governance",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-ICS-001",
    slug: "hhs-incident-command-system",
    title: "Incident Command System",
    intent:
      "The organization uses a scalable command structure to coordinate emergency leadership, operations, planning, logistics, finance, communication, and recovery.",
    description:
      "The incident command system defines activation criteria, command roles, authority, succession, documentation, span of control, operational periods, situation reporting, and demobilization.",
    requirement:
      "Maintain and implement an incident command structure that can be activated based on emergency conditions, assigns qualified leaders, supports operational coordination, and documents key decisions and actions.",
    surveyorLooksFor: [
      "Defined incident command roles",
      "Clear activation and escalation criteria",
      "Role assignments and succession plans",
      "Documented operational objectives",
      "Situation reports and command records",
      "Formal demobilization and transition to recovery",
    ],
    evidenceExamples: [
      "Hospital incident command procedures",
      "Incident command job action sheets",
      "Command center activation log",
      "Incident action plan",
      "Situation status report",
      "Demobilization plan",
    ],
    commonFindings: [
      "Command roles are unclear",
      "Staff do not understand activation",
      "Incident command documents are incomplete",
      "Operational objectives are not recorded",
      "Role succession is not defined",
      "The organization does not formally demobilize",
    ],
    keywords: [
      "incident command",
      "hospital incident command system",
      "HICS",
      "incident action plan",
      "command center",
      "emergency command",
      "incident management",
      "job action sheet",
    ],
    aiGuidance:
      "Map incident command procedures, job action sheets, activation logs, incident action plans, situation reports, decision records, and demobilization documentation. Generic command templates should receive reduced confidence unless completed during exercises or events.",
    evidenceFrequency:
      "Maintained continuously and activated during applicable exercises and emergency events",
    evidenceRetention:
      "Retained with exercise, incident, and emergency response records",
    responsibleRole: "Incident Commander",
    validationMethod:
      "Document review, exercise observation, staff interview, and incident reconstruction",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Incident Command Framework",
      },
      {
        authority: "FEMA",
        title: "National Incident Management System",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Incident Command",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-COMM-001",
    slug: "hhs-emergency-communication-plan",
    title: "Emergency Communication Plan",
    intent:
      "The organization can rapidly communicate accurate and actionable information during emergencies to staff, patients, families, emergency partners, authorities, and the public.",
    description:
      "The communication plan addresses primary and backup systems, contact lists, notification authority, message approval, communication with external agencies, patient and family communication, media response, and system failures.",
    requirement:
      "Maintain and test a documented emergency communication plan that includes primary and alternate methods, current contact information, authorized messaging responsibilities, and processes for internal and external communication.",
    surveyorLooksFor: [
      "Current emergency contact lists",
      "Primary and backup communication methods",
      "Defined notification authority",
      "Communication with emergency partners",
      "Procedures for patient and family notification",
      "Testing of communication systems",
    ],
    evidenceExamples: [
      "Emergency communication plan",
      "Emergency contact list",
      "Mass-notification test",
      "Radio test log",
      "Satellite phone test",
      "Emergency notification record",
      "Media communication procedure",
    ],
    commonFindings: [
      "Contact lists are outdated",
      "Backup systems are not tested",
      "Staff do not know who may issue messages",
      "External partners are not included",
      "Communication failures are not addressed",
      "Patient and family communication is not planned",
    ],
    keywords: [
      "emergency communication",
      "mass notification",
      "emergency contact list",
      "backup communication",
      "emergency radio",
      "incident communication",
      "staff notification",
      "disaster communication",
    ],
    aiGuidance:
      "Map communication plans, contact lists, system tests, notification records, backup-method tests, partner communications, and corrective actions. Contact lists without recent validation should receive reduced confidence.",
    evidenceFrequency:
      "Reviewed periodically, tested at planned intervals, and updated whenever contacts or communication systems change",
    evidenceRetention:
      "Retained with emergency preparedness testing and incident records",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review, system testing, staff interview, and contact-list validation",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Emergency Communication Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Communication Plan Requirements",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Communication",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-COOP-001",
    slug: "hhs-continuity-of-operations",
    title: "Continuity of Operations",
    intent:
      "The organization sustains essential patient-care, support, administrative, and infrastructure functions during disruptions.",
    description:
      "Continuity planning identifies essential services, maximum tolerable downtime, alternate work methods, staffing strategies, records access, supply needs, succession, relocation, remote operations, and recovery priorities.",
    requirement:
      "Maintain and implement continuity plans for essential operations that identify critical functions, responsible personnel, dependencies, alternate strategies, recovery priorities, and testing expectations.",
    surveyorLooksFor: [
      "Identification of essential functions",
      "Department-specific continuity procedures",
      "Leadership succession planning",
      "Alternate staffing and workspace strategies",
      "Recovery priorities and timelines",
      "Testing and revision of continuity plans",
    ],
    evidenceExamples: [
      "Continuity of operations plan",
      "Department continuity plans",
      "Business impact analysis",
      "Succession plan",
      "Alternate site plan",
      "Continuity exercise report",
    ],
    commonFindings: [
      "Continuity plans are generic",
      "Critical dependencies are not identified",
      "Department plans conflict",
      "Succession is unclear",
      "Alternate work methods are not feasible",
      "Plans are not exercised",
    ],
    keywords: [
      "continuity of operations",
      "COOP",
      "business continuity",
      "department continuity plan",
      "critical function",
      "operational resilience",
      "service continuity",
      "recovery planning",
    ],
    aiGuidance:
      "Map organization-wide and department continuity plans, business impact analyses, succession plans, dependency assessments, alternate strategies, exercises, and corrective actions. Generic plans without department-specific functions should receive reduced confidence.",
    evidenceFrequency:
      "Reviewed at least annually and whenever essential services, staffing, systems, or locations materially change",
    evidenceRetention:
      "Retained with emergency management and organizational continuity records",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review, department interview, exercise review, and dependency verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Continuity of Operations Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Continuity Requirements",
      },
      {
        authority: "FEMA",
        title: "Continuity Guidance",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Continuity of Operations",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-EVAC-001",
    slug: "hhs-evacuation-and-shelter-in-place",
    title: "Evacuation and Shelter-in-Place",
    intent:
      "The organization can safely evacuate, relocate, or shelter patients, staff, and visitors based on the hazard and facility conditions.",
    description:
      "Evacuation and shelter planning addresses decision authority, horizontal and vertical movement, patient prioritization, transportation, staffing, equipment, medications, records, accountability, receiving locations, and reentry.",
    requirement:
      "Maintain and test documented evacuation and shelter-in-place procedures that address patient populations, staffing, transportation, equipment, communication, accountability, alternate care locations, and reentry.",
    surveyorLooksFor: [
      "Clear evacuation decision authority",
      "Patient prioritization and movement methods",
      "Plans for mobility-impaired and high-acuity patients",
      "Transportation and destination arrangements",
      "Staff and patient accountability",
      "Reentry and return-to-service procedures",
    ],
    evidenceExamples: [
      "Evacuation plan",
      "Shelter-in-place procedure",
      "Patient movement plan",
      "Evacuation route map",
      "Transportation agreement",
      "Evacuation drill report",
      "Patient tracking tool",
    ],
    commonFindings: [
      "Plans do not address high-acuity patients",
      "Transportation assumptions are unrealistic",
      "Patient tracking is inadequate",
      "Staff do not know evacuation priorities",
      "Receiving facilities are not identified",
      "Reentry procedures are missing",
    ],
    keywords: [
      "hospital evacuation",
      "shelter in place",
      "patient evacuation",
      "horizontal evacuation",
      "vertical evacuation",
      "patient relocation",
      "evacuation drill",
      "emergency shelter",
    ],
    aiGuidance:
      "Map evacuation plans, route maps, patient movement tools, transportation agreements, drills, after-action reports, and corrective actions. Generic fire evacuation plans should receive reduced confidence unless they address full-facility and patient-care evacuation needs.",
    evidenceFrequency:
      "Reviewed at least annually and tested at frequencies established by the emergency management program",
    evidenceRetention:
      "Retained with emergency planning, exercise, and incident records",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review, exercise observation, staff interview, and route verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Evacuation and Shelter Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Evacuation Requirements",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Evacuation",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-UTILITY-001",
    slug: "hhs-emergency-utility-failure-response",
    title: "Emergency Utility Failure Response",
    intent:
      "The organization maintains safe operations during failures of electricity, water, medical gas, HVAC, communications, fuel, sewer, and other critical utilities.",
    description:
      "Utility failure planning addresses detection, notification, clinical restrictions, alternate sources, emergency equipment, shutdown, restoration, vendor response, incident command, and return-to-service verification.",
    requirement:
      "Maintain and implement utility failure response procedures for critical systems, including immediate actions, communication, alternate provisions, clinical coordination, restoration verification, and event documentation.",
    surveyorLooksFor: [
      "Procedures for major utility failures",
      "Clinical and operational response actions",
      "Alternate utility sources or contingency plans",
      "Clear notification and escalation",
      "Restoration verification",
      "Post-event review and corrective action",
    ],
    evidenceExamples: [
      "Utility failure plan",
      "Power outage procedure",
      "Water outage procedure",
      "Medical gas failure plan",
      "HVAC failure response",
      "Utility incident report",
      "Restoration checklist",
    ],
    commonFindings: [
      "Plans are too generic",
      "Clinical restrictions are unclear",
      "Backup resources are not verified",
      "Notification is delayed",
      "Restoration is not documented",
      "Repeat utility failures are not analyzed",
    ],
    keywords: [
      "utility failure",
      "power outage response",
      "water outage response",
      "medical gas failure",
      "HVAC emergency",
      "critical utility",
      "utility interruption",
      "emergency utility plan",
    ],
    aiGuidance:
      "Map utility failure procedures, incident logs, notifications, alternate-resource documentation, restoration testing, after-action reports, and corrective actions. Evidence should address specific utilities and patient-care impacts.",
    evidenceFrequency:
      "Reviewed periodically and implemented during each applicable utility interruption",
    evidenceRetention:
      "Retained with emergency management, facilities, and utility event records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, event reconstruction, system verification, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Emergency Utility Failure Response Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Utility Requirements",
      },
      {
        authority: "NFPA",
        title: "Health Care Facilities Code",
      },
    ],
    department: "Facilities",
    domain: "Emergency Management",
    category: "Utility Failure",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-SUPPLY-001",
    slug: "hhs-emergency-supplies-and-resource-management",
    title: "Emergency Supplies and Resource Management",
    intent:
      "The organization maintains access to supplies, equipment, medications, fuel, food, water, and other resources needed to sustain operations during emergencies.",
    description:
      "Resource planning addresses inventory, minimum quantities, storage, rotation, vendor arrangements, alternate suppliers, transportation, distribution, tracking, conservation, and replenishment.",
    requirement:
      "Identify critical emergency resources, establish minimum availability expectations, maintain current inventories and supplier arrangements, and verify access to alternate sources when normal supply chains are disrupted.",
    surveyorLooksFor: [
      "Identification of critical emergency resources",
      "Defined minimum quantities or sustainment periods",
      "Current inventory and rotation controls",
      "Alternate supplier arrangements",
      "Fuel and emergency water planning",
      "Distribution and conservation procedures",
    ],
    evidenceExamples: [
      "Emergency supply inventory",
      "Fuel supply agreement",
      "Emergency water agreement",
      "Alternate vendor list",
      "Emergency cache inspection",
      "Supply conservation plan",
    ],
    commonFindings: [
      "Inventories are inaccurate",
      "Supplies are expired",
      "Alternate vendors are not validated",
      "Fuel assumptions are unsupported",
      "Emergency water quantities are undefined",
      "Storage conditions are inadequate",
    ],
    keywords: [
      "emergency supplies",
      "disaster inventory",
      "emergency water",
      "emergency fuel",
      "critical supplies",
      "alternate vendor",
      "emergency cache",
      "resource management",
    ],
    aiGuidance:
      "Map emergency inventories, inspection records, supplier agreements, fuel and water plans, expiration controls, distribution procedures, and corrective actions. Agreements without current contact or capacity verification should receive reduced confidence.",
    evidenceFrequency:
      "Reviewed and inspected at intervals established by the emergency management program",
    evidenceRetention:
      "Retained with emergency resource and supply-chain preparedness records",
    responsibleRole: "Supply Chain Director",
    validationMethod:
      "Inventory review, storage inspection, agreement review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Emergency Resource Management Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Subsistence Requirements",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Resources and Supplies",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-STAFF-001",
    slug: "hhs-emergency-staffing-and-labor-management",
    title: "Emergency Staffing and Labor Management",
    intent:
      "The organization can maintain adequate staffing and workforce support during emergencies, prolonged operations, and staffing disruptions.",
    description:
      "Emergency staffing planning addresses call-back, alternate staffing, credentialing, labor pools, fatigue management, housing, transportation, food, childcare considerations, behavioral support, and staff accountability.",
    requirement:
      "Maintain emergency staffing procedures that address staffing shortages, call-back, reassignment, credential verification, staff support, accountability, and sustained operations.",
    surveyorLooksFor: [
      "Defined emergency staffing processes",
      "Call-back and notification procedures",
      "Alternate staffing strategies",
      "Credential verification for temporary personnel",
      "Staff accountability and welfare support",
      "Fatigue management during prolonged operations",
    ],
    evidenceExamples: [
      "Emergency staffing plan",
      "Call-back roster",
      "Labor pool procedure",
      "Temporary credentialing process",
      "Staff sheltering plan",
      "Fatigue-management guidance",
    ],
    commonFindings: [
      "Call-back lists are outdated",
      "Staffing assumptions are unrealistic",
      "Temporary credentialing is unclear",
      "Staff accountability is incomplete",
      "Prolonged operations are not addressed",
      "Staff support needs are omitted",
    ],
    keywords: [
      "emergency staffing",
      "disaster staffing",
      "staff call back",
      "labor pool",
      "temporary credentialing",
      "staff accountability",
      "emergency workforce",
      "staff sheltering",
    ],
    aiGuidance:
      "Map staffing plans, call-back rosters, labor pool procedures, credentialing processes, staff-support plans, exercises, and corrective actions. Generic staffing statements without operational procedures should receive reduced confidence.",
    evidenceFrequency:
      "Reviewed periodically and whenever staffing structures or emergency roles change",
    evidenceRetention:
      "Retained with emergency management, human resources, and workforce planning records",
    responsibleRole: "Human Resources Director",
    validationMethod:
      "Document review, roster validation, exercise review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Emergency Staffing Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Staffing Requirements",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Emergency Staffing",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-PARTNER-001",
    slug: "hhs-community-and-emergency-partner-coordination",
    title: "Community and Emergency Partner Coordination",
    intent:
      "The organization coordinates emergency planning and response with healthcare coalitions, public health, emergency management, emergency medical services, utilities, vendors, and other community partners.",
    description:
      "External coordination addresses communication, roles, mutual aid, resource sharing, patient movement, situational awareness, public health reporting, and regional response integration.",
    requirement:
      "Maintain documented coordination with relevant external emergency partners, including current contact information, defined expectations, participation in planning or exercises, and mutual-aid arrangements where applicable.",
    surveyorLooksFor: [
      "Identification of key emergency partners",
      "Current contact information",
      "Participation in regional planning",
      "Mutual-aid or support agreements",
      "Coordination during exercises",
      "Documented communication during actual events",
    ],
    evidenceExamples: [
      "Healthcare coalition participation",
      "Mutual-aid agreement",
      "Emergency partner contact list",
      "Regional exercise documentation",
      "Public health communication record",
      "Emergency services coordination plan",
    ],
    commonFindings: [
      "Partner contact lists are outdated",
      "Agreements are expired",
      "The organization does not participate in regional exercises",
      "Roles are unclear",
      "Resource-sharing expectations are unsupported",
      "External communication is not documented",
    ],
    keywords: [
      "healthcare coalition",
      "mutual aid",
      "community emergency partner",
      "public health coordination",
      "regional emergency planning",
      "EMS coordination",
      "emergency partner contact",
      "disaster coalition",
    ],
    aiGuidance:
      "Map coalition records, mutual-aid agreements, contact lists, regional exercises, partner communications, and corrective actions. Agreements should be evaluated for current dates, contacts, scope, and operational feasibility.",
    evidenceFrequency:
      "Reviewed periodically and whenever partner roles, contacts, or agreements change",
    evidenceRetention:
      "Retained with emergency planning and external coordination records",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review, agreement verification, and partner or leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Emergency Partner Coordination Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Cooperation and Collaboration Requirements",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "External Coordination",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-TRAIN-001",
    slug: "hhs-emergency-management-training",
    title: "Emergency Management Training",
    intent:
      "Staff understand emergency roles, reporting expectations, protective actions, communication methods, and response responsibilities appropriate to their position.",
    description:
      "Emergency training may address incident command, evacuation, shelter-in-place, utility failures, communication, active threats, severe weather, hazardous materials, mass casualty response, and continuity procedures.",
    requirement:
      "Provide and document emergency management training at orientation, periodically thereafter, and whenever emergency responsibilities or procedures materially change.",
    surveyorLooksFor: [
      "Emergency preparedness training during orientation",
      "Periodic refresher education",
      "Role-specific training",
      "Incident command education for assigned leaders",
      "Remediation for missed or unsuccessful training",
      "Records identifying content and completion",
    ],
    evidenceExamples: [
      "Emergency preparedness orientation",
      "Incident command training",
      "Evacuation education",
      "Severe-weather training",
      "Utility failure training",
      "Training roster",
      "Competency validation",
    ],
    commonFindings: [
      "Required training is incomplete",
      "Content is generic",
      "Incident command leaders are not trained",
      "Contractors or temporary staff are omitted",
      "Staff cannot explain emergency roles",
      "Training records do not identify content",
    ],
    keywords: [
      "emergency management training",
      "disaster training",
      "incident command training",
      "emergency preparedness education",
      "evacuation training",
      "emergency orientation",
      "response training",
      "emergency competency",
    ],
    aiGuidance:
      "Map curricula, assignments, completion records, rosters, competencies, remediation, and role-specific education. A sign-in sheet without identifiable content or participant linkage should receive reduced confidence.",
    evidenceFrequency:
      "At orientation, periodically thereafter, and whenever emergency roles or procedures materially change",
    evidenceRetention:
      "Retained according to education, human resources, and emergency management requirements",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Training-record review, staff interview, and competency verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Emergency Management Training Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Training Requirements",
      },
      {
        authority: "FEMA",
        title: "National Incident Management System Training",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Education and Training",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-EXER-001",
    slug: "hhs-emergency-exercise-program",
    title: "Emergency Exercise Program",
    intent:
      "The organization tests emergency plans, staff capability, communication, resource coordination, and continuity through a structured exercise program.",
    description:
      "The exercise program includes exercise selection based on priority hazards, objectives, scenarios, participants, controllers, evaluators, documentation, after-action review, corrective actions, and retesting.",
    requirement:
      "Conduct and document emergency exercises at required frequencies using scenarios linked to identified hazards, evaluate performance, assign corrective actions, and verify completion.",
    surveyorLooksFor: [
      "Exercises linked to the hazard vulnerability analysis",
      "Documented objectives and scope",
      "Participation by relevant departments",
      "Evaluation of response performance",
      "After-action reports",
      "Corrective-action tracking and retesting",
    ],
    evidenceExamples: [
      "Emergency exercise plan",
      "Exercise scenario",
      "Participant roster",
      "Exercise evaluation",
      "After-action report",
      "Improvement plan",
      "Corrective-action tracker",
    ],
    commonFindings: [
      "Exercises are not linked to priority hazards",
      "Objectives are vague",
      "Key departments do not participate",
      "Evaluations lack meaningful findings",
      "Corrective actions are not assigned",
      "Repeat deficiencies are not retested",
    ],
    keywords: [
      "emergency exercise",
      "disaster drill",
      "tabletop exercise",
      "full-scale exercise",
      "functional exercise",
      "after-action report",
      "improvement plan",
      "emergency drill",
    ],
    aiGuidance:
      "Map exercise plans, scenarios, rosters, evaluations, after-action reports, improvement plans, corrective actions, and retesting evidence. Attendance alone should not be treated as proof of meaningful exercise evaluation.",
    evidenceFrequency:
      "At the frequency required by applicable authorities and the emergency management program",
    evidenceRetention:
      "Retained with emergency preparedness and performance-improvement records",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review, exercise observation, corrective-action verification, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Emergency Exercise Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Testing Requirements",
      },
      {
        authority: "FEMA",
        title: "Homeland Security Exercise and Evaluation Program",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Exercises",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-AAR-001",
    slug: "hhs-after-action-review-and-improvement-planning",
    title: "After-Action Review and Improvement Planning",
    intent:
      "Emergency exercises and actual events result in documented learning, corrective actions, accountability, and measurable improvement.",
    description:
      "The after-action process captures strengths, gaps, contributing factors, corrective actions, responsible parties, deadlines, leadership review, follow-up, and verification of effectiveness.",
    requirement:
      "Complete a documented after-action review following applicable exercises and emergency events, assign corrective actions, track completion, and verify that identified improvements are effective.",
    surveyorLooksFor: [
      "Timely after-action review",
      "Identification of strengths and gaps",
      "Corrective actions linked to findings",
      "Assigned owners and due dates",
      "Leadership review",
      "Verification and closure of actions",
    ],
    evidenceExamples: [
      "After-action report",
      "Improvement plan",
      "Corrective-action tracker",
      "Leadership review record",
      "Policy revision",
      "Follow-up drill",
    ],
    commonFindings: [
      "After-action reviews are delayed",
      "Findings are vague",
      "Corrective actions lack owners",
      "Actions remain overdue",
      "Policies are not revised",
      "Effectiveness is not verified",
    ],
    keywords: [
      "after-action report",
      "improvement plan",
      "exercise corrective action",
      "emergency lessons learned",
      "incident debrief",
      "preparedness improvement",
      "corrective-action tracker",
      "emergency follow-up",
    ],
    aiGuidance:
      "Map after-action reports, improvement plans, action trackers, policy revisions, training updates, follow-up drills, and closure records. Verify that each corrective action is linked to a specific finding and includes evidence of effectiveness.",
    evidenceFrequency:
      "After applicable exercises and actual emergency events",
    evidenceRetention:
      "Retained with exercise, incident, and performance-improvement records",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review, action tracking, leadership interview, and effectiveness verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Emergency After-Action and Improvement Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Program Evaluation Requirements",
      },
      {
        authority: "FEMA",
        title: "Homeland Security Exercise and Evaluation Program",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Performance Improvement",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-RECOVERY-001",
    slug: "hhs-emergency-recovery-and-return-to-normal-operations",
    title: "Emergency Recovery and Return to Normal Operations",
    intent:
      "The organization restores services, facilities, systems, staffing, supply chains, and normal operations safely following emergencies.",
    description:
      "Recovery planning addresses damage assessment, service restoration, system testing, patient-care prioritization, staff support, records recovery, vendor coordination, financial tracking, communication, and transition from incident command.",
    requirement:
      "Maintain and implement recovery procedures that establish restoration priorities, verify systems before return to service, communicate operational status, support affected personnel, and document transition to normal operations.",
    surveyorLooksFor: [
      "Defined recovery leadership",
      "Service restoration priorities",
      "Facility and utility damage assessment",
      "Testing before systems return to service",
      "Communication of operational changes",
      "Formal transition from response to recovery",
    ],
    evidenceExamples: [
      "Emergency recovery plan",
      "Damage assessment",
      "System restoration checklist",
      "Return-to-service authorization",
      "Recovery status report",
      "Staff support documentation",
      "Financial impact record",
    ],
    commonFindings: [
      "Recovery planning is absent",
      "Systems return to service without verification",
      "Restoration priorities are unclear",
      "Operational changes are poorly communicated",
      "Staff recovery needs are not addressed",
      "The transition from incident command is undocumented",
    ],
    keywords: [
      "emergency recovery",
      "return to normal operations",
      "disaster recovery",
      "service restoration",
      "system restoration",
      "return to service",
      "recovery planning",
      "post-disaster recovery",
    ],
    aiGuidance:
      "Map recovery plans, damage assessments, restoration checklists, system tests, status reports, return-to-service approvals, staff-support records, and transition documentation. Contractor repair records alone should not prove safe return to operation.",
    evidenceFrequency:
      "Reviewed periodically and implemented after applicable emergency events",
    evidenceRetention:
      "Retained with emergency incident, facilities, financial, and recovery records",
    responsibleRole: "Incident Commander",
    validationMethod:
      "Document review, event reconstruction, system verification, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Emergency Recovery Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Continuity and Recovery Requirements",
      },
      {
        authority: "FEMA",
        title: "National Disaster Recovery Framework",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Recovery",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Management",
    code: "HHS-EM-EVAL-001",
    slug: "hhs-emergency-management-program-evaluation",
    title: "Emergency Management Program Evaluation",
    intent:
      "The organization periodically evaluates whether its emergency management program is implemented as designed and capable of responding to identified hazards.",
    description:
      "Program evaluation reviews HVA alignment, training, exercises, communication tests, continuity plans, partner coordination, corrective actions, incident performance, unresolved risks, and program revisions.",
    requirement:
      "Complete and document a periodic evaluation of the emergency management program, including implementation compliance, exercise and incident performance, corrective-action completion, unresolved risks, and required program revisions.",
    surveyorLooksFor: [
      "A documented periodic program evaluation",
      "Review of training and exercise completion",
      "Evaluation of response performance",
      "Corrective-action analysis",
      "Review of unresolved preparedness gaps",
      "Documented revisions and leadership approval",
    ],
    evidenceExamples: [
      "Annual emergency management evaluation",
      "Preparedness performance report",
      "Exercise summary",
      "Corrective-action status report",
      "Emergency committee minutes",
      "Program revision log",
    ],
    commonFindings: [
      "No formal evaluation exists",
      "The evaluation only confirms that plans exist",
      "Exercise findings are not analyzed",
      "Overdue actions are not addressed",
      "The HVA is not reconsidered",
      "Program revisions are not documented",
    ],
    keywords: [
      "emergency management evaluation",
      "annual preparedness review",
      "emergency program effectiveness",
      "preparedness performance",
      "emergency management audit",
      "exercise trend analysis",
      "emergency annual report",
      "preparedness improvement",
    ],
    aiGuidance:
      "Map annual evaluations, performance reports, exercise trends, incident reviews, action summaries, leadership approvals, HVA updates, and revision records. The evidence should evaluate implementation and operational capability, not merely policy presence.",
    evidenceFrequency:
      "At least annually and after significant emergency events or material program changes",
    evidenceRetention:
      "Retained with emergency management governance and performance-improvement records",
    responsibleRole: "Emergency Management Coordinator",
    validationMethod:
      "Document review, data analysis, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Emergency Management Program Evaluation Framework",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Program Review Requirements",
      },
    ],
    department: "Emergency Management",
    domain: "Emergency Management",
    category: "Program Evaluation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];