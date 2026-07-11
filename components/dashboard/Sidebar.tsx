import Image from "next/image";
import Link from "next/link";

const navigation = [
	{ icon: "▦", label: "Dashboard", href: "/demo", active: true },
	{ icon: "↥", label: "Evidence", href: "/demo/evidence" },
	{ icon: "≡", label: "Standards", href: "/demo/standards" },
	{ icon: "✓", label: "Survey Readiness", href: "/demo/readiness" },
	{ icon: "▤", label: "Policies", href: "/demo/policies" },
	{ icon: "◷", label: "Tasks", href: "/demo/tasks" },
	{ icon: "▥", label: "Reports", href: "/demo/reports" },
];

export default function Sidebar() {
	return (
		<aside className="hidden min-h-screen w-72 flex-col bg-slate-950 px-5 py-6 text-white lg:flex">
			<div className="flex items-center gap-3 border-b border-white/10 pb-6">
				<div className="grid h-12 w-12 place-items-center rounded-xl bg-white">
					<Image
						src="/logo.png"
						alt="Humble Health Solutions"
						width={42}
						height={42}
						className="object-contain"
						priority
					/>
				</div>

				<div>
					<p className="text-lg font-bold">HHS Platform</p>
					<p className="text-xs text-slate-400">
						Enterprise Compliance
					</p>
				</div>
			</div>

			<nav className="mt-7 space-y-2">
				{navigation.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
							item.active
								? "bg-teal-600 text-white"
								: "text-slate-300 hover:bg-white/10 hover:text-white"
						}`}
					>
						<span className="text-lg">{item.icon}</span>
						{item.label}
					</Link>
				))}
			</nav>

			<div className="mt-auto">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<p className="text-xs font-semibold uppercase tracking-widest text-teal-300">
						Demo Organization
					</p>

					<p className="mt-2 font-semibold">
						Meridian Health Network
					</p>

					<p className="mt-1 text-xs text-slate-400">
						12 facilities · Enterprise Plan
					</p>
				</div>

				<Link
					href="/"
					className="mt-4 flex items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
				>
					Return to Website
				</Link>
			</div>
		</aside>
	);
}
