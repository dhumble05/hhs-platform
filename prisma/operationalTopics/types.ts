export type HhsOperationalTopic = {
  code: string;
  slug: string;
  name: string;

  description?: string;
  aiGuidance?: string;

  domain?: string;
  category?: string;
displayOrder?: number;
icon?: string;
color?: string;
  riskLevel?: "Low" | "Moderate" | "High" | "Critical";
  priority?: number;

  keywords?: string[];
  evidenceExamples?: string[];
  surveyorLooksFor?: string[];
  commonFindings?: string[];

  evidenceFrequency?: string;
  evidenceRetention?: string;
  responsibleRole?: string;
  validationMethod?: string;

  status?: "Active" | "Draft" | "Retired";
  isCustom?: boolean;
};