import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed hazardous-materials survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to recognize hazardous-material documentation,
 * evaluate evidence strength, identify missing controls, and support
 * mapping to applicable regulatory and accreditation requirements.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsHazardousMaterialsStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Hazardous Materials and Waste",
    code: "HHS-HAZ-PLAN-001",
    slug: "hhs-hazardous-materials-management-program",
    title: "Hazardous Materials Management Program",
    intent:
      "The organization maintains a coordinated program for identifying, controlling, storing, using, transporting, and disposing of hazardous materials and waste.",
    description:
      "The hazardous-materials program establishes responsibilities, inventories regulated materials, defines safe work practices, addresses emergency response, and monitors compliance across applicable departments.",
    requirement:
      "Maintain a documented hazardous-materials and waste management program that identifies regulated materials, assigns oversight responsibilities, establishes safe handling and disposal procedures, and evaluates program effectiveness.",
    surveyorLooksFor: [
      "A current hazardous-materials management plan",
      "Clearly assigned program responsibility",
      "Identification of hazardous materials and waste streams",
      "Department-specific handling and storage procedures",
      "Defined emergency and spill-response processes",
      "Routine monitoring and program evaluation",
    ],
    evidenceExamples: [
      "Hazardous materials management plan",
      "Hazardous materials inventory",
      "Safety committee minutes",
      "Department inspection records",
      "Hazardous-material risk assessment",
      "Annual program evaluation",
    ],
    commonFindings: [
      "The management plan does not reflect current operations",
      "Responsibilities are not clearly assigned",
      "Hazardous waste streams are omitted",
      "Department practices conflict with organizational policy",
      "Program performance is not evaluated",
      "Corrective actions are not tracked to completion",
    ],
    keywords: [
      "hazardous materials management plan",
      "hazardous waste plan",
      "chemical safety",
      "regulated waste",
      "environmental safety",
      "hazardous materials program",
      "hazmat plan",
      "hazardous materials inventory",
    ],
    aiGuidance:
      "Map comprehensive plans, risk assessments, committee records, and evaluations that demonstrate organization-wide hazardous-material oversight. Do not treat a single safety data sheet or isolated disposal receipt as evidence of the complete management program.",
    evidenceFrequency:
      "Reviewed at least annually and after significant changes",
    evidenceRetention:
      "Current program documents and records from the prior survey cycle",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review, physical inspection, and staff interview",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Hazardous Materials Management Framework",
        notes:
          "Original HHS operational control intended for cross-accreditor survey readiness.",
      },
      {
        authority: "OSHA",
        title: "Hazard Communication",
        citation: "29 CFR 1910.1200",
      },
      {
        authority: "EPA",
        title: "Hazardous Waste Management",
        notes:
          "Apply federal, state, and local requirements based on generator status and waste streams.",
      },
    ],
    department: "Facilities",
    domain: "Hazardous Materials and Waste",
    category: "Program Management",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Hazardous Materials and Waste",
    code: "HHS-HAZ-INV-001",
    slug: "hhs-hazardous-materials-inventory",
    title: "Hazardous Materials Inventory",
    intent:
      "The organization knows which hazardous materials are present, where they are located, and which risks they present.",
    description:
      "A current inventory supports hazard communication, emergency response, regulatory reporting, exposure prevention, storage controls, and chemical-management decisions.",
    requirement:
      "Maintain a current inventory of hazardous chemicals and regulated materials that identifies the product, manufacturer, location, approximate quantity, primary hazard, and responsible department.",
    surveyorLooksFor: [
      "An inventory that reflects materials currently present",
      "Identification of storage and use locations",
      "Alignment between the inventory and safety data sheets",
      "Processes for adding and removing products",
      "Review of high-risk or highly hazardous materials",
      "Availability of information during an emergency",
    ],
    evidenceExamples: [
      "Hazardous chemical inventory",
      "Department chemical lists",
      "Pharmacy hazardous-drug inventory",
      "Laboratory chemical inventory",
      "Chemical approval records",
      "Annual inventory verification",
    ],
    commonFindings: [
      "Products are present but missing from the inventory",
      "Discontinued materials remain listed",
      "Locations are inaccurate",
      "Inventory and safety data sheet records do not match",
      "Departments maintain conflicting inventories",
      "No review occurs when new chemicals are introduced",
    ],
    keywords: [
      "chemical inventory",
      "hazardous materials inventory",
      "hazardous chemical list",
      "chemical list",
      "product inventory",
      "hazard inventory",
      "chemical approval",
    ],
    aiGuidance:
      "Map documents containing identifiable chemical or material names, locations, departments, and inventory status. A purchasing list may support the inventory but should receive lower confidence unless it demonstrates current onsite materials.",
    evidenceFrequency:
      "Maintained continuously and formally verified at least annually",
    evidenceRetention:
      "Current inventory and prior annual verification records",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document comparison, departmental inspection, and staff interview",
    referencedAuthorities: [
      {
        authority: "OSHA",
        title: "Hazard Communication",
        citation: "29 CFR 1910.1200",
      },
      {
        authority: "HHS",
        title: "Hazardous Materials Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Hazardous Materials and Waste",
    category: "Chemical Inventory",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Hazardous Materials and Waste",
    code: "HHS-HAZ-SDS-001",
    slug: "hhs-safety-data-sheet-management",
    title: "Safety Data Sheet Management",
    intent:
      "Staff can rapidly obtain current hazard, handling, first-aid, exposure-control, and emergency-response information for hazardous chemicals.",
    description:
      "Safety data sheets are maintained for applicable hazardous chemicals and remain readily accessible to staff during all operating conditions.",
    requirement:
      "Maintain current safety data sheets for applicable hazardous chemicals and provide staff with immediate access to the information during routine operations and emergencies.",
    surveyorLooksFor: [
      "Safety data sheets for chemicals currently in use",
      "Accessibility during every shift",
      "A functional electronic-access backup process",
      "Alignment with the hazardous-material inventory",
      "A process for obtaining missing or updated sheets",
      "Staff knowledge of how to locate safety data sheets",
    ],
    evidenceExamples: [
      "Electronic safety data sheet library",
      "Safety data sheet binder",
      "SDS access instructions",
      "Inventory-to-SDS comparison",
      "Downtime access procedure",
      "Department inspection checklist",
    ],
    commonFindings: [
      "Safety data sheets are missing",
      "Records exist for products no longer used",
      "Electronic access is unavailable during downtime",
      "Staff cannot locate safety data sheets",
      "The inventory and SDS library do not align",
      "Manufacturer updates are not incorporated",
    ],
    keywords: [
      "safety data sheet",
      "SDS",
      "material safety data sheet",
      "MSDS",
      "chemical hazard information",
      "SDS binder",
      "electronic SDS",
    ],
    aiGuidance:
      "Map SDS libraries, access procedures, audit reports, and inventory comparison records. An individual safety data sheet should map as product-level evidence but should not alone prove that the complete SDS management process is effective.",
    evidenceFrequency:
      "Maintained continuously and audited periodically",
    evidenceRetention:
      "Current safety data sheets and exposure-related records according to applicable retention requirements",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review, access demonstration, and staff interview",
    referencedAuthorities: [
      {
        authority: "OSHA",
        title: "Hazard Communication",
        citation: "29 CFR 1910.1200",
      },
      {
        authority: "HHS",
        title: "Hazardous Materials Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Hazardous Materials and Waste",
    category: "Safety Data Sheets",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Hazardous Materials and Waste",
    code: "HHS-HAZ-LABEL-001",
    slug: "hhs-hazardous-chemical-labeling",
    title: "Hazardous Chemical Labeling",
    intent:
      "Hazardous chemicals remain identifiable throughout receipt, storage, transfer, and use.",
    description:
      "Original and secondary containers are labeled so staff can recognize the contents, hazards, and applicable precautions before handling the material.",
    requirement:
      "Ensure hazardous-chemical containers are labeled with the product identity and appropriate hazard information, including secondary containers unless an applicable immediate-use exception applies.",
    surveyorLooksFor: [
      "Legible manufacturer labels on original containers",
      "Appropriate labels on secondary containers",
      "Consistency with hazard-communication procedures",
      "Identification of diluted or transferred chemicals",
      "Removal of damaged or illegible containers",
      "Staff understanding of container-label requirements",
    ],
    evidenceExamples: [
      "Hazard communication policy",
      "Secondary-container labels",
      "Chemical-storage inspection",
      "Environmental rounds",
      "Corrective-action records",
      "Staff education records",
    ],
    commonFindings: [
      "Unlabeled spray bottles",
      "Handwritten labels omit hazard information",
      "Illegible manufacturer labels",
      "Chemicals are stored in food or beverage containers",
      "Temporary containers remain in use beyond immediate use",
      "Staff cannot explain labeling expectations",
    ],
    keywords: [
      "chemical label",
      "secondary container",
      "GHS label",
      "hazard label",
      "unlabeled bottle",
      "chemical identification",
      "workplace label",
    ],
    aiGuidance:
      "Map policies, completed inspection records, photographs, deficiency reports, and training documentation involving chemical-container identification. Blank label templates are supporting resources rather than proof of implementation.",
    evidenceFrequency:
      "Ongoing with routine environmental inspection",
    evidenceRetention:
      "Inspection and corrective-action records for the current survey cycle",
    responsibleRole: "Department Manager",
    validationMethod:
      "Physical inspection, document review, and staff interview",
    referencedAuthorities: [
      {
        authority: "OSHA",
        title: "Hazard Communication",
        citation: "29 CFR 1910.1200",
      },
      {
        authority: "HHS",
        title: "Hazardous Materials Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Hazardous Materials and Waste",
    category: "Chemical Labeling",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Hazardous Materials and Waste",
    code: "HHS-HAZ-STOR-001",
    slug: "hhs-hazardous-material-storage",
    title: "Hazardous Material Storage",
    intent:
      "Hazardous materials are stored in a manner that prevents incompatible reactions, unauthorized access, spills, exposures, fire, and environmental release.",
    description:
      "Storage controls address segregation, security, ventilation, container condition, shelving, secondary containment, ignition sources, quantity limitations, and manufacturer requirements.",
    requirement:
      "Store hazardous materials according to their hazards, compatibility, manufacturer instructions, and applicable safety requirements, with appropriate security, containment, ventilation, and inspection.",
    surveyorLooksFor: [
      "Separation of incompatible chemicals",
      "Secure storage where required",
      "Containers maintained in good condition",
      "Appropriate secondary containment",
      "No storage directly on the floor where prohibited by policy",
      "Control of ignition, heat, and environmental exposure",
    ],
    evidenceExamples: [
      "Hazardous-material storage inspection",
      "Chemical compatibility chart",
      "Environmental rounds",
      "Storage-room photographs",
      "Corrective-action records",
      "Department chemical-storage procedure",
    ],
    commonFindings: [
      "Incompatible chemicals stored together",
      "Containers are leaking, corroded, or damaged",
      "Hazardous materials are unsecured",
      "Improper storage beneath sinks",
      "Secondary containment is absent or inadequate",
      "Excessive quantities are stored in patient-care areas",
    ],
    keywords: [
      "chemical storage",
      "hazardous material storage",
      "chemical compatibility",
      "secondary containment",
      "flammable storage",
      "corrosive storage",
      "chemical cabinet",
      "incompatible chemicals",
    ],
    aiGuidance:
      "Map completed inspections, storage procedures, photographs, and corrective-action records that demonstrate control of chemical compatibility and containment. Purchasing or inventory records alone do not prove safe storage.",
    evidenceFrequency:
      "Ongoing with documented periodic inspection",
    evidenceRetention:
      "Current inspection records and prior survey-cycle corrective actions",
    responsibleRole: "Department Manager",
    validationMethod: "Physical inspection and document review",
    referencedAuthorities: [
      {
        authority: "OSHA",
        title: "Hazard Communication",
        citation: "29 CFR 1910.1200",
      },
      {
        authority: "NFPA",
        title:
          "Applicable flammable and combustible material requirements",
      },
      {
        authority: "HHS",
        title: "Hazardous Materials Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Hazardous Materials and Waste",
    category: "Material Storage",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Hazardous Materials and Waste",
    code: "HHS-HAZ-SPILL-001",
    slug: "hhs-hazardous-material-spill-response",
    title: "Hazardous Material Spill Response",
    intent:
      "The organization can rapidly assess and safely control hazardous-material spills while protecting patients, staff, visitors, and the environment.",
    description:
      "Spill-response procedures define notification, isolation, protective equipment, cleanup authority, evacuation criteria, exposure response, disposal, reporting, and post-event review.",
    requirement:
      "Maintain and implement hazardous-material spill-response procedures appropriate to the materials present, staff capabilities, available equipment, and potential clinical impact.",
    surveyorLooksFor: [
      "Material-specific or risk-based response procedures",
      "Clearly defined notification pathways",
      "Accessible spill-response equipment",
      "Criteria for staff response versus external response",
      "Exposure and medical-evaluation procedures",
      "Event documentation and corrective-action review",
    ],
    evidenceExamples: [
      "Hazardous-material spill procedure",
      "Spill-response quick-reference guide",
      "Spill-kit inspection",
      "Hazardous-material incident report",
      "Exposure evaluation record",
      "Post-event corrective-action plan",
    ],
    commonFindings: [
      "Staff do not know whom to notify",
      "Spill kits are incomplete or inaccessible",
      "Procedures do not match chemicals onsite",
      "Employees are expected to clean spills beyond their training",
      "Exposure follow-up is not documented",
      "Events are not reviewed for improvement",
    ],
    keywords: [
      "chemical spill",
      "hazardous material spill",
      "spill response",
      "spill kit",
      "chemical exposure",
      "hazmat incident",
      "chemical cleanup",
      "emergency response",
    ],
    aiGuidance:
      "Map spill procedures, kit inspections, incident reports, exposure documentation, and after-action records. A generic emergency plan should receive lower confidence unless hazardous-material response responsibilities are clearly addressed.",
    evidenceFrequency:
      "Procedures reviewed annually; equipment inspected according to policy; events documented when they occur",
    evidenceRetention:
      "Current procedures and incident records according to organizational and regulatory requirements",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review, equipment inspection, drill evaluation, and staff interview",
    referencedAuthorities: [
      {
        authority: "OSHA",
        title: "Hazard Communication",
        citation: "29 CFR 1910.1200",
      },
      {
        authority: "OSHA",
        title: "Emergency Action Plans",
        citation: "29 CFR 1910.38",
      },
      {
        authority: "HHS",
        title: "Hazardous Materials Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Hazardous Materials and Waste",
    category: "Spill Response",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Hazardous Materials and Waste",
    code: "HHS-HAZ-WASTE-001",
    slug: "hhs-regulated-waste-management",
    title: "Regulated Waste Management",
    intent:
      "Regulated, hazardous, pharmaceutical, chemical, and medical wastes are accurately identified and safely managed from generation through final disposition.",
    description:
      "Waste-management processes address segregation, labeling, container selection, accumulation, storage, transport, vendor controls, manifests, and disposal documentation.",
    requirement:
      "Maintain procedures for identifying, segregating, labeling, storing, transporting, and disposing of regulated waste streams in accordance with applicable requirements.",
    surveyorLooksFor: [
      "Identification of all applicable waste streams",
      "Correct segregation at the point of generation",
      "Appropriate containers and labels",
      "Secure waste-storage areas",
      "Qualified disposal vendors",
      "Complete manifests, receipts, or destruction records",
    ],
    evidenceExamples: [
      "Regulated waste management policy",
      "Hazardous-waste manifests",
      "Medical-waste pickup records",
      "Pharmaceutical-waste documentation",
      "Vendor agreements",
      "Waste-area inspection records",
    ],
    commonFindings: [
      "Waste is placed in the wrong container",
      "Containers are open, overfilled, or unlabeled",
      "Waste-storage areas are unsecured",
      "Pharmaceutical waste is improperly discarded",
      "Manifests or pickup records are missing",
      "Staff cannot distinguish waste categories",
    ],
    keywords: [
      "regulated medical waste",
      "hazardous waste",
      "pharmaceutical waste",
      "biohazard waste",
      "waste manifest",
      "medical waste pickup",
      "waste segregation",
      "sharps disposal",
    ],
    aiGuidance:
      "Map waste policies, manifests, vendor records, completed inspections, pickup documentation, and training records. A vendor invoice alone provides limited evidence unless it identifies the waste stream, service date, and disposition.",
    evidenceFrequency:
      "Ongoing with each waste shipment documented",
    evidenceRetention:
      "According to the applicable waste category and federal, state, and local requirements",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Document review, waste-area inspection, and staff interview",
    referencedAuthorities: [
      {
        authority: "EPA",
        title: "Hazardous Waste Management",
      },
      {
        authority: "OSHA",
        title: "Bloodborne Pathogens",
        citation: "29 CFR 1910.1030",
      },
      {
        authority: "HHS",
        title: "Hazardous Materials Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Hazardous Materials and Waste",
    category: "Regulated Waste",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Hazardous Materials and Waste",
    code: "HHS-HAZ-EYEWASH-001",
    slug: "hhs-emergency-eyewash-and-shower",
    title: "Emergency Eyewash and Shower Readiness",
    intent:
      "Personnel exposed to corrosive or injurious materials can immediately access functional emergency flushing equipment.",
    description:
      "Emergency eyewash and shower equipment is selected, located, accessible, inspected, activated, maintained, and protected from conditions that could delay effective use.",
    requirement:
      "Provide and maintain emergency eyewash or shower equipment where exposure risk requires it, and document routine activation, inspection, maintenance, and corrective action.",
    surveyorLooksFor: [
      "A documented assessment of exposure risk",
      "Appropriate equipment for the identified hazard",
      "Unobstructed access",
      "Routine activation and inspection",
      "Acceptable water flow and condition",
      "Prompt correction of deficiencies",
    ],
    evidenceExamples: [
      "Eyewash risk assessment",
      "Weekly eyewash inspection log",
      "Emergency shower inspection record",
      "Preventive-maintenance record",
      "Corrective-action documentation",
      "Staff education record",
    ],
    commonFindings: [
      "Inspection logs contain gaps",
      "Eyewash access is obstructed",
      "Water is discolored or contains debris",
      "Protective caps are missing",
      "Equipment is not located near the exposure hazard",
      "Deficiencies are documented but not corrected",
    ],
    keywords: [
      "eyewash",
      "emergency eyewash",
      "emergency shower",
      "eyewash inspection",
      "eyewash log",
      "chemical exposure",
      "flushing equipment",
      "weekly eyewash test",
    ],
    aiGuidance:
      "Map risk assessments, completed eyewash logs, maintenance records, deficiency reports, and corrective actions. Blank inspection forms or equipment purchase records should not be considered evidence that routine readiness checks are occurring.",
    evidenceFrequency:
      "Activated and inspected at the interval established by applicable requirements and organizational policy",
    evidenceRetention:
      "Current inspection cycle and prior survey-cycle maintenance records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, physical inspection, activation observation, and staff interview",
    referencedAuthorities: [
      {
        authority: "OSHA",
        title: "Medical Services and First Aid",
        citation: "29 CFR 1910.151(c)",
      },
      {
        authority: "ANSI",
        title: "Emergency Eyewash and Shower Equipment",
        notes:
          "Apply the edition adopted by the organization or authority having jurisdiction.",
      },
      {
        authority: "HHS",
        title: "Hazardous Materials Management Framework",
      },
    ],
    department: "Facilities",
    domain: "Hazardous Materials and Waste",
    category: "Emergency Flushing Equipment",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Hazardous Materials and Waste",
    code: "HHS-HAZ-TRAIN-001",
    slug: "hhs-hazard-communication-training",
    title: "Hazard Communication Training",
    intent:
      "Personnel understand the chemical hazards relevant to their work and can safely locate information, use protective measures, and respond to exposure or spills.",
    description:
      "Hazard-communication education is provided before applicable exposure and when new hazards or significant procedural changes are introduced.",
    requirement:
      "Provide and document hazard-communication education appropriate to employee assignments, chemicals used, labeling systems, safety data sheet access, protective measures, and emergency procedures.",
    surveyorLooksFor: [
      "Training before employees begin applicable duties",
      "Education addressing workplace-specific hazards",
      "Instruction on labels and safety data sheets",
      "Training on protective equipment and safe handling",
      "Spill and exposure-response education",
      "Complete training and competency records",
    ],
    evidenceExamples: [
      "Hazard communication training module",
      "New employee orientation record",
      "Annual safety education",
      "Department-specific chemical training",
      "Training attendance roster",
      "Competency or post-test results",
    ],
    commonFindings: [
      "Training is generic and not workplace-specific",
      "Contract or temporary staff are omitted",
      "Employees cannot locate safety data sheets",
      "New chemicals are introduced without additional training",
      "Records do not identify training content",
      "Staff cannot describe spill or exposure procedures",
    ],
    keywords: [
      "hazard communication training",
      "HazCom training",
      "chemical safety training",
      "SDS training",
      "GHS training",
      "chemical exposure training",
      "employee chemical education",
    ],
    aiGuidance:
      "Map training content, completion records, competency documentation, and department-specific education. A roster without an identifiable course title or training content should receive reduced confidence.",
    evidenceFrequency:
      "At initial assignment and whenever new chemical hazards are introduced",
    evidenceRetention:
      "According to the organization's personnel and training-record retention policy",
    responsibleRole: "Safety Officer",
    validationMethod:
      "Training-record review and staff interview",
    referencedAuthorities: [
      {
        authority: "OSHA",
        title: "Hazard Communication",
        citation: "29 CFR 1910.1200",
      },
      {
        authority: "HHS",
        title: "Hazardous Materials Management Framework",
      },
    ],
    department: "Human Resources",
    domain: "Hazardous Materials and Waste",
    category: "Staff Education",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];