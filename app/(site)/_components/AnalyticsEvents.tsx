"use client";
import { useEffect } from "react";

export default function AnalyticsEvents() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";

      // Call click tracking
      if (href.startsWith("tel:")) {
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (w.gtag)
          w.gtag("event", "call_click", {
            placement: anchor.dataset.placement || "unknown",
            source_page: window.location.pathname,
          });
        return;
      }

      // CTA tracking via data-cta attribute
      const cta = anchor.dataset.cta;
      if (cta) {
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (w.gtag) {
          w.gtag("event", "cta_click", {
            cta_location: cta,
            source_page: window.location.pathname,
            destination_url: href,
          });
        }
      }

      // Service page navigation tracking
      if (href.startsWith("/services/")) {
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (w.gtag) {
          const serviceName = href.replace("/services/", "").replace(/-/g, " ");
          w.gtag("event", "service_page_visit", {
            service_slug: href.replace("/services/", ""),
            service_name: serviceName,
            source_page: window.location.pathname,
          });
        }
      }
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
