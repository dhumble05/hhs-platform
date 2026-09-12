"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { analyzeEvidence } from "@/lib/ai/analyzeEvidence";
import { prisma } from "@/lib/prisma";

const AUTOMATIC_MAPPING_THRESHOLD = 90;

export type MapEvidenceResult = {
  success: boolean;
  error?: string;
};

export type RunEvidenceAnalysisResult = {
  success: boolean;
  message: string;
};

async function getOrganizationId(
  userId: string,
): Promise<string | null> {
  const databaseUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      organizationId: true,
    },
  });

  if (databaseUser?.organizationId) {
    return databaseUser.organizationId;
  }

  const ownedOrganization =
    await prisma.organization.findUnique({
      where: {
        ownerClerkUserId: userId,
      },
      select: {
        id: true,
      },
    });

  return ownedOrganization?.id ?? null;
}

export async function mapEvidenceToStandards(
  evidenceId: string,
  standardIds: string[],
): Promise<MapEvidenceResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        error: "You must be signed in to map evidence.",
      };
    }

    const organizationId =
      await getOrganizationId(userId);

    if (!organizationId) {
      return {
        success: false,
        error: "Organization not found.",
      };
    }

    const evidence = await prisma.evidence.findFirst({
      where: {
        id: evidenceId,
        organizationId,
      },
      select: {
        id: true,
      },
    });

    if (!evidence) {
      return {
        success: false,
        error: "Evidence record not found.",
      };
    }

    const uniqueStandardIds = Array.from(
      new Set(standardIds),
    );

    if (uniqueStandardIds.length > 0) {
      const validStandards =
        await prisma.standard.findMany({
          where: {
            id: {
              in: uniqueStandardIds,
            },
            OR: [
              {
                organizationId: null,
              },
              {
                organizationId,
              },
            ],
          },
          select: {
            id: true,
          },
        });

      if (
        validStandards.length !==
        uniqueStandardIds.length
      ) {
        return {
          success: false,
          error:
            "One or more selected standards are invalid.",
        };
      }
    }

    await prisma.$transaction(
      async (transaction) => {
        await transaction.evidenceStandard.deleteMany({
          where: {
            evidenceId,
            mappingSource: "Manual",
          },
        });

        for (const standardId of uniqueStandardIds) {
          await transaction.evidenceStandard.upsert({
            where: {
              evidenceId_standardId: {
                evidenceId,
                standardId,
              },
            },
            create: {
              evidenceId,
              standardId,
              mappingSource: "Manual",
              isVerified: true,
              verifiedBy: userId,
              verifiedAt: new Date(),
            },
            update: {
              mappingSource: "Manual",
              isVerified: true,
              verifiedBy: userId,
              verifiedAt: new Date(),
            },
          });
        }
      },
    );

    revalidateEvidencePages(evidenceId);

    return {
      success: true,
    };
  } catch (error) {
    console.error("MAP EVIDENCE ERROR", error);

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "The evidence mappings could not be saved.",
    };
  }
}

