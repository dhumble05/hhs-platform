import AnimatedMetric from "@/components/survey/AnimatedMetric";
const metrics = [
  {
    label: "Survey Readiness",
    value: "96%",
    detail: "Across all active standards",
  },
  {
    label: "Evidence Files",
    value: "2,518",
    detail: "Automatically organized",
  },
  {
    label: "Missing Evidence",
    value: "12",
    detail: "Items requiring attention",
  },
  {
    label: "High-Risk Items",
    value: "2",
    detail: "Immediate review recommended",
  },
];

const chapters = [
  {
    name: "Environment of Care",
    score: 98,
    evidence: "312 evidence files",
  },
  {
    name: "Life Safety",
    score: 94,
    evidence: "186 evidence files",
  },
  {
    name: "Infection Prevention",
    score: 91,
    evidence: "428 evidence files",
  },
  {
    name: "Leadership & Governance",
    score: 97,
    evidence: "204 evidence files",
  },
];

export default function SurveyDashboardPreview() {
  return (
    <section
      id="command-center"
      className="border-y border-white/10 bg-slate-950 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            Executive visibility
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Know where your organization stands before the surveyor arrives.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            HHS transforms uploaded evidence into a continuously updated view
            of survey readiness, missing documentation, and organizational risk.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-teal-400/15 via-blue-500/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="rounded-[1.55rem] border border-white/10 bg-slate-950/95">
              <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-teal-300">
                    Executive Command Center
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">
                    Enterprise Survey Readiness
                  </h3>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Live readiness view
                </div>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <article
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-5"
                  >
                    <p className="text-xs text-slate-400">{metric.label}</p>
                    <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
                      {metric.label === "Survey Readiness" ? (
  <AnimatedMetric value={96} suffix="%" />
) : metric.label === "Evidence Files" ? (
  <AnimatedMetric value={2518} />
) : metric.label === "Missing Evidence" ? (
  <AnimatedMetric value={12} />
) : (
  <AnimatedMetric value={2} />
)}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {metric.detail}
                    </p>
                  </article>
                ))}
              </div>

              <div className="grid gap-5 border-t border-white/10 p-5 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        Readiness by Chapter
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Evidence-backed performance
                      </p>
                    </div>

                    <p className="text-xs font-medium text-teal-300">
                      Updated automatically
                    </p>
                  </div>

                  <div className="space-y-5">
                    {chapters.map((chapter) => (
                      <div key={chapter.name}>
                        <div className="mb-2 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-sm font-medium text-slate-200">
                              {chapter.name}
                            </p>
                            <p className="mt-1 text-[11px] text-slate-500">
                              {chapter.evidence}
                            </p>
                          </div>

                          <p className="text-sm font-semibold text-white">
                            {chapter.score}%
                          </p>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-300"
                            style={{ width: `${chapter.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-sm font-semibold">Executive Summary</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Highest-priority readiness signals
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-xl border border-rose-400/20 bg-rose-400/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-300">
                        High risk
                      </p>
                      <p className="mt-2 text-sm text-slate-200">
                        Two standards are missing current supporting evidence.
                      </p>
                    </div>

                    <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">
                        Attention
                      </p>
                      <p className="mt-2 text-sm text-slate-200">
                        Twelve evidence items require review or replacement.
                      </p>
                    </div>

                    <div className="rounded-xl border border-teal-400/20 bg-teal-400/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
                        Ready
                      </p>
                      <p className="mt-2 text-sm text-slate-200">
                        Leadership and Environment of Care remain above 97%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-3">
                <div className="border-b border-white/10 p-5 text-center sm:border-b-0 sm:border-r">
                  <p className="text-2xl font-semibold text-white">30 sec</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                    Evidence retrieval
                  </p>
                </div>

                <div className="border-b border-white/10 p-5 text-center sm:border-b-0 sm:border-r">
                  <p className="text-2xl font-semibold text-white">24/7</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                    Readiness visibility
                  </p>
                </div>

                <div className="p-5 text-center">
                  <p className="text-2xl font-semibold text-white">1</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                    Source of truth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}