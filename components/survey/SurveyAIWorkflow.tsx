"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    title: "Fire Drill Report.pdf uploaded",
    detail: "Evidence received securely.",
  },
  {
    title: "Reading document",
    detail: "Extracting content and document metadata.",
  },
  {
    title: "Document classified",
    detail: "Fire drill documentation identified.",
  },
  {
    title: "Applicable standards identified",
    detail: "Environment of Care and Life Safety requirements found.",
  },
  {
    title: "Evidence mapped",
    detail: "Connected to applicable accreditation standards.",
  },
  {
    title: "Documentation gap detected",
    detail: "Corrective-action follow-up was not found.",
  },
  {
    title: "Survey readiness recalculated",
    detail: "Executive readiness indicators updated.",
  },
  {
    title: "Executive recommendations generated",
    detail: "Priority action added for leadership review.",
  },
  {
    title: "Dashboard updated successfully",
    detail: "Evidence is organized, mapped, and ready for retrieval.",
  },
];

export default function SurveyAIWorkflow() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (visibleCount < steps.length) {
      const timer = window.setTimeout(() => {
        setVisibleCount((current) => current + 1);
      }, 900);

      return () => window.clearTimeout(timer);
    }

    const resetTimer = window.setTimeout(() => {
      setVisibleCount(1);
      setCycle((current) => current + 1);
    }, 4500);

    return () => window.clearTimeout(resetTimer);
  }, [visibleCount, cycle]);

  const progress = Math.round((visibleCount / steps.length) * 100);
  const isComplete = visibleCount === steps.length;

  return (
    <section className="bg-slate-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            Watch HHS work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            See compliance evidence become survey-ready.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            HHS reviews uploaded documentation, maps it to applicable
            standards, identifies gaps, and updates leadership automatically.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-teal-400/15 via-cyan-400/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
            <div className="flex flex-col gap-5 border-b border-white/10 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/10 text-lg font-bold text-teal-300">
                  AI
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                    AI evidence processing
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    Fire Drill Report.pdf
                  </h3>
                </div>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                <span
                  className={`h-2 w-2 rounded-full bg-emerald-300 ${
                    isComplete ? "" : "animate-pulse"
                  }`}
                />
                {isComplete ? "Analysis complete" : "Analysis active"}
              </div>
            </div>

            <div className="grid gap-8 p-7 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <div className="space-y-3">
                  {steps.map((step, index) => {
                    const isVisible = index < visibleCount;
                    const isCurrent = index === visibleCount - 1;

                    return (
                      <div
                        key={step.title}
                        className={`rounded-2xl border px-5 py-4 transition-all duration-500 ${
                          isCurrent
                            ? "translate-y-0 border-teal-300/30 bg-teal-300/[0.08] opacity-100"
                            : isVisible
                              ? "translate-y-0 border-white/10 bg-white/[0.035] opacity-100"
                              : "translate-y-2 border-white/5 bg-white/[0.015] opacity-25"
                        }`}
                      >
                        <div className="flex gap-4">
                          <div
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                              isVisible
                                ? "bg-teal-400/15 text-teal-300"
                                : "bg-white/5 text-slate-600"
                            }`}
                          >
                            {isVisible ? "✓" : index + 1}
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-white">
                              {step.title}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-400">
                              {step.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <aside className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Processing status
                </p>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Analysis progress</span>
                    <span className="font-semibold text-white">{progress}%</span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-300 transition-all duration-700"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs text-slate-500">AI confidence</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      98%
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs text-slate-500">Standards mapped</p>
                    <p className="mt-2 text-2xl font-semibold text-white">13</p>
                  </div>
                </div>

                <div
                  className={`mt-6 rounded-xl border p-4 transition-all duration-500 ${
                    isComplete
                      ? "border-emerald-300/25 bg-emerald-300/[0.07]"
                      : "border-teal-300/20 bg-teal-300/[0.05]"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      isComplete ? "text-emerald-300" : "text-teal-300"
                    }`}
                  >
                    {isComplete ? "Survey-ready result" : "Current analysis"}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {isComplete
                      ? "Evidence was organized, mapped, reviewed, and added to the Executive Survey Readiness Dashboard."
                      : steps[visibleCount - 1].detail}
                  </p>
                </div>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Evidence files</span>
                    <span className="font-semibold text-white">
                      {isComplete ? "2,519" : "2,518"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Missing evidence</span>
                    <span className="font-semibold text-white">
                      {isComplete ? "12" : "13"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Survey readiness</span>
                    <span
                      className={`font-semibold ${
                        isComplete ? "text-teal-300" : "text-white"
                      }`}
                    >
                      {isComplete ? "96%" : "95%"}
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}