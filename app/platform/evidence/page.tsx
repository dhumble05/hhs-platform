import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

type EvidencePageProps = {
  searchParams: Promise<{
    search?: string;
    facility?: string;
    program?: string;
    status?: string;
    analysis?: string;
    readiness?: string;
    expiration?: string;
    sort?: string;
  }>;
};

type EvidenceRecord = {
  id: string;
  title: string;
  description: string | null;
  fileName: string;
  fileType: string | null;
  category: string | null;
  status: string;
  ownerName: string | null;
  expirationDate: Date | null;
  uploadedAt: Date;
  documentDate: Date | null;
  evidenceType: string | null;
  frequency: string | null;
  serviceProvider: string | null;
  performedBy: string | null;
  isRecurring: boolean;
  analysisStatus: string;
  analysisDocumentType: string | null;
  analysisDepartment: string | null;
  analysisConfidence: number | null;
  analysisEvidenceQuality: number | null;
  analysisSurveyReadiness: number | null;
  analysisRiskLevel: string | null;
  analysisMissingEvidence: string[];
  updatedAt: Date;
  facility: {
    id: string;
    name: string;
  } | null;
  operationalTopicMappings: Array<{
    id: string;
    mappingSource: string;
    confidence: number | null;
    isVerified: boolean;
    operationalTopic: {
      id: string;
      code: string;
      slug: string;
      name: string;
      domain: string | null;
    };
  }>;
  standardMappings: Array<{
    id: string;
    mappingSource: string;
    confidence: number | null;
    isVerified: boolean;
    standard: {
      id: string;
      accreditor: string;
      code: string;
      title: string;
    };
  }>;
};

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

function getStatusClasses(status: string) {
  const normalized = status.toLowerCase();

  if (
    normalized === "verified" ||
    normalized === "approved" ||
    normalized === "active"
  ) {
    return "bg-emerald-100 text-emerald-800";
  }

  if (
    normalized === "pending" ||
    normalized === "in review"
  ) {
    return "bg-amber-100 text-amber-800";
  }

  if (normalized === "expired") {
    return "bg-red-100 text-red-800";
  }

  return "bg-slate-100 text-slate-700";
}

