import FAQ from "@/app/(site)/_components/FAQ";
import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Storefront Glass – Raleigh–Durham",
  description:
    "Storefront glass installation and repair for businesses. Emergency board-up, glass replacement, and new storefront systems.",
  alternates: { canonical: "/services/commercial-storefronts" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Storefront Glass Services",
    category: "Commercial Glass Service",
    areaServed: { "@type": "AreaServed", name: "Raleigh–Durham–Cary, NC" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "919-000-0000",
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
      <h1 className="text-3xl font-bold mb-4 text-center">Commercial Storefronts</h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Keep your business looking professional with our storefront glass
        services. From new installations to emergency repairs, we help retail
        stores, restaurants, and offices maintain an inviting appearance that
        attracts customers.
      </p>
      
      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/commercial-storefronts/commercial-front.png",
              alt: "Commercial glass storefront",
            },
            {
              src: "/images/commercial-storefronts/shower-big.png",
              alt: "Storefront installation",
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
            question: "Do you offer emergency glass repair?",
            answer:
              "Yes, we provide emergency board-up services and expedited glass replacement to secure your business and minimize downtime.",
          },
          {
            question: "Can you match existing storefront systems?",
            answer:
              "We work with all major storefront systems and can source matching materials to maintain your building's consistent appearance.",
          },
          {
            question: "What about energy-efficient options?",
            answer:
              "We offer insulated glass units, Low-E coatings, and tinted options that reduce energy costs while maintaining visibility and aesthetics.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}