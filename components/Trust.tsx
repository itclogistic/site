"use client";

import Reveal from "./Reveal";
import T from "./T";

const iconProps = { viewBox: "0 0 24 24", style: { width: 26, height: 26, stroke: "#007A3D", fill: "none", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const } };

const BADGES = [
  {
    title: "ISO 9001",
    textKey: "trust.iso9001.text" as const,
    icon: (
      <svg {...iconProps}>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "ISO 14001",
    textKey: "trust.iso14001.text" as const,
    icon: (
      <svg {...iconProps}>
        <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z" />
        <path d="M12 22C7.03 22 3 17.97 3 13c4.97 0 9 4.03 9 9z" />
        <path d="M12 13V4" />
      </svg>
    ),
  },
  {
    title: "IATA",
    textKey: "trust.iata.text" as const,
    icon: (
      <svg {...iconProps}>
        <path d="M2 16l20-6-9 9-2-5z" />
        <path d="M13 14l9-4" />
      </svg>
    ),
  },
];

export default function Trust() {
  return (
    <section data-screen-label="Certificări" style={{ padding: "0 28px 110px", maxWidth: 1180, margin: "0 auto" }}>
      <Reveal style={{ maxWidth: 640, marginBottom: 44 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".75rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--green)", marginBottom: 22 }}>
          <span style={{ width: 26, height: 2, background: "var(--green)", display: "block" }} />
          <T k="trust.eyebrow" />
        </div>
        <T
          as="h2"
          k="trust.title"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.9rem,3.6vw,2.7rem)", fontWeight: 600, lineHeight: 1.18, letterSpacing: "-0.02em", color: "var(--ink)" }}
        />
      </Reveal>
      <div className="grid-3" style={{ gap: 18 }}>
        {BADGES.map((b) => (
          <Reveal key={b.title} className="card" style={{ padding: "28px 26px" }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: "var(--green-tint)", display: "grid", placeItems: "center", marginBottom: 18 }}>
              {b.icon}
            </div>
            <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: 8, color: "var(--ink)" }}>{b.title}</h3>
            <T as="p" k={b.textKey} style={{ fontSize: ".88rem", lineHeight: 1.6, color: "var(--muted)" }} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
