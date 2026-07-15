"use client";

import { useEffect, useMemo, useState } from "react";

const steps = [
  {
    title: "Uploading Fire Drill Report.pdf",
    detail: "Securely receiving evidence",
  },
  {
    title: "Document classified",
    detail: "Fire drill documentation identified",
  },
  {
    title: "Applicable standards mapped",
    detail: "Environment of Care and Life Safety linked",
  },
  {
    title: "Missing documentation detected",
    detail: "Corrective-action follow-up not found",
  },
  {
    title: "Executive dashboard updated",
    detail: "Survey readiness increased from 95.6% to 96.0%",
  },
];

export default function SurveyAIProcessingDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) =>
        current >= steps.length - 1 ? 0 : current + 1,
      );
    }, 1600);

    return () => window.clearInterval(interval);
  }, []);

  const progress = useMemo(
    () => ((activeStep + 1) / steps.length) * 100,
    [activeStep],
  );

  return (
    <section className="bg-slate-950 px-6 pb-24 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            See HHS in action
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            From uploaded evidence to executive readiness in seconds.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Watch HHS classify evidence, map standards, identify gaps, and
            update leadership automatically.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-teal-400/15 via-cyan-400/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                      AI processing evidence
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      Fire Drill Report.pdf
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/10 text-xl text-teal-300">
                    AI
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Processing progress</span>
                    <span className="font-semibold text-white">
                      {Math.round(progress)}%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-300 transition-all duration-700"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Current action
                  </p>

                  <p className="mt-3 text-lg font-semibold text-white">
                    {steps[activeStep].title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs text-slate-500">Confidence</p>
                    <p className="mt-2 text-2xl font-semibold text-white">98%</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs text-slate-500">Readiness impact</p>
                    <p className="mt-2 text-2xl font-semibold text-teal-300">
                      +0.4%
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                      Analysis timeline
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      Evidence processing workflow
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                    Live
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {steps.map((step, index) => {
                    const isComplete = index <= activeStep;
                    const isCurrent = index === activeStep;

                    return (
                      <div
                        key={step.title}
                        className={`rounded-2xl border px-5 py-4 transition-all duration-500 ${
                          isCurrent
                            ? "border-teal-300/30 bg-teal-300/[0.08]"
                            : isComplete
                              ? "border-white/10 bg-white/[0.04]"
                              : "border-white/5 bg-white/[0.015] opacity-35"
                        }`}
                      >
                        <div className="flex gap-4">
                          <div
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                              isComplete
                                ? "bg-teal-400/15 text-teal-300"
                                : "bg-white/5 text-slate-600"
                            }`}
                          >
                            {isComplete ? "✓" : index + 1}
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

                <div className="mt-6 rounded-2xl border border-teal-300/20 bg-teal-300/[0.05] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                    Executive result
                  </p>

                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">
                        Survey readiness
                      </p>
                      <p className="mt-1 text-3xl font-semibold text-white">
                        95.6%
                        <span className="mx-2 text-slate-600">→</span>
                        <span className="text-teal-300">96.0%</span>
                      </p>
                    </div>

                    <p className="text-xs font-semibold text-emerald-300">
                      Updated automatically
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}