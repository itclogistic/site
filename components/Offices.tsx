"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import T from "./T";
import Tag from "./Tag";
import { offices } from "@/lib/offices";

export default function Offices() {
  return (
    <section id="offices" data-screen-label="Birouri" style={{ padding: "110px 28px", maxWidth: 1180, margin: "0 auto" }}>
      <Reveal style={{ maxWidth: 640, marginBottom: 54 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".75rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--green)", marginBottom: 22 }}>
          <span style={{ width: 26, height: 2, background: "var(--green)", display: "block" }} />
          <T k="offices.eyebrow" />
        </div>
        <T
          as="h2"
          k="offices.title"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.9rem,3.6vw,2.7rem)", fontWeight: 600, lineHeight: 1.18, letterSpacing: "-0.02em", color: "var(--ink)" }}
        />
      </Reveal>
      <Reveal style={{ marginBottom: 32, position: "relative", width: "100%", height: "clamp(220px, 32vw, 420px)", borderRadius: 20, overflow: "hidden" }}>
        <Image
          src="/images/offices-map.jpg"
          alt="Harta rețelei ITC Logistic: Oradea, Cluj-Napoca, Timișoara, Brașov și București"
          fill
          sizes="(max-width: 1180px) 100vw, 1180px"
          style={{ objectFit: "cover" }}
        />
      </Reveal>
      <div className="grid-3" style={{ gap: 18 }}>
        {offices.map((o) => (
          <Reveal key={o.slug} className="card" style={{ padding: 0 }}>
            <a href={`/birouri/${o.slug}`} style={{ display: "block", padding: "26px 24px", textDecoration: "none", color: "inherit" }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                {o.tags.map((t) => (
                  <Tag key={t} k={t} />
                ))}
              </div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: 8, color: "var(--ink)" }}>{o.city}</h3>
              <p style={{ fontSize: ".86rem", lineHeight: 1.6, color: "var(--muted)" }}>{o.addressLines.join(", ")}</p>
              {o.isHQ && (
                <div style={{ marginTop: 12, fontSize: ".82rem", fontWeight: 600, color: "var(--ink)" }}>
                  {o.departments[0].people[0].name}
                  <T as="span" k="offices.md" style={{ display: "block", fontWeight: 500, color: "var(--muted)", fontSize: ".78rem", marginTop: 1 }} />
                </div>
              )}
              <div style={{ marginTop: 14, fontSize: ".8rem", fontWeight: 600, color: "var(--green)" }}>
                <T k="office.team" /> →
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
