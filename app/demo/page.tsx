import KPICards from "@/components/dashboard/KPICards";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1">
          <TopBar />

          <div className="p-6 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Live Compliance Overview
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Organization Survey Readiness
            </h2>

            <p className="mt-2 text-slate-500">
              Monitor readiness, findings, evidence, policies, and facility performance from one executive view.
            </p>

            <div className="mt-8">
              <KPICards />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}