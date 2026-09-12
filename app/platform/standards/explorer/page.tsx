import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

type StandardsExplorerPageProps = {
  searchParams: Promise<{
    q?: string;
    accreditor?: string;
    chapter?: string;
  }>;
};

export default async function StandardsExplorerPage({
  searchParams,
}: StandardsExplorerPageProps) {
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
    redirect("/platform/organization");
  }

  const params = await searchParams;

  const query = params.q?.trim() ?? "";
  const accreditor = params.accreditor?.trim() ?? "";
  const chapter = params.chapter?.trim() ?? "";

  const visibleStandardWhere = {
    OR: [
      {
        organizationId: null,
      },
      {
        organizationId,
      },
    ],
  };

  const standards = await prisma.standard.findMany({
    where: {
      AND: [
        visibleStandardWhere,
        {
          status: "Active",
        },
        accreditor
          ? {
              accreditor,
            }
          : {},
        chapter
          ? {
              chapter,
            }
          : {},
        query
          ? {
              OR: [
                {
                  code: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
                {
                  title: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
                {
                  intent: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
                {
                  description: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
                {
                  requirement: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
              ],
            }
          : {},
      ],
    },
    select: {
      id: true,
      accreditor: true,
      chapter: true,
      code: true,
      title: true,
      intent: true,
      description: true,
      riskLevel: true,
      priority: true,
      evidenceMappings: {
        where: {
          evidence: {
            organizationId,
          },
        },
        select: {
          id: true,
        },
      },
    },
    orderBy: [
      {
        accreditor: "asc",
      },
      {
        chapter: "asc",
      },
      {
        priority: "asc",
      },
      {
        code: "asc",
      },
    ],
  });

  const filterOptions = await prisma.standard.findMany({
    where: {
      AND: [
        visibleStandardWhere,
        {
          status: "Active",
        },
      ],
    },
    select: {
      accreditor: true,
      chapter: true,
    },
    orderBy: [
      {
        accreditor: "asc",
      },
      {
        chapter: "asc",
      },
    ],
  });

  const accreditors = Array.from(
    new Set(filterOptions.map((item) => item.accreditor)),
  );

  const chapters = Array.from(
    new Set(
      filterOptions
        .filter(
          (item) =>
            !accreditor || item.accreditor === accreditor,
        )
        .map((item) => item.chapter)
        .filter((value): value is string => Boolean(value)),
    ),
  );

  type StandardResult = (typeof standards)[number];

  const groupedStandards = standards.reduce<
    Record<string, Record<string, StandardResult[]>>
  >((groups, standard) => {
    const accreditorName = standard.accreditor;
    const chapterName = standard.chapter ?? "General";

    if (!groups[accreditorName]) {
      groups[accreditorName] = {};
    }

    if (!groups[accreditorName][chapterName]) {
      groups[accreditorName][chapterName] = [];
    }

    groups[accreditorName][chapterName].push(standard);

    return groups;
  }, {});

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
      <header className="border-b border-slate-200 pb-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Compliance Library
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
              Standards Explorer
            </h1>

            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-500">
              Navigate the standards your organization is surveyed
              against, review supporting evidence, and identify
              readiness gaps.
            </p>
          </div>

          <Link
            href="/platform/standards"
            className="inline-flex w-fit items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Manage standards
          </Link>
        </div>
      </header>

      <section className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <form className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px_220px_auto]">
          <div>
            <label
              htmlFor="q"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Search standards
            </label>

            <input
              id="q"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Search code, title, intent, or requirement"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
            />
          </div>

          <div>
            <label
              htmlFor="accreditor"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Organization
            </label>

            <select
              id="accreditor"
              name="accreditor"
              defaultValue={accreditor}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
            >
              <option value="">All organizations</option>

              {accreditors.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="chapter"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Chapter
            </label>

            <select
              id="chapter"
              name="chapter"
              defaultValue={chapter}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
            >
              <option value="">All chapters</option>

              {chapters.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end gap-2">
            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Apply
            </button>

            <Link
              href="/platform/standards/explorer"
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Reset
            </Link>
          </div>
        </form>
      </section>

      <div className="mt-7 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          <span className="font-bold text-slate-950">
            {standards.length}
          </span>{" "}
          {standards.length === 1 ? "standard" : "standards"} available
        </p>
      </div>

      {standards.length === 0 ? (
        <section className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-teal-700">
            ≡
          </div>

          <h2 className="mt-5 text-xl font-bold text-slate-950">
            No standards found
          </h2>

          <p className="mt-2 text-slate-500">
            Adjust the current search or filter selections.
          </p>
        </section>
      ) : (
        <div className="mt-6 space-y-8">
          {Object.entries(groupedStandards).map(
            ([accreditorName, chapterGroups]) => (
              <section
                key={accreditorName}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="bg-slate-950 px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                    Accrediting organization
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-white">
                    {accreditorName}
                  </h2>
                </div>

                <div className="divide-y divide-slate-200">
                  {Object.entries(chapterGroups).map(
                    ([chapterName, chapterStandards]) => (
                      <div key={chapterName} className="p-6">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                              Chapter
                            </p>

                            <h3 className="mt-1 text-xl font-bold text-slate-950">
                              {chapterName}
                            </h3>
                          </div>

                          <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                            {chapterStandards.length}{" "}
                            {chapterStandards.length === 1
                              ? "standard"
                              : "standards"}
                          </span>
                        </div>

                        <div className="mt-5 grid gap-3">
                          {chapterStandards.map((standard) => {
                            const evidenceCount =
                              standard.evidenceMappings.length;

                            const summary =
                              standard.intent ??
                              standard.description ??
                              "Review this standard’s requirements and supporting evidence.";

                            return (
                              <Link
                                key={standard.id}
                                href={`/platform/standards/${standard.code}`}
                                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-teal-300 hover:bg-teal-50/40 hover:shadow-sm"
                              >
                                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                  <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="rounded-lg bg-teal-100 px-3 py-1.5 text-sm font-bold text-teal-800">
                                        {standard.code}
                                      </span>

                                      {standard.riskLevel ? (
                                        <span className="rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-800">
                                          {standard.riskLevel} risk
                                        </span>
                                      ) : null}
                                    </div>

                                    <h4 className="mt-3 text-lg font-bold text-slate-950 transition group-hover:text-teal-800">
                                      {standard.title}
                                    </h4>

                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                                      {summary}
                                    </p>
                                  </div>

                                  <div className="flex shrink-0 items-center gap-3">
                                    <div className="rounded-xl bg-slate-50 px-4 py-3 text-center">
                                      <p className="text-2xl font-bold text-slate-950">
                                        {evidenceCount}
                                      </p>

                                      <p className="text-xs font-medium text-slate-500">
                                        Evidence
                                      </p>
                                    </div>

                                    <span className="text-xl font-bold text-slate-300 transition group-hover:translate-x-1 group-hover:text-teal-700">
                                      →
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </section>
            ),
          )}
        </div>
      )}
    </main>
  );
}