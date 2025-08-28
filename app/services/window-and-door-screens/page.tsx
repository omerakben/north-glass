import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
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
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
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
      <h1 className="text-3xl font-bold mb-4 text-center">
        Window & Door Screens
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Keep bugs out and fresh air in with properly fitted screens. We repair
        torn screens, build custom sizes, and offer upgrades like pet-resistant
        mesh and solar screening to reduce heat and UV rays.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/window-and-door-screens/before-windows.png",
              alt: "Window screen installation",
            },
            {
              src: "/images/window-and-door-screens/before-stairs.png",
              alt: "Door screen repair",
            },
          ]}
          interval={2000}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Get a Free Estimate
        </a>
      </div>
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
