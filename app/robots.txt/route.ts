// Generate robots.txt for search engine crawlers

export const dynamic = "force-static";

export function GET() {
  const body = [
    "# Robots.txt for North Glass LLC",
    "# Allow all search engines to crawl the site",
    "",
    "User-agent: *",
    "Allow: /",
    "",
    "# Specific rules for major search engines",
    "User-agent: Googlebot",
    "Allow: /",
    "Crawl-delay: 0",
    "",
    "User-agent: Bingbot",
    "Allow: /",
    "Crawl-delay: 1",
    "",
    "# Block access to API routes",
    "User-agent: *",
    "Disallow: /api/",
    "",
    "# Sitemap location",
    "Sitemap: https://northglassnc.com/sitemap.xml",
    "",
    "# Host declaration (for Yandex)",
    "Host: https://northglassnc.com",
  ].join("\n");
  
  return new Response(body, { 
    headers: { 
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    } 
  });
}
