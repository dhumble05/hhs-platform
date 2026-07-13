"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { createOwnerUser } from "./actions";

export default function UsersPage() {
	const router = useRouter();

	const [isSaving, setIsSaving] = useState(false);
	const [error, setError] = useState("");

	async function handleContinue() {
		setError("");
		setIsSaving(true);

		const result = await createOwnerUser();

		if (!result.success) {
			setError(result.error ?? "Unable to create user.");
			setIsSaving(false);
			return;
		}

		router.push("/platform/setup-complete");
		router.refresh();
	}

	return (
		<main className="mx-auto max-w-5xl p-8">
			<div className="mb-8">
				<p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
					Step 3 of 4
				</p>

				<h1 className="mt-2 text-4xl font-bold">
					Invite Your Team
				</h1>

				<p className="mt-3 text-lg text-slate-500">
					Your account will automatically become the Organization Owner.
					Additional users can be invited later.
				</p>
			</div>

			<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

				<div className="rounded-xl bg-slate-50 p-6">
					<h2 className="text-xl font-bold">
						Organization Owner
					</h2>

					<p className="mt-2 text-slate-600">
						Your current Clerk account will become the owner of this
						organization with full access to all facilities and modules.
					</p>
				</div>

				{error && (
					<div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
						{error}
					</div>
				)}

				<div className="mt-10 flex justify-end gap-4">
					<Button
						variant="secondary"
						onClick={() => router.push("/platform/facilities")}
					>
						Back
					</Button>

					<Button
						onClick={handleContinue}
						disabled={isSaving}
					>
						{isSaving ? "Creating User..." : "Continue →"}
					</Button>
				</div>
			</div>
		</main>
	);
}
