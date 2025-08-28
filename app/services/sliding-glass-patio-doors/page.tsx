import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sliding Glass & Aluminum Patio Doors | North Glass",
  description:
    "Professional sliding glass and aluminum patio door installation across North Carolina. Energy-efficient indoor-outdoor solutions.",
  alternates: { canonical: "/services/sliding-glass-patio-doors" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sliding Glass Patio Door Installation",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/sliding-glass-patio-doors",
    description:
      "Professional sliding glass patio door installation, replacement, and repair services for residential properties.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function SlidingPatioDoorPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <nav aria-label="Breadcrumb" className="text-sm mb-4">
        <ol className="flex flex-wrap gap-1 text-black/70">
          <li>
            <Link href="/" className="underline">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/services" className="underline">
              Services
            </Link>
          </li>
          <li>/</li>
          <li aria-current="page" className="text-black">
            Sliding Glass Patio Doors
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Sliding Glass Patio Doors
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Complete sliding glass door systems engineered for seamless
        indoor-outdoor living. From energy efficiency consultation and AutoCAD
        design through precision installation, we deliver comprehensive patio
        door solutions.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/sliding-glass-patio-doors/after-stairs.png",
              alt: "Modern sliding glass patio door",
            },
            {
              src: "/images/sliding-glass-patio-doors/before-stairs.png",
              alt: "Patio door installation",
            },
          ]}
          interval={2000}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Get Free Quote + AutoCAD Design
        </a>
      </div>
      <FAQ
        items={[
          {
            question: "Do you offer aluminum sliding patio door frames?",
            answer:
              "Yes, we specialize in both aluminum and glass sliding door systems across North Carolina. Our Interior Architects design integrated aluminum-glass solutions using AutoCAD for optimal performance and weather resistance.",
          },
          {
            question:
              "What's better: aluminum or vinyl frames for sliding doors?",
            answer:
              "Aluminum frames offer superior durability, weather resistance, and thermal performance with thermal breaks. Our complete system approach helps you choose the best material for your specific application and budget.",
          },
          {
            question: "Can you replace just the glass in my sliding door?",
            answer:
              "Yes, if the aluminum or existing frame is in good condition, we can replace just the glass panel, saving you money while restoring clarity and insulation performance.",
          },
          {
            question: "How does your design process work for patio doors?",
            answer:
              "Our professional Interior Architects create AutoCAD designs that consider your home's architecture, energy efficiency needs, and indoor-outdoor flow for optimal functionality and aesthetics.",
          },
          {
            question: "What brands of sliding doors do you install?",
            answer:
              "We work with all major brands and can source aluminum or glass doors to match your budget and style preferences, from standard to premium architectural-grade systems.",
          },
          {
            question: "How long does sliding door installation take?",
            answer:
              "Most installations are completed in 4-6 hours, including removal of the old door and proper sealing. Our AutoCAD precision planning reduces installation time and ensures perfect fit.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
