import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

type DemoShellProps = {
  children: ReactNode;
};

export default function DemoShell({ children }: DemoShellProps) {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1">
          <TopBar />

          <div className="p-6 lg:p-9">{children}</div>
        </section>
      </div>
    </main>
  );
}
