import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ITC Logistic — Transport & Logistică",
    short_name: "ITC Logistic",
    description: "Depozitare contractuală, transport rutier și expediții aeriene & maritime în România.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#07191E",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
