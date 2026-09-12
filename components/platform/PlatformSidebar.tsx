"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { PlatformOrganization } from "./PlatformShell";

export type PlatformOperationalTopic = {
  code: string;
  slug: string;
  name: string;
  domain: string;
  displayOrder: number;
  icon: string | null;
  color: string | null;
};

type PlatformSidebarProps = {
  organization: PlatformOrganization | null;
  operationalTopics: PlatformOperationalTopic[];
};

type PrimaryNavigationItem = {
  label: string;
  href: string;
  icon: string;
};

const primaryNavigation: PrimaryNavigationItem[] = [
  {
    label: "Command Center",
    href: "/platform",
    icon: "▦",
  },
  {
    label: "Evidence",
    href: "/platform/evidence",
    icon: "↥",
  },
  {
    label: "Survey Readiness",
    href: "/platform/readiness",
    icon: "✓",
  },
];

const managementNavigation: PrimaryNavigationItem[] = [
  {
    label: "Standards",
    href: "/platform/standards",
    icon: "≡",
  },
  {
    label: "Policies",
    href: "/platform/policies",
    icon: "▤",
  },
  {
    label: "Tasks",
    href: "/platform/tasks",
    icon: "◷",
  },
  {
    label: "Reports",
    href: "/platform/reports",
    icon: "▥",
  },
  {
    label: "Facilities",
    href: "/platform/facilities",
    icon: "⌂",
  },
];

const domainDisplayOrder: Record<string, number> = {
  "Fire and Life Safety": 10,
  "Utility Systems": 20,
  "Construction and Renovation": 30,
};

function getTopicSymbol(icon: string | null) {
  const symbols: Record<string, string> = {
    "door-open": "▯",
    flame: "♨",
    "bell-ring": "◉",
    "shower-head": "⌁",
    signpost: "↪",
    bolt: "ϟ",
    activity: "⌁",
    wind: "≈",
    droplets: "◌",
    "triangle-alert": "△",
    "shield-alert": "◇",
    "hard-hat": "⌂",
  };

  return icon ? symbols[icon] ?? "•" : "•";
}

function getTopicColorClasses(color: string | null) {
  const colorClasses: Record<string, string> = {
    red: "bg-red-500/15 text-red-300",
    orange: "bg-orange-500/15 text-orange-300",
    amber: "bg-amber-500/15 text-amber-300",
    yellow: "bg-yellow-500/15 text-yellow-300",
    blue: "bg-blue-500/15 text-blue-300",
    teal: "bg-teal-500/15 text-teal-300",
    cyan: "bg-cyan-500/15 text-cyan-300",
    slate: "bg-slate-500/15 text-slate-300",
  };

  return colorClasses[color ?? ""] ?? "bg-white/10 text-slate-300";
}

export default function PlatformSidebar({
  organization,
  operationalTopics,
}: PlatformSidebarProps) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/platform") {
      return pathname === "/platform";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const groupedOperationalTopics = operationalTopics.reduce<
    Record<string, PlatformOperationalTopic[]>
  >((groups, topic) => {
    const domain = topic.domain || "Other Programs";

    if (!groups[domain]) {
      groups[domain] = [];
    }

    groups[domain].push(topic);

    return groups;
  }, {});

  const orderedDomains = Object.keys(groupedOperationalTopics).sort(
    (firstDomain, secondDomain) => {
      const firstOrder = domainDisplayOrder[firstDomain] ?? 100;
      const secondOrder = domainDisplayOrder[secondDomain] ?? 100;

      if (firstOrder !== secondOrder) {
        return firstOrder - secondOrder;
      }

      return firstDomain.localeCompare(secondDomain);
    },
  );

  return (
    <aside className="hidden h-screen w-80 shrink-0 flex-col overflow-hidden bg-slate-950 text-white lg:flex">
      <div className="border-b border-white/10 px-5 py-6">
        <Link href="/platform" className="flex items-center gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white">
            <Image
              src="/hhs-logo.png"
              alt="Humble Health Solutions"
              width={42}
              height={42}
              className="object-contain"
              priority
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-lg font-bold">HHS Platform</p>
            <p className="truncate text-xs text-slate-400">
              Enterprise Compliance
            </p>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6">
        <nav className="space-y-2">
          {primaryNavigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-teal-600 text-white shadow-lg shadow-teal-950/30"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="grid h-6 w-6 place-items-center text-lg"
                >
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="my-6 border-t border-white/10" />

        <section>
          <div className="flex items-center justify-between px-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Operational Programs
            </p>

            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-semibold text-slate-400">
              {operationalTopics.length}
            </span>
          </div>

          {orderedDomains.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-white/10 px-4 py-4">
              <p className="text-sm font-semibold text-slate-300">
                No operational programs
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Operational topics will appear here after they are added to the
                database.
              </p>
            </div>
          ) : (
            <div className="mt-5 space-y-6">
              {orderedDomains.map((domain) => {
                const topics = groupedOperationalTopics[domain].sort(
                  (firstTopic, secondTopic) => {
                    if (
                      firstTopic.displayOrder !== secondTopic.displayOrder
                    ) {
                      return (
                        firstTopic.displayOrder - secondTopic.displayOrder
                      );
                    }

                    return firstTopic.name.localeCompare(secondTopic.name);
                  },
                );

                return (
                  <div key={domain}>
                    <p className="px-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      {domain}
                    </p>

                    <div className="mt-2 space-y-1">
                      {topics.map((topic) => {
                        const href = `/platform/programs/${topic.slug}`;
                        const active = isActive(href);

                        return (
                          <Link
                            key={topic.code}
                            href={href}
                            className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                              active
                                ? "bg-white/10 text-white"
                                : "text-slate-400 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <span
                              aria-hidden="true"
                              className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-sm font-bold ${getTopicColorClasses(
                                topic.color,
                              )}`}
                            >
                              {getTopicSymbol(topic.icon)}
                            </span>

                            <span className="min-w-0 flex-1 truncate">
                              {topic.name}
                            </span>

                            <span
                              aria-hidden="true"
                              className={`text-xs transition ${
                                active
                                  ? "text-teal-300"
                                  : "text-slate-700 group-hover:text-slate-400"
                              }`}
                            >
                              ›
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <div className="my-6 border-t border-white/10" />

        <section>
          <p className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Management
          </p>

          <nav className="mt-3 space-y-1">
            {managementNavigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-teal-600 text-white"
                      : "text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 place-items-center text-lg"
                  >
                    {item.icon}
                  </span>

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </section>
      </div>

      <div className="border-t border-white/10 px-5 py-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">
            Current Organization
          </p>

          <p className="mt-2 truncate font-semibold">
            {organization?.name ?? "Organization not configured"}
          </p>

          {organization ? (
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
              <span>
                {organization.facilityCount}{" "}
                {organization.facilityCount === 1
                  ? "facility"
                  : "facilities"}
              </span>

              <span aria-hidden="true">•</span>

              <span>
                {organization.userCount}{" "}
                {organization.userCount === 1 ? "user" : "users"}
              </span>
            </div>
          ) : (
            <p className="mt-1 text-xs text-slate-400">
              Production environment
            </p>
          )}
        </div>

        <Link
          href="/platform/settings"
          className={`mt-4 flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition ${
            isActive("/platform/settings")
              ? "border-teal-500/50 bg-teal-500/10 text-teal-200"
              : "border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          Platform Settings
        </Link>
      </div>
    </aside>
  );
}