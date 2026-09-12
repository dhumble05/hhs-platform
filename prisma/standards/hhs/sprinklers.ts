import type { HhsCoreStandard } from "../types";

/**
 * HHS Automatic Sprinkler Systems Knowledge Pack
 *
 * These original HHS operational controls help the HHS Compliance
 * Knowledge Engine evaluate automatic sprinkler and water-based
 * fire-protection system evidence.
 *
 * These controls do not reproduce proprietary accreditation standards
 * or copyrighted NFPA language. Referenced authorities identify
 * regulatory and technical frameworks that may apply. Organizations
 * must confirm applicable editions, interpretations, occupancy
 * requirements, and local authority requirements.
 */
export const hhsSprinklerStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-001",
    slug: "sprinkler-system-inventory",
    title: "Automatic Sprinkler System Inventory",
    intent:
      "The organization maintains an accurate inventory of automatic sprinkler and related water-based fire-protection systems.",
    description:
      "A complete system inventory identifies each protected building and area, sprinkler riser, control valve, alarm device, fire department connection, water supply, and associated inspection and testing responsibility.",
    requirement:
      "Maintain a current inventory of automatic sprinkler and related water-based fire-protection systems and update it following construction, renovation, system modification, replacement, impairment, or change in facility ownership or responsibility.",
    surveyorLooksFor: [
      "Identification of each sprinkler-protected building",
      "Identification of each sprinkler riser",
      "Identification of system type",
      "Identification of major control valves",
      "Identification of waterflow alarm devices",
      "Identification of supervisory devices",
      "Identification of fire department connections",
      "Identification of water-supply components",
      "Reconciliation between the inventory and inspection records",
      "Updates following construction or system modification",
    ],
    evidenceExamples: [
      "Sprinkler system inventory",
      "Riser diagram",
      "Fire-protection system drawing",
      "Valve inventory",
      "Fire department connection inventory",
      "Waterflow-device inventory",
      "As-built construction drawings",
      "System acceptance documentation",
    ],
    commonFindings: [
      "Risers are missing from the inventory",
      "System locations are unclear",
      "Valve identifiers differ between records",
      "New systems are not added after construction",
      "Removed systems remain active in the inventory",
      "Fire department connections are not documented",
      "Inspection reports cannot be reconciled to the inventory",
      "Responsibility for shared systems is unclear",
    ],
    keywords: [
      "sprinkler inventory",
      "sprinkler riser",
      "water-based fire protection",
      "sprinkler system",
      "wet pipe system",
      "dry pipe system",
      "preaction system",
      "fire department connection",
      "sprinkler valve",
      "riser diagram",
    ],
    aiGuidance:
      "Map records that identify facility-specific sprinkler systems, risers, valves, waterflow devices, supervisory devices, and fire department connections. Generic policies or vendor brochures do not satisfy this control.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K351",
        title: "Sprinkler System — Installation",
        notes:
          "Confirm applicability under the current CMS occupancy-specific survey form.",
      },
      {
        authority: "CMS",
        citation: "K353",
        title: "Sprinkler System — Maintenance and Testing",
        notes:
          "Confirm applicability under the current CMS occupancy-specific survey form.",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
    ],
    evidenceFrequency:
      "Maintain continuously and update after relevant system changes",
    evidenceRetention:
      "Life of the system, including superseded inventories and modification records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review and reconciliation with installed systems",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-002",
    slug: "sprinkler-inspection-testing-maintenance",
    title: "Sprinkler Inspection, Testing, and Maintenance Program",
    intent:
      "Automatic sprinkler systems are inspected, tested, and maintained at required intervals to support reliable operation.",
    description:
      "The organization maintains a coordinated program covering all applicable sprinkler-system components, required frequencies, assigned responsibilities, completed activities, deficiencies, and corrective actions.",
    requirement:
      "Establish and maintain a documented inspection, testing, and maintenance program for automatic sprinkler and related water-based fire-protection systems.",
    surveyorLooksFor: [
      "A defined sprinkler inspection and testing schedule",
      "All applicable systems and components are included",
      "Required inspection frequencies are identified",
      "Required testing frequencies are identified",
      "Maintenance activities are documented",
      "Qualified personnel perform the work",
      "Missed or overdue activities are tracked",
      "Deficiencies are documented",
      "Repairs and retesting are completed",
      "Reports are reviewed by facility leadership",
    ],
    evidenceExamples: [
      "Sprinkler inspection schedule",
      "Inspection and testing reports",
      "Preventive-maintenance schedule",
      "Vendor service agreement",
      "Compliance calendar",
      "Completed work orders",
      "Deficiency log",
      "Annual program summary",
    ],
    commonFindings: [
      "Required inspections are overdue",
      "Testing records are incomplete",
      "Some risers are omitted",
      "Reports do not identify the tested system",
      "Inspection frequencies are inconsistent",
      "Vendor reports are filed without review",
      "Deficiencies are not entered into a tracking process",
      "Repairs are completed without retesting",
    ],
    keywords: [
      "sprinkler inspection",
      "sprinkler testing",
      "sprinkler maintenance",
      "NFPA 25",
      "water-based fire protection testing",
      "sprinkler ITM",
      "annual sprinkler inspection",
      "quarterly sprinkler inspection",
      "sprinkler compliance",
      "sprinkler service report",
    ],
    aiGuidance:
      "Map completed inspection, testing, and maintenance records that identify the system, date, activity, result, technician, and deficiencies. Blank forms, contracts, invoices, or schedules alone do not demonstrate completed work.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K353",
        title: "Sprinkler System — Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
      {
        authority: "The Joint Commission",
        title: "Life Safety and Physical Environment Requirements",
        notes:
          "Confirm the applicable accreditation program and current standard set.",
      },
    ],
    evidenceFrequency:
      "At the frequencies required for each applicable system and component",
    evidenceRetention:
      "Current survey cycle and prior inspection and testing records according to organizational policy",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, inventory reconciliation, and representative physical verification",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-003",
    slug: "sprinkler-control-valves",
    title: "Sprinkler Control Valve Inspection and Security",
    intent:
      "Sprinkler-system control valves remain in their required operating position, accessible, identified, and protected against unauthorized operation.",
    description:
      "The organization evaluates sprinkler control valves for position, supervision, locking or sealing, accessibility, identification, leakage, physical condition, and evidence of unauthorized operation.",
    requirement:
      "Maintain sprinkler-system control valves in their required operating position and inspect them at the applicable frequency based on their supervision and security arrangement.",
    surveyorLooksFor: [
      "Control valves are in the correct position",
      "Valve position is clearly identifiable",
      "Valves are supervised when required",
      "Locks or seals are present when applicable",
      "Valves are accessible",
      "Valve rooms and cabinets are not obstructed",
      "Valves are free of visible damage or leakage",
      "Each valve has a unique identifier",
      "Inspection records identify each valve",
      "Unauthorized closure is investigated",
    ],
    evidenceExamples: [
      "Control-valve inspection log",
      "Valve inventory",
      "Valve supervision test",
      "Tamper-switch test record",
      "Riser inspection report",
      "Valve repair work order",
      "Valve position photograph",
      "Corrective-action record",
    ],
    commonFindings: [
      "A control valve is partially or fully closed",
      "Valve position cannot be determined",
      "Valve inspections are overdue",
      "Valve identifiers are missing",
      "A valve is obstructed",
      "A lock or seal is missing",
      "Valve supervision is disabled",
      "Tamper switches fail to report",
      "Valve leakage is not corrected",
    ],
    keywords: [
      "sprinkler control valve",
      "OS and Y valve",
      "butterfly valve",
      "post indicator valve",
      "valve inspection",
      "valve supervision",
      "tamper switch",
      "closed sprinkler valve",
      "sprinkler valve lock",
      "sprinkler valve seal",
    ],
    aiGuidance:
      "Map records involving sprinkler valve position, locking, sealing, supervision, accessibility, identification, inspection, or repair. Give higher confidence when individual valves are listed with identifiers and inspection results.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K353",
        title: "Sprinkler System — Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
    ],
    evidenceFrequency:
      "At the applicable inspection frequency based on valve supervision and security",
    evidenceRetention:
      "Current survey cycle and associated repair records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Physical inspection, functional testing, and document review",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-004",
    slug: "sprinkler-waterflow-supervisory-testing",
    title: "Waterflow and Supervisory Device Testing",
    intent:
      "Sprinkler-system waterflow and supervisory devices reliably transmit required signals to the fire alarm system and monitoring location.",
    description:
      "The organization tests waterflow switches, valve supervisory switches, pressure supervisory devices, and related interfaces to confirm signal initiation, receipt, annunciation, and restoration.",
    requirement:
      "Test applicable sprinkler-system waterflow and supervisory devices at required intervals and document signal initiation, receipt, annunciation, restoration, and corrective action.",
    surveyorLooksFor: [
      "Waterflow devices are included in testing",
      "Valve supervisory devices are included",
      "Pressure supervisory devices are included when applicable",
      "Signals reach the fire alarm control unit",
      "Signals reach the supervising station when required",
      "The correct device and location are displayed",
      "Alarm transmission time is evaluated when applicable",
      "Devices restore to normal after testing",
      "Failures are documented",
      "Corrective actions and retests are completed",
    ],
    evidenceExamples: [
      "Waterflow test report",
      "Tamper-switch test report",
      "Supervisory-device test",
      "Fire alarm inspection report",
      "Monitoring-station signal report",
      "Integrated-system test record",
      "Repair work order",
      "Successful retest report",
    ],
    commonFindings: [
      "Waterflow alarms do not transmit",
      "A tamper switch is not tested",
      "The wrong location displays at the alarm panel",
      "Signals do not reach the supervising station",
      "A device remains in trouble after testing",
      "Sprinkler and fire alarm reports conflict",
      "Failed devices are not retested",
      "Testing cannot be linked to a specific riser",
    ],
    keywords: [
      "waterflow switch",
      "tamper switch",
      "supervisory signal",
      "sprinkler alarm",
      "waterflow test",
      "valve supervisory test",
      "sprinkler fire alarm interface",
      "pressure switch",
      "monitoring station signal",
      "sprinkler annunciation",
    ],
    aiGuidance:
      "Map sprinkler and fire-alarm records involving waterflow, valve supervisory, pressure supervisory, alarm transmission, annunciation, or restoration. Cross-reference device identifiers and locations when multiple reports are available.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K353",
        title: "Sprinkler System — Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
      {
        authority: "NFPA",
        citation: "NFPA 72",
        title: "National Fire Alarm and Signaling Code",
        notes:
          "May apply to alarm, supervisory, and monitoring interfaces.",
      },
    ],
    evidenceFrequency:
      "At required device-testing intervals and after repair or modification",
    evidenceRetention:
      "Current survey cycle and associated repair and retest records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Functional testing and reconciliation of sprinkler, fire alarm, and monitoring records",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-005",
    slug: "sprinkler-head-condition-clearance",
    title: "Sprinkler Head Condition and Clearance",
    intent:
      "Sprinkler heads remain unobstructed, undamaged, properly positioned, and suitable for their installed environment.",
    description:
      "The organization evaluates sprinkler heads for obstruction, loading, corrosion, paint, physical damage, leakage, improper orientation, missing escutcheons, incompatible replacement, and inadequate clearance from storage.",
    requirement:
      "Maintain sprinkler heads in serviceable condition and preserve required clearance and unobstructed discharge patterns throughout protected areas.",
    surveyorLooksFor: [
      "Sprinkler heads are free of paint",
      "Sprinkler heads are free of corrosion",
      "Sprinkler heads are free of loading or residue",
      "Sprinkler heads are not physically damaged",
      "Sprinkler heads are not leaking",
      "Sprinkler heads are properly oriented",
      "Storage does not obstruct sprinkler discharge",
      "Required clearance below sprinklers is maintained",
      "Ceiling changes have not created obstructions",
      "Replacement sprinklers are appropriate for the system",
    ],
    evidenceExamples: [
      "Sprinkler inspection report",
      "Environmental-rounding checklist",
      "Storage-clearance audit",
      "Sprinkler replacement work order",
      "Ceiling-renovation inspection",
      "Photographic deficiency record",
      "Corrective-action report",
      "Post-repair inspection",
    ],
    commonFindings: [
      "Storage is too close to sprinklers",
      "Sprinkler heads are painted",
      "Sprinkler heads are corroded",
      "Dust or residue is loaded on sprinklers",
      "A sprinkler is damaged or bent",
      "A sprinkler is leaking",
      "Ceiling features obstruct discharge",
      "Temporary decorations interfere with sprinkler coverage",
      "Missing ceiling tiles affect sprinkler performance",
    ],
    keywords: [
      "sprinkler clearance",
      "18 inch clearance",
      "painted sprinkler head",
      "corroded sprinkler",
      "loaded sprinkler",
      "damaged sprinkler head",
      "sprinkler obstruction",
      "storage below sprinkler",
      "sprinkler escutcheon",
      "sprinkler replacement",
    ],
    aiGuidance:
      "Map inspection records, environmental rounds, photographs, work orders, and construction reviews involving sprinkler-head condition, obstruction, orientation, leakage, or storage clearance. Photographs should identify the specific location.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K353",
        title: "Sprinkler System — Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
      {
        authority: "NFPA",
        citation: "NFPA 13",
        title: "Standard for the Installation of Sprinkler Systems",
        notes:
          "May apply when evaluating installation, spacing, obstruction, and modification conditions.",
      },
    ],
    evidenceFrequency:
      "During applicable inspections and routine environment-of-care surveillance",
    evidenceRetention:
      "Current survey cycle and related repair records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Physical inspection, photographic review, and corrective-action verification",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-006",
    slug: "sprinkler-piping-hangers-bracing",
    title: "Sprinkler Piping, Hangers, and Bracing",
    intent:
      "Sprinkler piping and its supporting components remain free of damage, leakage, improper loading, and unauthorized modification.",
    description:
      "The organization evaluates sprinkler piping, fittings, hangers, supports, seismic bracing, drains, gauges, and associated components for condition, support, leakage, corrosion, and improper use.",
    requirement:
      "Maintain sprinkler piping and support systems in serviceable condition and prevent unauthorized loading, attachment, modification, or obstruction.",
    surveyorLooksFor: [
      "Sprinkler piping is free of visible leakage",
      "Piping is free of significant corrosion",
      "Hangers and supports are intact",
      "Seismic bracing is intact when applicable",
      "No unauthorized items are suspended from sprinkler piping",
      "Piping is protected from physical damage",
      "Drains and test connections are accessible",
      "System gauges are readable and serviceable",
      "Temporary repairs are formally tracked",
      "Construction work has not altered the system without review",
    ],
    evidenceExamples: [
      "Sprinkler inspection report",
      "Piping repair work order",
      "Leak investigation",
      "Corrosion assessment",
      "Seismic-bracing inspection",
      "Construction closeout record",
      "Gauge replacement record",
      "Post-repair test report",
    ],
    commonFindings: [
      "Items are hanging from sprinkler piping",
      "Piping is leaking",
      "Piping or fittings are corroded",
      "Hangers are loose or missing",
      "Seismic bracing is damaged",
      "A drain connection is obstructed",
      "A gauge is damaged or unreadable",
      "Temporary repairs remain unresolved",
      "Construction modifies piping without documentation",
    ],
    keywords: [
      "sprinkler piping",
      "sprinkler hanger",
      "seismic bracing",
      "sprinkler leak",
      "pipe corrosion",
      "sprinkler support",
      "sprinkler gauge",
      "main drain",
      "sprinkler piping damage",
      "items hanging from sprinkler pipe",
    ],
    aiGuidance:
      "Map inspection findings, photographs, construction records, and work orders involving sprinkler piping, fittings, supports, hangers, bracing, gauges, drains, corrosion, leakage, or unauthorized loading.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K353",
        title: "Sprinkler System — Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
    ],
    evidenceFrequency:
      "During required inspections and whenever damage or leakage is identified",
    evidenceRetention:
      "Current survey cycle and life of the system for significant modification records",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Physical inspection, work-order review, and post-repair verification",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-007",
    slug: "sprinkler-water-supply-flow-testing",
    title: "Sprinkler Water Supply and Flow Testing",
    intent:
      "The sprinkler system has a dependable water supply capable of supporting required system performance.",
    description:
      "The organization evaluates water-supply condition and performance using applicable flow tests, drain tests, fire-pump tests, tank inspections, pressure records, and comparisons with prior results.",
    requirement:
      "Inspect and test applicable sprinkler water-supply components at required intervals and investigate material changes in pressure, flow, or system performance.",
    surveyorLooksFor: [
      "Applicable water-supply tests are completed",
      "Static and residual pressures are documented when applicable",
      "Flow results are documented",
      "Results are compared with prior tests",
      "Material deterioration is investigated",
      "Main-drain tests identify the tested riser",
      "Fire-pump records are available when applicable",
      "Water-storage systems are included when applicable",
      "Municipal water-supply changes are evaluated",
      "Deficiencies are corrected and retested",
    ],
    evidenceExamples: [
      "Main-drain test report",
      "Waterflow test report",
      "Hydrant-flow test",
      "Fire-pump test report",
      "Water-storage tank inspection",
      "Pressure trend report",
      "Water-supply investigation",
      "Corrective-action and retest record",
    ],
    commonFindings: [
      "Water-supply testing is overdue",
      "Results cannot be linked to a specific riser",
      "Pressure readings are incomplete",
      "Significant changes are not investigated",
      "Fire-pump records are missing",
      "Main-drain results are not compared over time",
      "A low-pressure condition remains unresolved",
      "Testing is completed without documenting final restoration",
    ],
    keywords: [
      "main drain test",
      "sprinkler flow test",
      "water supply test",
      "static pressure",
      "residual pressure",
      "fire pump test",
      "sprinkler pressure",
      "hydrant flow",
      "water storage tank",
      "sprinkler water supply",
    ],
    aiGuidance:
      "Map records involving sprinkler water supply, main drains, flow, pressure, fire pumps, hydrants, or tanks. Give higher confidence when results identify the system and include comparisons with previous testing.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K353",
        title: "Sprinkler System — Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
    ],
    evidenceFrequency:
      "At applicable testing intervals for each water-supply component",
    evidenceRetention:
      "Current survey cycle and sufficient historical records for performance comparison",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Test-report review, historical comparison, and deficiency follow-up",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-008",
    slug: "sprinkler-impairment-management",
    title: "Sprinkler System Impairment Management",
    intent:
      "Planned and unplanned sprinkler-system impairments are identified, controlled, communicated, and restored without unnecessary delay.",
    description:
      "The organization maintains a formal impairment process addressing authorization, risk assessment, affected areas, notifications, temporary precautions, fire watch or evacuation requirements when applicable, repair, restoration, and closure.",
    requirement:
      "Manage sprinkler-system impairments through a documented process that protects occupants while the system or a portion of the system is out of service.",
    surveyorLooksFor: [
      "Impairments are formally identified",
      "The affected system and area are documented",
      "The reason for the impairment is recorded",
      "Appropriate leadership is notified",
      "The fire department or monitoring service is notified when applicable",
      "Interim fire-safety measures are implemented",
      "Fire watch or evacuation is considered when required",
      "Impairment tags or controls are used",
      "Restoration testing is documented",
      "All parties are notified when protection is restored",
    ],
    evidenceExamples: [
      "Sprinkler impairment permit",
      "Impairment log",
      "Fire-watch documentation",
      "Leadership notification",
      "Fire department notification",
      "Monitoring-company notification",
      "Repair work order",
      "Restoration test report",
      "Impairment closure record",
    ],
    commonFindings: [
      "A sprinkler system is shut down without documentation",
      "The affected area is not identified",
      "Required notifications are not completed",
      "A fire watch is not implemented when needed",
      "Impairment duration is not tracked",
      "The system is restored without testing",
      "Valves remain closed after work",
      "The impairment record is never formally closed",
    ],
    keywords: [
      "sprinkler impairment",
      "sprinkler outage",
      "fire watch",
      "sprinkler shutdown",
      "impaired sprinkler system",
      "out of service sprinkler",
      "impairment permit",
      "sprinkler restoration",
      "closed sprinkler valve",
      "fire protection impairment",
    ],
    aiGuidance:
      "Map documentation showing the full impairment lifecycle: authorization, affected area, notifications, interim controls, repairs, restoration testing, valve restoration, and closure. A repair invoice alone does not demonstrate effective impairment management.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K354",
        title: "Sprinkler System — Out of Service",
        notes:
          "Confirm current occupancy-specific requirements and applicable impairment duration thresholds.",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
    ],
    evidenceFrequency:
      "Whenever a planned or unplanned sprinkler impairment occurs",
    evidenceRetention:
      "Current survey cycle and according to organizational impairment-management policy",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Impairment-log review, notification verification, and restoration-record review",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-009",
    slug: "sprinkler-deficiency-management",
    title: "Sprinkler Deficiency and Corrective-Action Management",
    intent:
      "Sprinkler-system deficiencies are evaluated, prioritized, corrected, retested, and formally closed.",
    description:
      "A structured deficiency process connects failed inspection or testing results to assigned corrective actions, interim controls, repair records, successful retesting, and verified closure.",
    requirement:
      "Track sprinkler-system deficiencies from identification through risk assessment, repair, retesting, and verified completion, with escalation of overdue or high-risk items.",
    surveyorLooksFor: [
      "Each deficiency identifies the affected system or component",
      "The condition is clearly described",
      "Risk is evaluated",
      "A responsible person is assigned",
      "A target completion date is established",
      "Interim measures are considered",
      "Repair documentation is retained",
      "Retesting confirms successful correction",
      "Closure is traceable to the original finding",
      "Recurring deficiencies are analyzed",
    ],
    evidenceExamples: [
      "Sprinkler deficiency log",
      "Corrective-action tracker",
      "Repair work order",
      "Contractor service report",
      "Interim-control documentation",
      "Retest report",
      "Completion photograph",
      "Closure-verification record",
    ],
    commonFindings: [
      "Deficiencies remain open after inspection",
      "Repairs cannot be linked to a specific component",
      "Work orders are closed without retesting",
      "Interim precautions are not documented",
      "Critical deficiencies are not escalated",
      "The same failure recurs repeatedly",
      "Vendor recommendations are not reviewed",
      "Closed deficiencies remain open on the compliance report",
    ],
    keywords: [
      "sprinkler deficiency",
      "sprinkler corrective action",
      "sprinkler repair",
      "sprinkler retest",
      "failed sprinkler inspection",
      "open sprinkler finding",
      "sprinkler remediation",
      "sprinkler work order",
      "overdue sprinkler repair",
      "sprinkler closure verification",
    ],
    aiGuidance:
      "Map records demonstrating the complete deficiency lifecycle: affected system, failed condition, risk, assigned action, repair, retest, and closure. A closed work order without successful retesting should receive lower confidence.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K353",
        title: "Sprinkler System — Maintenance and Testing",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
    ],
    evidenceFrequency: "Ongoing as deficiencies are identified",
    evidenceRetention:
      "Current survey cycle and according to organizational corrective-action policy",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Document review, work-order reconciliation, physical verification, and retesting",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
  {
    accreditor: "HHS",
    chapter: "Automatic Sprinkler Systems",
    code: "HHS-FAC-SP-010",
    slug: "sprinkler-program-oversight",
    title: "Automatic Sprinkler System Program Oversight",
    intent:
      "The organization manages sprinkler-system compliance as a coordinated program rather than as a collection of vendor reports.",
    description:
      "Program oversight integrates inventories, inspection schedules, testing results, impairments, construction changes, deficiencies, corrective actions, contractor performance, trend analysis, and leadership reporting.",
    requirement:
      "Maintain a coordinated sprinkler-system management process that assigns responsibility, monitors performance, evaluates recurring risks, and reports significant unresolved issues to appropriate leadership.",
    surveyorLooksFor: [
      "Defined ownership of the sprinkler program",
      "A current system inventory",
      "A complete inspection and testing schedule",
      "Monitoring of completion rates",
      "Tracking of deficiencies and impairments",
      "Analysis of recurring failures",
      "Coordination with construction and renovation",
      "Review of contractor performance",
      "Escalation of overdue high-risk deficiencies",
      "Leadership awareness of unresolved sprinkler risks",
    ],
    evidenceExamples: [
      "Sprinkler-system management plan",
      "Annual compliance summary",
      "Sprinkler compliance dashboard",
      "Deficiency-aging report",
      "Impairment summary",
      "Committee meeting minutes",
      "Leadership report",
      "Annual program evaluation",
    ],
    commonFindings: [
      "Vendor reports are filed without internal review",
      "No individual owns the sprinkler program",
      "Inspection completion is not monitored",
      "Deficiency trends are not analyzed",
      "Construction changes are not incorporated",
      "Impairments are tracked separately and inconsistently",
      "Overdue deficiencies are not escalated",
      "Leadership receives no summary of significant risk",
    ],
    keywords: [
      "sprinkler program",
      "sprinkler management",
      "sprinkler compliance dashboard",
      "sprinkler program evaluation",
      "sprinkler oversight",
      "sprinkler completion rate",
      "sprinkler deficiency trend",
      "sprinkler performance",
      "sprinkler leadership report",
      "water-based fire protection program",
    ],
    aiGuidance:
      "Map plans, dashboards, summaries, meeting records, and evaluations showing coordinated oversight of sprinkler compliance. Individual inspection reports alone do not demonstrate full program governance.",
    referencedAuthorities: [
      {
        authority: "CMS",
        citation: "K351",
        title: "Sprinkler System — Installation",
      },
      {
        authority: "CMS",
        citation: "K353",
        title: "Sprinkler System — Maintenance and Testing",
      },
      {
        authority: "CMS",
        citation: "K354",
        title: "Sprinkler System — Out of Service",
      },
      {
        authority: "NFPA",
        citation: "NFPA 25",
        title:
          "Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
      },
      {
        authority: "The Joint Commission",
        title: "Life Safety and Physical Environment Requirements",
        notes:
          "Confirm the applicable accreditation program and current standard set.",
      },
    ],
    evidenceFrequency:
      "Ongoing with formal program evaluation at least annually",
    evidenceRetention:
      "Current program records and prior survey-cycle evaluation",
    responsibleRole: "Facilities Director",
    validationMethod:
      "Program-document review, performance-data review, and leadership interview",
    department: "Facilities",
    domain: "Fire and Life Safety",
    category: "Automatic Sprinkler Systems",
    riskLevel: "Critical",
    priority: 1,
    version: "1.0",
    status: "Active",
    isCustom: true,
  },
];