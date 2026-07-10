"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Executive Command Center",
    title: "See every compliance risk in one place.",
    description:
      "Monitor readiness, findings, evidence, policies, tasks, and facility performance from one executive view.",
    metrics: [
      ["Survey Readiness", "96%"],
      ["Open Findings", "12"],
      ["Expiring Items", "7"],
    ],
  },
  {
    eyebrow: "Standards & Evidence",
    title: "Connect every document to the standard it supports.",
    description:
      "Organize evidence by accreditation chapter, assign owners, identify gaps, and retrieve documentation instantly.",
    metrics: [
      ["Evidence Files", "2,518"],
      ["Standards Mapped", "412"],
      ["Missing Items", "18"],
    ],
  },
  {
    eyebrow: "Survey Readiness",
    title: "Know exactly where you stand before the surveyor arrives.",
    description:
      "Track live readiness scores by facility, chapter, and accreditor with clear visibility into outstanding risks.",
    metrics: [
      ["AAAHC", "97%"],
      ["CMS", "95%"],
      ["Joint Commission", "93%"],
    ],
  },
  {
    eyebrow: "Policies & Tasks",
    title: "Keep reviews, approvals, and follow-up work moving.",
    description:
      "Assign responsibility, manage due dates, monitor policy reviews, and close findings before they become repeat issues.",
    metrics: [
      ["Policies Due", "8"],
      ["Tasks Open", "21"],
      ["Overdue", "3"],
    ],
  },
  {
    eyebrow: "Multi-Facility Oversight",
    title: "Compare performance across every location.",
    description:
      "Give leaders one consistent view of readiness, risk, and accountability across ASCs, hospitals, and physician practices.",
    metrics: [
      ["Facilities", "12"],
      ["High Risk", "2"],
      ["On Track", "10"],
    ],
  },
];

export default function OneScreenLanding() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <main className="hhs-rotating-landing">
      <div className="hhs-fixed-message">
        <div className="hhs-eyebrow">
          Healthcare Compliance Platform
        </div>

        <h1>
          Drag. Drop.
          <span>Survey Ready.</span>
        </h1>

        <p className="hhs-main-copy">
          Upload once. HHS automatically organizes your evidence, maps it to
          every applicable accreditation standard, and keeps your organization
          continuously survey ready.
        </p>

        <div className="hhs-actions">
          <a href="#demo" className="hhs-primary-button">
            Request Demo
          </a>

          <a href="#platform" className="hhs-secondary-button">
            Explore Platform
          </a>
        </div>

        <div className="hhs-value-line">
          Stop organizing documents. Start proving compliance.
        </div>
      </div>

      <section className="hhs-rotating-panel" aria-live="polite">
        <div className="hhs-slide-card" key={current}>
          <p className="hhs-slide-eyebrow">{slide.eyebrow}</p>

          <h2>{slide.title}</h2>

          <p className="hhs-slide-description">{slide.description}</p>

          <div className="hhs-slide-metrics">
            {slide.metrics.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="hhs-slide-visual">
            <div className="hhs-visual-header">
              <span>HHS Platform</span>
              <span className="hhs-status-pill">Live</span>
            </div>

            <div className="hhs-visual-grid">
              <div className="hhs-large-card">
                <span>Readiness Overview</span>
                <strong>{slide.metrics[0][1]}</strong>

                <div className="hhs-progress-track">
                  <div className="hhs-progress-fill" />
                </div>
              </div>

              <div className="hhs-small-card">
                <span>{slide.metrics[1][0]}</span>
                <strong>{slide.metrics[1][1]}</strong>
              </div>

              <div className="hhs-small-card">
                <span>{slide.metrics[2][0]}</span>
                <strong>{slide.metrics[2][1]}</strong>
              </div>

              <div className="hhs-wide-card">
                <span>Priority Work</span>
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>

        <div className="hhs-slide-controls">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              type="button"
              aria-label={`Show ${item.eyebrow}`}
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}