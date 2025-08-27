import FAQ from "@/app/(site)/_components/FAQ";
import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Replacement & Repair – Raleigh–Durham",
  description:
    "Energy-efficient window glass replacement. Fix foggy windows, broken panes, and improve insulation. Free estimates.",
  alternates: { canonical: "/services/window-replacement" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window Glass Replacement & Repair",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "Raleigh–Durham–Cary, NC" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "919-000-0000",
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
      <h1 className="text-3xl font-bold mb-4 text-center">Window Replacement & Repair</h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Restore clarity and efficiency to your windows. We replace foggy
        dual-pane glass, repair broken windows, and upgrade to energy-efficient
        solutions that reduce your utility costs.
      </p>
      
      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/window-replacement/after-window-replacement.png",
              alt: "New energy-efficient windows",
            },
            {
              src: "/images/window-replacement/windows-replacment.png",
              alt: "Window replacement process",
            },
          ]}
          interval={2000}
          className="max-w-4xl w-full"
        />
      </div>
      
      <div className="text-center mb-8">
        <a
          href="/request-quote"
          className="btn-primary inline-block"
        >
          Get a Free Estimate
        </a>
      </div>
      <FAQ
        items={[
          {
            question: "Can you fix foggy windows without replacing the frame?",
            answer:
              "Yes, we can replace just the glass unit (IGU) in most cases, saving you money while restoring clarity and insulation.",
          },
          {
            question: "How much does window glass replacement cost?",
            answer:
              "Cost varies by size and glass type. Single pane repairs start around $150-300, while dual-pane units range from $300-600. We provide free estimates.",
          },
          {
            question: "Do you offer energy-efficient glass options?",
            answer:
              "Absolutely. We offer Low-E coatings, argon gas fills, and other energy-saving options that can reduce heating and cooling costs.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}