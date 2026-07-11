const cards = [
  {
    title: "Survey Readiness",
    value: "96%",
    color: "text-emerald-600",
    detail: "+3% this month",
  },
  {
    title: "Open Findings",
    value: "12",
    color: "text-red-600",
    detail: "2 High Risk",
  },
  {
    title: "Evidence Files",
    value: "2,518",
    color: "text-sky-600",
    detail: "Automatically Mapped",
  },
  {
    title: "Policies Due",
    value: "8",
    color: "text-amber-600",
    detail: "Within 30 Days",
  },
];

export default function KPICards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200"
        >
          <p className="text-sm text-slate-500">
            {card.title}
          </p>

          <h2 className={`mt-3 text-5xl font-bold ${card.color}`}>
            {card.value}
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            {card.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
