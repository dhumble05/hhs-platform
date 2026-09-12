import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

type OperationalProgramPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ReadinessStyle = {
  text: string;
  badge: string;
  bar: string;
  panel: string;
};

function getReadinessLabel(score: number) {
  if (score >= 90) {
    return "Survey Ready";
  }

  if (score >= 75) {
    return "Needs Attention";
  }

  if (score > 0) {
    return "At Risk";
  }

  return "Not Assessed";
}

function getReadinessStyle(score: number): ReadinessStyle {
  if (score >= 90) {
    return {
      text: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-800",
      bar: "bg-emerald-500",
      panel: "border-emerald-200 bg-emerald-50",
    };
  }

  if (score >= 75) {
    return {
      text: "text-amber-700",
      badge: "bg-amber-100 text-amber-800",
      bar: "bg-amber-500",
      panel: "border-amber-200 bg-amber-50",
    };
  }

  if (score > 0) {
    return {
      text: "text-red-700",
      badge: "bg-red-100 text-red-800",
      bar: "bg-red-500",
      panel: "border-red-200 bg-red-50",
    };
  }

  return {
    text: "text-slate-600",
    badge: "bg-slate-100 text-slate-700",
    bar: "bg-slate-300",
    panel: "border-slate-200 bg-slate-50",
  };
}

function getRiskClasses(riskLevel: string | null) {
  if (riskLevel === "Critical") {
    return "bg-red-100 text-red-800";
  }

  if (riskLevel === "High") {
    return "bg-orange-100 text-orange-800";
  }

  if (riskLevel === "Moderate") {
    return "bg-amber-100 text-amber-800";
  }

  return "bg-slate-100 text-slate-700";
}

