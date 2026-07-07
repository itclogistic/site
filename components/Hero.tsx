"use client";

import { useRef } from "react";
import T from "./T";
import PhotoHero from "./PhotoHero";
import { useTourProgress, tent } from "@/hooks/useTourProgress";

const cardBase: React.CSSProperties = {
  position: "absolute",
  left: 28,
  bottom: 96,
  zIndex: 10,
  maxWidth: 400,
  borderRadius: 22,
  padding: "28px 28px 24px",
  transition: "opacity .25s linear",
};

export default function Hero() {
  const tourRef = useRef<HTMLDivElement>(null);
  const p = useTourProgress(tourRef as React.RefObject<HTMLElement>);

  const fade = Math.max(0, 1 - p / 0.07);
  const portOpacity = tent(p, 0.3, 0.46, 0.72);
  const cityOpacity = Math.max(0, Math.min(1, (p - 0.88) / 0.09));

  return (
    <div id="tour" data-screen-label="Hero tur foto" ref={tourRef} style={{ position: "relative", height: "420vh" }}>
      <header style={{ position: "sticky", top: 0, height: "100vh", minHeight: 640, overflow: "hidden", background: "#07191E" }}>
        <PhotoHero progress={p} />

        <div
          id="heroCard"
          className="hero-card"
          style={{
            ...cardBase,
            background: "rgba(255,255,255,.86)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,.7)",
            boxShadow: "0 24px 60px rgba(20,32,26,.14)",
            opacity: fade,
            pointerEvents: fade < 0.05 ? "none" : undefined,
          }}
        >
          <T
            as="h1"
            k="hero.title"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "1.55rem",
              fontWeight: 600,
              lineHeight: 1.28,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
            }}
          />
          <T
            as="p"
            k="hero.lead"
            style={{ marginTop: 10, fontSize: ".9rem", lineHeight: 1.6, color: "var(--muted)" }}
          />
          <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
            <a href="/#contact" className="btn btn-primary">
              <T k="hero.cta1" />
            </a>
            <a href="/#services" className="btn btn-secondary">
              <T k="hero.cta2" />
            </a>
          </div>
        </div>

        <div
          id="heroChips"
          className="hero-extra"
          style={{ position: "absolute", left: 28, bottom: 28, zIndex: 10, gap: 10, flexWrap: "wrap", transition: "opacity .25s linear", opacity: fade, pointerEvents: fade < 0.05 ? "none" : undefined }}
        >
          <Chip>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)" }} />
            ISO 9001 &amp; 14001
          </Chip>
          <Chip>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)" }} />
            <T k="chips.iata" />
          </Chip>
          <Chip>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)" }} />
            <T k="chips.wh" />
          </Chip>
        </div>

        <div
          id="scrollHint"
          className="hero-extra"
          style={{
            position: "absolute",
            right: 32,
            bottom: 28,
            zIndex: 10,
            alignItems: "center",
            gap: 10,
            fontSize: ".78rem",
            fontWeight: 600,
            color: "var(--muted)",
            transition: "opacity .25s linear",
            opacity: fade,
            pointerEvents: fade < 0.05 ? "none" : undefined,
          }}
        >
          <span aria-hidden="true" style={{ position: "relative", width: 26, height: 40, border: "2px solid var(--muted)", borderRadius: 14, display: "block" }}>
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: 7,
                width: 4,
                height: 8,
                marginLeft: -2,
                borderRadius: 3,
                background: "var(--green)",
                animation: "wheelHint 1.8s ease-in-out infinite",
                display: "block",
              }}
            />
          </span>
          <T k="hero.scroll" />
        </div>

        <StageCard opacity={portOpacity} eyebrowKey="stagecap.port.eyebrow" titleKey="stagecap.port.title" textKey="stagecap.port.text" />
        <StageCard opacity={cityOpacity} eyebrowKey="stagecap.city.eyebrow" titleKey="stagecap.city.title" textKey="stagecap.city.text" />
      </header>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        background: "rgba(255,255,255,.85)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0,0,0,.06)",
        borderRadius: 999,
        padding: "8px 16px",
        fontSize: ".76rem",
        fontWeight: 600,
        color: "var(--muted)",
      }}
    >
      {children}
    </span>
  );
}

function StageCard({
  opacity,
  eyebrowKey,
  titleKey,
  textKey,
}: {
  opacity: number;
  eyebrowKey: "stagecap.port.eyebrow" | "stagecap.city.eyebrow";
  titleKey: "stagecap.port.title" | "stagecap.city.title";
  textKey: "stagecap.port.text" | "stagecap.city.text";
}) {
  return (
    <div
      className="hero-card"
      style={{
        ...cardBase,
        opacity,
        pointerEvents: opacity < 0.05 ? "none" : undefined,
        background: "rgba(7,25,30,.76)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 24px 60px rgba(7,25,30,.4)",
        color: "#FFFFFF",
      }}
    >
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".72rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--mint)" }}>
        <span style={{ width: 26, height: 2, background: "var(--mint)", display: "block" }} />
        <T k={eyebrowKey} />
      </div>
      <T
        as="h2"
        k={titleKey}
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.4rem", fontWeight: 600, lineHeight: 1.28, letterSpacing: "-0.02em", marginTop: 10, color: "#FFFFFF" }}
      />
      <T as="p" k={textKey} style={{ marginTop: 10, fontSize: ".9rem", lineHeight: 1.6, color: "rgba(255,255,255,.72)" }} />
    </div>
  );
}
