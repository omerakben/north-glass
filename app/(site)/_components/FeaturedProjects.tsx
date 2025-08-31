"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AutoCarousel from "./AutoCarousel";

// High-quality project images showcasing North Glass's work - Client Selected
const featuredImages = [
  {
    src: "/images/aluminum-windows/commercial-aluminum-window-installation.jpg",
    alt: "Commercial aluminum window installation - Raleigh, NC",
  },
  {
    src: "/images/commercial-storefronts/commercial-front.png",
    alt: "Modern commercial storefront glass installation - Durham, NC",
  },
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower-door4.jpg",
    alt: "Elegant frameless shower door installation - Cary, NC",
  },
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower-door10.jpg",
    alt: "Premium frameless glass shower enclosure - Chapel Hill, NC",
  },
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower-door13.png",
    alt: "Contemporary frameless shower door - Morrisville, NC",
  },
  {
    src: "/images/frameless-glass-shower-doors/frameless-shower-door15.png",
    alt: "Luxury frameless shower enclosure - Wake Forest, NC",
  },
  {
    src: "/images/glass-office-doors/commercial-office4.png",
    alt: "Commercial office glass doors and partitions - Apex, NC",
  },
  {
    src: "/images/staircase-glass-railings/staircase-glass.jpg",
    alt: "Modern glass staircase railings installation - Garner, NC",
  },
  {
    src: "/images/pergolas/commercial-pergola2.jpg",
    alt: "Commercial aluminum pergola installation - Charlotte, NC",
  },
  {
    src: "/images/mirrors/luxury-vanity-mirror-cary.jpg",
    alt: "Luxury vanity mirror installation - Cary, NC",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden relative">
      {/* Large Logo Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="relative w-80 h-80 lg:w-96 lg:h-96 opacity-[0.06] -rotate-12">
          <Image
            src="/images/logo.png"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 320px, 384px"
            aria-hidden="true"
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our recent work across North Carolina. From elegant
            frameless showers to commercial storefronts, see the quality and
            craftsmanship that sets North Glass apart.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-teal)] to-[var(--brand-turquoise)] mx-auto mb-8"></div>
        </div>

        {/* Main Carousel */}
        <div className="max-w-6xl mx-auto mb-8">
          <AutoCarousel
            images={featuredImages}
            interval={5000} // 5 seconds - slower for viewing quality work
            className="rounded-2xl shadow-2xl group"
          />
        </div>

        {/* CTA Row */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to start your project? Get a free consultation and design
            estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--brand-teal)] to-[var(--brand-turquoise)] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Free Quote + Design
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border-2 border-[var(--brand-teal)] text-[var(--brand-teal)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-teal)] hover:text-white transition-all duration-200"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
