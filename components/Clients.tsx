"use client";

import Reveal from "./Reveal";
import T from "./T";

const ROW_A = ["AUMOVIO", "Continental", "Miele", "LG", "P&G", "ZF", "GE HealthCare", "Hutchinson", "DS Smith", "Stabilus"];
const ROW_B = ["Celestica", "BCE", "Legrand", "Losán România", "ASSA ABLOY", "Sostmeier", "Frigoglass", "Joyson Safety Systems", "Zoppas Industries"];

function Crate({ name }: { name: string }) {
  return (
    <span
      style={{
        position: "relative",
        flex: "0 0 auto",
        padding: "22px 24px 16px",
        background: "linear-gradient(180deg,#EBDABD,#DEC8A3)",
        borderRadius: 3,
        fontFamily: "var(--font-space-grotesk), sans-serif",
        fontWeight: 700,
        fontSize: "1.02rem",
        color: "#57462C",
        whiteSpace: "nowrap",
        boxShadow: "inset 0 0 0 1px rgba(87,70,44,.14)",
      }}
    >
      <span style={{ position: "absolute", left: 0, right: 0, top: 6, height: 9, background: "var(--green)", opacity: 0.85 }} />
      {name}
    </span>
  );
}

function Belt({ names, duration, reverse }: { names: string[]; duration: number; reverse?: boolean }) {
  const doubled = [...names, ...names];
  return (
    <>
      <div style={{ overflow: "hidden", paddingTop: 18 }}>
        <div
          className="anim-belt"
          style={{
            display: "flex",
            gap: 30,
            width: "max-content",
            animation: `beltMove ${duration}s linear infinite${reverse ? " reverse" : ""}`,
          }}
        >
          {doubled.map((n, i) => (
            <Crate key={n + i} name={n} />
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          height: 16,
          marginTop: 6,
          background: "radial-gradient(circle at 8px 8px,#CBC7BB 5.5px,transparent 6.5px)",
          backgroundSize: "24px 16px",
          backgroundRepeat: "repeat-x",
        }}
      />
    </>
  );
}

export default function Clients({ beltSpeed = 60 }: { beltSpeed?: number }) {
  return (
    <section id="clients" data-screen-label="Clienți" style={{ background: "var(--dark)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "90px 28px", textAlign: "center" }}>
        <Reveal style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".75rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--mint)", marginBottom: 18, justifyContent: "center" }}>
          <span style={{ width: 26, height: 2, background: "var(--mint)", display: "block" }} />
          <T k="clients.eyebrow" />
        </Reveal>
        <Reveal>
          <T
            as="h2"
            k="clients.title"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#FFFFFF" }}
          />
        </Reveal>

        <Reveal style={{ marginTop: 48 }}>
          <Belt names={ROW_A} duration={beltSpeed} />
          <Belt names={ROW_B} duration={beltSpeed * 1.2} reverse />
        </Reveal>

        <div className="grid-3" style={{ gap: 18, marginTop: 64, textAlign: "left" }}>
          {(
            [
              { quoteKey: "testimonials.1.quote", roleKey: "testimonials.1.role" },
              { quoteKey: "testimonials.2.quote", roleKey: "testimonials.2.role" },
              { quoteKey: "testimonials.3.quote", roleKey: "testimonials.3.role" },
            ] as const
          ).map((t) => (
            <Reveal
              key={t.quoteKey}
              style={{ border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: "26px 24px", background: "rgba(255,255,255,.04)" }}
            >
              <div style={{ fontSize: "1.6rem", lineHeight: 1, color: "var(--mint)", marginBottom: 10, fontFamily: "var(--font-space-grotesk), sans-serif" }}>&ldquo;</div>
              <T as="p" k={t.quoteKey} style={{ fontSize: ".92rem", lineHeight: 1.65, color: "rgba(255,255,255,.85)" }} />
              <T as="p" k={t.roleKey} style={{ marginTop: 16, fontSize: ".78rem", fontWeight: 600, color: "rgba(255,255,255,.5)" }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
