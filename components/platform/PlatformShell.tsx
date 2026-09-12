import type { ReactNode } from "react";

import PlatformSidebar, {
  type PlatformOperationalTopic,
} from "./PlatformSidebar";
import PlatformTopBar from "./PlatformTopBar";

export type PlatformOrganization = {
  name: string;
  facilityCount: number;
  userCount: number;
};

type PlatformShellProps = {
  children: ReactNode;
  organization: PlatformOrganization | null;
  operationalTopics: PlatformOperationalTopic[];
};

export default function PlatformShell({
  children,
  organization,
  operationalTopics,
}: PlatformShellProps) {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <PlatformSidebar
          organization={organization}
          operationalTopics={operationalTopics}
        />

        <section className="min-w-0 flex-1">
          <PlatformTopBar />

          <div className="p-6 lg:p-9">{children}</div>
        </section>
      </div>
    </main>
  );
}