export async function runEvidenceAnalysis(
  evidenceId: string,
): Promise<RunEvidenceAnalysisResult> {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message:
        "You must be signed in to analyze evidence.",
    };
  }

  if (!evidenceId) {
    return {
      success: false,
      message: "Evidence ID is required.",
    };
  }

  const organizationId =
    await getOrganizationId(userId);

  if (!organizationId) {
    return {
      success: false,
      message:
        "No organization is associated with your account.",
    };
  }

  const evidence = await prisma.evidence.findFirst({
    where: {
      id: evidenceId,
      organizationId,
    },
    select: {
      id: true,
      extractedText: true,
      facility: {
        select: {
          primaryAccreditor: true,
        },
      },
    },
  });

  if (!evidence) {
    return {
      success: false,
      message:
        "The evidence record could not be found.",
    };
  }

  const extractedText =
    evidence.extractedText?.trim();

  if (!extractedText) {
    await prisma.evidence.update({
      where: {
        id: evidence.id,
      },
      data: {
        analysisStatus: "Failed",
        analysisError:
          "No extracted document text is available for analysis.",
      },
    });

    revalidateEvidencePages(evidence.id);

    return {
      success: false,
      message:
        "No extracted document text is available. Upload a readable document before running analysis.",
    };
  }

  await prisma.evidence.update({
    where: {
      id: evidence.id,
    },
    data: {
      analysisStatus: "Processing",
      analysisError: null,
    },
  });

  try {
    const primaryAccreditor =
      evidence.facility?.primaryAccreditor?.trim();

    const availableStandards =
      await prisma.standard.findMany({
        where: {
          status: "Active",

          OR: [
            {
              organizationId: null,
            },
            {
              organizationId,
            },
          ],

          ...(primaryAccreditor
            ? {
                accreditor: primaryAccreditor,
              }
            : {}),
        },

        select: {
          id: true,
          code: true,
          accreditor: true,
          title: true,
          chapter: true,
          description: true,
          requirement: true,
        },

        orderBy: [
          {
            accreditor: "asc",
          },
          {
            code: "asc",
          },
        ],
      });

    const availableOperationalTopics =
      await prisma.operationalTopic.findMany({
        where: {
          OR: [
            {
              organizationId: null,
            },
            {
              organizationId,
            },
          ],
          status: "Active",
        },
        select: {
          code: true,
          name: true,
          domain: true,
          category: true,
          description: true,
          aiGuidance: true,
          keywords: true,
          evidenceExamples: true,
        },
      });

    const analysis = await analyzeEvidence(
      extractedText,
      availableStandards.map((standard) => ({
        code: standard.code,
        accreditor: standard.accreditor,
        title: standard.title,
        chapter: standard.chapter,
        description: standard.description,
        requirement: standard.requirement,
      })),
      availableOperationalTopics,
    );

    const recommendationByCode = new Map(
      analysis.standardRecommendations.map(
        (recommendation) => [
          recommendation.code,
          recommendation,
        ],
      ),
    );

    const highConfidenceRecommendations =
      analysis.standardRecommendations.filter(
        (recommendation) =>
          recommendation.confidence >=
          AUTOMATIC_MAPPING_THRESHOLD,
      );

    const highConfidenceCodes = new Set(
      highConfidenceRecommendations.map(
        (recommendation) => recommendation.code,
      ),
    );

    const automaticallyMappedStandards =
      availableStandards.filter((standard) =>
        highConfidenceCodes.has(standard.code),
      );

    await prisma.$transaction(
      async (transaction) => {
        await transaction.evidence.update({
          where: {
            id: evidence.id,
          },
          data: {
            analysisStatus: "Completed",
            analysisError: null,

            analysisDocumentType:
              analysis.documentType,

            analysisDepartment:
              analysis.department,

            analysisConfidence:
              analysis.confidence,

            analysisEvidenceQuality:
              analysis.evidenceQuality,

            analysisSurveyReadiness:
              analysis.surveyReadiness,

            analysisRiskLevel:
              analysis.riskLevel,

            analysisStrengths:
              analysis.strengths,

            analysisMissingEvidence:
              analysis.missingEvidence,

            analysisRecommendations:
              analysis.recommendations,

            analysisRecommendedStandards:
              analysis.recommendedStandards,

            analysisStandardRecommendations:
              analysis.standardRecommendations,

            analysisExecutiveSummary:
              analysis.executiveSummary,

            analysisSummary:
              analysis.executiveSummary,
          },
        });

        /*
         * Remove prior unverified AI mappings before
         * rebuilding the current AI recommendation set.
         *
         * Human-verified and manually selected mappings
         * remain untouched.
         */
        await transaction.evidenceStandard.deleteMany({
          where: {
            evidenceId: evidence.id,
            mappingSource: "AI",
            isVerified: false,
          },
        });

        for (
          const standard of automaticallyMappedStandards
        ) {
          const recommendation =
            recommendationByCode.get(standard.code);

          if (!recommendation) {
            continue;
          }

          const existingMapping =
            await transaction.evidenceStandard.findUnique({
              where: {
                evidenceId_standardId: {
                  evidenceId: evidence.id,
                  standardId: standard.id,
                },
              },
              select: {
                mappingSource: true,
                isVerified: true,
              },
            });

          /*
           * Never overwrite a mapping that has already
           * been verified by a person.
           */
          if (existingMapping?.isVerified) {
            continue;
          }

          await transaction.evidenceStandard.upsert({
            where: {
              evidenceId_standardId: {
                evidenceId: evidence.id,
                standardId: standard.id,
              },
            },

            create: {
              evidenceId: evidence.id,
              standardId: standard.id,
              mappingSource: "AI",
              confidence:
                recommendation.confidence,
              notes: recommendation.reasoning,
              evidenceStrength:
                recommendation.evidenceStrength,
              mappedRequirements:
                recommendation.mappedRequirements,
              missingRequirements:
                recommendation.missingRequirements,
              surveyImpact:
                recommendation.surveyImpact,
              isVerified: false,
            },

            update: {
              mappingSource: "AI",
              confidence:
                recommendation.confidence,
              notes: recommendation.reasoning,
              evidenceStrength:
                recommendation.evidenceStrength,
              mappedRequirements:
                recommendation.mappedRequirements,
              missingRequirements:
                recommendation.missingRequirements,
              surveyImpact:
                recommendation.surveyImpact,
              isVerified: false,
              verifiedBy: null,
              verifiedAt: null,
            },
          });
        }
      },
    );

    revalidateEvidencePages(evidence.id);

    const mappedCount =
      automaticallyMappedStandards.length;

    return {
      success: true,
      message:
        mappedCount === 0
          ? "Compliance analysis completed. No standards met the 90% automatic-mapping threshold."
          : `Compliance analysis completed. ${mappedCount} high-confidence standard${
              mappedCount === 1 ? " was" : "s were"
            } automatically mapped for review.`,
    };
  } catch (error) {
    console.error(
      "RUN EVIDENCE ANALYSIS ERROR",
      error,
    );

    const message =
      error instanceof Error
        ? error.message
        : "An unexpected analysis error occurred.";

    await prisma.evidence.update({
      where: {
        id: evidence.id,
      },
      data: {
        analysisStatus: "Failed",
        analysisError: message,
      },
    });

    revalidateEvidencePages(evidence.id);

    return {
      success: false,
      message,
    };
  }
}

function revalidateEvidencePages(
  evidenceId: string,
) {
  revalidatePath("/platform");
  revalidatePath("/platform/evidence");
  revalidatePath(
    `/platform/evidence/${evidenceId}`,
  );
  revalidatePath("/platform/standards");
}