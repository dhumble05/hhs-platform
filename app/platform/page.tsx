import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function PlatformPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const databaseUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      organization: {
        include: {
          facilities: {
            orderBy: {
              createdAt: "asc",
            },
          },
          users: {
            orderBy: {
              createdAt: "asc",
            },
          },
        },
      },
    },
  });

  const ownedOrganization =
    databaseUser?.organization ??
    (await prisma.organization.findUnique({
      where: {
        ownerClerkUserId: userId,
      },
      include: {
        facilities: {
          orderBy: {
            createdAt: "asc",
          },
        },
        users: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    }));

  const organizationConfigured = Boolean(ownedOrganization);
  const facilityCount = ownedOrganization?.facilities.length ?? 0;
  const userCount = ownedOrganization?.users.length ?? 0;
  const facilitiesConfigured = facilityCount > 0;
  const usersConfigured = userCount > 0;

  const onboardingComplete =
    organizationConfigured && facilitiesConfigured && usersConfigured;

  const foundationItems = [
    {
      title: "Authentication",
      description:
        "Secure user login, account management, and authenticated platform access.",
      status: "Configured",
      href: null,
    },
    {
      title: "Organization",
      description: organizationConfigured
        ? `${ownedOrganization?.name} is configured as the current organization.`
        : "Create the healthcare organization that owns facilities, users, and compliance data.",
      status: organizationConfigured ? "Configured" : "Not configured",
      href: "/platform/organization",
    },
    {
      title: "Facilities",
      description: facilitiesConfigured
        ? `${facilityCount} ${
            facilityCount === 1 ? "facility is" : "facilities are"
          } connected to this organization.`
        : "Add ASCs, hospitals, physician practices, and other regulated locations.",
      status: facilitiesConfigured ? "Configured" : "Not configured",
      href: "/platform/facilities",
    },
    {
      title: "Users",
      description: usersConfigured
        ? `${userCount} ${
            userCount === 1 ? "user has" : "users have"
          } access to this organization.`
        : "Create the organization owner account and add authorized team members.",
      status: usersConfigured ? "Configured" : "Not configured",
      href: "/platform/users",
    },
    {
      title: "Database",
      description:
        "Production records are connected through Prisma and Supabase PostgreSQL.",
      status: "Connected",
      href: null,
    },
    {
      title: "Onboarding",
      description: onboardingComplete
        ? "The organization foundation is complete and ready for compliance modules."
        : "Complete the organization, facility, and owner setup workflow.",
      status: onboardingComplete ? "Complete" : "In progress",
      href: onboardingComplete
        ? "/platform/setup-complete"
        : "/platform/organization",
    },
  ];

  const firstFacility = ownedOrganization?.facilities[0];

  return (
    <>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            Executive Command Center
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
            Welcome to HHS
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-slate-500">
            Monitor your organization foundation, facility network, authorized
            users, and platform readiness from one secure workspace.
          </p>
        </div>

        <div
          className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
            onboardingComplete
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              onboardingComplete ? "bg-emerald-500" : "bg-amber-500"
            }`}
          />

          {onboardingComplete
            ? "Foundation complete"
            : "Setup in progress"}
        </div>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Organization
          </p>

          <p className="mt-3 text-2xl font-bold text-slate-950">
            {ownedOrganization?.name ?? "Not configured"}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {ownedOrganization?.organizationType ??
              "Complete organization setup"}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Facilities
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {facilityCount}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {firstFacility
              ? `Primary: ${firstFacility.name}`
              : "No facilities added"}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Authorized users
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-950">
            {userCount}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {databaseUser?.role
              ? `Your role: ${databaseUser.role}`
              : "Owner setup pending"}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Platform status
          </p>

          <p className="mt-3 text-2xl font-bold text-emerald-700">
            Connected
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Supabase PostgreSQL
          </p>
        </article>
      </section>

      <section className="mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Platform foundation
            </h2>

            <p className="mt-2 text-slate-500">
              Review the production services and tenant records supporting your
              HHS workspace.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {foundationItems.map((item) => {
            const isComplete =
              item.status === "Configured" ||
              item.status === "Connected" ||
              item.status === "Complete";

            const cardClasses =
              "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition";

            const cardContent = (
              <div className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

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

                <p className="mt-3 leading-6 text-slate-500">
                  {item.description}
                </p>

                {item.href && (
                  <p className="mt-auto pt-5 text-sm font-semibold text-teal-700">
                    Open {item.title} →
                  </p>
                )}
              </div>
            );

            if (item.href) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`${cardClasses} block hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md`}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <article key={item.title} className={cardClasses}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 rounded-3xl bg-slate-950 p-7 text-white shadow-xl lg:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
          Next production milestone
        </p>

        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Build the compliance evidence engine
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              The organization foundation is ready. The next phase will add
              drag-and-drop evidence intake, document metadata, ownership,
              expiration tracking, and standards mapping.
            </p>
          </div>

          <Link
            href="/platform"
            className="inline-flex w-fit rounded-xl bg-teal-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
          >
            Command Center
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Evidence upload",
            "Document ownership",
            "Expiration tracking",
            "Standards mapping",
            "Survey readiness",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200"
            >
              {label}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
