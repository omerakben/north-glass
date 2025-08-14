//

export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Sitemap: https://northglassnc.com/sitemap.xml",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
