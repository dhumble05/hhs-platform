const markets = [
  {
    title: "Hospitals",
    detail: "Acute care and critical access",
  },
  {
    title: "Ambulatory Surgery Centers",
    detail: "Single-site and multi-site organizations",
  },
  {
    title: "Health Systems",
    detail: "Enterprise compliance visibility",
  },
  {
    title: "Physician Practices",
    detail: "Specialty and multispecialty groups",
  },
];

export default function SurveyTrustBar() {
  return (
    <section className="border-y border-white/10 bg-slate-900/70 px-6 py-8 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_3.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
              Designed for healthcare
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              One compliance platform across the continuum of care.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((market) => (
              <article
                key={market.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/10 text-sm font-bold text-teal-300">
                    +
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      {market.title}
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {market.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}