import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

const commandCenterTabs = [
  { label: "Overview", href: "#overview", active: true },
  { label: "Evidence", href: "#evidence", active: false },
  { label: "AI Analysis", href: "#ai-analysis", active: false },
  { label: "Readiness", href: "#readiness", active: false },
  { label: "Tasks", href: "#tasks", active: false },
  { label: "History", href: "#history", active: false },
];

type StandardCommandCenterPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatLabel(value: string | null): string {
  return value ?? "Not specified";
}

function getRiskClasses(riskLevel: string | null): string {
  switch (riskLevel?.toLowerCase()) {
    case "high":
      return "border-red-200 bg-red-50 text-red-700";
    case "moderate":
      return "border-amber-200 bg-amber-50 text-amber-700";
    case "low":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    default:
      return "border-slate-200 bg-slate-50 text-slate-700";
  }
}
type ReadinessStatus = "Ready" | "Partial" | "Missing Evidence";

type ReadinessResult = {
  status: ReadinessStatus;
  score: number;
  summary: string;
};

function calculateReadiness(
  evidenceMappings: Array<{
    evidence: {
      analysisStatus: string;
      analysisConfidence: number | null;
    };
  }>,
): ReadinessResult {
  if (evidenceMappings.length === 0) {
    return {
      status: "Missing Evidence",
      score: 0,
      summary:
        "No supporting evidence is currently mapped to this standard.",
    };
  }

  const completedAnalyses = evidenceMappings.filter(
    (mapping) =>
      mapping.evidence.analysisStatus.toLowerCase() === "completed",
  );

  const confidenceValues = completedAnalyses
    .map((mapping) => mapping.evidence.analysisConfidence)
    .filter(
      (confidence): confidence is number => confidence !== null,
    );

  const averageConfidence =
    confidenceValues.length > 0
      ? confidenceValues.reduce(
          (total, confidence) => total + confidence,
          0,
        ) / confidenceValues.length
      : 0;

  const evidenceCoverageScore = Math.min(
    evidenceMappings.length * 35,
    70,
  );

  const confidenceScore = Math.round(averageConfidence * 30);

  const score = Math.min(
    evidenceCoverageScore + confidenceScore,
    100,
  );

  if (
    completedAnalyses.length > 0 &&
    averageConfidence >= 0.8 &&
    score >= 80
  ) {
    return {
      status: "Ready",
      score,
      summary:
        "Mapped evidence has been analyzed with strong AI confidence. Final human verification is still recommended.",
    };
  }

  return {
    status: "Partial",
    score,
    summary:
      "Supporting evidence exists, but additional documentation or AI review may be needed.",
  };
}

