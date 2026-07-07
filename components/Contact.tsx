"use client";

import Reveal from "./Reveal";
import T from "./T";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <footer id="contact" data-screen-label="Contact" style={{ background: "var(--dark)", color: "#FFFFFF" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 28px 40px" }}>
        <div className="split-cols" style={{ gap: 60, alignItems: "start" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".75rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--mint)", marginBottom: 22 }}>
              <span style={{ width: 26, height: 2, background: "var(--mint)", display: "block" }} />
              <T k="contact.eyebrow" />
            </div>
            <T
              as="h2"
              k="contact.title"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.9rem,3.8vw,2.8rem)", fontWeight: 600, lineHeight: 1.16, letterSpacing: "-0.02em", color: "#FFFFFF" }}
            />
            <ContactForm toEmail="romania@itc-logistic.ro" />
          </Reveal>
          <Reveal style={{ fontSize: ".95rem", lineHeight: 2, color: "rgba(255,255,255,.75)" }}>
            ITC Logistic Romania SRL
            <br />
            Str. Bucegi nr. 3A, Brașov 500053
            <br />
            Sorin Șerbănescu <span style={{ opacity: 0.7 }}><T k="contact.md" /></span>
            <br />
            <br />
            +40 268 4060-23
            <br />
            <a href="https://www.itc-logistic.ro" target="_blank" rel="noopener" className="footer-link">
              itc-logistic.ro
            </a>
          </Reveal>
        </div>
        <div
          style={{
            marginTop: 70,
            paddingTop: 26,
            borderTop: "1px solid rgba(255,255,255,.12)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: ".78rem",
            color: "rgba(255,255,255,.5)",
          }}
        >
          <span>© 2026 ITC Logistic Romania SRL</span>
          <span>
            ISO 9001 · ISO 14001 · <T k="chips.iata" />
          </span>
        </div>
      </div>
    </footer>
  );
}
