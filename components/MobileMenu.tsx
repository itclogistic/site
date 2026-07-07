"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import T from "./T";

const LINKS = [
  { href: "/#facility", key: "nav.facility" as const },
  { href: "/#services", key: "nav.services" as const },
  { href: "/#offices", key: "nav.offices" as const },
  { href: "/#contact", key: "nav.contact" as const },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  const close = () => setOpen(false);

  return (
    <div className="nav-mobile-toggle">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="Meniu"
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          border: "1px solid var(--border)",
          background: "rgba(255,255,255,.9)",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
        }}
      >
        <BurgerIcon />
      </button>

      {open && (
        <div className="mobile-menu-panel" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={close}
            aria-label="Închide meniul"
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              width: 42,
              height: 42,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,.2)",
              background: "transparent",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
          >
            <CloseIcon light />
          </button>
          {LINKS.map((l) => (
            <a key={l.key} href={l.href} className="mobile-menu-link" onClick={close}>
              <T k={l.key} />
            </a>
          ))}

          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            <button
              type="button"
              onClick={() => setLang("en")}
              style={{
                flex: 1,
                padding: "10px 0",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,.2)",
                fontWeight: 700,
                cursor: "pointer",
                background: lang === "en" ? "var(--green)" : "transparent",
                color: "#FFFFFF",
              }}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("ro")}
              style={{
                flex: 1,
                padding: "10px 0",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,.2)",
                fontWeight: 700,
                cursor: "pointer",
                background: lang === "ro" ? "var(--green)" : "transparent",
                color: "#FFFFFF",
              }}
            >
              RO
            </button>
          </div>

          <a href="/#contact" className="btn btn-primary" style={{ marginTop: 20, justifyContent: "center" }} onClick={close}>
            <T k="nav.quote" />
          </a>
        </div>
      )}
    </div>
  );
}

function BurgerIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "var(--ink)", fill: "none", strokeWidth: 2, strokeLinecap: "round" }}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function CloseIcon({ light }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: light ? "#FFFFFF" : "var(--ink)", fill: "none", strokeWidth: 2, strokeLinecap: "round" }}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
