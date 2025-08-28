import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frameless Glass Shower Doors – Raleigh–Durham",
  description:
    "Custom frameless shower enclosures that elevate your bathroom. Free estimates.",
  alternates: { canonical: "/services/frameless-glass-shower-doors" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Frameless Glass Shower Door Installation",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/frameless-glass-shower-doors",
    description:
      "Custom frameless shower door design and installation including measurement, fabrication and expert install.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function FramelessShowersPage() {
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
            Frameless Glass Shower Doors
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Frameless Glass Shower Doors
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Elevate your bathroom with sleek, custom frameless glass. We measure
        precisely, fabricate quality tempered glass, and install with care.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/frameless-glass-shower-doors/after-shower-door.png",
              alt: "Modern frameless glass shower enclosure",
            },
            {
              src: "/images/frameless-glass-shower-doors/before-shower-door.png",
              alt: "Bathroom before shower door installation",
            },
            {
              src: "/images/frameless-glass-shower-doors/shower-big.png",
              alt: "Luxury frameless shower with clear glass",
            },
          ]}
          interval={2000} // 2 seconds as requested
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Get a Free Estimate
        </a>
      </div>
      <FAQ
        items={[
          {
            question: "Do frameless shower doors leak?",
            answer:
              "When properly measured and installed, frameless enclosures are designed with minimal gaps and seals to keep water in.",
          },
          {
            question: "How long does installation take?",
            answer:
              "Most projects are installed in a day after glass fabrication (typically 1–2 weeks from measure).",
          },
          {
            question: "What thickness of glass do you use?",
            answer:
              'Typically 3/8" or 1/2" tempered safety glass, depending on configuration and size.',
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
