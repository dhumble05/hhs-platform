import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

const categories = [
  {
    name: "Governance",
    score: 98,
    status: "Survey Ready",
    findings: 1,
  },
  {
    name: "Infection Prevention",
    score: 96,
    status: "Survey Ready",
    findings: 2,
  },
  {
    name: "Life Safety",
    score: 91,
    status: "Needs Attention",
    findings: 7,
  },
  {
    name: "Emergency Management",
    score: 94,
    status: "On Track",
    findings: 3,
  },
  {
    name: "Medication Management",
    score: 97,
    status: "Survey Ready",
    findings: 1,
  },
  {
    name: "Quality Improvement",
    score: 89,
    status: "Needs Attention",
    findings: 6,
  },
];

const facilities = [
  {
    name: "Northview Surgery Center",
    readiness: 98,
    accreditor: "AAAHC",
  },
  {
    name: "Lakeside Orthopedic Hospital",
    readiness: 94,
    accreditor: "Joint Commission",
  },
  {
    name: "Riverbend Procedure Center",
    readiness: 91,
    accreditor: "CMS",
  },
  {
    name: "Summit Medical Pavilion",
    readiness: 97,
    accreditor: "AAAHC",
  },
];

export default function ReadinessPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1">
          <TopBar />

          <div className="p-6 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Survey Readiness
            </p>

            <div className="mt-2 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Know exactly where you stand.
                </h1>

                <p className="mt-3 max-w-3xl text-slate-500">
                  Monitor readiness across facilities, accreditation chapters,
                  evidence gaps, findings, and upcoming survey activity.
                </p>
              </div>

              <div className="flex gap-3">
                <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
                  Export Readiness Report
                </button>

                <button className="rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white">
                  Start Mock Survey
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[0.7fr_1.3fr]">
              <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Overall Readiness
                </p>

                <div className="mt-8 flex items-end gap-3">
                  <span className="text-7xl font-bold">96%</span>
                  <span className="pb-2 text-sm text-emerald-300">
                    +3% this month
                  </span>
                </div>

                <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[96%] rounded-full bg-teal-500" />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    ["Open Findings", "12"],
                    ["High Risk", "2"],
                    ["Missing Evidence", "18"],
                    ["Policies Due", "8"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-xs text-slate-400">{label}</p>
                      <p className="mt-2 text-2xl font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">
                      Readiness by category
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Performance by survey chapter and operational area
                    </p>
                  </div>

                  <button className="text-sm font-semibold text-teal-700">
                    View all categories
                  </button>
                </div>

                <div className="mt-6 space-y-5">
                  {categories.map((category) => (
                    <div key={category.name}>
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div>
                          <p className="font-semibold">{category.name}</p>
                          <p className="mt-1 text-xs text-slate-400">
                            {category.findings} open findings
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              category.score >= 96
                                ? "bg-emerald-50 text-emerald-700"
                                : category.score >= 92
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-red-50 text-red-700"
                            }`}
                          >
                            {category.status}
                          </span>

                          <strong className="w-12 text-right">
                            {category.score}%
                          </strong>
                        </div>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${
                            category.score >= 96
                              ? "bg-emerald-500"
                              : category.score >= 92
                                ? "bg-amber-500"
                                : "bg-red-500"
                          }`}
                          style={{ width: `${category.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">
                      Facility readiness
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Comparison across the organization
                    </p>
                  </div>

                  <button className="text-sm font-semibold text-teal-700">
                    Compare facilities
                  </button>
                </div>

                <div className="mt-6 divide-y divide-slate-100">
                  {facilities.map((facility) => (
                    <div
                      key={facility.name}
                      className="grid gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[1.5fr_0.7fr_1fr] md:items-center"
                    >
                      <div>
                        <p className="font-semibold">{facility.name}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          {facility.accreditor}
                        </p>
                      </div>

                      <div>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          {facility.accreditor}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500">Readiness</span>
                          <strong>{facility.readiness}%</strong>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-teal-600"
                            style={{ width: `${facility.readiness}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold">
                  Highest-priority gaps
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Items requiring immediate attention
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      title: "Missing fire drill documentation",
                      area: "Life Safety",
                      level: "High",
                    },
                    {
                      title: "Annual QAPI review incomplete",
                      area: "Quality Improvement",
                      level: "High",
                    },
                    {
                      title: "Two policies awaiting approval",
                      area: "Governance",
                      level: "Medium",
                    },
                    {
                      title: "Competency documentation due",
                      area: "Clinical Services",
                      level: "Medium",
                    },
                  ].map((gap) => (
                    <button
                      key={gap.title}
                      className="flex w-full items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4 text-left transition hover:bg-slate-100"
                    >
                      <div>
                        <p className="text-sm font-semibold">{gap.title}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          {gap.area}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          gap.level === "High"
                            ? "bg-red-100 text-red-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {gap.level}
                      </span>
                    </button>
                  ))}
                </div>
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
