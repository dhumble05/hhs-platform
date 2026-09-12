import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed healthcare medical equipment survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to evaluate medical equipment risks, identify
 * missing evidence, recognize maintenance failures, and support mapping
 * to applicable regulatory, accreditation, manufacturer, and technical
 * authorities.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsMedicalEquipmentStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-PROG-001",
    slug: "hhs-medical-equipment-management-program",
    title: "Medical Equipment Management Program",
    intent:
      "The organization maintains a coordinated program for selecting, acquiring, inspecting, maintaining, repairing, monitoring, and retiring medical equipment.",
    description:
      "The medical equipment management program establishes governance, inventory requirements, risk classification, maintenance strategies, acceptance testing, recall response, failure reporting, user education, corrective actions, and program evaluation.",
    requirement:
      "Maintain and implement a documented medical equipment management program that identifies included equipment, assigns responsibilities, defines maintenance and inspection requirements, manages equipment failures and recalls, and evaluates program effectiveness.",
    surveyorLooksFor: [
      "A current medical equipment management plan",
      "Defined responsibilities for clinical engineering and equipment users",
      "A complete and current equipment inventory",
      "Risk-based maintenance strategies",
      "Documented failure, recall, and corrective-action processes",
      "Periodic program evaluation",
    ],
    evidenceExamples: [
      "Medical equipment management plan",
      "Clinical engineering policies",
      "Medical equipment inventory",
      "Maintenance performance reports",
      "Recall records",
      "Corrective-action tracker",
      "Annual program evaluation",
    ],
    commonFindings: [
      "The program is outdated",
      "Responsibilities are unclear",
      "The inventory is incomplete",
      "Maintenance strategies are not risk based",
      "Failures and recalls are not consistently tracked",
      "The program is not formally evaluated",
    ],
    keywords: [
      "medical equipment management program",
      "clinical engineering program",
      "biomedical equipment",
      "medical device management",
      "equipment maintenance program",
      "medical equipment compliance",
      "biomed program",
      "healthcare technology management",
    ],
    aiGuidance:
      "Map organization-wide medical equipment plans, inventories, maintenance data, recall records, failure reports, corrective actions, and annual evaluations. A policy alone should not be treated as proof that the program is actively implemented.",
    evidenceFrequency:
      "Reviewed at least annually and whenever equipment categories, maintenance strategies, operations, or applicable requirements materially change",
    evidenceRetention:
      "Current program documents and supporting records from the applicable survey and organizational retention period",
    responsibleRole: "Clinical Engineering Director",
    validationMethod:
      "Document review, inventory analysis, equipment inspection, data review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Medical Equipment Management Framework",
        notes:
          "Original HHS operational control intended for cross-accreditor survey readiness.",
      },
      {
        authority: "CMS",
        title: "Physical Environment and Medical Equipment Requirements",
        notes:
          "Apply current federal requirements and interpretive guidance.",
      },
      {
        authority: "NFPA",
        title: "Health Care Facilities Code",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-INV-001",
    slug: "hhs-medical-equipment-inventory",
    title: "Medical Equipment Inventory",
    intent:
      "The organization maintains a complete, accurate, and current inventory of medical equipment included in the management program.",
    description:
      "The inventory identifies equipment ownership, location, manufacturer, model, serial number, asset identifier, risk classification, maintenance strategy, status, and other information needed for effective management.",
    requirement:
      "Maintain a current inventory of medical equipment that uniquely identifies each device, documents its status and assigned maintenance strategy, and is updated when equipment is acquired, relocated, transferred, or retired.",
    surveyorLooksFor: [
      "Unique identification of each device",
      "Current manufacturer, model, and serial information",
      "Accurate location and ownership records",
      "Assigned risk classification",
      "Assigned maintenance strategy",
      "Timely removal of retired equipment",
    ],
    evidenceExamples: [
      "Medical equipment inventory",
      "CMMS equipment record",
      "Asset tag report",
      "Inventory reconciliation",
      "Equipment transfer form",
      "Retirement documentation",
    ],
    commonFindings: [
      "Equipment is missing from the inventory",
      "Locations are inaccurate",
      "Duplicate asset records exist",
      "Retired equipment remains active",
      "Risk classification is missing",
      "Maintenance strategy is not assigned",
    ],
    keywords: [
      "medical equipment inventory",
      "biomedical inventory",
      "medical device inventory",
      "equipment asset list",
      "CMMS equipment",
      "clinical engineering inventory",
      "asset tag",
      "equipment reconciliation",
    ],
    aiGuidance:
      "Map inventory exports, CMMS records, reconciliation reports, transfer records, and retirement records. Evaluate duplicate records, missing identifiers, inactive equipment, incomplete classifications, and location accuracy.",
    evidenceFrequency:
      "Continuously updated and formally reconciled at intervals established by policy",
    evidenceRetention:
      "Retained for the active life of the equipment and according to organizational asset-record requirements",
    responsibleRole: "Clinical Engineering Manager",
    validationMethod:
      "Inventory review, physical sampling, CMMS review, and asset reconciliation",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Inventory Framework",
      },
      {
        authority: "CMS",
        title: "Medical Equipment Inventory Requirements",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Inventory Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-RISK-001",
    slug: "hhs-medical-equipment-risk-classification",
    title: "Medical Equipment Risk Classification",
    intent:
      "Medical equipment is evaluated and classified according to the risk associated with equipment failure, function, use environment, and patient impact.",
    description:
      "Risk classification considers life-support capability, diagnostic or therapeutic function, likelihood of failure, maintenance history, environment of use, manufacturer guidance, and potential harm.",
    requirement:
      "Assign and document a risk classification for each included equipment category or device and use that classification to establish maintenance, inspection, testing, and prioritization requirements.",
    surveyorLooksFor: [
      "A defined risk-classification methodology",
      "Consistent application across equipment categories",
      "Consideration of patient harm and equipment function",
      "Linkage between risk and maintenance strategy",
      "Review after significant failures or changes",
      "Leadership approval of classification criteria",
    ],
    evidenceExamples: [
      "Equipment risk-classification policy",
      "Risk scoring matrix",
      "Equipment category assessment",
      "CMMS risk field",
      "Risk review record",
      "Maintenance strategy approval",
    ],
    commonFindings: [
      "Risk classification is missing",
      "Scoring criteria are inconsistent",
      "High-risk equipment is not prioritized",
      "Maintenance strategy does not match risk",
      "Classifications are not reviewed after failures",
      "Manufacturer recommendations are not considered",
    ],
    keywords: [
      "equipment risk classification",
      "medical device risk",
      "equipment risk score",
      "life support equipment",
      "high-risk equipment",
      "biomedical risk assessment",
      "maintenance risk",
      "equipment criticality",
    ],
    aiGuidance:
      "Map risk methodologies, scoring tools, equipment-category assessments, CMMS fields, review records, and approval documentation. High-risk equipment without enhanced maintenance or monitoring should increase survey risk.",
    evidenceFrequency:
      "At initial inclusion and whenever equipment function, use, failure history, or maintenance strategy materially changes",
    evidenceRetention:
      "Retained with the equipment record and medical equipment management program",
    responsibleRole: "Clinical Engineering Director",
    validationMethod:
      "Document review, inventory analysis, maintenance comparison, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Risk Classification Framework",
      },
      {
        authority: "CMS",
        title: "Risk-Based Medical Equipment Maintenance Requirements",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Risk Classification",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-ACCEPT-001",
    slug: "hhs-medical-equipment-acceptance-testing",
    title: "Medical Equipment Acceptance Testing",
    intent:
      "New, leased, loaned, rented, transferred, or substantially modified medical equipment is inspected and verified before clinical use.",
    description:
      "Acceptance testing verifies identity, physical condition, electrical safety, functional performance, accessories, software, configuration, manufacturer documentation, and maintenance setup.",
    requirement:
      "Complete and document acceptance testing before applicable medical equipment is placed into clinical service, and establish the equipment record, maintenance strategy, risk classification, and user requirements.",
    surveyorLooksFor: [
      "Inspection before first clinical use",
      "Verification of physical and functional condition",
      "Electrical-safety testing when applicable",
      "Creation of an equipment record",
      "Assignment of maintenance requirements",
      "Resolution of acceptance deficiencies",
    ],
    evidenceExamples: [
      "Acceptance inspection",
      "Incoming equipment checklist",
      "Electrical-safety test",
      "Functional test record",
      "CMMS setup record",
      "Acceptance deficiency report",
    ],
    commonFindings: [
      "Equipment is placed into use before inspection",
      "Loaner equipment bypasses acceptance testing",
      "Electrical testing is missing",
      "Accessories are not verified",
      "Maintenance requirements are not established",
      "Acceptance deficiencies are not resolved",
    ],
    keywords: [
      "acceptance testing",
      "incoming inspection",
      "new equipment inspection",
      "medical device acceptance",
      "equipment commissioning",
      "loaner equipment inspection",
      "electrical safety test",
      "pre-use inspection",
    ],
    aiGuidance:
      "Map acceptance checklists, electrical-safety tests, functional verification, CMMS setup records, deficiency reports, and release-to-service documentation. Purchase records alone should not prove readiness for clinical use.",
    evidenceFrequency:
      "Before initial clinical use and after substantial modification or transfer when reinspection is required",
    evidenceRetention:
      "Retained with the equipment lifecycle record",
    responsibleRole: "Clinical Engineering Technician",
    validationMethod:
      "Record review, equipment sampling, CMMS review, and release-to-service verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Acceptance Testing Framework",
      },
      {
        authority: "NFPA",
        title: "Health Care Facilities Code",
      },
      {
        authority: "Manufacturer",
        title: "Equipment Installation and Acceptance Instructions",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Acceptance Testing",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-PM-001",
    slug: "hhs-medical-equipment-preventive-maintenance",
    title: "Medical Equipment Preventive Maintenance",
    intent:
      "Medical equipment receives scheduled maintenance, inspection, testing, and servicing necessary to support safe and reliable operation.",
    description:
      "Preventive maintenance may include cleaning, inspection, lubrication, component replacement, electrical-safety testing, calibration, performance verification, software review, and manufacturer-required service.",
    requirement:
      "Perform and document preventive maintenance at established intervals using approved procedures, qualified personnel, appropriate test equipment, and complete service records.",
    surveyorLooksFor: [
      "Established preventive-maintenance intervals",
      "Completed work within required timeframes",
      "Use of approved procedures",
      "Documentation of test results",
      "Identification of technician and test equipment",
      "Correction of deficiencies before return to service",
    ],
    evidenceExamples: [
      "Preventive-maintenance work order",
      "Maintenance procedure",
      "Completed inspection checklist",
      "Electrical-safety test",
      "Calibration result",
      "PM completion report",
    ],
    commonFindings: [
      "Preventive maintenance is overdue",
      "Work orders lack test results",
      "Procedures are incomplete",
      "High-risk equipment is missed",
      "Failed tests are not resolved",
      "Documentation does not identify the serviced device",
    ],
    keywords: [
      "preventive maintenance",
      "medical equipment PM",
      "biomedical maintenance",
      "equipment inspection",
      "scheduled maintenance",
      "PM completion",
      "medical device servicing",
      "clinical engineering maintenance",
    ],
    aiGuidance:
      "Map completed work orders, procedures, checklists, test results, completion reports, failed-test actions, and return-to-service records. Evaluate due dates, completion dates, device identity, technician, results, and overdue trends.",
    evidenceFrequency:
      "At intervals established by manufacturer recommendations, risk assessment, maintenance strategy, and applicable requirements",
    evidenceRetention:
      "Retained for the active life of the equipment and according to organizational maintenance-record requirements",
    responsibleRole: "Clinical Engineering Manager",
    validationMethod:
      "Work-order review, CMMS analysis, equipment sampling, and overdue-report review",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Preventive Maintenance Framework",
      },
      {
        authority: "CMS",
        title: "Medical Equipment Maintenance Requirements",
      },
      {
        authority: "Manufacturer",
        title: "Preventive Maintenance Instructions",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Preventive Maintenance",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-AEM-001",
    slug: "hhs-alternate-equipment-maintenance-program",
    title: "Alternate Equipment Maintenance Program",
    intent:
      "Any maintenance strategy that differs from manufacturer recommendations is supported by documented risk analysis, performance data, and ongoing oversight.",
    description:
      "An alternate equipment maintenance program may adjust maintenance activities or frequencies based on equipment characteristics, risk, failure history, service experience, and available evidence.",
    requirement:
      "Maintain documented criteria and approval for alternate maintenance strategies, exclude equipment that is not eligible, monitor performance, and return equipment to manufacturer recommendations when data indicates increased risk.",
    surveyorLooksFor: [
      "Documented alternate-maintenance methodology",
      "Equipment-specific eligibility review",
      "Risk and performance data supporting the strategy",
      "Exclusion of ineligible high-risk equipment",
      "Ongoing failure and maintenance monitoring",
      "Periodic program reevaluation",
    ],
    evidenceExamples: [
      "Alternate equipment maintenance policy",
      "AEM eligibility assessment",
      "Equipment-category analysis",
      "Failure trend report",
      "Maintenance comparison report",
      "AEM approval record",
    ],
    commonFindings: [
      "Alternate intervals lack supporting data",
      "Ineligible equipment is included",
      "Failure trends are not monitored",
      "The methodology is inconsistently applied",
      "Leadership approval is missing",
      "Equipment is not returned to manufacturer recommendations after poor performance",
    ],
    keywords: [
      "alternate equipment maintenance",
      "AEM program",
      "alternative maintenance strategy",
      "risk-based maintenance",
      "manufacturer recommendation variance",
      "equipment maintenance interval",
      "AEM eligibility",
      "medical equipment AEM",
    ],
    aiGuidance:
      "Map AEM policies, eligibility assessments, supporting data, approval records, failure trends, maintenance reports, and reevaluations. Reduced maintenance without documented evidence and monitoring should be treated as high risk.",
    evidenceFrequency:
      "Reviewed at least annually and whenever equipment performance, failure history, manufacturer guidance, or regulatory requirements change",
    evidenceRetention:
      "Retained with equipment maintenance and program-evaluation records",
    responsibleRole: "Clinical Engineering Director",
    validationMethod:
      "Document review, maintenance-data analysis, equipment sampling, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Alternate Equipment Maintenance Framework",
      },
      {
        authority: "CMS",
        title: "Alternate Equipment Maintenance Program Requirements",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Alternate Maintenance",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-CORR-001",
    slug: "hhs-medical-equipment-corrective-maintenance",
    title: "Medical Equipment Corrective Maintenance",
    intent:
      "Medical equipment failures and defects are evaluated, repaired, tested, documented, and safely returned to service.",
    description:
      "Corrective maintenance addresses failure reporting, triage, removal from service, troubleshooting, repair, parts replacement, testing, documentation, escalation, and return-to-service authorization.",
    requirement:
      "Complete and document corrective maintenance for reported equipment failures, including the reported problem, findings, repair actions, parts used, testing performed, final status, and return-to-service decision.",
    surveyorLooksFor: [
      "Prompt response to equipment failures",
      "Removal from service when safety is uncertain",
      "Complete repair documentation",
      "Testing after repair",
      "Escalation of repeated failures",
      "Clear return-to-service status",
    ],
    evidenceExamples: [
      "Corrective-maintenance work order",
      "Equipment failure report",
      "Repair record",
      "Parts replacement record",
      "Post-repair test",
      "Return-to-service documentation",
    ],
    commonFindings: [
      "Repair records are incomplete",
      "Equipment remains in use after reported failure",
      "Post-repair testing is not documented",
      "Repeated failures are not investigated",
      "Temporary repairs become permanent",
      "Return-to-service status is unclear",
    ],
    keywords: [
      "corrective maintenance",
      "equipment repair",
      "medical device failure",
      "biomedical repair",
      "equipment service request",
      "post-repair testing",
      "equipment troubleshooting",
      "return to service",
    ],
    aiGuidance:
      "Map failure reports, repair work orders, technician findings, replaced parts, post-repair tests, repeat-failure reviews, and return-to-service records. Repeated repairs without escalation should increase risk.",
    evidenceFrequency:
      "Each time an equipment failure, defect, or performance concern is reported",
    evidenceRetention:
      "Retained for the active life of the equipment and according to maintenance-record requirements",
    responsibleRole: "Clinical Engineering Technician",
    validationMethod:
      "Work-order review, equipment inspection, repeat-failure analysis, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Corrective Maintenance Framework",
      },
      {
        authority: "Manufacturer",
        title: "Equipment Service and Repair Instructions",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Corrective Maintenance",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-CAL-001",
    slug: "hhs-medical-equipment-calibration",
    title: "Medical Equipment Calibration",
    intent:
      "Medical equipment that measures, displays, controls, or delivers critical values is calibrated accurately and at appropriate intervals.",
    description:
      "Calibration controls include defined tolerances, traceable standards, qualified personnel, calibrated test equipment, as-found and as-left results, failure response, and impact assessment.",
    requirement:
      "Calibrate applicable medical equipment at established intervals using traceable standards and document results, tolerances, adjustments, failed conditions, corrective actions, and return-to-service status.",
    surveyorLooksFor: [
      "Identification of equipment requiring calibration",
      "Defined calibration intervals and tolerances",
      "Use of traceable test standards",
      "Documentation of as-found and as-left results",
      "Response to out-of-tolerance findings",
      "Evaluation of potential patient impact",
    ],
    evidenceExamples: [
      "Calibration certificate",
      "Calibration work order",
      "As-found and as-left data",
      "Test-equipment certificate",
      "Out-of-tolerance investigation",
      "Impact assessment",
    ],
    commonFindings: [
      "Calibration is overdue",
      "Tolerances are not documented",
      "Test equipment is out of calibration",
      "As-found results are missing",
      "Out-of-tolerance findings are not investigated",
      "Potential patient impact is not assessed",
    ],
    keywords: [
      "medical equipment calibration",
      "device calibration",
      "calibration certificate",
      "out of tolerance",
      "as found as left",
      "traceable standard",
      "test equipment calibration",
      "biomedical calibration",
    ],
    aiGuidance:
      "Map calibration work orders, certificates, tolerances, as-found and as-left data, test-equipment records, investigations, and impact assessments. Missing as-found data or expired test standards should reduce confidence.",
    evidenceFrequency:
      "At intervals established by manufacturer guidance, risk assessment, performance history, and applicable requirements",
    evidenceRetention:
      "Retained with the equipment maintenance record and calibration program records",
    responsibleRole: "Clinical Engineering Technician",
    validationMethod:
      "Record review, certificate verification, equipment sampling, and test-standard review",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Calibration Framework",
      },
      {
        authority: "Manufacturer",
        title: "Equipment Calibration Instructions",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Calibration",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-TEST-001",
    slug: "hhs-medical-equipment-performance-verification",
    title: "Medical Equipment Performance Verification",
    intent:
      "Medical equipment performs within established specifications before use, after repair, and during scheduled maintenance.",
    description:
      "Performance verification confirms functional operation, alarm performance, output accuracy, safety features, accessories, software configuration, and other device-specific requirements.",
    requirement:
      "Perform and document functional and performance testing appropriate to the equipment type before release to service following acceptance, maintenance, repair, or other applicable intervention.",
    surveyorLooksFor: [
      "Device-specific performance procedures",
      "Documented test results",
      "Verification of alarms and safety features",
      "Use of appropriate test equipment",
      "Resolution of failed performance tests",
      "Clear release-to-service decision",
    ],
    evidenceExamples: [
      "Performance verification checklist",
      "Functional test record",
      "Alarm test",
      "Output verification",
      "Post-repair test",
      "Release-to-service record",
    ],
    commonFindings: [
      "Testing is documented only as pass or fail",
      "Alarm testing is omitted",
      "Test equipment is not identified",
      "Failed results are not resolved",
      "Accessories are not tested",
      "Release-to-service documentation is missing",
    ],
    keywords: [
      "performance verification",
      "functional testing",
      "medical equipment testing",
      "alarm test",
      "post-repair test",
      "output verification",
      "device performance",
      "release to service",
    ],
    aiGuidance:
      "Map test procedures, measured results, alarm tests, output data, technician identity, test equipment, failed-test actions, and release-to-service records. Pass-only documentation without measurable criteria should receive reduced confidence.",
    evidenceFrequency:
      "During acceptance, preventive maintenance, corrective maintenance, and whenever device performance is questioned",
    evidenceRetention:
      "Retained with the equipment lifecycle and maintenance records",
    responsibleRole: "Clinical Engineering Technician",
    validationMethod:
      "Record review, procedure comparison, equipment sampling, and test-result verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Performance Verification Framework",
      },
      {
        authority: "Manufacturer",
        title: "Equipment Performance Specifications",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Performance Verification",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-FAIL-001",
    slug: "hhs-medical-equipment-failure-reporting-and-analysis",
    title: "Medical Equipment Failure Reporting and Analysis",
    intent:
      "Medical equipment failures, near misses, and performance concerns are promptly reported, investigated, trended, and used to improve safety.",
    description:
      "Failure management includes immediate response, equipment identification, clinical impact, removal from service, technical investigation, regulatory reporting, corrective actions, and trend analysis.",
    requirement:
      "Maintain and implement a process for reporting, investigating, escalating, documenting, and trending medical equipment failures and near misses.",
    surveyorLooksFor: [
      "Accessible failure-reporting methods",
      "Prompt equipment identification and isolation",
      "Evaluation of patient and clinical impact",
      "Technical investigation",
      "Required regulatory or manufacturer reporting",
      "Trend review of repeated failures",
    ],
    evidenceExamples: [
      "Equipment failure report",
      "Clinical incident report",
      "Technical investigation",
      "Device history review",
      "Regulatory report",
      "Failure trend analysis",
      "Corrective-action plan",
    ],
    commonFindings: [
      "Equipment failures are not reported",
      "The device is not preserved for investigation",
      "Patient impact is not assessed",
      "Repeated failures are not trended",
      "Required reporting is delayed",
      "Corrective actions are not verified",
    ],
    keywords: [
      "equipment failure",
      "medical device incident",
      "device malfunction",
      "equipment near miss",
      "failure investigation",
      "medical device reporting",
      "equipment incident",
      "failure trend",
    ],
    aiGuidance:
      "Map incident reports, technical investigations, repair records, device histories, regulatory reports, corrective actions, and trend analyses. Repeated failures across the same model or category should increase risk.",
    evidenceFrequency:
      "Each time a reportable equipment failure, malfunction, near miss, or performance concern occurs",
    evidenceRetention:
      "Retained according to clinical engineering, risk management, legal, regulatory, and organizational requirements",
    responsibleRole: "Clinical Engineering Director",
    validationMethod:
      "Incident review, device-history analysis, investigation review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Failure Management Framework",
      },
      {
        authority: "FDA",
        title: "Medical Device Reporting Requirements",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Failure Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-RECALL-001",
    slug: "hhs-medical-equipment-recall-management",
    title: "Medical Equipment Recall and Safety Alert Management",
    intent:
      "Medical equipment recalls, field corrections, hazard alerts, and manufacturer notices are identified, evaluated, completed, documented, and closed.",
    description:
      "Recall management includes notice receipt, affected-device identification, risk evaluation, notification, quarantine, correction, documentation, verification, and closure.",
    requirement:
      "Maintain and implement a process for receiving, evaluating, assigning, completing, and documenting medical equipment recalls and safety alerts, including verification that all affected equipment has been addressed.",
    surveyorLooksFor: [
      "A reliable process for receiving recall notices",
      "Timely identification of affected equipment",
      "Risk-based response and prioritization",
      "Quarantine or correction when required",
      "Documentation of completed actions",
      "Formal verification and closure",
    ],
    evidenceExamples: [
      "Recall notice",
      "Affected-equipment report",
      "Recall work order",
      "Quarantine record",
      "Manufacturer correction documentation",
      "Recall closure report",
    ],
    commonFindings: [
      "Recall notices are not centrally managed",
      "Affected equipment cannot be identified",
      "High-risk recalls are delayed",
      "Completed actions are not documented",
      "Loaner or off-site equipment is omitted",
      "Recall closure is not verified",
    ],
    keywords: [
      "medical equipment recall",
      "device recall",
      "field correction",
      "safety alert",
      "manufacturer notice",
      "recall tracking",
      "recall work order",
      "equipment quarantine",
    ],
    aiGuidance:
      "Map recall notices, affected-device searches, work orders, quarantine records, manufacturer corrections, communication records, and closure reports. Open recalls without complete device reconciliation should be treated as high risk.",
    evidenceFrequency:
      "Each time a recall, field correction, hazard alert, or manufacturer safety notice is received",
    evidenceRetention:
      "Retained with the equipment lifecycle record and recall-management records",
    responsibleRole: "Clinical Engineering Manager",
    validationMethod:
      "Recall-log review, inventory reconciliation, work-order verification, and closure review",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Recall Management Framework",
      },
      {
        authority: "FDA",
        title: "Medical Device Recall and Safety Communication Requirements",
      },
      {
        authority: "Manufacturer",
        title: "Recall or Field Correction Notice",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Recall Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-OOS-001",
    slug: "hhs-medical-equipment-removal-from-service",
    title: "Medical Equipment Removal from Service",
    intent:
      "Medical equipment with known or suspected safety, performance, recall, or maintenance deficiencies is prevented from clinical use.",
    description:
      "Removal-from-service controls include identification, labeling, physical separation, access restriction, communication, work-order creation, repair disposition, and return-to-service authorization.",
    requirement:
      "Immediately remove or restrict medical equipment from service when safe operation is uncertain, clearly identify its status, prevent unauthorized use, and document final disposition or return to service.",
    surveyorLooksFor: [
      "Clear out-of-service identification",
      "Physical separation or access restriction",
      "Prompt work-order initiation",
      "Communication to affected departments",
      "Documented repair or disposition",
      "Authorized return to service",
    ],
    evidenceExamples: [
      "Out-of-service tag",
      "Removal-from-service policy",
      "Repair work order",
      "Quarantine log",
      "Department notification",
      "Return-to-service record",
    ],
    commonFindings: [
      "Defective equipment remains available for use",
      "Out-of-service tags are unclear",
      "Quarantined equipment is not secured",
      "Work orders are not created",
      "Departments are not notified",
      "Equipment returns to use without testing",
    ],
    keywords: [
      "out of service",
      "equipment quarantine",
      "defective equipment",
      "remove from service",
      "do not use tag",
      "equipment isolation",
      "unsafe medical equipment",
      "return to service",
    ],
    aiGuidance:
      "Map out-of-service records, tags, quarantine logs, work orders, communications, repair records, disposition records, and return-to-service approvals. Equipment with unresolved safety issues should be treated as critical risk.",
    evidenceFrequency:
      "Immediately whenever equipment safety, performance, maintenance, or recall status is uncertain",
    evidenceRetention:
      "Retained with the equipment maintenance and incident record",
    responsibleRole: "Clinical Engineering Technician",
    validationMethod:
      "Physical inspection, work-order review, quarantine verification, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Removal-from-Service Framework",
      },
      {
        authority: "Manufacturer",
        title: "Equipment Safety and Service Instructions",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Equipment Status Control",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-LOAN-001",
    slug: "hhs-loaner-rental-and-demonstration-equipment",
    title: "Loaner, Rental, and Demonstration Equipment",
    intent:
      "Loaned, rented, leased, trial, vendor-owned, and demonstration equipment is subject to safety and maintenance controls equivalent to organization-owned equipment.",
    description:
      "The program addresses receipt, acceptance inspection, inventory, maintenance verification, cleaning, accessories, recalls, user education, tracking, and return.",
    requirement:
      "Inspect, identify, track, maintain, and control loaner, rental, leased, and demonstration medical equipment before and during clinical use.",
    surveyorLooksFor: [
      "Acceptance testing before use",
      "Unique identification and tracking",
      "Verification of maintenance status",
      "Cleaning and infection-prevention controls",
      "Recall and safety-alert coverage",
      "Removal from the inventory after return",
    ],
    evidenceExamples: [
      "Loaner equipment log",
      "Rental agreement",
      "Acceptance inspection",
      "Maintenance certificate",
      "Cleaning record",
      "Equipment return documentation",
    ],
    commonFindings: [
      "Loaner equipment bypasses inspection",
      "Rental devices are not inventoried",
      "Maintenance status is unknown",
      "Vendor equipment lacks tracking",
      "Recall coverage is unclear",
      "Returned equipment remains active in the inventory",
    ],
    keywords: [
      "loaner equipment",
      "rental medical equipment",
      "leased equipment",
      "demonstration equipment",
      "vendor equipment",
      "trial medical device",
      "temporary equipment",
      "loaner inspection",
    ],
    aiGuidance:
      "Map loaner logs, agreements, acceptance inspections, maintenance certificates, cleaning records, recall checks, user training, and return documentation. Vendor ownership should not be treated as an exemption from organizational safety controls.",
    evidenceFrequency:
      "Before use, during the period of use, and at return or removal",
    evidenceRetention:
      "Retained with temporary-equipment, maintenance, and purchasing records",
    responsibleRole: "Clinical Engineering Manager",
    validationMethod:
      "Record review, equipment sampling, inventory comparison, and department interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Loaner and Rental Medical Equipment Framework",
      },
      {
        authority: "CMS",
        title: "Medical Equipment Maintenance Requirements",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Temporary Equipment",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-TRAIN-001",
    slug: "hhs-medical-equipment-user-training-and-competency",
    title: "Medical Equipment User Training and Competency",
    intent:
      "Personnel who operate medical equipment understand its intended use, safety features, alarms, limitations, inspection requirements, and emergency response actions.",
    description:
      "Training and competency may include initial education, manufacturer instruction, supervised use, alarm response, pre-use inspection, troubleshooting, cleaning, emergency operation, and periodic reassessment.",
    requirement:
      "Provide and document role-appropriate training and competency validation before personnel independently operate applicable medical equipment and whenever devices or procedures materially change.",
    surveyorLooksFor: [
      "Training before independent use",
      "Role-specific equipment education",
      "Competency validation for high-risk devices",
      "Training on alarms and safety features",
      "Education following equipment changes",
      "Remediation when competency is not demonstrated",
    ],
    evidenceExamples: [
      "Equipment training record",
      "Manufacturer in-service roster",
      "Competency checklist",
      "Supervised-use record",
      "Annual competency",
      "Remediation documentation",
    ],
    commonFindings: [
      "Staff operate equipment without documented training",
      "Competency is not validated",
      "Training records do not identify the device",
      "Alarm response is not included",
      "Temporary staff are omitted",
      "Training is not updated after equipment changes",
    ],
    keywords: [
      "medical equipment training",
      "device competency",
      "equipment in-service",
      "operator training",
      "biomedical equipment education",
      "medical device competency",
      "equipment user training",
      "manufacturer training",
    ],
    aiGuidance:
      "Map curricula, device-specific training, rosters, competencies, remediation, manufacturer education, and role assignments. A generic annual training roster should receive reduced confidence unless linked to specific equipment and users.",
    evidenceFrequency:
      "Before independent use, periodically as required, and whenever equipment, software, procedures, or responsibilities materially change",
    evidenceRetention:
      "Retained according to education, human resources, clinical, and organizational requirements",
    responsibleRole: "Department Director",
    validationMethod:
      "Training-record review, competency verification, observation, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment User Training Framework",
      },
      {
        authority: "Manufacturer",
        title: "Equipment Operator Instructions",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Education and Competency",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-RETIRE-001",
    slug: "hhs-medical-equipment-retirement-and-disposition",
    title: "Medical Equipment Retirement and Disposition",
    intent:
      "Medical equipment is safely removed from service, decommissioned, documented, and disposed of when it is obsolete, unsafe, unsupported, or no longer needed.",
    description:
      "Retirement includes clinical approval, status change, data removal, hazardous-material controls, decontamination, inventory removal, parts disposition, disposal, resale, donation, and record retention.",
    requirement:
      "Maintain and implement a documented process for retiring medical equipment that prevents further clinical use, updates the inventory, protects data, addresses contamination and hazardous materials, and documents final disposition.",
    surveyorLooksFor: [
      "Defined retirement approval",
      "Removal from active clinical use",
      "Inventory status update",
      "Data-security review when applicable",
      "Decontamination before disposition",
      "Documented disposal, transfer, or donation",
    ],
    evidenceExamples: [
      "Equipment retirement form",
      "Decommissioning checklist",
      "Inventory status record",
      "Data-destruction certificate",
      "Decontamination record",
      "Disposal or transfer documentation",
    ],
    commonFindings: [
      "Retired equipment remains in active inventory",
      "Equipment is stored without clear status",
      "Patient data is not removed",
      "Decontamination is not documented",
      "Parts are reused without control",
      "Final disposition is unknown",
    ],
    keywords: [
      "equipment retirement",
      "medical equipment disposal",
      "device decommissioning",
      "retired equipment",
      "equipment disposition",
      "medical device disposal",
      "asset retirement",
      "equipment data destruction",
    ],
    aiGuidance:
      "Map retirement forms, decommissioning checklists, inventory updates, data-destruction records, decontamination records, and disposition documents. Retired equipment that remains accessible or active should increase risk.",
    evidenceFrequency:
      "Each time equipment is retired, transferred, sold, donated, dismantled, or disposed of",
    evidenceRetention:
      "Retained according to equipment lifecycle, asset, information-security, environmental, and organizational requirements",
    responsibleRole: "Clinical Engineering Manager",
    validationMethod:
      "Record review, inventory comparison, storage inspection, and disposition verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Retirement and Disposition Framework",
      },
      {
        authority: "EPA",
        title: "Applicable Electronic and Hazardous Waste Requirements",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Equipment Retirement",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Medical Equipment",
    code: "HHS-ME-EVAL-001",
    slug: "hhs-medical-equipment-program-evaluation",
    title: "Medical Equipment Program Evaluation",
    intent:
      "The organization periodically evaluates whether the medical equipment management program is implemented as designed and effectively supports safe, reliable equipment operation.",
    description:
      "Program evaluation reviews inventory accuracy, maintenance completion, overdue work, failures, recalls, acceptance testing, calibration, alternate maintenance performance, repair trends, training, and corrective actions.",
    requirement:
      "Complete and document a periodic evaluation of the medical equipment management program, including performance trends, compliance rates, unresolved risks, corrective-action completion, and required program revisions.",
    surveyorLooksFor: [
      "A documented periodic program evaluation",
      "Review of maintenance completion and overdue work",
      "Analysis of equipment failures and recalls",
      "Evaluation of inventory accuracy",
      "Assessment of alternate maintenance performance",
      "Documented revisions and leadership review",
    ],
    evidenceExamples: [
      "Annual medical equipment evaluation",
      "PM completion report",
      "Overdue maintenance report",
      "Failure trend analysis",
      "Recall summary",
      "AEM performance report",
      "Program revision log",
    ],
    commonFindings: [
      "No formal evaluation exists",
      "The evaluation only reports PM completion",
      "Failure trends are not analyzed",
      "Open recalls are omitted",
      "Inventory accuracy is not evaluated",
      "Program changes are not documented",
    ],
    keywords: [
      "medical equipment program evaluation",
      "biomedical annual review",
      "clinical engineering performance",
      "equipment maintenance dashboard",
      "PM compliance report",
      "equipment failure trend",
      "AEM evaluation",
      "medical equipment annual report",
    ],
    aiGuidance:
      "Map annual evaluations, maintenance reports, overdue trends, failure analyses, recall summaries, inventory audits, AEM reviews, corrective-action records, and leadership approvals. The evidence should evaluate both implementation and effectiveness.",
    evidenceFrequency:
      "At least annually and after significant equipment failures, recalls, or material program changes",
    evidenceRetention:
      "Retained with medical equipment governance and performance-improvement records",
    responsibleRole: "Clinical Engineering Director",
    validationMethod:
      "Document review, data analysis, inventory comparison, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Medical Equipment Program Evaluation Framework",
      },
      {
        authority: "CMS",
        title: "Medical Equipment Program Evaluation Requirements",
      },
    ],
    department: "Clinical Engineering",
    domain: "Medical Equipment",
    category: "Program Evaluation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];