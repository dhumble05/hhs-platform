import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import AiRecommendationReview from "@/components/platform/AiRecommendationReview";
import RunEvidenceAnalysisButton from "@/components/platform/RunEvidenceAnalysisButton";
import { prisma } from "@/lib/prisma";

type EvidenceDetailsPageProps = {
  params: Promise<{
    evidenceId: string;
  }>;
};

type StoredStandardRecommendation = {
  code: string;
  confidence: number;
  reasoning: string;
};

function normalizeStandardRecommendations(
  value: unknown,
): StoredStandardRecommendation[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((item) => {
    if (typeof item !== "object" || item === null) {
      return [];
    }

    const candidate = item as Record<string, unknown>;

    const code =
      typeof candidate.code === "string" ? candidate.code.trim() : "";

    const confidence = Number(candidate.confidence);

    const reasoning =
      typeof candidate.reasoning === "string" ? candidate.reasoning.trim() : "";

    if (!code) {
      return [];
    }

    return [
      {
        code,
        confidence: Number.isFinite(confidence)
          ? Math.min(100, Math.max(0, Math.round(confidence)))
          : 0,
        reasoning:
          reasoning || "No explanation was stored for this recommendation.",
      },
    ];
  });
}


function normalizeStoredStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item): item is string => typeof item === "string",
  );
}

function normalizePercentage(value: number | null) {
  if (typeof value !== "number") {
    return 0;
  }

  return Math.round(value <= 1 ? value * 100 : value);
}

