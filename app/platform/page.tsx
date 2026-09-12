import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

type ProgramSummary = {
  code: string;
  slug: string;
  name: string;
  domain: string;
  description: string;
  riskLevel: string;
  displayOrder: number;
};

type DepartmentSummary = {
  department: string;
  readiness: number;
  evidenceCount: number;
  missingItems: number;
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

function getReadinessClasses(score: number) {
  if (score >= 90) {
    return {
      text: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-800",
      bar: "bg-emerald-500",
      ring: "ring-emerald-200",
    };
  }

  if (score >= 75) {
    return {
      text: "text-amber-700",
      badge: "bg-amber-100 text-amber-800",
      bar: "bg-amber-500",
      ring: "ring-amber-200",
    };
  }

  if (score > 0) {
    return {
      text: "text-red-700",
      badge: "bg-red-100 text-red-800",
      bar: "bg-red-500",
      ring: "ring-red-200",
    };
  }

  return {
    text: "text-slate-600",
    badge: "bg-slate-100 text-slate-700",
    bar: "bg-slate-300",
    ring: "ring-slate-200",
  };
}

function getRiskClasses(riskLevel: string) {
  if (riskLevel === "Critical") {
    return "bg-red-100 text-red-800";
  }

  if (riskLevel === "High") {
    return "bg-amber-100 text-amber-800";
  }

  if (riskLevel === "Moderate") {
    return "bg-blue-100 text-blue-800";
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

  return "bg-amber-100 text-amber-800";
}

function formatActivityDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function PlatformPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const databaseUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      organizationId: true,
      firstName: true,
      role: true,
    },
  });

  const ownedOrganization = await prisma.organization.findUnique({
    where: {
      ownerClerkUserId: userId,
    },
    select: {
      id: true,
      name: true,
      facilities: {
        select: {
          id: true,
        },
      },
    },
  });

  const organizationId =
    databaseUser?.organizationId ?? ownedOrganization?.id;

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
            facilities: {
              select: {
                id: true,
              },
            },
          },
        });

  if (!organization) {
    redirect("/platform/organization");
  }

  const [evidenceRecords, operationalTopicRecords] = await Promise.all([
    prisma.evidence.findMany({
      where: {
        organizationId,
      },
      select: {
        id: true,
        title: true,
        fileName: true,
        analysisStatus: true,
        analysisSurveyReadiness: true,
        analysisConfidence: true,
        analysisRiskLevel: true,
        analysisDepartment: true,
        analysisDocumentType: true,
        analysisMissingEvidence: true,
        uploadedAt: true,
        updatedAt: true,
        standardMappings: {
          select: {
            id: true,
            mappingSource: true,
            isVerified: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    }),
    prisma.operationalTopic.findMany({
      where: {
        status: "Active",
      },
      select: {
        code: true,
        slug: true,
        name: true,
        domain: true,
        description: true,
        riskLevel: true,
        displayOrder: true,
      },
      orderBy: [
        {
          displayOrder: "asc",
        },
        {
          name: "asc",
        },
      ],
    }),
  ]);

  const operationalPrograms: ProgramSummary[] =
    operationalTopicRecords.map((topic) => ({
      code: topic.code,
      slug: topic.slug,
      name: topic.name,
      domain: topic.domain ?? "Operational Programs",
      description:
        topic.description ??
        "Healthcare operational compliance program.",
      riskLevel: topic.riskLevel ?? "Moderate",
      displayOrder: topic.displayOrder,
    }));

  const totalEvidence = evidenceRecords.length;

  const completedEvidence = evidenceRecords.filter(
    (evidence) => evidence.analysisStatus === "Completed",
  );

  const pendingAnalysis = evidenceRecords.filter(
    (evidence) =>
      evidence.analysisStatus === "Pending" ||
      evidence.analysisStatus === "Processing",
  ).length;

  const failedAnalysis = evidenceRecords.filter(
    (evidence) => evidence.analysisStatus === "Failed",
  ).length;

  const readinessScores = completedEvidence
    .map((evidence) => evidence.analysisSurveyReadiness)
    .filter(
      (score): score is number => typeof score === "number",
    );

  const overallReadiness =
    readinessScores.length > 0
      ? Math.round(
          readinessScores.reduce(
            (total, score) => total + score,
            0,
          ) / readinessScores.length,
        )
      : 0;

  const confidenceScores = completedEvidence
    .map((evidence) => evidence.analysisConfidence)
    .filter(
      (score): score is number => typeof score === "number",
    );

  const averageConfidence =
    confidenceScores.length > 0
      ? Math.round(
          confidenceScores.reduce(
            (total, score) => total + score,
            0,
          ) / confidenceScores.length,
        )
      : 0;

  const totalMappings = evidenceRecords.reduce(
    (total, evidence) =>
      total + evidence.standardMappings.length,
    0,
  );

  const verifiedMappings = evidenceRecords.reduce(
    (total, evidence) =>
      total +
      evidence.standardMappings.filter(
        (mapping) => mapping.isVerified,
      ).length,
    0,
  );

  const awaitingReview = evidenceRecords.reduce(
    (total, evidence) =>
      total +
      evidence.standardMappings.filter(
        (mapping) =>
          mapping.mappingSource === "AI" &&
          !mapping.isVerified,
      ).length,
    0,
  );

  const totalMissingItems = completedEvidence.reduce(
    (total, evidence) =>
      total + evidence.analysisMissingEvidence.length,
    0,
  );

  const criticalGaps = completedEvidence.reduce(
    (total, evidence) => {
      if (
        evidence.analysisRiskLevel !== "High" &&
        evidence.analysisRiskLevel !== "Critical"
      ) {
        return total;
      }

      return (
        total + evidence.analysisMissingEvidence.length
      );
    },
    0,
  );

  const departmentMap = new Map<
    string,
    {
      totalReadiness: number;
      scoredEvidenceCount: number;
      evidenceCount: number;
      missingItems: number;
    }
  >();

  for (const evidence of completedEvidence) {
    const department =
      evidence.analysisDepartment?.trim() || "Uncategorized";

    const current = departmentMap.get(department) ?? {
      totalReadiness: 0,
      scoredEvidenceCount: 0,
      evidenceCount: 0,
      missingItems: 0,
    };

    current.evidenceCount += 1;
    current.missingItems +=
      evidence.analysisMissingEvidence.length;

    if (
      typeof evidence.analysisSurveyReadiness === "number"
    ) {
      current.totalReadiness +=
        evidence.analysisSurveyReadiness;
      current.scoredEvidenceCount += 1;
    }

    departmentMap.set(department, current);
  }

  const departmentSummaries: DepartmentSummary[] =
    Array.from(departmentMap.entries())
      .map(([department, values]) => ({
        department,
        readiness:
          values.scoredEvidenceCount > 0
            ? Math.round(
                values.totalReadiness /
                  values.scoredEvidenceCount,
              )
            : 0,
        evidenceCount: values.evidenceCount,
        missingItems: values.missingItems,
      }))
      .sort(
        (first, second) =>
          first.readiness - second.readiness,
      )
      .slice(0, 5);

  const recentActivity = evidenceRecords.slice(0, 6);
  const featuredPrograms = operationalPrograms.slice(0, 6);

  const readinessClasses =
    getReadinessClasses(overallReadiness);

  const firstName =
    databaseUser?.firstName?.trim() || null;

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-8">
      <header className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            Executive Command Center
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
            {firstName
              ? `Welcome back, ${firstName}`
              : organization.name}
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Monitor operational program health, evidence
            coverage, survey readiness, compliance risk, and
            AI review activity across {organization.name}.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/platform/readiness"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
          >
            Open Survey Readiness
          </Link>

          <Link
            href="/platform/evidence/add"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800"
          >
            Upload Evidence
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 xl:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Overall Survey Readiness
              </p>

              <p
                className={`mt-3 text-5xl font-bold ${readinessClasses.text}`}
              >
                {overallReadiness}%
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${readinessClasses.badge}`}
            >
              {getReadinessLabel(overallReadiness)}
            </span>
          </div>

          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full transition-all ${readinessClasses.bar}`}
              style={{
                width: `${Math.min(overallReadiness, 100)}%`,
              }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Based on {completedEvidence.length} analyzed{" "}
            {completedEvidence.length === 1
              ? "document"
              : "documents"}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Operational Programs
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {operationalPrograms.length}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Active compliance programs
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Evidence Library
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {totalEvidence}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Across {organization.facilities.length}{" "}
            {organization.facilities.length === 1
              ? "facility"
              : "facilities"}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Critical Gaps
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              criticalGaps > 0
                ? "text-red-700"
                : "text-emerald-700"
            }`}
          >
            {criticalGaps}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {totalMissingItems} total missing{" "}
            {totalMissingItems === 1 ? "item" : "items"}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            AI Review Queue
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              awaitingReview > 0
                ? "text-amber-700"
                : "text-emerald-700"
            }`}
          >
            {awaitingReview}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {verifiedMappings} verified mappings
          </p>
        </article>
      </section>

      <section className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl lg:p-8">
        <div className="grid gap-8 xl:grid-cols-[1fr_auto] xl:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">
                Survey Readiness
              </p>

              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                Live organizational view
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight lg:text-3xl">
              Know what is ready before the surveyor asks.
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              HHS continuously organizes evidence by
              operational program, identifies documentation
              gaps, and prepares your organization to present
              complete compliance records with confidence.
            </p>
          </div>

          <div className="grid min-w-[260px] grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                AI Confidence
              </p>

              <p className="mt-2 text-2xl font-bold text-teal-300">
                {averageConfidence}%
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Standards Mapped
              </p>

              <p className="mt-2 text-2xl font-bold text-white">
                {totalMappings}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Operational Programs
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Program command centers
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Open a program to review evidence, readiness,
              standards, risks, and missing documentation.
            </p>
          </div>

          <p className="text-sm font-semibold text-slate-500">
            {operationalPrograms.length} active programs
          </p>
        </div>

        {featuredPrograms.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 px-5 py-10 text-center">
            <p className="font-semibold text-slate-700">
              No operational programs are available
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Active operational topics will appear here
              after they are added to the database.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredPrograms.map((program) => (
              <Link
                key={program.code}
                href={`/platform/programs/${program.slug}`}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-950 text-lg font-bold text-teal-300 transition group-hover:bg-teal-700 group-hover:text-white">
                    {program.name.charAt(0)}
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${getRiskClasses(
                      program.riskLevel,
                    )}`}
                  >
                    {program.riskLevel}
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  {program.domain}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-950">
                  {program.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                  {program.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-sm font-bold text-teal-700">
                    Open program
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-teal-700"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Department Readiness
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Lowest-readiness departments appear first
              </p>
            </div>

            <span className="text-sm font-semibold text-slate-500">
              AI confidence: {averageConfidence}%
            </span>
          </div>

          {departmentSummaries.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 px-5 py-10 text-center">
              <p className="font-semibold text-slate-700">
                No department readiness data yet
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Analyze uploaded evidence to begin
                calculating department readiness.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              {departmentSummaries.map((summary) => {
                const classes = getReadinessClasses(
                  summary.readiness,
                );

                return (
                  <div key={summary.department}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-slate-900">
                          {summary.department}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {summary.evidenceCount}{" "}
                          {summary.evidenceCount === 1
                            ? "document"
                            : "documents"}{" "}
                          • {summary.missingItems} missing{" "}
                          {summary.missingItems === 1
                            ? "item"
                            : "items"}
                        </p>
                      </div>

                      <p
                        className={`text-lg font-bold ${classes.text}`}
                      >
                        {summary.readiness}%
                      </p>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${classes.bar}`}
                        style={{
                          width: `${Math.min(
                            summary.readiness,
                            100,
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                AI Review Queue
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Recommendations requiring attention
              </p>
            </div>

            <Link
              href="/platform/evidence"
              className="text-sm font-bold text-teal-700 transition hover:text-teal-800"
            >
              Review evidence →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <article className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-500">
                  Awaiting human review
                </p>

                <span className="grid h-8 w-8 place-items-center rounded-full bg-amber-100 text-sm font-bold text-amber-800">
                  !
                </span>
              </div>

              <p className="mt-3 text-3xl font-bold text-slate-950">
                {awaitingReview}
              </p>
            </article>

            <article className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-500">
                  Verified mappings
                </p>

                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
                  ✓
                </span>
              </div>

              <p className="mt-3 text-3xl font-bold text-emerald-700">
                {verifiedMappings}
              </p>
            </article>

            <article className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-500">
                  Pending analysis
                </p>

                <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
                  ◷
                </span>
              </div>

              <p className="mt-3 text-3xl font-bold text-teal-700">
                {pendingAnalysis}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {failedAnalysis > 0
                  ? `${failedAnalysis} failed ${
                      failedAnalysis === 1
                        ? "analysis"
                        : "analyses"
                    }`
                  : "No analysis failures"}
              </p>
            </article>
          </div>
        </section>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Recent Evidence Activity
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Latest uploads and AI analysis results
            </p>
          </div>

          <Link
            href="/platform/evidence"
            className="text-sm font-bold text-teal-700 transition hover:text-teal-800"
          >
            Open evidence library →
          </Link>
        </div>

        {recentActivity.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 px-5 py-10 text-center">
            <p className="font-semibold text-slate-700">
              No evidence has been uploaded
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Upload your first compliance document to begin
              building organizational survey readiness.
            </p>

            <Link
              href="/platform/evidence/add"
              className="mt-4 inline-flex font-bold text-teal-700"
            >
              Upload your first document →
            </Link>
          </div>
        ) : (
          <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
            {recentActivity.map((evidence) => {
              const readiness =
                evidence.analysisSurveyReadiness ?? 0;

              const classes =
                getReadinessClasses(readiness);

              return (
                <Link
                  key={evidence.id}
                  href={`/platform/evidence/${evidence.id}`}
                  className="flex flex-col gap-4 px-5 py-4 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="truncate font-bold text-slate-950">
                      {evidence.title}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {evidence.analysisDocumentType ??
                        evidence.fileName}
                      {" • "}
                      {formatActivityDate(evidence.updatedAt)}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${getAnalysisStatusClasses(
                        evidence.analysisStatus,
                      )}`}
                    >
                      {evidence.analysisStatus}
                    </span>

                    {evidence.analysisStatus ===
                    "Completed" ? (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${classes.badge}`}
                      >
                        {readiness}% ready
                      </span>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-slate-50 p-7 shadow-sm lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Drag. Drop. Survey Ready.
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Turn operational records into survey-ready
              evidence.
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Upload inspection reports, testing records,
              policies, meeting minutes, plans, maintenance
              documents, and corrective actions. HHS will
              analyze, classify, and organize the evidence for
              survey presentation.
            </p>
          </div>

          <Link
            href="/platform/evidence/add"
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Add Evidence
          </Link>
        </div>
      </section>
    </div>
  );
}