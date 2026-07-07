"use client";

import T from "./T";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const WHEEL_GRADIENT =
  "conic-gradient(#10181A 0deg 55deg,#454F52 55deg 90deg,#10181A 90deg 145deg,#454F52 145deg 180deg,#10181A 180deg 235deg,#454F52 235deg 270deg,#10181A 270deg 325deg,#454F52 325deg 360deg)";

const SECTIONS = [
  {
    href: "/#facility",
    id: "facility",
    labelKey: "nav.facility" as const,
    icon: (
      <path d="M3 21V9l9-5 9 5v12M3 21h18M9 21v-6h6v6" />
    ),
  },
  {
    href: "/#services",
    id: "services",
    labelKey: "nav.services" as const,
    icon: null,
  },
  {
    href: "/#offices",
    id: "offices",
    labelKey: "nav.offices" as const,
    icon: null,
  },
  {
    href: "/#contact",
    id: "contact",
    labelKey: "nav.contact" as const,
    icon: null,
  },
];

function Icon({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 24 24",
    style: { width: 16, height: 16, stroke: "currentColor", fill: "none", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const },
  };
  if (id === "facility")
    return (
      <svg {...common}>
        <path d="M3 21V9l9-5 9 5v12"></path>
        <path d="M3 21h18"></path>
        <path d="M9 21v-6h6v6"></path>
      </svg>
    );
  if (id === "services")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1"></rect>
        <rect x="14" y="3" width="7" height="7" rx="1"></rect>
        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
        <rect x="14" y="14" width="7" height="7" rx="1"></rect>
      </svg>
    );
  if (id === "offices")
    return (
      <svg {...common}>
        <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"></path>
        <circle cx="12" cy="10" r="2.5"></circle>
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"></path>
    </svg>
  );
}

export default function TruckNav({ motion }: { motion: boolean }) {
  const active = useScrollSpy(SECTIONS.map((s) => s.id));
  const wheel = (style: React.CSSProperties) => (
    <div
      className="anim-wheel"
      style={{
        position: "absolute",
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: WHEEL_GRADIENT,
        border: "2.5px solid #05090B",
        boxShadow: "0 2px 5px rgba(0,0,0,.45)",
        animation: "spinWheel .8s linear infinite",
        animationPlayState: motion ? "running" : "paused",
        ...style,
      }}
    />
  );

  return (
    <nav
      aria-label="Navigare secțiuni"
      className="anim-truck"
      style={{
        position: "relative",
        animation: "truckBob 3.6s ease-in-out infinite",
        animationPlayState: motion ? "running" : "paused",
      }}
    >
      <div style={{ display: "flex", alignItems: "stretch", filter: "drop-shadow(0 12px 22px rgba(7,25,30,.35))" }}>
        {/* cabina */}
        <div
          aria-hidden="true"
          style={{
            position: "relative",
            flexShrink: 0,
            width: 36,
            borderRadius: "22px 6px 6px 10px",
            background: "linear-gradient(160deg,#1B3038,#0A1D22 70%)",
            border: "1px solid rgba(255,255,255,.09)",
            marginRight: 3,
          }}
        >
          <div
            style={{
              position: "absolute",
              right: 3,
              top: 5,
              width: 13,
              height: 15,
              borderRadius: "2px 9px 2px 2px",
              background: "linear-gradient(135deg,#BEE4EE,#5C939F)",
              opacity: 0.65,
            }}
          />
          <div
            className="anim-truck"
            style={{
              position: "absolute",
              left: -2,
              bottom: 9,
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#FFC24B",
              boxShadow: "0 0 10px 3px rgba(255,194,75,.85)",
              animation: "headlightPulse 2.4s ease-in-out infinite",
              animationPlayState: motion ? "running" : "paused",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "100%",
              bottom: 5,
              width: 36,
              height: 17,
              background: "linear-gradient(270deg,rgba(255,194,75,.38),transparent)",
              clipPath: "polygon(100% 28%,100% 72%,0 100%,0 0)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "absolute", left: 5, top: 4, width: 14, height: 2, borderRadius: 2, background: "rgba(255,194,75,.5)" }} />
        </div>

        {/* remorca = butoanele */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: "5px 8px",
            borderRadius: "8px 6px 6px 8px",
            background: "linear-gradient(180deg,#0E2A32,#07191E)",
            border: "1px solid rgba(255,255,255,.09)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 10,
              right: 10,
              top: 2,
              height: 1.5,
              background: "linear-gradient(90deg,transparent,rgba(240,168,58,.85) 18%,rgba(240,168,58,.85) 82%,transparent)",
            }}
          />
          {SECTIONS.map((s) => (
            <a key={s.id} href={s.href} className={`nav-truck-link${active === s.id ? " active" : ""}`}>
              <Icon id={s.id} />
              <T k={s.labelKey} />
            </a>
          ))}
        </div>

        {/* ușile din spate */}
        <div
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 12,
            borderRadius: "6px 10px 10px 6px",
            background: "linear-gradient(180deg,#0E2A32,#07191E)",
            border: "1px solid rgba(255,255,255,.09)",
            marginLeft: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <div style={{ width: 2, height: 16, borderRadius: 2, background: "rgba(255,194,75,.4)" }} />
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,90,80,.9)", boxShadow: "0 0 6px rgba(255,90,80,.8)" }} />
        </div>
      </div>

      {/* roțile */}
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: -8, height: 15, pointerEvents: "none" }}>
        {wheel({ left: 7 })}
        {wheel({ right: 64 })}
        {wheel({ right: 40 })}
        {wheel({ right: 6 })}
      </div>

      {/* drumul de sub roți */}
      <div
        aria-hidden="true"
        className="anim-road"
        style={{
          position: "absolute",
          left: 2,
          right: 2,
          bottom: -13,
          height: 2,
          background: "repeating-linear-gradient(90deg,rgba(240,168,58,.6) 0 9px,transparent 9px 22px)",
          backgroundSize: "22px 2px",
          opacity: 0.6,
          animation: "roadMove .7s linear infinite",
          animationPlayState: motion ? "running" : "paused",
        }}
      />
    </nav>
  );
}
