"use client";

import Image from "next/image";
import type { Service } from "@/lib/services";
import { useLang } from "@/lib/i18n";
import Nav from "./Nav";
import Contact from "./Contact";
import T from "./T";
import Breadcrumbs from "./Breadcrumbs";

export default function ServiceDetail({ service }: { service: Service }) {
  const { t } = useLang();
  return (
    <div style={{ fontFamily: "var(--font-archivo), system-ui, sans-serif", color: "var(--ink)", background: "#FFFFFF" }}>
      <Nav truckMotion={true} />
      <main style={{ maxWidth: 1180, margin: "0 auto", padding: "150px 28px 40px" }}>
        <Breadcrumbs
          items={[
            { label: t("breadcrumb.home"), href: "/" },
            { label: t("breadcrumb.services"), href: "/#services" },
            { label: t(service.titleKey) },
          ]}
        />

        <div className="split-cols" style={{ gap: 48, alignItems: "center" }}>
          <div>
            <T
              as="h1"
              k={service.titleKey}
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--ink)" }}
            />
            <T as="p" k={service.textKey} style={{ marginTop: 16, fontSize: "1.02rem", lineHeight: 1.7, color: "var(--muted)" }} />
            <a href="/#contact" className="btn btn-primary" style={{ marginTop: 24 }}>
              <T k="hero.cta1" />
            </a>
          </div>
          <div style={{ position: "relative", width: "100%", height: 280, borderRadius: 20, overflow: "hidden" }}>
            <Image
              src={service.photo}
              alt=""
              fill
              sizes="(max-width: 1000px) 100vw, 500px"
              style={{ objectFit: "cover", objectPosition: service.photoPosition || "center" }}
            />
          </div>
        </div>

        <div className="grid-2" style={{ gap: 14, marginTop: 54, maxWidth: 780 }}>
          {service.bulletKeys.map((k) => (
            <div key={k} style={{ display: "flex", gap: 12, alignItems: "flex-start", border: "1px solid var(--border)", borderRadius: 14, padding: "16px 18px" }}>
              <span style={{ flexShrink: 0, width: 8, height: 8, borderRadius: "50%", background: "var(--green)", marginTop: 6 }} />
              <T as="span" k={k} style={{ fontSize: ".92rem", lineHeight: 1.5, color: "var(--ink)" }} />
            </div>
          ))}
        </div>
      </main>
      <Contact />
    </div>
  );
}
