import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glass Office Doors & Aluminum Partitions | North Glass",
  description:
    "Professional glass office doors and aluminum partition systems across North Carolina. Modern commercial interior solutions.",
  alternates: { canonical: "/services/glass-office-doors" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Glass Office Doors & Partitions",
    category: "Commercial Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/glass-office-doors",
    description:
      "Professional installation of glass office doors, conference room partitions, and interior glass walls for commercial spaces.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function GlassOfficeDoorsPage() {
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
            Glass Office Doors
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Glass Office Doors & Partitions
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Complete glass office systems designed for modern workspaces. Our
        comprehensive approach includes space planning, AutoCAD design,
        precision glass fabrication, and professional installation for doors,
        partitions, and interior walls.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/glass-office-doors/commercial-front.png",
              alt: "Modern glass office entrance",
            },
            {
              src: "/images/glass-office-doors/before-shower-door.png",
              alt: "Glass office partition",
            },
          ]}
          interval={2000} // 2 seconds as requested
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
            question: "Do you offer aluminum office partitions and doors?",
            answer:
              "Yes, we design and install both aluminum and glass office systems across North Carolina. Our Interior Architects create integrated aluminum-glass solutions using AutoCAD for modern, functional workplace environments.",
          },
          {
            question:
              "What's better for offices: aluminum or glass partitions?",
            answer:
              "Both have advantages. Aluminum partitions offer superior durability and privacy options, while glass maximizes natural light. We often combine materials in our complete system designs for optimal performance.",
          },
          {
            question: "Can glass office doors provide privacy?",
            answer:
              "Yes, we offer frosted, textured, and decorative film options that maintain privacy while allowing natural light. Smart glass that switches from clear to opaque is also available.",
          },
          {
            question: "How does your design process work for office projects?",
            answer:
              "Our professional Interior Architects create detailed AutoCAD plans for every office project, ensuring optimal workflow, code compliance, and aesthetic integration with your existing space.",
          },
          {
            question: "Are glass partitions soundproof?",
            answer:
              "Our commercial-grade glass partitions significantly reduce sound transmission. For complete acoustic isolation, we can install double-glazed systems with specialized seals.",
          },
          {
            question: "Do you handle office buildouts across North Carolina?",
            answer:
              "We work with contractors and directly with businesses for office renovations statewide, handling everything from single door replacements to complete glass and aluminum partition systems.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
