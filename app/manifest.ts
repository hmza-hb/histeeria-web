import type { MetadataRoute } from "next";

import { SHORT_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — The Reliability Layer for Production AI Agents`,
    short_name: SITE_NAME,
    description: SHORT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    categories: ["developer", "productivity", "business"],
    icons: [
      {
        src: "/assets/logo-dark.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
