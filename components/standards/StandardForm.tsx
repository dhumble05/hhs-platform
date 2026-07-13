"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { saveStandard } from "@/app/platform/standards/new/actions";

export default function StandardForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    accreditor: "",
    code: "",
    title: "",
    chapter: "",
    description: "",
    requirement: "",
    version: "",
    effectiveDate: "",
    category: "",
    riskLevel: "",
    status: "Active",
    sourceUrl: "",
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

    if (!form.accreditor.trim()) {
      setError("Select or enter an accreditor before saving.");
      return;
    }

    if (!form.code.trim()) {
      setError("Enter a standard code before saving.");
      return;
    }

    if (!form.title.trim()) {
      setError("Enter a standard title before saving.");
      return;
    }

    setError("");
    setIsSaving(true);

    try {
      const result = await saveStandard(form);

      if (!result.success) {
        setError(result.error ?? "The standard could not be saved.");
        setIsSaving(false);
        return;
      }

      router.push("/platform/standards");
      router.refresh();
    } catch (error) {
      console.error("Standard save failed:", error);
      setError("The standard could not be saved. Please try again.");
      setIsSaving(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-10">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
          Compliance Intelligence
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
          Add standard
        </h1>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-500">
          Create a regulatory or accreditation requirement and prepare it for
          evidence mapping and survey-readiness tracking.
        </p>
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
              Standard identity
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Enter the source, code, and title used to identify this
              requirement.
            </p>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Accreditor or authority
                <span className="ml-1 text-red-500">*</span>
              </label>

              <select
                value={form.accreditor}
                onChange={(event) =>
                  updateField("accreditor", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              >
                <option value="">Select authority</option>
                <option value="CMS">CMS</option>
                <option value="AAAHC">AAAHC</option>
                <option value="ACHC">ACHC</option>
                <option value="The Joint Commission">
                  The Joint Commission
                </option>
                <option value="NFPA">NFPA</option>
                <option value="OSHA">OSHA</option>
                <option value="CDC">CDC</option>
                <option value="State">State</option>
                <option value="Organization">Organization</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Standard code
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input
                type="text"
                value={form.code}
                onChange={(event) =>
                  updateField("code", event.target.value)
                }
                placeholder="K211"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Standard title
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input
                type="text"
                value={form.title}
                onChange={(event) =>
                  updateField("title", event.target.value)
                }
                placeholder="Fire drills and emergency procedures"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Chapter or section
              </label>

              <input
                type="text"
                value={form.chapter}
                onChange={(event) =>
                  updateField("chapter", event.target.value)
                }
                placeholder="Life Safety"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Version
              </label>

              <input
                type="text"
                value={form.version}
                onChange={(event) =>
                  updateField("version", event.target.value)
                }
                placeholder="2026"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <h2 className="text-xl font-bold text-slate-950">
              Compliance details
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Define the requirement, risk level, status, and source details.
            </p>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Category
              </label>

              <select
                value={form.category}
                onChange={(event) =>
                  updateField("category", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              >
                <option value="">Select category</option>
                <option value="Governance">Governance</option>
                <option value="Life Safety">Life Safety</option>
                <option value="Fire Safety">Fire Safety</option>
                <option value="Emergency Management">
                  Emergency Management
                </option>
                <option value="Infection Prevention">
                  Infection Prevention
                </option>
                <option value="Medication Management">
                  Medication Management
                </option>
                <option value="Quality Improvement">
                  Quality Improvement
                </option>
                <option value="Credentialing">Credentialing</option>
                <option value="Environment of Care">
                  Environment of Care
                </option>
                <option value="Human Resources">Human Resources</option>
                <option value="Patient Rights">Patient Rights</option>
                <option value="Clinical Services">Clinical Services</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Risk level
              </label>

              <select
                value={form.riskLevel}
                onChange={(event) =>
                  updateField("riskLevel", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              >
                <option value="">Not rated</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Status
              </label>

              <select
                value={form.status}
                onChange={(event) =>
                  updateField("status", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              >
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Retired">Retired</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Effective date
              </label>

              <input
                type="date"
                value={form.effectiveDate}
                onChange={(event) =>
                  updateField("effectiveDate", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Requirement
              </label>

              <textarea
                value={form.requirement}
                onChange={(event) =>
                  updateField("requirement", event.target.value)
                }
                placeholder="Describe the exact compliance requirement."
                rows={5}
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description or implementation guidance
              </label>

              <textarea
                value={form.description}
                onChange={(event) =>
                  updateField("description", event.target.value)
                }
                placeholder="Add context, interpretation, or implementation notes."
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Source URL
              </label>

              <input
                type="url"
                value={form.sourceUrl}
                onChange={(event) =>
                  updateField("sourceUrl", event.target.value)
                }
                placeholder="https://example.org/source"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>
          </div>
        </section>

        <div className="sticky bottom-4 z-10 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            This standard will be available for evidence mapping.
          </p>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => router.push("/platform/standards")}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Standard →"}
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
}