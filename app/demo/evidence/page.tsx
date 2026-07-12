"use client";

import DemoShell from "@/components/dashboard/DemoShell";
import {
  ChangeEvent,
  DragEvent,
  ReactNode,
  useRef,
  useState,
} from "react";

type EvidenceItem = {
  id: number;
  fileName: string;
  documentType: string;
  facility: string;
  standard: string;
  expirationDate: string;
  status: "Mapped" | "Needs Review";
};

const sampleEvidence: EvidenceItem[] = [
  {
    id: 1,
    fileName: "Annual Fire Drill Report.pdf",
    documentType: "Life Safety",
    facility: "North Surgery Center",
    standard: "NFPA 101 / CMS",
    expirationDate: "2027-01-15",
    status: "Mapped",
  },
  {
    id: 2,
    fileName: "Infection Control Plan.docx",
    documentType: "Policy",
    facility: "Central ASC",
    standard: "AAAHC 2.I",
    expirationDate: "2026-11-30",
    status: "Mapped",
  },
  {
    id: 3,
    fileName: "Medical Gas Inspection.pdf",
    documentType: "Inspection",
    facility: "West Hospital",
    standard: "NFPA 99",
    expirationDate: "2026-09-01",
    status: "Needs Review",
  },
];

export default function EvidencePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [evidence, setEvidence] =
    useState<EvidenceItem[]>(sampleEvidence);

  function addFiles(files: FileList | null) {
    if (!files?.length) return;

    const newItems: EvidenceItem[] = Array.from(files).map(
      (file, index) => ({
        id: Date.now() + index,
        fileName: file.name,
        documentType: "AI analyzing...",
        facility: "Unassigned",
        standard: "Mapping in progress",
        expirationDate: "Not detected",
        status: "Needs Review",
      }),
    );

    setEvidence((current) => [...newItems, ...current]);

    setTimeout(() => {
      setEvidence((current) =>
        current.map((item) =>
          newItems.some((newItem) => newItem.id === item.id)
            ? {
                ...item,
                documentType: "Compliance Evidence",
                standard: "Suggested mapping available",
              }
            : item,
        ),
      );
    }, 1400);
  }

  function handleFileChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    addFiles(event.target.files);
    event.target.value = "";
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  }

  function removeEvidence(id: number) {
    setEvidence((current) =>
      current.filter((item) => item.id !== id),
    );
  }

  return (
    <DemoShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              Evidence Management
            </p>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Evidence Upload Center
            </h1>

            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
              Upload compliance evidence once. HHS organizes the
              file, suggests applicable standards, and identifies
              items requiring review.
            </p>
          </div>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-teal-800"
          >
            Add Evidence
          </button>
        </div>

        <section className="mb-8 grid gap-4 md:grid-cols-4">
          <StatCard
            label="Evidence Files"
            value={evidence.length.toString()}
          />

          <StatCard
            label="Automatically Mapped"
            value={evidence
              .filter((item) => item.status === "Mapped")
              .length.toString()}
          />

          <StatCard
            label="Needs Review"
            value={evidence
              .filter((item) => item.status === "Needs Review")
              .length.toString()}
          />

          <StatCard label="Expiring Soon" value="2" />
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
          />

          <div
            onDragEnter={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`rounded-2xl border-2 border-dashed px-6 py-12 text-center transition ${
              isDragging
                ? "border-teal-600 bg-teal-50"
                : "border-slate-300 bg-slate-50"
            }`}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-2xl">
              ↑
            </div>

            <h2 className="text-xl font-bold">
              Drag and drop evidence here
            </h2>

            <p className="mt-2 text-slate-600">
              Upload policies, inspection reports, competencies,
              meeting minutes, photos, and other survey evidence.
            </p>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-5 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-teal-600 hover:text-teal-700"
            >
              Browse Files
            </button>

            <p className="mt-4 text-xs text-slate-500">
              PDF, Word, Excel, PNG, and JPG files are supported
              in this demo.
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-xl font-bold">
              Evidence Library
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Review suggested classifications and standard
              mappings.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <TableHeading>File</TableHeading>
                  <TableHeading>Document Type</TableHeading>
                  <TableHeading>Facility</TableHeading>
                  <TableHeading>
                    Suggested Mapping
                  </TableHeading>
                  <TableHeading>Expiration</TableHeading>
                  <TableHeading>Status</TableHeading>
                  <TableHeading>Action</TableHeading>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                {evidence.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50"
                  >
                    <TableCell>
                      <div className="max-w-xs font-semibold text-slate-900">
                        {item.fileName}
                      </div>
                    </TableCell>

                    <TableCell>
                      {item.documentType}
                    </TableCell>

                    <TableCell>{item.facility}</TableCell>

                    <TableCell>{item.standard}</TableCell>

                    <TableCell>
                      {item.expirationDate}
                    </TableCell>

                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                          item.status === "Mapped"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>

                    <TableCell>
                      <button
                        type="button"
                        onClick={() =>
                          removeEvidence(item.id)
                        }
                        className="font-semibold text-slate-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </TableCell>
                  </tr>
                ))}

                {evidence.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-slate-500"
                    >
                      No evidence files have been uploaded.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DemoShell>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function TableHeading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <th className="whitespace-nowrap px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
      {children}
    </th>
  );
}

function TableCell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
      {children}
    </td>
  );
}
