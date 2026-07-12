import type { ReactNode } from "react";
import PlatformSidebar from "./PlatformSidebar";
import PlatformTopBar from "./PlatformTopBar";

export type PlatformOrganization = {
  name: string;
  facilityCount: number;
  userCount: number;
};

type PlatformShellProps = {
  children: ReactNode;
  organization: PlatformOrganization | null;
};

export default function PlatformShell({
  children,
  organization,
}: PlatformShellProps) {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <PlatformSidebar organization={organization} />

        <section className="min-w-0 flex-1">
          <PlatformTopBar />

          <div className="p-6 lg:p-9">{children}</div>
        </section>
      </div>
    </main>
  );
}