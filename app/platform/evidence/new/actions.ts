"use server";

import { randomUUID } from "crypto";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { analyzeEvidence } from "@/lib/ai/analyzeEvidence";
import { extractPdfText } from "@/lib/documents/extractPdf";
import { prisma } from "@/lib/prisma";
import { supabaseAdmin } from "@/lib/supabase-admin";

export type SaveEvidenceResult = {
  success: boolean;
  evidenceId?: string;
  error?: string;
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const allowedFileTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

function optionalValue(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return null;
  }

  const cleanedValue = value.trim();
  return cleanedValue || null;
}

function safeFileName(fileName: string) {
  return fileName
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

export async function saveEvidence(
  formData: FormData,
): Promise<SaveEvidenceResult> {
  let uploadedStoragePath: string | null = null;

  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        error: "You must be signed in to add evidence.",
      };
    }

    const databaseUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        organizationId: true,
      },
    });

    const ownedOrganization = await prisma.organization.findUnique({
      where: {
        ownerClerkUserId: userId,
      },
      select: {
        id: true,
      },
    });

    const organizationId =
      databaseUser?.organizationId ?? ownedOrganization?.id;

    if (!organizationId) {
      return {
        success: false,
        error: "Organization not found.",
      };
    }

    const titleValue = formData.get("title");
    const title =
      typeof titleValue === "string" ? titleValue.trim() : "";

    const fileValue = formData.get("file");

    if (!title) {
      return {
        success: false,
        error: "Evidence title is required.",
      };
    }

    if (!(fileValue instanceof File) || fileValue.size === 0) {
      return {
        success: false,
        error: "Choose a file before saving.",
      };
    }

    if (fileValue.size > MAX_FILE_SIZE) {
      return {
        success: false,
        error: "The selected file must be 10 MB or smaller.",
      };
    }

    if (
      fileValue.type &&
      !allowedFileTypes.has(fileValue.type)
    ) {
      return {
        success: false,
        error: "This file type is not supported.",
      };
    }

    const facilityIdValue = formData.get("facilityId");
    const facilityId =
      typeof facilityIdValue === "string" &&
      facilityIdValue.trim()
        ? facilityIdValue.trim()
        : null;

    if (facilityId) {
      const facility = await prisma.facility.findFirst({
        where: {
          id: facilityId,
          organizationId,
        },
        select: {
          id: true,
        },
      });

      if (!facility) {
        return {
          success: false,
          error: "The selected facility is invalid.",
        };
      }
    }

    const storagePath = [
      organizationId,
      new Date().getFullYear().toString(),
      `${randomUUID()}-${safeFileName(fileValue.name)}`,
    ].join("/");

    const fileBuffer = Buffer.from(await fileValue.arrayBuffer());

    let extractedText: string | null = null;
    let analysisStatus = "Pending";
    let analysisError: string | null = null;

    if (fileValue.type === "application/pdf") {
      analysisStatus = "Extracting";

      try {
        extractedText = await extractPdfText(fileBuffer);
        analysisStatus = "Ready";
      } catch (error) {
        analysisStatus = "Extraction Failed";
        analysisError =
          error instanceof Error
            ? error.message
            : "The PDF text could not be extracted.";
      }
    }

    let analysisDocumentType: string | null = null;
    let analysisDepartment: string | null = null;
    let analysisConfidence: number | null = null;
    let analysisRecommendedStandards: string[] = [];
    let analysisMissingEvidence: string[] = [];
    let analysisSummary: string | null = null;

    if (extractedText) {
      analysisStatus = "Analyzing";

      try {
        const analysis = await analyzeEvidence(extractedText);

        analysisDocumentType = analysis.documentType;
        analysisDepartment = analysis.department;
        analysisConfidence = analysis.confidence;
        analysisRecommendedStandards =
          analysis.recommendedStandards;
        analysisMissingEvidence =
          analysis.missingEvidence;
        analysisSummary = analysis.summary;

        analysisStatus = "Complete";
      } catch (error) {
        analysisStatus = "Analysis Failed";
        analysisError =
          error instanceof Error
            ? error.message
            : "AI analysis failed.";
      }
    }

    const { error: uploadError } = await supabaseAdmin.storage
      .from("evidence")
      .upload(storagePath, fileBuffer, {
        contentType:
          fileValue.type || "application/octet-stream",
        upsert: false,
      });

    if (uploadError) {
      console.error("SUPABASE UPLOAD ERROR", uploadError);

      return {
        success: false,
        error: "The document could not be uploaded.",
      };
    }

    uploadedStoragePath = storagePath;

    const expirationDateValue = formData.get("expirationDate");
    const expirationDate =
      typeof expirationDateValue === "string" &&
      expirationDateValue
        ? new Date(`${expirationDateValue}T12:00:00`)
        : null;

    const statusValue = formData.get("status");
    const status =
      typeof statusValue === "string" && statusValue
        ? statusValue
        : "Draft";

    const evidence = await prisma.evidence.create({
      data: {
        title,
        description: optionalValue(formData.get("description")),
        fileName: fileValue.name,
        fileUrl: storagePath,
        fileType:
          fileValue.type || "application/octet-stream",
        fileSize: fileValue.size,

        extractedText,
        analysisStatus,
        analysisError,
        analysisDocumentType,
        analysisDepartment,
        analysisConfidence,
        analysisRecommendedStandards,
        analysisMissingEvidence,
        analysisSummary,

        category: optionalValue(formData.get("category")),
        status,
        ownerName: optionalValue(formData.get("ownerName")),
        expirationDate,

        organization: {
          connect: {
            id: organizationId,
          },
        },

        facility: facilityId
          ? {
              connect: {
                id: facilityId,
              },
            }
          : undefined,
      },
    });

    revalidatePath("/platform");
    revalidatePath("/platform/evidence");

    return {
      success: true,
      evidenceId: evidence.id,
    };
  } catch (error) {
    console.error("SAVE EVIDENCE ERROR", error);

    if (uploadedStoragePath) {
      await supabaseAdmin.storage
        .from("evidence")
        .remove([uploadedStoragePath]);
    }

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "The evidence could not be saved.",
    };
  }
}