const DEFAULT_URL = "http://localhost:3000";

function normalizeUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getSiteUrl() {
  if (process.env.SITE_URL) {
    return normalizeUrl(process.env.SITE_URL);
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return DEFAULT_URL;
}

export function shouldAllowIndexing() {
  const isVercelProduction = process.env.VERCEL_ENV === "production";
  const isNodeProduction = process.env.NODE_ENV === "production";
  const isProduction = isVercelProduction || isNodeProduction;

  return isProduction && process.env.ALLOW_INDEXING === "true";
}
