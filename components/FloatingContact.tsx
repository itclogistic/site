"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import T from "./T";

const MAIN_PHONE = "+40 268 4060-23";
const MAIN_EMAIL = "romania@itc-logistic.ro";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 90, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
      {open && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: 10,
            borderRadius: 16,
            background: "#FFFFFF",
            border: "1px solid var(--border)",
            boxShadow: "0 18px 44px rgba(7,25,30,.18)",
          }}
        >
          <a
            href={`tel:${MAIN_PHONE.replace(/[^+\d]/g, "")}`}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10, textDecoration: "none", color: "var(--ink)", fontSize: ".85rem", fontWeight: 600, whiteSpace: "nowrap" }}
          >
            <PhoneIcon /> {MAIN_PHONE}
          </a>
          <a
            href={`mailto:${MAIN_EMAIL}`}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10, textDecoration: "none", color: "var(--ink)", fontSize: ".85rem", fontWeight: 600, whiteSpace: "nowrap" }}
          >
            <MailIcon /> {MAIN_EMAIL}
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t("fab.label")}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: "var(--green)",
          color: "#FFFFFF",
          display: "grid",
          placeItems: "center",
          boxShadow: "0 12px 30px rgba(0,122,61,.35)",
        }}
      >
        {open ? <CloseIcon /> : <PhoneIcon size={22} />}
      </button>
    </div>
  );
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, stroke: "currentColor", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "var(--green)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "currentColor", fill: "none", strokeWidth: 2, strokeLinecap: "round" }}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
