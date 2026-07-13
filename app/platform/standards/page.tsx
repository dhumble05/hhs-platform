import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

type StandardsPageProps = {
	searchParams: Promise<{
		q?: string;
		accreditor?: string;
		category?: string;
	}>;
};

export default async function StandardsPage({
	searchParams,
}: StandardsPageProps) {
	const { userId } = await auth();

	if (!userId) {
		redirect("/");
	}

	const databaseUser = await prisma.user.findUnique({
		where: {
			id: userId,
		},
		select: {
			organizationId: true,
		},
	});

	const ownedOrganization = await prisma.organization.findUnique({
		where: {
			ownerClerkUserId: userId,
		},
		select: {
			id: true,
		},
	});

	const organizationId =
		databaseUser?.organizationId ?? ownedOrganization?.id;

	if (!organizationId) {
		redirect("/platform/organization");
	}

	const params = await searchParams;
	const query = params.q?.trim() ?? "";
	const accreditor = params.accreditor?.trim() ?? "";
	const category = params.category?.trim() ?? "";

	const standards = await prisma.standard.findMany({
		where: {
			AND: [
				{
					OR: [
						{
							organizationId: null,
						},
						{
							organizationId,
						},
					],
				},
				query
					? {
							OR: [
								{
									code: {
										contains: query,
										mode: "insensitive",
									},
								},
								{
									title: {
										contains: query,
										mode: "insensitive",
									},
								},
								{
									description: {
										contains: query,
										mode: "insensitive",
									},
								},
								{
									requirement: {
										contains: query,
										mode: "insensitive",
									},
								},
							],
						}
					: {},
				accreditor
					? {
							accreditor,
						}
					: {},
				category
					? {
							category,
						}
					: {},
			],
		},
		include: {
			_count: {
				select: {
					evidenceMappings: true,
				},
			},
		},
		orderBy: [
			{
				accreditor: "asc",
			},
			{
				code: "asc",
			},
		],
	});

	const allVisibleStandards = await prisma.standard.findMany({
		where: {
			OR: [
				{
					organizationId: null,
				},
				{
					organizationId,
				},
			],
		},
		select: {
			accreditor: true,
			category: true,
			status: true,
			riskLevel: true,
		},
	});

	const accreditors = Array.from(
		new Set(
			allVisibleStandards
				.map((item) => item.accreditor)
				.filter(Boolean),
		),
	).sort();

	const categories = Array.from(
		new Set(
			allVisibleStandards
				.map((item) => item.category)
				.filter((value): value is string => Boolean(value)),
		),
	).sort();

	const activeCount = allVisibleStandards.filter(
		(item) => item.status === "Active",
	).length;

	const highRiskCount = allVisibleStandards.filter(
		(item) => item.riskLevel === "High",
	).length;

	const mappedCount = standards.filter(
		(item) => item._count.evidenceMappings > 0,
	).length;

	return (
		<main className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
			<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
				<div>
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
						Compliance Intelligence
					</p>

					<h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
						Standards Library
					</h1>

					<p className="mt-3 max-w-3xl text-lg leading-8 text-slate-500">
						Manage regulatory requirements, accreditation standards, and
						evidence mappings across your organization.
					</p>
				</div>

				<Link
					href="/platform/standards/new"
					className="inline-flex w-fit items-center justify-center rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
				>
					+ Add Standard
				</Link>
			</div>

			<section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
					<p className="text-sm font-semibold text-slate-500">
						Total standards
					</p>
					<p className="mt-3 text-3xl font-bold text-slate-950">
						{allVisibleStandards.length}
					</p>
					<p className="mt-2 text-sm text-slate-500">
						Available requirements
					</p>
				</article>

				<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
					<p className="text-sm font-semibold text-slate-500">
						Active
					</p>
					<p className="mt-3 text-3xl font-bold text-emerald-700">
						{activeCount}
					</p>
					<p className="mt-2 text-sm text-slate-500">
						Current standards
					</p>
				</article>

				<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
					<p className="text-sm font-semibold text-slate-500">
						High risk
					</p>
					<p className="mt-3 text-3xl font-bold text-red-700">
						{highRiskCount}
					</p>
					<p className="mt-2 text-sm text-slate-500">
						Priority requirements
					</p>
				</article>

				<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
					<p className="text-sm font-semibold text-slate-500">
						Mapped results
					</p>
					<p className="mt-3 text-3xl font-bold text-teal-700">
						{mappedCount}
					</p>
					<p className="mt-2 text-sm text-slate-500">
						Current filtered standards
					</p>
				</article>
			</section>

			<section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
				<form className="grid gap-4 lg:grid-cols-[1fr_220px_220px_auto]">
					<input
						type="search"
						name="q"
						defaultValue={query}
						placeholder="Search code, title, description, or requirement"
						className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
					/>

					<select
						name="accreditor"
						defaultValue={accreditor}
						className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
					>
						<option value="">All accreditors</option>
						{accreditors.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>

					<select
						name="category"
						defaultValue={category}
						className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
					>
						<option value="">All categories</option>
						{categories.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>

					<button
						type="submit"
						className="rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
					>
						Apply Filters
					</button>
				</form>
			</section>

			<section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
				<div className="border-b border-slate-200 px-6 py-5">
					<h2 className="text-xl font-bold text-slate-950">
						Standard requirements
					</h2>

					<p className="mt-1 text-sm text-slate-500">
						{standards.length} matching{" "}
						{standards.length === 1 ? "standard" : "standards"}
					</p>
				</div>

				{standards.length === 0 ? (
					<div className="px-6 py-16 text-center">
						<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-2xl text-teal-700">
							≡
						</div>

						<h3 className="mt-5 text-xl font-bold text-slate-950">
							No standards found
						</h3>

						<p className="mx-auto mt-2 max-w-xl leading-7 text-slate-500">
							Add your first standard or adjust the current search filters.
						</p>

						<Link
							href="/platform/standards/new"
							className="mt-6 inline-flex rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
						>
							Add your first standard
						</Link>
					</div>
				) : (
					<div className="overflow-x-auto">
						<table className="w-full min-w-[1100px] text-left">
							<thead className="bg-slate-50 text-sm text-slate-500">
								<tr>
									<th className="px-6 py-4 font-semibold">Standard</th>
									<th className="px-6 py-4 font-semibold">Accreditor</th>
									<th className="px-6 py-4 font-semibold">Category</th>
									<th className="px-6 py-4 font-semibold">Risk</th>
									<th className="px-6 py-4 font-semibold">Evidence</th>
									<th className="px-6 py-4 font-semibold">Status</th>
								</tr>
							</thead>

							<tbody className="divide-y divide-slate-200">
								{standards.map((standard) => (
									<tr key={standard.id} className="hover:bg-slate-50">
										<td className="px-6 py-5">
											<p className="font-semibold text-slate-950">
												{standard.code}
											</p>

											<p className="mt-1 text-sm text-slate-600">
												{standard.title}
											</p>
										</td>

										<td className="px-6 py-5 text-slate-600">
											{standard.accreditor}
										</td>

										<td className="px-6 py-5 text-slate-600">
											{standard.category ?? "Uncategorized"}
										</td>

										<td className="px-6 py-5">
											<span
												className={`rounded-full px-3 py-1 text-xs font-semibold ${
													standard.riskLevel === "High"
														? "bg-red-100 text-red-700"
														: standard.riskLevel === "Medium"
															? "bg-amber-100 text-amber-700"
															: "bg-slate-100 text-slate-700"
												}`}
											>
												{standard.riskLevel ?? "Not rated"}
											</span>
										</td>

										<td className="px-6 py-5 text-slate-600">
											{standard._count.evidenceMappings}
										</td>

										<td className="px-6 py-5">
											<span
												className={`rounded-full px-3 py-1 text-xs font-semibold ${
													standard.status === "Active"
														? "bg-emerald-100 text-emerald-700"
														: "bg-slate-100 text-slate-700"
												}`}
											>
												{standard.status}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</section>
		</main>
	);
}
