import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://northglassnc.com";
  const routes = [
    "",
    "/services",
    "/services/frameless-glass-shower-doors",
    "/services/window-replacement",
    "/services/mirrors",
    "/services/sliding-glass-patio-doors",
    "/services/window-and-door-screens",
    "/services/glass-table-tops-and-shelves",
    "/services/glass-office-doors",
    "/services/staircase-glass-railings",
    "/services/commercial-storefronts",
    "/about",
    "/blog",
    "/contact",
    "/request-quote",
    "/privacy",
    "/terms",
  ];
  return routes.map((path) => ({ url: `${base}${path}`, changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 }));
}
