import type { HhsCoreStandard } from "../types";

/**
 * HHS Emergency Power Systems Knowledge Pack
 *
 * These original HHS operational controls help the HHS Compliance
 * Knowledge Engine evaluate emergency power, essential electrical
 * system, generator, transfer-switch, fuel-system, and outage-response
 * evidence.
 *
 * These controls do not reproduce proprietary accreditation standards
 * or copyrighted NFPA language. Referenced authorities identify
 * regulatory and technical frameworks that may apply. Organizations
 * must confirm adopted editions, interpretations, equipment
 * classifications, occupancy requirements, manufacturer instructions,
 * and local authority requirements.
 */
export const hhsEmergencyPowerStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-001",
    slug: "emergency-power-system-inventory",
    title: "Emergency Power System Inventory",
    intent:
      "The organization maintains an accurate inventory of emergency and standby power equipment supporting healthcare operations.",
    description:
      "A complete inventory identifies each generator or alternate power source, automatic transfer switch, fuel system, starting system, emergency power branch, remote annunciator, load bank connection, and related system responsibility.",
    requirement:
      "Maintain a current inventory of emergency power system components and update it following construction, renovation, replacement, relocation, retirement, system modification, or change in ownership or maintenance responsibility.",
    surveyorLooksFor: [
      "Identification of each emergency generator",
      "Identification of each alternate power source",
      "Identification of automatic transfer switches",
      "Identification of manual transfer equipment when applicable",
      "Identification of fuel-storage and fuel-delivery components",
      "Identification of starting batteries and charging systems",
      "Identification of remote annunciators and alarm points",
      "Identification of essential electrical system branches",
      "Reconciliation between the inventory and testing records",
      "Updates following construction or equipment replacement",
    ],
    evidenceExamples: [
      "Emergency power equipment inventory",
      "Generator asset list",
      "Automatic transfer switch inventory",
      "Essential electrical system one-line diagram",
      "Electrical riser diagram",
      "Fuel-system inventory",
      "Remote annunciator point list",
      "As-built electrical drawings",
      "Construction turnover documentation",
    ],
    commonFindings: [
      "Transfer switches are missing from the inventory",
      "Generator identifiers differ between documents",
      "New equipment is not added after construction",
      "Retired equipment remains active in the inventory",
      "Fuel-system components are not documented",
      "Remote annunciators are omitted",
      "Testing reports cannot be reconciled to individual assets",
      "Responsibility for shared emergency power equipment is unclear",
    ],
    keywords: [
      "emergency power inventory",
      "generator inventory",
      "automatic transfer switch",
      "ATS inventory",
      "essential electrical system",
      "emergency generator",
      "standby generator",
      "alternate power source",
      "electrical one line",
      "generator asset",
    ],
    aiGuidance:
      "Map facility-specific records identifying generators, transfer switches, fuel systems, starting systems, annunciators, essential electrical branches, and related components. Generic policies, proposals, and equipment brochures do not satisfy this control.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
        notes:
          "Confirm the current occupancy-specific CMS survey form and applicable requirements.",
      },
      {
        authority: "NFPA",
        citation: "NFPA 99",
        title: "Health Care Facilities Code",
        notes:
          "Addresses healthcare essential electrical systems and associated risk-based requirements.",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
    ],
    evidenceFrequency:
      "Maintain continuously and update after relevant system changes",
    evidenceRetention:
      "Life of the equipment, including superseded inventories and major modification records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review and reconciliation with installed equipment",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-002",
    slug: "emergency-generator-inspection-testing",
    title: "Emergency Generator Inspection and Testing",
    intent:
      "Emergency generators are inspected, exercised, tested, and maintained at required intervals to support reliable operation during loss of normal power.",
    description:
      "The organization maintains a coordinated testing process that documents generator operation, duration, load, operating parameters, alarms, deficiencies, corrective actions, and restoration to normal readiness.",
    requirement:
      "Inspect and test each applicable emergency generator at required intervals and maintain records demonstrating completed operation, results, deficiencies, corrective action, and return to service.",
    surveyorLooksFor: [
      "Each generator is tested at the applicable frequency",
      "The tested generator is clearly identified",
      "The test date and duration are documented",
      "Operating load or equivalent performance information is documented",
      "Required operating parameters are recorded",
      "Abnormal alarms and conditions are documented",
      "Generator cool-down and restoration are addressed",
      "Qualified personnel perform or supervise testing",
      "Failed tests receive corrective action",
      "Successful retesting is documented after repair",
    ],
    evidenceExamples: [
      "Monthly generator test log",
      "Generator exercise report",
      "Preventive-maintenance record",
      "Generator operating log",
      "Contractor service report",
      "Remote monitoring report",
      "Generator alarm report",
      "Repair work order",
      "Successful retest documentation",
    ],
    commonFindings: [
      "A required generator test is missed",
      "Test duration is not documented",
      "The report does not identify the generator",
      "Operating parameters are incomplete",
      "Generator alarms are recorded without follow-up",
      "The generator fails to carry the intended test load",
      "Repair records cannot be linked to the failed test",
      "The generator is repaired but not retested",
    ],
    keywords: [
      "generator test",
      "monthly generator test",
      "emergency generator exercise",
      "generator inspection",
      "generator maintenance",
      "generator operating log",
      "generator load",
      "generator run time",
      "generator alarm",
      "generator retest",
    ],
    aiGuidance:
      "Map completed generator inspection, exercise, and testing records that identify the generator, date, duration, operating result, load information, alarms, personnel, deficiencies, and final status. Blank logs, invoices, or schedules alone do not demonstrate completed testing.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 99",
        title: "Health Care Facilities Code",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
    ],
    evidenceFrequency:
      "At required inspection, exercise, testing, and maintenance intervals",
    evidenceRetention:
      "Current survey cycle and sufficient prior records to demonstrate testing history and reliability",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Test-record review, trend evaluation, and representative physical verification",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-003",
    slug: "automatic-transfer-switch-testing",
    title: "Automatic Transfer Switch Inspection and Testing",
    intent:
      "Automatic transfer switches reliably detect loss of normal power, transfer connected loads to the alternate source, and restore loads following return of normal power.",
    description:
      "The organization tests transfer switches and associated controls, indicators, bypass arrangements, alarms, timing functions, and load-transfer performance.",
    requirement:
      "Inspect, operate, and test each applicable automatic transfer switch at required intervals and document transfer, retransfer, timing, alarms, condition, deficiencies, and corrective action.",
    surveyorLooksFor: [
      "Each transfer switch is uniquely identified",
      "Each transfer switch is included in the testing program",
      "Transfer from normal to alternate power is verified",
      "Retransfer to normal power is verified",
      "Transfer timing is evaluated when applicable",
      "Connected load is documented when available",
      "Switch position indicators function properly",
      "Bypass or isolation features are evaluated when installed",
      "Failures are documented and corrected",
      "Successful retesting follows repairs",
    ],
    evidenceExamples: [
      "Automatic transfer switch test report",
      "Monthly generator and ATS test log",
      "Transfer-time report",
      "Preventive-maintenance record",
      "Infrared inspection report",
      "ATS repair work order",
      "Switchgear service report",
      "Successful retest record",
    ],
    commonFindings: [
      "A transfer switch is omitted from testing",
      "Transfer operation is not documented",
      "Retransfer is not verified",
      "Transfer timing is missing",
      "The report combines multiple switches without identifying results",
      "Switch position indicators do not function",
      "A failed switch is repaired without retesting",
      "Testing records do not match the active ATS inventory",
    ],
    keywords: [
      "automatic transfer switch",
      "ATS test",
      "transfer switch inspection",
      "transfer time",
      "retransfer",
      "emergency power transfer",
      "ATS maintenance",
      "ATS failure",
      "bypass isolation switch",
      "transfer switch repair",
    ],
    aiGuidance:
      "Map opening-specific or asset-specific records demonstrating transfer and retransfer performance for individual automatic transfer switches. Give higher confidence when the report identifies switch location, connected system, timing, result, deficiencies, and final disposition.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 99",
        title: "Health Care Facilities Code",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
    ],
    evidenceFrequency:
      "At required inspection, operation, testing, and maintenance intervals",
    evidenceRetention:
      "Current survey cycle and associated repair and retest records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Functional testing, document review, and inventory reconciliation",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-004",
    slug: "emergency-power-load-performance",
    title: "Emergency Power Load and Performance Testing",
    intent:
      "Emergency power sources demonstrate sufficient operating performance to support connected essential loads.",
    description:
      "The organization evaluates generator loading, operating temperature, electrical output, load acceptance, load duration, load-bank testing when applicable, and performance trends.",
    requirement:
      "Evaluate emergency generator performance under applicable operating load conditions and complete supplemental testing when routine operation does not adequately demonstrate required performance.",
    surveyorLooksFor: [
      "Generator load is recorded during testing",
      "Electrical output is documented",
      "Operating temperature is evaluated when applicable",
      "The generator accepts transferred load",
      "The generator remains stable throughout the test",
      "Supplemental load testing is completed when required",
      "Load-bank test results identify the generator",
      "Test duration and load steps are documented",
      "Abnormal performance is investigated",
      "Successful retesting follows corrective action",
    ],
    evidenceExamples: [
      "Generator load report",
      "Load-bank test report",
      "Building-load test",
      "Electrical metering report",
      "Generator performance trend",
      "Engine-temperature record",
      "Contractor test report",
      "Repair and retest documentation",
    ],
    commonFindings: [
      "Generator load is not documented",
      "Routine testing does not demonstrate adequate performance",
      "Required supplemental testing is not completed",
      "Load-bank reports do not identify the generator",
      "Test duration or load steps are incomplete",
      "Abnormal voltage or frequency is not investigated",
      "The generator cannot accept transferred load",
      "Failed performance testing lacks documented retesting",
    ],
    keywords: [
      "generator load test",
      "load bank",
      "generator performance",
      "building load",
      "generator output",
      "generator temperature",
      "generator capacity",
      "generator voltage",
      "generator frequency",
      "emergency power load",
    ],
    aiGuidance:
      "Map generator performance records involving building load, load-bank testing, electrical output, temperature, duration, load acceptance, voltage, frequency, or related operating parameters. Verify that the results identify the specific generator and final test outcome.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
      {
        authority: "NFPA",
        citation: "NFPA 99",
        title: "Health Care Facilities Code",
      },
    ],
    evidenceFrequency:
      "During required generator testing and supplemental performance testing when applicable",
    evidenceRetention:
      "Current survey cycle and sufficient historical results for performance trending",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Test-report review, performance trending, and corrective-action verification",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-005",
    slug: "generator-fuel-system-readiness",
    title: "Generator Fuel System Readiness",
    intent:
      "Emergency generator fuel systems remain capable of supporting dependable operation for the required duration.",
    description:
      "The organization monitors fuel quantity, fuel quality, storage tanks, day tanks, pumps, valves, piping, leak detection, containment, delivery arrangements, and emergency replenishment capability.",
    requirement:
      "Inspect, test, maintain, and monitor emergency generator fuel systems to verify adequate quantity, acceptable condition, reliable delivery, and timely replenishment capability.",
    surveyorLooksFor: [
      "Fuel quantity is monitored",
      "Fuel-storage tanks are identified",
      "Day tanks are included when applicable",
      "Fuel-transfer pumps are tested",
      "Fuel piping and valves are inspected",
      "Leak-detection systems are operational",
      "Secondary containment is maintained",
      "Fuel quality is evaluated when appropriate",
      "Emergency fuel-delivery arrangements are documented",
      "Fuel-system deficiencies are corrected",
    ],
    evidenceExamples: [
      "Fuel-level inspection log",
      "Fuel-quality test report",
      "Fuel-polishing report",
      "Tank inspection",
      "Fuel-pump test",
      "Leak-detection test",
      "Fuel delivery agreement",
      "Emergency fuel plan",
      "Fuel-system repair work order",
    ],
    commonFindings: [
      "Fuel quantity is not routinely monitored",
      "Fuel-quality concerns are not investigated",
      "Day-tank alarms are not tested",
      "Fuel-transfer pumps are omitted from maintenance",
      "Fuel piping is leaking",
      "Tank containment is compromised",
      "Emergency replenishment plans are outdated",
      "Fuel-system repairs are not verified",
    ],
    keywords: [
      "generator fuel",
      "diesel fuel",
      "fuel tank",
      "day tank",
      "fuel quality",
      "fuel polishing",
      "fuel transfer pump",
      "generator fuel level",
      "emergency fuel delivery",
      "fuel leak detection",
    ],
    aiGuidance:
      "Map records involving generator fuel quantity, fuel quality, tanks, day tanks, pumps, valves, piping, leak detection, containment, or emergency delivery. Fuel purchase invoices alone do not demonstrate complete fuel-system readiness.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
      {
        authority: "NFPA",
        citation: "NFPA 99",
        title: "Health Care Facilities Code",
      },
    ],
    evidenceFrequency:
      "At applicable inspection, testing, maintenance, and monitoring intervals",
    evidenceRetention:
      "Current survey cycle and life of the equipment for significant tank or fuel-system modifications",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Physical inspection, test-record review, and emergency supply-plan verification",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-006",
    slug: "generator-starting-batteries-controls",
    title: "Generator Starting Systems, Batteries, and Controls",
    intent:
      "Generator starting systems, batteries, chargers, controls, alarms, and remote annunciation remain capable of initiating and monitoring emergency operation.",
    description:
      "The organization evaluates starting batteries, battery chargers, starting-air systems when present, control panels, remote annunciators, engine alarms, shutdown alarms, and communication paths.",
    requirement:
      "Inspect, test, and maintain generator starting systems, batteries, chargers, controls, alarms, and annunciation devices at required intervals.",
    surveyorLooksFor: [
      "Starting batteries are inspected",
      "Battery condition is documented",
      "Battery chargers operate properly",
      "Battery terminals are clean and secure",
      "Starting-air systems are maintained when applicable",
      "Generator controls function properly",
      "Required alarms are tested",
      "Remote annunciators are operational",
      "Alarm labels accurately identify conditions",
      "Failures receive corrective action and retesting",
    ],
    evidenceExamples: [
      "Battery inspection log",
      "Battery conductance test",
      "Battery replacement record",
      "Charger inspection",
      "Generator alarm test",
      "Remote annunciator test",
      "Control-panel inspection",
      "Starting-system repair record",
      "Successful retest report",
    ],
    commonFindings: [
      "Battery condition is not documented",
      "Battery terminals are corroded",
      "A battery charger is in alarm",
      "Starting batteries are beyond expected service life without evaluation",
      "Remote annunciator alarms are not tested",
      "Alarm labels are inaccurate",
      "Control-panel alarms remain unresolved",
      "Repairs are completed without functional retesting",
    ],
    keywords: [
      "generator battery",
      "starting battery",
      "battery charger",
      "generator controls",
      "remote annunciator",
      "generator alarm",
      "generator starting system",
      "battery conductance",
      "engine alarm",
      "generator control panel",
    ],
    aiGuidance:
      "Map inspection, testing, maintenance, and repair records involving generator batteries, chargers, starting systems, controls, alarms, or remote annunciators. Give higher confidence when results identify the equipment and final operational status.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
    ],
    evidenceFrequency:
      "At required inspection, testing, and maintenance intervals",
    evidenceRetention:
      "Current survey cycle and associated replacement, repair, and retest records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Physical inspection, functional testing, and document review",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-007",
    slug: "generator-room-environment",
    title: "Generator Room and Equipment Environment",
    intent:
      "Emergency power equipment is maintained in a safe, accessible, protected, and operationally suitable environment.",
    description:
      "The organization evaluates generator rooms and enclosures for access, housekeeping, storage, ventilation, temperature, lighting, drainage, physical protection, exhaust conditions, security, and fire hazards.",
    requirement:
      "Maintain generator rooms and enclosures in a condition that supports safe access, reliable equipment operation, required ventilation, physical protection, and prompt emergency response.",
    surveyorLooksFor: [
      "Generator equipment is readily accessible",
      "Required working clearances are maintained",
      "Unrelated storage does not interfere with equipment",
      "The area is free of combustible accumulation",
      "Ventilation systems are operational",
      "Room or enclosure temperature is appropriate",
      "Exhaust components are intact",
      "Leaks and drainage issues are corrected",
      "Emergency lighting is available when required",
      "Access is secured against unauthorized entry",
    ],
    evidenceExamples: [
      "Generator-room inspection checklist",
      "Environment-of-care rounding report",
      "Ventilation inspection",
      "Temperature-monitoring record",
      "Exhaust-system inspection",
      "Housekeeping work order",
      "Leak repair record",
      "Generator enclosure assessment",
    ],
    commonFindings: [
      "Storage obstructs access to equipment",
      "Combustible materials are stored in the generator room",
      "Ventilation openings are blocked",
      "The generator enclosure overheats",
      "Oil or coolant leaks remain unresolved",
      "Exhaust components are damaged",
      "Working clearances are inadequate",
      "Unauthorized personnel can access the equipment",
    ],
    keywords: [
      "generator room",
      "generator enclosure",
      "generator ventilation",
      "generator storage",
      "generator clearance",
      "generator exhaust",
      "generator room temperature",
      "generator leak",
      "generator housekeeping",
      "generator security",
    ],
    aiGuidance:
      "Map inspection records, environmental rounds, photographs, work orders, and monitoring records involving generator-room access, storage, ventilation, temperature, exhaust, leaks, housekeeping, lighting, or security. Photographs should identify the location and date.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
      {
        authority: "NFPA",
        citation: "NFPA 99",
        title: "Health Care Facilities Code",
      },
    ],
    evidenceFrequency:
      "During routine facility rounds and required equipment inspections",
    evidenceRetention:
      "Current survey cycle and related corrective-action records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Physical inspection, environmental monitoring, and corrective-action review",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "High",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-008",
    slug: "emergency-power-failure-response",
    title: "Emergency Power Failure and Utility Outage Response",
    intent:
      "The organization maintains a coordinated response for loss of normal power, failure of emergency power, and extended utility interruption.",
    description:
      "The response process addresses recognition, communication, equipment assessment, clinical escalation, utility coordination, generator operation, fuel management, load prioritization, temporary power, recovery, and post-event evaluation.",
    requirement:
      "Maintain and exercise procedures for normal-power loss, emergency-power failure, prolonged outage, generator malfunction, transfer-switch failure, fuel interruption, and safe restoration of affected systems.",
    surveyorLooksFor: [
      "Utility outage responsibilities are defined",
      "Emergency communication processes are established",
      "Generator and transfer-switch status is assessed",
      "Affected clinical and support areas are identified",
      "Critical loads are prioritized",
      "Temporary power options are addressed",
      "Fuel conservation and replenishment are addressed",
      "Vendor and utility contacts are current",
      "Restoration is coordinated and documented",
      "Post-event review identifies corrective actions",
    ],
    evidenceExamples: [
      "Power interruption policy",
      "Emergency power response procedure",
      "Utility outage checklist",
      "Generator failure procedure",
      "Emergency contact list",
      "Temporary generator plan",
      "Outage incident report",
      "After-action report",
      "Corrective-action plan",
    ],
    commonFindings: [
      "Outage procedures are outdated",
      "Responsibilities are unclear",
      "Emergency contact information is inaccurate",
      "Critical loads are not identified",
      "Temporary power arrangements are not addressed",
      "Fuel resupply plans are incomplete",
      "Generator failure escalation is not defined",
      "Outages are not followed by formal review",
    ],
    keywords: [
      "power outage",
      "utility failure",
      "generator failure",
      "emergency power failure",
      "power interruption",
      "extended outage",
      "temporary generator",
      "emergency electricity",
      "utility outage response",
      "power restoration",
    ],
    aiGuidance:
      "Map policies, procedures, emergency plans, drills, incident reports, communication records, and after-action reviews involving normal-power loss, generator failure, transfer-switch failure, fuel interruption, temporary power, or restoration. A general emergency plan without power-specific actions should receive lower confidence.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Requirements",
        notes:
          "Confirm the current provider-specific emergency preparedness requirements.",
      },
      {
        authority: "NFPA",
        citation: "NFPA 99",
        title: "Health Care Facilities Code",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
    ],
    evidenceFrequency:
      "Maintain continuously, review at least annually, and evaluate after outages, failures, drills, or system changes",
    evidenceRetention:
      "Current emergency plan, completed exercise records, outage records, and prior survey-cycle after-action documentation",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Policy review, staff interview, exercise evaluation, and incident-record review",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-009",
    slug: "emergency-power-deficiency-management",
    title: "Emergency Power Deficiency Management",
    intent:
      "Emergency power deficiencies are evaluated, prioritized, corrected, retested, and formally closed.",
    description:
      "A structured process connects failed tests, alarms, leaks, maintenance findings, outage events, and equipment concerns to assigned corrective action, interim controls, repair, successful retesting, and verified closure.",
    requirement:
      "Track emergency power deficiencies from identification through risk assessment, interim mitigation, repair, retesting, and verified completion, with escalation of overdue or high-risk conditions.",
    surveyorLooksFor: [
      "Each deficiency identifies the affected asset",
      "The failed condition is clearly described",
      "Operational and patient-care risk is evaluated",
      "A responsible person is assigned",
      "A target completion date is established",
      "Interim measures are implemented when appropriate",
      "Repair documentation is retained",
      "Retesting confirms successful correction",
      "Closure is traceable to the original finding",
      "Recurring failures receive systemic evaluation",
    ],
    evidenceExamples: [
      "Emergency power deficiency log",
      "Corrective-action tracker",
      "Generator repair work order",
      "ATS repair report",
      "Interim mitigation plan",
      "Rental-generator arrangement",
      "Successful retest report",
      "Completion verification",
      "Root-cause analysis",
    ],
    commonFindings: [
      "Failed tests remain unresolved",
      "Repairs cannot be linked to the affected asset",
      "Work orders are closed without retesting",
      "Interim power arrangements are not documented",
      "Critical deficiencies are not escalated",
      "The same generator alarm recurs",
      "Vendor recommendations are not reviewed",
      "Closed deficiencies remain open in compliance reports",
    ],
    keywords: [
      "generator deficiency",
      "emergency power corrective action",
      "generator repair",
      "ATS repair",
      "generator retest",
      "failed generator test",
      "emergency power finding",
      "generator remediation",
      "open generator deficiency",
      "generator root cause",
    ],
    aiGuidance:
      "Map records demonstrating the complete deficiency lifecycle: affected equipment, failed condition, risk, interim action, assigned responsibility, repair, retest, and closure. A closed work order without successful operational verification should receive lower confidence.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
      {
        authority: "NFPA",
        citation: "NFPA 99",
        title: "Health Care Facilities Code",
      },
    ],
    evidenceFrequency: "Ongoing as deficiencies are identified",
    evidenceRetention:
      "Current survey cycle and according to organizational corrective-action policy",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, work-order reconciliation, operational retesting, and closure verification",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Emergency Power Systems",
    code: "HHS-FAC-EP-010",
    slug: "emergency-power-program-oversight",
    title: "Emergency Power Program Oversight",
    intent:
      "The organization manages emergency power readiness as a coordinated reliability program rather than as a collection of generator service reports.",
    description:
      "Program oversight integrates inventories, testing schedules, generator performance, transfer-switch operation, fuel readiness, batteries, alarms, outages, construction changes, deficiencies, contractor performance, risk trends, and leadership reporting.",
    requirement:
      "Maintain a coordinated emergency power management process that assigns responsibility, monitors required activities, evaluates system reliability, escalates unresolved risks, and reports significant issues to appropriate leadership.",
    surveyorLooksFor: [
      "Defined ownership of the emergency power program",
      "A current equipment inventory",
      "A complete inspection and testing schedule",
      "Monitoring of generator-test completion",
      "Monitoring of transfer-switch testing",
      "Tracking of fuel and starting-system readiness",
      "Analysis of failures and recurring alarms",
      "Coordination with construction and renovation",
      "Escalation of overdue high-risk deficiencies",
      "Leadership awareness of unresolved emergency power risks",
    ],
    evidenceExamples: [
      "Emergency power management plan",
      "Generator compliance dashboard",
      "Testing-completion summary",
      "Emergency power deficiency-aging report",
      "Reliability trend report",
      "Utility committee minutes",
      "Leadership report",
      "Annual program evaluation",
      "Contractor performance review",
    ],
    commonFindings: [
      "Generator reports are filed without internal review",
      "No individual owns the emergency power program",
      "Testing completion is not monitored",
      "Transfer switches are omitted from oversight",
      "Fuel readiness is managed separately and inconsistently",
      "Recurring failures are not analyzed",
      "Construction changes are not incorporated",
      "Leadership receives no summary of unresolved risk",
    ],
    keywords: [
      "emergency power program",
      "generator program",
      "generator compliance dashboard",
      "emergency power oversight",
      "generator program evaluation",
      "generator testing completion",
      "emergency power reliability",
      "generator deficiency trend",
      "essential electrical system management",
      "generator leadership report",
    ],
    aiGuidance:
      "Map plans, dashboards, summaries, committee records, reliability reviews, and annual evaluations showing coordinated oversight of emergency power readiness. Individual generator test reports alone do not demonstrate full program governance.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K918",
        title:
          "Electrical Systems — Essential Electrical System Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 99",
        title: "Health Care Facilities Code",
      },
      {
        authority: "NFPA",
        citation: "NFPA 110",
        title:
          "Standard for Emergency and Standby Power Systems",
      },
      {
        authority: "The Joint Commission",
        title: "Physical Environment Requirements",
        notes:
          "Confirm the applicable accreditation program and current standard set.",
      },
    ],
    evidenceFrequency:
      "Ongoing with formal program evaluation at least annually",
    evidenceRetention:
      "Current program records and prior survey-cycle evaluations",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Program-document review, performance-data evaluation, and leadership interview",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Emergency Power Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
];