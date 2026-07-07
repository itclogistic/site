"use client";

import { useLang } from "@/lib/i18n";
import type { Office } from "@/lib/offices";
import Nav from "./Nav";
import Contact from "./Contact";
import Tag from "./Tag";
import PersonCard from "./PersonCard";
import Breadcrumbs from "./Breadcrumbs";

const DEPT_KEY: Record<string, "dept.management" | "dept.sales" | "dept.operational" | "dept.warehouse" | "dept.financial" | "dept.sea & air"> = {
  Management: "dept.management",
  Sales: "dept.sales",
  Operational: "dept.operational",
  Warehouse: "dept.warehouse",
  Financial: "dept.financial",
  "Sea & Air": "dept.sea & air",
};

function DeptName({ name }: { name: string }) {
  const { t } = useLang();
  const key = DEPT_KEY[name];
  return <>{key ? t(key) : name}</>;
}

export default function OfficeDetail({ office }: { office: Office }) {
  const { t } = useLang();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`;

  return (
    <div style={{ fontFamily: "var(--font-archivo), system-ui, sans-serif", color: "var(--ink)", background: "#FFFFFF" }}>
      <Nav truckMotion={true} />
      <main style={{ maxWidth: 1180, margin: "0 auto", padding: "150px 28px 40px" }}>
        <Breadcrumbs
          items={[
            { label: t("breadcrumb.home"), href: "/" },
            { label: t("breadcrumb.offices"), href: "/#offices" },
            { label: office.city },
          ]}
        />

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
          {office.tags.map((t) => (
            <Tag key={t} k={t} />
          ))}
        </div>

        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2.1rem,4.6vw,3.2rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}
        >
          {office.city}
        </h1>

        <div className="grid-2" style={{ gap: 40, marginTop: 40, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: ".95rem", color: "var(--muted)", marginBottom: 4 }}>{office.companyLine}</p>
            {office.addressLines.map((line) => (
              <p key={line} style={{ fontSize: "1rem", color: "var(--ink)", lineHeight: 1.6 }}>
                {line}
              </p>
            ))}
            <div style={{ marginTop: 16, fontSize: ".92rem", color: "var(--muted)", lineHeight: 1.9 }}>
              {office.phone && <div>Tel: {office.phone}</div>}
              {office.fax && <div>Fax: {office.fax}</div>}
              <div>
                <a href={`mailto:${office.email}`} style={{ color: "var(--green)", textDecoration: "none" }}>
                  {office.email}
                </a>
              </div>
            </div>
          </div>
          <iframe
            title={`${office.city} — map`}
            src={mapSrc}
            loading="lazy"
            style={{ width: "100%", height: 260, border: 0, borderRadius: 20 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {office.departments.map((dept) => (
          <section key={dept.name} style={{ marginTop: 54 }}>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "1.3rem",
                fontWeight: 600,
                marginBottom: 18,
                color: "var(--ink)",
              }}
            >
              <DeptName name={dept.name} />
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {dept.people.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Contact />
    </div>
  );
}
