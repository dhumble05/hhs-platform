import React from 'react';

export default function PlatformPreview() {
  return (
    <section className="bg-slate-950 px-8 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-400">
            HHS Command Center
          </p>
          <h2 className="mt-4 text-5xl font-bold">
            One view of every compliance risk.
          </h2>
          <p className="mt-5 max-w-3xl text-xl text-slate-300">
            Monitor survey readiness, evidence, tasks, findings, policies, and
            facility-level performance from one executive dashboard.
          </p>
        </div>

        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl lg:grid-cols-4">
          {[
            ["Survey Readiness", "96%", "text-green-400"],
            ["Open Findings", "12", "text-red-400"],
            ["Evidence Files", "2,518", "text-blue-300"],
            ["Expiring Items", "7", "text-yellow-300"],
          ].map(([label, value, color]) => (
            <div key={label as string} className="rounded-2xl bg-white p-6 text-slate-950">
              <p className="text-sm font-semibold text-slate-500">{label}</p>
              <p className={`mt-3 text-4xl font-bold ${color}`}>{value}</p>
            </div>
          ))}

          <div className="rounded-2xl bg-white p-6 text-slate-950 lg:col-span-2">
            <h3 className="font-bold">Compliance Modules</h3>
            <div className="mt-5 space-y-4">
              {[
                ["Life Safety", "98%"],
                ["Infection Prevention", "100%"],
                ["Environment of Care", "94%"],
                ["Medication Management", "82%"],
              ].map(([label, value]) => (
                <div key={label as string}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{label}</span>
                    <span className="font-bold">{value}</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div className="h-3 rounded-full bg-teal-600" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-950 lg:col-span-2">
            <h3 className="font-bold">Priority Tasks</h3>
            <div className="mt-5 space-y-3 text-sm">
              <div className="rounded-xl bg-slate-50 p-4">Fire drill documentation due</div>
              <div className="rounded-xl bg-slate-50 p-4">Annual emergency plan review</div>
              <div className="rounded-xl bg-slate-50 p-4">Medical gas inspection upload</div>
              <div className="rounded-xl bg-slate-50 p-4">Policy approval pending</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
