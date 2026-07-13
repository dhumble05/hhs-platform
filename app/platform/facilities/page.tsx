"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { saveFacility } from "./actions";

export default function FacilitiesPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    facilityType: "",
    primaryAccreditor: "",
    cmsCertificationNumber: "",
    facilityAdministrator: "",
    medicalDirector: "",
    safetyOfficer: "",
    timeZone: "",
    facilityAddress: "",
  });

  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Enter a facility name before continuing.");
      return;
    }

    if (!form.facilityType) {
      setError("Select a facility type before continuing.");
      return;
    }

    setError("");
    setIsSaving(true);

    try {
      const result = await saveFacility(form);

      if (!result.success) {
        setError(result.error ?? "The facility could not be saved.");
        setIsSaving(false);
        return;
      }

      router.push("/platform/users");
      router.refresh();
    } catch (error) {
      console.error("Facility save failed:", error);
      setError("The facility could not be saved. Please try again.");
      setIsSaving(false);
    }
  }

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
          Step 2 of 4
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Add Your First Facility
        </h1>

        <p className="mt-3 text-lg text-slate-500">
          Configure the location, leadership, accreditation, and regulatory
          details for your first healthcare facility.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Facility Name
            </label>

            <input
              type="text"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Indiana Surgery Center"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Facility Type
            </label>

            <select
              value={form.facilityType}
              onChange={(event) =>
                updateField("facilityType", event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            >
              <option value="">Select facility type</option>
              <option value="Ambulatory Surgery Center">
                Ambulatory Surgery Center
              </option>
              <option value="Hospital">Hospital</option>
              <option value="Hospital Outpatient Department">
                Hospital Outpatient Department
              </option>
              <option value="Physician Practice">
                Physician Practice
              </option>
              <option value="Clinic">Clinic</option>
              <option value="Other Healthcare Facility">
                Other Healthcare Facility
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Primary Accreditor
            </label>

            <select
              value={form.primaryAccreditor}
              onChange={(event) =>
                updateField("primaryAccreditor", event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            >
              <option value="">Select primary accreditor</option>
              <option value="AAAHC">AAAHC</option>
              <option value="ACHC">ACHC</option>
              <option value="The Joint Commission">
                The Joint Commission
              </option>
              <option value="State Only">State Only</option>
              <option value="Not Yet Selected">
                Not Yet Selected
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              CMS Certification Number
            </label>

            <input
              type="text"
              value={form.cmsCertificationNumber}
              onChange={(event) =>
                updateField(
                  "cmsCertificationNumber",
                  event.target.value,
                )
              }
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
              value={form.facilityAdministrator}
              onChange={(event) =>
                updateField("facilityAdministrator", event.target.value)
              }
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
              value={form.medicalDirector}
              onChange={(event) =>
                updateField("medicalDirector", event.target.value)
              }
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
              value={form.safetyOfficer}
              onChange={(event) =>
                updateField("safetyOfficer", event.target.value)
              }
              placeholder="Full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Time Zone
            </label>

            <select
              value={form.timeZone}
              onChange={(event) =>
                updateField("timeZone", event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            >
              <option value="">Select time zone</option>
              <option value="Eastern Time">Eastern Time</option>
              <option value="Central Time">Central Time</option>
              <option value="Mountain Time">Mountain Time</option>
              <option value="Pacific Time">Pacific Time</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold">
              Facility Address
            </label>

            <input
              type="text"
              value={form.facilityAddress}
              onChange={(event) =>
                updateField("facilityAddress", event.target.value)
              }
              placeholder="123 Main Street"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:outline-none"
            />
          </div>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {error}
          </div>
        )}

        <div className="mt-10 flex justify-end gap-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push("/platform/organization")}
          >
            Back
          </Button>

          <Button type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Facility →"}
          </Button>
        </div>
      </form>
    </main>
  );
}
