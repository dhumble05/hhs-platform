import type { HhsCoreStandard } from "../types";

/**
 * HHS Healthcare HVAC Compliance Knowledge Pack
 *
 * These original HHS operational controls help the HHS Compliance
 * Knowledge Engine evaluate healthcare ventilation documentation,
 * critical-space environmental monitoring, pressure relationships,
 * air-balancing records, filtration evidence, outage procedures,
 * deficiency management, and program oversight.
 *
 * This knowledge pack is intentionally compliance-focused.
 * It does not create CMMS requirements for equipment-level preventive
 * maintenance, runtime tracking, parts inventory, belt replacement,
 * lubrication, or other asset-management activities.
 *
 * These controls do not reproduce proprietary accreditation standards
 * or copyrighted technical standards. Referenced authorities identify
 * regulatory and technical frameworks that may apply. Organizations
 * must confirm the adopted code editions, approved design parameters,
 * accreditation requirements, state requirements, manufacturer
 * instructions, infection-prevention expectations, and authority
 * having jurisdiction.
 */
export const hhsHvacStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-001",
    slug: "healthcare-ventilation-program-basis",
    title: "Healthcare Ventilation Program Basis",
    intent:
      "The organization maintains a defined basis for managing ventilation requirements in healthcare spaces.",
    description:
      "The organization identifies the ventilation criteria applicable to critical and noncritical spaces, including approved design documents, adopted standards, room-use classifications, pressure relationships, temperature ranges, humidity ranges, air-change requirements, filtration, exhaust, and monitoring expectations.",
    requirement:
      "Maintain documentation identifying the approved ventilation basis for applicable healthcare spaces and update it following construction, renovation, room-use changes, system modification, regulatory change, or discovery that actual operating conditions differ from documented requirements.",
    surveyorLooksFor: [
      "Applicable ventilation standards are identified",
      "The adopted or approved design basis is documented",
      "Critical healthcare spaces are identified",
      "Room-use classifications are current",
      "Required pressure relationships are identified",
      "Temperature and humidity parameters are identified",
      "Air-change and outdoor-air criteria are documented when applicable",
      "Filtration and exhaust expectations are identified",
      "Construction and renovation changes are incorporated",
      "Facilities and infection-prevention responsibilities are defined",
    ],
    evidenceExamples: [
      "Healthcare ventilation management plan",
      "Approved design criteria",
      "Ventilation matrix",
      "Critical-space inventory",
      "Room pressure matrix",
      "Temperature and humidity parameter list",
      "Air-balance schedules",
      "Life safety or mechanical drawings",
      "Commissioning documentation",
      "Room-use approval documentation",
    ],
    commonFindings: [
      "The facility cannot identify its approved ventilation criteria",
      "Different departments use conflicting temperature or humidity limits",
      "Critical rooms are missing from the inventory",
      "Room-use changes are not reflected in ventilation documentation",
      "Design documents do not match current operation",
      "Pressure relationships are undocumented",
      "Facilities and infection prevention use different reference criteria",
      "Construction modifications are not incorporated into the program",
    ],
    keywords: [
      "healthcare ventilation program",
      "HVAC compliance plan",
      "ventilation matrix",
      "ASHRAE 170",
      "critical space inventory",
      "room pressure matrix",
      "healthcare HVAC standard",
      "ventilation design criteria",
      "approved HVAC parameters",
      "healthcare ventilation documentation",
    ],
    aiGuidance:
      "Map facility-specific documents defining approved ventilation parameters, critical spaces, room classifications, pressure relationships, temperature, humidity, air changes, filtration, exhaust, and monitoring expectations. Generic engineering references without facility-specific application should receive lower confidence.",
    referencedAuthorities: [
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
        notes:
          "Confirm the edition adopted by the authority having jurisdiction and the approved design basis for the facility.",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction of Health Care Facilities",
        notes:
          "Confirm the edition applicable to the facility, project, and jurisdiction.",
      },
      {
        authority: "CMS",
        title: "Hospital Conditions of Participation and Survey Guidance",
        notes:
          "Confirm the provider type, current interpretive guidance, and applicable state requirements.",
      },
    ],
    evidenceFrequency:
      "Maintain continuously and review following system, space-use, construction, or regulatory changes",
    evidenceRetention:
      "Life of the facility, including superseded design criteria and major modification records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, drawing reconciliation, critical-space inventory review, and stakeholder interview",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-002",
    slug: "critical-space-environmental-monitoring",
    title: "Critical-Space Environmental Monitoring",
    intent:
      "Critical healthcare spaces are monitored using defined parameters that support patient safety, infection prevention, clinical operations, and product integrity.",
    description:
      "The organization identifies spaces requiring temperature, humidity, pressure, airflow, or other environmental monitoring and maintains records sufficient to demonstrate continued control.",
    requirement:
      "Monitor applicable critical healthcare spaces at defined frequencies using approved parameters, documented responsibilities, reliable measurement methods, exception handling, and corrective-action processes.",
    surveyorLooksFor: [
      "Critical monitored spaces are identified",
      "Required parameters are defined",
      "Monitoring frequency is established",
      "Responsibilities are assigned",
      "Records identify the room and date",
      "Readings are reviewed for exceptions",
      "Out-of-range conditions receive action",
      "Clinical departments are notified when needed",
      "Monitoring interruptions are addressed",
      "Records demonstrate sustained compliance over time",
    ],
    evidenceExamples: [
      "Critical-space monitoring policy",
      "Temperature and humidity logs",
      "Room pressure logs",
      "Building automation trend reports",
      "Environmental monitoring dashboard",
      "Exception reports",
      "Clinical notification records",
      "Corrective-action documentation",
      "Manual monitoring forms",
    ],
    commonFindings: [
      "Required spaces are omitted from monitoring",
      "Logs contain unexplained gaps",
      "Records do not identify the room",
      "Out-of-range values have no documented response",
      "Different departments use inconsistent limits",
      "BAS alarms are acknowledged without investigation",
      "Manual monitoring does not occur during system downtime",
      "Environmental records are not retained",
    ],
    keywords: [
      "critical space monitoring",
      "environmental monitoring",
      "temperature humidity log",
      "room pressure log",
      "HVAC monitoring",
      "BAS trend",
      "critical room parameters",
      "environmental exception",
      "healthcare room monitoring",
      "ventilation compliance log",
    ],
    aiGuidance:
      "Map policies, logs, trend reports, dashboards, notifications, and corrective actions showing actual monitoring of healthcare spaces. Give higher confidence when records identify the room, parameter, approved range, date, time, result, reviewer, and response to exceptions.",
    referencedAuthorities: [
      {
        authority: "CMS",
        title: "Hospital Survey Guidance",
        notes:
          "Surveyors may review temperature, humidity, and airflow maintenance records for operating rooms and associated areas.",
      },
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "CDC",
        title:
          "Guidelines for Environmental Infection Control in Health-Care Facilities",
      },
    ],
    evidenceFrequency:
      "At the frequency defined by the approved monitoring plan and operational risk",
    evidenceRetention:
      "Current survey cycle and sufficient historical records to demonstrate sustained environmental control",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Monitoring-record review, parameter reconciliation, exception analysis, and representative field verification",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-003",
    slug: "temperature-humidity-control",
    title: "Temperature and Humidity Control",
    intent:
      "Healthcare spaces requiring environmental control remain within approved temperature and humidity parameters or receive timely risk-based intervention.",
    description:
      "The organization manages temperature and relative humidity in applicable spaces such as operating rooms, procedure rooms, sterile processing areas, pharmacies, medication storage areas, laboratories, imaging areas, and other environments with defined requirements.",
    requirement:
      "Maintain approved temperature and humidity parameters for applicable spaces, monitor performance, investigate excursions, assess clinical and operational risk, implement corrective action, and document safe restoration.",
    surveyorLooksFor: [
      "Approved temperature ranges are identified",
      "Approved humidity ranges are identified",
      "Applicable rooms are monitored",
      "Monitoring records are complete",
      "Excursions are recognized",
      "Clinical risk is evaluated",
      "Affected materials or procedures are assessed",
      "Corrective action is documented",
      "Safe restoration is verified",
      "Recurring excursions receive systemic evaluation",
    ],
    evidenceExamples: [
      "Temperature and humidity policy",
      "Environmental monitoring logs",
      "BAS trend reports",
      "Out-of-range notification",
      "Clinical risk assessment",
      "Sterile supply evaluation",
      "Medication storage assessment",
      "Corrective work order",
      "Restoration verification",
      "Recurring-excursion analysis",
    ],
    commonFindings: [
      "Temperature or humidity limits are undefined",
      "Environmental logs contain gaps",
      "Excursions are documented without response",
      "Clinical leadership is not notified",
      "Affected sterile supplies are not evaluated",
      "The duration of the excursion is unknown",
      "Rooms return to range without documented verification",
      "Repeated excursions are treated as isolated events",
    ],
    keywords: [
      "temperature humidity",
      "relative humidity",
      "OR humidity",
      "operating room temperature",
      "sterile processing humidity",
      "environmental excursion",
      "out of range temperature",
      "HVAC environmental log",
      "room humidity monitoring",
      "temperature restoration",
    ],
    aiGuidance:
      "Map monitoring logs, BAS trends, policies, risk assessments, notifications, corrective actions, and restoration evidence involving temperature or relative humidity. A log showing an excursion without documented evaluation or response should not be treated as complete evidence.",
    referencedAuthorities: [
      {
        authority: "CMS",
        title: "Hospital Conditions of Participation and Survey Guidance",
        notes:
          "Confirm current CMS guidance for anesthetizing locations, operating rooms, medication storage, and associated clinical areas.",
      },
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction of Health Care Facilities",
      },
    ],
    evidenceFrequency:
      "Continuously or at the approved monitoring frequency for each applicable space",
    evidenceRetention:
      "Current survey cycle and associated excursion, corrective-action, and restoration records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Monitoring review, trend analysis, clinical-risk documentation review, and field verification",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-004",
    slug: "pressure-relationship-management",
    title: "Room Pressure Relationship Management",
    intent:
      "Required directional airflow relationships are maintained, monitored, and restored when impaired.",
    description:
      "The organization manages positive, negative, and neutral pressure relationships for rooms and areas where directional airflow supports infection prevention, sterile processing, clinical function, odor control, hazardous-material control, or other approved requirements.",
    requirement:
      "Identify required room pressure relationships, verify directional airflow using approved methods, monitor applicable spaces, respond to pressure loss, and document corrective action and restoration.",
    surveyorLooksFor: [
      "Rooms requiring pressure relationships are identified",
      "The required relationship is documented",
      "Monitoring methods are defined",
      "Pressure indicators are functional",
      "Directional airflow is periodically verified",
      "Doors and room conditions are considered",
      "Pressure failures receive timely response",
      "Affected clinical use is evaluated",
      "Corrective action is documented",
      "Restoration is independently confirmed",
    ],
    evidenceExamples: [
      "Room pressure matrix",
      "Pressure-monitoring logs",
      "Differential pressure trend report",
      "Visual indicator inspection",
      "Tissue or smoke visualization record",
      "Air-balance report",
      "Pressure-loss response record",
      "Clinical restriction notice",
      "Corrective-action work order",
      "Restoration verification",
    ],
    commonFindings: [
      "Required pressure relationships are not documented",
      "Pressure indicators are not functioning",
      "Staff ignore persistent pressure alarms",
      "The room is used despite failed pressure",
      "Door position prevents the required relationship",
      "Pressure logs contain unexplained gaps",
      "Repairs are completed without airflow verification",
      "Room-use changes conflict with the designed relationship",
    ],
    keywords: [
      "room pressure",
      "positive pressure",
      "negative pressure",
      "pressure relationship",
      "differential pressure",
      "directional airflow",
      "pressure monitor",
      "room pressure alarm",
      "airflow verification",
      "pressure restoration",
    ],
    aiGuidance:
      "Map room matrices, monitoring logs, BAS trends, visual airflow checks, balancing reports, incident records, clinical restrictions, repairs, and restoration verification involving positive or negative pressure relationships.",
    referencedAuthorities: [
      {
        authority: "CDC",
        title:
          "Guidelines for Environmental Infection Control in Health-Care Facilities",
        notes:
          "CDC guidance describes directional airflow principles for airborne infection isolation and protective environments.",
      },
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction of Health Care Facilities",
      },
    ],
    evidenceFrequency:
      "Continuously where installed monitoring is required and periodically through documented verification",
    evidenceRetention:
      "Current survey cycle and related alarm, impairment, repair, and restoration records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Monitor review, directional airflow verification, balancing-record review, and physical inspection",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-005",
    slug: "operating-procedure-room-ventilation",
    title: "Operating and Procedure Room Ventilation",
    intent:
      "Operating rooms and applicable procedure spaces maintain approved environmental and airflow conditions supporting safe patient care.",
    description:
      "The organization evaluates operating and procedure rooms for temperature, humidity, pressure relationship, airflow direction, air-change performance, supply distribution, filtration, system interruptions, and environmental excursions.",
    requirement:
      "Maintain approved ventilation conditions for operating rooms and applicable procedure spaces, monitor required parameters, control use during significant excursions, investigate deficiencies, and document safe restoration.",
    surveyorLooksFor: [
      "Operating-room ventilation criteria are documented",
      "Temperature and humidity are monitored",
      "Required pressure relationships are maintained",
      "Airflow direction is verified",
      "Air-change documentation is available",
      "Supply and return arrangements remain appropriate",
      "Excursions receive clinical evaluation",
      "Room-use decisions are documented",
      "Repairs receive performance verification",
      "Recurring environmental issues are evaluated",
    ],
    evidenceExamples: [
      "Operating-room ventilation matrix",
      "OR temperature and humidity logs",
      "OR pressure trends",
      "Air-balance report",
      "Air-change calculation",
      "Environmental excursion procedure",
      "Perioperative notification record",
      "Room closure or restriction record",
      "Corrective-action documentation",
      "Post-repair verification",
    ],
    commonFindings: [
      "OR environmental parameters are inconsistent",
      "Out-of-range conditions have no documented response",
      "The operating room loses positive pressure",
      "Air-change documentation is unavailable",
      "Clinical staff cannot explain escalation criteria",
      "The room remains in use without risk assessment",
      "Repairs are completed without balancing or verification",
      "Repeated environmental excursions are not analyzed",
    ],
    keywords: [
      "operating room ventilation",
      "OR pressure",
      "OR temperature",
      "OR humidity",
      "operating room airflow",
      "OR air changes",
      "procedure room ventilation",
      "perioperative environment",
      "OR environmental excursion",
      "operating room HVAC",
    ],
    aiGuidance:
      "Map operating-room or procedure-room environmental logs, pressure records, air-balance reports, air-change calculations, clinical notifications, room-use decisions, corrective actions, and restoration records. Give higher confidence when room-specific evidence is provided.",
    referencedAuthorities: [
      {
        authority: "CMS",
        title: "Hospital Survey Guidance",
        notes:
          "Survey guidance directs review of operating-room temperature, humidity, and airflow maintenance records.",
      },
      {
        authority: "CDC",
        title:
          "Guidelines for Environmental Infection Control in Health-Care Facilities",
        notes:
          "CDC guidance addresses positive-pressure ventilation and environmental infection-control measures for operating rooms.",
      },
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
    ],
    evidenceFrequency:
      "Continuously or at the approved monitoring frequency, with periodic performance verification",
    evidenceRetention:
      "Current survey cycle and associated excursion, repair, balancing, and restoration records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Environmental-record review, airflow verification, balancing review, and perioperative stakeholder interview",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-006",
    slug: "airborne-infection-isolation-room-ventilation",
    title: "Airborne Infection Isolation Room Ventilation",
    intent:
      "Airborne infection isolation rooms remain capable of containing airborne contaminants through approved directional airflow and ventilation controls.",
    description:
      "The organization manages airborne infection isolation rooms through room identification, negative-pressure verification, monitoring, exhaust or filtration arrangements, door control, alarm response, contingency planning, and clinical notification.",
    requirement:
      "Identify and monitor airborne infection isolation rooms, verify required negative-pressure relationships, respond to loss of containment, restrict use when necessary, and document restoration before returning the room to isolation service.",
    surveyorLooksFor: [
      "Airborne infection isolation rooms are identified",
      "The required negative relationship is documented",
      "Pressure is monitored or routinely verified",
      "Indicators and alarms operate properly",
      "Doors support the required pressure relationship",
      "Exhaust or approved filtration arrangements are documented",
      "Pressure failures are escalated",
      "Clinical use is restricted when necessary",
      "Alternate placement procedures are available",
      "Restoration is verified before reuse",
    ],
    evidenceExamples: [
      "AIIR inventory",
      "Negative-pressure log",
      "Differential pressure trend",
      "Airflow visualization record",
      "Room pressure alarm test",
      "Exhaust-system documentation",
      "Isolation-room failure procedure",
      "Clinical notification record",
      "Alternate placement plan",
      "Restoration verification",
    ],
    commonFindings: [
      "The room does not maintain negative pressure",
      "Pressure monitors are not functioning",
      "Staff cannot interpret the room indicator",
      "The door is routinely propped open",
      "The room remains in use after pressure failure",
      "Alternate isolation arrangements are unclear",
      "Exhaust documentation is unavailable",
      "Restoration is not verified before reuse",
    ],
    keywords: [
      "AIIR",
      "airborne infection isolation room",
      "negative pressure room",
      "isolation room pressure",
      "airborne isolation ventilation",
      "negative pressure alarm",
      "isolation room exhaust",
      "AIIR monitoring",
      "isolation room failure",
      "airflow containment",
    ],
    aiGuidance:
      "Map AIIR inventories, negative-pressure logs, differential pressure trends, airflow checks, alarm tests, exhaust documentation, failure procedures, clinical notifications, contingency plans, and restoration verification.",
    referencedAuthorities: [
      {
        authority: "CDC",
        title:
          "Guidelines for Environmental Infection Control in Health-Care Facilities",
        notes:
          "CDC guidance describes negative-pressure airflow for airborne infection isolation rooms.",
      },
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction of Health Care Facilities",
      },
    ],
    evidenceFrequency:
      "At the approved monitoring frequency, before use when required, and after repair or impairment",
    evidenceRetention:
      "Current survey cycle and related impairment, clinical-notification, and restoration records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Pressure verification, alarm review, physical inspection, and infection-prevention interview",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-007",
    slug: "protective-environment-room-ventilation",
    title: "Protective Environment Room Ventilation",
    intent:
      "Protective environment rooms maintain approved airflow and filtration conditions for highly susceptible patients.",
    description:
      "The organization manages protective environment rooms through positive-pressure verification, monitoring, filtration documentation, room integrity, door control, alarm response, contingency planning, and clinical coordination.",
    requirement:
      "Identify protective environment rooms, maintain approved positive-pressure and filtration arrangements, respond to ventilation impairment, restrict use when necessary, and verify restoration before returning the room to protective-environment service.",
    surveyorLooksFor: [
      "Protective environment rooms are identified",
      "The required positive relationship is documented",
      "Pressure is monitored or verified",
      "Filtration arrangements are documented",
      "Doors and room integrity support pressurization",
      "Indicators and alarms are functional",
      "Pressure failures are escalated",
      "Clinical use is evaluated during impairment",
      "Alternate placement procedures are available",
      "Restoration is verified before reuse",
    ],
    evidenceExamples: [
      "Protective environment room inventory",
      "Positive-pressure log",
      "Differential pressure trend",
      "Airflow visualization record",
      "Filtration verification",
      "Pressure alarm test",
      "Protective environment failure procedure",
      "Clinical notification record",
      "Alternate placement plan",
      "Restoration verification",
    ],
    commonFindings: [
      "The room does not maintain positive pressure",
      "Filtration documentation is unavailable",
      "Pressure-monitoring records contain gaps",
      "The room is used despite a failed relationship",
      "Doors remain open and defeat pressurization",
      "Staff cannot explain impairment response",
      "Alternate patient placement is not defined",
      "Restoration is not documented",
    ],
    keywords: [
      "protective environment",
      "PE room",
      "positive pressure room",
      "protective room ventilation",
      "HEPA filtration room",
      "positive pressure monitoring",
      "protective environment failure",
      "immunocompromised patient room",
      "PE room pressure",
      "protective environment restoration",
    ],
    aiGuidance:
      "Map protective-environment inventories, positive-pressure logs, filtration records, alarm tests, airflow checks, impairment procedures, clinical notifications, contingency plans, and restoration verification.",
    referencedAuthorities: [
      {
        authority: "CDC",
        title: "Protective Environment Recommendations",
        notes:
          "CDC guidance addresses positive-pressure and filtration considerations for protective environments.",
      },
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction of Health Care Facilities",
      },
    ],
    evidenceFrequency:
      "At the approved monitoring frequency and after impairment, repair, or room-use change",
    evidenceRetention:
      "Current survey cycle and related impairment, clinical-notification, and restoration records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Pressure verification, filtration-document review, physical inspection, and infection-prevention interview",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-008",
    slug: "air-balance-ventilation-verification",
    title: "Air-Balance and Ventilation Performance Verification",
    intent:
      "Healthcare ventilation performance is supported by current, room-specific testing and balancing evidence.",
    description:
      "The organization retains air-balance, commissioning, airflow, pressure, exhaust, supply, return, outdoor-air, and air-change documentation sufficient to demonstrate that applicable spaces perform according to the approved design basis.",
    requirement:
      "Obtain and retain qualified ventilation performance testing following construction, renovation, major system modification, room-use change, or investigation of significant ventilation deficiencies.",
    surveyorLooksFor: [
      "Testing identifies individual rooms or systems",
      "Measured airflow values are documented",
      "Pressure relationships are verified",
      "Air-change calculations are available when applicable",
      "Outdoor-air performance is documented when applicable",
      "Exhaust performance is verified",
      "Deficiencies are clearly identified",
      "Corrections are followed by retesting",
      "Reports are reviewed and accepted",
      "Final results align with the approved design basis",
    ],
    evidenceExamples: [
      "Testing and balancing report",
      "Commissioning report",
      "Room airflow report",
      "Air-change calculation",
      "Pressure relationship verification",
      "Exhaust airflow report",
      "Outdoor-air measurement",
      "Deficiency punch list",
      "Corrective balancing report",
      "Final acceptance documentation",
    ],
    commonFindings: [
      "The facility cannot produce an air-balance report",
      "Reports do not identify individual rooms",
      "Measured values do not match the approved criteria",
      "Failed rooms are not corrected",
      "Corrections lack final retesting",
      "Construction records are not transferred to facilities",
      "Room-use changes occur without ventilation evaluation",
      "Reports are filed without internal review",
    ],
    keywords: [
      "air balance report",
      "testing and balancing",
      "TAB report",
      "air changes",
      "airflow verification",
      "room airflow",
      "ventilation commissioning",
      "outdoor air measurement",
      "exhaust airflow",
      "HVAC acceptance",
    ],
    aiGuidance:
      "Map testing and balancing reports, commissioning records, airflow measurements, air-change calculations, pressure verification, punch lists, corrective reports, and final acceptance documents. Give lower confidence to proposals or reports lacking measured results.",
    referencedAuthorities: [
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction of Health Care Facilities",
      },
      {
        authority: "AABC, NEBB, or TABB",
        title: "Testing, Adjusting, and Balancing Frameworks",
        notes:
          "Confirm the qualification and testing framework required by the project or jurisdiction.",
      },
    ],
    evidenceFrequency:
      "Following applicable construction, renovation, major modification, room-use change, or significant performance concern",
    evidenceRetention:
      "Life of the facility or affected system, including superseded reports and corrective testing",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Qualified report review, design-basis reconciliation, and representative field verification",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-009",
    slug: "healthcare-air-filtration-documentation",
    title: "Healthcare Air Filtration Documentation",
    intent:
      "The organization maintains evidence that ventilation filtration arrangements support the approved function of applicable healthcare spaces.",
    description:
      "The organization documents required filtration stages, filter classifications, specialty filtration, high-efficiency filtration, installation configuration, replacement criteria, integrity testing when applicable, and response to filtration deficiencies.",
    requirement:
      "Maintain facility-specific documentation of required filtration arrangements for applicable healthcare systems and spaces, including verification following construction, modification, replacement, failure, or contamination concerns.",
    surveyorLooksFor: [
      "Required filtration levels are identified",
      "Filters correspond with the approved design",
      "Specialty or high-efficiency filtration is documented",
      "Installation configuration is appropriate",
      "Damaged or bypassed filtration is identified",
      "Replacement criteria are defined",
      "Integrity testing is available when required",
      "Construction changes preserve required filtration",
      "Deficiencies receive corrective action",
      "Post-correction verification is documented",
    ],
    evidenceExamples: [
      "Ventilation filtration matrix",
      "Approved mechanical schedules",
      "Filter classification documentation",
      "HEPA filter certification",
      "Filter integrity test",
      "Commissioning report",
      "Construction turnover record",
      "Filtration deficiency report",
      "Corrective-action documentation",
      "Post-repair verification",
    ],
    commonFindings: [
      "The required filter classification is unknown",
      "Installed filtration differs from design documents",
      "Filters are improperly installed or bypassed",
      "HEPA certification is missing",
      "Construction alters filtration without review",
      "Damaged filtration remains in service",
      "Corrective work lacks performance verification",
      "The facility relies only on purchase invoices as evidence",
    ],
    keywords: [
      "healthcare air filtration",
      "HVAC filter documentation",
      "HEPA certification",
      "filter integrity test",
      "ventilation filter matrix",
      "filter classification",
      "air filtration compliance",
      "HEPA filter testing",
      "filter bypass",
      "healthcare HVAC filtration",
    ],
    aiGuidance:
      "Map design schedules, filtration matrices, certifications, integrity tests, commissioning reports, construction records, deficiency reports, and post-correction verification. Purchase orders or invoices alone do not establish correct installation or performance.",
    referencedAuthorities: [
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "CDC",
        title:
          "Guidelines for Environmental Infection Control in Health-Care Facilities",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction of Health Care Facilities",
      },
    ],
    evidenceFrequency:
      "Maintain continuously and update following system modification, specialty-filter testing, or identified deficiency",
    evidenceRetention:
      "Life of the system for design and commissioning records and the current survey cycle for testing and corrective-action records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Design-document review, certification review, installation verification, and corrective-action reconciliation",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "High",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-010",
    slug: "ventilation-interruption-outage-response",
    title: "Ventilation Interruption and Utility Outage Response",
    intent:
      "The organization maintains a coordinated response to ventilation loss, power interruption, control failure, extreme environmental conditions, and prolonged HVAC outage.",
    description:
      "The response process addresses recognition, escalation, clinical communication, affected-space identification, temporary monitoring, patient-care prioritization, environmental risk assessment, equipment shutdown or isolation, restoration, and post-event review.",
    requirement:
      "Maintain procedures for planned and unplanned ventilation interruption, including loss of normal power, control-system failure, air-handler shutdown, pressure loss, temperature or humidity excursion, exhaust failure, and safe restoration of affected spaces.",
    surveyorLooksFor: [
      "Ventilation outage responsibilities are defined",
      "Critical spaces can be identified",
      "Clinical escalation processes are established",
      "Temporary environmental monitoring is addressed",
      "Pressure-dependent rooms receive priority",
      "Operating and procedure areas are evaluated",
      "Outside-air and exhaust impacts are considered",
      "Patient-care restrictions are defined",
      "Restoration verification is documented",
      "Significant events receive after-action review",
    ],
    evidenceExamples: [
      "HVAC outage procedure",
      "Utility interruption plan",
      "Air-handler shutdown procedure",
      "Critical-space response matrix",
      "Clinical notification record",
      "Temporary monitoring log",
      "Environmental risk assessment",
      "System restoration checklist",
      "Post-outage verification",
      "After-action review",
    ],
    commonFindings: [
      "HVAC outage procedures are generic",
      "Critical rooms are not prioritized",
      "Clinical departments are not notified",
      "Temporary monitoring is not implemented",
      "Pressure-dependent rooms remain in use without assessment",
      "Outside-air or exhaust impacts are overlooked",
      "Normal operation resumes without verification",
      "Repeated outage issues are not evaluated",
    ],
    keywords: [
      "HVAC outage",
      "ventilation failure",
      "air handler shutdown",
      "utility interruption HVAC",
      "temperature excursion response",
      "pressure loss response",
      "HVAC emergency procedure",
      "ventilation restoration",
      "airflow interruption",
      "HVAC after action",
    ],
    aiGuidance:
      "Map outage procedures, critical-space matrices, notifications, temporary monitoring logs, environmental risk assessments, shutdown records, restoration checklists, and after-action reviews involving HVAC or ventilation interruption.",
    referencedAuthorities: [
      {
        authority: "CMS",
        title: "Emergency Preparedness and Hospital Survey Requirements",
        notes:
          "Confirm current provider-specific requirements and applicable emergency preparedness guidance.",
      },
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "CDC",
        title:
          "Guidelines for Environmental Infection Control in Health-Care Facilities",
      },
    ],
    evidenceFrequency:
      "Maintain continuously, review at least annually, and evaluate after outages, drills, system changes, or significant environmental excursions",
    evidenceRetention:
      "Current procedures and prior survey-cycle outage, restoration, and after-action records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Procedure review, event-record review, stakeholder interview, and restoration-document verification",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-011",
    slug: "ventilation-deficiency-management",
    title: "Ventilation Deficiency and Corrective-Action Management",
    intent:
      "Healthcare ventilation deficiencies are evaluated, prioritized, corrected, verified, and formally closed.",
    description:
      "A structured process connects pressure failures, environmental excursions, airflow deficiencies, filtration concerns, failed alarms, exhaust issues, balancing findings, and ventilation complaints to risk assessment, interim controls, corrective action, retesting, and closure.",
    requirement:
      "Track healthcare ventilation deficiencies from identification through risk assessment, interim mitigation, assigned correction, operational verification, and documented closure, with escalation of overdue or high-risk conditions.",
    surveyorLooksFor: [
      "Each deficiency identifies the affected room or system",
      "The failed condition is clearly described",
      "Clinical and infection-prevention risk is evaluated",
      "A responsible person is assigned",
      "A target completion date is established",
      "Interim controls are implemented when needed",
      "Corrective work is documented",
      "Retesting confirms restored performance",
      "Closure is traceable to the original finding",
      "Recurring deficiencies receive systemic evaluation",
    ],
    evidenceExamples: [
      "Ventilation deficiency log",
      "Environmental corrective-action tracker",
      "Pressure failure record",
      "Temperature or humidity excursion report",
      "Interim mitigation plan",
      "Clinical restriction notice",
      "Corrective work documentation",
      "Air-balance retest",
      "Restoration verification",
      "Root-cause analysis",
    ],
    commonFindings: [
      "Environmental excursions remain unresolved",
      "Closed work orders lack operational verification",
      "Clinical risk is not documented",
      "Interim precautions are inconsistent",
      "Critical pressure failures are not escalated",
      "Repairs cannot be linked to the affected room",
      "Recurring HVAC failures are not analyzed",
      "Compliance trackers remain open after correction",
    ],
    keywords: [
      "HVAC deficiency",
      "ventilation corrective action",
      "pressure failure correction",
      "environmental excursion corrective action",
      "airflow deficiency",
      "HVAC retest",
      "ventilation remediation",
      "open HVAC finding",
      "HVAC restoration verification",
      "ventilation root cause",
    ],
    aiGuidance:
      "Map records demonstrating the complete deficiency lifecycle: affected room or system, failed condition, risk, interim action, responsibility, correction, operational retest, and closure. A closed work order without evidence of restored environmental performance should receive lower confidence.",
    referencedAuthorities: [
      {
        authority: "CMS",
        title: "Hospital Conditions of Participation and Survey Guidance",
      },
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "CDC",
        title:
          "Guidelines for Environmental Infection Control in Health-Care Facilities",
      },
    ],
    evidenceFrequency: "Ongoing as deficiencies are identified",
    evidenceRetention:
      "Current survey cycle and according to organizational corrective-action policy",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, monitoring reconciliation, operational verification, and closure review",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Healthcare Ventilation",
    code: "HHS-FAC-HVAC-012",
    slug: "healthcare-ventilation-program-oversight",
    title: "Healthcare Ventilation Program Oversight",
    intent:
      "The organization manages healthcare ventilation readiness as a coordinated compliance and patient-safety program.",
    description:
      "Program oversight integrates critical-space inventories, environmental monitoring, pressure relationships, air-balance documentation, filtration, operating-room performance, isolation-room readiness, outages, construction changes, deficiencies, trends, and leadership reporting.",
    requirement:
      "Maintain a coordinated healthcare ventilation management process that assigns responsibility, monitors required evidence, evaluates system and space performance, escalates unresolved risks, and reports significant ventilation concerns to appropriate leadership.",
    surveyorLooksFor: [
      "Defined ownership of the ventilation compliance program",
      "A current critical-space inventory",
      "Approved environmental parameters are documented",
      "Monitoring completion is reviewed",
      "Pressure failures and excursions are tracked",
      "Air-balance records are retained",
      "Construction and room-use changes are evaluated",
      "Recurring deficiencies are analyzed",
      "High-risk conditions are escalated",
      "Leadership is informed of unresolved ventilation risk",
    ],
    evidenceExamples: [
      "Healthcare ventilation management plan",
      "Critical-space compliance dashboard",
      "Environmental monitoring summary",
      "Pressure-failure trend report",
      "Excursion-aging report",
      "Air-balance record index",
      "Environment-of-care committee minutes",
      "Infection-prevention committee minutes",
      "Leadership report",
      "Annual program evaluation",
    ],
    commonFindings: [
      "Ventilation records are fragmented across departments",
      "No individual owns the compliance program",
      "Critical-space inventories are outdated",
      "Environmental exceptions are not trended",
      "Construction changes are not incorporated",
      "Air-balance reports cannot be located",
      "Recurring failures are treated as isolated events",
      "Leadership receives no summary of unresolved risk",
    ],
    keywords: [
      "healthcare ventilation oversight",
      "HVAC compliance program",
      "ventilation dashboard",
      "critical space compliance",
      "environmental monitoring oversight",
      "HVAC program evaluation",
      "ventilation risk report",
      "pressure failure trend",
      "HVAC leadership report",
      "ventilation governance",
    ],
    aiGuidance:
      "Map management plans, dashboards, committee minutes, monitoring summaries, trend reports, risk reports, and annual evaluations showing coordinated oversight of healthcare ventilation compliance. Individual work orders or maintenance reports alone do not establish program governance.",
    referencedAuthorities: [
      {
        authority: "CMS",
        title: "Hospital Conditions of Participation and Survey Guidance",
      },
      {
        authority: "ASHRAE",
        citation: "ANSI/ASHRAE/ASHE Standard 170",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "CDC",
        title:
          "Guidelines for Environmental Infection Control in Health-Care Facilities",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction of Health Care Facilities",
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
      "Program-document review, performance-data evaluation, committee-record review, and leadership interview",
    department: "Facilities",
    domain: "Utility Systems",
    category: "Healthcare Ventilation",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
];