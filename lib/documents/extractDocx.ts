import mammoth from "mammoth";

export async function extractDocxText(
  fileBuffer: Buffer,
): Promise<string> {
  const result = await mammoth.extractRawText({
    buffer: fileBuffer,
  });

  const cleanedText = result.value
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (!cleanedText) {
    throw new Error(
      "No readable text was found in this Word document.",
    );
  }

  return cleanedText;
}