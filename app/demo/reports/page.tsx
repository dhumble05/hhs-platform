import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

const reports = [
  {
    title: "Executive Compliance Summary",
    description:
      "Organization-wide readiness, findings, risks, evidence, and policy status.",
    format: "PDF",
    lastGenerated: "Jul 9, 2026",
  },
  {
    title: "Governing Body Report",
    description:
      "Board-ready summary of survey readiness, corrective actions, and quality trends.",
    format: "PDF",
    lastGenerated: "Jul 5, 2026",
  },
  {
    title: "Survey Readiness Report",
    description:
      "Detailed readiness by facility, accreditor, chapter, and open gap.",
    format: "Excel",
    lastGenerated: "Jul 8, 2026",
  },
  {
    title: "Evidence Mapping Report",
    description:
      "Shows every uploaded file and the accreditation standards it supports.",
    format: "Excel",
    lastGenerated: "Jul 7, 2026",
  },
  {
    title: "Policy Status Report",
    description:
      "Policy ownership, approval status, review dates, and overdue items.",
    format: "PDF",
    lastGenerated: "Jul 6, 2026",
  },
  {
    title: "Corrective Action Report",
    description:
      "Open findings, task owners, due dates, progress, and closure documentation.",
    format: "Excel",
    lastGenerated: "Jul 4, 2026",
  },
];

const recentExports = [
  {
    name: "Executive Compliance Summary.pdf",
    user: "Dean Humble",
    time: "Today, 9:42 AM",
    size: "2.4 MB",
  },
  {
    name: "Survey Readiness Report.xlsx",
    user: "Jessica Morgan",
    time: "Yesterday, 3:18 PM",
    size: "1.1 MB",
  },
  {
    name: "Policy Status Report.pdf",
    user: "David Palmer",
    time: "Jul 8, 2026",
    size: "842 KB",
  },
  {
    name: "Corrective Action Report.xlsx",
    user: "Michael Reynolds",
    time: "Jul 7, 2026",
    size: "964 KB",
  },
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1">
          <TopBar />

          <div className="p-6 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Reports & Executive Analytics
            </p>

            <div className="mt-2 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Turn compliance data into leadership-ready reports.
                </h1>

                <p className="mt-3 max-w-3xl text-slate-500">
                  Generate board-ready summaries, survey-readiness reports,
                  evidence crosswalks, policy reports, and corrective-action
                  analytics in seconds.
                </p>
              </div>

              <div className="flex gap-3">
                <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
                  Schedule Report
                </button>

                <button className="rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white">
                  Create Custom Report
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Reports Generated", "128"],
                ["Scheduled Reports", "9"],
                ["Facilities Included", "12"],
                ["Exports This Month", "34"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-3 text-4xl font-bold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Report library</h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Prebuilt reports for executives, survey teams, and
                      governing bodies
                    </p>
                  </div>

                  <button className="text-sm font-semibold text-teal-700">
                    View all templates
                  </button>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {reports.map((report) => (
                    <div
                      key={report.title}
                      className="rounded-2xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-bold">{report.title}</p>

                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {report.description}
                          </p>
                        </div>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          {report.format}
                        </span>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          Last generated {report.lastGenerated}
                        </span>

                        <button className="rounded-lg bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-700">
                          Generate
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Executive Snapshot
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Meridian Health Network
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Current organization-wide compliance position
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    ["Survey Readiness", "96%"],
                    ["Facilities On Track", "10 of 12"],
                    ["High-Risk Findings", "2"],
                    ["Evidence Coverage", "94%"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="text-sm text-slate-300">{label}</span>
                      <strong className="text-xl">{value}</strong>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold">
                  Generate Executive Summary
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.8fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Recent exports</h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Recently generated reports and downloads
                    </p>
                  </div>

                  <button className="text-sm font-semibold text-teal-700">
                    Open export history
                  </button>
                </div>

                <div className="mt-6 divide-y divide-slate-100">
                  {recentExports.map((item) => (
                    <div
                      key={item.name}
                      className="grid gap-4 py-4 first:pt-0 last:pb-0 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.5fr] md:items-center"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          Generated by {item.user}
                        </p>
                      </div>

                      <p className="text-sm text-slate-500">{item.time}</p>

                      <p className="text-sm text-slate-500">{item.size}</p>

                      <button className="text-sm font-semibold text-teal-700">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">Scheduled delivery</h2>

                <p className="mt-1 text-sm text-slate-500">
                  Reports sent automatically to leadership
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      title: "Weekly Executive Summary",
                      detail: "Every Monday at 8:00 AM",
                    },
                    {
                      title: "Monthly Governing Body Report",
                      detail: "First business day of each month",
                    },
                    {
                      title: "Survey Readiness Alert",
                      detail: "When readiness drops below 90%",
                    },
                    {
                      title: "Policy Review Digest",
                      detail: "Every Friday at 4:00 PM",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-slate-50 p-4"
                    >
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">
                  Manage Schedules
                </button>
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