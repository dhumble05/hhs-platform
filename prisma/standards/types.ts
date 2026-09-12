export type HhsReferencedAuthority = {
  authority: string;
  citation?: string;
  title?: string;
  edition?: string;
  notes?: string;
};

export type HhsCoreStandard = {
  accreditor: string;
  chapter?: string;
  code: string;
  slug?: string;
  title: string;

  intent?: string;
  description?: string;
  requirement?: string;

  surveyorLooksFor?: string[];
  evidenceExamples?: string[];
  commonFindings?: string[];
  keywords?: string[];
  aiGuidance?: string;

  referencedAuthorities?: HhsReferencedAuthority[];

  evidenceFrequency?: string;
  evidenceRetention?: string;
  responsibleRole?: string;
  validationMethod?: string;

  department?: string;
  domain?: string;
  category?: string;
  riskLevel?: "Low" | "Moderate" | "High" | "Critical";
  priority?: number;

  version?: string;
  effectiveDate?: Date;
  status?: "Active" | "Draft" | "Retired" | "Superseded";
  sourceUrl?: string;
  isCustom?: boolean;
};