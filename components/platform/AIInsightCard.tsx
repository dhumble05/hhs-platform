type AIInsightCardProps = {
  score: number;
  confidence: string;
  standardsCovered: number;
  missingItems: number;
};

export default function AIInsightCard({
  score,
  confidence,
  standardsCovered,
  missingItems,
}: AIInsightCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-700">
        Compliance Analysis
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm text-slate-500">Compliance Score</p>
          <p className="text-4xl font-bold text-emerald-600">
            {score}%
          </p>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Confidence</span>
          <span className="font-semibold">{confidence}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Standards Covered</span>
          <span className="font-semibold">{standardsCovered}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Missing Items</span>
          <span className="font-semibold text-red-600">
            {missingItems}
          </span>
        </div>
      </div>
    </section>
  );
}
