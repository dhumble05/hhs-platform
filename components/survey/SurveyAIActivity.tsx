"use client";

import { useEffect, useState } from "react";

const activityItems = [
  {
    time: "09:14:32",
    title: "Fire Drill Report.pdf analyzed",
    detail: "Document type identified with 98% confidence.",
  },
  {
    time: "09:14:33",
    title: "Mapped to applicable standards",
    detail: "Evidence linked to Environment of Care and Life Safety.",
  },
  {
    time: "09:14:34",
    title: "Missing documentation identified",
    detail: "Corrective action follow-up was not found.",
  },
  {
    time: "09:14:35",
    title: "Executive risk signal updated",
    detail: "One item added to leadership review.",
  },
  {
    time: "09:14:36",
    title: "Survey readiness increased",
    detail: "Organization readiness improved by 0.4%.",
  },
];

export default function SurveyAIActivity() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleCount((current) =>
        current >= activityItems.length ? 1 : current + 1,
      );
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-950 px-6 pb-24 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                AI activity
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                HHS continuously reviews incoming evidence.
              </h2>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              Analysis active
            </div>
          </div>

          <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3">
              {activityItems.map((item, index) => {
                const isVisible = index < visibleCount;

                return (
                  <div
                    key={item.title}
                    className={`rounded-2xl border px-5 py-4 transition-all duration-500 ${
                      isVisible
                        ? "translate-y-0 border-teal-300/20 bg-teal-300/[0.055] opacity-100"
                        : "translate-y-3 border-white/5 bg-white/[0.02] opacity-20"
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-400/15 text-sm font-bold text-teal-300">
                        ✓
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-sm font-semibold text-white">
                            {item.title}
                          </p>

                          <p className="text-[11px] font-medium text-slate-500">
                            {item.time}
                          </p>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <aside className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                Current impact
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">
                      Documents processed
                    </p>
                    <p className="text-lg font-semibold text-white">2,518</p>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-teal-400 to-cyan-300" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">
                      Standards supported
                    </p>
                    <p className="text-lg font-semibold text-white">438</p>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[79%] rounded-full bg-gradient-to-r from-teal-400 to-cyan-300" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">Readiness score</p>
                    <p className="text-lg font-semibold text-white">96%</p>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-teal-400 to-cyan-300" />
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-xl border border-teal-300/20 bg-teal-300/[0.05] p-4">
                <p className="text-xs font-semibold text-teal-300">
                  Executive insight
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  HHS identified one documentation gap requiring attention
                  before the next survey.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}