function formatDate(date: Date | null) {
  if (!date) {
    return "Not documented";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatMonth(month: number | null) {
  if (!month || month < 1 || month > 12) {
    return null;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(new Date(2026, month - 1, 1));
}

function getStatusClasses(status: string) {
  const normalized = status.toLowerCase();

  if (
    normalized === "verified" ||
    normalized === "approved" ||
    normalized === "active"
  ) {
    return "bg-emerald-100 text-emerald-800";
  }

  if (normalized === "pending" || normalized === "in review") {
    return "bg-amber-100 text-amber-800";
  }

  if (normalized === "expired") {
    return "bg-red-100 text-red-800";
  }

  return "bg-slate-100 text-slate-700";
}

function getAnalysisStatusClasses(status: string) {
  if (status === "Completed") {
    return "bg-emerald-100 text-emerald-800";
  }

  if (status === "Failed") {
    return "bg-red-100 text-red-800";
  }

  if (status === "Processing") {
    return "bg-blue-100 text-blue-800";
  }

  return "bg-amber-100 text-amber-800";
}

function getRiskClasses(riskLevel: string) {
  if (riskLevel === "Critical") {
    return "bg-red-100 text-red-800";
  }

  if (riskLevel === "High") {
    return "bg-orange-100 text-orange-800";
  }

  if (riskLevel === "Moderate") {
    return "bg-amber-100 text-amber-800";
  }

  if (riskLevel === "Low") {
    return "bg-emerald-100 text-emerald-800";
  }

  return "bg-slate-100 text-slate-700";
}

function getEvidenceStrengthClasses(strength: string | null) {
  if (strength === "Complete") {
    return "bg-emerald-100 text-emerald-800";
  }

  if (strength === "Partial") {
    return "bg-amber-100 text-amber-800";
  }

  if (strength === "Insufficient") {
    return "bg-red-100 text-red-800";
  }

  return "bg-slate-100 text-slate-700";
}

function getScoreStyles(score: number) {
  if (score >= 90) {
    return {
      text: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-800",
      bar: "bg-emerald-500",
      label: "Survey Ready",
    };
  }

  if (score >= 75) {
    return {
      text: "text-amber-700",
      badge: "bg-amber-100 text-amber-800",
      bar: "bg-amber-500",
      label: "Needs Attention",
    };
  }

  if (score > 0) {
    return {
      text: "text-red-700",
      badge: "bg-red-100 text-red-800",
      bar: "bg-red-500",
      label: "At Risk",
    };
  }

  return {
    text: "text-slate-500",
    badge: "bg-slate-100 text-slate-700",
    bar: "bg-slate-300",
    label: "Not Assessed",
  };
}

function getConfidenceLabel(score: number) {
  if (score >= 90) {
    return "High";
  }

  if (score >= 70) {
    return "Medium";
  }

  return "Low";
}

function getExpirationState(expirationDate: Date | null) {
  if (!expirationDate) {
    return {
      label: "No expiration",
      classes: "text-slate-700",
      badge: null,
    };
  }

  const now = new Date();
  const sixtyDaysFromNow = new Date();

  sixtyDaysFromNow.setDate(sixtyDaysFromNow.getDate() + 60);

  if (expirationDate < now) {
    return {
      label: formatDate(expirationDate),
      classes: "text-red-700",
      badge: "Expired",
    };
  }

  if (expirationDate <= sixtyDaysFromNow) {
    return {
      label: formatDate(expirationDate),
      classes: "text-amber-700",
      badge: "Expiring Soon",
    };
  }

  return {
    label: formatDate(expirationDate),
    classes: "text-slate-700",
    badge: null,
  };
}

function buildCompliancePeriod({
  complianceYear,
  complianceMonth,
  complianceQuarter,
  periodStart,
  periodEnd,
}: {
  complianceYear: number | null;
  complianceMonth: number | null;
  complianceQuarter: number | null;
  periodStart: Date | null;
  periodEnd: Date | null;
}) {
  if (periodStart || periodEnd) {
    const start = periodStart ? formatDate(periodStart) : "Not documented";

    const end = periodEnd ? formatDate(periodEnd) : "Not documented";

    return `${start} – ${end}`;
  }

  if (complianceQuarter && complianceYear) {
    return `Q${complianceQuarter} ${complianceYear}`;
  }

  if (complianceMonth && complianceYear) {
    return `${formatMonth(complianceMonth)} ${complianceYear}`;
  }

  if (complianceYear) {
    return String(complianceYear);
  }

  return "Not documented";
}

function getFileLabel(fileType: string | null) {
  if (!fileType) {
    return "FILE";
  }

  const normalized = fileType.toLowerCase();

  if (normalized.includes("pdf")) {
    return "PDF";
  }

  if (normalized.includes("word") || normalized.includes("document")) {
    return "DOC";
  }

  if (
    normalized.includes("sheet") ||
    normalized.includes("excel") ||
    normalized.includes("csv")
  ) {
    return "XLS";
  }

  if (normalized.includes("image")) {
    return "IMG";
  }

  return fileType.split("/").pop()?.slice(0, 4).toUpperCase() ?? "FILE";
}

export default async function EvidenceDetailsPage({
  params,
}: EvidenceDetailsPageProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const { evidenceId } = await params;

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
      name: true,
    },
  });

  const organizationId = databaseUser?.organizationId ?? ownedOrganization?.id;

  if (!organizationId) {
    redirect("/platform/organization");
  }

  const organization =
    ownedOrganization?.id === organizationId
      ? ownedOrganization
      : await prisma.organization.findUnique({
          where: {
            id: organizationId,
          },
          select: {
            id: true,
            name: true,
          },
        });

  if (!organization) {
    redirect("/platform/organization");
  }

  const evidence = await prisma.evidence.findFirst({
    where: {
      id: evidenceId,
      organizationId,
    },
    include: {
      facility: {
        select: {
          id: true,
          name: true,
          primaryAccreditor: true,
        },
      },
      operationalTopicMappings: {
        select: {
          id: true,
          mappingSource: true,
          confidence: true,
          notes: true,
          isVerified: true,
          verifiedBy: true,
          verifiedAt: true,
          operationalTopic: {
            select: {
              id: true,
              code: true,
              slug: true,
              name: true,
              description: true,
              domain: true,
              category: true,
              riskLevel: true,
              evidenceFrequency: true,
              evidenceRetention: true,
              responsibleRole: true,
            },
          },
        },
        orderBy: {
          createdAt: "asc",
        },
      },
      standardMappings: {
        select: {
          id: true,
          standardId: true,
          mappingSource: true,
          confidence: true,
          notes: true,
          evidenceStrength: true,
          mappedRequirements: true,
          missingRequirements: true,
          surveyImpact: true,
          isVerified: true,
          verifiedBy: true,
          verifiedAt: true,
          standard: {
            select: {
              id: true,
              accreditor: true,
              chapter: true,
              code: true,
              slug: true,
              title: true,
              description: true,
              requirement: true,
              riskLevel: true,
              priority: true,
            },
          },
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!evidence) {
    redirect("/platform/evidence");
  }

  const standards = await prisma.standard.findMany({
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
    },
    select: {
      id: true,
      accreditor: true,
      chapter: true,
      code: true,
      title: true,
      description: true,
      requirement: true,
      riskLevel: true,
      priority: true,
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

  const standardRecommendations = normalizeStandardRecommendations(
    evidence.analysisStandardRecommendations,
  );

  const recommendationByCode = new Map(
    standardRecommendations.map((recommendation) => [
      recommendation.code,
      recommendation,
    ]),
  );

  const mappingByStandardId = new Map(
    evidence.standardMappings.map((mapping) => [mapping.standardId, mapping]),
  );

  const mappedStandards = evidence.standardMappings.filter(
    (mapping) => mapping.mappingSource !== "AI-Rejected",
  );

  const verifiedStandards = mappedStandards.filter(
    (mapping) => mapping.isVerified,
  );

  const mappedPrograms = evidence.operationalTopicMappings.filter(
    (mapping) => mapping.mappingSource !== "AI-Rejected",
  );

  const verifiedPrograms = mappedPrograms.filter(
    (mapping) => mapping.isVerified,
  );

  const confidence = normalizePercentage(evidence.analysisConfidence);

  const evidenceQuality = normalizePercentage(evidence.analysisEvidenceQuality);

  const surveyReadiness = normalizePercentage(evidence.analysisSurveyReadiness);

  const readinessStyles = getScoreStyles(surveyReadiness);

  const qualityStyles = getScoreStyles(evidenceQuality);

  const analysis = {
    documentType:
      evidence.analysisDocumentType ?? evidence.evidenceType ?? "Unknown",

    department: evidence.analysisDepartment ?? "Unknown",

    confidence,

    evidenceQuality,

    surveyReadiness,

    riskLevel: evidence.analysisRiskLevel ?? "Unrated",

    strengths: evidence.analysisStrengths ?? [],

    missingEvidence: evidence.analysisMissingEvidence ?? [],

    recommendations: evidence.analysisRecommendations ?? [],

    executiveSummary:
      evidence.analysisExecutiveSummary ??
      evidence.analysisSummary ??
      "No executive summary is available.",

    recommendedStandards: evidence.analysisRecommendedStandards ?? [],
  };

  const hasExtractedText = Boolean(evidence.extractedText?.trim());

  const analysisCompleted = evidence.analysisStatus === "Completed";

  const expirationState = getExpirationState(evidence.expirationDate);

  const compliancePeriod = buildCompliancePeriod({
    complianceYear: evidence.complianceYear,
    complianceMonth: evidence.complianceMonth,
    complianceQuarter: evidence.complianceQuarter,
    periodStart: evidence.periodStart,
    periodEnd: evidence.periodEnd,
  });

  const primaryProgram = mappedPrograms[0]?.operationalTopic;

  return (
    <main className="mx-auto w-full max-w-[1600px] space-y-8">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
      >
        <Link
          href="/platform"
          className="font-semibold transition hover:text-teal-700"
        >
          Command Center
        </Link>

        <span aria-hidden="true">/</span>

        <Link
          href="/platform/evidence"
          className="font-semibold transition hover:text-teal-700"
        >
          Evidence Library
        </Link>

        <span aria-hidden="true">/</span>

        <span className="max-w-[420px] truncate font-semibold text-slate-800">
          {evidence.title}
        </span>
      </nav>

      <header className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
        <div className="flex flex-col gap-7 p-7 lg:flex-row lg:items-start lg:justify-between lg:p-9">
          <div className="flex min-w-0 items-start gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal-400 text-sm font-black text-slate-950">
              {getFileLabel(evidence.fileType)}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClasses(
                    evidence.status,
                  )}`}
                >
                  {evidence.status}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${getAnalysisStatusClasses(
                    evidence.analysisStatus,
                  )}`}
                >
                  AI {evidence.analysisStatus}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${getRiskClasses(
                    analysis.riskLevel,
                  )}`}
                >
                  {analysis.riskLevel} Risk
                </span>

                {evidence.isRecurring ? (
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">
                    Recurring Evidence
                  </span>
                ) : null}
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight lg:text-4xl">
                {evidence.title}
              </h1>

              <p className="mt-3 max-w-4xl leading-7 text-slate-300">
                {evidence.description ??
                  "AI-supported compliance review, operational-program mapping, and accreditation standards analysis."}
              </p>

              <p className="mt-4 break-all text-sm text-slate-400">
                {evidence.fileName}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3 lg:flex-col">
            <RunEvidenceAnalysisButton
              evidenceId={evidence.id}
              analysisStatus={evidence.analysisStatus}
              hasExtractedText={hasExtractedText}
            />

            {evidence.fileUrl ? (
              <a
                href={evidence.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Open Original File
              </a>
            ) : null}
          </div>
        </div>

        <div className="grid border-t border-white/10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="border-white/10 p-5 sm:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Facility
            </p>

            <p className="mt-2 font-bold text-white">
              {evidence.facility?.name ?? "Organization-wide"}
            </p>
          </div>

          <div className="border-white/10 p-5 xl:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Operational Program
            </p>

            <p className="mt-2 font-bold text-white">
              {primaryProgram?.name ?? "Not mapped"}
            </p>
          </div>

          <div className="border-t border-white/10 p-5 sm:border-r xl:border-t-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Compliance Period
            </p>

            <p className="mt-2 font-bold text-white">{compliancePeriod}</p>
          </div>

          <div className="border-t border-white/10 p-5 xl:border-t-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Uploaded
            </p>

            <p className="mt-2 font-bold text-white">
              {formatDate(evidence.uploadedAt)}
            </p>
          </div>
        </div>
      </header>

      {evidence.analysisStatus === "Failed" ? (
        <section className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
          <p className="font-bold text-red-900">Compliance analysis failed</p>

          <p className="mt-1 text-sm leading-6 text-red-700">
            {evidence.analysisError ?? "An unknown analysis error occurred."}
          </p>
        </section>
      ) : null}

      {evidence.analysisStatus === "Pending" ? (
        <section className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="font-bold text-amber-900">
            This document has not been analyzed
          </p>

          <p className="mt-1 text-sm leading-6 text-amber-700">
            Run Compliance Analysis to identify the document type, evaluate
            survey readiness, detect missing evidence, and recommend programs
            and standards.
          </p>
        </section>
      ) : null}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 xl:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Survey Readiness
              </p>

              <p className={`mt-3 text-5xl font-bold ${readinessStyles.text}`}>
                {surveyReadiness}%
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${readinessStyles.badge}`}
            >
              {readinessStyles.label}
            </span>
          </div>

          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full ${readinessStyles.bar}`}
              style={{
                width: `${Math.min(surveyReadiness, 100)}%`,
              }}
            />
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">AI Confidence</p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {confidence}%
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {getConfidenceLabel(confidence)} confidence
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Evidence Quality
          </p>

          <p className={`mt-3 text-3xl font-bold ${qualityStyles.text}`}>
            {evidenceQuality}%
          </p>

          <p className="mt-2 text-sm text-slate-500">Document completeness</p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Programs</p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {mappedPrograms.length}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {verifiedPrograms.length} verified
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Standards</p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {mappedStandards.length}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {verifiedStandards.length} verified
          </p>
        </article>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
                AI Evidence Intelligence
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Executive summary
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                HHS assessment of document quality, purpose, and compliance
                value.
              </p>
            </div>

            {analysisCompleted ? (
              <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                Analysis Complete
              </span>
            ) : null}
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            {analysis.executiveSummary}
          </p>
        </section>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
            Record Status
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Evidence lifecycle
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-500">
                Evidence status
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClasses(
                  evidence.status,
                )}`}
              >
                {evidence.status}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-500">
                Analysis status
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${getAnalysisStatusClasses(
                  evidence.analysisStatus,
                )}`}
              >
                {evidence.analysisStatus}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-sm font-semibold text-slate-500">
                Expiration
              </span>

              <div className="text-right">
                <p className={`text-sm font-bold ${expirationState.classes}`}>
                  {expirationState.label}
                </p>

                {expirationState.badge ? (
                  <p className="mt-1 text-xs font-bold text-amber-700">
                    {expirationState.badge}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-sm font-semibold text-slate-500">
                Document date
              </span>

              <span className="text-right text-sm font-bold text-slate-800">
                {formatDate(evidence.documentDate)}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-sm font-semibold text-slate-500">
                Last updated
              </span>

              <span className="text-right text-sm font-bold text-slate-800">
                {formatDate(evidence.updatedAt)}
              </span>
            </div>
          </div>
        </aside>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
            Evidence Metadata
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Document information
          </h2>
        </div>

        <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">Facility</p>

            <p className="mt-1 font-semibold text-slate-900">
              {evidence.facility?.name ?? "Organization-wide"}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">
              Primary Accreditor
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {evidence.facility?.primaryAccreditor ?? "Not specified"}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">Category</p>

            <p className="mt-1 font-semibold text-slate-900">
              {evidence.category ?? "Uncategorized"}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">
              Document Type
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {analysis.documentType}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">Department</p>

            <p className="mt-1 font-semibold text-slate-900">
              {analysis.department}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">
              Evidence Type
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {evidence.evidenceType ?? "Not specified"}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">Frequency</p>

            <p className="mt-1 font-semibold text-slate-900">
              {evidence.frequency ?? "Not specified"}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">
              Compliance Period
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {compliancePeriod}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">Owner</p>

            <p className="mt-1 font-semibold text-slate-900">
              {evidence.ownerName ?? "Unassigned"}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">Performed By</p>

            <p className="mt-1 font-semibold text-slate-900">
              {evidence.performedBy ?? "Not documented"}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">
              Service Provider
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {evidence.serviceProvider ?? "Not documented"}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">
              Recurring Record
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {evidence.isRecurring ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Operational Mapping
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Operational programs
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Programs this evidence supports within the organization’s
              compliance operations.
            </p>
          </div>

          <span className="text-sm font-semibold text-slate-500">
            {mappedPrograms.length} mapped
          </span>
        </div>

        {evidence.operationalTopicMappings.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 px-6 py-10 text-center">
            <p className="font-bold text-slate-800">
              No operational programs mapped
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Run Compliance Analysis to identify the programs supported by this
              evidence.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {evidence.operationalTopicMappings.map((mapping) => {
              const topic = mapping.operationalTopic;

              const mappingConfidence = normalizePercentage(mapping.confidence);

              const isRejected = mapping.mappingSource === "AI-Rejected";

              return (
                <article
                  key={mapping.id}
                  className={`rounded-2xl border p-5 ${
                    isRejected
                      ? "border-red-200 bg-red-50/40"
                      : mapping.isVerified
                        ? "border-emerald-200 bg-emerald-50/40"
                        : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-slate-950 px-2.5 py-1 text-xs font-bold text-white">
                          {topic.code}
                        </span>

                        {mapping.isVerified ? (
                          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
                            Verified
                          </span>
                        ) : null}

                        {isRejected ? (
                          <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-800">
                            Rejected
                          </span>
                        ) : null}

                        {!mapping.isVerified && !isRejected ? (
                          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
                            Awaiting Review
                          </span>
                        ) : null}
                      </div>

                      <Link
                        href={`/platform/programs/${topic.slug}`}
                        className="mt-3 block text-lg font-bold text-slate-950 transition hover:text-teal-700"
                      >
                        {topic.name}
                      </Link>

                      <p className="mt-1 text-sm text-slate-500">
                        {topic.domain ?? "Operational Program"}
                        {topic.category ? ` • ${topic.category}` : ""}
                      </p>

                      {topic.description ? (
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                          {topic.description}
                        </p>
                      ) : null}

                      {mapping.notes ? (
                        <div className="mt-4 rounded-xl bg-slate-50 p-4">
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                            Mapping Notes
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {mapping.notes}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div className="shrink-0 text-left sm:text-right">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                        Confidence
                      </p>

                      <p className="mt-1 text-xl font-bold text-slate-950">
                        {mappingConfidence > 0 ? `${mappingConfidence}%` : "—"}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {mapping.mappingSource}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-950">Strengths</h2>

            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
              {analysis.strengths.length}
            </span>
          </div>

          {analysis.strengths.length === 0 ? (
            <p className="mt-4 text-sm leading-7 text-slate-500">
              No strengths were identified.
            </p>
          ) : (
            <ul className="mt-5 space-y-3">
              {analysis.strengths.map((strength, index) => (
                <li
                  key={`${strength}-${index}`}
                  className="flex gap-3 rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900"
                >
                  <span className="font-black text-emerald-700">✓</span>

                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-950">
              Missing Evidence
            </h2>

            <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-800">
              {analysis.missingEvidence.length}
            </span>
          </div>

          {analysis.missingEvidence.length === 0 ? (
            <div className="mt-4 rounded-2xl bg-emerald-50 p-5">
              <p className="font-semibold text-emerald-800">
                No missing evidence identified
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-700">
                HHS has not identified documentation gaps in this record.
              </p>
            </div>
          ) : (
            <ul className="mt-5 space-y-3">
              {analysis.missingEvidence.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="flex gap-3 rounded-2xl bg-red-50 p-4 text-sm leading-6 text-red-900"
                >
                  <span className="font-black text-red-700">!</span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-950">
              Recommendations
            </h2>

            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-800">
              {analysis.recommendations.length}
            </span>
          </div>

          {analysis.recommendations.length === 0 ? (
            <p className="mt-4 text-sm leading-7 text-slate-500">
              No recommendations were generated.
            </p>
          ) : (
            <ul className="mt-5 space-y-3">
              {analysis.recommendations.map((recommendation, index) => (
                <li
                  key={`${recommendation}-${index}`}
                  className="flex gap-3 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-900"
                >
                  <span className="font-black text-blue-700">→</span>

                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Regulatory Crosswalk
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Standards mapping
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {mappedStandards.length} mapped from {standards.length} available
              standards.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded-full bg-teal-100 px-3 py-1 text-teal-800">
              AI Recommended
            </span>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
              Verified
            </span>

            <span className="rounded-full bg-red-100 px-3 py-1 text-red-800">
              Rejected
            </span>
          </div>
        </div>

        {standards.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 px-6 py-10 text-center">
            <p className="font-bold text-slate-800">
              No active standards are available
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Add standards to the standards library before running evidence
              mapping.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {standards.map((standard) => {
              const recommendation = recommendationByCode.get(standard.code);

              const mapping = mappingByStandardId.get(standard.id);

              const isVerified = Boolean(mapping?.isVerified);

              const isRejected = mapping?.mappingSource === "AI-Rejected";

              const isAiMapped =
                mapping?.mappingSource === "AI" && !mapping.isVerified;

              const isMapped = Boolean(mapping) && !isRejected;

              const reviewStatus: "Pending" | "Approved" | "Rejected" =
                isVerified ? "Approved" : isRejected ? "Rejected" : "Pending";

              const mappingConfidence = normalizePercentage(
                mapping?.confidence ?? null,
              );

              const mappedRequirements =
                normalizeStoredStringArray(
                  mapping?.mappedRequirements,
                );

              const missingRequirements =
                normalizeStoredStringArray(
                  mapping?.missingRequirements,
                );

              return (
                <article
                  key={standard.id}
                  className={`rounded-2xl border p-5 ${
                    recommendation
                      ? "border-teal-200 bg-teal-50/40"
                      : isVerified
                        ? "border-emerald-200 bg-emerald-50/30"
                        : isRejected
                          ? "border-red-200 bg-red-50/30"
                          : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-slate-950 px-2.5 py-1 text-xs font-bold text-white">
                          {standard.accreditor}
                        </span>

                        <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          {standard.code}
                        </span>

                        {recommendation ? (
                          <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                            AI {recommendation.confidence}%
                          </span>
                        ) : null}

                        {isAiMapped ? (
                          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                            Awaiting Review
                          </span>
                        ) : null}

                        {isVerified ? (
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                            Verified
                          </span>
                        ) : null}

                        {isRejected ? (
                          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-800">
                            Rejected
                          </span>
                        ) : null}

                        {!recommendation && !isMapped && !isRejected ? (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                            Not Mapped
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-3 font-bold text-slate-950">
                        {standard.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        {standard.chapter ?? "General Requirement"}
                        {standard.riskLevel
                          ? ` • ${standard.riskLevel} Risk`
                          : ""}
                      </p>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                        {standard.requirement ??
                          standard.description ??
                          "Requirement details are not yet available."}
                      </p>

                      {recommendation ? (
                        <div className="mt-4 rounded-xl border border-teal-100 bg-white p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
                            Why HHS recommends this standard
                          </p>

                          <p className="mt-2 leading-6 text-slate-600">
                            {recommendation.reasoning}
                          </p>
                        </div>
                      ) : mapping?.notes ? (
                        <div className="mt-4 rounded-xl bg-slate-50 p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                            Mapping Notes
                          </p>

                          <p className="mt-2 leading-6 text-slate-600">
                            {mapping.notes}
                          </p>
                        </div>
                      ) : null}

                      {mapping &&
                      (mapping.evidenceStrength ||
                        mappedRequirements.length > 0 ||
                        missingRequirements.length > 0 ||
                        mapping.surveyImpact) ? (
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                              Standards Intelligence
                            </p>

                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${getEvidenceStrengthClasses(
                                mapping.evidenceStrength,
                              )}`}
                            >
                              {mapping.evidenceStrength ?? "Not Assessed"}
                            </span>
                          </div>

                          <div className="mt-5 grid gap-5 lg:grid-cols-2">
                            <div>
                              <p className="text-sm font-bold text-slate-900">
                                Mapped Requirements
                              </p>

                              {mappedRequirements.length === 0 ? (
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                  No specific requirements were confirmed by
                                  this document.
                                </p>
                              ) : (
                                <ul className="mt-3 space-y-2">
                                  {mappedRequirements.map(
                                    (requirement, index) => (
                                      <li
                                        key={`${requirement}-${index}`}
                                        className="flex gap-2 text-sm leading-6 text-slate-700"
                                      >
                                        <span className="font-black text-emerald-700">
                                          ✓
                                        </span>
                                        <span>{requirement}</span>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              )}
                            </div>

                            <div>
                              <p className="text-sm font-bold text-slate-900">
                                Missing Requirements
                              </p>

                              {missingRequirements.length === 0 ? (
                                <p className="mt-2 text-sm leading-6 text-emerald-700">
                                  No missing requirements were identified for
                                  this evidence.
                                </p>
                              ) : (
                                <ul className="mt-3 space-y-2">
                                  {missingRequirements.map(
                                    (requirement, index) => (
                                      <li
                                        key={`${requirement}-${index}`}
                                        className="flex gap-2 text-sm leading-6 text-slate-700"
                                      >
                                        <span className="font-black text-amber-700">
                                          !
                                        </span>
                                        <span>{requirement}</span>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              )}
                            </div>
                          </div>

                          {mapping.surveyImpact ? (
                            <div className="mt-5 border-t border-slate-200 pt-4">
                              <p className="text-sm font-bold text-slate-900">
                                Survey Impact
                              </p>

                              <p className="mt-2 text-sm leading-6 text-slate-600">
                                {mapping.surveyImpact}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                      {mappingConfidence > 0 ? (
                        <div className="text-left lg:text-right">
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                            Mapping Confidence
                          </p>

                          <p className="mt-1 text-lg font-bold text-slate-950">
                            {mappingConfidence}%
                          </p>
                        </div>
                      ) : null}

                      {recommendation ? (
                        <AiRecommendationReview
                          evidenceId={evidence.id}
                          standardCode={standard.code}
                          status={reviewStatus}
                        />
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-teal-50 via-white to-slate-50 p-7 shadow-sm ring-1 ring-teal-200 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Drag. Drop. Survey Ready.
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              This evidence is part of the live survey record.
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              HHS uses this record to support operational programs, regulatory
              standards, readiness scoring, and documentation-gap detection
              across {organization.name}.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {primaryProgram ? (
              <Link
                href={`/platform/programs/${primaryProgram.slug}`}
                className="inline-flex min-h-12 w-fit items-center justify-center rounded-xl bg-teal-700 px-6 py-3 font-bold text-white transition hover:bg-teal-800"
              >
                Open {primaryProgram.name}
              </Link>
            ) : null}

            <Link
              href="/platform/evidence"
              className="inline-flex min-h-12 w-fit items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              Return to Evidence Library
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}