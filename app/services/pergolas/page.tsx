import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { Sun, ShieldCheck, Settings } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pergolas – Aluminum Pergola Design & Install | North Glass",
  description:
    "Custom aluminum pergolas for commercial spaces across North Carolina. Shade structures designed and installed by professionals.",
  alternates: { canonical: "/services/pergolas" },
  keywords: [
    "aluminum pergola",
    "commercial pergola",
    "shade structure",
    "North Carolina pergolas",
  ],
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aluminum Pergola Design & Installation",
    category: "Commercial Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/pergolas",
    description:
      "Design and installation of custom aluminum pergolas and shade structures for commercial properties and hospitality projects.",
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function PergolasPage() {
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
            Pergolas
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">Pergolas</h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Enhance outdoor areas with durable aluminum pergolas. Ideal for
        hospitality, retail, and office campuses seeking comfortable shade and a
        premium look.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/pergolas/commercial-pergola.jpg",
              alt: "Commercial aluminum pergola covering outdoor seating",
            },
            {
              src: "/images/pergolas/commercial-pergola-two.jpg",
              alt: "Custom pergola providing shade for restaurant patio",
            },
            {
              src: "/images/pergolas/commercial-pergola2.jpg",
              alt: "Modern pergola structure with integrated lighting",
            },
            {
              src: "/images/pergolas/pergola.jpg",
              alt: "Freestanding aluminum pergola in landscaped courtyard",
            },
          ]}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Get Free Estimate
        </a>
      </div>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Our Aluminum Pergolas?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comfortable Shade</h3>
            <p className="text-black/70">
              Create usable outdoor space with stylish, functional shade.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Durable Aluminum</h3>
            <p className="text-black/70">
              Powder-coated frames resist weather and require minimal upkeep.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrated Options</h3>
            <p className="text-black/70">
              Add lighting, fans, or privacy screens for a complete solution.
            </p>
          </div>
        </div>
      </section>

      <ProcessStepper
        steps={[
          {
            title: "Consultation & Site Review",
            description:
              "We evaluate your outdoor space and discuss shade and design goals.",
            details: [
              "On-site measurement",
              "Use-case planning",
              "Budget alignment",
            ],
          },
          {
            title: "AutoCAD Design",
            description: "Our team drafts a custom pergola layout for approval.",
            details: [
              "Detailed structural drawings",
              "Integration with existing architecture",
            ],
          },
          {
            title: "Fabrication",
            description: "Aluminum components are manufactured with precision.",
            details: [
              "Powder-coated finishes",
              "Quality inspections",
            ],
          },
          {
            title: "Installation",
            description:
              "Professional installers assemble and secure your pergola on-site.",
            details: [
              "Efficient construction",
              "Final alignment and cleanup",
            ],
          },
        ]}
      />

      <FAQ
        items={[
          {
            question: "Do you design pergolas for commercial properties?",
            answer:
              "Yes, we specialize in commercial pergola systems for restaurants, hotels, and corporate campuses across North Carolina.",
          },
          {
            question: "What materials are used?",
            answer:
              "Our pergolas are built from powder-coated aluminum for long-lasting durability and minimal maintenance.",
          },
          {
            question: "Can pergolas include lighting or privacy screens?",
            answer:
              "Absolutely. We can integrate lighting, fans, heaters, and privacy panels into the design for a complete outdoor environment.",
          },
        ]}
      />

      <ServiceJsonLd />
    </main>
  );
}

