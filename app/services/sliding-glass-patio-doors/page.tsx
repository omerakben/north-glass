import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { Ruler, Settings, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sliding Glass & Aluminum Patio Doors | North Glass",
  description:
    "Professional sliding glass and aluminum patio door installation across North Carolina. Energy-efficient indoor-outdoor solutions.",
  alternates: { canonical: "/services/sliding-glass-patio-doors" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sliding Glass Patio Door Installation",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/sliding-glass-patio-doors",
    description:
      "Professional sliding glass patio door installation, replacement, and repair services for residential properties.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function SlidingPatioDoorPage() {
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
            Sliding Glass Patio Doors
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Sliding Glass Patio Doors
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Complete sliding glass door systems engineered for seamless
        indoor-outdoor living. From energy efficiency consultation and AutoCAD
        design through precision installation, we deliver comprehensive patio
        door solutions.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/sliding-glass-patio-doors/slide1.png",
              alt: "Modern sliding glass patio door opening to outdoor living space",
            },
            {
              src: "/images/sliding-glass-patio-doors/slide2.png",
              alt: "Energy-efficient sliding patio door with slim aluminum frame",
            },
            {
              src: "/images/sliding-glass-patio-doors/slide3.png",
              alt: "Large glass patio door providing clear outdoor views",
            },
          ]}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Get Free Quote + AutoCAD Design
        </a>
      </div>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Our Sliding Patio Doors?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Durable Aluminum Frames
            </h3>
            <p className="text-black/70">
              Engineered for strength and long-term weather resistance.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Energy-Efficient Glass
            </h3>
            <p className="text-black/70">
              Low-E options keep interiors comfortable year-round.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smooth Operation</h3>
            <p className="text-black/70">
              Precision rollers and hardware for effortless sliding.
            </p>
          </div>
        </div>
      </section>

      <ProcessStepper
        steps={[
          {
            title: "Consultation & Measurement",
            description: "We assess your opening and discuss design goals.",
            details: [
              "On-site or virtual consultation",
              "Energy efficiency evaluation",
              "Budget and timeline planning",
            ],
          },
          {
            title: "AutoCAD Design",
            description:
              "Detailed drawings ensure a perfect fit and smooth operation.",
            details: [
              "Precise measurements and layout",
              "Hardware and glass specification",
            ],
          },
          {
            title: "Fabrication & Preparation",
            description:
              "Your door system is manufactured and prepped for install.",
            details: ["Quality-controlled fabrication", "Hardware preparation"],
          },
          {
            title: "Professional Installation",
            description:
              "Certified installers deliver a clean, efficient install.",
            details: [
              "Removal of existing unit",
              "Precise alignment and sealing",
            ],
          },
        ]}
      />

      <FAQ
        items={[
          {
            question: "Do you offer aluminum sliding patio door frames?",
            answer:
              "Yes, we specialize in both aluminum and glass sliding door systems across North Carolina. Our Interior Architects design integrated aluminum-glass solutions using AutoCAD for optimal performance and weather resistance.",
          },
          {
            question:
              "What's better: aluminum or vinyl frames for sliding doors?",
            answer:
              "Aluminum frames offer superior durability, weather resistance, and thermal performance with thermal breaks. Our complete system approach helps you choose the best material for your specific application and budget.",
          },
          {
            question: "Can you replace just the glass in my sliding door?",
            answer:
              "Yes, if the aluminum or existing frame is in good condition, we can replace just the glass panel, saving you money while restoring clarity and insulation performance.",
          },
          {
            question: "How does your design process work for patio doors?",
            answer:
              "Our professional Interior Architects create AutoCAD designs that consider your home's architecture, energy efficiency needs, and indoor-outdoor flow for optimal functionality and aesthetics.",
          },
          {
            question: "What brands of sliding doors do you install?",
            answer:
              "We work with all major brands and can source aluminum or glass doors to match your budget and style preferences, from standard to premium architectural-grade systems.",
          },
          {
            question: "How long does sliding door installation take?",
            answer:
              "Most installations are completed in 4-6 hours, including removal of the old door and proper sealing. Our AutoCAD precision planning reduces installation time and ensures perfect fit.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
