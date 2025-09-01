import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { Award, Calculator, PenTool, Ruler, Settings, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glass Railings & Aluminum Systems | North Glass",
  description:
    "Professional glass railings with aluminum mounting systems across North Carolina. Modern safety solutions for stairs and balconies.",
  alternates: { canonical: "/services/staircase-glass-railings" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Glass Railing Installation",
    category: "Commercial Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Staircase Glass Railings</h1>
        <p className="text-xl text-primary-600 mb-4 font-medium">
          Tempered Safety Glass • Engineered Mounting • Modern Aesthetics
        </p>
        <p className="max-w-prose text-[17px] mb-6 mx-auto">
          Elegant glass railings for staircases, balconies, and overlooks.
          Architect-led AutoCAD design, engineered mounting systems, and
          professional installation across North Carolina.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/staircase-glass-railings/after-stairs.png",
              alt: "Modern tempered glass staircase railing with aluminum framework and architectural integration",
            },
            {
              src: "/images/staircase-glass-railings/before-stairs.png",
              alt: "Traditional staircase before glass railing installation with interior architect design planning",
            },
          ]}
          interval={2000}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-flex gap-2">
          <Calculator size={18} /> Get Free Quote + AutoCAD Design
        </a>
      </div>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why North Glass Railings?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tempered Safety</h3>
            <p className="text-black/70">Engineered systems with tempered/laminated glass meet code and safety goals.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Precision Fit</h3>
            <p className="text-black/70">AutoCAD details around treads, landings, and wall returns ensure accuracy.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mounting Options</h3>
            <p className="text-black/70">Standoff pins, base shoe channels, and post systems to match your design.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenTool className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Architectural Aesthetics</h3>
            <p className="text-black/70">Minimal visual weight opens spaces and highlights architectural lines.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Install</h3>
            <p className="text-black/70">Experienced teams ensure plumb alignment, secure anchoring, and clean finish.</p>
          </div>
        </div>
      </section>

      <ProcessStepper
        title="Our Glass Railing Process"
        steps={[
          {
            title: "Consultation & Site Assessment",
            description:
              "We review your staircase structure and design goals, then gather precise measurements.",
            details: ["Tread/landing conditions", "Style and hardware preferences", "Budget and schedule"],
          },
          {
            title: "AutoCAD Design & Engineering",
            description:
              "We create engineered drawings specifying glass thickness, mounts, and anchoring details.",
            details: ["Standoff/base shoe selection", "Handrail integration if needed", "Code compliance"],
          },
          {
            title: "Fabrication",
            description:
              "Glass panels are cut, polished, tempered, and drilled precisely for hardware.",
            details: ["Edge finishing", "Hardware hole drilling", "Quality checks"],
          },
          {
            title: "Installation",
            description:
              "We set mounts, align panels, glaze, and seal for a secure, clean result.",
            details: ["Anchoring and shimming", "Level/spacing verification", "Final cleaning"],
          },
        ]}
      />
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
