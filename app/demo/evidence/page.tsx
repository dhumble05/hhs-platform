import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

export default function EvidencePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1">
          <TopBar />

          <div className="p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Evidence Management
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Upload Once. HHS Does the Rest.
            </h1>

            <p className="mt-3 max-w-3xl text-slate-500">
              Upload policies, inspections, meeting minutes, competencies,
              photos, maintenance logs, and reports. HHS automatically
              categorizes every document, maps it to accreditation standards,
              and updates survey readiness.
            </p>

            {/* Upload Area */}

            <div className="mt-10 rounded-3xl border-2 border-dashed border-teal-300 bg-white p-16 text-center shadow-sm">
              <div className="text-6xl">⬆️</div>

              <h2 className="mt-6 text-3xl font-bold">
                Drag & Drop Evidence Here
              </h2>

              <p className="mt-3 text-slate-500">
                PDF • Word • Excel • Images • Meeting Minutes • Policies
              </p>

              <button className="mt-8 rounded-xl bg-teal-700 px-8 py-4 font-semibold text-white">
                Browse Files
              </button>
            </div>

            {/* Uploaded Files */}

            <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">
                Recently Processed Evidence
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  [
                    "Fire Drill Report.pdf",
                    "Life Safety",
                    "Mapped to EC.02.03.05",
                  ],
                  [
                    "Generator Monthly Test.xlsx",
                    "Emergency Power",
                    "Mapped to NFPA 110",
                  ],
                  [
                    "Medical Gas Inspection.pdf",
                    "Medical Gas",
                    "Mapped to NFPA 99",
                  ],
                  [
                    "Governing Body Minutes.docx",
                    "Leadership",
                    "Mapped to CMS Governance",
                  ],
                ].map(([file, category, standard]) => (
                  <div
                    key={file}
                    className="flex items-center justify-between rounded-xl border border-slate-200 p-5"
                  >
                    <div>
                      <h3 className="font-semibold">{file}</h3>
                      <p className="text-sm text-slate-500">{category}</p>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                      {standard}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
