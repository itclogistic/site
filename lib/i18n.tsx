"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dict } from "./dict";

export type Lang = "en" | "ro";

export { dict };

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
};

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ro");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("itc-lang");
    } catch {
      /* ignore */
    }
    if (saved === "en" || saved === "ro") {
      setLangState(saved);
      return;
    }
    // no saved preference yet: guess from the browser locale
    const browserLang = typeof navigator !== "undefined" ? navigator.language : "";
    setLangState(browserLang.toLowerCase().startsWith("ro") ? "ro" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("itc-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang: setLangState,
      t: (key) => dict[key]?.[lang] ?? String(key),
    }),
    [lang]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
