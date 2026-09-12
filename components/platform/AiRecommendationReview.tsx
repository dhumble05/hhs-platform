"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import {
  approveAiRecommendation,
  rejectAiRecommendation,
} from "@/app/platform/evidence/[evidenceId]/review-actions";

type AiRecommendationReviewProps = {
  evidenceId: string;
  standardCode: string;
  status: "Pending" | "Approved" | "Rejected";
};

export default function AiRecommendationReview({
  evidenceId,
  standardCode,
  status,
}: AiRecommendationReviewProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(
    null,
  );
  const [isError, setIsError] = useState(false);

  function handleApprove() {
    setMessage(null);
    setIsError(false);

    startTransition(async () => {
      const result = await approveAiRecommendation(
        evidenceId,
        standardCode,
      );

      setMessage(result.message);
      setIsError(!result.success);

      if (result.success) {
        router.refresh();
      }
    });
  }

  function handleReject() {
    setMessage(null);
    setIsError(false);

    startTransition(async () => {
      const result = await rejectAiRecommendation(
        evidenceId,
        standardCode,
      );

      setMessage(result.message);
      setIsError(!result.success);

      if (result.success) {
        router.refresh();
      }
    });
  }

  if (status === "Approved") {
    return (
      <div className="flex flex-col items-end gap-2">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
          ✓ Verified
        </span>

        {message ? (
          <p className="max-w-xs text-right text-xs text-emerald-700">
            {message}
          </p>
        ) : null}
      </div>
    );
  }

  if (status === "Rejected") {
    return (
      <div className="flex flex-col items-end gap-2">
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-800">
          Rejected
        </span>

        <button
          type="button"
          onClick={handleApprove}
          disabled={isPending}
          className="text-xs font-bold text-teal-700 transition hover:text-teal-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Updating..." : "Approve instead"}
        </button>

        {message ? (
          <p
            className={`max-w-xs text-right text-xs ${
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

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={handleApprove}
          disabled={isPending}
          className="rounded-xl bg-emerald-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Updating..." : "Approve"}
        </button>

        <button
          type="button"
          onClick={handleReject}
          disabled={isPending}
          className="rounded-xl border border-red-200 bg-white px-4 py-2 text-xs font-bold text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reject
        </button>
      </div>

      {message ? (
        <p
          className={`max-w-xs text-right text-xs ${
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