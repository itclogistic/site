import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07191E",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 64 64">
          <path d="M18 44V24l14-8 14 8v20" fill="none" stroke="#6FCFAC" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 44h28" stroke="#6FCFAC" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
