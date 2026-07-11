import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

const tasks = [
  {
    title: "Upload missing fire drill documentation",
    area: "Life Safety",
    owner: "Jessica Morgan",
    due: "Jul 14, 2026",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Complete annual QAPI evaluation",
    area: "Quality Improvement",
    owner: "David Palmer",
    due: "Jul 18, 2026",
    priority: "High",
    status: "Not Started",
  },
  {
    title: "Approve emergency preparedness policy",
    area: "Emergency Management",
    owner: "Michael Reynolds",
    due: "Jul 22, 2026",
    priority: "Medium",
    status: "In Review",
  },
  {
    title: "Upload medical gas inspection report",
    area: "Medical Gas",
    owner: "Robert Hayes",
    due: "Jul 25, 2026",
    priority: "Medium",
    status: "In Progress",
  },
  {
    title: "Close medication storage finding",
    area: "Medication Management",
    owner: "Amanda Ellis",
    due: "Jul 30, 2026",
    priority: "Low",
    status: "Not Started",
  },
];

function priorityClass(priority: string) {
  if (priority === "High") {
    return "bg-red-100 text-red-700";
  }

  if (priority === "Medium") {
    return "bg-amber-100 text-amber-700";
  }

  return "bg-slate-100 text-slate-600";
}

function statusClass(status: string) {
  if (status === "In Progress") {
    return "bg-sky-100 text-sky-700";
  }

  if (status === "In Review") {
    return "bg-violet-100 text-violet-700";
  }

  return "bg-slate-100 text-slate-600";
}

export default function TasksPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1">
          <TopBar />

          <div className="p-6 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Tasks & Corrective Actions
            </p>

            <div className="mt-2 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Keep every corrective action moving.
                </h1>

                <p className="mt-3 max-w-3xl text-slate-500">
                  Assign owners, set due dates, track progress, document
                  resolution, and close findings before they become repeat
                  deficiencies.
                </p>
              </div>

              <div className="flex gap-3">
                <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
                  Export Task Report
                </button>

                <button className="rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white">
                  Create Task
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Open Tasks", "21"],
                ["High Priority", "4"],
                ["Due This Week", "7"],
                ["Overdue", "3"],
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

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col justify-between gap-4 border-b border-slate-200 p-6 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-xl font-bold">
                      Active corrective actions
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Current assignments, ownership, due dates, and status
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <input
                      type="search"
                      placeholder="Search tasks..."
                      className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-teal-600"
                    />

                    <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
                      <option>All priorities</option>
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>

                <div className="divide-y divide-slate-100">
                  {tasks.map((task) => (
                    <div
                      key={task.title}
                      className="grid gap-4 p-6 md:grid-cols-[1.5fr_0.8fr_0.7fr_0.7fr_0.8fr] md:items-center"
                    >
                      <div>
                        <p className="font-semibold">{task.title}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          {task.area}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">Owner</p>
                        <p className="mt-1 text-sm font-medium">{task.owner}</p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">Due</p>
                        <p className="mt-1 text-sm font-medium">{task.due}</p>
                      </div>

                      <div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityClass(
                            task.priority,
                          )}`}
                        >
                          {task.priority}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                            task.status,
                          )}`}
                        >
                          {task.status}
                        </span>

                        <button className="text-sm font-semibold text-teal-700">
                          Open
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
                  <h2 className="text-xl font-bold">Corrective action status</h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Current progress across the organization
                  </p>

                  <div className="mt-6 space-y-5">
                    {[
                      ["Not Started", "8", "38%"],
                      ["In Progress", "9", "43%"],
                      ["In Review", "4", "19%"],
                    ].map(([label, value, width]) => (
                      <div key={label}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">{label}</span>
                          <strong>{value}</strong>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-teal-500"
                            style={{ width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-bold">Recently completed</h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Corrective actions closed this week
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Fire extinguisher inspection documentation",
                      "Staff competency validation",
                      "Medication refrigerator log review",
                      "Emergency contact list update",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                      >
                        <div className="grid h-8 w-8 flex-none place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                          ✓
                        </div>

                        <p className="text-sm font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
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
