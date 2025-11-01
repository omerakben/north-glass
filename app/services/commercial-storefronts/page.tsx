import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import {
  Award,
  Calculator,
  MapPin,
  PenTool,
  Ruler,
  Settings,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Glass & Aluminum Systems | North Glass",
  description:
    "Professional commercial glass and aluminum storefronts across North Carolina. Emergency repairs and complete system design.",
  alternates: { canonical: "/services/commercial-storefronts" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Storefront Glass Services",
    category: "Commercial Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 900-6201",
    },
    url: "https://northglassnc.com/services/commercial-storefronts",
    description:
      "Commercial storefront glass installation, replacement, and emergency repair services for retail and business locations.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function CommercialStorefrontsPage() {
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
            Commercial Storefronts
          </li>
        </ol>
      </nav>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Commercial Storefronts</h1>
        <p className="text-xl text-primary-600 mb-4 font-medium">
          Glass + Aluminum Systems • AutoCAD Precision • North Carolina Experts
        </p>
        <p className="max-w-prose text-[17px] mb-6 mx-auto">
          Complete storefront systems engineered for durability, energy
          performance, and brand impact. We provide architectural consultation,
          AutoCAD design, fabrication, and professional installation for retail
          and commercial buildings across North Carolina.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-black/70 mb-6">
          <span>✓ Fast emergency board-up + replacement</span>
          <span>✓ Thermal performance upgrades</span>
          <span>✓ Professional installation warranty</span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/commercial-storefronts/commercial-front.png",
              alt: "Modern glass and aluminum commercial storefront with architectural design integration",
            },
          ]}
          interval={2000}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-flex gap-2">
          <Calculator size={18} />
          Enhance Your Business - Free Estimate
        </a>
      </div>

      {/* Benefits & Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose North Glass Storefront Systems?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenTool className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Architectural Design</h3>
            <p className="text-black/70">
              AutoCAD drawings ensure perfect integration with your facade and
              brand while meeting code requirements.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Security & Safety</h3>
            <p className="text-black/70">
              Tempered/laminated glass and heavy-duty aluminum framing built to
              withstand high traffic environments.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thermal Performance</h3>
            <p className="text-black/70">
              Insulated glass, Low‑E coatings, and thermal-break frames for
              energy savings and comfort.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Precision Fit</h3>
            <p className="text-black/70">
              Site measurements and engineered details eliminate surprises at
              installation.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Install</h3>
            <p className="text-black/70">
              Certified teams handle removal, glazing, sealing, and finishing to
              manufacturer specs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Statewide Service</h3>
            <p className="text-black/70">
              Serving businesses across North Carolina with fast response times
              and emergency support.
            </p>
          </div>
        </div>
      </section>

      <ProcessStepper
        title="Our Commercial Storefront Process"
        steps={[
          {
            title: "Site Survey & Consultation",
            description:
              "We assess existing conditions, access requirements, and branding goals for your storefront.",
            details: [
              "On-site measurements and photos",
              "Code and ADA considerations",
              "Security and energy priorities",
            ],
          },
          {
            title: "AutoCAD Design & Engineering",
            description:
              "We produce detailed drawings specifying framing, glazing, and door hardware.",
            details: [
              "System selection (thermal/non-thermal)",
              "Glass type and thickness",
              "Door swing and hardware layouts",
            ],
          },
          {
            title: "Fabrication & Procurement",
            description:
              "We order and fabricate aluminum systems and glass to exact specifications.",
            details: [
              "Cut-to-size frames and mullions",
              "IGU/laminated glass production",
              "Branding film or decals if needed",
            ],
          },
          {
            title: "Installation & Glazing",
            description:
              "Our team removes existing materials, installs framing, and expertly glazes the glass.",
            details: [
              "Anchoring and shimming",
              "Weatherproof sealing",
              "Hardware installation and tuning",
            ],
          },
          {
            title: "Final Inspection & Handover",
            description:
              "We perform a full quality check, clean the glass, and review maintenance guidance.",
            details: [
              "Operational testing",
              "Safety and code verification",
              "Care instructions and warranty",
            ],
          },
        ]}
      />
      <FAQ
        items={[
          {
            question:
              "Do you offer aluminum storefront systems in addition to glass?",
            answer:
              "Yes, we specialize in both aluminum and glass storefront systems across North Carolina. Our Interior Architects design integrated aluminum-glass solutions using AutoCAD precision for optimal performance and aesthetics.",
          },
          {
            question:
              "What's the difference between aluminum and glass storefront systems?",
            answer:
              "Aluminum systems provide superior structural strength and thermal performance, while glass systems maximize visibility. We often combine both materials in our complete system designs for the best of both worlds.",
          },
          {
            question: "Can you match existing storefront systems?",
            answer:
              "We work with all major storefront systems and can source matching materials to maintain your building's consistent appearance. Our AutoCAD design process ensures perfect integration.",
          },
          {
            question:
              "Do you provide architectural design services for commercial projects?",
            answer:
              "Absolutely. Our professional Interior Architects create detailed AutoCAD designs for every commercial project, ensuring code compliance, aesthetic appeal, and optimal functionality from concept to installation.",
          },
          {
            question: "What about energy-efficient options?",
            answer:
              "We offer insulated glass units, Low-E coatings, thermal-break aluminum frames, and tinted options that reduce energy costs while maintaining visibility and aesthetics.",
          },
          {
            question: "Do you offer emergency glass repair?",
            answer:
              "Yes, we provide emergency board-up services and expedited glass replacement across North Carolina to secure your business and minimize downtime.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
