import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frameless Glass Shower Doors – Raleigh–Durham",
  description:
    "Custom frameless shower enclosures that elevate your bathroom. Free estimates.",
  alternates: { canonical: "/services/frameless-glass-shower-doors" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Frameless Glass Shower Door Installation",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "Raleigh–Durham–Cary, NC" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "919-000-0000",
    },
    url: "https://northglassnc.com/services/frameless-glass-shower-doors",
    description:
      "Custom frameless shower door design and installation including measurement, fabrication and expert install.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function FramelessShowersPage() {
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
            Frameless Glass Shower Doors
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Frameless Glass Shower Doors</h1>
      <p className="max-w-prose text-[17px] mb-6">
        Elevate your bathroom with sleek, custom frameless glass. We measure
        precisely, fabricate quality tempered glass, and install with care.
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
            question: "Do frameless shower doors leak?",
            answer:
              "When properly measured and installed, frameless enclosures are designed with minimal gaps and seals to keep water in.",
          },
          {
            question: "How long does installation take?",
            answer:
              "Most projects are installed in a day after glass fabrication (typically 1–2 weeks from measure).",
          },
          {
            question: "What thickness of glass do you use?",
            answer:
              'Typically 3/8" or 1/2" tempered safety glass, depending on configuration and size.',
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
