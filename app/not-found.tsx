import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import T from "@/components/T";

export default function NotFound() {
  return (
    <div style={{ fontFamily: "var(--font-archivo), system-ui, sans-serif", color: "var(--ink)", background: "#FFFFFF" }}>
      <Nav truckMotion={true} />
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "160px 28px 80px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "5rem",
            fontWeight: 700,
            color: "var(--green-tint)",
            lineHeight: 1,
          }}
        >
          <T k="notfound.eyebrow" />
        </div>
        <T
          as="h1"
          k="notfound.title"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(1.6rem,3.4vw,2.4rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--ink)", marginTop: 8, maxWidth: 560 }}
        />
        <T as="p" k="notfound.text" style={{ marginTop: 12, fontSize: "1rem", color: "var(--muted)" }} />
        <a href="/" className="btn btn-primary" style={{ marginTop: 28 }}>
          <T k="notfound.cta" />
        </a>
      </main>
      <Contact />
    </div>
  );
}
