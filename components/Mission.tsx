"use client";

import Reveal from "./Reveal";
import Counter from "./Counter";
import T from "./T";

export default function Mission() {
  return (
    <section
      id="facility"
      data-screen-label="Misiune"
      className="split-cols"
      style={{
        padding: "120px 28px",
        maxWidth: 1180,
        margin: "0 auto",
        gap: 64,
        alignItems: "center",
      }}
    >
      <Reveal>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".75rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--green)", marginBottom: 22 }}>
          <span style={{ width: 26, height: 2, background: "var(--green)", display: "block" }} />
          <T k="mission.eyebrow" />
        </div>
        <T
          as="h2"
          k="mission.title"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(2.1rem,4.6vw,3.4rem)", fontWeight: 500, lineHeight: 1.14, letterSpacing: "-0.02em", color: "var(--muted)" }}
        />
        <T as="p" k="mission.lead" style={{ marginTop: 22, fontSize: "1rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "46ch" }} />
        <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
          <a href="/#services" className="btn btn-primary">
            <T k="mission.cta1" />
          </a>
        </div>
      </Reveal>

      <Reveal style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div className="card" style={{ padding: "26px 28px" }}>
          <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(2rem,3.4vw,2.7rem)", fontWeight: 700, lineHeight: 1, color: "var(--green)" }}>
            <Counter target={28500} format="ro" />
            <span style={{ fontSize: ".55em", fontWeight: 600, color: "var(--ink)" }}> m²</span>
          </div>
          <div style={{ marginTop: 8, fontSize: ".86rem", lineHeight: 1.5, color: "var(--muted)" }}>
            <T k="stats.1" />
          </div>
        </div>
        <div className="grid-2" style={{ gap: 14 }}>
          <div className="card" style={{ padding: "26px 28px" }}>
            <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(2rem,3.4vw,2.7rem)", fontWeight: 700, lineHeight: 1, color: "var(--green)" }}>
              <Counter target={5} />
            </div>
            <div style={{ marginTop: 8, fontSize: ".86rem", lineHeight: 1.5, color: "var(--muted)" }}>
              <T k="stats.2" />
            </div>
          </div>
          <div className="card" style={{ padding: "26px 28px" }}>
            <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(2rem,3.4vw,2.7rem)", fontWeight: 700, lineHeight: 1, color: "var(--green)" }}>
              <Counter target={24} />
              <span style={{ fontSize: ".55em", fontWeight: 600, color: "var(--ink)" }}>/7</span>
            </div>
            <div style={{ marginTop: 8, fontSize: ".86rem", lineHeight: 1.5, color: "var(--muted)" }}>
              <T k="stats.4" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
