import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { calculateSurveyReadiness } from "@/lib/readiness/calculateSurveyReadiness";
import { prisma } from "@/lib/prisma";

function normalizePercentage(value: number | null) {
  if (typeof value !== "number") {
    return null;
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

function isExpired(date: Date | null) {
  if (!date) {
    return false;
  }

  return date < new Date();
}

function isExpiringWithinDays(
  date: Date | null,
  days: number,
) {
  if (!date) {
    return false;
  }

  const now = new Date();
  const futureDate = new Date();

  futureDate.setDate(futureDate.getDate() + days);

  return date >= now && date <= futureDate;
}

function getReadinessStyles(score: number | null) {
  if (score === null) {
    return {
      text: "text-slate-500",
      badge: "bg-slate-100 text-slate-700",
      bar: "bg-slate-300",
      label: "Not Assessed",
    };
  }

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

  return {
    text: "text-red-700",
    badge: "bg-red-100 text-red-800",
    bar: "bg-red-500",
    label: "At Risk",
  };
}

function getRiskStyles(riskLevel: string | null) {
  const normalized = riskLevel?.toLowerCase();

  if (
    normalized === "critical" ||
    normalized === "high"
  ) {
    return "bg-red-100 text-red-800";
  }

  if (normalized === "moderate") {
    return "bg-amber-100 text-amber-800";
  }

  if (normalized === "low") {
    return "bg-emerald-100 text-emerald-800";
  }

  return "bg-slate-100 text-slate-700";
}

export default async function SurveyReadinessPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const databaseUser =
    await prisma.user.findUnique({
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

  const [evidence, facilities, operationalTopics] =
    await Promise.all([
      prisma.evidence.findMany({
        where: {
          organizationId,
        },
        select: {
          id: true,
          title: true,
          status: true,
          expirationDate: true,
          uploadedAt: true,
          updatedAt: true,
          analysisStatus: true,
          analysisConfidence: true,
          analysisSurveyReadiness: true,
          analysisEvidenceQuality: true,
          analysisRiskLevel: true,
          analysisMissingEvidence: true,
          facility: {
            select: {
              id: true,
              name: true,
              primaryAccreditor: true,
            },
          },
          operationalTopicMappings: {
            select: {
              mappingSource: true,
              isVerified: true,
              confidence: true,
              operationalTopic: {
                select: {
                  id: true,
                  code: true,
                  slug: true,
                  name: true,
                  domain: true,
                  riskLevel: true,
                  displayOrder: true,
                },
              },
            },
          },
          standardMappings: {
            select: {
              mappingSource: true,
              isVerified: true,
              confidence: true,
              standard: {
                select: {
                  id: true,
                  accreditor: true,
                  code: true,
                  title: true,
                  riskLevel: true,
                },
              },
            },
          },
        },
        orderBy: {
          updatedAt: "desc",
        },
      }),
      prisma.facility.findMany({
        where: {
          organizationId,
        },
        select: {
          id: true,
          name: true,
          facilityType: true,
          primaryAccreditor: true,
        },
        orderBy: {
          name: "asc",
        },
      }),
      prisma.operationalTopic.findMany({
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
          code: true,
          slug: true,
          name: true,
          domain: true,
          riskLevel: true,
          displayOrder: true,
          standardMappings: {
            select: {
              standardId: true,
            },
          },
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

  const facilityReadinessResults = await Promise.all(
    facilities.map((facility) =>
      calculateSurveyReadiness({
        facilityId: facility.id,
        organizationId,
      }),
    ),
  );

  const allStandardResults =
    facilityReadinessResults.flatMap(
      (result) => result.standards,
    );

  const totalApplicableStandards =
    allStandardResults.length;

  const overallReadiness =
    totalApplicableStandards > 0
      ? Math.round(
          allStandardResults.reduce(
            (total, standard) =>
              total + standard.score,
            0,
          ) / totalApplicableStandards,
        )
      : null;

  const readinessStyles =
    getReadinessStyles(overallReadiness);

  const surveyReadyStandards =
    allStandardResults.filter(
      (standard) => standard.status === "Ready",
    ).length;

  const needsAttentionStandards =
    allStandardResults.filter(
      (standard) =>
        standard.status === "Needs Attention",
    ).length;

  const atRiskStandards =
    allStandardResults.filter(
      (standard) => standard.status === "At Risk",
    ).length;

  const missingStandards =
    allStandardResults.filter(
      (standard) => standard.status === "Missing",
    ).length;

  const readinessGapStandards =
    needsAttentionStandards +
    atRiskStandards +
    missingStandards;

  const totalEvidence = evidence.length;

  const expiredEvidence = evidence.filter((item) =>
    isExpired(item.expirationDate),
  );

  const expiringEvidence = evidence.filter((item) =>
    isExpiringWithinDays(item.expirationDate, 30),
  );

  const pendingAiReview = evidence.filter(
    (item) =>
      item.analysisStatus === "Pending" ||
      item.analysisStatus === "Processing",
  );

  const failedAnalysis = evidence.filter(
    (item) => item.analysisStatus === "Failed",
  );

  const unverifiedMappings = evidence.reduce(
    (total, item) => {
      const pendingPrograms =
        item.operationalTopicMappings.filter(
          (mapping) =>
            mapping.mappingSource !==
              "AI-Rejected" &&
            !mapping.isVerified,
        ).length;

      const pendingStandards =
        item.standardMappings.filter(
          (mapping) =>
            mapping.mappingSource !==
              "AI-Rejected" &&
            !mapping.isVerified,
        ).length;

      return (
        total + pendingPrograms + pendingStandards
      );
    },
    0,
  );

  const highRiskEvidence = evidence
    .filter((item) => {
      const risk =
        item.analysisRiskLevel?.toLowerCase();

      const score = normalizePercentage(
        item.analysisSurveyReadiness,
      );

      return (
        risk === "critical" ||
        risk === "high" ||
        (score !== null && score < 75) ||
        item.analysisMissingEvidence.length > 0
      );
    })
    .slice(0, 8);

  const programReadiness =
    operationalTopics.map((topic) => {
      const standardIds = new Set(
        topic.standardMappings.map(
          (mapping) => mapping.standardId,
        ),
      );

      const applicableStandards =
        allStandardResults.filter((standard) =>
          standardIds.has(standard.standardId),
        );

      const score =
        applicableStandards.length > 0
          ? Math.round(
              applicableStandards.reduce(
                (total, standard) =>
                  total + standard.score,
                0,
              ) / applicableStandards.length,
            )
          : null;

      const evidenceIds = new Set(
        applicableStandards.flatMap((standard) =>
          standard.evidence.map(
            (record) => record.evidenceId,
          ),
        ),
      );

      const coveredStandards =
        applicableStandards.filter(
          (standard) =>
            standard.hasCurrentEvidence,
        ).length;

      const gapStandards =
        applicableStandards.filter(
          (standard) =>
            standard.status !== "Ready",
        ).length;

      const expiredItems =
        applicableStandards.reduce(
          (total, standard) =>
            total +
            standard.evidence.filter(
              (record) =>
                isExpired(record.expirationDate),
            ).length,
          0,
        );

      const pendingMappings =
        applicableStandards.filter(
          (standard) =>
            standard.hasCurrentEvidence &&
            !standard.hasVerifiedEvidence,
        ).length;

      return {
        ...topic,
        evidenceCount: evidenceIds.size,
        analyzedCount: coveredStandards,
        applicableStandards:
          applicableStandards.length,
        readiness: score,
        missingItems: gapStandards,
        expiredItems,
        pendingMappings,
      };
    });

  const activeProgramReadiness =
    programReadiness.filter(
      (program) =>
        program.applicableStandards > 0,
    );

  const facilityReadiness =
    facilityReadinessResults.map((result) => {
      const facilityEvidence = evidence.filter(
        (item) =>
          item.facility?.id === result.facility.id,
      );

      return {
        id: result.facility.id,
        name: result.facility.name,
        facilityType: result.facility.facilityType,
        primaryAccreditor:
          result.facility.primaryAccreditor,
        evidenceCount: facilityEvidence.length,
        readiness: result.overallReadiness,
        expiredCount: facilityEvidence.filter(
          (item) =>
            isExpired(item.expirationDate),
        ).length,
        missingItems:
          result.needsAttentionStandards +
          result.atRiskStandards +
          result.missingStandards,
        applicableStandards:
          result.applicableStandards,
        readyStandards: result.readyStandards,
      };
    });

  const accreditorGroups = new Map<
    string,
    typeof allStandardResults
  >();

  for (const standard of allStandardResults) {
    const current =
      accreditorGroups.get(
        standard.accreditor,
      ) ?? [];

    current.push(standard);
    accreditorGroups.set(
      standard.accreditor,
      current,
    );
  }

  const accreditationSummary = Array.from(
    accreditorGroups.entries(),
  )
    .map(([accreditor, standards]) => {
      const evidenceIds = new Set(
        standards.flatMap((standard) =>
          standard.evidence.map(
            (record) => record.evidenceId,
          ),
        ),
      );

      const ready = standards.filter(
        (standard) =>
          standard.status === "Ready",
      ).length;

      const readiness =
        standards.length > 0
          ? Math.round(
              standards.reduce(
                (total, standard) =>
                  total + standard.score,
                0,
              ) / standards.length,
            )
          : 0;

      return {
        accreditor,
        standards: standards.length,
        verified: ready,
        evidence: evidenceIds.size,
        verificationRate: readiness,
      };
    })
    .sort((first, second) =>
      first.accreditor.localeCompare(
        second.accreditor,
      ),
    );

  return (
    <main className="mx-auto w-full max-w-[1600px] space-y-8">
      <header className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            Executive Survey Intelligence
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
            Survey Readiness
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Monitor evidence quality, operational
            readiness, regulatory coverage, and
            documentation gaps across{" "}
            {organization.name}.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/platform/evidence/add"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
          >
            Upload Evidence
          </Link>

          <Link
            href="/platform/evidence"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Open Evidence Library
          </Link>
        </div>
      </header>

      <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
        <div className="grid gap-8 p-7 lg:grid-cols-[0.8fr_1.2fr] lg:p-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">
              Organization Readiness
            </p>

            <div className="mt-4 flex flex-wrap items-end gap-4">
              <p
                className={`text-6xl font-bold ${
                  overallReadiness === null
                    ? "text-slate-300"
                    : overallReadiness >= 90
                      ? "text-emerald-300"
                      : overallReadiness >= 75
                        ? "text-amber-300"
                        : "text-red-300"
                }`}
              >
                {overallReadiness === null
                  ? "—"
                  : `${overallReadiness}%`}
              </p>

              <span
                className={`mb-2 rounded-full px-3 py-1 text-xs font-bold ${readinessStyles.badge}`}
              >
                {readinessStyles.label}
              </span>
            </div>

            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Based on {totalApplicableStandards} applicable
              standard evaluations across{" "}
              {facilities.length} facilities and{" "}
              {activeProgramReadiness.length} operational
              programs.
            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full ${readinessStyles.bar}`}
                style={{
                  width: `${
                    overallReadiness ?? 0
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-slate-400">
                Survey Ready
              </p>

              <p className="mt-3 text-3xl font-bold text-emerald-300">
                {surveyReadyStandards}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Applicable standards ready
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-slate-400">
                At Risk
              </p>

              <p className="mt-3 text-3xl font-bold text-red-300">
                {atRiskStandards}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Insufficient current evidence
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-slate-400">
                Missing
              </p>

              <p className="mt-3 text-3xl font-bold text-amber-300">
                {missingStandards}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                No current mapped evidence
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-slate-400">
                Missing Items
              </p>

              <p className="mt-3 text-3xl font-bold text-red-300">
                {readinessGapStandards}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Standards with readiness gaps
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-slate-400">
                Expired
              </p>

              <p className="mt-3 text-3xl font-bold text-red-300">
                {expiredEvidence.length}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Evidence records
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-slate-400">
                Review Queue
              </p>

              <p className="mt-3 text-3xl font-bold text-amber-300">
                {unverifiedMappings}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Unverified mappings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Evidence Records
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {totalEvidence}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Across {facilities.length} facilities
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Pending AI
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              pendingAiReview.length > 0
                ? "text-amber-700"
                : "text-emerald-700"
            }`}
          >
            {pendingAiReview.length}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Awaiting completion
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Failed Analysis
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              failedAnalysis.length > 0
                ? "text-red-700"
                : "text-emerald-700"
            }`}
          >
            {failedAnalysis.length}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Requires attention
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Expiring Soon
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              expiringEvidence.length > 0
                ? "text-amber-700"
                : "text-emerald-700"
            }`}
          >
            {expiringEvidence.length}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Within 30 days
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Active Programs
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {activeProgramReadiness.length}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            With applicable standards
          </p>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Operational Readiness
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Readiness by operational program
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Standards-based preparedness across applicable
              operational programs.
            </p>
          </div>

          <span className="text-sm font-semibold text-slate-500">
            {activeProgramReadiness.length} programs
          </span>
        </div>

        {activeProgramReadiness.length === 0 ? (
          <div className="px-6 py-14 text-center">
            <p className="font-bold text-slate-800">
              No operational-program evidence is mapped
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Upload and analyze evidence to begin
              calculating program readiness.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 p-6 lg:grid-cols-2">
            {activeProgramReadiness.map(
              (program) => {
                const styles =
                  getReadinessStyles(
                    program.readiness,
                  );

                return (
                  <Link
                    key={program.id}
                    href={`/platform/programs/${program.slug}`}
                    className="group rounded-2xl border border-slate-200 p-5 transition hover:border-teal-300 hover:bg-teal-50/30"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-slate-950 px-2.5 py-1 text-xs font-bold text-white">
                            {program.code}
                          </span>

                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-bold ${getRiskStyles(
                              program.riskLevel,
                            )}`}
                          >
                            {program.riskLevel ??
                              "Unrated"}{" "}
                            Risk
                          </span>
                        </div>

                        <h3 className="mt-3 text-lg font-bold text-slate-950 transition group-hover:text-teal-700">
                          {program.name}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {program.domain ??
                            "Operational Program"}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p
                          className={`text-2xl font-bold ${styles.text}`}
                        >
                          {program.readiness === null
                            ? "—"
                            : `${program.readiness}%`}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          {styles.label}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${styles.bar}`}
                        style={{
                          width: `${
                            program.readiness ?? 0
                          }%`,
                        }}
                      />
                    </div>

                    <div className="mt-5 grid grid-cols-4 gap-3 border-t border-slate-100 pt-4 text-center">
                      <div>
                        <p className="font-bold text-slate-950">
                          {program.evidenceCount}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Evidence
                        </p>
                      </div>

                      <div>
                        <p className="font-bold text-slate-950">
                          {program.analyzedCount}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Covered
                        </p>
                      </div>

                      <div>
                        <p
                          className={`font-bold ${
                            program.missingItems > 0
                              ? "text-red-700"
                              : "text-emerald-700"
                          }`}
                        >
                          {program.missingItems}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Missing
                        </p>
                      </div>

                      <div>
                        <p
                          className={`font-bold ${
                            program.expiredItems > 0
                              ? "text-red-700"
                              : "text-emerald-700"
                          }`}
                        >
                          {program.expiredItems}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Expired
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              },
            )}
          </div>
        )}
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Facility Performance
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Readiness by facility
            </h2>
          </div>

          {facilityReadiness.length === 0 ? (
            <div className="p-10 text-center text-slate-500">
              No facilities have been configured.
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {facilityReadiness.map((facility) => {
                const styles =
                  getReadinessStyles(
                    facility.readiness,
                  );

                return (
                  <article
                    key={facility.id}
                    className="p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-bold text-slate-950">
                          {facility.name}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {facility.primaryAccreditor ??
                            "Accreditor not specified"}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p
                          className={`text-2xl font-bold ${styles.text}`}
                        >
                          {facility.readiness === null
                            ? "—"
                            : `${facility.readiness}%`}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          {styles.label}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${styles.bar}`}
                        style={{
                          width: `${
                            facility.readiness ?? 0
                          }%`,
                        }}
                      />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span>
                        <strong className="text-slate-900">
                          {
                            facility.evidenceCount
                          }
                        </strong>{" "}
                        evidence records
                      </span>

                      <span>
                        <strong
                          className={
                            facility.missingItems > 0
                              ? "text-red-700"
                              : "text-emerald-700"
                          }
                        >
                          {
                            facility.missingItems
                          }
                        </strong>{" "}
                        missing items
                      </span>

                      <span>
                        <strong
                          className={
                            facility.expiredCount > 0
                              ? "text-red-700"
                              : "text-emerald-700"
                          }
                        >
                          {
                            facility.expiredCount
                          }
                        </strong>{" "}
                        expired
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Regulatory Coverage
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Accreditation coverage
            </h2>
          </div>

          {accreditationSummary.length === 0 ? (
            <div className="p-10 text-center text-slate-500">
              No accreditation standards have been
              mapped.
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {accreditationSummary.map(
                (item) => (
                  <article
                    key={item.accreditor}
                    className="p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-slate-950">
                          {item.accreditor}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.evidence} supporting
                          evidence records
                        </p>
                      </div>

                      <p className="text-2xl font-bold text-teal-700">
                        {item.verificationRate}%
                      </p>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-teal-600"
                        style={{
                          width: `${item.verificationRate}%`,
                        }}
                      />
                    </div>

                    <p className="mt-3 text-sm text-slate-500">
                      {item.verified} of{" "}
                      {item.standards} applicable standards
                      ready
                    </p>
                  </article>
                ),
              )}
            </div>
          )}
        </section>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-red-700">
              Immediate Attention
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              High-risk evidence and documentation gaps
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Records most likely to create survey
              exposure.
            </p>
          </div>

          <Link
            href="/platform/evidence?readiness=at-risk"
            className="text-sm font-bold text-teal-700 transition hover:text-teal-800"
          >
            View all at-risk evidence →
          </Link>
        </div>

        {highRiskEvidence.length === 0 ? (
          <div className="px-6 py-14 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-100 font-bold text-emerald-700">
              ✓
            </div>

            <p className="mt-4 font-bold text-slate-900">
              No immediate high-risk gaps identified
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Current analyzed evidence does not contain
              critical readiness concerns.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-200">
            {highRiskEvidence.map((item) => {
              const score =
                normalizePercentage(
                  item.analysisSurveyReadiness,
                );

              const styles =
                getReadinessStyles(score);

              return (
                <article
                  key={item.id}
                  className="flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${getRiskStyles(
                          item.analysisRiskLevel,
                        )}`}
                      >
                        {item.analysisRiskLevel ??
                          "Unrated"}{" "}
                        Risk
                      </span>

                      {isExpired(
                        item.expirationDate,
                      ) ? (
                        <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-800">
                          Expired
                        </span>
                      ) : null}

                      {item.analysisMissingEvidence
                        .length > 0 ? (
                        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
                          {
                            item
                              .analysisMissingEvidence
                              .length
                          }{" "}
                          Missing
                        </span>
                      ) : null}
                    </div>

                    <Link
                      href={`/platform/evidence/${item.id}`}
                      className="mt-3 block truncate text-lg font-bold text-slate-950 transition hover:text-teal-700"
                    >
                      {item.title}
                    </Link>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.facility?.name ??
                        "Organization-wide"}
                      {item.expirationDate
                        ? ` • Expires ${formatDate(
                            item.expirationDate,
                          )}`
                        : ""}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-5">
                    <div className="text-right">
                      <p
                        className={`text-2xl font-bold ${styles.text}`}
                      >
                        {score === null
                          ? "—"
                          : `${score}%`}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        {styles.label}
                      </p>
                    </div>

                    <Link
                      href={`/platform/evidence/${item.id}`}
                      className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-5 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
                    >
                      Review
                    </Link>
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
              Prove Compliance
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Readiness becomes stronger with every
              verified record.
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Upload missing documentation, resolve
              expired records, and review AI-generated
              mappings to improve the live survey
              readiness position for{" "}
              {organization.name}.
            </p>
          </div>

          <Link
            href="/platform/evidence"
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Resolve Evidence Gaps
          </Link>
        </div>
      </section>
    </main>
  );
}