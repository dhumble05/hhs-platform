import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed healthcare environment of care survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to evaluate physical-environment risks, identify
 * missing evidence, recognize unsafe conditions, and support mapping to
 * applicable regulatory, accreditation, and technical authorities.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsEnvironmentOfCareStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-PROG-001",
    slug: "hhs-environment-of-care-management-program",
    title: "Environment of Care Management Program",
    intent:
      "The organization maintains a coordinated program for managing physical-environment risks that could affect patients, staff, visitors, operations, and regulatory compliance.",
    description:
      "The environment of care program integrates safety, security, hazardous materials, fire safety, medical equipment, utilities, emergency management, construction, and physical-environment monitoring.",
    requirement:
      "Maintain and implement a documented environment of care management program that identifies risks, assigns responsibilities, establishes control processes, monitors performance, manages corrective actions, and evaluates program effectiveness.",
    surveyorLooksFor: [
      "A current environment of care management plan",
      "Defined responsibilities and leadership oversight",
      "Integration of major physical-environment programs",
      "Performance indicators linked to identified risks",
      "Corrective-action tracking",
      "Periodic evaluation and improvement",
    ],
    evidenceExamples: [
      "Environment of care management plan",
      "Environment of care committee charter",
      "Committee minutes",
      "Performance dashboard",
      "Corrective-action tracker",
      "Annual program evaluation",
    ],
    commonFindings: [
      "The program is outdated",
      "Responsibilities are unclear",
      "Major risk domains are not integrated",
      "Performance measures are not meaningful",
      "Corrective actions remain overdue",
      "The program is not formally evaluated",
    ],
    keywords: [
      "environment of care",
      "EOC program",
      "physical environment",
      "healthcare environment",
      "environmental safety",
      "EOC management plan",
      "facility safety program",
      "environment of care committee",
    ],
    aiGuidance:
      "Map organization-wide environment of care plans, committee records, risk assessments, performance reports, corrective actions, and annual evaluations. A policy alone should not be treated as proof that the program is actively implemented.",
    evidenceFrequency:
      "Reviewed at least annually and whenever major physical-environment risks, services, facilities, or requirements materially change",
    evidenceRetention:
      "Current program documents and supporting records from the applicable survey and organizational retention period",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review, facility inspection, data analysis, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Environment of Care Management Framework",
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
        authority: "OSHA",
        title: "Occupational Safety and Health Requirements",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-GOV-001",
    slug: "hhs-environment-of-care-governance",
    title: "Environment of Care Governance",
    intent:
      "Leadership and multidisciplinary stakeholders provide active oversight of physical-environment risks, incidents, findings, corrective actions, and performance.",
    description:
      "Environment of care governance includes committee structure, leadership authority, departmental participation, risk escalation, resource decisions, performance review, and accountability.",
    requirement:
      "Maintain documented environment of care governance that defines oversight responsibilities, reviews significant risks and findings, tracks corrective actions, and reports material concerns to organizational leadership.",
    surveyorLooksFor: [
      "Defined environment of care oversight structure",
      "Multidisciplinary participation",
      "Regular review of risks and performance",
      "Corrective-action tracking",
      "Escalation of critical findings",
      "Leadership awareness of unresolved issues",
    ],
    evidenceExamples: [
      "Environment of care committee charter",
      "Committee roster",
      "Meeting minutes",
      "Leadership reports",
      "Risk escalation records",
      "Corrective-action summaries",
    ],
    commonFindings: [
      "Oversight is informal",
      "Meeting activity is not documented",
      "Key departments do not participate",
      "Critical findings are not escalated",
      "Corrective actions are not tracked",
      "Leadership is unaware of significant risk",
    ],
    keywords: [
      "EOC committee",
      "environment of care governance",
      "safety committee",
      "physical environment oversight",
      "EOC minutes",
      "environment of care leadership",
      "safety governance",
    ],
    aiGuidance:
      "Map committee charters, rosters, minutes, leadership reports, action trackers, risk escalations, and resource decisions. A roster alone should not be treated as proof of active oversight.",
    evidenceFrequency:
      "At the frequency established by the organization and whenever material physical-environment concerns require escalation",
    evidenceRetention:
      "Retained with environment of care governance records",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Environment of Care Governance Framework",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Governance",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-RISK-001",
    slug: "hhs-physical-environment-risk-assessment",
    title: "Physical Environment Risk Assessment",
    intent:
      "The organization systematically identifies and prioritizes risks arising from the physical environment.",
    description:
      "The risk assessment evaluates patient-care spaces, support areas, utilities, equipment, hazardous materials, security, construction, life safety, environmental conditions, and staff exposure.",
    requirement:
      "Complete and periodically update a documented physical-environment risk assessment that identifies hazards, affected populations and locations, existing controls, residual risk, corrective actions, responsible parties, and target dates.",
    surveyorLooksFor: [
      "An organization-specific risk assessment",
      "Evaluation of patient, staff, and visitor risks",
      "Identification of high-risk locations",
      "Prioritization based on severity and likelihood",
      "Corrective actions linked to identified hazards",
      "Reassessment after incidents or significant changes",
    ],
    evidenceExamples: [
      "Physical environment risk assessment",
      "Environment of care risk matrix",
      "Department safety assessment",
      "Facility vulnerability review",
      "Corrective-action plan",
      "Risk reassessment record",
    ],
    commonFindings: [
      "The assessment is generic",
      "High-risk areas are omitted",
      "Risk scoring is unsupported",
      "Corrective actions lack priorities",
      "Responsible parties are not assigned",
      "The assessment is not updated after changes",
    ],
    keywords: [
      "environment of care risk assessment",
      "physical environment risk",
      "facility hazard assessment",
      "EOC risk matrix",
      "healthcare safety assessment",
      "environmental risk",
      "facility vulnerability",
    ],
    aiGuidance:
      "Map completed organization-specific assessments, risk matrices, departmental reviews, corrective-action plans, and reassessments. Generic templates without facility-specific findings should receive low confidence.",
    evidenceFrequency:
      "At least annually and after significant incidents, construction, operational changes, or newly identified hazards",
    evidenceRetention:
      "Retained with environment of care and corrective-action records",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review, site inspection, data analysis, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Physical Environment Risk Assessment Framework",
      },
      {
        authority: "OSHA",
        title: "Workplace Hazard Assessment Requirements",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Risk Assessment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-ROUND-001",
    slug: "hhs-environment-of-care-rounds",
    title: "Environment of Care Rounds",
    intent:
      "Routine inspections identify unsafe conditions, compliance gaps, maintenance needs, and environmental risks before they result in harm or survey findings.",
    description:
      "Environment of care rounds evaluate patient-care areas, support spaces, public areas, mechanical spaces, exterior areas, construction zones, and other locations based on risk.",
    requirement:
      "Conduct and document environment of care rounds at frequencies appropriate to risk, assign corrective actions for identified deficiencies, and verify timely closure.",
    surveyorLooksFor: [
      "Defined round frequencies",
      "Coverage of all applicable areas",
      "Use of meaningful inspection criteria",
      "Documentation of deficiencies",
      "Assigned corrective actions and due dates",
      "Verification of closure",
    ],
    evidenceExamples: [
      "Environment of care round checklist",
      "Department inspection record",
      "Corrective-action tracker",
      "Deficiency photographs",
      "Work orders",
      "Round summary report",
    ],
    commonFindings: [
      "Round records contain gaps",
      "High-risk areas are not included",
      "Checklists are completed without meaningful observations",
      "Corrective actions lack responsible owners",
      "Overdue findings remain open",
      "Repeated findings are not escalated",
    ],
    keywords: [
      "environment of care rounds",
      "EOC rounds",
      "facility safety rounds",
      "environmental inspection",
      "healthcare safety inspection",
      "facility rounds",
      "EOC checklist",
      "environmental deficiency",
    ],
    aiGuidance:
      "Map completed round logs, checklists, photographs, work orders, corrective-action records, and summary reports. Evaluate coverage, date continuity, repeat findings, overdue actions, and closure evidence.",
    evidenceFrequency:
      "At frequencies established by risk, policy, and applicable requirements",
    evidenceRetention:
      "Retained with environment of care and corrective-action records",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Log review, physical inspection, corrective-action verification, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Environment of Care Rounds Framework",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Environmental Rounds",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-HOUSE-001",
    slug: "hhs-housekeeping-and-environmental-cleanliness",
    title: "Housekeeping and Environmental Cleanliness",
    intent:
      "Patient-care, support, public, and work areas are maintained in a clean, sanitary, orderly, and safe condition.",
    description:
      "Environmental cleanliness includes routine cleaning, terminal cleaning, spill response, high-touch surfaces, storage practices, waste removal, equipment cleanliness, pest prevention, and coordination with infection prevention.",
    requirement:
      "Maintain and document cleaning processes appropriate to the area and risk, define responsibilities and frequencies, address deficiencies promptly, and verify effectiveness through inspection or monitoring.",
    surveyorLooksFor: [
      "Defined cleaning responsibilities",
      "Area-specific cleaning frequencies",
      "Appropriate products and procedures",
      "Clean and orderly patient-care environments",
      "Prompt correction of cleanliness deficiencies",
      "Coordination with infection prevention",
    ],
    evidenceExamples: [
      "Environmental services policy",
      "Cleaning schedule",
      "Terminal cleaning checklist",
      "Environmental inspection",
      "Cleaning audit",
      "Corrective-action documentation",
    ],
    commonFindings: [
      "Cleaning schedules are incomplete",
      "Dust and debris are present",
      "High surfaces are neglected",
      "Equipment is visibly soiled",
      "Storage interferes with cleaning",
      "Repeat deficiencies are not corrected",
    ],
    keywords: [
      "environmental cleanliness",
      "housekeeping",
      "hospital cleaning",
      "environmental services",
      "terminal cleaning",
      "cleaning audit",
      "sanitary environment",
      "EOC cleanliness",
    ],
    aiGuidance:
      "Map cleaning procedures, schedules, completed checklists, audit results, deficiency records, and corrective actions. Policies should be paired with evidence of implementation in specific areas.",
    evidenceFrequency:
      "At frequencies established by area, risk, policy, and infection prevention requirements",
    evidenceRetention:
      "Retained according to environmental services, infection prevention, and organizational requirements",
    responsibleRole: "Environmental Services Director",
    validationMethod:
      "Document review, physical inspection, audit review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Environmental Cleanliness Framework",
      },
      {
        authority: "CDC",
        title: "Environmental Infection Control Guidance",
      },
      {
        authority: "OSHA",
        title: "Sanitation Requirements",
      },
    ],
    department: "Environmental Services",
    domain: "Environment of Care",
    category: "Environmental Cleanliness",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-STOR-001",
    slug: "hhs-safe-storage-and-space-management",
    title: "Safe Storage and Space Management",
    intent:
      "Supplies, equipment, furniture, chemicals, waste, and other materials are stored in a manner that preserves safety, access, cleanliness, and regulatory compliance.",
    description:
      "Storage controls address corridor clearance, floor clearance, sprinkler clearance, ceiling access, segregation, load limits, prohibited storage, utility rooms, mechanical spaces, and patient-care areas.",
    requirement:
      "Maintain safe storage practices that preserve required clearances, do not obstruct egress or equipment, prevent contamination, and prohibit inappropriate storage in restricted or hazardous spaces.",
    surveyorLooksFor: [
      "Required corridor and exit clearance",
      "Safe floor and sprinkler clearances",
      "No inappropriate storage in mechanical or electrical rooms",
      "Proper segregation of incompatible materials",
      "Secure storage of high-risk items",
      "Prompt correction of storage deficiencies",
    ],
    evidenceExamples: [
      "Storage policy",
      "Environment of care rounds",
      "Storage inspection",
      "Corrective work order",
      "Department communication",
      "Storage-area photographs",
    ],
    commonFindings: [
      "Items obstruct corridors",
      "Storage is too close to sprinklers",
      "Materials are stored directly on the floor",
      "Electrical panels are blocked",
      "Mechanical rooms contain unrelated storage",
      "Incompatible materials are stored together",
    ],
    keywords: [
      "safe storage",
      "storage clearance",
      "corridor storage",
      "sprinkler clearance",
      "mechanical room storage",
      "electrical room clearance",
      "facility storage",
      "EOC storage",
    ],
    aiGuidance:
      "Map storage policies, inspection records, photographs, work orders, corrective actions, and department communications. Physical evidence and location-specific findings should carry more weight than policy statements alone.",
    evidenceFrequency:
      "Continuously maintained and inspected during routine environment of care rounds",
    evidenceRetention:
      "Retained with environment of care inspection and corrective-action records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Physical inspection, document review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Storage and Space Management Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
      {
        authority: "OSHA",
        title: "General Workplace Safety Requirements",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Storage and Space",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-FALL-001",
    slug: "hhs-slip-trip-and-fall-hazard-control",
    title: "Slip, Trip, and Fall Hazard Control",
    intent:
      "Walking surfaces, stairs, ramps, entrances, parking areas, and workspaces are maintained to reduce slip, trip, and fall risks.",
    description:
      "The program addresses spills, flooring defects, cords, clutter, transitions, lighting, stairs, handrails, weather conditions, exterior walkways, warning signs, and corrective response.",
    requirement:
      "Identify and promptly correct slip, trip, and fall hazards, maintain safe walking surfaces and access routes, and document response to recurring or high-risk conditions.",
    surveyorLooksFor: [
      "Safe and intact walking surfaces",
      "Prompt spill response",
      "Proper use of warning signs",
      "Secure cords and transitions",
      "Safe stairs and handrails",
      "Controls for snow, ice, and weather hazards",
    ],
    evidenceExamples: [
      "Slip-and-fall prevention policy",
      "Floor inspection",
      "Spill response record",
      "Exterior walkway inspection",
      "Corrective work order",
      "Incident trend report",
    ],
    commonFindings: [
      "Damaged flooring remains unrepaired",
      "Cords cross walking paths",
      "Spills are unattended",
      "Warning signs are not used appropriately",
      "Handrails are loose",
      "Exterior ice hazards are not controlled",
    ],
    keywords: [
      "slip trip fall",
      "floor hazard",
      "walking surface",
      "spill response",
      "trip hazard",
      "handrail inspection",
      "snow and ice control",
      "fall prevention environment",
    ],
    aiGuidance:
      "Map prevention policies, inspection records, incident reports, work orders, weather-response records, and trend analyses. Repeated incidents or delayed repairs should increase risk.",
    evidenceFrequency:
      "Continuously maintained and inspected during routine rounds and after reported incidents",
    evidenceRetention:
      "Retained with safety, incident, maintenance, and corrective-action records",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Physical inspection, incident-data review, work-order review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Slip, Trip, and Fall Hazard Control Framework",
      },
      {
        authority: "OSHA",
        title: "Walking-Working Surfaces",
        citation: "29 CFR 1910 Subpart D",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Walking Surfaces",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-LIGHT-001",
    slug: "hhs-lighting-and-visibility-management",
    title: "Lighting and Visibility Management",
    intent:
      "Interior and exterior lighting supports safe patient care, mobility, security, emergency response, and facility operations.",
    description:
      "Lighting management includes patient-care areas, corridors, exits, stairs, parking areas, entrances, exterior walkways, mechanical spaces, emergency lighting, and temporary conditions.",
    requirement:
      "Maintain adequate lighting for the intended use of each area, promptly correct lighting failures, and verify required emergency and security lighting through inspection and testing.",
    surveyorLooksFor: [
      "Adequate lighting in patient-care and work areas",
      "Functional corridor and stair lighting",
      "Adequate exterior and parking lighting",
      "Prompt correction of failed fixtures",
      "Testing of emergency lighting",
      "Temporary lighting during construction or outages",
    ],
    evidenceExamples: [
      "Lighting inspection",
      "Emergency lighting test",
      "Exterior lighting round",
      "Corrective work order",
      "Security lighting assessment",
      "Construction lighting plan",
    ],
    commonFindings: [
      "Failed lights remain unrepaired",
      "Stairs or corridors are inadequately illuminated",
      "Exterior dark areas create security risks",
      "Emergency lights are not tested",
      "Temporary areas lack adequate lighting",
      "Lighting complaints are not tracked",
    ],
    keywords: [
      "facility lighting",
      "emergency lighting",
      "security lighting",
      "parking lot lighting",
      "corridor lighting",
      "lighting inspection",
      "visibility",
      "healthcare illumination",
    ],
    aiGuidance:
      "Map inspection records, emergency-light tests, work orders, security assessments, complaints, and corrective actions. Location-specific evidence should demonstrate that failures were corrected.",
    evidenceFrequency:
      "Continuously maintained and tested or inspected at frequencies established by risk and applicable requirements",
    evidenceRetention:
      "Retained with facilities maintenance and environment of care records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Physical inspection, test-record review, and work-order verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Lighting and Visibility Framework",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
      {
        authority: "OSHA",
        title: "Workplace Illumination Requirements",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Lighting",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-TEMP-001",
    slug: "hhs-temperature-humidity-and-environmental-condition-control",
    title: "Temperature, Humidity, and Environmental Condition Control",
    intent:
      "Environmental conditions support patient safety, infection prevention, equipment operation, medication storage, staff safety, and comfort.",
    description:
      "Environmental condition monitoring may include temperature, humidity, pressure relationships, ventilation, odor, moisture, condensation, noise, and other area-specific parameters.",
    requirement:
      "Monitor and maintain environmental conditions within established limits for applicable areas, document out-of-range conditions, implement corrective actions, and verify restoration.",
    surveyorLooksFor: [
      "Defined environmental limits for applicable areas",
      "Monitoring at required frequencies",
      "Accurate identification of locations",
      "Timely response to out-of-range conditions",
      "Corrective work orders and escalation",
      "Verification that conditions returned to acceptable ranges",
    ],
    evidenceExamples: [
      "Temperature and humidity logs",
      "Building automation trends",
      "Pressure-monitoring records",
      "Corrective work orders",
      "Environmental excursion report",
      "Return-to-service verification",
    ],
    commonFindings: [
      "Monitoring records contain gaps",
      "Limits are not defined",
      "Out-of-range conditions lack follow-up",
      "Repeated excursions are not trended",
      "Sensors are not verified",
      "Areas remain in use without risk assessment",
    ],
    keywords: [
      "temperature humidity",
      "environmental monitoring",
      "room pressure",
      "temperature excursion",
      "humidity excursion",
      "BAS trend",
      "environmental condition",
      "healthcare climate control",
    ],
    aiGuidance:
      "Map monitoring logs, BAS trends, alarm records, work orders, risk assessments, corrective actions, and restoration evidence. Evaluate date continuity, defined limits, repeated failures, and delayed correction.",
    evidenceFrequency:
      "At frequencies established by area risk, policy, manufacturer guidance, and applicable requirements",
    evidenceRetention:
      "Retained with facilities, infection prevention, pharmacy, and environmental monitoring records as applicable",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Data review, field measurement, system review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Environmental Condition Control Framework",
      },
      {
        authority: "ASHRAE",
        title: "Ventilation of Health Care Facilities",
      },
      {
        authority: "FGI",
        title: "Guidelines for Design and Construction",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Environmental Conditions",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-PEST-001",
    slug: "hhs-integrated-pest-management",
    title: "Integrated Pest Management",
    intent:
      "The organization prevents and controls insects, rodents, birds, and other pests that could affect sanitation, infection prevention, safety, or operations.",
    description:
      "Integrated pest management includes prevention, inspection, monitoring, reporting, treatment, contractor oversight, chemical control, documentation, trend analysis, and corrective action.",
    requirement:
      "Maintain and implement a documented pest-management program that identifies pest activity, uses appropriate preventive and treatment controls, documents service activity, and evaluates recurring conditions.",
    surveyorLooksFor: [
      "A current pest-management plan",
      "Routine inspection and monitoring",
      "Documented service activity",
      "Prompt response to reported pest activity",
      "Safe use and storage of pest-control chemicals",
      "Trend review of repeated activity",
    ],
    evidenceExamples: [
      "Pest-management contract",
      "Pest-control service reports",
      "Pest sighting log",
      "Corrective work order",
      "Chemical use documentation",
      "Trend report",
    ],
    commonFindings: [
      "Pest sightings are not documented",
      "Service reports are not reviewed",
      "Recurring activity is not investigated",
      "Food or waste conditions support pests",
      "Chemicals are not properly controlled",
      "Exterior entry points remain unsealed",
    ],
    keywords: [
      "pest control",
      "integrated pest management",
      "rodent control",
      "insect control",
      "pest sighting",
      "pest service report",
      "healthcare pest management",
      "facility pest",
    ],
    aiGuidance:
      "Map pest policies, contracts, service reports, sighting logs, work orders, chemical records, and trend analyses. Repeated activity without root-cause correction should increase risk.",
    evidenceFrequency:
      "At frequencies established by risk, contract, policy, and observed activity",
    evidenceRetention:
      "Retained with environmental services, facilities, and contractor-management records",
    responsibleRole: "Environmental Services Director",
    validationMethod:
      "Document review, physical inspection, contractor review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Integrated Pest Management Framework",
      },
      {
        authority: "EPA",
        title: "Integrated Pest Management Guidance",
      },
    ],
    department: "Environmental Services",
    domain: "Environment of Care",
    category: "Pest Management",
    riskLevel: "Moderate",
    priority: 2,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-WASTE-001",
    slug: "hhs-waste-management-and-disposal",
    title: "Waste Management and Disposal",
    intent:
      "General, regulated, hazardous, pharmaceutical, sharps, and other waste streams are handled, stored, transported, and disposed of safely.",
    description:
      "Waste management includes segregation, labeling, containers, accumulation areas, storage limits, transport, manifests, spill response, vendor oversight, and staff education.",
    requirement:
      "Maintain and implement waste-management processes appropriate to each waste stream, including segregation, containment, labeling, storage, transport, disposal, documentation, and corrective action.",
    surveyorLooksFor: [
      "Correct segregation of waste streams",
      "Appropriate containers and labels",
      "Secure and sanitary storage areas",
      "Safe internal transport",
      "Required manifests or disposal documentation",
      "Staff knowledge of waste-handling requirements",
    ],
    evidenceExamples: [
      "Waste-management policy",
      "Regulated waste manifest",
      "Sharps inspection",
      "Hazardous waste log",
      "Waste-storage inspection",
      "Vendor disposal record",
    ],
    commonFindings: [
      "Waste streams are mixed",
      "Containers are overfilled",
      "Labels are missing",
      "Waste-storage areas are unsecured",
      "Manifests are incomplete",
      "Staff cannot explain disposal requirements",
    ],
    keywords: [
      "waste management",
      "regulated medical waste",
      "biohazard waste",
      "sharps disposal",
      "hazardous waste",
      "pharmaceutical waste",
      "waste manifest",
      "healthcare waste",
    ],
    aiGuidance:
      "Map waste policies, manifests, storage inspections, vendor records, staff training, incident reports, and corrective actions. Evidence should identify specific waste streams and responsible processes.",
    evidenceFrequency:
      "Continuously implemented and inspected at frequencies established by risk and applicable requirements",
    evidenceRetention:
      "Retained according to environmental, hazardous-materials, infection-prevention, and organizational requirements",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review, storage inspection, manifest review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Waste Management Framework",
      },
      {
        authority: "OSHA",
        title: "Bloodborne Pathogens Standard",
        citation: "29 CFR 1910.1030",
      },
      {
        authority: "EPA",
        title: "Hazardous Waste Requirements",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Waste Management",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-FURN-001",
    slug: "hhs-furniture-fixture-and-finish-condition",
    title: "Furniture, Fixture, and Finish Condition",
    intent:
      "Furniture, fixtures, walls, floors, ceilings, doors, and finishes remain safe, cleanable, intact, and appropriate for healthcare use.",
    description:
      "The organization identifies and corrects damaged, porous, sharp, unstable, stained, deteriorated, or otherwise unsafe surfaces and furnishings.",
    requirement:
      "Inspect and maintain furniture, fixtures, and finishes in safe, intact, cleanable, and functional condition, and promptly correct deficiencies that could create infection, injury, or operational risk.",
    surveyorLooksFor: [
      "Intact and cleanable surfaces",
      "No sharp or damaged furniture",
      "Stable fixtures and equipment",
      "No significant wall, floor, or ceiling damage",
      "Prompt repair of water-damaged materials",
      "Documented corrective actions",
    ],
    evidenceExamples: [
      "Environment of care inspection",
      "Furniture inspection",
      "Corrective work order",
      "Replacement plan",
      "Water-damage remediation record",
      "Deficiency photographs",
    ],
    commonFindings: [
      "Torn furniture remains in service",
      "Damaged flooring creates a trip hazard",
      "Ceiling tiles are stained or damaged",
      "Walls cannot be adequately cleaned",
      "Fixtures are loose",
      "Water-damaged materials are not replaced",
    ],
    keywords: [
      "damaged furniture",
      "torn upholstery",
      "wall damage",
      "ceiling tile stain",
      "floor damage",
      "cleanable surface",
      "facility finishes",
      "environmental repair",
    ],
    aiGuidance:
      "Map inspections, photographs, work orders, replacement plans, remediation records, and closure evidence. Repeated cosmetic findings may become high risk when they affect cleanability, stability, or life safety.",
    evidenceFrequency:
      "Continuously maintained and inspected during routine environment of care rounds",
    evidenceRetention:
      "Retained with facilities maintenance and environment of care records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Physical inspection, work-order review, and corrective-action verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Furniture and Finish Condition Framework",
      },
      {
        authority: "CDC",
        title: "Environmental Infection Control Guidance",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Furniture and Finishes",
    riskLevel: "Moderate",
    priority: 2,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-SIGN-001",
    slug: "hhs-safety-signage-and-wayfinding",
    title: "Safety Signage and Wayfinding",
    intent:
      "Signage supports safe navigation, emergency response, hazard communication, access control, and regulatory compliance.",
    description:
      "Applicable signage may include exits, emergency equipment, hazards, restricted areas, room identification, accessibility, construction routes, utility shutdowns, and temporary conditions.",
    requirement:
      "Maintain required safety, hazard, access, emergency, and wayfinding signage so that it is accurate, visible, legible, current, and appropriate to the identified risk.",
    surveyorLooksFor: [
      "Accurate exit and directional signage",
      "Visible hazard and warning signs",
      "Restricted-area identification",
      "Identification of emergency equipment",
      "Temporary signage during construction or outages",
      "Prompt removal of obsolete or conflicting signs",
    ],
    evidenceExamples: [
      "Signage inspection",
      "Wayfinding plan",
      "Exit-sign inspection",
      "Construction signage plan",
      "Corrective work order",
      "Accessibility signage review",
    ],
    commonFindings: [
      "Signs are missing or obscured",
      "Temporary signs conflict with permanent signs",
      "Restricted areas are not identified",
      "Hazard warnings are illegible",
      "Emergency equipment is difficult to locate",
      "Obsolete signs remain posted",
    ],
    keywords: [
      "safety signage",
      "wayfinding",
      "exit signage",
      "hazard sign",
      "restricted area sign",
      "construction signage",
      "emergency equipment sign",
      "facility signs",
    ],
    aiGuidance:
      "Map signage policies, inspection records, plans, photographs, work orders, and corrective actions. Physical verification should determine whether signs are visible, accurate, and consistent.",
    evidenceFrequency:
      "Continuously maintained and inspected during routine rounds and after area changes",
    evidenceRetention:
      "Retained with facilities, safety, construction, and environment of care records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Physical inspection, plan review, and work-order verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Safety Signage Framework",
      },
      {
        authority: "OSHA",
        title: "Accident Prevention Signs and Tags",
        citation: "29 CFR 1910.145",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Signage and Wayfinding",
    riskLevel: "Moderate",
    priority: 2,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-INC-001",
    slug: "hhs-environment-of-care-incident-management",
    title: "Environment of Care Incident Management",
    intent:
      "Physical-environment incidents are promptly reported, investigated, corrected, trended, and used to improve safety.",
    description:
      "Applicable incidents may include injuries, utility failures, spills, environmental excursions, security events, equipment failures, fire-safety events, water intrusion, and hazardous conditions.",
    requirement:
      "Maintain and implement a process for reporting, investigating, escalating, correcting, and closing environment of care incidents, including trend review and effectiveness verification.",
    surveyorLooksFor: [
      "Accessible incident-reporting methods",
      "Timely investigation",
      "Appropriate escalation",
      "Corrective actions linked to contributing factors",
      "Trend review of recurring events",
      "Documented closure and effectiveness",
    ],
    evidenceExamples: [
      "Environment of care incident report",
      "Incident investigation",
      "Root-cause analysis",
      "Corrective-action plan",
      "Work order",
      "Incident trend report",
    ],
    commonFindings: [
      "Incidents are inconsistently reported",
      "Investigations lack contributing-factor analysis",
      "Corrective actions are not assigned",
      "Repeated incidents are not trended",
      "Leadership notification is missing",
      "Closure is not documented",
    ],
    keywords: [
      "environment of care incident",
      "facility incident",
      "safety investigation",
      "physical environment event",
      "environmental incident",
      "facility corrective action",
      "EOC event",
      "safety trend",
    ],
    aiGuidance:
      "Map incident reports, investigations, notifications, work orders, corrective actions, trend analyses, and closure records. Verify that actions are linked to specific causes and include evidence of effectiveness.",
    evidenceFrequency:
      "Each time a reportable physical-environment incident occurs",
    evidenceRetention:
      "Retained according to safety, risk-management, facilities, legal, and organizational requirements",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Record review, event reconstruction, trend analysis, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Environment of Care Incident Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Incident Management",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-TRAIN-001",
    slug: "hhs-environment-of-care-education-and-training",
    title: "Environment of Care Education and Training",
    intent:
      "Staff understand physical-environment hazards, reporting expectations, emergency actions, and responsibilities appropriate to their role.",
    description:
      "Education may address fire safety, hazardous materials, security, utility failures, emergency response, waste handling, personal protective equipment, spills, environmental conditions, and unsafe-condition reporting.",
    requirement:
      "Provide and document environment of care education at orientation, periodically thereafter, and whenever responsibilities, hazards, systems, or procedures materially change.",
    surveyorLooksFor: [
      "Environment of care education during orientation",
      "Periodic refresher training",
      "Role-specific content",
      "Education on reporting unsafe conditions",
      "Training following major changes",
      "Records identifying attendees, content, and completion",
    ],
    evidenceExamples: [
      "Environment of care orientation",
      "Annual safety training",
      "Hazard communication training",
      "Utility failure education",
      "Fire-safety training",
      "Training roster",
      "Competency validation",
    ],
    commonFindings: [
      "Required training is incomplete",
      "Content is generic",
      "Contractors are omitted",
      "Staff cannot explain reporting expectations",
      "Training records lack identifiable content",
      "Education is not updated after changes",
    ],
    keywords: [
      "environment of care training",
      "EOC education",
      "safety orientation",
      "facility safety training",
      "hazard training",
      "unsafe condition reporting",
      "annual safety education",
      "EOC competency",
    ],
    aiGuidance:
      "Map curricula, assignments, rosters, completion records, competencies, remediation, and role-specific education. A sign-in sheet without identifiable content or participant linkage should receive reduced confidence.",
    evidenceFrequency:
      "At orientation, periodically thereafter, and whenever responsibilities or hazards materially change",
    evidenceRetention:
      "Retained according to education, human resources, safety, and organizational requirements",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Training-record review, staff interview, and competency verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Environment of Care Education Framework",
      },
      {
        authority: "OSHA",
        title: "Employee Training Requirements",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Education and Training",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Environment of Care",
    code: "HHS-EOC-EVAL-001",
    slug: "hhs-environment-of-care-program-evaluation",
    title: "Environment of Care Program Evaluation",
    intent:
      "The organization periodically evaluates whether its environment of care program is implemented as designed and effectively reduces identified risks.",
    description:
      "Program evaluation reviews rounds, incidents, utility failures, security events, hazardous-materials findings, fire-safety performance, environmental conditions, equipment failures, corrective actions, and unresolved risks.",
    requirement:
      "Complete and document a periodic evaluation of the environment of care program, including implementation compliance, performance trends, corrective-action completion, unresolved risks, and required program revisions.",
    surveyorLooksFor: [
      "A documented periodic program evaluation",
      "Review of environment of care findings and trends",
      "Evaluation of corrective-action performance",
      "Assessment of major physical-environment programs",
      "Identification of unresolved risks",
      "Documented revisions and leadership review",
    ],
    evidenceExamples: [
      "Annual environment of care evaluation",
      "Environment of care performance report",
      "Round trend analysis",
      "Incident trend report",
      "Corrective-action summary",
      "Program revision log",
    ],
    commonFindings: [
      "No formal evaluation exists",
      "The evaluation only confirms that policies exist",
      "Trend data is not analyzed",
      "Overdue findings are not addressed",
      "Major program areas are omitted",
      "Revisions are not documented",
    ],
    keywords: [
      "environment of care evaluation",
      "annual EOC review",
      "EOC effectiveness",
      "environment of care performance",
      "EOC trend analysis",
      "safety program evaluation",
      "EOC annual report",
      "physical environment audit",
    ],
    aiGuidance:
      "Map annual evaluations, performance reports, trend analyses, incident reviews, corrective-action summaries, leadership approvals, and revision records. The evidence should evaluate implementation and effectiveness rather than merely policy presence.",
    evidenceFrequency:
      "At least annually and after significant physical-environment incidents or material program changes",
    evidenceRetention:
      "Retained with environment of care governance and performance-improvement records",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review, data analysis, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Environment of Care Program Evaluation Framework",
      },
    ],
    department: "Facilities",
    domain: "Environment of Care",
    category: "Program Evaluation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];