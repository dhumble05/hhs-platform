export default function DashboardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-24">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500">
              HHS Dashboard
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Real-time survey readiness at a glance.
            </h2>
          </div>

          <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            94% Ready
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["Survey Readiness", "94%"],
            ["Open Findings", "18"],
            ["Evidence Uploaded", "2,315"],
            ["Policies", "412"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-medium text-slate-500">{label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
