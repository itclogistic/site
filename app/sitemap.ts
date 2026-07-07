import type { MetadataRoute } from "next";
import { offices } from "@/lib/offices";
import { services } from "@/lib/services";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.itc-logistic.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({
      url: `${BASE_URL}/servicii/${s.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...offices.map((o) => ({
      url: `${BASE_URL}/birouri/${o.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
