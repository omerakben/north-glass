import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glass Office Doors & Partitions – Raleigh–Durham",
  description:
    "Modern glass office doors, conference room partitions, and interior glass walls. Create open, bright commercial spaces.",
  alternates: { canonical: "/services/glass-office-doors" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Glass Office Doors & Partitions",
    category: "Commercial Glass Service",
    areaServed: { "@type": "AreaServed", name: "Raleigh–Durham–Cary, NC" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "919-000-0000",
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
      <h1 className="text-3xl font-bold mb-4">Glass Office Doors & Partitions</h1>
      <p className="max-w-prose text-[17px] mb-6">
        Transform your workspace with modern glass office solutions. We install
        frameless glass doors, conference room partitions, and interior glass
        walls that maintain privacy while creating an open, collaborative
        environment.
      </p>
      <a
        href="/request-quote"
         className="btn-primary"
      >
        Get a Free Estimate
      </a>
      <FAQ
        items={[
          {
            question: "Can glass office doors provide privacy?",
            answer:
              "Yes, we offer frosted, textured, and decorative film options that maintain privacy while allowing natural light. Smart glass that switches from clear to opaque is also available.",
          },
          {
            question: "Are glass partitions soundproof?",
            answer:
              "Our commercial-grade glass partitions significantly reduce sound transmission. For complete acoustic isolation, we can install double-glazed systems with specialized seals.",
          },
          {
            question: "Do you handle office buildouts?",
            answer:
              "We work with contractors and directly with businesses for office renovations, handling everything from single door replacements to complete glass partition systems.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}