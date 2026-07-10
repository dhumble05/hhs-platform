export default function StandardsEvidence() {
  return (
    <section className="bg-white px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
            Standards & Evidence
          </p>
          <h2 className="mt-4 text-5xl font-bold text-slate-950">
            Track standards, gaps, and evidence in one place.
          </h2>
          <p className="mt-5 max-w-3xl text-xl text-slate-600">
            Break accreditation requirements into chapters, assign owners, upload evidence, and see readiness by standard.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-5 text-xl font-bold">CMS / Accreditation Chapters</h3>

            {[
              ["Governing Body", "98%"],
              ["Infection Control", "100%"],
              ["Environment of Care", "94%"],
              ["Life Safety", "83%"],
              ["QAPI", "81%"],
            ].map(([label, score]) => (
              <div key={label} className="mb-4 rounded-2xl bg-white p-4">
                <div className="mb-2 flex justify-between text-sm font-semibold">
                  <span>{label}</span>
                  <span>{score}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-teal-600" style={{ width: score }} />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Selected Chapter</p>
                <h3 className="text-2xl font-bold">Life Safety</h3>
              </div>
              <button className="rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white">
                Add Evidence
              </button>
            </div>

            <div className="space-y-4">
              {[
                ["Fire Drills", "Missing March documentation", "Needs Evidence"],
                ["Generator Testing", "Monthly logs uploaded", "Complete"],
                ["Medical Gas", "Annual inspection uploaded", "Complete"],
                ["Fire Alarm", "Inspection due in 21 days", "Due Soon"],
              ].map(([title, detail, status]) => (
                <div key={title} className="rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">{title}</h4>
                      <p className="mt-1 text-sm text-slate-500">{detail}</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                      {status}
                    </span>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold">
                      Browse Files
                    </button>
                    <button className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                      Add Evidence
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}