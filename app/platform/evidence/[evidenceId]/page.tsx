import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import AIInsightCard from "@/components/platform/AIInsightCard";
import { analyzeEvidence } from "@/lib/ai/analyzeEvidence";

type EvidenceDetailsPageProps = {
  params: Promise<{
    evidenceId: string;
  }>;
};

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
    },
  });

  const organizationId =
    databaseUser?.organizationId ?? ownedOrganization?.id;

  if (!organizationId) {
    redirect("/platform/organization");
  }

  const evidence = await prisma.evidence.findFirst({
    where: {
      id: evidenceId,
      organizationId,
    },
    include: {
      standardMappings: {
        select: {
          standardId: true,
        },
      },
    },
  });

  const standards = await prisma.standard.findMany({
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
    orderBy: [
      {
        accreditor: "asc",
      },
      {
        code: "asc",
      },
    ],
  });

  const mappedStandardIds = new Set(
    evidence?.standardMappings.map((mapping) => mapping.standardId) ?? [],
  );

  const analysis = await analyzeEvidence(
    evidence?.description ??
      evidence?.title ??
      "Sample infection prevention policy",
  );

  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 px-8 py-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
          Evidence Intelligence
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">
          Evidence Details
        </h1>

        <p className="mt-2 text-slate-500">
          Evidence ID: {evidenceId}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Evidence Information
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Filename
              </p>
              <p className="mt-1 text-slate-950">
                {evidence?.fileName ?? "Unknown"}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Category
              </p>
              <p className="mt-1 text-slate-950">
                {evidence?.category ?? "Uncategorized"}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Status
              </p>
              <p className="mt-1 text-slate-950">
                {evidence?.status ?? "Pending"}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Standards Mapped
              </p>
              <p className="mt-1 text-slate-950">
                {mappedStandardIds.size}
              </p>
            </div>
          </div>
        </section>

        <AIInsightCard
          score={analysis.confidence}
          confidence={
            analysis.confidence >= 90
              ? "High"
              : analysis.confidence >= 70
                ? "Medium"
                : "Low"
          }
          standardsCovered={analysis.recommendedStandards.length}
          missingItems={analysis.missingEvidence.length}
        />
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Standards Mapping
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {standards.length} available standards
            </p>
          </div>
        </div>

        <input
          type="search"
          placeholder="Search standards..."
          className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
        />

        <div className="mt-5 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
          {standards.map((standard) => (
            <label
              key={standard.id}
              className="flex cursor-pointer items-start gap-4 px-5 py-4 transition hover:bg-slate-50"
            >
              <input
                type="checkbox"
                defaultChecked={mappedStandardIds.has(standard.id)}
                className="mt-1 h-4 w-4 rounded border-slate-300 accent-teal-600"
              />

              <div className="min-w-0">
                <p className="font-semibold text-slate-950">
                  {standard.code} — {standard.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {standard.accreditor}
                  {standard.chapter ? ` • ${standard.chapter}` : ""}
                </p>
              </div>
            </label>
          ))}
        </div>
      </section>
    </main>
  );
}