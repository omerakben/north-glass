import FAQ from "@/app/(site)/_components/FAQ";
import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Staircase Glass Railings – Raleigh–Durham",
  description:
    "Modern glass railings for stairs and balconies. Frameless glass balustrades that enhance safety without blocking views.",
  alternates: { canonical: "/services/staircase-glass-railings" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Glass Railing Installation",
    category: "Commercial Glass Service",
    areaServed: { "@type": "AreaServed", name: "Raleigh–Durham–Cary, NC" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "919-000-0000",
    },
    url: "https://northglassnc.com/services/staircase-glass-railings",
    description:
      "Professional installation of glass railings and balustrades for staircases, balconies, and decks in residential and commercial properties.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function GlassRailingsPage() {
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
            Staircase Glass Railings
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">Staircase Glass Railings</h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Elevate your space with sleek glass railings. Perfect for modern homes
        and commercial buildings, our tempered glass balustrades provide safety
        without sacrificing views or natural light flow.
      </p>
      
      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/staircase-glass-railings/after-stairs.png",
              alt: "Modern glass staircase railing",
            },
            {
              src: "/images/staircase-glass-railings/before-stairs.png",
              alt: "Glass railing installation",
            },
          ]}
          interval={2000}
          className="max-w-4xl w-full"
        />
      </div>
      
      <div className="text-center mb-8">
        <a
          href="/request-quote"
          className="btn-primary inline-block"
        >
          Get a Free Estimate
        </a>
      </div>
      <FAQ
        items={[
          {
            question: "Are glass railings safe and code-compliant?",
            answer:
              "Absolutely. We use tempered safety glass that meets or exceeds all building codes. Our installations are engineered for both safety and beauty.",
          },
          {
            question: "What mounting options are available?",
            answer:
              "We offer standoff pin systems, base shoe channels, and post-mounted options. The best choice depends on your structure and aesthetic preferences.",
          },
          {
            question: "Can glass railings be used outdoors?",
            answer:
              "Yes, our tempered glass and stainless steel hardware are designed to withstand weather. We recommend regular cleaning to maintain clarity.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}