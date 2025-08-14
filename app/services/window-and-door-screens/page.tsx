import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window & Door Screen Repair – Raleigh–Durham",
  description:
    "Screen repair and replacement for windows and doors. Fix tears, upgrade to pet-resistant screens, or install new screens.",
  alternates: { canonical: "/services/window-and-door-screens" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window & Door Screen Repair",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "Raleigh–Durham–Cary, NC" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "919-000-0000",
    },
    url: "https://northglassnc.com/services/window-and-door-screens",
    description:
      "Professional screen repair and replacement for windows, doors, and porches including pet-resistant and solar screen options.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function ScreensPage() {
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
            Window & Door Screens
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Window & Door Screens</h1>
      <p className="max-w-prose text-[17px] mb-6">
        Keep bugs out and fresh air in with properly fitted screens. We repair
        torn screens, build custom sizes, and offer upgrades like pet-resistant
        mesh and solar screening to reduce heat and UV rays.
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
            question: "Do you offer pet-resistant screens?",
            answer:
              "Yes, we install heavy-duty pet screens that are 7 times stronger than standard screens, perfect for homes with dogs or cats.",
          },
          {
            question: "Can you make custom-sized screens?",
            answer:
              "Absolutely. We fabricate screens to fit any window or door opening, including unusual shapes and oversized applications.",
          },
          {
            question: "What is solar screening?",
            answer:
              "Solar screens block up to 90% of UV rays and reduce heat gain, lowering cooling costs while maintaining visibility from inside.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}