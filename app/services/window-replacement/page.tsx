import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { Award, Ruler, Settings, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Replacement & Repair – North Glass | North Carolina",
  description:
    "Energy-efficient window glass replacement across North Carolina. Fix foggy windows, broken panes by professional glass and aluminum company. Free estimates.",
  alternates: { canonical: "/services/window-replacement" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window Glass Replacement & Repair",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 900-6201",
    },
    url: "https://northglassnc.com/services/window-replacement",
    description:
      "Professional window glass replacement including foggy window repair, broken pane replacement, and energy-efficient upgrades.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function WindowReplacementPage() {
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
            Window Replacement
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Window Replacement & Repair
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Improve your home&apos;s energy efficiency and curb appeal with
        professional window replacement. From consultation and custom design
        through precision installation, we provide comprehensive solutions for
        your home.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/window-replacement/after-window-replacement.png",
              alt: "Energy-efficient window replacement with modern aluminum framing and architectural design precision",
            },
            {
              src: "/images/window-replacement/windows-replacment.png",
              alt: "Professional window replacement process with interior architect consultation and aluminum system integration",
            },
            {
              src: "/images/window-replacement/energy-efficiency.png",
              alt: "Low-E and insulated glass options improve energy efficiency and comfort",
            },
            {
              src: "/images/window-replacement/window-comparison.png",
              alt: "Window performance comparison and upgrade options",
            },
            {
              src: "/images/window-replacement/aluminum-maintenance.png",
              alt: "Durable, low-maintenance aluminum frames for window replacement",
            },
          ]}
          interval={2000}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Upgrade Your Windows - Free Estimate
        </a>
      </div>

      <ProcessStepper
        title="Our Professional Window Replacement Process"
        steps={[
          {
            title: "Initial Energy Assessment & Consultation",
            description:
              "We evaluate your current windows, assess energy efficiency needs, and discuss replacement options that meet your goals.",
            details: [
              "Comprehensive window condition assessment",
              "Energy efficiency analysis and recommendations",
              "Style and performance requirements discussion",
              "Budget planning and financing options",
            ],
          },
          {
            title: "Professional AutoCAD Design & Planning",
            description:
              "Our team creates detailed technical drawings and specifications to ensure perfect fit and optimal performance.",
            details: [
              "Precise window measurements and specifications",
              "AutoCAD technical drawings and plans",
              "Window type and configuration selection",
              "Integration planning with existing architecture",
            ],
          },
          {
            title: "Window Selection & Energy Optimization",
            description:
              "We help you choose the ideal windows for your climate, style preferences, and energy efficiency goals.",
            details: [
              "Glass type and coating selection (Low-E, triple-pane options)",
              "Frame material and style choices",
              "Energy efficiency rating optimization",
              "Hardware and operation mechanism selection",
            ],
          },
          {
            title: "Custom Fabrication & Quality Control",
            description:
              "Your windows are manufactured to exact specifications with premium materials and rigorous quality testing.",
            details: [
              "Custom manufacturing to AutoCAD specifications",
              "Multi-point quality inspections during production",
              "Energy performance testing and certification",
              "Pre-installation fit and finish verification",
            ],
          },
          {
            title: "Professional Installation & Weatherproofing",
            description:
              "Our certified installers ensure proper fit, weatherproofing, and optimal performance for years to come.",
            details: [
              "Expert removal of existing windows",
              "Precision installation with proper shimming and leveling",
              "Complete weatherproofing and insulation",
              "Operation adjustment and performance testing",
            ],
          },
          {
            title: "Final Inspection & Performance Verification",
            description:
              "We conduct thorough testing and provide you with warranties and maintenance guidance for lasting performance.",
            details: [
              "Complete functionality and energy performance testing",
              "Final quality inspection and adjustments",
              "Client education on operation and maintenance",
              "Warranty documentation and care instructions",
            ],
          },
        ]}
      />

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Replace Windows with North Glass?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Energy Savings</h3>
            <p className="text-black/70">Low‑E, insulated glass reduces heat loss and improves comfort.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro Installation</h3>
            <p className="text-black/70">Proper shimming, sealing, and weatherproofing ensure long-term performance.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Precision Fit</h3>
            <p className="text-black/70">Exact measurements and AutoCAD specs eliminate gaps and drafts.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
            <p className="text-black/70">Durable frames and high‑performance glazing for years of reliability.</p>
          </div>
        </div>
      </section>

      <FAQ
        items={[
          {
            question:
              "Do you offer architectural design consultation for window replacement?",
            answer:
              "Yes, our professional Interior Architects provide AutoCAD design consultations for window replacement projects across North Carolina, ensuring optimal energy performance, aesthetic integration, and code compliance.",
          },
          {
            question: "What's included in your free window replacement quote?",
            answer:
              "Every free quote includes on-site measurement, AutoCAD design specifications, energy performance analysis, and detailed installation timeline. Our Interior Architect approach ensures no hidden surprises.",
          },
          {
            question: "Can you fix foggy windows without replacing the frame?",
            answer:
              "Yes, we can replace just the glass unit (IGU) in most cases, saving you money while restoring clarity and insulation. Our AutoCAD analysis determines the most cost-effective solution.",
          },
          {
            question:
              "Do you work with aluminum window frames as well as glass?",
            answer:
              "Absolutely. We specialize in both aluminum and glass window systems, often combining materials for optimal performance. Our complete system approach covers everything from frame to glass.",
          },
          {
            question: "How much does window glass replacement cost?",
            answer:
              "Cost varies by size and glass type. Single pane repairs start around $150-300, while dual-pane units range from $300-600. We provide free estimates with detailed AutoCAD specifications.",
          },
          {
            question: "Do you offer energy-efficient glass options?",
            answer:
              "Absolutely. We offer Low-E coatings, argon gas fills, and thermal-break aluminum frames that can significantly reduce heating and cooling costs across North Carolina's varied climate.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
