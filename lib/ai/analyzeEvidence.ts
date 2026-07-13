import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type EvidenceAnalysis = {
  documentType: string;
  department: string;
  confidence: number;
  recommendedStandards: string[];
  missingEvidence: string[];
  summary: string;
};

export async function analyzeEvidence(
  text: string,
): Promise<EvidenceAnalysis> {
  const prompt = `
You are an expert healthcare compliance consultant.

Analyze the following compliance document.

Determine:

- Document type
- Department
- Confidence score (0-100)
- Recommended accreditation standard codes only
- Missing supporting evidence
- A short executive summary

Return ONLY valid JSON.

{
  "documentType":"string",
  "department":"string",
  "confidence":0,
  "recommendedStandards":["string"],
  "missingEvidence":["string"],
  "summary":"string"
}

DOCUMENT:

${text}
`;

  const response = await client.responses.create({
    model: "gpt-5",
    input: prompt,
  });

  return JSON.parse(response.output_text);
}