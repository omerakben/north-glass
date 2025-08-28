// Service classification for analytics tracking
export type ServiceCategory =
  | "glass"
  | "aluminum"
  | "design"
  | "mixed"
  | "other";

export interface ServiceAnalytics {
  service: string;
  category: ServiceCategory;
  primaryMaterial: "glass" | "aluminum" | "design" | "mixed";
  isResidential: boolean;
  isCommercial: boolean;
}

// Service classification mapping
export const SERVICE_CLASSIFICATIONS: Record<string, ServiceAnalytics> = {
  "Architectural Design Consultation": {
    service: "Architectural Design Consultation",
    category: "design",
    primaryMaterial: "design",
    isResidential: true,
    isCommercial: true,
  },
  "Frameless Shower": {
    service: "Frameless Shower",
    category: "glass",
    primaryMaterial: "glass",
    isResidential: true,
    isCommercial: false,
  },
  "Window Replacement": {
    service: "Window Replacement",
    category: "glass",
    primaryMaterial: "glass",
    isResidential: true,
    isCommercial: true,
  },
  Mirrors: {
    service: "Mirrors",
    category: "glass",
    primaryMaterial: "glass",
    isResidential: true,
    isCommercial: true,
  },
  "Sliding Patio Doors": {
    service: "Sliding Patio Doors",
    category: "mixed",
    primaryMaterial: "aluminum",
    isResidential: true,
    isCommercial: false,
  },
  "Window & Door Screens": {
    service: "Window & Door Screens",
    category: "aluminum",
    primaryMaterial: "aluminum",
    isResidential: true,
    isCommercial: true,
  },
  "Glass Table Tops & Shelves": {
    service: "Glass Table Tops & Shelves",
    category: "glass",
    primaryMaterial: "glass",
    isResidential: true,
    isCommercial: true,
  },
  "Glass Office Doors": {
    service: "Glass Office Doors",
    category: "mixed",
    primaryMaterial: "glass",
    isResidential: false,
    isCommercial: true,
  },
  "Staircase Glass Railings": {
    service: "Staircase Glass Railings",
    category: "mixed",
    primaryMaterial: "glass",
    isResidential: true,
    isCommercial: true,
  },
  "Commercial Storefronts": {
    service: "Commercial Storefronts",
    category: "mixed",
    primaryMaterial: "aluminum",
    isResidential: false,
    isCommercial: true,
  },
  "Aluminum Systems": {
    service: "Aluminum Systems",
    category: "aluminum",
    primaryMaterial: "aluminum",
    isResidential: true,
    isCommercial: true,
  },
  Other: {
    service: "Other",
    category: "other",
    primaryMaterial: "mixed",
    isResidential: true,
    isCommercial: true,
  },
};

// Analytics helper functions
export function getServiceAnalytics(
  serviceName: string
): ServiceAnalytics | null {
  return SERVICE_CLASSIFICATIONS[serviceName] || null;
}

export function trackServiceInquiry(serviceName: string) {
  const analytics = getServiceAnalytics(serviceName);
  if (!analytics) return;

  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof window !== "undefined" && w.gtag) {
    // Track the specific service
    w.gtag("event", "service_inquiry", {
      service_name: serviceName,
      service_category: analytics.category,
      primary_material: analytics.primaryMaterial,
      is_residential: analytics.isResidential,
      is_commercial: analytics.isCommercial,
    });

    // Track material-specific events for business intelligence
    w.gtag("event", `${analytics.primaryMaterial}_inquiry`, {
      service_name: serviceName,
      category: analytics.category,
    });

    // Track market segment
    if (analytics.isResidential && !analytics.isCommercial) {
      w.gtag("event", "residential_inquiry", { service_name: serviceName });
    } else if (analytics.isCommercial && !analytics.isResidential) {
      w.gtag("event", "commercial_inquiry", { service_name: serviceName });
    } else if (analytics.isResidential && analytics.isCommercial) {
      w.gtag("event", "mixed_market_inquiry", { service_name: serviceName });
    }
  }
}

// Business intelligence summary
export function getAnalyticsSummary() {
  const services = Object.values(SERVICE_CLASSIFICATIONS);

  return {
    totalServices: services.length,
    byCategory: {
      glass: services.filter((s) => s.category === "glass").length,
      aluminum: services.filter((s) => s.category === "aluminum").length,
      mixed: services.filter((s) => s.category === "mixed").length,
      design: services.filter((s) => s.category === "design").length,
      other: services.filter((s) => s.category === "other").length,
    },
    byMaterial: {
      glass: services.filter((s) => s.primaryMaterial === "glass").length,
      aluminum: services.filter((s) => s.primaryMaterial === "aluminum").length,
      mixed: services.filter((s) => s.primaryMaterial === "mixed").length,
      design: services.filter((s) => s.primaryMaterial === "design").length,
    },
    byMarket: {
      residentialOnly: services.filter(
        (s) => s.isResidential && !s.isCommercial
      ).length,
      commercialOnly: services.filter((s) => s.isCommercial && !s.isResidential)
        .length,
      both: services.filter((s) => s.isResidential && s.isCommercial).length,
    },
  };
}
