import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { Award, Calculator, PenTool, Ruler, Settings, ShieldCheck } from "lucide-react";
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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Glass Office Doors & Partitions</h1>
        <p className="text-xl text-primary-600 mb-4 font-medium">
          Modern Interiors • AutoCAD Space Planning • Professional Installation
        </p>
        <p className="max-w-prose text-[17px] mb-6 mx-auto">
          Complete glass office systems designed for clarity, privacy, and
          performance. From space planning and AutoCAD design through
          fabrication and installation, we deliver turnkey commercial interior
          solutions across North Carolina.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/glass-office-doors/commercial-aluminum-door-system.png",
              alt: "Commercial aluminum and glass door system for office building in Raleigh",
            },
            {
              src: "/images/glass-office-doors/commercial-office.jpg",
              alt: "Modern glass office door installation with aluminum framework in Charlotte",
            },
            {
              src: "/images/glass-office-doors/commercial-office2.jpg",
              alt: "Professional glass office door with contemporary design in Durham",
            },
            {
              src: "/images/glass-office-doors/commercial-office3.jpg",
              alt: "Elegant glass office door system for corporate environment in Greensboro",
            },
            {
              src: "/images/glass-office-doors/commercial-office4.png",
              alt: "Premium glass office door with architectural integration in Asheville",
            },
          ]}
          interval={4000}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-flex gap-2">
          <Calculator size={18} /> Get Free Quote + AutoCAD Design
        </a>
      </div>

      {/* Benefits & Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose North Glass for Offices?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenTool className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Architect-Led Planning</h3>
            <p className="text-black/70">AutoCAD space planning optimizes layouts for flow, light, and compliance.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy & Safety</h3>
            <p className="text-black/70">Tempered glass and privacy options (frosted/film) meet office needs.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hardware & Performance</h3>
            <p className="text-black/70">Quality hinges, sliders, and closers for smooth, long-lasting operation.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Precision Fit</h3>
            <p className="text-black/70">Exact measurements and details reduce downtime during buildouts.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Install</h3>
            <p className="text-black/70">Experienced commercial crews deliver clean, on-schedule installations.</p>
          </div>
        </div>
      </section>

      <ProcessStepper
        title="Our Commercial Interior Process"
        steps={[
          {
            title: "Consultation & Space Assessment",
            description:
              "We review your floor plan, workflows, and privacy needs to define a clear scope.",
            details: [
              "On-site or plan review",
              "Acoustic and visibility goals",
              "Budget and schedule targets",
            ],
          },
          {
            title: "AutoCAD Design & Detailing",
            description:
              "We produce drawings for door swings, partition lines, glazing, and hardware.",
            details: [
              "Door/partition specifications",
              "Hardware and finish schedules",
              "Code and ADA considerations",
            ],
          },
          {
            title: "Material Selection",
            description:
              "We help select glass types and hardware that balance clarity, privacy, and cost.",
            details: [
              "Tempered, laminated, or frosted",
              "Film/branding options",
              "Hinges, sliders, closers",
            ],
          },
          {
            title: "Fabrication & Logistics",
            description:
              "Glass is cut/tempered and hardware is staged for efficient on-site work.",
            details: [
              "Shop drawings and QA",
              "Delivery coordination",
              "Site readiness checks",
            ],
          },
          {
            title: "Installation & Turnover",
            description:
              "Our crew installs, adjusts, and cleans, then walks your team through operation and care.",
            details: [
              "Clean, low-disruption work",
              "Final adjustments and testing",
              "Care and warranty handoff",
            ],
          },
        ]}
      />
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
