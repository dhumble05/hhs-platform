import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

const standards = [
  {
    accreditor: "AAAHC",
    chapter: "Governance",
    readiness: 98,
    evidence: 42,
    gaps: 1,
  },
  {
    accreditor: "CMS",
    chapter: "Environment",
    readiness: 94,
    evidence: 67,
    gaps: 4,
  },
  {
    accreditor: "Joint Commission",
    chapter: "Life Safety",
    readiness: 91,
    evidence: 84,
    gaps: 7,
  },
  {
    accreditor: "AAAHC",
    chapter: "Infection Prevention",
    readiness: 96,
    evidence: 58,
    gaps: 2,
  },
  {
    accreditor: "CMS",
    chapter: "Quality Assessment",
    readiness: 89,
    evidence: 31,
    gaps: 6,
  },
  {
    accreditor: "Joint Commission",
    chapter: "Emergency Management",
    readiness: 93,
    evidence: 49,
    gaps: 3,
  },
];

export default function StandardsPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1">
          <TopBar />

          <div className="p-6 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Standards Library
            </p>

            <div className="mt-2 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Accreditation standards and evidence
                </h1>

                <p className="mt-3 max-w-3xl text-slate-500">
                  Review readiness by accreditor and chapter, identify missing
                  evidence, and open the documentation supporting each standard.
                </p>
              </div>

              <div className="flex gap-3">
                <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
                  Export Crosswalk
                </button>

                <button className="rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white">
                  Add Standard
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Standards Tracked", "412"],
                ["Evidence Mapped", "2,518"],
                ["Open Gaps", "23"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-2 text-3xl font-bold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-200 p-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-xl font-bold">Standards readiness</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Current performance across accreditation chapters
                  </p>
                </div>

                <div className="flex gap-3">
                  <input
                    type="search"
                    placeholder="Search standards..."
                    className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-teal-600"
                  />

                  <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
                    <option>All accreditors</option>
                    <option>AAAHC</option>
                    <option>CMS</option>
                    <option>Joint Commission</option>
                  </select>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {standards.map((standard) => (
                  <button
                    key={`${standard.accreditor}-${standard.chapter}`}
                    className="grid w-full gap-4 p-6 text-left transition hover:bg-slate-50 md:grid-cols-[1fr_1.3fr_1.2fr_0.8fr_0.8fr] md:items-center"
                  >
                    <div>
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                        {standard.accreditor}
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold">{standard.chapter}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        Evidence and standards crosswalk
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Readiness</span>
                        <strong>{standard.readiness}%</strong>
                      </div>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-teal-600"
                          style={{ width: `${standard.readiness}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Evidence</p>
                      <p className="mt-1 font-bold">{standard.evidence}</p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Open gaps</p>
                      <p
                        className={`mt-1 font-bold ${
                          standard.gaps >= 5
                            ? "text-red-600"
                            : standard.gaps >= 3
                              ? "text-amber-600"
                              : "text-emerald-600"
                        }`}
                      >
                        {standard.gaps}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-7 text-center text-xs text-slate-400">
              HHS Interactive Product Demonstration · Sample information only
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
