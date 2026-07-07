"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import T from "./T";

export default function CookieBanner() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let seen: string | null = null;
    try {
      seen = localStorage.getItem("itc-cookie-ack");
    } catch {
      /* ignore */
    }
    if (!seen) setVisible(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem("itc-cookie-ack", "1");
    } catch {
      /* ignore */
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookie.text")}
      style={{
        position: "fixed",
        left: 20,
        right: 20,
        bottom: 20,
        zIndex: 100,
        maxWidth: 520,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
        padding: "16px 20px",
        borderRadius: 16,
        background: "rgba(7,25,30,.94)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "#FFFFFF",
        boxShadow: "0 20px 50px rgba(7,25,30,.35)",
      }}
    >
      <T as="p" k="cookie.text" style={{ fontSize: ".82rem", lineHeight: 1.5, color: "rgba(255,255,255,.85)", flex: "1 1 240px" }} />
      <button type="button" onClick={dismiss} className="btn btn-primary" style={{ flexShrink: 0 }}>
        <T k="cookie.accept" />
      </button>
    </div>
  );
}
