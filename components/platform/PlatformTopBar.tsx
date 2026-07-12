import { UserButton } from "@clerk/nextjs";

export default function PlatformTopBar() {
  return (
    <header className="flex min-h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-9">
      <div>
        <p className="text-sm text-slate-500">
          Humble Health Solutions
        </p>

        <h1 className="text-xl font-bold text-slate-950">
          Enterprise Compliance Platform
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
          aria-label="Notifications"
        >
          <span className="text-xl">◔</span>

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-11 w-11",
            },
          }}
        />
      </div>
    </header>
  );
}
