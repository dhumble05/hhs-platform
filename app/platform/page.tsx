const foundationItems = [
  {
    title: "Authentication",
    description:
      "Secure user login, invitations, password recovery, and account management.",
    status: "Configured",
  },
{
  title: "Organization",
  description:
    "Create the healthcare organization that owns facilities, users, and compliance data.",
  status: "Not configured",
  href: "/platform/organization",
},
  {
    title: "Facilities",
    description:
      "Add ASCs, hospitals, physician practices, and other regulated locations.",
    status: "Not configured",
  },
  {
    title: "Database",
    description:
      "Connect production records for evidence, policies, standards, tasks, and readiness.",
    status: "Not connected",
  },
];

export default function PlatformPage() {
  return (
    <>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
        Production Platform
      </p>

      <h2 className="mt-2 text-3xl font-bold tracking-tight lg:text-4xl">
        Build the organization foundation
      </h2>

      <p className="mt-3 max-w-3xl text-slate-500">
        This is the real HHS application environment. The next steps establish
        secure authentication, organizations, facilities, user roles, and
        production data storage.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
  {foundationItems.map((item) => {
    const isComplete =
      item.status === "Configured" || item.status === "Connected";

    const cardClasses =
      "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition";

    const cardContent = (
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{item.title}</h3>

          <p className="mt-2 leading-6 text-slate-500">
            {item.description}
          </p>
        </div>

        <span
          className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
            isComplete
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {item.status}
        </span>
      </div>
    );

    if ("href" in item && item.href) {
      return (
        <a
          key={item.title}
          href={item.href}
          className={`${cardClasses} block hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md`}
        >
          {cardContent}
        </a>
      );
    }

    return (
      <section key={item.title} className={cardClasses}>
        {cardContent}
      </section>
    );
  })}
</div>

      <section className="mt-6 rounded-3xl bg-slate-950 p-7 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
          Next Production Milestone
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Secure authentication and tenant setup
        </h3>

        <p className="mt-3 max-w-3xl leading-7 text-slate-300">
          Every user must belong to an organization, every organization may
          contain multiple facilities, and every record must remain securely
          separated from other HHS customers.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
            User authentication
          </span>

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
            Organizations
          </span>

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
            Facilities
          </span>

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
            Role permissions
          </span>

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
            Tenant isolation
          </span>
        </div>
      </section>
    </>
  );
}
