export default function SurveyCallToAction() {
  return (
    <section className="bg-slate-950 px-6 pb-24 text-white lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-teal-300/20 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.2),_transparent_40%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(8,47,73,0.88))] p-8 shadow-2xl shadow-black/30 sm:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Ready to see more?
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              See what survey readiness could look like for your organization.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Request a live demonstration of AI-powered evidence organization,
              standards mapping, compliance analysis, and executive readiness
              reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-400/15 text-xs text-teal-300">
                  ✓
                </span>
                No obligation
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-400/15 text-xs text-teal-300">
                  ✓
                </span>
                Healthcare-focused walkthrough
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-400/15 text-xs text-teal-300">
                  ✓
                </span>
                Built around your organization
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:dean.humble@humblehealthsolutions.com?subject=HHS%20Live%20Demo%20Request&body=I%20would%20like%20to%20schedule%20a%20live%20demonstration%20of%20HHS."
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-teal-100"
            >
              Request a Live Demo
            </a>

            <a
              href="tel:+13176967862"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Call 317-696-7862
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}