import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type AvailableStandard = {
  code: string;
  accreditor: string;
  title: string;
  chapter: string | null;
  description: string | null;
  requirement: string | null;
};

export type AvailableOperationalTopic = {
  code: string;
  name: string;
  domain: string | null;
  category: string | null;
  description: string | null;
  aiGuidance: string | null;
  keywords: string[];
  evidenceExamples: string[];
};

export type EvidenceStrength =
  | "Complete"
  | "Partial"
  | "Insufficient";

export type StandardRecommendation = {
  code: string;
  confidence: number;
  reasoning: string;
  evidenceStrength: EvidenceStrength;
  mappedRequirements: string[];
  missingRequirements: string[];
  surveyImpact: string;
};

export type EvidenceAnalysis = {
  documentType: string;
  department: string;

  operationalProgram: string;
  programComponent: string;

  documentDate: string | null;

  complianceYear: number | null;
  complianceMonth: number | null;
  complianceQuarter: number | null;

  periodStart: string | null;
  periodEnd: string | null;

  frequency: string | null;
  evidenceType: string;

  serviceProvider: string | null;
  performedBy: string | null;

  isRecurring: boolean;

  confidence: number;
  evidenceQuality: number;
  surveyReadiness: number;

  riskLevel: "Low" | "Moderate" | "High";

  recommendedStandards: string[];
  standardRecommendations: StandardRecommendation[];

  strengths: string[];
  missingEvidence: string[];
  recommendations: string[];

  executiveSummary: string;
};

function normalizeScore(value: unknown): number {
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return 0;
  }

  const normalizedValue =
    numericValue <= 1 ? numericValue * 100 : numericValue;

  return Math.min(
    100,
    Math.max(0, Math.round(normalizedValue)),
  );
}

function normalizeRiskLevel(
  value: unknown,
): "Low" | "Moderate" | "High" {
  if (typeof value !== "string") {
    return "Moderate";
  }

  const normalizedValue = value.trim().toLowerCase();

  if (normalizedValue === "low") {
    return "Low";
  }

  if (
    normalizedValue === "high" ||
    normalizedValue === "critical"
  ) {
    return "High";
  }

  return "Moderate";
}

function normalizeEvidenceStrength(
  value: unknown,
): EvidenceStrength {
  if (typeof value !== "string") {
    return "Insufficient";
  }

  const normalizedValue = value.trim().toLowerCase();

  if (
    normalizedValue === "complete" ||
    normalizedValue === "fully satisfied" ||
    normalizedValue === "fully supports"
  ) {
    return "Complete";
  }

  if (
    normalizedValue === "partial" ||
    normalizedValue === "partially satisfied" ||
    normalizedValue === "partially supports"
  ) {
    return "Partial";
  }

  return "Insufficient";
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (item): item is string =>
        typeof item === "string",
    )
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeNullableString(
  value: unknown,
): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalizedValue = value.trim();

  return normalizedValue || null;
}

function normalizeInteger(
  value: unknown,
): number | null {
  if (
    typeof value !== "number" ||
    !Number.isInteger(value)
  ) {
    return null;
  }

  return value;
}

function normalizeStandardRecommendations(
  value: unknown,
  validCodes: Set<string>,
): StandardRecommendation[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const recommendations: StandardRecommendation[] = [];

  for (const item of value) {
    if (
      typeof item !== "object" ||
      item === null
    ) {
      continue;
    }

    const candidate = item as Record<string, unknown>;

    const code =
      typeof candidate.code === "string"
        ? candidate.code.trim()
        : "";

    if (!code || !validCodes.has(code)) {
      continue;
    }

    const reasoning =
      typeof candidate.reasoning === "string"
        ? candidate.reasoning.trim()
        : "";

    const surveyImpact =
      typeof candidate.surveyImpact === "string"
        ? candidate.surveyImpact.trim()
        : "";

    recommendations.push({
      code,
      confidence: normalizeScore(
        candidate.confidence,
      ),
      reasoning:
        reasoning ||
        "The uploaded document contains evidence relevant to this standard.",
      evidenceStrength: normalizeEvidenceStrength(
        candidate.evidenceStrength,
      ),
      mappedRequirements: normalizeStringArray(
        candidate.mappedRequirements,
      ),
      missingRequirements: normalizeStringArray(
        candidate.missingRequirements,
      ),
      surveyImpact:
        surveyImpact ||
        "Additional review is required to determine the document's full survey impact.",
    });
  }

  const uniqueRecommendations = new Map<
    string,
    StandardRecommendation
  >();

  for (const recommendation of recommendations) {
    const existingRecommendation =
      uniqueRecommendations.get(
        recommendation.code,
      );

    if (
      !existingRecommendation ||
      recommendation.confidence >
        existingRecommendation.confidence
    ) {
      uniqueRecommendations.set(
        recommendation.code,
        recommendation,
      );
    }
  }

  return Array.from(
    uniqueRecommendations.values(),
  ).sort(
    (firstRecommendation, secondRecommendation) =>
      secondRecommendation.confidence -
      firstRecommendation.confidence,
  );
}

