import { getAllPosts } from "@/lib/blogData";
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
    if (path === "/blog") return 0.7; // Blog index - increased priority for SEO
    if (path.startsWith("/blog/")) return 0.6; // Individual blog posts
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
    if (path.startsWith("/blog/")) return "monthly"; // Blog posts
    if (path === "/privacy" || path === "/terms") return "yearly";
    return "monthly";
  };

  const staticRoutes = [
    "",
    "/services",
    "/services/frameless-glass-shower-doors",
    "/services/window-replacement",
    "/services/aluminum-windows",
    "/services/mirrors",
    "/services/sliding-glass-patio-doors",
    "/services/glass-office-doors",
    "/services/staircase-glass-railings",
    "/services/commercial-storefronts",
    "/services/pergolas",
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

  // Get all blog posts for dynamic blog routes
  const blogPosts = getAllPosts();
  const blogRoutes = blogPosts.map((post) => post.href);

  // Combine static routes with dynamic blog routes
  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: getChangeFrequency(path),
    priority: getPriority(path),
  }));
}