function getAnalysisClasses(status: string) {
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

function getReadinessClasses(score: number | null) {
  if (score === null) {
    return {
      text: "text-slate-500",
      badge: "bg-slate-100 text-slate-700",
      bar: "bg-slate-300",
    };
  }

  if (score >= 90) {
    return {
      text: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-800",
      bar: "bg-emerald-500",
    };
  }

  if (score >= 75) {
    return {
      text: "text-amber-700",
      badge: "bg-amber-100 text-amber-800",
      bar: "bg-amber-500",
    };
  }

  return {
    text: "text-red-700",
    badge: "bg-red-100 text-red-800",
    bar: "bg-red-500",
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

  if (riskLevel === "Low") {
    return "bg-emerald-100 text-emerald-800";
  }

  return "bg-slate-100 text-slate-700";
}

function isExpiringWithinDays(
  expirationDate: Date | null,
  days: number,
) {
  if (!expirationDate) {
    return false;
  }

  const now = new Date();
  const futureDate = new Date();

  futureDate.setDate(futureDate.getDate() + days);

  return (
    expirationDate >= now &&
    expirationDate <= futureDate
  );
}

function isExpired(expirationDate: Date | null) {
  if (!expirationDate) {
    return false;
  }

  return expirationDate < new Date();
}

function getFileLabel(fileType: string | null) {
  if (!fileType) {
    return "FILE";
  }

  const normalized = fileType.toLowerCase();

  if (normalized.includes("pdf")) {
    return "PDF";
  }

  if (
    normalized.includes("word") ||
    normalized.includes("document")
  ) {
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

  return fileType
    .split("/")
    .pop()
    ?.slice(0, 4)
    .toUpperCase() ?? "FILE";
}

function buildPageUrl(
  current: {
    search: string;
    facility: string;
    program: string;
    status: string;
    analysis: string;
    readiness: string;
    expiration: string;
    sort: string;
  },
  changes: Partial<typeof current>,
) {
  const values = {
    ...current,
    ...changes,
  };

  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(values)) {
    if (value) {
      params.set(key, value);
    }
  }

  const query = params.toString();

  return query
    ? `/platform/evidence?${query}`
    : "/platform/evidence";
}

export default async function EvidencePage({
  searchParams,
}: EvidencePageProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const filters = await searchParams;

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

  const [evidenceRecords, facilities, operationalTopics] =
    await Promise.all([
      prisma.evidence.findMany({
        where: {
          organizationId,
        },
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
          evidenceType: true,
          frequency: true,
          serviceProvider: true,
          performedBy: true,
          isRecurring: true,
          analysisStatus: true,
          analysisDocumentType: true,
          analysisDepartment: true,
          analysisConfidence: true,
          analysisEvidenceQuality: true,
          analysisSurveyReadiness: true,
          analysisRiskLevel: true,
          analysisMissingEvidence: true,
          updatedAt: true,
          facility: {
            select: {
              id: true,
              name: true,
            },
          },
          operationalTopicMappings: {
            select: {
              id: true,
              mappingSource: true,
              confidence: true,
              isVerified: true,
              operationalTopic: {
                select: {
                  id: true,
                  code: true,
                  slug: true,
                  name: true,
                  domain: true,
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
              mappingSource: true,
              confidence: true,
              isVerified: true,
              standard: {
                select: {
                  id: true,
                  accreditor: true,
                  code: true,
                  title: true,
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
          name: true,
          slug: true,
          domain: true,
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

  const evidence = evidenceRecords as EvidenceRecord[];

  const search = filters.search?.trim() ?? "";
  const facilityFilter = filters.facility ?? "";
  const programFilter = filters.program ?? "";
  const statusFilter = filters.status ?? "";
  const analysisFilter = filters.analysis ?? "";
  const readinessFilter = filters.readiness ?? "";
  const expirationFilter = filters.expiration ?? "";
  const sort = filters.sort ?? "updated-desc";

  const currentFilters = {
    search,
    facility: facilityFilter,
    program: programFilter,
    status: statusFilter,
    analysis: analysisFilter,
    readiness: readinessFilter,
    expiration: expirationFilter,
    sort,
  };

  let filteredEvidence = evidence.filter((item) => {
    if (search) {
      const searchableText = [
        item.title,
        item.description,
        item.fileName,
        item.category,
        item.ownerName,
        item.evidenceType,
        item.analysisDocumentType,
        item.analysisDepartment,
        item.serviceProvider,
        item.performedBy,
        item.facility?.name,
        ...item.operationalTopicMappings.map(
          (mapping) => mapping.operationalTopic.name,
        ),
        ...item.operationalTopicMappings.map(
          (mapping) => mapping.operationalTopic.domain,
        ),
        ...item.standardMappings.map(
          (mapping) => mapping.standard.code,
        ),
        ...item.standardMappings.map(
          (mapping) => mapping.standard.title,
        ),
        ...item.standardMappings.map(
          (mapping) => mapping.standard.accreditor,
        ),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      if (!searchableText.includes(search.toLowerCase())) {
        return false;
      }
    }

    if (
      facilityFilter &&
      item.facility?.id !== facilityFilter
    ) {
      return false;
    }

    if (
      programFilter &&
      !item.operationalTopicMappings.some(
        (mapping) =>
          mapping.operationalTopic.id === programFilter,
      )
    ) {
      return false;
    }

    if (
      statusFilter &&
      item.status !== statusFilter
    ) {
      return false;
    }

    if (
      analysisFilter &&
      item.analysisStatus !== analysisFilter
    ) {
      return false;
    }

    const readiness =
      normalizePercentage(
        item.analysisSurveyReadiness,
      );

    if (
      readinessFilter === "survey-ready" &&
      (readiness === null || readiness < 90)
    ) {
      return false;
    }

    if (
      readinessFilter === "needs-attention" &&
      (readiness === null ||
        readiness < 75 ||
        readiness >= 90)
    ) {
      return false;
    }

    if (
      readinessFilter === "at-risk" &&
      (readiness === null || readiness >= 75)
    ) {
      return false;
    }

    if (
      readinessFilter === "not-assessed" &&
      readiness !== null
    ) {
      return false;
    }

    if (
      expirationFilter === "expired" &&
      !isExpired(item.expirationDate)
    ) {
      return false;
    }

    if (
      expirationFilter === "30-days" &&
      !isExpiringWithinDays(
        item.expirationDate,
        30,
      )
    ) {
      return false;
    }

    if (
      expirationFilter === "60-days" &&
      !isExpiringWithinDays(
        item.expirationDate,
        60,
      )
    ) {
      return false;
    }

    if (
      expirationFilter === "no-expiration" &&
      item.expirationDate
    ) {
      return false;
    }

    return true;
  });

  filteredEvidence = [...filteredEvidence].sort(
    (first, second) => {
      if (sort === "title-asc") {
        return first.title.localeCompare(second.title);
      }

      if (sort === "readiness-desc") {
        return (
          (normalizePercentage(
            second.analysisSurveyReadiness,
          ) ?? -1) -
          (normalizePercentage(
            first.analysisSurveyReadiness,
          ) ?? -1)
        );
      }

      if (sort === "readiness-asc") {
        return (
          (normalizePercentage(
            first.analysisSurveyReadiness,
          ) ?? 101) -
          (normalizePercentage(
            second.analysisSurveyReadiness,
          ) ?? 101)
        );
      }

      if (sort === "expiration-asc") {
        const firstExpiration =
          first.expirationDate?.getTime() ??
          Number.MAX_SAFE_INTEGER;

        const secondExpiration =
          second.expirationDate?.getTime() ??
          Number.MAX_SAFE_INTEGER;

        return firstExpiration - secondExpiration;
      }

      if (sort === "uploaded-desc") {
        return (
          second.uploadedAt.getTime() -
          first.uploadedAt.getTime()
        );
      }

      return (
        second.updatedAt.getTime() -
        first.updatedAt.getTime()
      );
    },
  );

  const totalEvidence = evidence.length;

  const completedEvidence = evidence.filter(
    (item) => item.analysisStatus === "Completed",
  );

  const verifiedEvidence = evidence.filter(
    (item) =>
      item.status === "Verified" ||
      item.operationalTopicMappings.some(
        (mapping) => mapping.isVerified,
      ) ||
      item.standardMappings.some(
        (mapping) => mapping.isVerified,
      ),
  ).length;

  const pendingAnalysis = evidence.filter(
    (item) =>
      item.analysisStatus === "Pending" ||
      item.analysisStatus === "Processing",
  ).length;

  const failedAnalysis = evidence.filter(
    (item) => item.analysisStatus === "Failed",
  ).length;

  const expiringEvidence = evidence.filter((item) =>
    isExpiringWithinDays(item.expirationDate, 30),
  ).length;

  const expiredEvidence = evidence.filter((item) =>
    isExpired(item.expirationDate),
  ).length;

  const missingItems = completedEvidence.reduce(
    (total, item) =>
      total + item.analysisMissingEvidence.length,
    0,
  );

  const readinessScores = completedEvidence
    .map((item) =>
      normalizePercentage(
        item.analysisSurveyReadiness,
      ),
    )
    .filter(
      (score): score is number =>
        typeof score === "number",
    );

  const averageReadiness =
    readinessScores.length > 0
      ? Math.round(
          readinessScores.reduce(
            (total, score) => total + score,
            0,
          ) / readinessScores.length,
        )
      : 0;

  const activeFilterCount = [
    search,
    facilityFilter,
    programFilter,
    statusFilter,
    analysisFilter,
    readinessFilter,
    expirationFilter,
  ].filter(Boolean).length;

  const statusOptions = Array.from(
    new Set(evidence.map((item) => item.status)),
  ).sort();

  const analysisOptions = Array.from(
    new Set(
      evidence.map((item) => item.analysisStatus),
    ),
  ).sort();

  return (
    <main className="mx-auto w-full max-w-[1600px] space-y-8">
      <header className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            Evidence Center
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
            Evidence Library
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Search, organize, analyze, and present
            compliance evidence across facilities,
            operational programs, and accreditation
            standards.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/platform/evidence/add"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800"
          >
            Upload Evidence
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Evidence Library
              </p>

              <p className="mt-3 text-4xl font-bold text-slate-950">
                {totalEvidence}
              </p>
            </div>

            <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
              {organization.name}
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            {verifiedEvidence} verified or reviewed
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Average Readiness
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              getReadinessClasses(averageReadiness).text
            }`}
          >
            {averageReadiness}%
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {completedEvidence.length} analyzed
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            AI Processing
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              pendingAnalysis > 0
                ? "text-amber-700"
                : "text-emerald-700"
            }`}
          >
            {pendingAnalysis}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {failedAnalysis > 0
              ? `${failedAnalysis} failed`
              : "No failures"}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Expiring Soon
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              expiringEvidence > 0
                ? "text-amber-700"
                : "text-emerald-700"
            }`}
          >
            {expiringEvidence}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Within 30 days
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Documentation Gaps
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              missingItems > 0
                ? "text-red-700"
                : "text-emerald-700"
            }`}
          >
            {missingItems}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {expiredEvidence} expired records
          </p>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Search and filter evidence
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Search document names, programs,
                facilities, standards, departments, and
                accreditation records.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {activeFilterCount > 0 ? (
                <span className="rounded-full bg-teal-100 px-3 py-1.5 text-xs font-bold text-teal-800">
                  {activeFilterCount} active{" "}
                  {activeFilterCount === 1
                    ? "filter"
                    : "filters"}
                </span>
              ) : null}

              <Link
                href="/platform/evidence"
                className="text-sm font-bold text-slate-500 transition hover:text-teal-700"
              >
                Clear filters
              </Link>
            </div>
          </div>

          <form
            method="get"
            className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            <label className="md:col-span-2 xl:col-span-2">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Search
              </span>

              <input
                type="search"
                name="search"
                defaultValue={search}
                placeholder="Search files, programs, standards, departments..."
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              />
            </label>

            <label>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Facility
              </span>

              <select
                name="facility"
                defaultValue={facilityFilter}
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              >
                <option value="">All facilities</option>

                {facilities.map((facility) => (
                  <option
                    key={facility.id}
                    value={facility.id}
                  >
                    {facility.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Operational Program
              </span>

              <select
                name="program"
                defaultValue={programFilter}
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              >
                <option value="">All programs</option>

                {operationalTopics.map((topic) => (
                  <option
                    key={topic.id}
                    value={topic.id}
                  >
                    {topic.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Evidence Status
              </span>

              <select
                name="status"
                defaultValue={statusFilter}
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              >
                <option value="">All statuses</option>

                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                AI Analysis
              </span>

              <select
                name="analysis"
                defaultValue={analysisFilter}
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              >
                <option value="">
                  All analysis statuses
                </option>

                {analysisOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Survey Readiness
              </span>

              <select
                name="readiness"
                defaultValue={readinessFilter}
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              >
                <option value="">
                  All readiness levels
                </option>
                <option value="survey-ready">
                  Survey Ready — 90%+
                </option>
                <option value="needs-attention">
                  Needs Attention — 75–89%
                </option>
                <option value="at-risk">
                  At Risk — below 75%
                </option>
                <option value="not-assessed">
                  Not Assessed
                </option>
              </select>
            </label>

            <label>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Expiration
              </span>

              <select
                name="expiration"
                defaultValue={expirationFilter}
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              >
                <option value="">
                  All expiration dates
                </option>
                <option value="expired">Expired</option>
                <option value="30-days">
                  Expiring within 30 days
                </option>
                <option value="60-days">
                  Expiring within 60 days
                </option>
                <option value="no-expiration">
                  No expiration
                </option>
              </select>
            </label>

            <label>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Sort
              </span>

              <select
                name="sort"
                defaultValue={sort}
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              >
                <option value="updated-desc">
                  Recently updated
                </option>
                <option value="uploaded-desc">
                  Recently uploaded
                </option>
                <option value="title-asc">
                  Document title
                </option>
                <option value="readiness-desc">
                  Highest readiness
                </option>
                <option value="readiness-asc">
                  Lowest readiness
                </option>
                <option value="expiration-asc">
                  Expiring first
                </option>
              </select>
            </label>

            <div className="flex items-end md:col-span-2 xl:col-span-1">
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Apply Filters
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Evidence records
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Showing {filteredEvidence.length} of{" "}
              {totalEvidence} records
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href={buildPageUrl(currentFilters, {
                analysis: "Pending",
              })}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
            >
              Pending AI
            </Link>

            <Link
              href={buildPageUrl(currentFilters, {
                expiration: "30-days",
              })}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
            >
              Expiring Soon
            </Link>

            <Link
              href={buildPageUrl(currentFilters, {
                readiness: "at-risk",
              })}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-800"
            >
              At Risk
            </Link>

            <Link
              href={buildPageUrl(currentFilters, {
                readiness: "survey-ready",
              })}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Survey Ready
            </Link>
          </div>
        </div>

        {filteredEvidence.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-teal-100 text-2xl font-bold text-teal-700">
              ↑
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              {totalEvidence === 0
                ? "No evidence has been uploaded"
                : "No evidence matches these filters"}
            </h3>

            <p className="mx-auto mt-2 max-w-xl leading-7 text-slate-500">
              {totalEvidence === 0
                ? "Upload policies, inspections, testing records, plans, reports, photos, and other compliance documentation."
                : "Clear or adjust the active filters to return more evidence records."}
            </p>

            {totalEvidence === 0 ? (
              <Link
                href="/platform/evidence/add"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 py-3 font-bold text-white transition hover:bg-teal-800"
              >
                Upload First Evidence
              </Link>
            ) : (
              <Link
                href="/platform/evidence"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
              >
                Clear Filters
              </Link>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1420px] text-left">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-4">
                    Document
                  </th>
                  <th className="px-5 py-4">
                    Operational Program
                  </th>
                  <th className="px-5 py-4">
                    Facility
                  </th>
                  <th className="px-5 py-4">
                    Status
                  </th>
                  <th className="px-5 py-4">
                    Survey Readiness
                  </th>
                  <th className="px-5 py-4">
                    AI Confidence
                  </th>
                  <th className="px-5 py-4">
                    Standards
                  </th>
                  <th className="px-5 py-4">
                    Expiration
                  </th>
                  <th className="px-6 py-4">
                    Updated
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {filteredEvidence.map((item) => {
                  const readiness =
                    normalizePercentage(
                      item.analysisSurveyReadiness,
                    );

                  const confidence =
                    normalizePercentage(
                      item.analysisConfidence,
                    );

                  const readinessClasses =
                    getReadinessClasses(readiness);

                  const primaryProgram =
                    item.operationalTopicMappings[0]
                      ?.operationalTopic;

                  const additionalPrograms =
                    Math.max(
                      item.operationalTopicMappings.length -
                        1,
                      0,
                    );

                  const verifiedStandards =
                    item.standardMappings.filter(
                      (mapping) =>
                        mapping.isVerified,
                    ).length;

                  const expirationExpired =
                    isExpired(item.expirationDate);

                  const expirationSoon =
                    isExpiringWithinDays(
                      item.expirationDate,
                      30,
                    );

                  return (
                    <tr
                      key={item.id}
                      className="group align-top transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-5">
                        <div className="flex min-w-[290px] items-start gap-4">
                          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-xs font-black text-slate-600">
                            {getFileLabel(item.fileType)}
                          </div>

                          <div className="min-w-0">
                            <Link
                              href={`/platform/evidence/${item.id}`}
                              className="block truncate font-bold text-slate-950 transition group-hover:text-teal-700"
                            >
                              {item.title}
                            </Link>

                            <p className="mt-1 max-w-[300px] truncate text-sm text-slate-500">
                              {item.fileName}
                            </p>

                            <div className="mt-2 flex flex-wrap gap-2">
                              {item.analysisDocumentType ? (
                                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                                  {
                                    item.analysisDocumentType
                                  }
                                </span>
                              ) : null}

                              {item.analysisDepartment ? (
                                <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
                                  {
                                    item.analysisDepartment
                                  }
                                </span>
                              ) : null}

                              {item.isRecurring ? (
                                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                                  Recurring
                                </span>
                              ) : null}

                              {item.analysisRiskLevel ? (
                                <span
                                  className={`rounded-full px-2.5 py-1 text-xs font-bold ${getRiskClasses(
                                    item.analysisRiskLevel,
                                  )}`}
                                >
                                  {
                                    item.analysisRiskLevel
                                  }{" "}
                                  Risk
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <div className="min-w-[190px]">
                          {primaryProgram ? (
                            <>
                              <Link
                                href={`/platform/programs/${primaryProgram.slug}`}
                                className="font-semibold text-slate-800 transition hover:text-teal-700"
                              >
                                {primaryProgram.name}
                              </Link>

                              <p className="mt-1 text-xs text-slate-500">
                                {primaryProgram.domain ??
                                  "Operational Program"}
                              </p>

                              {additionalPrograms > 0 ? (
                                <p className="mt-2 text-xs font-bold text-teal-700">
                                  +{additionalPrograms} more
                                </p>
                              ) : null}
                            </>
                          ) : (
                            <span className="text-sm text-slate-400">
                              Not mapped
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <p className="min-w-[150px] text-sm font-semibold text-slate-700">
                          {item.facility?.name ??
                            "Organization-wide"}
                        </p>
                      </td>

                      <td className="px-5 py-5">
                        <div className="min-w-[130px] space-y-2">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${getStatusClasses(
                              item.status,
                            )}`}
                          >
                            {item.status}
                          </span>

                          <span
                            className={`block w-fit rounded-full px-3 py-1 text-xs font-bold ${getAnalysisClasses(
                              item.analysisStatus,
                            )}`}
                          >
                            AI {item.analysisStatus}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <div className="min-w-[150px]">
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className={`text-sm font-bold ${readinessClasses.text}`}
                            >
                              {readiness === null
                                ? "Not assessed"
                                : `${readiness}%`}
                            </span>
                          </div>

                          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className={`h-full rounded-full ${readinessClasses.bar}`}
                              style={{
                                width: `${
                                  readiness ?? 0
                                }%`,
                              }}
                            />
                          </div>

                          {item.analysisMissingEvidence
                            .length > 0 ? (
                            <p className="mt-2 text-xs font-semibold text-red-700">
                              {
                                item
                                  .analysisMissingEvidence
                                  .length
                              }{" "}
                              missing{" "}
                              {item
                                .analysisMissingEvidence
                                .length === 1
                                ? "item"
                                : "items"}
                            </p>
                          ) : null}
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <div className="min-w-[110px]">
                          <p className="text-sm font-bold text-slate-800">
                            {confidence === null
                              ? "—"
                              : `${confidence}%`}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            AI assessment
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <div className="min-w-[110px]">
                          <p className="font-bold text-slate-900">
                            {
                              item.standardMappings
                                .length
                            }
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {verifiedStandards} verified
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <div className="min-w-[130px]">
                          <p
                            className={`text-sm font-semibold ${
                              expirationExpired
                                ? "text-red-700"
                                : expirationSoon
                                  ? "text-amber-700"
                                  : "text-slate-700"
                            }`}
                          >
                            {item.expirationDate
                              ? formatDate(
                                  item.expirationDate,
                                )
                              : "No expiration"}
                          </p>

                          {expirationExpired ? (
                            <p className="mt-1 text-xs font-bold text-red-700">
                              Expired
                            </p>
                          ) : expirationSoon ? (
                            <p className="mt-1 text-xs font-bold text-amber-700">
                              Expiring soon
                            </p>
                          ) : null}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="min-w-[120px]">
                          <p className="text-sm font-semibold text-slate-700">
                            {formatDate(item.updatedAt)}
                          </p>

                          <Link
                            href={`/platform/evidence/${item.id}`}
                            className="mt-2 inline-flex text-xs font-bold text-teal-700 transition hover:text-teal-800"
                          >
                            Open record →
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
              Add compliance documentation without
              organizing it manually.
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Upload policies, inspections, service
              reports, testing records, plans, meeting
              minutes, and corrective actions. HHS will
              analyze and connect each record to the
              appropriate operational programs and
              standards.
            </p>
          </div>

          <Link
            href="/platform/evidence/add"
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Upload Evidence
          </Link>
        </div>
      </section>
    </main>
  );
}