function getEvidenceStatusClasses(status: string) {
  if (status === "Active" || status === "Approved") {
    return "bg-emerald-100 text-emerald-800";
  }

  if (status === "Expired") {
    return "bg-red-100 text-red-800";
  }

  if (status === "Draft") {
    return "bg-slate-100 text-slate-700";
  }

  return "bg-blue-100 text-blue-800";
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

function formatConfidence(confidence: number | null) {
  if (typeof confidence !== "number") {
    return null;
  }

  const normalized =
    confidence <= 1 ? confidence * 100 : confidence;

  return Math.round(normalized);
}

function getInitials(name: string) {
  const words = name
    .split(" ")
    .map((word) => word.trim())
    .filter(Boolean);

  if (words.length === 0) {
    return "OP";
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words[1][0]}`.toUpperCase();
}

export default async function OperationalProgramPage({
  params,
}: OperationalProgramPageProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const { slug } = await params;

  const databaseUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      organizationId: true,
    },
  });

  const ownedOrganization =
    await prisma.organization.findUnique({
      where: {
        ownerClerkUserId: userId,
      },
      select: {
        id: true,
        name: true,
      },
    });

  const organizationId =
    databaseUser?.organizationId ??
    ownedOrganization?.id;

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

  const operationalTopic =
    await prisma.operationalTopic.findFirst({
      where: {
        slug,
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
        slug: true,
        name: true,
        description: true,
        aiGuidance: true,
        domain: true,
        category: true,
        icon: true,
        color: true,
        riskLevel: true,
        priority: true,
        keywords: true,
        evidenceExamples: true,
        surveyorLooksFor: true,
        commonFindings: true,
        evidenceFrequency: true,
        evidenceRetention: true,
        responsibleRole: true,
        validationMethod: true,
        evidenceMappings: {
          where: {
            evidence: {
              organizationId,
            },
          },
          select: {
            id: true,
            mappingSource: true,
            confidence: true,
            notes: true,
            isVerified: true,
            verifiedBy: true,
            verifiedAt: true,
            createdAt: true,
            evidence: {
              select: {
                id: true,
                title: true,
                description: true,
                fileName: true,
                fileType: true,
                category: true,
                status: true,
                ownerName: true,
                expirationDate: true,
                uploadedAt: true,
                documentDate: true,
                complianceYear: true,
                complianceMonth: true,
                complianceQuarter: true,
                periodStart: true,
                periodEnd: true,
                frequency: true,
                evidenceType: true,
                serviceProvider: true,
                performedBy: true,
                isRecurring: true,
                analysisStatus: true,
                analysisConfidence: true,
                analysisEvidenceQuality: true,
                analysisSurveyReadiness: true,
                analysisRiskLevel: true,
                analysisMissingEvidence: true,
                analysisRecommendations: true,
                analysisExecutiveSummary: true,
                facility: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
                standardMappings: {
                  select: {
                    id: true,
                    isVerified: true,
                    standard: {
                      select: {
                        id: true,
                        code: true,
                        title: true,
                        accreditor: true,
                      },
                    },
                  },
                },
              },
            },
          },
          orderBy: {
            evidence: {
              updatedAt: "desc",
            },
          },
        },
        standardMappings: {
          where: {
            standard: {
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
          },
          select: {
            id: true,
            relationshipType: true,
            notes: true,
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
                surveyorLooksFor: true,
                evidenceExamples: true,
                commonFindings: true,
                evidenceFrequency: true,
                evidenceRetention: true,
                responsibleRole: true,
                validationMethod: true,
                domain: true,
                category: true,
                riskLevel: true,
                priority: true,
              },
            },
          },
          orderBy: {
            standard: {
              priority: "desc",
            },
          },
        },
      },
    });

  if (!operationalTopic) {
    notFound();
  }

  const evidenceMappings =
    operationalTopic.evidenceMappings;

  const evidenceRecords = evidenceMappings.map(
    (mapping) => mapping.evidence,
  );

  const completedEvidence = evidenceRecords.filter(
    (evidence) =>
      evidence.analysisStatus === "Completed",
  );

  const pendingEvidence = evidenceRecords.filter(
    (evidence) =>
      evidence.analysisStatus === "Pending" ||
      evidence.analysisStatus === "Processing",
  );

  const failedEvidence = evidenceRecords.filter(
    (evidence) =>
      evidence.analysisStatus === "Failed",
  );

  const readinessScores = completedEvidence
    .map(
      (evidence) =>
        evidence.analysisSurveyReadiness,
    )
    .filter(
      (score): score is number =>
        typeof score === "number",
    );

  const programReadiness =
    readinessScores.length > 0
      ? Math.round(
          readinessScores.reduce(
            (total, score) => total + score,
            0,
          ) / readinessScores.length,
        )
      : 0;

  const qualityScores = completedEvidence
    .map(
      (evidence) =>
        evidence.analysisEvidenceQuality,
    )
    .filter(
      (score): score is number =>
        typeof score === "number",
    );

  const averageEvidenceQuality =
    qualityScores.length > 0
      ? Math.round(
          qualityScores.reduce(
            (total, score) => total + score,
            0,
          ) / qualityScores.length,
        )
      : 0;

  const confidenceScores = evidenceMappings
    .map((mapping) =>
      formatConfidence(mapping.confidence),
    )
    .filter(
      (score): score is number =>
        typeof score === "number",
    );

  const averageMappingConfidence =
    confidenceScores.length > 0
      ? Math.round(
          confidenceScores.reduce(
            (total, score) => total + score,
            0,
          ) / confidenceScores.length,
        )
      : 0;

  const verifiedEvidenceMappings =
    evidenceMappings.filter(
      (mapping) => mapping.isVerified,
    ).length;

  const totalMissingItems = completedEvidence.reduce(
    (total, evidence) =>
      total +
      evidence.analysisMissingEvidence.length,
    0,
  );

  const highRiskEvidence = completedEvidence.filter(
    (evidence) =>
      evidence.analysisRiskLevel === "High" ||
      evidence.analysisRiskLevel === "Critical",
  );

  const expiredEvidence = evidenceRecords.filter(
    (evidence) =>
      evidence.expirationDate &&
      evidence.expirationDate < new Date(),
  );

  const expiringSoonDate = new Date();
  expiringSoonDate.setDate(
    expiringSoonDate.getDate() + 60,
  );

  const expiringSoonEvidence = evidenceRecords.filter(
    (evidence) =>
      evidence.expirationDate &&
      evidence.expirationDate >= new Date() &&
      evidence.expirationDate <= expiringSoonDate,
  );

  const linkedStandards =
    operationalTopic.standardMappings;

  const verifiedStandardIds = new Set(
    evidenceRecords.flatMap((evidence) =>
      evidence.standardMappings
        .filter((mapping) => mapping.isVerified)
        .map((mapping) => mapping.standard.id),
    ),
  );

  const standardsWithEvidence =
    linkedStandards.filter((mapping) =>
      evidenceRecords.some((evidence) =>
        evidence.standardMappings.some(
          (evidenceMapping) =>
            evidenceMapping.standard.id ===
            mapping.standard.id,
        ),
      ),
    ).length;

  const standardsCoverage =
    linkedStandards.length > 0
      ? Math.round(
          (standardsWithEvidence /
            linkedStandards.length) *
            100,
        )
      : 0;

  const readinessStyle =
    getReadinessStyle(programReadiness);

  const recentEvidence = evidenceMappings.slice(0, 8);

  const missingEvidenceItems = Array.from(
    new Set(
      completedEvidence.flatMap(
        (evidence) =>
          evidence.analysisMissingEvidence,
      ),
    ),
  ).slice(0, 8);

  const recommendations = Array.from(
    new Set(
      completedEvidence.flatMap(
        (evidence) =>
          evidence.analysisRecommendations,
      ),
    ),
  ).slice(0, 8);

  const summaryRecord = completedEvidence.find(
    (evidence) =>
      Boolean(
        evidence.analysisExecutiveSummary?.trim(),
      ),
  );

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

        <span>
          {operationalTopic.domain ??
            "Operational Programs"}
        </span>

        <span aria-hidden="true">/</span>

        <span className="font-semibold text-slate-800">
          {operationalTopic.name}
        </span>
      </nav>

      <header className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
        <div className="grid gap-8 p-7 lg:grid-cols-[1fr_auto] lg:items-center lg:p-9">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-teal-200">
                {operationalTopic.domain ??
                  "Operational Program"}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${getRiskClasses(
                  operationalTopic.riskLevel,
                )}`}
              >
                {operationalTopic.riskLevel ??
                  "Unrated"}{" "}
                Risk
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                {operationalTopic.code}
              </span>
            </div>

            <div className="mt-6 flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal-400 text-lg font-black text-slate-950">
                {operationalTopic.icon?.trim() ||
                  getInitials(
                    operationalTopic.name,
                  )}
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  {operationalTopic.name}
                </h1>

                <p className="mt-3 max-w-4xl leading-7 text-slate-300">
                  {operationalTopic.description ??
                    `Manage evidence, standards, risks, and survey readiness for ${operationalTopic.name}.`}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 lg:flex-col">
            <Link
              href="/platform/evidence/add"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300"
            >
              Upload Evidence
            </Link>

            <Link
              href="/platform/evidence"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Open Evidence Library
            </Link>
          </div>
        </div>

        <div className="grid border-t border-white/10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="border-white/10 p-5 sm:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Responsible Role
            </p>

            <p className="mt-2 font-bold text-white">
              {operationalTopic.responsibleRole ??
                "Not assigned"}
            </p>
          </div>

          <div className="border-white/10 p-5 xl:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Evidence Frequency
            </p>

            <p className="mt-2 font-bold text-white">
              {operationalTopic.evidenceFrequency ??
                "Not established"}
            </p>
          </div>

          <div className="border-t border-white/10 p-5 sm:border-r xl:border-t-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Retention
            </p>

            <p className="mt-2 font-bold text-white">
              {operationalTopic.evidenceRetention ??
                "Not established"}
            </p>
          </div>

          <div className="border-t border-white/10 p-5 xl:border-t-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Validation
            </p>

            <p className="mt-2 font-bold text-white">
              {operationalTopic.validationMethod ??
                "Document review"}
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 xl:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Program Readiness
              </p>

              <p
                className={`mt-3 text-5xl font-bold ${readinessStyle.text}`}
              >
                {programReadiness}%
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${readinessStyle.badge}`}
            >
              {getReadinessLabel(
                programReadiness,
              )}
            </span>
          </div>

          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full ${readinessStyle.bar}`}
              style={{
                width: `${Math.min(
                  programReadiness,
                  100,
                )}%`,
              }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Based on {completedEvidence.length} analyzed{" "}
            {completedEvidence.length === 1
              ? "record"
              : "records"}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Evidence Records
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {evidenceRecords.length}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {verifiedEvidenceMappings} verified
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Standards Coverage
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {standardsCoverage}%
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {standardsWithEvidence} of{" "}
            {linkedStandards.length} supported
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Missing Items
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              totalMissingItems > 0
                ? "text-red-700"
                : "text-emerald-700"
            }`}
          >
            {totalMissingItems}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Across analyzed evidence
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            High-Risk Records
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              highRiskEvidence.length > 0
                ? "text-orange-700"
                : "text-emerald-700"
            }`}
          >
            {highRiskEvidence.length}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {expiredEvidence.length} expired
          </p>
        </article>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
                Evidence Timeline
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Program evidence
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Recent records mapped to this
                operational program.
              </p>
            </div>

            <Link
              href="/platform/evidence"
              className="text-sm font-bold text-teal-700 transition hover:text-teal-800"
            >
              View all evidence →
            </Link>
          </div>

          {recentEvidence.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 px-6 py-12 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-xl text-slate-500">
                +
              </div>

              <p className="mt-4 font-bold text-slate-800">
                No evidence mapped yet
              </p>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Upload documentation and allow HHS
                to analyze and map it to{" "}
                {operationalTopic.name}.
              </p>

              <Link
                href="/platform/evidence/add"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-800"
              >
                Upload Evidence
              </Link>
            </div>
          ) : (
            <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
              {recentEvidence.map((mapping) => {
                const evidence = mapping.evidence;
                const confidence =
                  formatConfidence(
                    mapping.confidence,
                  );

                return (
                  <Link
                    key={mapping.id}
                    href={`/platform/evidence/${evidence.id}`}
                    className="block p-5 transition hover:bg-slate-50"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="truncate font-bold text-slate-950">
                            {evidence.title}
                          </p>

                          {mapping.isVerified ? (
                            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
                              Verified
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-2 text-sm text-slate-500">
                          {evidence.evidenceType ??
                            evidence.fileType ??
                            "Evidence"}
                          {" • "}
                          {evidence.facility?.name ??
                            organization.name}
                          {" • "}
                          {formatDate(
                            evidence.documentDate ??
                              evidence.uploadedAt,
                          )}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-bold ${getEvidenceStatusClasses(
                              evidence.status,
                            )}`}
                          >
                            {evidence.status}
                          </span>

                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-bold ${getAnalysisStatusClasses(
                              evidence.analysisStatus,
                            )}`}
                          >
                            AI {evidence.analysisStatus}
                          </span>

                          {confidence !== null ? (
                            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-800">
                              {confidence}% match
                            </span>
                          ) : null}

                          {evidence.isRecurring ? (
                            <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold text-violet-800">
                              Recurring
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="shrink-0 text-left sm:text-right">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Readiness
                        </p>

                        <p className="mt-1 text-lg font-bold text-slate-950">
                          {typeof evidence.analysisSurveyReadiness ===
                          "number"
                            ? `${Math.round(
                                evidence.analysisSurveyReadiness,
                              )}%`
                            : "—"}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        <aside className="space-y-6">
          <section
            className={`rounded-3xl border p-6 shadow-sm ${readinessStyle.panel}`}
          >
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-600">
              Program Health
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Current condition
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-600">
                  Evidence quality
                </span>

                <span className="font-bold text-slate-950">
                  {averageEvidenceQuality}%
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-600">
                  Mapping confidence
                </span>

                <span className="font-bold text-slate-950">
                  {averageMappingConfidence}%
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-600">
                  Pending analysis
                </span>

                <span className="font-bold text-slate-950">
                  {pendingEvidence.length}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-600">
                  Failed analysis
                </span>

                <span
                  className={`font-bold ${
                    failedEvidence.length > 0
                      ? "text-red-700"
                      : "text-slate-950"
                  }`}
                >
                  {failedEvidence.length}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-600">
                  Expiring within 60 days
                </span>

                <span
                  className={`font-bold ${
                    expiringSoonEvidence.length > 0
                      ? "text-amber-700"
                      : "text-slate-950"
                  }`}
                >
                  {expiringSoonEvidence.length}
                </span>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              AI Program Summary
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-950">
              What HHS sees
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {summaryRecord?.analysisExecutiveSummary ??
                operationalTopic.aiGuidance ??
                (evidenceRecords.length > 0
                  ? `${operationalTopic.name} currently has ${evidenceRecords.length} mapped evidence records. Review missing items, expiring documentation, and unverified mappings to improve survey readiness.`
                  : `Upload evidence for ${operationalTopic.name} to generate an AI program summary and readiness assessment.`)}
            </p>
          </section>
        </aside>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
                Applicable Standards
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Regulatory coverage
              </h2>
            </div>

            <span className="text-sm font-semibold text-slate-500">
              {linkedStandards.length}{" "}
              {linkedStandards.length === 1
                ? "standard"
                : "standards"}
            </span>
          </div>

          {linkedStandards.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 px-6 py-10 text-center">
              <p className="font-bold text-slate-800">
                No standards linked
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Applicable standards will appear here
                after the program crosswalk is loaded.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {linkedStandards
                .slice(0, 8)
                .map((mapping) => {
                  const standard =
                    mapping.standard;

                  const hasEvidence =
                    evidenceRecords.some(
                      (evidence) =>
                        evidence.standardMappings.some(
                          (
                            evidenceStandardMapping,
                          ) =>
                            evidenceStandardMapping
                              .standard.id ===
                            standard.id,
                        ),
                    );

                  const isVerified =
                    verifiedStandardIds.has(
                      standard.id,
                    );

                  return (
                    <article
                      key={mapping.id}
                      className="rounded-2xl border border-slate-200 p-5"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-slate-950 px-2.5 py-1 text-xs font-bold text-white">
                              {standard.accreditor}
                            </span>

                            <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                              {standard.code}
                            </span>
                          </div>

                          <h3 className="mt-3 font-bold text-slate-950">
                            {standard.title}
                          </h3>

                          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                            {standard.requirement ??
                              standard.description ??
                              "Requirement details are not yet available."}
                          </p>
                        </div>

                        <div className="flex shrink-0 flex-wrap gap-2">
                          {hasEvidence ? (
                            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-800">
                              Evidence linked
                            </span>
                          ) : (
                            <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-800">
                              Evidence needed
                            </span>
                          )}

                          {isVerified ? (
                            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
                              Verified
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  );
                })}

              {linkedStandards.length > 8 ? (
                <p className="pt-2 text-center text-sm font-semibold text-slate-500">
                  + {linkedStandards.length - 8}{" "}
                  additional standards
                </p>
              ) : null}
            </div>
          )}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
            AI Findings
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Gaps and recommendations
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
            <div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-bold text-slate-900">
                  Missing evidence
                </h3>

                <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-800">
                  {missingEvidenceItems.length}
                </span>
              </div>

              {missingEvidenceItems.length === 0 ? (
                <div className="mt-4 rounded-2xl bg-emerald-50 p-5">
                  <p className="font-semibold text-emerald-800">
                    No missing evidence identified
                  </p>

                  <p className="mt-2 text-sm leading-6 text-emerald-700">
                    HHS has not identified missing
                    documentation in the analyzed
                    records.
                  </p>
                </div>
              ) : (
                <ul className="mt-4 space-y-3">
                  {missingEvidenceItems.map(
                    (item, index) => (
                      <li
                        key={`${item}-${index}`}
                        className="flex gap-3 rounded-2xl bg-red-50 p-4 text-sm leading-6 text-red-900"
                      >
                        <span className="font-black text-red-700">
                          !
                        </span>

                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-bold text-slate-900">
                  Recommended actions
                </h3>

                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-800">
                  {recommendations.length}
                </span>
              </div>

              {recommendations.length === 0 ? (
                <div className="mt-4 rounded-2xl bg-slate-50 p-5">
                  <p className="font-semibold text-slate-700">
                    No recommendations yet
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Recommendations will appear after
                    evidence has been analyzed.
                  </p>
                </div>
              ) : (
                <ul className="mt-4 space-y-3">
                  {recommendations.map(
                    (recommendation, index) => (
                      <li
                        key={`${recommendation}-${index}`}
                        className="flex gap-3 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-900"
                      >
                        <span className="font-black text-blue-700">
                          →
                        </span>

                        <span>
                          {recommendation}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
            Surveyor Focus
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-950">
            What surveyors look for
          </h2>

          {operationalTopic.surveyorLooksFor.length ===
          0 ? (
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Surveyor focus points have not yet been
              added for this program.
            </p>
          ) : (
            <ul className="mt-5 space-y-3">
              {operationalTopic.surveyorLooksFor
                .slice(0, 7)
                .map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-100 text-xs font-black text-teal-800">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          )}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
            Evidence Expectations
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-950">
            Common documentation
          </h2>

          {operationalTopic.evidenceExamples.length ===
          0 ? (
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Evidence examples have not yet been
              added for this program.
            </p>
          ) : (
            <ul className="mt-5 space-y-3">
              {operationalTopic.evidenceExamples
                .slice(0, 7)
                .map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-100 text-xs font-black text-blue-800">
                      +
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          )}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
            Risk Intelligence
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-950">
            Common findings
          </h2>

          {operationalTopic.commonFindings.length ===
          0 ? (
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Common findings have not yet been
              added for this program.
            </p>
          ) : (
            <ul className="mt-5 space-y-3">
              {operationalTopic.commonFindings
                .slice(0, 7)
                .map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-100 text-xs font-black text-amber-800">
                      !
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          )}
        </section>
      </div>

      <section className="rounded-3xl bg-gradient-to-br from-teal-50 via-white to-slate-50 p-7 shadow-sm ring-1 ring-teal-200 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Drag. Drop. Survey Ready.
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Build a complete{" "}
              {operationalTopic.name.toLowerCase()}{" "}
              evidence record.
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Add inspection reports, testing records,
              policies, corrective actions, service
              documentation, and supporting records.
              HHS will organize them within this program
              and connect them to applicable standards.
            </p>
          </div>

          <Link
            href="/platform/evidence/add"
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Add Program Evidence
          </Link>
        </div>
      </section>
    </main>
  );
}