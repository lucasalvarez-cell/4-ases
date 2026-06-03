import type { MetadataRoute } from "next";

import { getSiteUrl, shouldAllowIndexing } from "@/lib/siteUrl";

export default function robots(): MetadataRoute.Robots {
  if (!shouldAllowIndexing()) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  const baseUrl = getSiteUrl();

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