export async function analyzeEvidence(
  text: string,
  availableStandards: AvailableStandard[],
  availableOperationalTopics: AvailableOperationalTopic[],
): Promise<EvidenceAnalysis> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error(
      "OPENAI_API_KEY is not configured.",
    );
  }

  const cleanedText = text.trim();

  if (!cleanedText) {
    throw new Error(
      "No document text was provided for analysis.",
    );
  }

  const standardsContext = availableStandards
    .map((standard) =>
      [
        `Code: ${standard.code}`,
        `Accreditor: ${standard.accreditor}`,
        `Title: ${standard.title}`,
        standard.chapter
          ? `Chapter: ${standard.chapter}`
          : null,
        standard.description
          ? `Description: ${standard.description}`
          : null,
        standard.requirement
          ? `Requirement: ${standard.requirement}`
          : null,
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n\n---\n\n");

  const operationalTopicsContext =
    availableOperationalTopics
      .map((topic) =>
        [
          `Code: ${topic.code}`,
          `Name: ${topic.name}`,
          topic.domain
            ? `Domain: ${topic.domain}`
            : null,
          topic.category
            ? `Category: ${topic.category}`
            : null,
          topic.description
            ? `Description: ${topic.description}`
            : null,
          topic.aiGuidance
            ? `AI Guidance: ${topic.aiGuidance}`
            : null,
          topic.keywords.length > 0
            ? `Keywords: ${topic.keywords.join(", ")}`
            : null,
          topic.evidenceExamples.length > 0
            ? `Evidence Examples: ${topic.evidenceExamples.join(
                ", ",
              )}`
            : null,
        ]
          .filter(Boolean)
          .join("\n"),
      )
      .join("\n\n---\n\n");

  const response = await client.responses.create({
    model: "gpt-5",
    input: [
      {
        role: "system",
        content: `
You are an experienced healthcare accreditation surveyor with expertise in Joint Commission, CMS, AAAHC, ACHC, OSHA, NFPA 99, NFPA 101, FGI Guidelines, and healthcare regulatory compliance.

Review uploaded evidence as it would be reviewed during an accreditation survey.

Evaluate only what is actually present in the uploaded document. Do not assume missing approvals, signatures, dates, reviews, supporting records, implementation activities, corrective actions, or related documentation exist.

Select standards only from the supplied standards library. Never invent, alter, combine, abbreviate, or reinterpret standard codes.

Distinguish carefully between:

1. Document quality:
How complete, readable, organized, current, professional, and internally usable the document is for its actual document type.

2. Survey readiness:
How useful and sufficient the document is as evidence for the standards it actually supports.

3. Evidence strength for each mapped standard:
Whether the document completely supports, partially supports, or does not sufficiently support the mapped standard.

A professionally prepared document may have high document quality but little or no compliance value for the available standards.

Do not manufacture compliance gaps that are unrelated to the actual document. If the document is not relevant to any supplied standard, explain that clearly and recommend uploading the correct type of evidence.
        `.trim(),
      },
      {
        role: "user",
        content: `
Review the evidence below as part of an accreditation survey.

Return only valid JSON using this exact structure:
{
  "documentType": "string",
  "department": "string",

  "operationalProgram": "string",
  "programComponent": "string",

  "documentDate": "YYYY-MM-DD or null",

  "complianceYear": 0,
  "complianceMonth": 0,
  "complianceQuarter": 0,

  "periodStart": "YYYY-MM-DD or null",
  "periodEnd": "YYYY-MM-DD or null",

  "frequency": "string or null",
  "evidenceType": "string",

  "serviceProvider": "string or null",
  "performedBy": "string or null",

  "isRecurring": false,

  "confidence": 0,
  "evidenceQuality": 0,
  "surveyReadiness": 0,
  "riskLevel": "Low",

  "standardRecommendations": [
    {
      "code": "string",
      "confidence": 0,
      "reasoning": "string",
      "evidenceStrength": "Complete",
      "mappedRequirements": ["string"],
      "missingRequirements": ["string"],
      "surveyImpact": "string"
    }
  ],

  "strengths": ["string"],
  "missingEvidence": ["string"],
  "recommendations": ["string"],
  "executiveSummary": "string"
}

Scoring rules:

- confidence measures confidence in the accuracy of the overall analysis.
- evidenceQuality evaluates the quality of the document for what it actually is.
- surveyReadiness evaluates whether this document is suitable and sufficient evidence for the standards it supports.
- Each score must be a whole number from 0 through 100.
- riskLevel must be exactly "Low", "Moderate", or "High".

Operational classification rules:

- operationalProgram must identify the healthcare operational program the document supports.
- operationalProgram must exactly match the Name of one supplied Available Operational Topic.
- Do not invent, rename, abbreviate, or combine operational program names.
- programComponent must identify the specific asset, inspection, process, system, or program component represented by the document.
- evidenceType must be a clear and specific description such as "Monthly Generator Load Test", "Annual Fire Door Inspection", or "Water Temperature Log".
- Do not use vague evidence types such as "Report", "Document", or "Inspection" when a more specific classification is supported.
- If no supplied operational topic is supported by the document, return operationalProgram as "Uncategorized".
- If the specific component cannot be determined, return programComponent as "Uncategorized".

Compliance-period rules:

- documentDate is the actual date shown on the document, not the upload date.
- complianceYear and complianceMonth represent the period the evidence satisfies.
- complianceQuarter must be 1, 2, 3, or 4 when a quarter can be determined.
- periodStart and periodEnd represent the full compliance period covered by the document.
- Use null for dates or periods that cannot be confirmed from the document.
- Do not infer a month or year solely from the current date.
- If a document clearly represents July 2026 monthly activity, return complianceYear 2026 and complianceMonth 7.
- For quarterly evidence, populate complianceQuarter and the applicable periodStart and periodEnd.
- For annual evidence, populate complianceYear and the applicable annual periodStart and periodEnd.
- isRecurring must be true for daily, weekly, monthly, quarterly, semiannual, or annual recurring evidence.
- frequency should use values such as Daily, Weekly, Monthly, Quarterly, Semiannual, Annual, Event-Based, or One-Time.

Personnel and provider rules:

- serviceProvider is the external company or vendor that performed or issued the work, when shown.
- performedBy is the individual, department, technician, or internal role that completed the activity, when shown.
- Use null when the information is not present.

Document-quality rules:

- Consider readability, organization, completeness, dates, authorship, approvals when appropriate, professional formatting, and usability.
- Do not give a document zero quality merely because it is the wrong evidence type.
- A well-written resume, invoice, meeting agenda, or unrelated document may have reasonable document quality but very low survey readiness.

Standards-mapping rules:

- standardRecommendations may contain only codes listed under Available Standards.
- Each mapped standard must include a confidence score from 0 through 100.
- Each mapped standard must include document-specific reasoning.
- Recommend a standard only when the uploaded document contains direct evidence relevant to that standard.
- Do not map a document merely because it mentions a related topic, job responsibility, regulation, accreditor, equipment type, or department.
- If the document is not meaningful evidence for any supplied standard, return an empty standardRecommendations array.
- A resume describing healthcare experience is not itself proof that an organization complies with a healthcare standard.

Evidence-strength rules:

- evidenceStrength must be exactly "Complete", "Partial", or "Insufficient".
- Use "Complete" only when the document appears to fully demonstrate the relevant requirements that this document is reasonably expected to prove.
- Use "Partial" when the document supports some requirements but one or more material elements are missing, unclear, outdated, unsigned when a signature is necessary, incomplete, or dependent on additional evidence.
- Use "Insufficient" when the document is related to the standard but does not meaningfully demonstrate compliance.
- Do not label evidence "Complete" merely because the document mentions the subject of the standard.
- Do not label evidence "Insufficient" merely because separate organization-level evidence may also be required. Judge the document according to the portion of the standard it is reasonably intended to prove.

Mapped-requirements rules:

- mappedRequirements must list the specific requirements visibly demonstrated by the document.
- Use short, document-specific statements.
- Do not copy the full standard requirement unless necessary.
- Do not claim a requirement is mapped unless the evidence is actually present.
- If no requirement is demonstrated, return an empty mappedRequirements array.

Missing-requirements rules:

- missingRequirements must list only the missing, incomplete, unclear, or unconfirmed requirements directly relevant to the mapped standard and this document type.
- Do not list unrelated program requirements.
- Do not list items that the document was never reasonably intended to demonstrate.
- If the document fully supports the mapped portion of the standard, return an empty missingRequirements array.

Survey-impact rules:

- surveyImpact must clearly explain how the document affects survey readiness for the mapped standard.
- Use direct language such as:
  - "This document fully supports the annual inspection requirement."
  - "This document provides partial support, but the corrective action closure is not documented."
  - "This document references the required activity but is insufficient to demonstrate completion."
- Do not state that an entire standard is fully satisfied when the document proves only one component of a broader standard.
- Distinguish between fully supporting this evidence requirement and fully satisfying the entire standard.

Analysis rules:

- strengths must identify specific positive elements visible in the document.
- missingEvidence must identify absent or unconfirmed items directly relevant to the document and the standards it supports.
- Do not list every possible compliance document when the uploaded document is unrelated to the supplied standards.
- recommendations must contain practical next actions.
- Always return at least one recommendation.
- When the document is unrelated to the available standards, recommend replacing or supplementing it with the correct evidence type.
- Keep the executive summary under 125 words.

Available Operational Topics:

${operationalTopicsContext || "No operational topics are currently available."}

Available Standards:

${standardsContext || "No standards are currently available."}

Evidence:

${cleanedText}
        `.trim(),
      },
    ],
  });

  const output = response.output_text.trim();

  let parsed: Record<string, unknown>;

  try {
    parsed = JSON.parse(output) as Record<
      string,
      unknown
    >;
  } catch {
    throw new Error(
      "The compliance analysis returned invalid JSON.",
    );
  }

  const validCodes = new Set(
    availableStandards.map(
      (standard) => standard.code,
    ),
  );

  const standardRecommendations =
    normalizeStandardRecommendations(
      parsed.standardRecommendations,
      validCodes,
    );

  /*
   * This preserves compatibility with analysis results produced
   * before standardRecommendations was introduced.
   */
  const legacyRecommendedStandards =
    normalizeStringArray(
      parsed.recommendedStandards,
    ).filter((code) => validCodes.has(code));

  const recommendedStandards =
    standardRecommendations.length > 0
      ? standardRecommendations.map(
          (recommendation) =>
            recommendation.code,
        )
      : legacyRecommendedStandards;

  const recommendations =
    normalizeStringArray(parsed.recommendations);

  const normalizedComplianceYear =
    normalizeInteger(parsed.complianceYear);

  const normalizedComplianceMonth =
    normalizeInteger(parsed.complianceMonth);

  const normalizedComplianceQuarter =
    normalizeInteger(parsed.complianceQuarter);

  return {
    documentType:
      typeof parsed.documentType === "string" &&
      parsed.documentType.trim()
        ? parsed.documentType.trim()
        : "Unknown",

    department:
      typeof parsed.department === "string" &&
      parsed.department.trim()
        ? parsed.department.trim()
        : "Uncategorized",

    operationalProgram:
      typeof parsed.operationalProgram === "string" &&
      parsed.operationalProgram.trim()
        ? parsed.operationalProgram.trim()
        : "Uncategorized",

    programComponent:
      typeof parsed.programComponent === "string" &&
      parsed.programComponent.trim()
        ? parsed.programComponent.trim()
        : "Uncategorized",

    documentDate: normalizeNullableString(
      parsed.documentDate,
    ),

    complianceYear:
      normalizedComplianceYear !== null &&
      normalizedComplianceYear >= 1900 &&
      normalizedComplianceYear <= 2200
        ? normalizedComplianceYear
        : null,

    complianceMonth:
      normalizedComplianceMonth !== null &&
      normalizedComplianceMonth >= 1 &&
      normalizedComplianceMonth <= 12
        ? normalizedComplianceMonth
        : null,

    complianceQuarter:
      normalizedComplianceQuarter !== null &&
      normalizedComplianceQuarter >= 1 &&
      normalizedComplianceQuarter <= 4
        ? normalizedComplianceQuarter
        : null,

    periodStart: normalizeNullableString(
      parsed.periodStart,
    ),

    periodEnd: normalizeNullableString(
      parsed.periodEnd,
    ),

    frequency: normalizeNullableString(
      parsed.frequency,
    ),

    evidenceType:
      typeof parsed.evidenceType === "string" &&
      parsed.evidenceType.trim()
        ? parsed.evidenceType.trim()
        : "Unknown",

    serviceProvider: normalizeNullableString(
      parsed.serviceProvider,
    ),

    performedBy: normalizeNullableString(
      parsed.performedBy,
    ),

    isRecurring:
      typeof parsed.isRecurring === "boolean"
        ? parsed.isRecurring
        : false,

    confidence: normalizeScore(
      parsed.confidence,
    ),

    evidenceQuality: normalizeScore(
      parsed.evidenceQuality,
    ),

    surveyReadiness: normalizeScore(
      parsed.surveyReadiness,
    ),

    riskLevel: normalizeRiskLevel(
      parsed.riskLevel,
    ),

    recommendedStandards,

    standardRecommendations,

    strengths: normalizeStringArray(
      parsed.strengths,
    ),

    missingEvidence: normalizeStringArray(
      parsed.missingEvidence,
    ),

    recommendations:
      recommendations.length > 0
        ? recommendations
        : [
            "Review this document and upload evidence that directly supports an available compliance standard.",
          ],

    executiveSummary:
      typeof parsed.executiveSummary === "string" &&
      parsed.executiveSummary.trim()
        ? parsed.executiveSummary.trim()
        : "No executive summary was generated.",
  };
}