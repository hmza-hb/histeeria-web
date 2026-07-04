import type { MetadataRoute } from "next";

import { APP_URL, DOCS_URL, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const primaryPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/platform", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/docs", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/get-started", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/changelog", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  const legalPages = [
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return [
    ...primaryPages.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    {
      url: DOCS_URL,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: APP_URL,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...legalPages.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
  ];
}
