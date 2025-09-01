import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { Ruler, Settings, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aluminum Windows – Energy Efficient Replacement | North Glass",
  description:
    "Professional aluminum window replacement and installation across North Carolina. Durable frames, energy efficiency, and modern aesthetics.",
  alternates: { canonical: "/services/aluminum-windows" },
  keywords: [
    "aluminum windows",
    "window replacement",
    "energy efficient windows",
    "North Carolina windows",
    "residential aluminum windows",
  ],
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aluminum Window Replacement",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/aluminum-windows",
    description:
      "Aluminum window installation and replacement for homes across North Carolina. Strong, low-maintenance frames with modern profiles.",
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function AluminumWindowsPage() {
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
            Aluminum Windows
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">Aluminum Windows</h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Upgrade your home with durable, energy-efficient aluminum windows. Our
        team measures, fabricates, and installs precision-fit systems for better
        comfort, security, and curb appeal.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/aluminum-windows/commercial-aluminum-window-installation.jpg",
              alt: "After aluminum window replacement",
            },
            {
              src: "/images/aluminum-windows/commercial-window.png",
              alt: "New energy efficient window units",
            },
            {
              src: "/images/aluminum-windows/residential-aluminum-windows-nc.jpg",
              alt: "Low-maintenance aluminum window frames",
            },
          ]}
          interval={2500}
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
          Benefits of Aluminum Windows
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
            <p className="text-black/70">
              Thermal-break frames and insulated glass reduce energy costs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Slim Modern Profiles</h3>
            <p className="text-black/70">
              Narrow sightlines maximize natural light and views.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Professional Installation
            </h3>
            <p className="text-black/70">
              Expert installers ensure a perfect fit and finish.
            </p>
          </div>
        </div>
      </section>

      <ProcessStepper
        steps={[
          {
            title: "Consultation & Measurement",
            description:
              "We evaluate existing openings and gather precise measurements.",
            details: [
              "On-site assessment",
              "Style and performance discussion",
              "Budget planning",
            ],
          },
          {
            title: "AutoCAD Design",
            description:
              "Detailed plans ensure windows fit and operate flawlessly.",
            details: [
              "Exact sizing and configuration",
              "Energy efficiency considerations",
            ],
          },
          {
            title: "Fabrication",
            description:
              "Windows are manufactured to specification with quality checks.",
            details: ["Custom frame production", "Glass unit assembly"],
          },
          {
            title: "Installation",
            description: "Certified technicians install and seal each unit.",
            details: [
              "Removal of old windows",
              "Weatherproofing and insulation",
            ],
          },
        ]}
      />

      <FAQ
        items={[
          {
            question: "Are aluminum windows energy efficient?",
            answer:
              "Yes, modern aluminum windows with thermal breaks and insulated glass can meet or exceed energy codes across North Carolina.",
          },
          {
            question: "Can you match existing window styles?",
            answer:
              "We offer a variety of frame colors and profiles to match or upgrade your home's look.",
          },
          {
            question: "How long does installation take?",
            answer:
              "Most homes are completed in one to two days depending on the number of windows and site conditions.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
