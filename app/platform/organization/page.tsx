"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const accreditationOptions = [
  "CMS",
  "AAAHC",
  "The Joint Commission",
  "ACHC",
  "State Licensure",
];

type OrganizationForm = {
  organizationName: string;
  legalName: string;
  dba: string;
  organizationType: string;
  primaryContact: string;
  email: string;
  phone: string;
  website: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  accreditations: string[];
};

const initialForm: OrganizationForm = {
  organizationName: "",
  legalName: "",
  dba: "",
  organizationType: "",
  primaryContact: "",
  email: "",
  phone: "",
  website: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  accreditations: [],
};

const inputClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10";

export default function OrganizationPage() {
  const router = useRouter();

  const [form, setForm] = useState<OrganizationForm>(initialForm);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function updateField(
    field: keyof OrganizationForm,
    value: string | string[],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function toggleAccreditation(accreditation: string) {
    const isSelected = form.accreditations.includes(accreditation);

    const updatedAccreditations = isSelected
      ? form.accreditations.filter((item) => item !== accreditation)
      : [...form.accreditations, accreditation];

    updateField("accreditations", updatedAccreditations);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.organizationName.trim()) {
      setError("Enter an organization name before continuing.");
      return;
    }

    if (!form.organizationType) {
      setError("Select an organization type before continuing.");
      return;
    }

    if (!form.primaryContact.trim()) {
      setError("Enter the primary contact for this organization.");
      return;
    }

    if (!form.email.trim()) {
      setError("Enter a primary contact email address.");
      return;
    }

    setIsSaving(true);

    router.push("/platform/facilities");
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-10 lg:py-10">
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            Organization setup
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Create your organization
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg">
            Establish the organization that will own facilities, users,
            policies, evidence, survey data, and compliance records.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
            1
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Setup progress
            </p>
            <p className="text-sm font-semibold text-slate-800">
              Step 1 of 4
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
          >
            {error}
          </div>
        )}

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <h2 className="text-xl font-bold text-slate-950">
              Organization identity
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Enter the legal and operating information used throughout the
              platform.
            </p>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div>
              <label
                htmlFor="organizationName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Organization name
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input
                id="organizationName"
                type="text"
                value={form.organizationName}
                onChange={(event) =>
                  updateField("organizationName", event.target.value)
                }
                placeholder="Humble Health Solutions"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="legalName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Legal name
              </label>

              <input
                id="legalName"
                type="text"
                value={form.legalName}
                onChange={(event) =>
                  updateField("legalName", event.target.value)
                }
                placeholder="Humble Health Solutions, LLC"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="dba"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                DBA
              </label>

              <input
                id="dba"
                type="text"
                value={form.dba}
                onChange={(event) => updateField("dba", event.target.value)}
                placeholder="Doing business as"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="organizationType"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Organization type
                <span className="ml-1 text-red-500">*</span>
              </label>

              <select
                id="organizationType"
                value={form.organizationType}
                onChange={(event) =>
                  updateField("organizationType", event.target.value)
                }
                className={inputClassName}
              >
                <option value="">Select an organization type</option>
                <option value="ASC Company">
                  Ambulatory Surgery Center Company
                </option>
                <option value="Hospital System">Hospital System</option>
                <option value="Hospital">Hospital</option>
                <option value="Physician Practice">
                  Physician Practice
                </option>
                <option value="Consulting Company">
                  Consulting Company
                </option>
                <option value="Other">Other Healthcare Organization</option>
              </select>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <h2 className="text-xl font-bold text-slate-950">
              Primary contact
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Identify the primary administrative contact for the
              organization.
            </p>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div>
              <label
                htmlFor="primaryContact"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Primary contact
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input
                id="primaryContact"
                type="text"
                value={form.primaryContact}
                onChange={(event) =>
                  updateField("primaryContact", event.target.value)
                }
                placeholder="Dean Humble"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email address
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(event) =>
                  updateField("email", event.target.value)
                }
                placeholder="name@company.com"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone number
              </label>

              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  updateField("phone", event.target.value)
                }
                placeholder="(555) 555-5555"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Website
              </label>

              <input
                id="website"
                type="url"
                value={form.website}
                onChange={(event) =>
                  updateField("website", event.target.value)
                }
                placeholder="https://example.com"
                className={inputClassName}
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <h2 className="text-xl font-bold text-slate-950">
              Business address
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Add the organization&apos;s primary administrative address.
            </p>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div className="md:col-span-2">
              <label
                htmlFor="addressLine1"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Address line 1
              </label>

              <input
                id="addressLine1"
                type="text"
                value={form.addressLine1}
                onChange={(event) =>
                  updateField("addressLine1", event.target.value)
                }
                placeholder="123 Main Street"
                className={inputClassName}
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="addressLine2"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Address line 2
              </label>

              <input
                id="addressLine2"
                type="text"
                value={form.addressLine2}
                onChange={(event) =>
                  updateField("addressLine2", event.target.value)
                }
                placeholder="Suite, floor, or building"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                City
              </label>

              <input
                id="city"
                type="text"
                value={form.city}
                onChange={(event) => updateField("city", event.target.value)}
                placeholder="Indianapolis"
                className={inputClassName}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="state"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  State
                </label>

                <input
                  id="state"
                  type="text"
                  value={form.state}
                  onChange={(event) =>
                    updateField("state", event.target.value)
                  }
                  placeholder="IN"
                  maxLength={2}
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  ZIP code
                </label>

                <input
                  id="postalCode"
                  type="text"
                  value={form.postalCode}
                  onChange={(event) =>
                    updateField("postalCode", event.target.value)
                  }
                  placeholder="46204"
                  className={inputClassName}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <h2 className="text-xl font-bold text-slate-950">
              Accreditation and oversight
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Select every accreditation or regulatory program that may apply
              to this organization.
            </p>
          </div>

          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
            {accreditationOptions.map((accreditation) => {
              const isSelected =
                form.accreditations.includes(accreditation);

              return (
                <label
                  key={accreditation}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-4 transition ${
                    isSelected
                      ? "border-teal-600 bg-teal-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleAccreditation(accreditation)}
                    className="h-4 w-4 rounded border-slate-300 accent-teal-600"
                  />

                  <span
                    className={`text-sm font-semibold ${
                      isSelected ? "text-teal-800" : "text-slate-700"
                    }`}
                  >
                    {accreditation}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        <div className="sticky bottom-4 z-10 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Required fields are marked with an asterisk.
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => router.push("/platform")}
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSaving}
              className="rounded-xl bg-teal-600 px-7 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "Saving..." : "Save & Continue →"}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}