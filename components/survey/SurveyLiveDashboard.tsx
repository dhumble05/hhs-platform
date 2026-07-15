"use client";

import { useEffect, useState } from "react";

type DemoPhase =
  | "waiting"
  | "processing"
  | "evidence"
  | "missing"
  | "risk"
  | "readiness"
  | "complete";

const chapters = [
  {
    name: "Environment of Care",
    initialScore: 97,
    finalScore: 98,
  },
  {
    name: "Life Safety",
    initialScore: 94,
    finalScore: 94,
  },
  {
    name: "Infection Prevention",
    initialScore: 91,
    finalScore: 91,
  },
  {
    name: "Leadership & Governance",
    initialScore: 97,
    finalScore: 97,
  },
];

export default function SurveyLiveDashboard() {
  const [phase, setPhase] = useState<DemoPhase>("waiting");

  useEffect(() => {
    const timers: number[] = [];

    const runDemo = () => {
      setPhase("waiting");

timers.push(
  window.setTimeout(() => setPhase("processing"), 2500),
  window.setTimeout(() => setPhase("evidence"), 7000),
  window.setTimeout(() => setPhase("missing"), 9000),
  window.setTimeout(() => setPhase("risk"), 11000),
  window.setTimeout(() => setPhase("readiness"), 13000),
  window.setTimeout(() => setPhase("complete"), 15000),
  window.setTimeout(runDemo, 20000),
);
    };

    runDemo();

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const phaseOrder: DemoPhase[] = [
    "waiting",
    "processing",
    "evidence",
    "missing",
    "risk",
    "readiness",
    "complete",
  ];

  const hasReached = (target: DemoPhase) =>
    phaseOrder.indexOf(phase) >= phaseOrder.indexOf(target);

  const isProcessing = phase === "processing";
  const isComplete = phase === "complete";

  const evidenceUpdated = hasReached("evidence");
  const missingUpdated = hasReached("missing");
  const riskUpdated = hasReached("risk");
  const readinessUpdated = hasReached("readiness");

  const readiness = readinessUpdated ? 96 : 95;
  const evidenceFiles = evidenceUpdated ? 2519 : 2518;
  const missingEvidence = missingUpdated ? 12 : 13;
  const highRiskItems = riskUpdated ? 2 : 3;

  const getStatusTitle = () => {
    if (phase === "waiting") return "Monitoring incoming evidence";
    if (phase === "processing") return "Analyzing Fire Drill Report.pdf";
    if (phase === "evidence") return "Evidence added to the repository";
    if (phase === "missing") return "Documentation gap resolved";
    if (phase === "risk") return "High-risk item cleared";
    if (phase === "readiness") return "Survey readiness recalculated";

    return "Evidence analysis complete";
  };

  const getStatusDetail = () => {
    if (phase === "waiting") {
      return "HHS is ready to process new compliance documentation.";
    }

    if (phase === "processing") {
      return "Classifying evidence, mapping standards, and reviewing completeness.";
    }

    if (phase === "evidence") {
      return "Fire Drill Report.pdf was organized and added as evidence file 2,519.";
    }

    if (phase === "missing") {
      return "The uploaded report satisfied one previously missing evidence requirement.";
    }

    if (phase === "risk") {
      return "One compliance risk was removed from the executive review queue.";
    }

    if (phase === "readiness") {
      return "Organization-wide survey readiness increased from 95% to 96%.";
    }

    return "Evidence was mapped to 13 standards and the executive dashboard was updated automatically.";
  };

const getProgressWidth = () => {
  switch (phase) {
    case "waiting":
      return "w-[5%]";
    case "processing":
      return "w-[35%]";
    case "evidence":
      return "w-[55%]";
    case "missing":
      return "w-[72%]";
    case "risk":
      return "w-[85%]";
    case "readiness":
      return "w-[95%]";
    case "complete":
      return "w-full";
    default:
      return "w-[5%]";
  }
};

  return (
    <div className="relative animate-[dashboardFloat_7s_ease-in-out_infinite]">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-teal-400/20 via-blue-500/10 to-transparent blur-2xl" />

<div
  className={`relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-white/[0.10] via-white/[0.055] to-white/[0.025] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-1 hover:border-teal-300/30 hover:shadow-[0_24px_80px_rgba(8,145,178,0.16)] ${
    isProcessing
      ? "border-teal-300/30 shadow-[0_0_70px_rgba(45,212,191,0.12)]"
      : "border-white/10"
  }`}
>
        <div className="rounded-[1.55rem] border border-white/10 bg-slate-950/90 p-4 sm:p-6">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-teal-300">
                Executive Command Center
              </p>

              <h2 className="mt-2 max-w-[17rem] text-xl font-semibold leading-tight sm:max-w-none">
                Enterprise Survey Readiness
              </h2>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <span
                className={`h-2 w-2 rounded-full bg-emerald-300 ${
                  isProcessing ? "animate-pulse" : ""
                }`}
              />

              {isProcessing ? "Updating" : "Live"}
            </div>
          </div>

          <div
            className={`mt-5 rounded-2xl border p-4 transition-all duration-700 ${
              isComplete
                ? "border-emerald-300/25 bg-emerald-300/[0.06]"
                : "border-teal-300/20 bg-teal-300/[0.045]"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-all duration-500 ${
                  isComplete
                    ? "bg-emerald-300/10 text-emerald-300"
                    : "bg-teal-300/10 shadow-[0_0_30px_rgba(45,212,191,0.08)] text-teal-300"
                }`}
              >
                {isComplete ? "✓" : "AI"}
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold leading-6 text-white">
                  {getStatusTitle()}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {getStatusDetail()}
                </p>
              </div>
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-300 transition-all duration-1000 ease-out ease-out ${getProgressWidth()}`}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-5">
            <MetricCard
              label="Survey Readiness"
              value={`${readiness}%`}
              detail="Across all active standards"
              changed={readinessUpdated}
              active={phase === "readiness"}
            />

            <MetricCard
              label="Evidence Files"
              value={evidenceFiles.toLocaleString()}
              detail="Automatically organized"
              changed={evidenceUpdated}
              active={phase === "evidence"}
            />

            <MetricCard
              label="Missing Evidence"
              value={missingEvidence.toString()}
              detail="Items requiring attention"
              changed={missingUpdated}
              active={phase === "missing"}
            />

            <MetricCard
              label="High-Risk Items"
              value={highRiskItems.toString()}
              detail="Immediate review recommended"
              changed={riskUpdated}
              active={phase === "risk"}
            />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold">Readiness by Chapter</p>
                <p className="text-xs text-slate-500">
                  Evidence-backed performance
                </p>
              </div>

              <div className="text-xs sm:text-right">
                <p className="font-medium text-teal-300">Last AI update</p>
                <p className="mt-1 text-slate-500">
                  {readinessUpdated ? "Just now" : "Monitoring"}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {chapters.map((chapter) => {
                const score = readinessUpdated
                  ? chapter.finalScore
                  : chapter.initialScore;

                return (
                  <div key={chapter.name}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p className="text-xs font-medium text-slate-200">
                        {chapter.name}
                      </p>

                      <div className="flex shrink-0 items-center gap-2">
                        <p className="text-xs font-semibold">{score}%</p>

                        {readinessUpdated &&
                          chapter.finalScore > chapter.initialScore && (
                            <span className="animate-[fadeIn_400ms_ease-out] text-[10px] font-semibold text-emerald-300">
                              +1%
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-300 transition-all duration-1000 ease-out"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {isComplete && (
            <div className="mt-4 animate-[fadeIn_500ms_ease-out] rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] px-4 py-3">
<p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">
  Survey readiness updated successfully
</p>

              <p className="mt-1 text-xs leading-5 text-slate-400">
Fire Drill Report.pdf was mapped to applicable standards, one documentation gap
was resolved, executive risk decreased, and organization-wide survey readiness
improved automatically.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
  changed: boolean;
  active: boolean;
};

function MetricCard({
  label,
  value,
  detail,
  changed,
  active,
}: MetricCardProps) {
  return (
    <div
      className={`min-w-0 rounded-2xl border p-4 transition-all duration-700 sm:p-5 ${
        active
          ? "scale-[1.02] border-teal-300/50 bg-teal-300/[0.10] shadow-[0_0_34px_rgba(45,212,191,0.14)]"
          : changed
            ? "border-teal-300/30 bg-teal-300/[0.07] shadow-[0_0_28px_rgba(45,212,191,0.06)]"
            : "border-white/10 bg-white/[0.045]"
      }`}
    >
      <p className="text-xs leading-5 text-slate-400 sm:text-sm">{label}</p>

      <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <p
          key={value}
          className={`text-3xl font-semibold leading-none text-white sm:text-4xl ${
            active ? "animate-[fadeIn_400ms_ease-out]" : ""
          }`}
        >
          {value}
        </p>

        {changed && (
          <span className="animate-[fadeIn_400ms_ease-out] rounded-full bg-emerald-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
            Updated
          </span>
        )}
      </div>

      <p className="mt-4 text-[11px] leading-5 text-slate-500 sm:text-xs">
        {detail}
      </p>
    </div>
  );
}