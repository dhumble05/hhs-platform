import React from 'react';

export default function TopBar() {
  return (
    <header className="flex min-h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-9">
      <div>
        <p className="text-sm text-slate-500">
          Meridian Health Network
        </p>

        <h1 className="text-xl font-bold text-slate-950">
          Executive Command Center
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white"
          aria-label="Notifications"
        >
          <span className="text-xl">◔</span>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="grid h-11 w-11 place-items-center rounded-full bg-teal-700 text-sm font-bold text-white">
          DH
        </div>
      </div>
    </header>
  );
}
