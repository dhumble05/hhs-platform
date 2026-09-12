import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed healthcare building maintenance survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to evaluate building-condition risks, identify
 * missing maintenance evidence, recognize unsafe physical conditions,
 * and support mapping to applicable regulatory, accreditation,
 * manufacturer, and technical authorities.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsBuildingMaintenanceStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-PROG-001",
    slug: "hhs-building-maintenance-management-program",
    title: "Building Maintenance Management Program",
    intent:
      "The organization maintains a coordinated program for inspecting, maintaining, repairing, and improving the building and its physical components.",
    description:
      "The building maintenance program includes asset identification, preventive maintenance, corrective maintenance, inspections, work-order management, condition assessment, contractor oversight, deferred maintenance, corrective actions, and program evaluation.",
    requirement:
      "Maintain and implement a documented building maintenance program that identifies included assets and areas, assigns responsibilities, establishes inspection and maintenance requirements, manages deficiencies, and evaluates program effectiveness.",
    surveyorLooksFor: [
      "A current building maintenance plan",
      "Defined maintenance responsibilities",
      "An organized inventory of maintainable building assets",
      "Documented preventive and corrective maintenance processes",
      "Prioritization of safety and regulatory deficiencies",
      "Periodic program evaluation",
    ],
    evidenceExamples: [
      "Building maintenance plan",
      "Facilities maintenance policies",
      "Building asset inventory",
      "Preventive-maintenance schedule",
      "Corrective work-order report",
      "Deferred-maintenance list",
      "Annual program evaluation",
    ],
    commonFindings: [
      "The maintenance program is outdated",
      "Responsibilities are unclear",
      "Building assets are not fully inventoried",
      "Preventive maintenance is inconsistent",
      "Safety deficiencies remain open",
      "The program is not formally evaluated",
    ],
    keywords: [
      "building maintenance program",
      "facility maintenance",
      "physical plant maintenance",
      "hospital building maintenance",
      "facilities management",
      "building asset management",
      "maintenance compliance",
      "facility condition",
    ],
    aiGuidance:
      "Map organization-wide maintenance plans, inventories, schedules, work orders, inspection records, deferred-maintenance lists, corrective actions, and annual evaluations. A policy alone should not be treated as proof that building conditions are actively managed.",
    evidenceFrequency:
      "Reviewed at least annually and whenever facilities, systems, responsibilities, or applicable requirements materially change",
    evidenceRetention:
      "Current program documents and supporting records from the applicable survey and organizational retention period",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, work-order analysis, physical inspection, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Building Maintenance Framework",
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
        authority: "NFPA",
        title: "Life Safety Code",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-INV-001",
    slug: "hhs-building-asset-inventory",
    title: "Building Asset Inventory",
    intent:
      "The organization maintains a complete and current inventory of building components and maintainable physical assets.",
    description:
      "The inventory may include roofs, walls, doors, windows, ceilings, floors, plumbing fixtures, architectural components, loading docks, exterior structures, drainage systems, and other maintainable building assets.",
    requirement:
      "Maintain a current building asset inventory that uniquely identifies included assets, location, condition, ownership, maintenance requirements, status, and replacement considerations where applicable.",
    surveyorLooksFor: [
      "Unique identification of maintainable building assets",
      "Accurate asset locations",
      "Defined maintenance requirements",
      "Current operating or service status",
      "Linkage to work orders and inspections",
      "Removal or retirement of inactive asset records",
    ],
    evidenceExamples: [
      "Building asset inventory",
      "CMMS asset export",
      "Facility equipment list",
      "Asset-tag report",
      "Inventory reconciliation",
      "Asset retirement record",
    ],
    commonFindings: [
      "Major assets are missing from the inventory",
      "Asset locations are inaccurate",
      "Duplicate records exist",
      "Inactive assets remain active",
      "Maintenance requirements are not assigned",
      "Assets cannot be linked to work history",
    ],
    keywords: [
      "building asset inventory",
      "facility asset list",
      "CMMS building assets",
      "maintainable asset",
      "facility inventory",
      "architectural asset",
      "building component inventory",
      "asset reconciliation",
    ],
    aiGuidance:
      "Map asset inventories, CMMS exports, reconciliations, location records, condition records, and retirement documentation. Evaluate duplicate assets, missing identifiers, inactive records, and assets without maintenance requirements.",
    evidenceFrequency:
      "Continuously updated and formally reconciled at intervals established by policy",
    evidenceRetention:
      "Retained for the active life of the asset and according to organizational asset-management requirements",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Inventory review, physical sampling, CMMS comparison, and asset reconciliation",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Building Asset Inventory Framework",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Asset Management",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-PM-001",
    slug: "hhs-building-preventive-maintenance",
    title: "Building Preventive Maintenance",
    intent:
      "Building components receive scheduled inspection, servicing, and maintenance necessary to preserve safe and reliable conditions.",
    description:
      "Preventive maintenance may include roofs, doors, walls, floors, ceilings, windows, seals, drains, plumbing fixtures, loading docks, exterior structures, architectural features, and other building components.",
    requirement:
      "Perform and document preventive maintenance at established intervals using approved procedures, qualified personnel, complete service records, and timely correction of identified deficiencies.",
    surveyorLooksFor: [
      "Defined preventive-maintenance schedules",
      "Completion within required timeframes",
      "Use of appropriate inspection criteria",
      "Documentation of deficiencies",
      "Work orders generated for corrective needs",
      "Verification of repair completion",
    ],
    evidenceExamples: [
      "Preventive-maintenance schedule",
      "Completed PM work order",
      "Inspection checklist",
      "Maintenance procedure",
      "Corrective work order",
      "PM completion report",
    ],
    commonFindings: [
      "Preventive maintenance is overdue",
      "Inspection records are incomplete",
      "High-risk building components are omitted",
      "Deficiencies do not generate corrective work",
      "Repairs are not verified",
      "Completion rates are not monitored",
    ],
    keywords: [
      "building preventive maintenance",
      "facility PM",
      "architectural maintenance",
      "building inspection",
      "scheduled facility maintenance",
      "preventive work order",
      "maintenance schedule",
      "building PM compliance",
    ],
    aiGuidance:
      "Map PM schedules, completed work orders, procedures, inspection checklists, deficiencies, corrective work orders, and completion reports. Evaluate due dates, completion dates, missing assets, repeated deficiencies, and overdue trends.",
    evidenceFrequency:
      "At intervals established by risk, manufacturer guidance, policy, condition, and applicable requirements",
    evidenceRetention:
      "Retained according to facilities maintenance and organizational record requirements",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Work-order review, CMMS analysis, physical sampling, and overdue-report review",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Building Preventive Maintenance Framework",
      },
      {
        authority: "Manufacturer",
        title: "Applicable Building Component Maintenance Instructions",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Preventive Maintenance",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-CORR-001",
    slug: "hhs-building-corrective-maintenance",
    title: "Building Corrective Maintenance",
    intent:
      "Building defects and failures are promptly evaluated, prioritized, repaired, documented, and verified.",
    description:
      "Corrective maintenance addresses reported deficiencies, work-order priority, temporary controls, repair, contractor support, inspection, final status, and recurrence prevention.",
    requirement:
      "Complete and document corrective maintenance for building deficiencies, including the reported condition, risk priority, interim controls, repair actions, verification, and closure.",
    surveyorLooksFor: [
      "Prompt response to reported deficiencies",
      "Risk-based prioritization",
      "Temporary controls when immediate repair is not possible",
      "Complete repair documentation",
      "Verification of final condition",
      "Escalation of recurring failures",
    ],
    evidenceExamples: [
      "Corrective work order",
      "Facility deficiency report",
      "Repair documentation",
      "Temporary-control record",
      "Contractor service report",
      "Closure verification",
    ],
    commonFindings: [
      "Safety deficiencies remain open",
      "Work orders lack risk priority",
      "Temporary repairs become permanent",
      "Completed work is not verified",
      "Recurring failures are not investigated",
      "Closure documentation is incomplete",
    ],
    keywords: [
      "building corrective maintenance",
      "facility repair",
      "building deficiency",
      "corrective work order",
      "maintenance repair",
      "temporary repair",
      "facility corrective action",
      "building failure",
    ],
    aiGuidance:
      "Map deficiency reports, corrective work orders, risk priorities, temporary controls, repair records, contractor reports, repeat-failure analyses, and closure verification. Repeated repairs without root-cause review should increase risk.",
    evidenceFrequency:
      "Each time a building defect, failure, unsafe condition, or maintenance concern is identified",
    evidenceRetention:
      "Retained according to facilities maintenance and corrective-action requirements",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Work-order review, physical inspection, repeat-failure analysis, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Building Corrective Maintenance Framework",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Corrective Maintenance",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-ROOF-001",
    slug: "hhs-roof-inspection-and-maintenance",
    title: "Roof Inspection and Maintenance",
    intent:
      "Roofing systems are maintained to prevent water intrusion, structural deterioration, equipment damage, mold risk, and operational disruption.",
    description:
      "Roof management includes membrane condition, flashing, penetrations, drains, scuppers, seams, equipment curbs, walk pads, access, debris, vegetation, warranty conditions, and post-storm inspections.",
    requirement:
      "Inspect and maintain roofing systems at planned intervals and after significant weather events, promptly correct deficiencies, and document water-intrusion response and final restoration.",
    surveyorLooksFor: [
      "Routine roof inspections",
      "Inspection after severe weather when indicated",
      "Clear roof drains and drainage paths",
      "Intact membranes, seams, and flashing",
      "Controlled roof penetrations",
      "Documented repair and leak response",
    ],
    evidenceExamples: [
      "Roof inspection",
      "Roof condition report",
      "Roof warranty record",
      "Leak-response work order",
      "Post-storm inspection",
      "Roof repair documentation",
    ],
    commonFindings: [
      "Roof inspections are not documented",
      "Drains are obstructed",
      "Membrane damage remains unrepaired",
      "Temporary patches remain in place",
      "Leaks recur without root-cause correction",
      "Warranty requirements are not followed",
    ],
    keywords: [
      "roof inspection",
      "roof maintenance",
      "roof leak",
      "roof membrane",
      "roof drain",
      "flashing repair",
      "water intrusion",
      "hospital roof",
    ],
    aiGuidance:
      "Map roof inspections, condition reports, photographs, warranty records, leak work orders, storm inspections, repairs, and closure evidence. Recurring leaks or unresolved temporary repairs should increase risk.",
    evidenceFrequency:
      "At least periodically, seasonally where appropriate, and after significant weather or reported leakage",
    evidenceRetention:
      "Retained with facilities maintenance, warranty, and water-intrusion records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Record review, roof inspection, work-order review, and repair verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Roof Maintenance Framework",
      },
      {
        authority: "Manufacturer",
        title: "Roofing System Maintenance and Warranty Requirements",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Roofing",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-ENVELOPE-001",
    slug: "hhs-building-envelope-maintenance",
    title: "Building Envelope Maintenance",
    intent:
      "Exterior walls, windows, joints, penetrations, foundations, and weather barriers are maintained to prevent water intrusion, air leakage, deterioration, and unsafe conditions.",
    description:
      "Building-envelope management includes masonry, panels, sealants, windows, glazing, louvers, expansion joints, exterior penetrations, foundations, insulation, and weatherproofing.",
    requirement:
      "Inspect and maintain the building envelope, promptly correct cracks, failed seals, damaged materials, water intrusion, loose components, and other conditions that could affect safety or operations.",
    surveyorLooksFor: [
      "Routine exterior-condition inspections",
      "Intact windows, seals, and joints",
      "No loose or falling materials",
      "Prompt response to water intrusion",
      "Controlled exterior penetrations",
      "Documented repair and verification",
    ],
    evidenceExamples: [
      "Building-envelope inspection",
      "Exterior wall condition report",
      "Sealant replacement record",
      "Window repair work order",
      "Water-intrusion investigation",
      "Contractor repair report",
    ],
    commonFindings: [
      "Exterior cracks are not evaluated",
      "Failed sealant allows water intrusion",
      "Windows leak or do not close properly",
      "Loose façade components create hazards",
      "Penetrations are not weather-sealed",
      "Recurring moisture is not investigated",
    ],
    keywords: [
      "building envelope",
      "exterior wall inspection",
      "window leak",
      "sealant failure",
      "façade maintenance",
      "weatherproofing",
      "exterior penetration",
      "water intrusion",
    ],
    aiGuidance:
      "Map envelope inspections, condition reports, photographs, leak investigations, repair work orders, contractor reports, and verification records. Repeated moisture or façade deterioration should increase risk.",
    evidenceFrequency:
      "At intervals established by condition and risk and after significant weather or reported leakage",
    evidenceRetention:
      "Retained with facilities maintenance and capital-planning records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Document review, exterior inspection, repair verification, and contractor-report review",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Building Envelope Maintenance Framework",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Building Envelope",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-FINISH-001",
    slug: "hhs-interior-finish-maintenance",
    title: "Interior Finish Maintenance",
    intent:
      "Walls, ceilings, floors, doors, casework, trim, and other interior finishes remain intact, cleanable, safe, and appropriate for healthcare use.",
    description:
      "Interior finish maintenance addresses damage, deterioration, water staining, sharp edges, porous surfaces, loose materials, gaps, delamination, and conditions that affect infection prevention or life safety.",
    requirement:
      "Inspect and maintain interior finishes in safe, intact, cleanable, and functional condition, and promptly correct damage that could affect infection prevention, fire safety, patient safety, or operations.",
    surveyorLooksFor: [
      "Intact and cleanable wall surfaces",
      "Safe and secure ceiling systems",
      "Flooring free from damage and trip hazards",
      "Doors and frames in serviceable condition",
      "Prompt evaluation of water staining",
      "Documented repair and closure",
    ],
    evidenceExamples: [
      "Interior finish inspection",
      "Environment of care round",
      "Repair work order",
      "Ceiling-tile replacement record",
      "Floor-repair documentation",
      "Water-damage investigation",
    ],
    commonFindings: [
      "Damaged walls cannot be cleaned",
      "Ceiling tiles are stained",
      "Flooring is torn or uneven",
      "Doors or frames are damaged",
      "Water-damaged materials remain in place",
      "Repairs are incomplete or poorly finished",
    ],
    keywords: [
      "interior finish maintenance",
      "wall repair",
      "ceiling tile",
      "floor repair",
      "damaged surface",
      "cleanable finish",
      "door frame damage",
      "hospital finishes",
    ],
    aiGuidance:
      "Map inspections, photographs, work orders, water-damage investigations, repair records, and closure evidence. Cosmetic findings should be elevated when they affect cleanability, fire resistance, stability, or walking safety.",
    evidenceFrequency:
      "Continuously maintained and inspected during routine rounds",
    evidenceRetention:
      "Retained with facilities maintenance and environment of care records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Physical inspection, work-order review, and corrective-action verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Interior Finish Maintenance Framework",
      },
      {
        authority: "CDC",
        title: "Environmental Infection Control Guidance",
      },
      {
        authority: "NFPA",
        title: "Life Safety Code",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Interior Finishes",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-PLUMB-001",
    slug: "hhs-plumbing-fixture-and-drainage-maintenance",
    title: "Plumbing Fixture and Drainage Maintenance",
    intent:
      "Plumbing fixtures, drains, traps, piping connections, and sanitary systems remain functional, sanitary, leak-free, and appropriate for healthcare operations.",
    description:
      "Maintenance includes sinks, toilets, showers, eyewashes, drains, traps, faucets, valves, seals, sewer connections, backflow devices, and visible piping conditions.",
    requirement:
      "Inspect, maintain, and promptly repair plumbing fixtures and drainage components, control leaks and sewer conditions, and verify that repairs restore sanitary and functional operation.",
    surveyorLooksFor: [
      "Functional plumbing fixtures",
      "No active leaks or standing water",
      "Clear and properly functioning drains",
      "Intact seals and connections",
      "Prompt response to sewer odors or backups",
      "Documented repair and verification",
    ],
    evidenceExamples: [
      "Plumbing inspection",
      "Leak-response work order",
      "Drain-maintenance record",
      "Fixture repair record",
      "Sewer-backup incident report",
      "Backflow test record",
    ],
    commonFindings: [
      "Leaks remain unrepaired",
      "Drains are slow or obstructed",
      "Sewer odors are not investigated",
      "Fixtures are loose or damaged",
      "Standing water is present",
      "Repairs do not address the root cause",
    ],
    keywords: [
      "plumbing maintenance",
      "facility drain",
      "sink repair",
      "toilet repair",
      "sewer backup",
      "water leak",
      "drainage maintenance",
      "plumbing fixture",
    ],
    aiGuidance:
      "Map plumbing inspections, leak reports, drain records, repair work orders, incident reports, backflow tests, and closure evidence. Recurring leaks, standing water, or sewer conditions should increase risk.",
    evidenceFrequency:
      "Continuously maintained and inspected during routine maintenance and rounds",
    evidenceRetention:
      "Retained with facilities maintenance, water-management, and incident records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Physical inspection, work-order review, test-record review, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Plumbing Fixture and Drainage Framework",
      },
      {
        authority: "IPC",
        title: "International Plumbing Code",
      },
      {
        authority: "ASSE",
        title: "Applicable Plumbing Safety Standards",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Plumbing",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-EXT-001",
    slug: "hhs-exterior-grounds-and-site-maintenance",
    title: "Exterior Grounds and Site Maintenance",
    intent:
      "Exterior grounds, sidewalks, roads, parking areas, ramps, drainage features, landscaping, and site structures are maintained in a safe and functional condition.",
    description:
      "Site maintenance includes pavement, curbs, sidewalks, stairs, ramps, retaining walls, drainage, lighting interfaces, vegetation, snow and ice, loading areas, fencing, and exterior hazards.",
    requirement:
      "Inspect and maintain exterior grounds and site components, promptly correct hazards, and implement seasonal and weather-related controls necessary to preserve safe access.",
    surveyorLooksFor: [
      "Safe sidewalks and walking surfaces",
      "Functional drainage",
      "Stable stairs, ramps, and handrails",
      "Controlled snow and ice hazards",
      "Safe parking and loading areas",
      "Prompt correction of exterior deficiencies",
    ],
    evidenceExamples: [
      "Grounds inspection",
      "Parking-lot inspection",
      "Snow-and-ice log",
      "Drainage inspection",
      "Exterior repair work order",
      "Pavement-condition report",
    ],
    commonFindings: [
      "Sidewalks are cracked or uneven",
      "Potholes create hazards",
      "Snow or ice is not promptly treated",
      "Drainage causes standing water",
      "Exterior stairs or rails are damaged",
      "Vegetation obstructs access or visibility",
    ],
    keywords: [
      "grounds maintenance",
      "parking lot maintenance",
      "sidewalk inspection",
      "snow and ice",
      "site drainage",
      "exterior maintenance",
      "pavement repair",
      "facility grounds",
    ],
    aiGuidance:
      "Map grounds inspections, weather-response logs, repair work orders, drainage reports, incident records, photographs, and closure documentation. Repeated slip-and-fall events or delayed exterior repairs should increase risk.",
    evidenceFrequency:
      "At intervals established by risk and season and after significant weather events",
    evidenceRetention:
      "Retained with facilities, safety, weather-response, and corrective-action records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Site inspection, record review, work-order verification, and incident-data review",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Exterior Site Maintenance Framework",
      },
      {
        authority: "OSHA",
        title: "Walking-Working Surfaces",
        citation: "29 CFR 1910 Subpart D",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Grounds and Site",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-ACCESS-001",
    slug: "hhs-accessibility-feature-maintenance",
    title: "Accessibility Feature Maintenance",
    intent:
      "Accessibility features remain available, functional, unobstructed, and maintained for patients, visitors, and staff with disabilities.",
    description:
      "Accessibility maintenance may include ramps, curb cuts, handrails, automatic doors, accessible entrances, parking spaces, signage, elevators, lifts, restroom fixtures, and clear routes.",
    requirement:
      "Inspect and maintain accessibility features, promptly correct conditions that obstruct or impair access, and provide temporary accommodations when permanent features are unavailable.",
    surveyorLooksFor: [
      "Clear and unobstructed accessible routes",
      "Functional automatic doors and lifts",
      "Stable ramps and handrails",
      "Available accessible parking",
      "Proper accessibility signage",
      "Temporary accommodations during outages",
    ],
    evidenceExamples: [
      "Accessibility inspection",
      "Automatic-door service record",
      "Lift inspection",
      "Accessible-route assessment",
      "Corrective work order",
      "Temporary-access plan",
    ],
    commonFindings: [
      "Accessible routes are obstructed",
      "Automatic doors do not function",
      "Accessible parking is unavailable",
      "Ramps or handrails are damaged",
      "Signage is missing",
      "No temporary accommodation is provided during repairs",
    ],
    keywords: [
      "accessibility maintenance",
      "accessible route",
      "ADA access",
      "automatic door",
      "wheelchair ramp",
      "accessible parking",
      "facility accessibility",
      "mobility access",
    ],
    aiGuidance:
      "Map accessibility inspections, automatic-door records, lift inspections, route assessments, work orders, outage plans, and closure documentation. Physical verification should determine whether access remains practical and unobstructed.",
    evidenceFrequency:
      "Continuously maintained and inspected during routine rounds and after reported failures",
    evidenceRetention:
      "Retained with facilities maintenance and accessibility records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Physical inspection, service-record review, and temporary-accommodation verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Accessibility Maintenance Framework",
      },
      {
        authority: "DOJ",
        title: "ADA Standards for Accessible Design",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Accessibility",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-MOIST-001",
    slug: "hhs-water-intrusion-and-moisture-response",
    title: "Water Intrusion and Moisture Response",
    intent:
      "Water intrusion, leaks, condensation, and moisture-damaged materials are promptly identified, contained, remediated, documented, and prevented from recurring.",
    description:
      "The response process includes source control, affected-area assessment, patient-care protection, drying, material removal, infection-prevention coordination, environmental evaluation, restoration, and recurrence prevention.",
    requirement:
      "Maintain and implement a documented water-intrusion response process that promptly controls the source, evaluates affected materials and areas, coordinates risk controls, completes remediation, and verifies safe restoration.",
    surveyorLooksFor: [
      "Prompt reporting and source control",
      "Assessment of affected areas and materials",
      "Coordination with infection prevention when indicated",
      "Removal or remediation of damaged porous materials",
      "Documented drying and restoration",
      "Root-cause correction and recurrence prevention",
    ],
    evidenceExamples: [
      "Water-intrusion report",
      "Leak-response work order",
      "Moisture assessment",
      "Remediation record",
      "Infection-prevention risk assessment",
      "Restoration clearance",
    ],
    commonFindings: [
      "Water staining is not investigated",
      "Wet porous materials remain in place",
      "Drying activities are not documented",
      "Infection prevention is not involved",
      "The source of leakage is not corrected",
      "Recurring moisture is not trended",
    ],
    keywords: [
      "water intrusion",
      "moisture damage",
      "facility leak",
      "wet ceiling tile",
      "water remediation",
      "mold prevention",
      "drying record",
      "leak investigation",
    ],
    aiGuidance:
      "Map incident reports, work orders, moisture readings, remediation records, infection-prevention assessments, photographs, restoration clearances, and recurrence reviews. Water staining without documented source investigation should receive reduced confidence.",
    evidenceFrequency:
      "Each time water intrusion, leakage, condensation, or moisture damage is identified",
    evidenceRetention:
      "Retained with facilities, infection prevention, environmental, and incident records",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "Incident review, site inspection, moisture-record review, and restoration verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Water Intrusion and Moisture Response Framework",
      },
      {
        authority: "CDC",
        title: "Environmental Infection Control Guidance",
      },
      {
        authority: "EPA",
        title: "Moisture and Mold Remediation Guidance",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Water Intrusion",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-WO-001",
    slug: "hhs-work-order-management",
    title: "Facilities Work-Order Management",
    intent:
      "Maintenance requests and identified deficiencies are documented, prioritized, assigned, completed, verified, and trended through a controlled work-order process.",
    description:
      "Work-order management includes request intake, risk priority, assignment, status, labor, materials, repair details, downtime, temporary controls, completion, verification, and overdue escalation.",
    requirement:
      "Maintain and implement a work-order management process that captures maintenance needs, assigns risk-based priority, tracks progress, documents completed work, escalates overdue high-risk items, and verifies closure.",
    surveyorLooksFor: [
      "Accessible maintenance-request process",
      "Defined work-order priority levels",
      "Timely assignment and response",
      "Complete repair documentation",
      "Monitoring of overdue work",
      "Closure verification for high-risk deficiencies",
    ],
    evidenceExamples: [
      "CMMS work-order report",
      "Open work-order list",
      "Priority matrix",
      "Overdue work-order report",
      "Completed work order",
      "Closure audit",
    ],
    commonFindings: [
      "Work-order priorities are inconsistent",
      "High-risk work is overdue",
      "Completed work lacks details",
      "Temporary controls are not documented",
      "Closed work is not verified",
      "Repeat requests are not analyzed",
    ],
    keywords: [
      "work order management",
      "CMMS work orders",
      "maintenance request",
      "overdue work order",
      "facility repair request",
      "work-order priority",
      "maintenance backlog",
      "corrective maintenance tracking",
    ],
    aiGuidance:
      "Map open and closed work-order reports, priority definitions, overdue lists, completed records, temporary controls, closure audits, and repeat-request trends. High-risk overdue work should significantly increase survey risk.",
    evidenceFrequency:
      "Continuously maintained and reviewed at intervals established by risk and management oversight",
    evidenceRetention:
      "Retained according to facilities maintenance and organizational record requirements",
    responsibleRole: "Facilities Manager",
    validationMethod:
      "CMMS analysis, record sampling, physical verification, and management interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Facilities Work-Order Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Work-Order Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-DEF-001",
    slug: "hhs-deferred-maintenance-management",
    title: "Deferred Maintenance Management",
    intent:
      "Deferred maintenance is identified, risk assessed, prioritized, controlled, funded, monitored, and resolved before it creates unacceptable safety or operational risk.",
    description:
      "Deferred maintenance management includes condition assessment, risk scoring, temporary controls, cost estimates, capital planning, leadership approval, monitoring, escalation, and closure.",
    requirement:
      "Maintain a current deferred-maintenance inventory that identifies affected assets and locations, risk priority, interim controls, estimated cost, responsible owner, target resolution, and leadership oversight.",
    surveyorLooksFor: [
      "A documented deferred-maintenance list",
      "Risk-based prioritization",
      "Temporary controls for high-risk items",
      "Leadership awareness and approval",
      "Funding or capital planning",
      "Routine status review and escalation",
    ],
    evidenceExamples: [
      "Deferred-maintenance list",
      "Facility condition assessment",
      "Risk-ranking matrix",
      "Capital plan",
      "Leadership report",
      "Interim-control record",
    ],
    commonFindings: [
      "Deferred work is not formally tracked",
      "Safety risks are mixed with cosmetic items",
      "Temporary controls are absent",
      "Target dates are undefined",
      "Leadership is unaware of critical backlog",
      "Items remain open without escalation",
    ],
    keywords: [
      "deferred maintenance",
      "facility backlog",
      "capital maintenance",
      "facility condition assessment",
      "maintenance risk ranking",
      "building renewal",
      "capital repair",
      "maintenance deficiency list",
    ],
    aiGuidance:
      "Map deferred-maintenance inventories, condition assessments, risk scores, temporary controls, capital plans, leadership reports, funding decisions, and closure records. Critical items without mitigation or funded resolution should be treated as high risk.",
    evidenceFrequency:
      "Reviewed at least periodically and whenever significant deficiencies or capital decisions occur",
    evidenceRetention:
      "Retained with capital planning, facilities management, and leadership records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, physical sampling, risk review, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Deferred Maintenance Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Deferred Maintenance",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-CONTRACT-001",
    slug: "hhs-building-maintenance-contractor-oversight",
    title: "Building Maintenance Contractor Oversight",
    intent:
      "External contractors performing building inspection, repair, maintenance, or remediation work are qualified, controlled, monitored, and held accountable.",
    description:
      "Contractor oversight includes qualification, insurance, scope, safety requirements, infection controls, permits, access, documentation, workmanship, testing, deficiencies, and final acceptance.",
    requirement:
      "Establish and document contractor qualification and oversight processes for building maintenance work, including defined scope, safety expectations, required records, inspection, deficiency correction, and final acceptance.",
    surveyorLooksFor: [
      "Verification of contractor qualifications",
      "Defined scope and safety requirements",
      "Required permits and infection controls",
      "Complete service and repair documentation",
      "Inspection of contractor work",
      "Correction of deficiencies before acceptance",
    ],
    evidenceExamples: [
      "Contractor qualification file",
      "Certificate of insurance",
      "Service agreement",
      "Permit record",
      "Contractor work report",
      "Final inspection",
      "Punch-list closure",
    ],
    commonFindings: [
      "Contractor qualifications are not verified",
      "Scope is unclear",
      "Required permits are missing",
      "Work reports lack detail",
      "Deficiencies are accepted without correction",
      "Final inspection is not documented",
    ],
    keywords: [
      "contractor oversight",
      "facility contractor",
      "maintenance vendor",
      "contractor qualification",
      "vendor service report",
      "contractor safety",
      "facility repair contractor",
      "contractor inspection",
    ],
    aiGuidance:
      "Map contractor files, insurance, scopes, permits, safety documents, service reports, inspections, punch lists, and acceptance records. An invoice alone should not be treated as proof that work was safely and correctly completed.",
    evidenceFrequency:
      "Before contractor engagement and throughout each applicable maintenance project or service",
    evidenceRetention:
      "Retained with vendor, contract, facilities, safety, and project records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, contractor-file review, physical inspection, and final-acceptance verification",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Building Maintenance Contractor Oversight Framework",
      },
      {
        authority: "OSHA",
        title: "Multi-Employer Workplace Safety Requirements",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Contractor Oversight",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-INSPECT-001",
    slug: "hhs-building-condition-assessment",
    title: "Building Condition Assessment",
    intent:
      "The organization periodically evaluates the overall physical condition, remaining service life, risk, and capital needs of the building.",
    description:
      "Condition assessment includes structural and architectural components, envelope, roofing, interiors, site features, age, condition, deficiency severity, replacement timing, and estimated cost.",
    requirement:
      "Complete and periodically update a documented building condition assessment that identifies deficiencies, assigns risk and condition ratings, estimates remaining life and cost, and informs maintenance and capital planning.",
    surveyorLooksFor: [
      "A documented facility condition assessment",
      "Coverage of major building components",
      "Defined condition and risk ratings",
      "Identification of remaining service life",
      "Estimated repair or replacement costs",
      "Linkage to capital and maintenance plans",
    ],
    evidenceExamples: [
      "Facility condition assessment",
      "Building condition report",
      "Capital renewal plan",
      "Asset-condition rating",
      "Replacement forecast",
      "Deficiency-cost estimate",
    ],
    commonFindings: [
      "No formal condition assessment exists",
      "Major components are omitted",
      "Condition ratings are unsupported",
      "Replacement needs are not prioritized",
      "Cost estimates are outdated",
      "Assessment findings are not used in planning",
    ],
    keywords: [
      "facility condition assessment",
      "building condition report",
      "capital renewal",
      "remaining service life",
      "asset condition",
      "building assessment",
      "capital forecast",
      "facility deficiency assessment",
    ],
    aiGuidance:
      "Map condition assessments, asset ratings, photographs, replacement forecasts, cost estimates, capital plans, and leadership reports. Assessments should be facility specific and linked to actual maintenance and funding decisions.",
    evidenceFrequency:
      "At intervals established by organizational planning needs and after major building changes or significant deterioration",
    evidenceRetention:
      "Retained with capital planning, asset management, and facilities records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, physical sampling, capital-plan comparison, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Building Condition Assessment Framework",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Condition Assessment",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-TRAIN-001",
    slug: "hhs-building-maintenance-staff-training",
    title: "Building Maintenance Staff Training",
    intent:
      "Facilities personnel understand building systems, maintenance procedures, safety requirements, documentation expectations, and escalation responsibilities appropriate to their role.",
    description:
      "Training may include CMMS use, building inspections, lockout and tagout, ladder safety, fall protection, hazardous materials, infection controls, roofing access, confined spaces, work permits, and emergency response.",
    requirement:
      "Provide and document orientation, role-specific training, safety education, and competency validation for personnel performing building maintenance activities.",
    surveyorLooksFor: [
      "Training before independent maintenance work",
      "Role-specific technical education",
      "Required safety training",
      "Competency validation for high-risk activities",
      "Training following procedure or equipment changes",
      "Remediation when competency is not demonstrated",
    ],
    evidenceExamples: [
      "Facilities orientation",
      "Maintenance competency checklist",
      "Safety-training record",
      "CMMS training",
      "Manufacturer training",
      "License or certification record",
      "Remediation documentation",
    ],
    commonFindings: [
      "Staff perform work without documented training",
      "Required safety training is incomplete",
      "Competency is not validated",
      "Contract personnel are omitted",
      "Training records do not identify content",
      "Education is not updated after changes",
    ],
    keywords: [
      "facilities training",
      "building maintenance training",
      "maintenance competency",
      "facility technician education",
      "CMMS training",
      "maintenance safety training",
      "facilities orientation",
      "technical competency",
    ],
    aiGuidance:
      "Map curricula, assignments, rosters, competencies, licenses, certifications, manufacturer education, remediation, and role assignments. A sign-in sheet without identifiable content or participant linkage should receive reduced confidence.",
    evidenceFrequency:
      "At orientation, before independent work, periodically thereafter, and whenever responsibilities, systems, procedures, or hazards materially change",
    evidenceRetention:
      "Retained according to human resources, safety, facilities, and organizational requirements",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Training-record review, competency verification, observation, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Healthcare Building Maintenance Training Framework",
      },
      {
        authority: "OSHA",
        title: "Applicable Employee Safety Training Requirements",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Education and Training",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Building Maintenance",
    code: "HHS-BM-EVAL-001",
    slug: "hhs-building-maintenance-program-evaluation",
    title: "Building Maintenance Program Evaluation",
    intent:
      "The organization periodically evaluates whether the building maintenance program is implemented as designed and effectively preserves safe facility conditions.",
    description:
      "Program evaluation reviews preventive-maintenance completion, corrective work, overdue deficiencies, work-order backlog, repeated failures, deferred maintenance, condition assessments, contractor performance, incidents, and corrective actions.",
    requirement:
      "Complete and document a periodic evaluation of the building maintenance program, including performance trends, compliance rates, unresolved risks, deferred needs, corrective-action completion, and required program revisions.",
    surveyorLooksFor: [
      "A documented periodic program evaluation",
      "Review of preventive-maintenance completion",
      "Analysis of corrective and overdue work",
      "Evaluation of deferred maintenance",
      "Review of recurring building deficiencies",
      "Documented revisions and leadership review",
    ],
    evidenceExamples: [
      "Annual building maintenance evaluation",
      "PM completion report",
      "Overdue work-order report",
      "Maintenance backlog analysis",
      "Deferred-maintenance summary",
      "Condition-assessment update",
      "Program revision log",
    ],
    commonFindings: [
      "No formal evaluation exists",
      "The evaluation only reports completed work orders",
      "Recurring failures are not analyzed",
      "Deferred maintenance is omitted",
      "Overdue high-risk deficiencies are not addressed",
      "Program changes are not documented",
    ],
    keywords: [
      "building maintenance evaluation",
      "facilities annual review",
      "maintenance performance",
      "work-order dashboard",
      "PM compliance report",
      "maintenance backlog analysis",
      "facility program evaluation",
      "building maintenance annual report",
    ],
    aiGuidance:
      "Map annual evaluations, PM reports, overdue trends, backlog analyses, repeated-failure reviews, deferred-maintenance summaries, condition assessments, corrective actions, and leadership approvals. The evidence should evaluate both implementation and effectiveness.",
    evidenceFrequency:
      "At least annually and after significant building failures, incidents, or material program changes",
    evidenceRetention:
      "Retained with facilities governance and performance-improvement records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, data analysis, physical sampling, and leadership interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Building Maintenance Program Evaluation Framework",
      },
    ],
    department: "Facilities",
    domain: "Building Maintenance",
    category: "Program Evaluation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];