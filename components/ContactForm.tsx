"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import T from "./T";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.18)",
  background: "rgba(255,255,255,.06)",
  color: "#FFFFFF",
  fontFamily: "inherit",
  fontSize: ".9rem",
  outline: "none",
};

const SERVICE_OPTIONS = ["form.service.warehousing", "form.service.road", "form.service.airocean", "form.service.other"] as const;

export default function ContactForm({ toEmail }: { toEmail: string }) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<(typeof SERVICE_OPTIONS)[number]>(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${t("form.service")}: ${t(service)}${company ? " — " + company : ""}`;
    const bodyLines = [
      `${t("form.name")}: ${name}`,
      `${t("form.company")}: ${company}`,
      `${t("form.email")}: ${email}`,
      `${t("form.phone")}: ${phone}`,
      `${t("form.service")}: ${t(service)}`,
      "",
      message,
    ];
    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
      <div className="grid-2" style={{ gap: 12 }}>
        <input required placeholder={t("form.name")} value={name} onChange={(e) => setName(e.target.value)} style={fieldStyle} />
        <input placeholder={t("form.company")} value={company} onChange={(e) => setCompany(e.target.value)} style={fieldStyle} />
      </div>
      <div className="grid-2" style={{ gap: 12 }}>
        <input required type="email" placeholder={t("form.email")} value={email} onChange={(e) => setEmail(e.target.value)} style={fieldStyle} />
        <input placeholder={t("form.phone")} value={phone} onChange={(e) => setPhone(e.target.value)} style={fieldStyle} />
      </div>
      <select
        value={service}
        onChange={(e) => setService(e.target.value as (typeof SERVICE_OPTIONS)[number])}
        style={{ ...fieldStyle, colorScheme: "dark" as const }}
      >
        {SERVICE_OPTIONS.map((k) => (
          <option key={k} value={k} style={{ color: "#000" }}>
            {t(k)}
          </option>
        ))}
      </select>
      <textarea
        required
        placeholder={t("form.message")}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ ...fieldStyle, resize: "vertical" as const }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginTop: 4 }}>
        <button type="submit" className="btn btn-primary">
          <T k="form.submit" />
        </button>
        <T as="span" k="form.note" style={{ fontSize: ".76rem", color: "rgba(255,255,255,.5)" }} />
      </div>
    </form>
  );
}
