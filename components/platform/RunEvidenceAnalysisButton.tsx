"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { runEvidenceAnalysis } from "@/app/platform/evidence/[evidenceId]/actions";

type RunEvidenceAnalysisButtonProps = {
  evidenceId: string;
  analysisStatus: string;
  hasExtractedText: boolean;
};

export default function RunEvidenceAnalysisButton({
  evidenceId,
  analysisStatus,
  hasExtractedText,
}: RunEvidenceAnalysisButtonProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(
    null,
  );
  const [isError, setIsError] = useState(false);

  const isProcessing =
    analysisStatus === "Processing" || isPending;

  function handleRunAnalysis() {
    setMessage(null);
    setIsError(false);

    startTransition(async () => {
      const result = await runEvidenceAnalysis(evidenceId);

      setMessage(result.message);
      setIsError(!result.success);

      if (result.success) {
        router.refresh();
      }
    });
  }

  return (
    <div className="flex flex-col items-start gap-3 sm:items-end">
      <button
        type="button"
        onClick={handleRunAnalysis}
        disabled={!hasExtractedText || isProcessing}
        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {isProcessing
          ? "Analyzing Evidence..."
          : analysisStatus === "Completed"
            ? "Run Analysis Again"
            : "Run Compliance Analysis"}
      </button>

      {!hasExtractedText ? (
        <p className="max-w-sm text-sm text-amber-700">
          No readable text was extracted from this
          document.
        </p>
      ) : null}

      {message ? (
        <p
          className={`max-w-sm text-sm ${
            isError
              ? "text-red-700"
              : "text-emerald-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}