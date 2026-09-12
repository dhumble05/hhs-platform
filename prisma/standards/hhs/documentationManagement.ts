import type { HhsCoreStandard } from "../types";

/**
 * HHS-developed healthcare documentation management survey-readiness controls.
 *
 * These are original HHS operational controls designed to train the
 * HHS knowledge engine to evaluate healthcare compliance documentation,
 * identify missing evidence, recognize documentation risks, and support
 * mapping to applicable regulatory, accreditation, and operational
 * authorities.
 *
 * They are not reproductions of proprietary accreditation standards.
 */
export const hhsDocumentationManagementStandards: HhsCoreStandard[] = [
  {
    accreditor: "HHS",
    chapter: "Documentation Management",
    code: "HHS-DOC-PROG-001",
    slug: "hhs-documentation-management-program",
    title: "Documentation Management Program",
    intent:
      "The organization maintains a structured system for creating, approving, storing, organizing, protecting, retaining, and retiring compliance documentation.",
    description:
      "The documentation management program establishes governance, ownership, document classification, version control, retention, review cycles, evidence mapping, access control, auditing, and continuous improvement.",
    requirement:
      "Maintain and implement a documented documentation management program that governs the complete lifecycle of compliance documentation and evidence.",
    surveyorLooksFor: [
      "Current documentation management policy",
      "Defined document ownership",
      "Controlled document lifecycle",
      "Document review schedule",
      "Evidence organization",
      "Program evaluation",
    ],
    evidenceExamples: [
      "Documentation management policy",
      "Document control procedure",
      "Document inventory",
      "Evidence repository",
      "Annual program evaluation",
    ],
    commonFindings: [
      "Documents exist in multiple uncontrolled locations",
      "Ownership is unclear",
      "Expired documents remain active",
      "Evidence cannot be located quickly",
      "Review schedules are inconsistent",
      "Version control is missing",
    ],
    keywords: [
      "documentation management",
      "document control",
      "compliance documents",
      "evidence repository",
      "survey documentation",
      "policy management",
      "document lifecycle",
    ],
    aiGuidance:
      "Evaluate whether documentation is governed as an active management system rather than a collection of files.",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Documentation Management Framework",
      },
    ],
    department: "Administration",
    domain: "Documentation Management",
    category: "Program Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },

  {
    accreditor: "HHS",
    chapter: "Documentation Management",
    code: "HHS-DOC-OWNER-001",
    slug: "hhs-document-ownership",
    title: "Document Ownership",
    intent:
      "Every controlled document has a clearly identified owner responsible for its accuracy and maintenance.",
    description:
      "Document ownership includes accountability for updates, approvals, reviews, distribution, retirement, and evidence quality.",
    requirement:
      "Assign a documented owner to every controlled compliance document.",
    surveyorLooksFor: [
      "Named document owners",
      "Ownership assignments",
      "Department accountability",
    ],
    evidenceExamples: [
      "Document register",
      "Owner assignments",
      "Department responsibilities",
    ],
    commonFindings: [
      "Owner not identified",
      "Former employees listed",
      "Shared ownership causes confusion",
    ],
    keywords: [
      "document owner",
      "policy owner",
      "responsibility",
      "document accountability",
    ],
    aiGuidance:
      "Policies without accountable owners should reduce confidence.",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Document Ownership Framework",
      },
    ],
    department: "Administration",
    domain: "Documentation Management",
    category: "Ownership",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },

  {
    accreditor: "HHS",
    chapter: "Documentation Management",
    code: "HHS-DOC-VERSION-001",
    slug: "hhs-version-control",
    title: "Version Control",
    intent:
      "Only the current approved version of controlled documents is available for use.",
    description:
      "Version control governs revision numbers, approval dates, historical copies, superseded documents, and publication controls.",
    requirement:
      "Maintain documented version control for all controlled compliance documents.",
    surveyorLooksFor: [
      "Revision numbers",
      "Approval dates",
      "Superseded copies archived",
      "Current version clearly identified",
    ],
    evidenceExamples: [
      "Revision history",
      "Document log",
      "Version archive",
    ],
    commonFindings: [
      "Multiple active versions",
      "No revision history",
      "Users access outdated policies",
    ],
    keywords: [
      "version control",
      "document revision",
      "revision history",
      "controlled documents",
    ],
    aiGuidance:
      "Evidence should clearly identify the active version and historical revisions.",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Version Control Framework",
      },
    ],
    department: "Administration",
    domain: "Documentation Management",
    category: "Version Control",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },

  {
    accreditor: "HHS",
    chapter: "Documentation Management",
    code: "HHS-DOC-REVIEW-001",
    slug: "hhs-document-review-cycle",
    title: "Document Review Cycle",
    intent:
      "Controlled documents are periodically reviewed for continued accuracy and applicability.",
    description:
      "Review cycles verify regulatory alignment, operational relevance, owner approval, and required revisions.",
    requirement:
      "Review controlled documents at established intervals and whenever significant regulatory or operational changes occur.",
    surveyorLooksFor: [
      "Scheduled reviews",
      "Review dates",
      "Updated approvals",
      "Documented revisions",
    ],
    evidenceExamples: [
      "Review log",
      "Approval record",
      "Revision summary",
    ],
    commonFindings: [
      "Policies overdue for review",
      "No review documentation",
      "Changes not incorporated",
    ],
    keywords: [
      "policy review",
      "document review",
      "policy update",
    ],
    aiGuidance:
      "Policies significantly beyond their review interval should lower confidence.",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Document Review Framework",
      },
    ],
    department: "Administration",
    domain: "Documentation Management",
    category: "Review",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },

  {
    accreditor: "HHS",
    chapter: "Documentation Management",
    code: "HHS-DOC-RET-001",
    slug: "hhs-document-retention",
    title: "Document Retention",
    intent:
      "Compliance documentation is retained according to organizational, legal, and regulatory requirements.",
    description:
      "Retention schedules define minimum retention periods, archival methods, destruction controls, and legal holds.",
    requirement:
      "Maintain documented retention requirements for all compliance records.",
    surveyorLooksFor: [
      "Retention schedule",
      "Archived records",
      "Controlled destruction",
    ],
    evidenceExamples: [
      "Retention policy",
      "Retention matrix",
      "Archive log",
    ],
    commonFindings: [
      "Records destroyed prematurely",
      "Retention requirements unclear",
      "No archive process",
    ],
    keywords: [
      "record retention",
      "archive",
      "retention schedule",
    ],
    aiGuidance:
      "Evaluate whether documentation remains available throughout required retention periods.",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Document Retention Framework",
      },
    ],
    department: "Administration",
    domain: "Documentation Management",
    category: "Retention",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },

  {
    accreditor: "HHS",
    chapter: "Documentation Management",
    code: "HHS-DOC-EVID-001",
    slug: "hhs-evidence-organization",
    title: "Evidence Organization",
    intent:
      "Compliance evidence is organized so it can be located quickly during surveys and internal reviews.",
    description:
      "Evidence organization includes metadata, categorization, standards mapping, indexing, searchability, and lifecycle management.",
    requirement:
      "Organize compliance evidence using consistent metadata and logical structure.",
    surveyorLooksFor: [
      "Evidence categories",
      "Logical organization",
      "Rapid retrieval",
      "Consistent naming",
    ],
    evidenceExamples: [
      "Evidence repository",
      "Evidence index",
      "Metadata records",
    ],
    commonFindings: [
      "Evidence is difficult to locate",
      "Duplicate uploads",
      "Poor organization",
    ],
    keywords: [
      "evidence repository",
      "document organization",
      "survey evidence",
      "metadata",
    ],
    aiGuidance:
      "Evaluate whether evidence retrieval would be practical during a live survey.",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Evidence Organization Framework",
      },
    ],
    department: "Administration",
    domain: "Documentation Management",
    category: "Evidence Management",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },

  {
    accreditor: "HHS",
    chapter: "Documentation Management",
    code: "HHS-DOC-MAP-001",
    slug: "hhs-evidence-to-standard-mapping",
    title: "Evidence-to-Standard Mapping",
    intent:
      "Compliance evidence is mapped directly to the applicable standards and survey requirements.",
    description:
      "Evidence mapping creates traceable relationships between documents and regulatory expectations.",
    requirement:
      "Maintain evidence mappings that identify which documentation demonstrates compliance for each applicable requirement.",
    surveyorLooksFor: [
      "Mapped evidence",
      "Traceable relationships",
      "Coverage analysis",
    ],
    evidenceExamples: [
      "Evidence map",
      "Crosswalk",
      "Standards mapping",
    ],
    commonFindings: [
      "Evidence exists but is unmapped",
      "Duplicate mappings",
      "Missing coverage",
    ],
    keywords: [
      "evidence mapping",
      "crosswalk",
      "standard mapping",
    ],
    aiGuidance:
      "This becomes the core intelligence layer for HHS. Missing mappings should significantly reduce survey readiness.",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Evidence Mapping Framework",
      },
    ],
    department: "Administration",
    domain: "Documentation Management",
    category: "Evidence Mapping",
    riskLevel: "Critical",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },

  {
    accreditor: "HHS",
    chapter: "Documentation Management",
    code: "HHS-DOC-AUDIT-001",
    slug: "hhs-document-quality-audits",
    title: "Documentation Quality Audits",
    intent:
      "Documentation quality is periodically evaluated for completeness, accuracy, organization, and survey readiness.",
    description:
      "Quality audits identify gaps before surveyors do and drive continuous improvement.",
    requirement:
      "Perform periodic audits of compliance documentation and implement corrective actions for identified deficiencies.",
    surveyorLooksFor: [
      "Document audits",
      "Gap analyses",
      "Corrective actions",
      "Follow-up verification",
    ],
    evidenceExamples: [
      "Audit report",
      "Gap analysis",
      "Corrective-action tracker",
    ],
    commonFindings: [
      "Audits not performed",
      "Gaps repeatedly identified",
      "Corrective actions remain open",
    ],
    keywords: [
      "documentation audit",
      "quality review",
      "gap analysis",
    ],
    aiGuidance:
      "Repeated documentation deficiencies without corrective action should substantially increase survey risk.",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Documentation Audit Framework",
      },
    ],
    department: "Administration",
    domain: "Documentation Management",
    category: "Quality Improvement",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },

  {
    accreditor: "HHS",
    chapter: "Documentation Management",
    code: "HHS-DOC-EVAL-001",
    slug: "hhs-documentation-program-evaluation",
    title: "Documentation Management Program Evaluation",
    intent:
      "Leadership periodically evaluates whether documentation management effectively supports survey readiness.",
    description:
      "Evaluation includes document quality, evidence retrieval, review compliance, mapping completeness, audit findings, corrective actions, and user feedback.",
    requirement:
      "Complete and document an annual evaluation of the documentation management program.",
    surveyorLooksFor: [
      "Annual evaluation",
      "Performance measures",
      "Program improvements",
      "Leadership review",
    ],
    evidenceExamples: [
      "Annual evaluation",
      "Performance dashboard",
      "Improvement plan",
    ],
    commonFindings: [
      "Program never evaluated",
      "Performance not measured",
      "Recurring issues continue",
    ],
    keywords: [
      "documentation evaluation",
      "program review",
      "document management performance",
    ],
    aiGuidance:
      "The evaluation should demonstrate continuous improvement rather than simply confirming that documents exist.",
    referencedAuthorities: [
      {
        authority: "HHS",
        title: "Documentation Program Evaluation Framework",
      },
    ],
    department: "Administration",
    domain: "Documentation Management",
    category: "Program Evaluation",
    riskLevel: "High",
    priority: 1,
    version: "2026",
    status: "Active",
    isCustom: true,
  },
];