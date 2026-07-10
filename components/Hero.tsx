export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="max-w-3xl">
        <div className="mb-5 inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
          Healthcare Compliance Software
        </div>

        <h2 className="text-6xl font-bold leading-tight text-slate-950">
          Enterprise Compliance.
          <br />
          Intelligent Solutions.
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">
          The all-in-one platform for ambulatory surgery centers, hospitals,
          physician practices, and healthcare organizations to stay survey-ready
          every day.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-teal-600 px-8 py-4 font-semibold text-white hover:bg-teal-700">
            Schedule Demo
          </button>

          <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
