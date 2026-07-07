"use client";

import { useState } from "react";
import type { Person } from "@/lib/offices";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable — link itself still works */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copiat" : "Copiază"}
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: 2,
        marginLeft: 4,
        display: "inline-flex",
        verticalAlign: "middle",
        color: copied ? "var(--green)" : "var(--border)",
      }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, stroke: "currentColor", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, stroke: "currentColor", fill: "none", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: 16, padding: "18px 20px", background: "#FFFFFF", display: "flex", gap: 14 }}>
      <div
        aria-hidden="true"
        style={{
          flexShrink: 0,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "var(--green-tint)",
          color: "var(--green)",
          display: "grid",
          placeItems: "center",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 700,
          fontSize: ".85rem",
        }}
      >
        {initials(person.name)}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: ".92rem", color: "var(--ink)" }}>{person.name}</div>
        <div style={{ fontSize: ".8rem", color: "var(--muted)", marginBottom: person.email || person.phone || person.mobile ? 6 : 0 }}>{person.title}</div>
        {person.email && (
          <div>
            <a href={`mailto:${person.email}`} style={{ fontSize: ".78rem", color: "var(--green)", textDecoration: "none" }}>
              {person.email}
            </a>
            <CopyButton value={person.email} />
          </div>
        )}
        {person.phone && (
          <div style={{ fontSize: ".78rem", color: "var(--muted)" }}>
            Tel:{" "}
            <a href={`tel:${person.phone.replace(/[^+\d]/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>
              {person.phone}
            </a>
            <CopyButton value={person.phone} />
          </div>
        )}
        {person.mobile && (
          <div style={{ fontSize: ".78rem", color: "var(--muted)" }}>
            Mobil:{" "}
            <a href={`tel:${person.mobile.replace(/[^+\d]/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>
              {person.mobile}
            </a>
            <CopyButton value={person.mobile} />
          </div>
        )}
      </div>
    </div>
  );
}
