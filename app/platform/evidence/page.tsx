import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

export default async function EvidencePage() {
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

  const evidence = await prisma.evidence.findMany({
    where: {
      organizationId,
    },
    include: {
      facility: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      uploadedAt: "desc",
    },
  });

  const totalEvidence = evidence.length;

  const verifiedEvidence = evidence.filter(
    (item) => item.status === "Verified",
  ).length;

  const expiringEvidence = evidence.filter((item) => {
    if (!item.expirationDate) {
      return false;
    }

    const now = new Date();
    const thirtyDaysFromNow = new Date();

    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

    return (
      item.expirationDate >= now &&
      item.expirationDate <= thirtyDaysFromNow
    );
  }).length;

  const draftEvidence = evidence.filter(
    (item) => item.status === "Draft",
  ).length;

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            Evidence Center
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
            Evidence Library
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-500">
            Store, organize, track, and prepare compliance evidence for every
            facility and accreditation program.
          </p>
        </div>

        <Link
          href="/platform/evidence/new"
          className="inline-flex w-fit items-center justify-center rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
        >
          + Add Evidence
        </Link>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Evidence files
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {totalEvidence}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Total records
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Verified
          </p>

          <p className="mt-3 text-3xl font-bold text-emerald-700">
            {verifiedEvidence}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Ready for survey
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Expiring soon
          </p>

          <p className="mt-3 text-3xl font-bold text-amber-700">
            {expiringEvidence}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Within 30 days
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Drafts
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {draftEvidence}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Awaiting review
          </p>
        </article>
      </section>

      <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Evidence records
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Review uploaded evidence and document readiness.
            </p>
          </div>
        </div>

        {evidence.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-2xl text-teal-700">
              ↑
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              No evidence has been added
            </h3>

            <p className="mx-auto mt-2 max-w-xl leading-7 text-slate-500">
              Add your first policy, inspection, competency, drill record,
              report, photo, or other survey evidence.
            </p>

            <Link
              href="/platform/evidence/new"
              className="mt-6 inline-flex rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Add your first evidence record
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-slate-50 text-sm text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Evidence</th>
                  <th className="px-6 py-4 font-semibold">Facility</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Owner</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Analysis</th>
                  <th className="px-6 py-4 font-semibold">
                    Expiration
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {evidence.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <Link
                        href={`/platform/evidence/${item.id}`}
                        className="font-semibold text-slate-950 transition hover:text-teal-700"
                      >
                        {item.title}
                      </Link>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.fileName}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {item.facility?.name ?? "Organization-wide"}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {item.category ?? "Uncategorized"}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {item.ownerName ?? "Unassigned"}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "Verified"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.status === "Pending"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          item.analysisStatus === "Ready"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.analysisStatus === "Extraction Failed"
                              ? "bg-red-100 text-red-700"
                              : item.analysisStatus === "Extracting"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {item.analysisStatus}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {item.expirationDate
                        ? item.expirationDate.toLocaleDateString()
                        : "No expiration"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}