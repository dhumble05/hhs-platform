"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

export type ReviewAiRecommendationResult = {
  success: boolean;
  message: string;
};

type StoredStandardRecommendation = {
  code: string;
  confidence: number;
  reasoning: string;
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

function normalizeStoredRecommendations(
  value: unknown,
): StoredStandardRecommendation[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((item) => {
    if (
      typeof item !== "object" ||
      item === null
    ) {
      return [];
    }

    const candidate = item as Record<string, unknown>;

    const code =
      typeof candidate.code === "string"
        ? candidate.code.trim()
        : "";

    const confidence = Number(candidate.confidence);

    const reasoning =
      typeof candidate.reasoning === "string"
        ? candidate.reasoning.trim()
        : "";

    if (!code) {
      return [];
    }

    return [
      {
        code,
        confidence: Number.isFinite(confidence)
          ? Math.min(
              100,
              Math.max(0, Math.round(confidence)),
            )
          : 0,
        reasoning:
          reasoning ||
          "No recommendation reasoning was stored.",
      },
    ];
  });
}

async function getReviewContext(
  evidenceId: string,
  standardCode: string,
) {
  const { userId } = await auth();

  if (!userId) {
    return {
      error: "You must be signed in.",
    } as const;
  }

  const organizationId =
    await getOrganizationId(userId);

  if (!organizationId) {
    return {
      error:
        "No organization is associated with your account.",
    } as const;
  }

  const evidence = await prisma.evidence.findFirst({
    where: {
      id: evidenceId,
      organizationId,
    },
    select: {
      id: true,
      analysisStandardRecommendations: true,
    },
  });

  if (!evidence) {
    return {
      error: "Evidence record not found.",
    } as const;
  }

  const standard = await prisma.standard.findFirst({
    where: {
      code: standardCode,
      status: "Active",
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
      code: true,
    },
  });

  if (!standard) {
    return {
      error: "The recommended standard was not found.",
    } as const;
  }

  const recommendations =
    normalizeStoredRecommendations(
      evidence.analysisStandardRecommendations,
    );

  const recommendation = recommendations.find(
    (item) => item.code === standard.code,
  );

  if (!recommendation) {
    return {
      error:
        "The AI recommendation could not be found.",
    } as const;
  }

  return {
    userId,
    organizationId,
    evidence,
    standard,
    recommendation,
  } as const;
}

export async function approveAiRecommendation(
  evidenceId: string,
  standardCode: string,
): Promise<ReviewAiRecommendationResult> {
  try {
    const context = await getReviewContext(
      evidenceId,
      standardCode,
    );

    if ("error" in context) {
      return {
        success: false,
message:
  context.error ?? "The review request could not be completed.",
      };
    }

    await prisma.evidenceStandard.upsert({
      where: {
        evidenceId_standardId: {
          evidenceId: context.evidence.id,
          standardId: context.standard.id,
        },
      },
      create: {
        evidenceId: context.evidence.id,
        standardId: context.standard.id,
        mappingSource: "AI",
        confidence:
          context.recommendation.confidence,
        notes: context.recommendation.reasoning,
        isVerified: true,
        verifiedBy: context.userId,
        verifiedAt: new Date(),
      },
      update: {
        mappingSource: "AI",
        confidence:
          context.recommendation.confidence,
        notes: context.recommendation.reasoning,
        isVerified: true,
        verifiedBy: context.userId,
        verifiedAt: new Date(),
      },
    });

    revalidateEvidencePages(
  context.evidence.id,
  context.standard.code,
);

    return {
      success: true,
      message:
        "The AI recommendation was approved and verified.",
    };
  } catch (error) {
    console.error(
      "APPROVE AI RECOMMENDATION ERROR",
      error,
    );

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "The recommendation could not be approved.",
    };
  }
}

export async function rejectAiRecommendation(
  evidenceId: string,
  standardCode: string,
): Promise<ReviewAiRecommendationResult> {
  try {
    const context = await getReviewContext(
      evidenceId,
      standardCode,
    );

    if ("error" in context) {
      return {
        success: false,
message:
  context.error ?? "The review request could not be completed.",
      };
    }

    await prisma.evidenceStandard.upsert({
      where: {
        evidenceId_standardId: {
          evidenceId: context.evidence.id,
          standardId: context.standard.id,
        },
      },
      create: {
        evidenceId: context.evidence.id,
        standardId: context.standard.id,
        mappingSource: "AI-Rejected",
        confidence:
          context.recommendation.confidence,
        notes: context.recommendation.reasoning,
        isVerified: false,
        verifiedBy: context.userId,
        verifiedAt: new Date(),
      },
      update: {
        mappingSource: "AI-Rejected",
        confidence:
          context.recommendation.confidence,
        notes: context.recommendation.reasoning,
        isVerified: false,
        verifiedBy: context.userId,
        verifiedAt: new Date(),
      },
    });

    revalidateEvidencePages(
  context.evidence.id,
  context.standard.code,
);

    return {
      success: true,
      message: "The AI recommendation was rejected.",
    };
  } catch (error) {
    console.error(
      "REJECT AI RECOMMENDATION ERROR",
      error,
    );

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "The recommendation could not be rejected.",
    };
  }
}

function revalidateEvidencePages(
  evidenceId: string,
  standardCode: string,
) {
  revalidatePath("/platform");
  revalidatePath("/platform/evidence");
  revalidatePath(`/platform/evidence/${evidenceId}`);

  revalidatePath("/platform/standards");
  revalidatePath("/platform/standards/explorer");
  revalidatePath(`/platform/standards/${standardCode}`);
}