
import DemoShell from "@/components/dashboard/DemoShell";
import KPICards from "@/components/dashboard/KPICards";

export default function DemoPage() {
	return (
		<DemoShell>
			<p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
				Live Compliance Overview
			</p>

			<h1 className="mt-2 text-3xl font-bold tracking-tight lg:text-4xl">
				Organization survey readiness
			</h1>

			<p className="mt-2 max-w-2xl text-slate-500">
				Monitor readiness, findings, evidence, policies, and
				facility-level performance from one executive view.
			</p>

			<div className="mt-8">
				<KPICards />
			</div>
		</DemoShell>
	);
}
