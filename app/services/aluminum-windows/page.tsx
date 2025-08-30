import type { Metadata } from "next";
import Link from "next/link";
import AutoCarousel from "@/app/(site)/_components/AutoCarousel";

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
        team measures, fabricates, and installs precision-fit systems for
        better comfort, security, and curb appeal.
      </p>

      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/window-replacement/after-window-replacement.png",
              alt: "After aluminum window replacement",
            },
            {
              src: "/images/window-replacement/windows-replacment.png",
              alt: "New energy efficient window units",
            },
            {
              src: "/images/window-replacement/aluminum-maintenance.png",
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

      <section className="max-w-3xl mx-auto prose">
        <h2>Why Aluminum Windows?</h2>
        <ul>
          <li>Strong, slim profiles maximize glass and light</li>
          <li>Low maintenance and long service life</li>
          <li>Excellent weather resistance across North Carolina climates</li>
          <li>Available in thermal break options for improved efficiency</li>
        </ul>
        <h3>Professional Installation</h3>
        <p>
          We handle everything from measurement to installation and sealing, and
          we remove and dispose of old units responsibly.
        </p>
      </section>
      <ServiceJsonLd />
    </main>
  );
}