function getReadinessClasses(status: ReadinessStatus): string {
  switch (status) {
    case "Ready":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    case "Partial":
      return "border-amber-200 bg-amber-50 text-amber-700";
    case "Missing Evidence":
      return "border-red-200 bg-red-50 text-red-700";
  }
}
export default async function StandardCommandCenterPage({
  params,
}: StandardCommandCenterPageProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const { slug } = await params;

  const databaseUser = await prisma.user.findUnique({
    where: { id: userId },
    select: { organizationId: true },
  });

  const ownedOrganization = await prisma.organization.findUnique({
    where: { ownerClerkUserId: userId },
    select: { id: true },
  });

  const organizationId =
    databaseUser?.organizationId ?? ownedOrganization?.id;

  if (!organizationId) {
    redirect("/platform/organization");
  }

  const standard = await prisma.standard.findFirst({
    where: {
      code:slug,
      OR: [{ organizationId: null }, { organizationId }],
    },
    include: {
      evidenceMappings: {
        include: {
          evidence: {
            select: {
              id: true,
              title: true,
              analysisStatus: true,
              analysisConfidence: true,
              createdAt: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!standard) {
    notFound();
  }

  const referencedAuthorities = Array.isArray(
    standard.referencedAuthorities,
  )
    ? standard.referencedAuthorities
    : [];
const readiness = calculateReadiness(
  standard.evidenceMappings,
);
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6">
          <Link
            href="/platform/standards/explorer"
            className="text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            ← Back to Standards Explorer
          </Link>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
                  {standard.accreditor}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                  {formatLabel(standard.chapter)}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-sm font-semibold ${getRiskClasses(
                    standard.riskLevel,
                  )}`}
                >
                  {formatLabel(standard.riskLevel)} Risk
                </span>
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                {standard.code}
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {standard.title}
              </h1>

              {standard.description ? (
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  {standard.description}
                </p>
              ) : null}
            </div>

            <div className="min-w-56 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">
                Linked Evidence
              </p>
              <p className="mt-2 text-4xl font-bold text-slate-900">
                {standard.evidenceMappings.length}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Documents currently mapped to this standard
              </p>
            </div>
          </div>
        </section>

        <nav
          aria-label="Standard command center"
          className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white px-3 shadow-sm"
        >
          <div className="flex min-w-max items-center gap-1">
            {commandCenterTabs.map((tab) => (
              <a
                key={tab.label}
                href={tab.href}
                className={`border-b-2 px-4 py-4 text-sm font-semibold transition ${
                  tab.active
                    ? "border-teal-700 text-teal-700"
                    : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section
              id="overview"
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Survey Intent
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {standard.intent ??
                  "Survey intent has not yet been added for this standard."}
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Requirement
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {standard.requirement ??
                  "Requirement guidance has not yet been added."}
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                What Surveyors Look For
              </h2>

              {standard.surveyorLooksFor.length === 0 ? (
                <p className="mt-4 text-slate-500">
                  No surveyor expectations have been added.
                </p>
              ) : (
                <ul className="mt-4 space-y-3">
                  {standard.surveyorLooksFor.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="flex gap-3 text-slate-600"
                    >
                      <span className="font-bold text-teal-700">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section
              id="evidence"
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-bold text-slate-900">
                  Linked Evidence
                </h2>
                <Link
                  href="/platform/evidence"
                  className="text-sm font-semibold text-teal-700 hover:text-teal-800"
                >
                  View evidence library
                </Link>
              </div>

              {standard.evidenceMappings.length === 0 ? (
                <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">
                  <p className="font-semibold text-slate-700">
                    No evidence is currently mapped to this standard.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Uploaded evidence and AI mapping results will appear here.
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  {standard.evidenceMappings.map((mapping) => (
                    <Link
                      key={mapping.id}
                      href={`/platform/evidence/${mapping.evidence.id}`}
                      className="block rounded-xl border border-slate-200 p-4 transition hover:border-teal-300 hover:bg-teal-50/40"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {mapping.evidence.title}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Added {mapping.evidence.createdAt.toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-sm text-slate-600">
                          {mapping.evidence.analysisConfidence !== null
                            ? `${Math.round(
                                mapping.evidence.analysisConfidence * 100,
                              )}% confidence`
                            : mapping.evidence.analysisStatus}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Common Findings
              </h2>

              {standard.commonFindings.length === 0 ? (
                <p className="mt-4 text-slate-500">
                  No common findings have been added.
                </p>
              ) : (
                <ul className="mt-4 space-y-3">
                  {standard.commonFindings.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="flex gap-3 text-slate-600"
                    >
                      <span className="font-bold text-amber-700">!</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Standard Profile
              </h2>
              <dl className="mt-5 space-y-4">
                {[
                  ["Department", formatLabel(standard.department)],
                  ["Domain", formatLabel(standard.domain)],
                  ["Category", formatLabel(standard.category)],
                  ["Priority", String(standard.priority)],
                  ["Version", formatLabel(standard.version)],
                  ["Status", standard.status],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-slate-700">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Acceptable Evidence
              </h2>
              {standard.evidenceExamples.length === 0 ? (
                <p className="mt-4 text-sm text-slate-500">
                  No evidence examples have been added.
                </p>
              ) : (
                <ul className="mt-4 space-y-3">
                  {standard.evidenceExamples.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="font-bold text-teal-700">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Referenced Authorities
              </h2>
              {referencedAuthorities.length === 0 ? (
                <p className="mt-4 text-sm text-slate-500">
                  No referenced authorities have been added.
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {referencedAuthorities.map((authority, index) => {
                    const record =
                      typeof authority === "object" && authority !== null
                        ? authority
                        : null;

                    const name =
                      record &&
                      "name" in record &&
                      typeof record.name === "string"
                        ? record.name
                        : "Referenced authority";

                    const reference =
                      record &&
                      "reference" in record &&
                      typeof record.reference === "string"
                        ? record.reference
                        : null;

                    return (
                      <div
                        key={`${name}-${index}`}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <p className="font-semibold text-slate-800">{name}</p>
                        {reference ? (
                          <p className="mt-1 text-sm text-slate-500">
                            {reference}
                          </p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            <section
              id="ai-analysis"
              className="scroll-mt-28 rounded-2xl border border-dashed border-violet-300 bg-violet-50 p-6"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
                AI Analysis
              </p>
              <h2 className="mt-2 text-lg font-bold text-slate-900">
                Compliance Intelligence
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                AI findings, evidence strength, missing documentation, and
                recommended actions will appear here.
              </p>
            </section>

            <section
  id="readiness"
  className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
>
  <div className="flex items-start justify-between gap-4">
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-teal-700">
        Preliminary Readiness
      </p>

      <h2 className="mt-2 text-lg font-bold text-slate-900">
        Survey Readiness Score
      </h2>
    </div>

    <span
      className={`rounded-full border px-3 py-1 text-sm font-semibold ${getReadinessClasses(
        readiness.status,
      )}`}
    >
      {readiness.status}
    </span>
  </div>

  <div className="mt-6 flex items-end gap-2">
    <p className="text-5xl font-bold tracking-tight text-slate-950">
      {readiness.score}
    </p>

    <p className="pb-1 text-lg font-semibold text-slate-400">
      /100
    </p>
  </div>

  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
    <div
      className="h-full rounded-full bg-teal-600 transition-all"
      style={{
        width: `${readiness.score}%`,
      }}
    />
  </div>

  <p className="mt-5 text-sm leading-6 text-slate-600">
    {readiness.summary}
  </p>

  <div className="mt-5 border-t border-slate-200 pt-5">
    <dl className="space-y-3 text-sm">
      <div className="flex items-center justify-between gap-4">
        <dt className="text-slate-500">Linked evidence</dt>
        <dd className="font-bold text-slate-900">
          {standard.evidenceMappings.length}
        </dd>
      </div>

      <div className="flex items-center justify-between gap-4">
        <dt className="text-slate-500">
          Completed AI analyses
        </dt>
        <dd className="font-bold text-slate-900">
          {
            standard.evidenceMappings.filter(
              (mapping) =>
                mapping.evidence.analysisStatus.toLowerCase() ===
                "completed",
            ).length
          }
        </dd>
      </div>
    </dl>
  </div>

  <p className="mt-5 text-xs leading-5 text-slate-400">
    This preliminary score is based on linked evidence and AI
    analysis results. It does not replace compliance review by
    qualified personnel.
  </p>
</section>

            <section
              id="tasks"
              className="scroll-mt-28 rounded-2xl border border-dashed border-amber-300 bg-amber-50 p-6"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-amber-700">
                Tasks
              </p>
              <h2 className="mt-2 text-lg font-bold text-slate-900">
                Corrective Actions
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Assigned tasks, owners, due dates, and completion status will
                appear here.
              </p>
            </section>

            <section
              id="history"
              className="scroll-mt-28 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                History
              </p>
              <h2 className="mt-2 text-lg font-bold text-slate-900">
                Standard Activity
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Evidence changes, AI analyses, readiness updates, and task
                activity will appear here.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}