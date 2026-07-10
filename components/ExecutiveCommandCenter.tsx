
export default function ExecutiveCommandCenter() {
	return (
		<section className="bg-slate-50 px-8 py-24">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12">
					<p className="text-sm font-bold uppercase tracking-widest text-teal-600">
						Executive Command Center
					</p>
					<h2 className="mt-4 text-5xl font-bold text-slate-950">
						Your daily compliance control room.
					</h2>
					<p className="mt-5 max-w-3xl text-xl text-slate-600">
						See critical risks, facility readiness, upcoming surveys, and recent activity before they become findings.
					</p>
				</div>

				<div className="grid gap-6 lg:grid-cols-4">
					{[
						["Survey Readiness", "96%"],
						["Open Findings", "12"],
						["Policies Due", "8"],
						["Evidence Missing", "31"],
					].map(([label, value]) => (
						<div key={label} className="rounded-3xl bg-white p-6 shadow-sm">
							<p className="text-sm font-semibold text-slate-500">{label}</p>
							<p className="mt-3 text-4xl font-bold text-slate-950">{value}</p>
						</div>
					))}
				</div>

				<div className="mt-8 grid gap-8 lg:grid-cols-3">
					<div className="rounded-3xl bg-white p-6 shadow-sm">
						<h3 className="text-xl font-bold">Critical Items</h3>
						<div className="mt-5 space-y-3">
							{[
								"Fire drill overdue",
								"Generator load bank due",
								"Medical gas expires in 14 days",
								"Governing Body minutes missing",
							].map((item) => (
								<div key={item} className="rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-800">
									{item}
								</div>
							))}
						</div>
					</div>

					<div className="rounded-3xl bg-white p-6 shadow-sm">
						<h3 className="text-xl font-bold">Facilities</h3>
						<div className="mt-5 space-y-4">
							{[
								["Indianapolis ASC", "98%"],
								["Greenwood ASC", "94%"],
								["Avon ASC", "91%"],
								["Carmel ASC", "87%"],
							].map(([name, score]) => (
								<div key={name}>
									<div className="mb-2 flex justify-between text-sm font-semibold">
										<span>{name}</span>
										<span>{score}</span>
									</div>
									<div className="h-2 rounded-full bg-slate-100">
										<div className="h-2 rounded-full bg-teal-600" style={{ width: score }} />
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-3xl bg-white p-6 shadow-sm">
						<h3 className="text-xl font-bold">Recent Activity</h3>
						<div className="mt-5 space-y-3 text-sm">
							<div className="rounded-xl bg-slate-50 p-4">Jessica uploaded Fire Drill March</div>
							<div className="rounded-xl bg-slate-50 p-4">David approved Infection Control Plan</div>
							<div className="rounded-xl bg-slate-50 p-4">Maria assigned Generator Test</div>
							<div className="rounded-xl bg-slate-50 p-4">Scott completed Medical Gas Inspection</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
