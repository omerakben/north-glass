import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glass Table Tops & Aluminum Shelving | North Glass",
  description:
    "Custom glass table tops and aluminum shelving systems across North Carolina. Professional design and precision installation.",
  alternates: { canonical: "/services/glass-table-tops-and-shelves" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Glass Table Tops & Shelves",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/glass-table-tops-and-shelves",
    description:
      "Custom-cut glass table tops, protective furniture covers, and decorative glass shelving for residential and commercial spaces.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function TableTopsShelvesPage() {
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
            Glass Table Tops & Shelves
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Glass Table Tops & Shelves
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Complete custom glass furniture systems designed for functionality and
        style. From concept and AutoCAD design through precision fabrication and
        installation, we deliver comprehensive glass table and shelving
        solutions.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/glass-table-tops-and-shelves/commercial-front.png",
              alt: "Custom glass table top",
            },
            {
              src: "/images/glass-table-tops-and-shelves/before-shower-door.png",
              alt: "Glass shelving display",
            },
          ]}
          interval={2000}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Custom Glass Solutions - Free Estimate
        </a>
      </div>
      <FAQ
        items={[
          {
            question: "What thickness glass should I choose for a table top?",
            answer:
              'For most dining and coffee tables, we recommend 3/8" to 1/2" tempered glass. Smaller accent tables can use 1/4" glass. We\'ll help you choose based on your table size and use.',
          },
          {
            question: "Can you cut glass to match my table shape?",
            answer:
              "Yes, we can cut glass to any shape including rectangles, circles, ovals, and custom shapes. We template unusual shapes to ensure a perfect fit.",
          },
          {
            question: "What edge finishes are available?",
            answer:
              "We offer flat polished, beveled, pencil round, and ogee edges. Each provides a different aesthetic from modern to traditional.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
