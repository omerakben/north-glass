import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { PenTool, ShieldCheck, Ruler } from "lucide-react";
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
              src: "/images/glass-table-tops-and-shelves/table1.jpg",
              alt: "Custom glass table top on modern wooden desk",
            },
            {
              src: "/images/glass-table-tops-and-shelves/table2.jpg",
              alt: "Floating glass shelves with decorative items",
            },
            {
              src: "/images/glass-table-tops-and-shelves/table3.jpg",
              alt: "Tempered glass table top with polished edges",
            },
          ]}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Custom Glass Solutions - Free Estimate
        </a>
      </div>

      {/* Benefits & Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose North Glass for Glass Table Tops & Shelves?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenTool className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Cut Designs</h3>
            <p className="text-black/70">
              We template and cut glass to any shape for a perfect fit.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tempered Safety Glass</h3>
            <p className="text-black/70">
              Durable, safe glass suitable for homes and businesses.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Polished Edge Options</h3>
            <p className="text-black/70">
              Beveled, flat, or rounded edges for a refined finish.
            </p>
          </div>
        </div>
      </section>

      <ProcessStepper
        steps={[
          {
            title: "Consultation & Measurement",
            description:
              "We review your furniture and take exact measurements.",
            details: [
              "In-home or photo-based assessment",
              "Edge and shape recommendations",
              "Budget and timeline planning",
            ],
          },
          {
            title: "AutoCAD Design & Approval",
            description:
              "Detailed drawings ensure the glass fits perfectly.",
            details: [
              "Template creation and CAD modeling",
              "Client review and adjustments",
            ],
          },
          {
            title: "Fabrication",
            description: "Glass is cut, tempered, and polished to spec.",
            details: [
              "Precision cutting and edge finishing",
              "Quality control inspection",
            ],
          },
          {
            title: "Delivery & Installation",
            description: "We deliver and install the finished pieces.",
            details: [
              "Careful transport and placement",
              "Optional professional installation",
            ],
          },
        ]}
      />

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

