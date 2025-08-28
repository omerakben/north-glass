import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://northglassnc.com";
  const currentDate = new Date();

  // Define priorities based on page importance for lead generation
  const getPriority = (path: string): number => {
    if (path === "") return 1.0; // Homepage
    if (path === "/contact" || path === "/request-quote") return 0.9; // High conversion pages
    if (path === "/services") return 0.9; // Service index
    if (path.startsWith("/services/")) return 0.8; // Individual service pages
    if (path.startsWith("/glass-aluminum-")) return 0.8; // Location pages for local SEO
    if (path === "/case-studies") return 0.8; // Case studies index
    if (path.startsWith("/case-studies/")) return 0.7; // Individual case studies
    if (path === "/about") return 0.7; // About page
    if (path === "/blog") return 0.6; // Blog
    if (path === "/privacy" || path === "/terms") return 0.3; // Legal pages
    return 0.5; // Default
  };

  // Define change frequency based on content type
  const getChangeFrequency = (
    path: string
  ):
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never" => {
    if (path === "" || path === "/blog") return "weekly";
    if (path === "/privacy" || path === "/terms") return "yearly";
    return "monthly";
  };

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
    "/services/architectural-design-services",
    "/case-studies",
    "/case-studies/luxury-master-bath-cary",
    "/case-studies/commercial-office-raleigh",
    "/case-studies/modern-staircase-durham",
    "/glass-aluminum-charlotte",
    "/about",
    "/blog",
    "/contact",
    "/request-quote",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: getChangeFrequency(path),
    priority: getPriority(path),
  }));
}
