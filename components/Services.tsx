"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import T from "./T";
import { services } from "@/lib/services";

const iconProps = { viewBox: "0 0 24 24", style: { width: 22, height: 22, stroke: "#007A3D", fill: "none", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const } };

const ICONS: Record<string, React.ReactNode> = {
  "depozitare-contractuala": (
    <svg {...iconProps}>
      <path d="M3 21V9l9-5 9 5v12"></path>
      <path d="M3 21h18"></path>
      <path d="M9 21v-6h6v6"></path>
    </svg>
  ),
  "transport-rutier": (
    <svg {...iconProps}>
      <path d="M1 8h14v9H1z"></path>
      <path d="M15 11h4l4 4v2h-8"></path>
      <circle cx="6" cy="19" r="2"></circle>
      <circle cx="18" cy="19" r="2"></circle>
    </svg>
  ),
  "expeditii-aeriene-maritime": (
    <svg {...iconProps}>
      <path d="M2 16l20-6-9 9-2-5z"></path>
      <path d="M13 14l9-4"></path>
    </svg>
  ),
  "concepte-logistice-personalizate": (
    <svg {...iconProps}>
      <rect x="3" y="7" width="7" height="7" rx="1"></rect>
      <rect x="14" y="7" width="7" height="7" rx="1"></rect>
      <rect x="8.5" y="15" width="7" height="7" rx="1"></rect>
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" data-screen-label="Servicii" style={{ padding: "110px 28px", maxWidth: 1180, margin: "0 auto" }}>
      <Reveal style={{ maxWidth: 640, marginBottom: 54 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".75rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--green)", marginBottom: 22 }}>
          <span style={{ width: 26, height: 2, background: "var(--green)", display: "block" }} />
          <T k="services.eyebrow" />
        </div>
        <T
          as="h2"
          k="services.title"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.9rem,3.6vw,2.7rem)", fontWeight: 600, lineHeight: 1.18, letterSpacing: "-0.02em", color: "var(--ink)" }}
        />
      </Reveal>
      <div className="grid-2" style={{ gap: 18 }}>
        {services.map((s) => (
          <Reveal key={s.slug} className="card" style={{ padding: 0, overflow: "hidden" }}>
            <a href={`/servicii/${s.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div style={{ position: "relative", width: "100%", height: 160 }}>
                <Image
                  src={s.photo}
                  alt=""
                  fill
                  sizes="(max-width: 800px) 100vw, 560px"
                  style={{ objectFit: "cover", objectPosition: s.photoPosition || "center" }}
                />
              </div>
              <div style={{ padding: "24px 28px 30px" }}>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: "var(--green-tint)", display: "grid", placeItems: "center", marginBottom: 20 }}>
                  {ICONS[s.slug]}
                </div>
                <T as="h3" k={s.titleKey} style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.12rem", fontWeight: 600, marginBottom: 10, color: "var(--ink)", display: "block" }} />
                <T as="p" k={s.textKey} style={{ fontSize: ".9rem", lineHeight: 1.65, color: "var(--muted)" }} />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
