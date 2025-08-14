import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sliding Glass Patio Doors – Raleigh–Durham",
  description:
    "New sliding glass door installation and replacement. Enhance your indoor-outdoor living with energy-efficient patio doors.",
  alternates: { canonical: "/services/sliding-glass-patio-doors" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sliding Glass Patio Door Installation",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "Raleigh–Durham–Cary, NC" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "919-000-0000",
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
      <h1 className="text-3xl font-bold mb-4">Sliding Glass Patio Doors</h1>
      <p className="max-w-prose text-[17px] mb-6">
        Open your home to the outdoors with beautiful sliding glass doors. We
        install and replace patio doors with smooth-gliding, energy-efficient
        units that provide seamless indoor-outdoor living.
      </p>
      <a
        href="/request-quote"
        className="inline-flex items-center h-11 px-5 rounded-md text-white"
        style={{ backgroundColor: "var(--brand-turquoise)", color: "#00353f" }}
      >
        Get a Free Estimate
      </a>
      <FAQ
        items={[
          {
            question: "Can you replace just the glass in my sliding door?",
            answer:
              "Yes, if the frame is in good condition, we can replace just the glass panel, saving you money while restoring clarity and insulation.",
          },
          {
            question: "What brands of sliding doors do you install?",
            answer:
              "We work with all major brands and can source doors to match your budget and style preferences, from standard to premium options.",
          },
          {
            question: "How long does sliding door installation take?",
            answer:
              "Most sliding door installations are completed in 4-6 hours, including removal of the old door and proper sealing of the new unit.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}