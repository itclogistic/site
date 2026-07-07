"use client";

import { Fragment } from "react";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: ".82rem", marginBottom: 22 }}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <Fragment key={i}>
            {item.href && !last ? (
              <a href={item.href} style={{ color: "var(--green)", textDecoration: "none", fontWeight: 500 }}>
                {item.label}
              </a>
            ) : (
              <span style={{ color: "var(--muted)", fontWeight: 500 }}>{item.label}</span>
            )}
            {!last && <span style={{ margin: "0 8px", color: "var(--border)" }}>→</span>}
          </Fragment>
        );
      })}
    </nav>
  );
}
