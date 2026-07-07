"use client";

import { createElement, type CSSProperties } from "react";
import { dict, useLang } from "@/lib/i18n";

type Props = {
  k: keyof typeof dict;
  as?: string;
  className?: string;
  style?: CSSProperties;
};

/** Renders a dictionary entry for the current language. Entries are static,
 * author-controlled copy (may contain inline tags like <em>/<strong>), so
 * injecting as HTML mirrors the original prototype's `el.innerHTML = ...`. */
export default function T({ k, as = "span", className, style }: Props) {
  const { t } = useLang();
  return createElement(as, { className, style, dangerouslySetInnerHTML: { __html: t(k) } });
}
