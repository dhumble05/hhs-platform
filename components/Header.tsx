import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <div className="flex items-center gap-4">

          <Image
            src="/hhs-logo.png"
            alt="Humble Health Solutions"
            width={64}
            height={64}
            priority
          />

          <div>
          <h1 className="text-2xl font-bold">
  <span className="text-slate-900">Humble </span>
  <span className="text-teal-700">Health </span>
  <span className="text-slate-900">Solutions</span>
</h1>

            <p className="text-sm text-slate-500">
              Enterprise Compliance Platform
            </p>
          </div>

        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a href="#">Platform</a>
          <a href="#">Solutions</a>
          <a href="#">Modules</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">About</a>
        </nav>

        <div className="flex items-center gap-4">

          <button className="font-semibold text-slate-700 hover:text-teal-700">
            Login
          </button>

<a
  href="/demo"
  className="rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white hover:bg-teal-800"
>
  Request Demo
</a>

        </div>

      </div>
    </header>
  );
}