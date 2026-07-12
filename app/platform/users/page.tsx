"use client";

import { useRouter } from "next/navigation";

export default function UsersPage() {
  const router = useRouter();

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
          Step 3 of 4
        </p>

        <h1 className="mt-2 text-4xl font-bold">Invite Your Team</h1>

        <p className="mt-3 text-lg text-slate-500">
          Add key users and assign the right level of access to your
          organization and facilities.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Jessica Humble"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Role
            </label>

            <select className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none">
              <option>Organization Administrator</option>
              <option>Facility Administrator</option>
              <option>Compliance Director</option>
              <option>Clinical Director</option>
              <option>Facilities Director</option>
              <option>Safety Officer</option>
              <option>Read Only</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Facility Access
            </label>

            <select className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none">
              <option>All Facilities</option>
              <option>Selected Facilities Only</option>
            </select>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
          <p className="font-semibold">Team invitations</p>

          <p className="mt-1 text-sm text-slate-500">
            Additional users can be invited later from Platform Settings.
          </p>
        </div>

        <div className="mt-10 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/platform/facilities")}
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold"
          >
            Back
          </button>

          <button
            type="button"
            onClick={() => router.push("/platform/setup-complete")}
            className="rounded-xl bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700"
          >
            Continue →
          </button>
        </div>
      </div>
    </main>
  );
}
