import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
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
      telephone: "+1 (984) 268-8490",
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
      <h1 className="text-3xl font-bold mb-4 text-center">
        Commercial Storefronts
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Complete commercial glass storefront systems designed for durability and
        visual impact. From architectural consultation and AutoCAD design
        through fabrication and installation, we deliver comprehensive business
        solutions.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/commercial-storefronts/commercial-front.png",
              alt: "Modern glass and aluminum commercial storefront with architectural design integration",
            },
            {
              src: "/images/commercial-storefronts/shower-big.png",
              alt: "Professional aluminum storefront installation with custom glass panels",
            },
          ]}
          interval={2000}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Enhance Your Business - Free Estimate
        </a>
      </div>
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
