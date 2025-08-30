import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pergolas – Aluminum Pergola Design & Install | North Glass",
  description:
    "Custom aluminum pergolas for commercial spaces across North Carolina. Shade structures designed and installed by professionals.",
  alternates: { canonical: "/services/pergolas" },
  keywords: [
    "aluminum pergola",
    "commercial pergola",
    "shade structure",
    "North Carolina pergolas",
  ],
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aluminum Pergola Design & Installation",
    category: "Commercial Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/pergolas",
    description:
      "Design and installation of custom aluminum pergolas and shade structures for commercial properties and hospitality projects.",
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function PergolasPage() {
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
            Pergolas
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">Pergolas</h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Enhance outdoor areas with durable aluminum pergolas. Ideal for
        hospitality, retail, and office campuses seeking comfortable shade and a
        premium look.
      </p>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Get Free Estimate
        </a>
      </div>

      <section className="max-w-3xl mx-auto prose">
        <h2>Commercial-Grade Pergolas</h2>
        <ul>
          <li>Aluminum structures for strength and longevity</li>
          <li>Fixed or adjustable louver options</li>
          <li>Integrated lighting and privacy screens available</li>
          <li>Designed for restaurants, hotels, and shared outdoor spaces</li>
        </ul>
        <h3>Turnkey Delivery</h3>
        <p>
          We handle design, permitting coordination, and professional
          installation statewide. Ask about our hotel and hospitality project
          experience.
        </p>
      </section>
      <ServiceJsonLd />
    </main>
  );
}

