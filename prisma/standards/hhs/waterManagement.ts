import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed water management survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to evaluate healthcare water-system risks,
 * identify missing evidence, recognize unsafe trends, and support
 * mapping to applicable regulatory, accreditation, and technical
 * authorities.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsWaterManagementStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-PROG-001",
    slug: "hhs-healthcare-water-management-program",
    title: "Healthcare Water Management Program",
    intent:
      "The organization maintains a coordinated program for managing risks associated with building water systems and reducing exposure to waterborne pathogens.",
    description:
      "The water management program establishes governance, system boundaries, responsible personnel, risk assessments, control measures, monitoring requirements, corrective actions, documentation expectations, and periodic program review.",
    requirement:
      "Maintain and implement a documented water management program that identifies water-system hazards, establishes control measures and monitoring limits, assigns responsibilities, documents corrective actions, and evaluates the program's effectiveness.",
    surveyorLooksFor: [
      "A current and approved water management program",
      "A multidisciplinary water management team",
      "Identification of building water systems and major components",
      "Defined control measures and monitoring expectations",
      "Documented responses to out-of-range conditions",
      "Periodic review and revision of the program",
    ],
    evidenceExamples: [
      "Water management program",
      "Water management plan",
      "Water management team charter",
      "Water system diagrams",
      "Monitoring logs",
      "Corrective-action records",
      "Annual program evaluation",
    ],
    commonFindings: [
      "The water management program is outdated",
      "Responsible departments are not clearly identified",
      "The plan does not reflect current building systems",
      "Control limits are not defined",
      "Monitoring records are incomplete",
      "Corrective actions are not documented",
      "The program is not formally evaluated",
    ],
    keywords: [
      "water management program",
      "water safety plan",
      "building water system",
      "waterborne pathogen prevention",
      "Legionella prevention",
      "water management team",
      "water system control",
      "healthcare water safety",
    ],
    aiGuidance:
      "Map organization-wide water management plans, system diagrams, team records, monitoring data, corrective actions, and annual evaluations. A policy alone should not be treated as proof that the program is actively implemented.",
    evidenceFrequency:
      "Reviewed at least annually and whenever building systems, risk conditions, or applicable requirements materially change",
    evidenceRetention:
      "Current program documents and monitoring records from the applicable survey and retention period",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, water-system inspection, data review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Water Management Framework",
        notes:
          "Original HHS operational control intended for cross-accreditor survey readiness.",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
        notes:
          "Apply the edition adopted by the organization or applicable authority.",
      },
      {
        authority: "CDC",
        title: "Healthcare Water Management Program Guidance",
      },
      {
        authority: "CMS",
        title: "Healthcare Water Management Expectations",
        notes:
          "Apply current federal interpretive guidance and requirements.",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-TEAM-001",
    slug: "hhs-water-management-team-governance",
    title: "Water Management Team Governance",
    intent:
      "A qualified multidisciplinary team provides oversight of water-system risks, monitoring, corrective actions, and program performance.",
    description:
      "The water management team includes individuals with knowledge of facilities, infection prevention, clinical operations, administration, risk management, and other relevant disciplines.",
    requirement:
      "Establish and maintain a multidisciplinary water management team with documented membership, responsibilities, meeting activity, decision authority, and oversight of the water management program.",
    surveyorLooksFor: [
      "Defined team membership",
      "Facilities and infection prevention participation",
      "Clear responsibilities and decision authority",
      "Regular review of monitoring results",
      "Documented evaluation of corrective actions",
      "Leadership awareness of significant water-system risks",
    ],
    evidenceExamples: [
      "Water management team charter",
      "Committee roster",
      "Meeting minutes",
      "Attendance records",
      "Program review documentation",
      "Corrective-action approvals",
    ],
    commonFindings: [
      "The team exists only on paper",
      "Key departments do not participate",
      "Meeting activity is not documented",
      "Monitoring trends are not reviewed",
      "Corrective actions are not escalated",
      "Leadership is not informed of high-risk conditions",
    ],
    keywords: [
      "water management team",
      "water committee",
      "Legionella team",
      "water safety committee",
      "water program governance",
      "multidisciplinary team",
      "water management oversight",
    ],
    aiGuidance:
      "Map team charters, rosters, meeting minutes, attendance records, monitoring reviews, and action decisions. A list of names without evidence of active oversight should receive reduced confidence.",
    evidenceFrequency:
      "At the frequency established by the organization and whenever significant water-system risks require review",
    evidenceRetention:
      "Retained with water management program governance records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review and interview with team members",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Water Management Governance Framework",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
      {
        authority: "CDC",
        title: "Water Management Program Toolkit",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Governance",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-RISK-001",
    slug: "hhs-building-water-system-risk-assessment",
    title: "Building Water System Risk Assessment",
    intent:
      "The organization understands the design, use, vulnerabilities, and patient risks associated with each building water system.",
    description:
      "The water-system risk assessment evaluates building age, piping configuration, stagnation, temperature control, disinfectant residuals, vulnerable populations, high-risk fixtures, cooling towers, decorative features, construction activity, and historical water events.",
    requirement:
      "Complete and periodically update a documented risk assessment for applicable building water systems, including identification of vulnerable populations, hazardous conditions, and locations requiring control measures or enhanced monitoring.",
    surveyorLooksFor: [
      "A building-specific water-system risk assessment",
      "Identification of vulnerable patient populations",
      "Evaluation of stagnation and low-use areas",
      "Identification of high-risk devices and fixtures",
      "Consideration of construction and system changes",
      "Reassessment after significant water events",
    ],
    evidenceExamples: [
      "Water-system risk assessment",
      "Legionella risk assessment",
      "Building water-system inventory",
      "Water-use profile",
      "High-risk area assessment",
      "Construction water-risk review",
    ],
    commonFindings: [
      "The risk assessment is generic",
      "High-risk patient areas are omitted",
      "Low-use outlets are not identified",
      "System modifications are not reflected",
      "Cooling towers or decorative features are omitted",
      "The assessment is not updated after a water event",
    ],
    keywords: [
      "water risk assessment",
      "Legionella risk assessment",
      "building water risk",
      "waterborne pathogen risk",
      "high-risk water system",
      "water system vulnerability",
      "stagnation risk",
      "water hazard assessment",
    ],
    aiGuidance:
      "Map completed building-specific assessments that identify systems, locations, hazards, vulnerable populations, and controls. Generic templates or assessments without location-specific findings should receive low confidence.",
    evidenceFrequency:
      "At program implementation, periodically thereafter, and whenever systems or risk conditions materially change",
    evidenceRetention:
      "Retained with the active water management program and related project records",
    responsibleRole: "Water Management Team",
    validationMethod:
      "Document review, system inspection, and interview with responsible personnel",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Building Water Risk Assessment Framework",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
      {
        authority: "CDC",
        title: "Healthcare Water System Risk Guidance",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Risk Assessment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-DIAG-001",
    slug: "hhs-building-water-system-diagrams",
    title: "Building Water System Diagrams",
    intent:
      "Accurate water-system diagrams allow the organization to understand flow paths, identify control points, investigate events, and manage system changes.",
    description:
      "Water-system diagrams identify incoming water, treatment components, storage, heating, recirculation, distribution branches, cooling towers, high-risk equipment, and other relevant system components.",
    requirement:
      "Maintain current diagrams or process-flow descriptions for applicable building water systems and update them when significant system modifications occur.",
    surveyorLooksFor: [
      "Diagrams reflect actual water-system configuration",
      "Incoming water and major distribution paths are identified",
      "Hot-water generation and recirculation are shown",
      "Control points and monitoring locations are identified",
      "Cooling towers and other special systems are included",
      "Recent modifications are reflected",
    ],
    evidenceExamples: [
      "Building water-system diagram",
      "Domestic water riser diagram",
      "Hot-water recirculation diagram",
      "Cooling tower flow diagram",
      "Water-treatment schematic",
      "Marked control-point map",
    ],
    commonFindings: [
      "Diagrams are outdated",
      "Recirculation loops are not shown",
      "Control points are not identified",
      "New construction is missing",
      "High-risk systems are omitted",
      "Staff cannot explain actual flow paths",
    ],
    keywords: [
      "water system diagram",
      "domestic water schematic",
      "water riser diagram",
      "hot water recirculation",
      "water flow diagram",
      "water system map",
      "water control point",
      "building water diagram",
    ],
    aiGuidance:
      "Map current diagrams, marked schematics, riser drawings, flow descriptions, and revision records. Drawings should be evaluated for building identity, date, major components, control points, and alignment with the current system.",
    evidenceFrequency:
      "Reviewed periodically and updated after significant system changes",
    evidenceRetention:
      "Maintain current diagrams and superseded versions according to the organization's document-retention process",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Drawing review, system walkdown, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Building Water System Documentation Framework",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "System Documentation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-CTRL-001",
    slug: "hhs-water-system-control-measures",
    title: "Water System Control Measures",
    intent:
      "Water-system hazards are controlled through defined operational parameters that reduce conditions favorable to waterborne pathogen growth and transmission.",
    description:
      "Control measures may include temperature ranges, disinfectant residuals, flushing, flow maintenance, cleaning, treatment, inspection, testing, and other system-specific safeguards.",
    requirement:
      "Establish, implement, and document control measures for identified water-system hazards, including measurable operating limits, monitoring methods, responsible personnel, and required responses when limits are not met.",
    surveyorLooksFor: [
      "Control measures are linked to identified hazards",
      "Operating limits are clearly defined",
      "Monitoring methods and locations are specified",
      "Responsible personnel are assigned",
      "Out-of-range results trigger defined actions",
      "Control measures are periodically evaluated",
    ],
    evidenceExamples: [
      "Water control measure matrix",
      "Temperature limits",
      "Disinfectant residual limits",
      "Flushing protocols",
      "Monitoring procedures",
      "Corrective-action algorithms",
    ],
    commonFindings: [
      "Control limits are vague",
      "Monitoring does not match the risk assessment",
      "Responsible staff are unclear",
      "Out-of-range values are not acted upon",
      "Control measures are not revised after repeated failures",
      "Policies and actual practices do not align",
    ],
    keywords: [
      "water control measures",
      "water control limits",
      "Legionella control",
      "water temperature control",
      "disinfectant residual",
      "water flushing",
      "water monitoring parameter",
      "water system control",
    ],
    aiGuidance:
      "Map control matrices, procedures, monitoring limits, assigned responsibilities, and corrective-action criteria. Evidence should show measurable parameters rather than general statements such as maintaining safe water conditions.",
    evidenceFrequency:
      "Continuously implemented and reviewed at the frequency established by the water management program",
    evidenceRetention:
      "Retained with water management monitoring and corrective-action records",
    responsibleRole: "Water Management Team",
    validationMethod:
      "Document review, monitoring-data review, and field verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Water System Control Measures Framework",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
      {
        authority: "CDC",
        title: "Building Water System Control Guidance",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Control Measures",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-TEMP-001",
    slug: "hhs-domestic-water-temperature-monitoring",
    title: "Domestic Water Temperature Monitoring",
    intent:
      "Hot- and cold-water temperatures are monitored and managed to reduce microbial growth while protecting patients, staff, and visitors from thermal injury.",
    description:
      "The organization identifies representative monitoring locations, establishes acceptable temperature ranges, trends results, and responds to temperatures outside established limits.",
    requirement:
      "Monitor and document domestic hot- and cold-water temperatures at representative locations and frequencies defined by the water management program, and implement corrective actions for out-of-range results.",
    surveyorLooksFor: [
      "Defined temperature monitoring locations",
      "Established hot- and cold-water limits",
      "Monitoring at the required frequency",
      "Assessment of distal and representative outlets",
      "Corrective action for out-of-range results",
      "Trending of recurring temperature problems",
    ],
    evidenceExamples: [
      "Domestic water temperature logs",
      "Hot-water return temperature records",
      "Distal outlet monitoring",
      "Cold-water temperature logs",
      "Corrective work orders",
      "Temperature trend reports",
    ],
    commonFindings: [
      "Required months are missing",
      "Monitoring locations are not representative",
      "Hot-water return temperatures are not tracked",
      "Out-of-range values lack corrective action",
      "Repeated failures are not escalated",
      "Logs do not identify the location or person performing the check",
    ],
    keywords: [
      "water temperature log",
      "domestic hot water",
      "hot water return",
      "cold water temperature",
      "distal outlet",
      "water temperature monitoring",
      "hot water control",
      "water temperature trend",
    ],
    aiGuidance:
      "Map completed temperature logs, trend reports, work orders, and corrective actions. Evaluate date continuity, monitoring locations, established limits, repeated failures, and evidence that corrections were verified.",
    evidenceFrequency:
      "At the frequency established by the water management program and risk assessment",
    evidenceRetention:
      "Retained for the applicable survey cycle and organizational record-retention period",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Log review, field temperature verification, trend analysis, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Domestic Water Temperature Control Framework",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
      {
        authority: "CDC",
        title: "Healthcare Water Temperature Guidance",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Temperature Control",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-FLUSH-001",
    slug: "hhs-low-use-outlet-and-stagnation-control",
    title: "Low-Use Outlet and Stagnation Control",
    intent:
      "Low-use and inactive water outlets are identified and managed to reduce stagnation and conditions favorable to microbial growth.",
    description:
      "The organization maintains a process for identifying low-use locations, assigning flushing frequencies, documenting completion, evaluating prolonged closures, and removing unnecessary fixtures where appropriate.",
    requirement:
      "Identify low-use or inactive water outlets, establish risk-based flushing or other control measures, document completion, and reassess controls when occupancy or water-use patterns change.",
    surveyorLooksFor: [
      "An inventory of low-use or inactive outlets",
      "A defined flushing schedule",
      "Documentation of flushing completion",
      "Controls for temporarily closed areas",
      "Escalation of repeated missed flushing",
      "Reassessment after occupancy changes",
    ],
    evidenceExamples: [
      "Low-use outlet inventory",
      "Flushing log",
      "Unit closure checklist",
      "Vacant-area water plan",
      "Automated flushing report",
      "Corrective-action documentation",
    ],
    commonFindings: [
      "Low-use outlets are not identified",
      "Flushing logs contain gaps",
      "Vacant areas are not included",
      "Staff do not follow the assigned schedule",
      "Missed flushing is not corrected",
      "Unused fixtures remain in place without evaluation",
    ],
    keywords: [
      "low-use outlet",
      "water flushing",
      "stagnant water",
      "water stagnation",
      "vacant unit flushing",
      "inactive outlet",
      "fixture flushing",
      "water use control",
    ],
    aiGuidance:
      "Map outlet inventories, flushing schedules, completed logs, automated reports, closure plans, and corrective actions. Evaluate whether the evidence identifies specific locations and demonstrates continuity throughout the required period.",
    evidenceFrequency:
      "At the frequency established by the risk assessment and water management program",
    evidenceRetention:
      "Retained with water management monitoring records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Document review, outlet inspection, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Water Stagnation Control Framework",
      },
      {
        authority: "CDC",
        title: "Building Water System Reopening and Flushing Guidance",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Stagnation Control",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-CT-001",
    slug: "hhs-cooling-tower-water-management",
    title: "Cooling Tower Water Management",
    intent:
      "Cooling towers and evaporative heat-rejection systems are maintained and monitored to control microbial growth, scale, corrosion, sediment, and aerosol-related exposure risks.",
    description:
      "The cooling tower program addresses system inventory, treatment, inspection, cleaning, operating limits, monitoring, shutdown, startup, drift control, testing, documentation, and corrective actions.",
    requirement:
      "Maintain a documented cooling tower management process that includes water treatment, routine monitoring, inspection, cleaning, startup and shutdown controls, response to out-of-range conditions, and verification of corrective actions.",
    surveyorLooksFor: [
      "A current cooling tower inventory",
      "Defined water-treatment and monitoring parameters",
      "Routine inspection and cleaning records",
      "Startup and shutdown procedures",
      "Corrective actions for out-of-range results",
      "Vendor oversight and performance review",
    ],
    evidenceExamples: [
      "Cooling tower treatment logs",
      "Cooling tower inspection records",
      "Cleaning and disinfection reports",
      "Water-treatment reports",
      "Startup and shutdown checklists",
      "Corrective-action documentation",
    ],
    commonFindings: [
      "Treatment records are incomplete",
      "Cleaning frequency is not documented",
      "Out-of-range results lack corrective action",
      "Vendor reports are not reviewed",
      "Seasonal startup procedures are missing",
      "Cooling tower conditions do not match documentation",
    ],
    keywords: [
      "cooling tower",
      "evaporative condenser",
      "cooling tower treatment",
      "cooling tower cleaning",
      "Legionella cooling tower",
      "tower water testing",
      "cooling tower inspection",
      "water treatment vendor",
    ],
    aiGuidance:
      "Map treatment logs, vendor reports, inspection records, cleaning documentation, startup and shutdown checklists, test results, and corrective actions. Compare dates and results to identify missing periods or unresolved failures.",
    evidenceFrequency:
      "At the frequency established by the water management program, manufacturer guidance, treatment plan, and applicable requirements",
    evidenceRetention:
      "Retained with water-treatment, maintenance, and water management program records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Record review, physical inspection, vendor review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Cooling Tower Water Management Framework",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
      {
        authority: "CDC",
        title: "Cooling Tower Water Management Guidance",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Cooling Towers",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-EQUIP-001",
    slug: "hhs-water-associated-equipment-and-devices",
    title: "Water-Associated Equipment and Devices",
    intent:
      "Equipment and devices that use, store, produce, or aerosolize water are identified and maintained to reduce contamination and transmission risks.",
    description:
      "Applicable equipment may include ice machines, humidifiers, decorative water features, therapy equipment, fountains, water dispensers, eyewash stations, and other water-associated devices.",
    requirement:
      "Identify water-associated equipment and devices, define applicable cleaning, disinfection, inspection, maintenance, and monitoring requirements, and document completion at the established frequency.",
    surveyorLooksFor: [
      "An inventory of applicable water-associated equipment",
      "Defined cleaning and maintenance procedures",
      "Completion at required frequencies",
      "Use of approved cleaning or disinfection methods",
      "Corrective action for contamination or maintenance failures",
      "Coordination between facilities, clinical departments, and infection prevention",
    ],
    evidenceExamples: [
      "Ice machine cleaning logs",
      "Water dispenser maintenance records",
      "Decorative water feature inspection",
      "Humidifier maintenance records",
      "Eyewash inspection documentation",
      "Corrective-action work orders",
    ],
    commonFindings: [
      "Equipment is missing from the inventory",
      "Cleaning logs contain gaps",
      "Manufacturer instructions are not followed",
      "Responsibilities are unclear",
      "Clinical and facilities records conflict",
      "Contaminated equipment is returned to service without verification",
    ],
    keywords: [
      "ice machine cleaning",
      "water dispenser",
      "decorative water feature",
      "humidifier maintenance",
      "water equipment",
      "eyewash inspection",
      "water-associated device",
      "water equipment disinfection",
    ],
    aiGuidance:
      "Map inventories, cleaning logs, maintenance records, manufacturer instructions, testing results, and corrective actions. Evidence should identify the specific device, location, date, and person or vendor completing the work.",
    evidenceFrequency:
      "At the frequency established by the risk assessment, manufacturer instructions, policy, and applicable requirements",
    evidenceRetention:
      "Retained with equipment maintenance and water management records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Record review, equipment inspection, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Water-Associated Equipment Control Framework",
      },
      {
        authority: "CDC",
        title: "Environmental Infection Control Guidance",
      },
      {
        authority: "Manufacturer",
        title: "Equipment Instructions for Use",
        notes:
          "Apply the current manufacturer instructions for the specific device.",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Water-Associated Equipment",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-SAMPLE-001",
    slug: "hhs-water-sampling-and-testing",
    title: "Water Sampling and Testing",
    intent:
      "Water sampling and testing are performed when required by the organization's risk assessment, control strategy, investigation process, or applicable authority.",
    description:
      "The sampling process defines the reason for testing, sampling locations, methods, laboratory qualifications, chain of custody, interpretation criteria, result review, communication, and corrective action.",
    requirement:
      "When water sampling or testing is required, use a documented and technically appropriate process that identifies sampling locations and methods, uses qualified analysis, evaluates results against established criteria, and documents required actions.",
    surveyorLooksFor: [
      "A documented reason for sampling",
      "Sampling locations linked to the identified risk",
      "Consistent collection methods",
      "Qualified laboratory analysis",
      "Timely review of results",
      "Corrective action and follow-up testing when indicated",
    ],
    evidenceExamples: [
      "Water sampling plan",
      "Laboratory reports",
      "Chain-of-custody forms",
      "Sampling location map",
      "Result interpretation record",
      "Follow-up sampling documentation",
    ],
    commonFindings: [
      "Sampling is performed without a defined plan",
      "Locations are not documented",
      "Collection methods are inconsistent",
      "Results are not reviewed promptly",
      "Positive or elevated results lack corrective action",
      "Follow-up testing is missing",
    ],
    keywords: [
      "water sampling",
      "water testing",
      "Legionella testing",
      "water culture",
      "laboratory water result",
      "chain of custody",
      "water sample location",
      "environmental sampling",
    ],
    aiGuidance:
      "Map sampling plans, laboratory reports, chain-of-custody records, location maps, result reviews, corrective actions, and follow-up testing. A laboratory report without building, location, date, or interpretation should receive reduced confidence.",
    evidenceFrequency:
      "When required by the risk assessment, investigation, control strategy, corrective-action plan, or applicable authority",
    evidenceRetention:
      "Retained with water management, investigation, and corrective-action records",
    responsibleRole: "Infection Preventionist",
    validationMethod:
      "Document review, laboratory-report review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Water Sampling and Testing Framework",
      },
      {
        authority: "CDC",
        title: "Environmental Sampling Guidance",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Sampling and Testing",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-OUTAGE-001",
    slug: "hhs-water-interruption-and-emergency-response",
    title: "Water Interruption and Emergency Response",
    intent:
      "The organization maintains safe operations during planned or unplanned water interruptions, boil-water advisories, contamination events, loss of pressure, and other water emergencies.",
    description:
      "The response process addresses notification, clinical restrictions, alternate water supplies, flushing, disinfection, system restoration, infection prevention review, emergency communication, and return-to-service verification.",
    requirement:
      "Maintain and implement a documented response process for water interruptions and contamination events, including risk assessment, communication, alternate water provisions, restoration steps, and verification before normal use resumes.",
    surveyorLooksFor: [
      "A current water emergency response plan",
      "Defined internal and external notification processes",
      "Clinical restrictions for affected water uses",
      "Alternate potable and nonpotable water provisions",
      "Flushing or disinfection requirements after restoration",
      "Documented authorization to return systems to normal use",
    ],
    evidenceExamples: [
      "Water outage response plan",
      "Boil-water advisory procedure",
      "Emergency water supply plan",
      "Outage notification records",
      "Post-restoration flushing logs",
      "Return-to-service authorization",
    ],
    commonFindings: [
      "The response plan does not address clinical operations",
      "Notification is delayed",
      "Alternate water quantities are not defined",
      "Flushing after restoration is not documented",
      "Affected equipment is not evaluated",
      "Normal use resumes without formal verification",
    ],
    keywords: [
      "water outage",
      "water interruption",
      "boil water advisory",
      "loss of water pressure",
      "water contamination",
      "emergency water supply",
      "water restoration",
      "water emergency response",
    ],
    aiGuidance:
      "Map response plans, notifications, incident logs, alternate-water documentation, flushing records, sampling results, corrective actions, and return-to-service approvals. Compare event dates and times to identify gaps in response or restoration evidence.",
    evidenceFrequency:
      "Each time a planned or unplanned water interruption, contamination event, or advisory occurs",
    evidenceRetention:
      "Retained with emergency management, utility failure, and water management records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, event reconstruction, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Water Emergency Response Framework",
      },
      {
        authority: "CDC",
        title: "Healthcare Water Emergency Guidance",
      },
      {
        authority: "CMS",
        title: "Emergency Preparedness Requirements",
        notes:
          "Apply current federal emergency preparedness requirements and interpretive guidance.",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Emergency Response",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-CORR-001",
    slug: "hhs-water-management-corrective-actions",
    title: "Water Management Corrective Actions",
    intent:
      "Out-of-range conditions, monitoring failures, contamination concerns, and water-system deficiencies are promptly investigated, corrected, verified, and trended.",
    description:
      "Corrective-action management includes immediate risk controls, responsible parties, target dates, technical intervention, communication, follow-up monitoring, effectiveness verification, escalation, and closure.",
    requirement:
      "Document and manage corrective actions for water-management failures, including the condition identified, immediate controls, assigned responsibility, completion date, verification method, and evidence that the corrective action was effective.",
    surveyorLooksFor: [
      "Timely response to out-of-range results",
      "Immediate controls proportionate to the risk",
      "Assigned responsibility and target dates",
      "Evidence of completed repairs or interventions",
      "Follow-up monitoring or testing",
      "Escalation of repeated or unresolved failures",
    ],
    evidenceExamples: [
      "Water corrective-action log",
      "Facilities work order",
      "Remediation report",
      "Post-correction monitoring",
      "Follow-up laboratory report",
      "Water management team review",
    ],
    commonFindings: [
      "Out-of-range results lack follow-up",
      "Corrective actions are undocumented",
      "Work orders are closed without effectiveness verification",
      "Repeated failures are treated as isolated events",
      "High-risk conditions are not escalated",
      "Corrective actions remain overdue",
    ],
    keywords: [
      "water corrective action",
      "water remediation",
      "out-of-range water result",
      "water system deficiency",
      "Legionella corrective action",
      "water treatment correction",
      "water action plan",
      "water issue closure",
    ],
    aiGuidance:
      "Map monitoring failures, corrective-action logs, work orders, remediation reports, follow-up testing, trend reviews, and closure approvals. Verify that corrective actions are linked to the original failure and include evidence of effectiveness.",
    evidenceFrequency:
      "Each time a water-management control limit, monitoring requirement, or safety expectation is not met",
    evidenceRetention:
      "Retained with the related monitoring, maintenance, investigation, and committee records",
    responsibleRole: "Water Management Team",
    validationMethod:
      "Record review, trend analysis, physical verification, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Water Management Corrective Action Framework",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
      {
        authority: "CDC",
        title: "Water Management Corrective Action Guidance",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Corrective Actions",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Water Management",
    code: "HHS-WATER-EVAL-001",
    slug: "hhs-water-management-program-evaluation",
    title: "Water Management Program Evaluation",
    intent:
      "The organization periodically evaluates whether the water management program is implemented as designed and effectively controls identified risks.",
    description:
      "Program evaluation reviews monitoring completion, control-limit performance, corrective actions, water events, sampling results, system changes, staff knowledge, vendor performance, and opportunities for improvement.",
    requirement:
      "Complete and document a periodic evaluation of the water management program, including implementation compliance, effectiveness of control measures, unresolved risks, corrective-action trends, and required program revisions.",
    surveyorLooksFor: [
      "A documented periodic program evaluation",
      "Review of monitoring completion rates",
      "Analysis of out-of-range trends",
      "Evaluation of corrective-action effectiveness",
      "Consideration of building and system changes",
      "Documented program revisions and leadership review",
    ],
    evidenceExamples: [
      "Annual water management evaluation",
      "Program effectiveness report",
      "Monitoring compliance summary",
      "Corrective-action trend report",
      "Water management team minutes",
      "Program revision log",
    ],
    commonFindings: [
      "No formal program evaluation exists",
      "The evaluation only confirms that a policy exists",
      "Monitoring gaps are not analyzed",
      "Repeated failures are not trended",
      "System changes are not incorporated",
      "Program revisions are not documented",
    ],
    keywords: [
      "water program evaluation",
      "annual water review",
      "water management effectiveness",
      "water monitoring compliance",
      "water trend analysis",
      "water program audit",
      "Legionella program review",
      "water management annual report",
    ],
    aiGuidance:
      "Map annual evaluations, monitoring summaries, trend reports, meeting minutes, corrective-action analyses, and revision records. The evidence should evaluate both implementation and effectiveness rather than merely restating program requirements.",
    evidenceFrequency:
      "At least annually and after significant water-system events or material program changes",
    evidenceRetention:
      "Retained with water management governance and quality-improvement records",
    responsibleRole: "Water Management Team",
    validationMethod:
      "Document review, data analysis, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Water Management Program Evaluation Framework",
      },
      {
        authority: "ASHRAE",
        title:
          "Legionellosis: Risk Management for Building Water Systems",
      },
      {
        authority: "CDC",
        title: "Water Management Program Evaluation Guidance",
      },
    ],
    department: "Facilities",
    domain: "Water Management",
    category: "Program Evaluation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];