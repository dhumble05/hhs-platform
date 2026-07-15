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

export type EvidenceAnalysis = {
  documentType: string;
  department: string;
  confidence: number;
  evidenceQuality: number;
  surveyReadiness: number;
  riskLevel: "Low" | "Moderate" | "High";
  recommendedStandards: string[];
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

export async function analyzeEvidence(
  text: string,
  availableStandards: AvailableStandard[],
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

  const response = await client.responses.create({
    model: "gpt-5",
    input: [
      {
        role: "system",
        content: `
You are an experienced healthcare accreditation surveyor with expertise in Joint Commission, CMS, AAAHC, ACHC, NFPA 99, NFPA 101, FGI Guidelines, and healthcare regulatory compliance.

Review uploaded evidence as it would be reviewed during an accreditation survey.

Evaluate only what is actually present in the evidence. Do not assume that missing approvals, signatures, reviews, dates, supporting records, or corrective actions exist.

Select standards only from the supplied standards library. Never invent or alter standard codes.
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
  "confidence": 0,
  "evidenceQuality": 0,
  "surveyReadiness": 0,
  "riskLevel": "Low",
  "recommendedStandards": ["string"],
  "strengths": ["string"],
  "missingEvidence": ["string"],
  "recommendations": ["string"],
  "executiveSummary": "string"
}

Scoring rules:

- confidence measures confidence in the analysis itself.
- evidenceQuality measures the completeness, clarity, organization, approvals, dates, and usability of this specific document.
- surveyReadiness measures how ready this evidence is to be presented to a surveyor.
- Each score must be a whole number from 0 through 100.
- riskLevel must be exactly "Low", "Moderate", or "High".
- A polished document can still have low survey readiness when required approvals, signatures, dates, or supporting records are missing.
- Do not confirm approvals, signatures, reviews, or supporting evidence unless they are visible in the document.
- recommendedStandards may contain only codes listed under Available Standards.
- If no supplied standard is clearly supported, return an empty recommendedStandards array.
- strengths must identify specific positive elements visible in the evidence.
- missingEvidence must identify absent or unconfirmed supporting documentation.
- recommendations must be clear actions the organization should complete before survey.
- Keep the executive summary under 125 words.

Available Standards:

${standardsContext || "No standards are currently available."}

Evidence:

${cleanedText}
        `.trim(),
      },
    ],
  });

  const output = response.output_text.trim();

  let parsed: Partial<EvidenceAnalysis>;

  try {
    parsed = JSON.parse(
      output,
    ) as Partial<EvidenceAnalysis>;
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

  const recommendedStandards =
    normalizeStringArray(
      parsed.recommendedStandards,
    ).filter((code) => validCodes.has(code));

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

    confidence: normalizeScore(parsed.confidence),

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

    strengths: normalizeStringArray(
      parsed.strengths,
    ),

    missingEvidence: normalizeStringArray(
      parsed.missingEvidence,
    ),

    recommendations: normalizeStringArray(
      parsed.recommendations,
    ),

    executiveSummary:
      typeof parsed.executiveSummary === "string" &&
      parsed.executiveSummary.trim()
        ? parsed.executiveSummary.trim()
        : "No executive summary was generated.",
  };
}