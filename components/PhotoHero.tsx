"use client";

import { tent } from "@/hooks/useTourProgress";

type Stage = {
  src: string;
  opacity: number;
  /** subtle Ken Burns drift so a static photo doesn't feel like a slide */
  parallax: number;
  position?: string;
  /** "contain" for lower-res / portrait sources that would blur out under a full-bleed cover crop */
  fit?: "cover" | "contain";
};

const GRADIENT = "linear-gradient(180deg, rgba(7,25,30,.12) 0%, rgba(7,25,30,.08) 45%, rgba(7,25,30,.62) 100%)";

function Layer({ src, opacity, parallax, position, fit = "cover" }: Stage) {
  const scale = 1.06 + parallax * 0.05;
  const translate = parallax * -18;

  if (fit === "contain") {
    return (
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity, transition: "opacity .4s linear" }}>
        {/* blurred cover backdrop hides the letterbox bars around a non-matching aspect ratio */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: position || "center",
            filter: "blur(50px) brightness(.5) saturate(1.15)",
            transform: `scale(1.2) translateY(${translate}px)`,
          }}
        />
        {/* sharp, uncropped photo on top */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `${GRADIENT}, url(${src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `scale(${scale}) translateY(${translate}px)`,
          }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        transition: "opacity .4s linear",
        backgroundImage: `${GRADIENT}, url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: position || "center",
        backgroundColor: "#0E2A32",
        transform: `scale(${scale}) translateY(${translate}px)`,
        willChange: "transform, opacity",
      }}
    />
  );
}

export default function PhotoHero({ progress: p }: { progress: number }) {
  const depotOpacity = Math.max(0, Math.min(1, 1 - p / 0.35));
  const portOpacity = tent(p, 0.25, 0.5, 0.85);
  const roadOpacity = Math.max(0, Math.min(1, (p - 0.75) / 0.2));

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <Layer src="/images/hero-depot.jpg" opacity={depotOpacity} parallax={p / 0.35} />
      <Layer src="/images/hero-port.jpg" opacity={portOpacity} parallax={(p - 0.25) / 0.6} fit="contain" />
      <Layer src="/images/hero-road.jpg" opacity={roadOpacity} parallax={(p - 0.75) / 0.25} />
    </div>
  );
}
