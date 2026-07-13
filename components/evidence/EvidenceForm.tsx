"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { saveEvidence } from "@/app/platform/evidence/new/actions";

type FacilityOption = {
  id: string;
  name: string;
};

type AddEvidenceFormProps = {
  facilities?: FacilityOption[];
};

export default function AddEvidencePage({
  facilities = [],
}: AddEvidenceFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    fileName: "",
    fileType: "",
    fileSize: 0,
    category: "",
    status: "Draft",
    ownerName: "",
    expirationDate: "",
    facilityId: "",
  });

  const [selectedFileLabel, setSelectedFileLabel] =
    useState("No file selected");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function updateField(
    field: keyof typeof form,
    value: string | number,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setSelectedFile(file ?? null);
    if (!file) {
      setSelectedFileLabel("No file selected");
      updateField("fileName", "");
      updateField("fileType", "");
      updateField("fileSize", 0);
      return;
    }

    setSelectedFileLabel(file.name);
    setForm((current) => ({
      ...current,
      fileName: file.name,
      fileType: file.type || "application/octet-stream",
      fileSize: file.size,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.title.trim()) {
      setError("Enter an evidence title before saving.");
      return;
    }

    if (!selectedFile) {
      setError("Choose a file before saving.");
      return;
    }

    setError("");
    setIsSaving(true);

    try {
      const formData = new FormData();

      formData.append("file", selectedFile);
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("status", form.status);
      formData.append("ownerName", form.ownerName);
      formData.append("expirationDate", form.expirationDate);
      formData.append("facilityId", form.facilityId);

      const result = await saveEvidence(formData);

      if (!result.success) {
        setError(
          result.error ?? "The evidence could not be saved.",
        );
        setIsSaving(false);
        return;
      }

      router.push("/platform/evidence");
      router.refresh();
    } catch (error) {
      console.error("Evidence upload failed:", error);
      setError("The evidence could not be uploaded.");
      setIsSaving(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-10">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
          Evidence Center
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
          Add evidence
        </h1>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-500">
          Add a compliance record, assign ownership, connect it to a
          facility, and prepare it for survey review.
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
              Evidence file
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Choose the document or record that supports compliance.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <label className="block cursor-pointer rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center transition hover:border-teal-500 hover:bg-teal-50/40">
              <input
                type="file"
                onChange={handleFileChange}
                className="sr-only"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png,.webp"
              />

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-2xl text-teal-700">
                ↑
              </div>

              <p className="mt-4 text-lg font-bold text-slate-950">
                Choose a file
              </p>

              <p className="mt-2 text-sm text-slate-500">
                PDF, Word, Excel, CSV, JPG, PNG, or WebP
              </p>

              <p className="mt-4 text-sm font-semibold text-teal-700">
                {selectedFileLabel}
              </p>
            </label>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <h2 className="text-xl font-bold text-slate-950">
              Evidence details
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Add the metadata used to organize and track this record.
            </p>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Evidence title
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input
                type="text"
                value={form.title}
                onChange={(event) =>
                  updateField("title", event.target.value)
                }
                placeholder="Quarterly Fire Drill Report"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>

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
                <option value="Policy">Policy</option>
                <option value="Inspection">Inspection</option>
                <option value="Fire Safety">Fire Safety</option>
                <option value="Life Safety">Life Safety</option>
                <option value="Emergency Management">
                  Emergency Management
                </option>
                <option value="Infection Prevention">
                  Infection Prevention
                </option>
                <option value="Competency">Competency</option>
                <option value="Meeting Minutes">Meeting Minutes</option>
                <option value="Training">Training</option>
                <option value="Photo Evidence">Photo Evidence</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Facility
              </label>

              <select
                value={form.facilityId}
                onChange={(event) =>
                  updateField("facilityId", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              >
                <option value="">Organization-wide</option>

                {facilities.map((facility) => (
                  <option key={facility.id} value={facility.id}>
                    {facility.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Owner
              </label>

              <input
                type="text"
                value={form.ownerName}
                onChange={(event) =>
                  updateField("ownerName", event.target.value)
                }
                placeholder="Dean Humble"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
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
                <option value="Draft">Draft</option>
                <option value="Pending">Pending Review</option>
                <option value="Verified">Verified</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Expiration date
              </label>

              <input
                type="date"
                value={form.expirationDate}
                onChange={(event) =>
                  updateField("expirationDate", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description
              </label>

              <textarea
                value={form.description}
                onChange={(event) =>
                  updateField("description", event.target.value)
                }
                placeholder="Describe what this evidence demonstrates and how it supports compliance."
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
              />
            </div>
          </div>
        </section>

        <div className="sticky bottom-4 z-10 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            This step saves the evidence record and file metadata.
          </p>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => router.push("/platform/evidence")}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Evidence →"}
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
}
