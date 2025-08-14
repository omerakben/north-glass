import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glass Table Tops & Shelves – Raleigh–Durham",
  description:
    "Custom glass table tops, protective covers, and floating shelves. Cut to size with polished edges and various thickness options.",
  alternates: { canonical: "/services/glass-table-tops-and-shelves" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Glass Table Tops & Shelves",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "Raleigh–Durham–Cary, NC" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "919-000-0000",
    },
    url: "https://northglassnc.com/services/glass-table-tops-and-shelves",
    description:
      "Custom-cut glass table tops, protective furniture covers, and decorative glass shelving for residential and commercial spaces.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function TableTopsShelvesPage() {
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
            Glass Table Tops & Shelves
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Glass Table Tops & Shelves</h1>
      <p className="max-w-prose text-[17px] mb-6">
        Protect your furniture or create stunning displays with custom glass.
        We fabricate table tops, protective covers, and floating shelves in any
        size or shape with beautifully polished edges.
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
            question: "What thickness glass should I choose for a table top?",
            answer:
              "For most dining and coffee tables, we recommend 3/8\" to 1/2\" tempered glass. Smaller accent tables can use 1/4\" glass. We'll help you choose based on your table size and use.",
          },
          {
            question: "Can you cut glass to match my table shape?",
            answer:
              "Yes, we can cut glass to any shape including rectangles, circles, ovals, and custom shapes. We template unusual shapes to ensure a perfect fit.",
          },
          {
            question: "What edge finishes are available?",
            answer:
              "We offer flat polished, beveled, pencil round, and ogee edges. Each provides a different aesthetic from modern to traditional.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}