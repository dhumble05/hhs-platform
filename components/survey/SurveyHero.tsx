"use client";

import Image from "next/image";
import Link from "next/link";

import SurveyLiveDashboard from "@/components/survey/SurveyLiveDashboard";

export default function SurveyHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-8 text-white lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(13,148,136,0.24),_transparent_34%),radial-gradient(circle_at_85%_20%,_rgba(30,64,175,0.24),_transparent_32%),linear-gradient(180deg,_#020617_0%,_#071426_58%,_#020617_100%)]" />

      <div className="absolute left-1/2 top-0 -z-10 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Humble Health Solutions home"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white p-1.5 shadow-lg shadow-teal-950/30 transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_36px_rgba(45,212,191,0.18)]">
              <Image
                src="/hhs-logo.png"
                alt="Humble Health Solutions logo"
                fill
                priority
                sizes="56px"
                className="object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-white">
                HHS
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Humble Health Solutions
              </p>
            </div>
          </Link>

          <a
            href="mailto:dean.humble@humblehealthsolutions.com?subject=HHS%20Live%20Demo%20Request"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-white/10 hover:shadow-[0_12px_32px_rgba(8,145,178,0.12)]"
          >
            Request a Live Demo
          </a>
        </header>

        <div className="grid min-h-[760px] items-center gap-14 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <div className="mb-7 inline-flex items-center rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200 shadow-[0_10px_28px_rgba(13,148,136,0.08)] backdrop-blur-sm">
              See survey readiness in 60 seconds
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
              Drag. Drop.
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Survey Ready.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl font-medium leading-8 text-slate-200">
              Stop organizing compliance documents.
              <span className="block text-white">
                Start proving compliance.
              </span>
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
              Upload evidence once. HHS automatically organizes it, maps it to
              accreditation standards, identifies missing documentation, and
              gives leadership real-time survey readiness.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#command-center"
                className="inline-flex items-center justify-center rounded-full bg-teal-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_12px_32px_rgba(45,212,191,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-teal-300 hover:shadow-[0_16px_42px_rgba(45,212,191,0.28)]"
              >
                See HHS in Action
                <span className="ml-2" aria-hidden="true">
                  ↓
                </span>
              </a>

              <a
                href="mailto:dean.humble@humblehealthsolutions.com?subject=HHS%20Live%20Demo%20Request"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-white/10 hover:shadow-[0_12px_32px_rgba(8,145,178,0.12)]"
              >
                Request a Live Demo
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div className="rounded-xl px-1 py-1 transition duration-300 hover:-translate-y-0.5">
                <p className="text-sm font-semibold text-white">Save Time</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Eliminate manual sorting
                </p>
              </div>

              <div className="rounded-xl px-1 py-1 transition duration-300 hover:-translate-y-0.5">
                <p className="text-sm font-semibold text-white">Reduce Risk</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Surface evidence gaps
                </p>
              </div>

              <div className="rounded-xl px-1 py-1 transition duration-300 hover:-translate-y-0.5">
                <p className="text-sm font-semibold text-white">
                  Prove Compliance
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Retrieve evidence fast
                </p>
              </div>
            </div>
          </div>

          <SurveyLiveDashboard />
        </div>

        <p className="text-center text-xs uppercase tracking-[0.22em] text-slate-600">
          Every hour spent organizing compliance documents is an hour that
          could have been spent improving patient care.
        </p>
      </div>
    </section>
  );
}