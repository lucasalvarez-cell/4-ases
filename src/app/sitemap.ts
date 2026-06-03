import type { MetadataRoute } from "next";

import { getSiteUrl, shouldAllowIndexing } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!shouldAllowIndexing()) {
    return [];
  }

  const baseUrl = getSiteUrl();

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-27"),
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date("2026-05-27"),
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date("2026-05-27"),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date("2026-05-27"),
    },
  ];
}
