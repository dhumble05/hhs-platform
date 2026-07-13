"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function SetupCompletePage() {
  const router = useRouter();

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">
          ✓
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
          Step 4 of 4
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-950">
          Your HHS workspace is ready
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">
          Your organization, first facility, and owner account have been
          configured successfully. You can now begin building your compliance
          program.
        </p>

        <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">
              Organization
            </p>
            <p className="mt-2 font-bold text-slate-950">Configured</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">
              Facility
            </p>
            <p className="mt-2 font-bold text-slate-950">Added</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">
              Owner account
            </p>
            <p className="mt-2 font-bold text-slate-950">Active</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button onClick={() => router.push("/platform")}>
            Open Command Center →
          </Button>
        </div>
      </div>
    </main>
  );
}
