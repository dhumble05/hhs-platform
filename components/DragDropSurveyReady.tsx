export default function DragDropSurveyReady() {
  return (
    <section className="bg-slate-950 px-8 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-400">
            Evidence Management
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Drag. Drop. Survey Ready.
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-300">
            Upload policies, inspection reports, fire drills, medical gas
            documentation, meeting minutes, competencies, and photos directly
            into the standards they support.
          </p>

          <button className="mt-8 rounded-xl bg-teal-600 px-7 py-4 font-semibold text-white">
            Add Evidence
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="rounded-2xl border-2 border-dashed border-slate-500 bg-slate-900 p-10 text-center">
            <div className="text-5xl">⬆️</div>
            <h3 className="mt-5 text-2xl font-bold">
              Drop evidence files here
            </h3>
            <p className="mt-3 text-slate-400">
              PDF, Word, Excel, images, inspections, logs, policies, and reports.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {[
              "Fire Drill Report.pdf",
              "Generator Monthly Test.xlsx",
              "Medical Gas Inspection.pdf",
              "Governing Body Minutes.docx",
            ].map((file) => (
              <div key={file} className="rounded-xl bg-white p-4 text-sm font-semibold text-slate-900">
                ✓ {file}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}