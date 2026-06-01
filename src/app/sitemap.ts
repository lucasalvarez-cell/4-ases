import type { MetadataRoute } from "next";

const BASE_URL = "https://www.4asessales.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-05-27"),
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified: new Date("2026-05-27"),
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: new Date("2026-05-27"),
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date("2026-05-27"),
    },
  ];
}
