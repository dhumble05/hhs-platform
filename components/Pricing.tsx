export default function Pricing() {
  return (
    <section className="bg-white px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
            Pricing
          </p>
          <h2 className="mt-4 text-5xl font-bold text-slate-950">
            Start with what you need. Expand when ready.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl text-slate-600">
            Unlock individual compliance modules or subscribe to the full enterprise platform.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            ["Module Access", "$99/mo", "Unlock individual modules like Life Safety, Infection Prevention, or Emergency Management."],
            ["Professional", "$699/mo", "Best for ASCs and clinics that need full survey readiness, evidence, tasks, and reporting."],
            ["Enterprise", "Custom", "Built for multi-site organizations, hospitals, and health systems with advanced workflows."],
          ].map(([plan, price, description]) => (
            <div key={plan} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-slate-950">{plan}</h3>
              <p className="mt-4 text-4xl font-bold text-teal-600">{price}</p>
              <p className="mt-5 text-slate-600">{description}</p>

              <button className="mt-8 w-full rounded-xl bg-slate-950 px-5 py-4 font-semibold text-white">
                Request Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
