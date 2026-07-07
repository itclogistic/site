import type { Metadata } from "next";
import { Space_Grotesk, Archivo } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import CookieBanner from "@/components/CookieBanner";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

// next/font self-hosts these at build time (no runtime call to Google's
// servers), but a `fallback` stack still matters: it's what renders during
// `display: swap`'s brief unstyled flash, and if the build ever runs
// somewhere that can't reach Google Fonts to fetch them in the first place.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
});

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.itc-logistic.ro";
const TITLE = "ITC Logistic — Transport & Logistică";
const DESCRIPTION =
  "Depozitare contractuală la Brașov și Timișoara, transport rutier și expediții aeriene & maritime — cu birouri în 5 orașe din România.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: "ITC Logistic",
    locale: "ro_RO",
    type: "website",
    images: [{ url: "/images/hero-depot.jpg", width: 1672, height: 941, alt: "Depozitul ITC Logistic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero-depot.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${spaceGrotesk.variable} ${archivo.variable}`}>
      <body>
        <LangProvider>
          {children}
          <FloatingContact />
          <CookieBanner />
        </LangProvider>
      </body>
    </html>
  );
}
