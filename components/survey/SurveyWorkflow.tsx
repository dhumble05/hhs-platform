const steps = [
  {
    number: "01",
    title: "Upload",
    description: "Drag and drop compliance evidence into HHS.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "HHS reads the document and identifies what it proves.",
  },
  {
    number: "03",
    title: "Standards Mapping",
    description: "Evidence is connected to applicable accreditation standards.",
  },
  {
    number: "04",
    title: "Gap Detection",
    description: "Missing or incomplete documentation is surfaced automatically.",
  },
  {
    number: "05",
    title: "Executive Readiness",
    description: "Leadership sees current survey readiness and priority risks.",
  },
];

export default function SurveyWorkflow() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            See HHS in 60 seconds
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            From document upload to survey readiness.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            HHS removes the manual work between receiving evidence and proving
            compliance.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
          <div className="grid divide-y divide-white/10 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative min-h-[250px] p-7 transition hover:bg-white/[0.035]"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-teal-300">
                  {step.number}
                </p>

                <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/10 text-lg font-semibold text-teal-300">
                  {step.number === "01"
                    ? "↑"
                    : step.number === "02"
                      ? "AI"
                      : step.number === "03"
                        ? "↔"
                        : step.number === "04"
                          ? "!"
                          : "✓"}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>

                {step.number !== "05" && (
                  <div className="absolute right-[-9px] top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-white/10 bg-slate-950 lg:block" />
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-teal-300/20 bg-teal-300/[0.045] px-6 py-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold text-white">
              One upload. Multiple standards. Immediate executive visibility.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              HHS organizes evidence once and connects it everywhere it applies.
            </p>
          </div>

          <a
            href="mailto:dean.humble@humblehealthsolutions.com?subject=HHS%20Live%20Demo%20Request"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-teal-300/30 bg-teal-300/10 px-6 py-3 text-sm font-semibold text-teal-200 transition hover:bg-teal-300/15"
          >
            Watch the 60-Second Demo
          </a>
        </div>
      </div>
    </section>
  );
}