"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
export default function FacilitiesPage() {
  const router = useRouter();

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
          Step 2 of 4
        </p>

        <h1 className="mt-2 text-4xl font-bold">Add Your First Facility</h1>

        <p className="mt-3 text-lg text-slate-500">
          Configure the location, leadership, accreditation, and regulatory
          details for your first healthcare facility.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Facility Name
            </label>

            <input
              type="text"
              placeholder="Indiana Surgery Center"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Facility Type
            </label>

            <select className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none">
              <option>Ambulatory Surgery Center</option>
              <option>Hospital</option>
              <option>Hospital Outpatient Department</option>
              <option>Physician Practice</option>
              <option>Clinic</option>
              <option>Other Healthcare Facility</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Primary Accreditor
            </label>

            <select className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none">
              <option>AAAHC</option>
              <option>ACHC</option>
              <option>The Joint Commission</option>
              <option>State Only</option>
              <option>Not Yet Selected</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              CMS Certification Number
            </label>

            <input
              type="text"
              placeholder="Optional"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Facility Administrator
            </label>

            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Medical Director
            </label>

            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Safety Officer
            </label>

            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Time Zone
            </label>

            <select className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none">
              <option>Eastern Time</option>
              <option>Central Time</option>
              <option>Mountain Time</option>
              <option>Pacific Time</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold">
              Facility Address
            </label>

            <input
              type="text"
              placeholder="123 Main Street"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>
        </div>

<div className="mt-10 flex justify-end gap-4">
  <Button
    variant="secondary"
    onClick={() => router.push("/platform/organization")}
  >
    Back
  </Button>

  <Button onClick={() => router.push("/platform/users")}>
    Save Facility →
  </Button>
</div>
      </div>
    </main>
  );
}
