"use client";

import T from "./T";
import TruckNav from "./TruckNav";
import MobileMenu from "./MobileMenu";
import { useLang } from "@/lib/i18n";

export default function Nav({ truckMotion }: { truckMotion: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "14px 28px",
        background: "rgba(255,255,255,.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,.05)",
      }}
    >
      <a
        href="/"
        aria-label="ITC Logistic"
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 6,
          textDecoration: "none",
          color: "var(--ink)",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 700,
          fontSize: "1.05rem",
          letterSpacing: "-0.01em",
        }}
      >
        <span>ITC</span>
        <span style={{ color: "var(--green)" }}>LOGISTIC</span>
      </a>

      <div className="nav-desktop-only">
        <TruckNav motion={truckMotion} />
      </div>

      <div className="nav-desktop-group" style={{ alignItems: "center", gap: 14 }}>
        <div
          role="group"
          aria-label="Limbă / Language"
          style={{ display: "flex", border: "1px solid var(--border)", borderRadius: 999, overflow: "hidden", background: "rgba(255,255,255,.9)" }}
        >
          <button
            type="button"
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
            style={{
              border: "none",
              cursor: "pointer",
              padding: "8px 13px",
              fontFamily: "inherit",
              fontSize: ".78rem",
              fontWeight: 700,
              letterSpacing: ".04em",
              transition: "background .2s,color .2s",
              background: lang === "en" ? "var(--green)" : "transparent",
              color: lang === "en" ? "#FFFFFF" : "var(--muted)",
            }}
          >
            EN
          </button>
          <button
            type="button"
            aria-pressed={lang === "ro"}
            onClick={() => setLang("ro")}
            style={{
              border: "none",
              cursor: "pointer",
              padding: "8px 13px",
              fontFamily: "inherit",
              fontSize: ".78rem",
              fontWeight: 700,
              letterSpacing: ".04em",
              transition: "background .2s,color .2s",
              background: lang === "ro" ? "var(--green)" : "transparent",
              color: lang === "ro" ? "#FFFFFF" : "var(--muted)",
            }}
          >
            RO
          </button>
        </div>
        <a href="/#contact" className="btn btn-primary">
          <T k="nav.quote" />
        </a>
      </div>

      <MobileMenu />
    </nav>
  );
}
