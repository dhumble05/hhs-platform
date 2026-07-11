import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

const policies = [
  {
    name: "Infection Prevention Plan",
    department: "Clinical Services",
    owner: "Jessica Morgan",
    version: "4.2",
    status: "Approved",
    nextReview: "Sep 14, 2026",
  },
  {
    name: "Emergency Preparedness Plan",
    department: "Environment of Care",
    owner: "Michael Reynolds",
    version: "3.1",
    status: "Review Due",
    nextReview: "Jul 28, 2026",
  },
  {
    name: "Medication Management Policy",
    department: "Pharmacy",
    owner: "Amanda Ellis",
    version: "5.0",
    status: "Approved",
    nextReview: "Dec 4, 2026",
  },
  {
    name: "Governing Body Responsibilities",
    department: "Governance",
    owner: "David Palmer",
    version: "2.6",
    status: "Awaiting Approval",
    nextReview: "Aug 3, 2026",
  },
  {
    name: "Fire Response and Evacuation",
    department: "Life Safety",
    owner: "Robert Hayes",
    version: "3.8",
    status: "Overdue",
    nextReview: "Jun 30, 2026",
  },
  {
    name: "Patient Rights and Responsibilities",
    department: "Administration",
    owner: "Lauren Brooks",
    version: "4.0",
    status: "Approved",
    nextReview: "Jan 15, 2027",
  },
];

function statusClass(status: string) {
  if (status === "Approved") {
    return "bg-emerald-50 text-emerald-700";
  }

  if (status === "Review Due") {
    return "bg-amber-50 text-amber-700";
  }

  if (status === "Awaiting Approval") {
    return "bg-sky-50 text-sky-700";
  }

  return "bg-red-50 text-red-700";
}

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1">
          <TopBar />

          <div className="p-6 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Policy Management
            </p>

            <div className="mt-2 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Keep every policy current and accountable.
                </h1>

                <p className="mt-3 max-w-3xl text-slate-500">
                  Manage ownership, review dates, approvals, version history,
                  acknowledgements, and accreditation mapping from one place.
                </p>
              </div>

              <div className="flex gap-3">
                <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
                  Export Policy Report
                </button>

                <button className="rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white">
                  Add Policy
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Total Policies", "864"],
                ["Approved", "791"],
                ["Review Due", "14"],
                ["Overdue", "2"],
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

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-200 p-6 xl:flex-row xl:items-center">
                <div>
                  <h2 className="text-xl font-bold">Policy library</h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Current policies, owners, versions, and review status
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="search"
                    placeholder="Search policies..."
                    className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-teal-600"
                  />

                  <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
                    <option>All departments</option>
                    <option>Clinical Services</option>
                    <option>Governance</option>
                    <option>Life Safety</option>
                    <option>Administration</option>
                  </select>

                  <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
                    <option>All statuses</option>
                    <option>Approved</option>
                    <option>Review Due</option>
                    <option>Awaiting Approval</option>
                    <option>Overdue</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[950px]">
                  <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="px-6 py-4">Policy</th>
                      <th className="px-6 py-4">Department</th>
                      <th className="px-6 py-4">Owner</th>
                      <th className="px-6 py-4">Version</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Next review</th>
                      <th className="px-6 py-4">Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {policies.map((policy) => (
                      <tr
                        key={policy.name}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="px-6 py-5">
                          <p className="font-semibold">{policy.name}</p>
                          <p className="mt-1 text-xs text-slate-400">
                            Mapped to applicable standards
                          </p>
                        </td>

                        <td className="px-6 py-5 text-sm text-slate-600">
                          {policy.department}
                        </td>

                        <td className="px-6 py-5 text-sm text-slate-600">
                          {policy.owner}
                        </td>

                        <td className="px-6 py-5 text-sm font-semibold">
                          v{policy.version}
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                              policy.status,
                            )}`}
                          >
                            {policy.status}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-sm text-slate-600">
                          {policy.nextReview}
                        </td>

                        <td className="px-6 py-5">
                          <button className="text-sm font-semibold text-teal-700">
                            Open policy
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">Approval workflow</h2>

                <p className="mt-1 text-sm text-slate-500">
                  Policies currently moving through review and approval
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      title: "Governing Body Responsibilities",
                      detail: "Awaiting final approval",
                      step: "3 of 4",
                    },
                    {
                      title: "Emergency Preparedness Plan",
                      detail: "Department review in progress",
                      step: "2 of 4",
                    },
                    {
                      title: "Staff Competency Policy",
                      detail: "Owner revisions requested",
                      step: "1 of 4",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-slate-50 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className="mt-1 text-xs text-slate-400">
                            {item.detail}
                          </p>
                        </div>

                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                          {item.step}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
                <h2 className="text-xl font-bold">Policy intelligence</h2>

                <p className="mt-1 text-sm text-slate-400">
                  Automated monitoring across the policy library
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    ["Potentially outdated references", "6"],
                    ["Policies missing an owner", "3"],
                    ["Standards without mapped policy", "11"],
                    ["Acknowledgements outstanding", "24"],
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

                <button className="mt-5 w-full rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold">
                  Review Policy Risks
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
