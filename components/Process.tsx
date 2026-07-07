"use client";

import Reveal from "./Reveal";
import T from "./T";

const STEPS = [
  { n: "01", titleKey: "process.1.title" as const, textKey: "process.1.text" as const },
  { n: "02", titleKey: "process.2.title" as const, textKey: "process.2.text" as const },
  { n: "03", titleKey: "process.3.title" as const, textKey: "process.3.text" as const },
  { n: "04", titleKey: "process.4.title" as const, textKey: "process.4.text" as const },
];

export default function Process() {
  return (
    <section data-screen-label="Cum lucrăm" style={{ padding: "0 28px 110px", maxWidth: 1180, margin: "0 auto" }}>
      <Reveal style={{ maxWidth: 640, marginBottom: 44 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".75rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--green)", marginBottom: 22 }}>
          <span style={{ width: 26, height: 2, background: "var(--green)", display: "block" }} />
          <T k="process.eyebrow" />
        </div>
        <T
          as="h2"
          k="process.title"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.9rem,3.6vw,2.7rem)", fontWeight: 600, lineHeight: 1.18, letterSpacing: "-0.02em", color: "var(--ink)" }}
        />
      </Reveal>
      <div className="grid-4" style={{ gap: 18 }}>
        {STEPS.map((s, i) => (
          <Reveal key={s.n} style={{ position: "relative", paddingTop: 8 }}>
            {i < STEPS.length - 1 && (
              <div
                aria-hidden="true"
                className="step-connector"
                style={{ position: "absolute", top: 30, left: "62%", right: "-38%", height: 1, background: "var(--border)" }}
              />
            )}
            <div
              style={{
                position: "relative",
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: "var(--ink)",
                color: "#FFFFFF",
                display: "grid",
                placeItems: "center",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: ".85rem",
                marginBottom: 18,
              }}
            >
              {s.n}
            </div>
            <T as="h3" k={s.titleKey} style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: 8, color: "var(--ink)", display: "block" }} />
            <T as="p" k={s.textKey} style={{ fontSize: ".86rem", lineHeight: 1.6, color: "var(--muted)" }} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
