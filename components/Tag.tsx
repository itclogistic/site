import T from "./T";

export default function Tag({ k }: { k: "tag.hq" | "tag.wh" | "tag.wh2" | "tag.office" }) {
  const isHq = k === "tag.hq";
  return (
    <T
      as="span"
      k={k}
      style={{
        fontSize: ".66rem",
        fontWeight: 700,
        letterSpacing: ".04em",
        textTransform: "uppercase",
        background: isHq ? "var(--green)" : "var(--green-tint)",
        color: isHq ? "#FFFFFF" : "var(--green)",
        borderRadius: 999,
        padding: "4px 10px",
      }}
    />
  );
}
