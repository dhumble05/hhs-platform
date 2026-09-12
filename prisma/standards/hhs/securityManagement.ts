import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed healthcare security management survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to evaluate healthcare security risks, identify
 * missing evidence, recognize control failures, and support mapping to
 * applicable regulatory, accreditation, and technical authorities.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsSecurityManagementStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-PROG-001",
    slug: "hhs-healthcare-security-management-program",
    title: "Healthcare Security Management Program",
    intent:
      "The organization maintains a coordinated security management program that protects patients, staff, visitors, information, property, medications, equipment, and essential operations.",
    description:
      "The security management program establishes governance, responsibilities, risk-assessment requirements, physical-security controls, incident response, staff education, monitoring, corrective actions, and program evaluation.",
    requirement:
      "Maintain and implement a documented security management program that identifies security risks, assigns responsibilities, establishes preventive and response controls, documents incidents and corrective actions, and evaluates program effectiveness.",
    surveyorLooksFor: [
      "A current and approved security management plan",
      "Defined security responsibilities and leadership oversight",
      "Security controls linked to identified risks",
      "Documented incident reporting and response processes",
      "Staff education appropriate to assigned responsibilities",
      "Periodic evaluation and improvement of the program",
    ],
    evidenceExamples: [
      "Security management plan",
      "Security policies and procedures",
      "Security committee minutes",
      "Security risk assessment",
      "Incident reports",
      "Security performance reports",
      "Annual program evaluation",
    ],
    commonFindings: [
      "The security management plan is outdated",
      "Responsibilities are not clearly assigned",
      "Security controls do not reflect identified risks",
      "Incidents are not consistently documented",
      "Corrective actions are not tracked",
      "The program is not formally evaluated",
    ],
    keywords: [
      "security management program",
      "healthcare security",
      "security plan",
      "hospital security",
      "physical security",
      "security governance",
      "security operations",
      "environment of care security",
    ],
    aiGuidance:
      "Map organization-wide security plans, policies, risk assessments, committee records, incident data, corrective actions, training records, and annual evaluations. A policy alone should not be treated as proof that the security program is actively implemented.",
    evidenceFrequency:
      "Reviewed at least annually and whenever security risks, operations, facilities, or applicable requirements materially change",
    evidenceRetention:
      "Current program documents and supporting records from the applicable survey and organizational retention period",
    responsibleRole: "Security Director",
    validationMethod:
      "Document review, facility inspection, data review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Security Management Framework",
        notes:
          "Original HHS operational control intended for cross-accreditor survey readiness.",
      },
      {
        authority: "OSHA",
        title: "Workplace Safety Requirements",
        notes:
          "Apply current occupational safety requirements and guidance relevant to workplace violence and employee protection.",
      },
      {
        authority: "CMS",
        title: "Physical Environment and Emergency Preparedness Requirements",
        notes:
          "Apply current federal requirements and interpretive guidance.",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-RISK-001",
    slug: "hhs-security-risk-assessment",
    title: "Security Risk Assessment",
    intent:
      "The organization systematically identifies, evaluates, prioritizes, and addresses security risks affecting people, facilities, operations, and critical assets.",
    description:
      "The security risk assessment evaluates crime patterns, workplace violence, access vulnerabilities, high-risk departments, sensitive areas, parking areas, visitor flow, behavioral health risks, infant security, controlled substances, and emergency events.",
    requirement:
      "Complete and periodically update a documented security risk assessment that identifies hazards, affected locations and populations, existing controls, residual risk, corrective actions, responsible parties, and target completion dates.",
    surveyorLooksFor: [
      "A current organization-specific security risk assessment",
      "Evaluation of internal and external threats",
      "Identification of high-risk departments and locations",
      "Prioritization of risks",
      "Corrective actions linked to identified vulnerabilities",
      "Reassessment after significant incidents or operational changes",
    ],
    evidenceExamples: [
      "Annual security risk assessment",
      "Security vulnerability assessment",
      "Crime and incident trend analysis",
      "Parking and exterior security assessment",
      "Department-specific security assessment",
      "Corrective-action plan",
    ],
    commonFindings: [
      "The assessment is generic",
      "High-risk areas are omitted",
      "Incident data is not incorporated",
      "Corrective actions are not prioritized",
      "Responsible parties or deadlines are missing",
      "The assessment is not updated after a significant event",
    ],
    keywords: [
      "security risk assessment",
      "security vulnerability assessment",
      "hospital threat assessment",
      "physical security assessment",
      "security hazard analysis",
      "security risk matrix",
      "crime assessment",
      "facility security risk",
    ],
    aiGuidance:
      "Map completed organization-specific risk assessments, incident trends, vulnerability reviews, corrective-action plans, and reassessments. Generic templates or assessments without location-specific findings should receive low confidence.",
    evidenceFrequency:
      "At least annually and after significant incidents, construction, operational changes, or newly identified threats",
    evidenceRetention:
      "Retained with security program and corrective-action records for the applicable survey cycle",
    responsibleRole: "Security Director",
    validationMethod:
      "Document review, site inspection, incident-data analysis, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Security Risk Assessment Framework",
      },
      {
        authority: "OSHA",
        title: "Workplace Violence Prevention Guidance",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Risk Assessment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-GOV-001",
    slug: "hhs-security-governance-and-oversight",
    title: "Security Governance and Oversight",
    intent:
      "Leadership and appropriate multidisciplinary stakeholders provide oversight of security risks, incidents, corrective actions, and program performance.",
    description:
      "Security governance includes defined authority, committee participation, performance review, incident escalation, resource allocation, corrective-action tracking, and leadership reporting.",
    requirement:
      "Maintain documented security governance that defines oversight responsibilities, reviews significant risks and incidents, tracks corrective actions, and communicates material security concerns to organizational leadership.",
    surveyorLooksFor: [
      "Defined security oversight structure",
      "Multidisciplinary participation when appropriate",
      "Regular review of significant incidents and trends",
      "Corrective-action tracking",
      "Escalation of high-risk vulnerabilities",
      "Leadership awareness of material security risks",
    ],
    evidenceExamples: [
      "Security committee charter",
      "Committee minutes",
      "Leadership reports",
      "Security dashboard",
      "Corrective-action tracker",
      "Resource request documentation",
    ],
    commonFindings: [
      "Security oversight exists only informally",
      "Meetings are not documented",
      "Incident trends are not reviewed",
      "High-risk corrective actions remain open",
      "Leadership is unaware of significant vulnerabilities",
      "Security performance measures are not established",
    ],
    keywords: [
      "security committee",
      "security governance",
      "security oversight",
      "security leadership",
      "security performance",
      "security meeting minutes",
      "security corrective action",
    ],
    aiGuidance:
      "Map charters, meeting minutes, dashboards, leadership reports, risk escalations, resource decisions, and corrective-action tracking. A roster alone should not be treated as proof of active oversight.",
    evidenceFrequency:
      "At the frequency established by the organization and whenever significant security risks require escalation",
    evidenceRetention:
      "Retained with security governance and leadership oversight records",
    responsibleRole: "Security Director",
    validationMethod:
      "Document review and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Security Governance Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Governance",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-ACCESS-001",
    slug: "hhs-access-control-management",
    title: "Access Control Management",
    intent:
      "Access to buildings, departments, patient-care areas, restricted spaces, and critical infrastructure is limited to authorized individuals.",
    description:
      "Access control management includes authorization, credential assignment, role-based permissions, access reviews, termination procedures, monitoring, override controls, and response to unauthorized access.",
    requirement:
      "Implement and document access-control processes that restrict entry to authorized individuals, assign permissions according to role and risk, promptly remove access when no longer required, and periodically review access privileges.",
    surveyorLooksFor: [
      "Defined authorization requirements",
      "Role-based access permissions",
      "Prompt access removal after termination or transfer",
      "Periodic access reviews",
      "Monitoring of high-risk or restricted areas",
      "Response to unauthorized access attempts",
    ],
    evidenceExamples: [
      "Access-control policy",
      "Badge-access authorization",
      "Electronic access report",
      "Access review documentation",
      "Termination access checklist",
      "Unauthorized-access investigation",
    ],
    commonFindings: [
      "Former employees retain active access",
      "Access permissions exceed job responsibilities",
      "Restricted-area access is not reviewed",
      "Shared credentials are used",
      "Unauthorized access is not investigated",
      "Emergency override access is not controlled",
    ],
    keywords: [
      "access control",
      "badge access",
      "restricted area",
      "electronic access",
      "door access",
      "authorized access",
      "access permissions",
      "access review",
    ],
    aiGuidance:
      "Map access policies, authorization records, electronic reports, periodic audits, termination checklists, and investigations. Evidence should demonstrate both assignment and timely removal of access.",
    evidenceFrequency:
      "Continuously implemented, reviewed periodically, and updated whenever roles or employment status change",
    evidenceRetention:
      "Retained according to security, human resources, and system-log retention requirements",
    responsibleRole: "Security Manager",
    validationMethod:
      "Record review, access-system review, physical inspection, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Access Control Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Access Control",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-BADGE-001",
    slug: "hhs-identification-and-badge-management",
    title: "Identification and Badge Management",
    intent:
      "Employees, contractors, vendors, students, volunteers, and other authorized individuals are identifiable and issued credentials appropriate to their role and access needs.",
    description:
      "Badge management addresses issuance, identity verification, display requirements, access permissions, replacement, expiration, return, deactivation, and periodic auditing.",
    requirement:
      "Maintain a documented identification and badge-management process that verifies identity, assigns appropriate credentials, requires visible identification where applicable, and promptly deactivates lost, expired, or no-longer-authorized badges.",
    surveyorLooksFor: [
      "Identity verification before badge issuance",
      "Badge appearance identifies the individual's role or affiliation",
      "Defined expiration or renewal requirements",
      "Lost badge reporting and deactivation",
      "Badge return or cancellation at separation",
      "Periodic badge inventory or access audit",
    ],
    evidenceExamples: [
      "Badge-management policy",
      "Badge issuance records",
      "Lost badge reports",
      "Badge deactivation records",
      "Contractor badge log",
      "Badge audit",
    ],
    commonFindings: [
      "Lost badges remain active",
      "Expired credentials are still used",
      "Contractors lack proper identification",
      "Badges are shared",
      "Separation processes do not include badge deactivation",
      "Badge inventories are not reconciled",
    ],
    keywords: [
      "employee badge",
      "identification badge",
      "contractor badge",
      "badge issuance",
      "badge deactivation",
      "lost badge",
      "photo identification",
      "credential management",
    ],
    aiGuidance:
      "Map badge policies, issuance records, loss reports, deactivation logs, contractor records, separation checklists, and audit results. A badge roster without evidence of current status or deactivation controls should receive reduced confidence.",
    evidenceFrequency:
      "At issuance, role change, renewal, loss, separation, and periodic audit",
    evidenceRetention:
      "Retained according to security and human resources record-retention requirements",
    responsibleRole: "Security Manager",
    validationMethod:
      "Record review, badge-system audit, observation, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Identification and Badge Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Identification Management",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-KEY-001",
    slug: "hhs-key-control-program",
    title: "Key Control Program",
    intent:
      "Physical keys, master keys, electronic keys, and emergency-access devices are controlled to prevent unauthorized access.",
    description:
      "The key-control program addresses authorization, issuance, inventory, storage, duplication, return, loss, replacement, master-key restrictions, and periodic reconciliation.",
    requirement:
      "Maintain a documented key-control program that authorizes issuance, tracks custody, restricts duplication, secures unissued keys, responds to lost keys, and periodically reconciles key inventories.",
    surveyorLooksFor: [
      "A current key inventory",
      "Documented authorization and issuance",
      "Secure storage of unissued and master keys",
      "Restrictions on duplication",
      "Prompt response to lost or unreturned keys",
      "Periodic reconciliation of key records",
    ],
    evidenceExamples: [
      "Key-control policy",
      "Key inventory",
      "Key issuance log",
      "Master-key authorization",
      "Lost-key investigation",
      "Key audit",
    ],
    commonFindings: [
      "Key inventories are inaccurate",
      "Master keys are not adequately restricted",
      "Keys remain assigned to former employees",
      "Lost keys are not evaluated for rekeying risk",
      "Unissued keys are unsecured",
      "Key audits are not performed",
    ],
    keywords: [
      "key control",
      "master key",
      "key inventory",
      "key issuance",
      "lost key",
      "key audit",
      "restricted key",
      "physical access key",
    ],
    aiGuidance:
      "Map key policies, inventories, issuance records, return documentation, loss investigations, rekeying decisions, and audits. A key list without assigned custodians or reconciliation dates should receive reduced confidence.",
    evidenceFrequency:
      "At issuance, return, loss, personnel change, and periodic inventory reconciliation",
    evidenceRetention:
      "Retained according to security and facilities record-retention requirements",
    responsibleRole: "Security Manager",
    validationMethod:
      "Record review, inventory verification, storage inspection, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Key Control Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Key Control",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-VISITOR-001",
    slug: "hhs-visitor-management",
    title: "Visitor Management",
    intent:
      "Visitors are identified, authorized, directed, and monitored in a manner appropriate to the risks of the facility and patient population.",
    description:
      "Visitor management includes entry screening, identification, destination verification, visitor badges, restricted-area controls, after-hours processes, prohibited conduct, and response to unauthorized visitors.",
    requirement:
      "Implement and document visitor-management controls that identify and authorize visitors, communicate restrictions, monitor access to sensitive areas, and address unauthorized or disruptive behavior.",
    surveyorLooksFor: [
      "Defined visitor entry points",
      "Visitor identification or registration",
      "Visitor badges where appropriate",
      "After-hours visitor controls",
      "Restrictions for sensitive patient-care areas",
      "Response process for unauthorized visitors",
    ],
    evidenceExamples: [
      "Visitor-management policy",
      "Visitor logs",
      "Visitor badge records",
      "After-hours entry log",
      "Restricted visitor notice",
      "Unauthorized-visitor incident report",
    ],
    commonFindings: [
      "Visitors enter through uncontrolled doors",
      "After-hours visitors are not documented",
      "Visitor badges are not used consistently",
      "Sensitive areas lack additional controls",
      "Visitor restrictions are not communicated",
      "Unauthorized visitors are not promptly addressed",
    ],
    keywords: [
      "visitor management",
      "visitor log",
      "visitor badge",
      "hospital visitor",
      "after-hours visitor",
      "visitor screening",
      "restricted visitor",
      "guest access",
    ],
    aiGuidance:
      "Map visitor policies, entry procedures, logs, badge records, after-hours controls, restrictions, and incident reports. Evaluate whether the controls match the organization's identified risk and operating hours.",
    evidenceFrequency:
      "Continuously implemented and reviewed when visitor risks or operational conditions change",
    evidenceRetention:
      "Retained according to security and organizational visitor-record requirements",
    responsibleRole: "Security Manager",
    validationMethod:
      "Document review, entrance observation, log review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Visitor Management Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Visitor Management",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-SENSITIVE-001",
    slug: "hhs-sensitive-and-restricted-area-security",
    title: "Sensitive and Restricted Area Security",
    intent:
      "Areas containing critical utilities, medications, information, hazardous materials, high-value assets, or vulnerable patients are protected against unauthorized access.",
    description:
      "Sensitive areas may include pharmacies, medication rooms, data centers, electrical rooms, generator enclosures, loading docks, sterile processing areas, laboratories, behavioral health areas, nurseries, and records storage.",
    requirement:
      "Identify sensitive and restricted areas, establish access restrictions and monitoring appropriate to the risk, and periodically verify that physical and electronic security controls remain effective.",
    surveyorLooksFor: [
      "An inventory of sensitive or restricted areas",
      "Access controls appropriate to each area's risk",
      "Doors and locks function as intended",
      "Unauthorized-access events are investigated",
      "Monitoring or alarm systems are maintained",
      "Periodic security inspections are documented",
    ],
    evidenceExamples: [
      "Sensitive-area inventory",
      "Restricted-access matrix",
      "Door and lock inspection",
      "Access-control report",
      "Security alarm test",
      "Unauthorized-entry investigation",
    ],
    commonFindings: [
      "Sensitive rooms are left unlocked",
      "Access lists are not current",
      "Door hardware does not secure properly",
      "Utility spaces are used for inappropriate storage",
      "Alarm devices are not tested",
      "Repeated unauthorized access is not escalated",
    ],
    keywords: [
      "sensitive area",
      "restricted area",
      "pharmacy security",
      "utility room security",
      "data center security",
      "medication room security",
      "critical infrastructure security",
      "secure room",
    ],
    aiGuidance:
      "Map sensitive-area inventories, access matrices, inspection records, alarm tests, access reports, and incident investigations. A policy should be paired with location-specific evidence showing the controls are implemented.",
    evidenceFrequency:
      "Continuously maintained and periodically inspected based on risk",
    evidenceRetention:
      "Retained with security inspection, access-control, and incident records",
    responsibleRole: "Security Director",
    validationMethod:
      "Physical inspection, access review, record review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Sensitive Area Security Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Sensitive Areas",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-WPV-001",
    slug: "hhs-workplace-violence-prevention",
    title: "Workplace Violence Prevention",
    intent:
      "The organization reduces the risk of workplace violence through assessment, prevention, reporting, response, support, investigation, and continuous improvement.",
    description:
      "The workplace violence prevention program addresses risk factors, prohibited conduct, reporting mechanisms, threat assessment, staff training, security response, post-incident support, investigation, corrective action, and trend analysis.",
    requirement:
      "Maintain and implement a documented workplace violence prevention program that identifies risks, establishes reporting and response processes, provides role-appropriate education, investigates incidents, supports affected personnel, and evaluates trends.",
    surveyorLooksFor: [
      "A current workplace violence prevention plan",
      "A documented risk assessment",
      "Accessible reporting methods",
      "Staff training appropriate to role and risk",
      "Threat assessment and response processes",
      "Incident investigation and trend analysis",
    ],
    evidenceExamples: [
      "Workplace violence prevention plan",
      "Workplace violence risk assessment",
      "Staff training records",
      "Threat assessment records",
      "Incident reports",
      "Post-event debriefing",
      "Trend reports",
    ],
    commonFindings: [
      "The program does not reflect current risks",
      "Staff do not know how to report concerns",
      "Incidents are underreported",
      "Training is not completed",
      "Post-event support is not documented",
      "Incident trends are not analyzed",
    ],
    keywords: [
      "workplace violence",
      "violence prevention",
      "employee assault",
      "threat assessment",
      "aggressive behavior",
      "security response",
      "workplace violence training",
      "staff safety",
    ],
    aiGuidance:
      "Map workplace violence plans, risk assessments, training records, incident reports, threat assessments, corrective actions, post-event reviews, and trend analyses. A zero-incident report should not be assumed to prove program effectiveness.",
    evidenceFrequency:
      "Continuously implemented, reviewed at least annually, and reassessed after significant incidents",
    evidenceRetention:
      "Retained according to security, employee health, human resources, legal, and occupational safety requirements",
    responsibleRole: "Security Director",
    validationMethod:
      "Document review, incident-data analysis, staff interview, and training verification",
    referencedAuthorities: [
      {
        authority: "OSHA",
        title: "Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers",
      },
      {
        authority: "HHS",
        title: "Healthcare Workplace Violence Prevention Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Workplace Violence",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-DURESS-001",
    slug: "hhs-panic-duress-and-security-alarm-systems",
    title: "Panic, Duress, and Security Alarm Systems",
    intent:
      "Panic buttons, duress alarms, personal alert devices, and other security alarm systems remain accessible, functional, monitored, and supported by an effective response process.",
    description:
      "The program addresses inventory, location, testing, preventive maintenance, monitoring, signal receipt, dispatch expectations, staff education, failures, corrective actions, and replacement planning.",
    requirement:
      "Maintain an inventory and documented inspection, testing, maintenance, and response process for panic, duress, and security alarm systems based on risk and manufacturer requirements.",
    surveyorLooksFor: [
      "A current inventory of alarm devices",
      "Defined inspection and testing frequencies",
      "Completed testing records",
      "Documented signal receipt and response",
      "Prompt correction of failed devices",
      "Staff knowledge of device use",
    ],
    evidenceExamples: [
      "Panic-button inventory",
      "Duress-alarm test log",
      "Preventive-maintenance records",
      "Security dispatch records",
      "Device failure work order",
      "Staff education record",
    ],
    commonFindings: [
      "Alarm devices are missing from the inventory",
      "Testing records contain gaps",
      "Failed devices remain in service",
      "Signal receipt is not verified",
      "Staff do not know how to activate devices",
      "Device locations no longer match current risks",
    ],
    keywords: [
      "panic button",
      "duress alarm",
      "security alarm",
      "personal alert device",
      "panic alarm testing",
      "duress system",
      "security dispatch",
      "staff emergency alert",
    ],
    aiGuidance:
      "Map device inventories, test logs, maintenance records, dispatch verification, failure work orders, and training records. Evaluate date continuity, device identity, location, test result, and corrective-action closure.",
    evidenceFrequency:
      "At the frequency established by risk assessment, policy, and manufacturer instructions",
    evidenceRetention:
      "Retained with security-system maintenance and testing records",
    responsibleRole: "Security Manager",
    validationMethod:
      "Record review, functional testing, system observation, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Panic and Duress System Framework",
      },
      {
        authority: "Manufacturer",
        title: "Security Device Instructions for Use",
        notes:
          "Apply current manufacturer testing and maintenance requirements.",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Security Alarm Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-INCIDENT-001",
    slug: "hhs-security-incident-reporting-and-investigation",
    title: "Security Incident Reporting and Investigation",
    intent:
      "Security incidents are promptly reported, documented, investigated, escalated, corrected, and analyzed for prevention opportunities.",
    description:
      "Security incidents may include violence, threats, theft, unauthorized access, elopement, infant-security events, vandalism, suspicious activity, weapons, property damage, and security-system failures.",
    requirement:
      "Maintain and implement a security incident process that documents the event, immediate response, notifications, investigation, contributing factors, corrective actions, follow-up, and closure.",
    surveyorLooksFor: [
      "Accessible methods for reporting security incidents",
      "Timely documentation and response",
      "Appropriate notification and escalation",
      "Investigation proportionate to the event",
      "Corrective actions linked to identified causes",
      "Trend review of recurring incidents",
    ],
    evidenceExamples: [
      "Security incident report",
      "Investigation record",
      "Police report",
      "Video-review documentation",
      "Corrective-action plan",
      "Post-event debriefing",
      "Incident trend report",
    ],
    commonFindings: [
      "Incidents are reported inconsistently",
      "Investigations lack contributing-factor analysis",
      "Required notifications are missing",
      "Corrective actions are not assigned",
      "Repeated events are not trended",
      "Incident closure is not documented",
    ],
    keywords: [
      "security incident",
      "incident investigation",
      "security report",
      "unauthorized access incident",
      "theft report",
      "assault report",
      "security event",
      "incident corrective action",
    ],
    aiGuidance:
      "Map incident reports, investigations, notifications, corrective actions, debriefings, and trend reports. Verify that actions are linked to the incident and include evidence of closure and effectiveness.",
    evidenceFrequency:
      "Each time a reportable security event occurs",
    evidenceRetention:
      "Retained according to security, risk management, legal, and organizational record-retention requirements",
    responsibleRole: "Security Manager",
    validationMethod:
      "Record review, event reconstruction, trend analysis, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Security Incident Management Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Incident Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-ROUNDS-001",
    slug: "hhs-security-rounds-and-inspections",
    title: "Security Rounds and Inspections",
    intent:
      "Security risks and control failures are routinely identified through documented rounds and inspections.",
    description:
      "Security rounds may evaluate entrances, exits, exterior areas, parking, lighting, doors, locks, restricted areas, alarm devices, cameras, suspicious conditions, environmental hazards, and after-hours controls.",
    requirement:
      "Conduct and document security rounds and inspections at frequencies appropriate to identified risks, assign corrective actions for deficiencies, and verify timely closure.",
    surveyorLooksFor: [
      "Defined round routes and frequencies",
      "Coverage of high-risk locations",
      "Identification of the person completing the round",
      "Documentation of observed deficiencies",
      "Corrective-action assignment and closure",
      "Escalation of repeated or critical findings",
    ],
    evidenceExamples: [
      "Security-round log",
      "Exterior security inspection",
      "Door and lock checklist",
      "Lighting inspection",
      "Corrective-action tracker",
      "Security deficiency photographs",
    ],
    commonFindings: [
      "Round records contain gaps",
      "High-risk locations are not included",
      "Checklists are completed without meaningful observations",
      "Deficiencies lack responsible owners",
      "Corrective actions remain overdue",
      "Repeated findings are not escalated",
    ],
    keywords: [
      "security rounds",
      "security patrol",
      "security inspection",
      "door inspection",
      "parking lot patrol",
      "exterior security",
      "security checklist",
      "security deficiency",
    ],
    aiGuidance:
      "Map completed round logs, patrol reports, inspection checklists, photographs, work orders, and corrective-action records. Evaluate frequency, route coverage, repeated findings, and evidence of closure.",
    evidenceFrequency:
      "At the frequency established by the security risk assessment and management plan",
    evidenceRetention:
      "Retained with security operations and corrective-action records",
    responsibleRole: "Security Supervisor",
    validationMethod:
      "Log review, physical inspection, corrective-action verification, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Security Rounds Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Security Inspections",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-EXT-001",
    slug: "hhs-exterior-parking-and-after-hours-security",
    title: "Exterior, Parking, and After-Hours Security",
    intent:
      "Exterior areas, parking facilities, loading areas, walkways, remote buildings, and after-hours entrances are managed to reduce security risks.",
    description:
      "Controls may include lighting, surveillance, patrols, access restrictions, emergency communication, escorts, vegetation management, traffic control, and response to suspicious activity.",
    requirement:
      "Assess and implement risk-based security controls for exterior and after-hours areas, maintain required systems, document inspections, and correct identified vulnerabilities.",
    surveyorLooksFor: [
      "Adequate exterior and parking-area lighting",
      "Controlled after-hours entrances",
      "Documented exterior patrols",
      "Emergency communication availability",
      "Response to suspicious or unsafe conditions",
      "Corrective action for lighting, camera, or access failures",
    ],
    evidenceExamples: [
      "Exterior security assessment",
      "Parking patrol log",
      "Lighting inspection",
      "Camera maintenance record",
      "After-hours access procedure",
      "Security escort policy",
    ],
    commonFindings: [
      "Exterior lights remain inoperable",
      "After-hours doors are uncontrolled",
      "Emergency call devices are not tested",
      "Parking patrols are not documented",
      "Camera blind spots are not addressed",
      "Vegetation or structures obstruct visibility",
    ],
    keywords: [
      "parking security",
      "exterior security",
      "after-hours access",
      "security lighting",
      "parking patrol",
      "emergency call station",
      "security escort",
      "loading dock security",
    ],
    aiGuidance:
      "Map exterior assessments, patrol logs, lighting inspections, access procedures, emergency-device tests, camera maintenance, and corrective actions. Evidence should identify specific areas and demonstrate ongoing implementation.",
    evidenceFrequency:
      "Continuously maintained and inspected at frequencies based on risk",
    evidenceRetention:
      "Retained with security inspection, maintenance, and corrective-action records",
    responsibleRole: "Security Manager",
    validationMethod:
      "Exterior inspection, record review, nighttime observation when appropriate, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Exterior and After-Hours Security Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Exterior Security",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-SPECIAL-001",
    slug: "hhs-high-risk-patient-and-population-security",
    title: "High-Risk Patient and Population Security",
    intent:
      "Security controls protect vulnerable and high-risk patient populations from abduction, elopement, unauthorized access, self-harm, assault, and other foreseeable threats.",
    description:
      "Applicable populations may include infants, pediatric patients, behavioral health patients, cognitively impaired patients, victims of violence, prisoners, forensic patients, and patients under protective restrictions.",
    requirement:
      "Identify patient populations requiring enhanced security controls, establish role-specific procedures, maintain required systems, educate affected staff, and periodically test response processes.",
    surveyorLooksFor: [
      "Identification of high-risk patient populations",
      "Population-specific security procedures",
      "Access restrictions appropriate to the risk",
      "Functional alarm or monitoring systems where used",
      "Staff education and response knowledge",
      "Drills or response evaluations when applicable",
    ],
    evidenceExamples: [
      "Infant-security policy",
      "Elopement prevention procedure",
      "Behavioral health security assessment",
      "Protective-status procedure",
      "Security-system test",
      "Staff training record",
      "Abduction or elopement drill",
    ],
    commonFindings: [
      "Patient-specific risks are not reflected in security controls",
      "Alarm systems are not tested",
      "Staff cannot explain the response procedure",
      "Access to vulnerable populations is inadequately restricted",
      "Drill findings are not corrected",
      "Patient movement is not effectively communicated",
    ],
    keywords: [
      "infant security",
      "pediatric security",
      "elopement prevention",
      "behavioral health security",
      "patient abduction",
      "vulnerable patient",
      "forensic patient",
      "high-risk patient security",
    ],
    aiGuidance:
      "Map population-specific policies, risk assessments, access controls, system tests, staff training, drills, incident reports, and corrective actions. Generic security policies should receive reduced confidence unless they address the specific population and risk.",
    evidenceFrequency:
      "Continuously implemented, tested periodically, and reassessed after incidents or material operational changes",
    evidenceRetention:
      "Retained according to security, clinical, risk-management, and organizational requirements",
    responsibleRole: "Security Director",
    validationMethod:
      "Document review, system testing, unit inspection, drill review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "High-Risk Patient Security Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Patient Security",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-TRAIN-001",
    slug: "hhs-security-education-and-response-training",
    title: "Security Education and Response Training",
    intent:
      "Staff, contractors, and other applicable personnel understand security risks, reporting expectations, emergency actions, and responsibilities appropriate to their role.",
    description:
      "Security education may address workplace violence, suspicious activity, access control, visitor restrictions, emergency codes, panic devices, infant security, elopement, weapons, active threats, and incident reporting.",
    requirement:
      "Provide and document security education at orientation, periodically thereafter, and whenever responsibilities or risks change, with content appropriate to the individual's role and work environment.",
    surveyorLooksFor: [
      "Security education during orientation",
      "Periodic refresher training",
      "Role-specific content",
      "Training on reporting and emergency response",
      "Education following significant policy or risk changes",
      "Records identifying attendees, content, and completion date",
    ],
    evidenceExamples: [
      "Security orientation module",
      "Workplace violence training",
      "Active-threat education",
      "Panic-device training",
      "Infant-security education",
      "Training roster",
      "Competency validation",
    ],
    commonFindings: [
      "Required training is incomplete",
      "Content is generic and not role-specific",
      "Contractors are omitted",
      "Staff cannot explain reporting expectations",
      "Training records do not identify course content",
      "Education is not updated after policy changes",
    ],
    keywords: [
      "security training",
      "workplace violence training",
      "active threat training",
      "security orientation",
      "panic button training",
      "infant security training",
      "security education",
      "security competency",
    ],
    aiGuidance:
      "Map curricula, training assignments, completion records, rosters, competencies, and remediation records. A sign-in sheet without identifiable content or participant linkage should receive reduced confidence.",
    evidenceFrequency:
      "At orientation, periodically thereafter, and whenever roles, risks, systems, or procedures materially change",
    evidenceRetention:
      "Retained according to education, human resources, and security record-retention requirements",
    responsibleRole: "Security Director",
    validationMethod:
      "Training-record review, staff interview, and competency verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Security Education Framework",
      },
      {
        authority: "OSHA",
        title: "Workplace Violence Prevention Guidance",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Education and Training",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Security Management",
    code: "HHS-SEC-EVAL-001",
    slug: "hhs-security-management-program-evaluation",
    title: "Security Management Program Evaluation",
    intent:
      "The organization periodically evaluates whether the security management program is implemented as designed and effectively reduces identified risks.",
    description:
      "Program evaluation reviews incidents, response performance, training completion, security rounds, system failures, access-control findings, risk-assessment actions, workplace violence trends, and opportunities for improvement.",
    requirement:
      "Complete and document a periodic evaluation of the security management program, including implementation compliance, incident trends, corrective-action performance, control effectiveness, unresolved risks, and required program revisions.",
    surveyorLooksFor: [
      "A documented periodic program evaluation",
      "Review of security incidents and trends",
      "Evaluation of corrective-action completion",
      "Assessment of security-system performance",
      "Review of training and drill results",
      "Documented revisions and leadership review",
    ],
    evidenceExamples: [
      "Annual security program evaluation",
      "Security performance report",
      "Incident trend analysis",
      "Corrective-action summary",
      "Security-system reliability report",
      "Program revision log",
    ],
    commonFindings: [
      "No formal program evaluation exists",
      "The evaluation only confirms that policies exist",
      "Incident trends are not analyzed",
      "Overdue actions are not addressed",
      "System failures are not incorporated",
      "Program revisions are not documented",
    ],
    keywords: [
      "security program evaluation",
      "annual security review",
      "security effectiveness",
      "security performance report",
      "security trend analysis",
      "security program audit",
      "security annual report",
      "security improvement plan",
    ],
    aiGuidance:
      "Map annual evaluations, performance reports, incident trends, action summaries, training results, system-reliability data, leadership reviews, and revision records. The evidence should evaluate both implementation and effectiveness.",
    evidenceFrequency:
      "At least annually and after significant security incidents or material program changes",
    evidenceRetention:
      "Retained with security governance and performance-improvement records",
    responsibleRole: "Security Director",
    validationMethod:
      "Document review, data analysis, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Security Management Program Evaluation Framework",
      },
    ],
    department: "Security",
    domain: "Security Management",
    category: "Program Evaluation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];