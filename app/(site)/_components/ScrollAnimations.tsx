"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollAnimations() {
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Prevent animations from running multiple times
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Wait a bit to ensure Lenis is initialized (if it's being used)
    const initTimeout = setTimeout(() => {
      // Configure ScrollTrigger to work with or without Lenis
      ScrollTrigger.config({
        syncInterval: 999999999, // Prevent automatic refresh
      });
      
      // Manually refresh ScrollTrigger after a delay to ensure proper initialization
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }, 200);

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Hero section fade in
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Services section animation - use querySelector with section containing services
      const servicesSection = document.querySelector(".services-section");
      if (servicesSection) {
        const serviceLinks = servicesSection.querySelectorAll("a[href^='/services/']");
        if (serviceLinks.length > 0) {
          gsap.from(serviceLinks, {
            scrollTrigger: {
              trigger: servicesSection,
              start: "top 80%",
              once: true,
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          });
        }
      }

      // Why Choose section animation - find by heading text
      const whySectionHeading = Array.from(document.querySelectorAll("h2")).find(h => h.textContent?.includes("Why Choose"));
      if (whySectionHeading) {
        const whySection = whySectionHeading.closest("section");
        if (whySection) {
          const whyCards = whySection.querySelectorAll(".text-center");
          if (whyCards.length > 0) {
            gsap.from(whyCards, {
              scrollTrigger: {
                trigger: whySection,
                start: "top 80%",
                once: true,
              },
              opacity: 0,
              scale: 0.95,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
            });
          }
        }
      }

      // Process steps animation
      const processSectionHeading = Array.from(document.querySelectorAll("h2")).find(h => h.textContent?.includes("Our Process"));
      if (processSectionHeading) {
        const processSection = processSectionHeading.closest("section");
        if (processSection) {
          const processSteps = processSection.querySelectorAll(".text-center");
          if (processSteps.length > 0) {
            gsap.from(processSteps, {
              scrollTrigger: {
                trigger: processSection,
                start: "top 80%",
                once: true,
              },
              opacity: 0,
              x: -30,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
            });
          }
        }
      }

      // Gallery items animation
      const gallerySectionHeading = Array.from(document.querySelectorAll("h2")).find(h => h.textContent?.includes("Our Work"));
      if (gallerySectionHeading) {
        const gallerySection = gallerySectionHeading.closest("section");
        if (gallerySection) {
          const galleryItems = gallerySection.querySelectorAll(".rounded-lg");
          if (galleryItems.length > 0) {
            gsap.from(galleryItems, {
              scrollTrigger: {
                trigger: gallerySection,
                start: "top 80%",
                once: true,
              },
              opacity: 0,
              y: 30,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out",
            });
          }
        }
      }

      // Testimonials animation
      const testimonialsSectionHeading = Array.from(document.querySelectorAll("h2")).find(h => h.textContent?.includes("What Our Customers"));
      if (testimonialsSectionHeading) {
        const testimonialsSection = testimonialsSectionHeading.closest("section");
        if (testimonialsSection) {
          const testimonialCards = testimonialsSection.querySelectorAll(".rounded-lg");
          if (testimonialCards.length > 0) {
            gsap.from(testimonialCards, {
              scrollTrigger: {
                trigger: testimonialsSection,
                start: "top 80%",
                once: true,
              },
              opacity: 0,
              y: 30,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
            });
          }
        }
      }

      // Service area badges animation
      const serviceAreaSectionHeading = Array.from(document.querySelectorAll("h2")).find(h => h.textContent?.includes("Proudly Serving"));
      if (serviceAreaSectionHeading) {
        const serviceAreaSection = serviceAreaSectionHeading.closest("section");
        if (serviceAreaSection) {
          const areaBadges = serviceAreaSection.querySelectorAll(".rounded-full");
          if (areaBadges.length > 0) {
            gsap.from(areaBadges, {
              scrollTrigger: {
                trigger: serviceAreaSection,
                start: "top 80%",
                once: true,
              },
              opacity: 0,
              scale: 0.8,
              duration: 0.6,
              stagger: 0.05,
              ease: "back.out(1.7)",
            });
          }
        }
      }

      // Fade in sections on scroll
      const sections = gsap.utils.toArray<HTMLElement>(".fade-in-section");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2.out",
        });
      });

      // Number counter animation for stats
      const counters = gsap.utils.toArray<HTMLElement>(".stat-number");
      counters.forEach((counter) => {
        const targetValue = parseInt(counter.getAttribute("data-target") || "0");
        if (targetValue > 0) {
          gsap.from(counter, {
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              once: true,
            },
            textContent: 0,
            duration: 2,
            ease: "power1.inOut",
            snap: { textContent: 1 },
            onUpdate: function() {
              const currentValue = Math.ceil(Number(this.targets()[0].textContent));
              counter.textContent = String(currentValue);
            },
          });
        }
      });
    });

    // Cleanup on unmount
    return () => {
      clearTimeout(initTimeout);
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}