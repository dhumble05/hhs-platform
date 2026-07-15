const promises = [
  {
    number: "01",
    title: "Save Time",
    description:
      "Upload compliance evidence once. HHS automatically organizes, categorizes, and prepares it for retrieval.",
    detail: "Eliminate folders, spreadsheets, and manual document sorting.",
  },
  {
    number: "02",
    title: "Reduce Risk",
    description:
      "Identify missing documentation and potential compliance gaps before they become survey findings.",
    detail: "Give teams time to correct problems before survey day.",
  },
  {
    number: "03",
    title: "Prove Compliance",
    description:
      "Give executives a real-time view of readiness and retrieve supporting evidence in seconds.",
    detail: "Move from searching for documents to answering surveyors.",
  },
];

export default function SurveyPromises() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            One platform. Three outcomes.
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Compliance should create confidence, not administrative burden.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            HHS is designed around the three outcomes healthcare leaders need
            most: more time, less risk, and immediate proof of readiness.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {promises.map((promise) => (
            <article
              key={promise.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold tracking-[0.2em] text-teal-300">
                  {promise.number}
                </p>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-teal-300 transition group-hover:border-teal-300/30 group-hover:bg-teal-300/10">
                  {promise.number === "01"
                    ? "↘"
                    : promise.number === "02"
                      ? "!"
                      : "✓"}
                </div>
              </div>

              <h3 className="mt-10 text-2xl font-semibold">{promise.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {promise.description}
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-xs leading-6 text-slate-500">
                  {promise.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] px-8 py-10 text-center sm:px-12">
          <p className="mx-auto max-w-4xl text-xl font-medium leading-9 text-slate-200 sm:text-2xl">
            “Every hour spent organizing compliance documents is an hour that
            could have been spent improving patient care.”
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
            The HHS North Star
          </p>
        </div>
      </div>
    </section>
  );
}