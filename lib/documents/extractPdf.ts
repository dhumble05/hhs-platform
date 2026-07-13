import { extractText, getDocumentProxy } from "unpdf";

export async function extractPdfText(
  fileBuffer: Buffer,
): Promise<string> {
  const pdf = await getDocumentProxy(
    new Uint8Array(fileBuffer),
  );

  const { text } = await extractText(pdf, {
    mergePages: true,
  });

  const cleanedText = text.trim();

  if (!cleanedText) {
    throw new Error(
      "No readable text was found in this PDF. It may be a scanned document.",
    );
  }

  return cleanedText;
}