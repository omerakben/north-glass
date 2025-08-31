import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Mirrors | North Glass | Interior Design Solutions",
  description:
    "Professional custom mirror design and installation from North Glass. Interior architect-designed solutions across North Carolina.",
  alternates: { canonical: "/services/mirrors" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Mirror Installation",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/mirrors",
    description:
      "Custom mirror fabrication and installation for bathrooms, home gyms, dance studios, and decorative applications.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function MirrorsPage() {
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
            Mirrors
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Custom Mirrors & Mirrored Walls
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Complete custom mirror solutions designed to transform your space. Our
        Interior Architects create precision AutoCAD designs for mirrors that
        enhance both function and aesthetics throughout your home.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/mirrors/custom-bathroom-mirror-design.jpg",
              alt: "Custom bathroom vanity mirror with precision-cut edges and architectural design by interior architects",
            },
            {
              src: "/images/mirrors/frameless-bathroom-mirror-modern.jpg",
              alt: "Modern frameless bathroom mirror installation with sleek mounting system in Raleigh",
            },
            {
              src: "/images/mirrors/luxury-vanity-mirror-cary.jpg",
              alt: "Luxury vanity mirror installation with custom lighting integration in Cary home",
            },
            {
              src: "/images/mirrors/bathroom-mirror-installation-raleigh.jpg",
              alt: "Professional bathroom mirror installation with architectural precision in Raleigh",
            },
            {
              src: "/images/mirrors/custom-bathroom-mirror-large.jpg",
              alt: "Large custom bathroom mirror with aluminum mounting system and design integration",
            },
            {
              src: "/images/mirrors/commercial-mirror.jpg",
              alt: "Commercial mirror installation with professional craftsmanship and durability",
            },
          ]}
          interval={4000}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Beautiful Custom Mirrors - Free Estimate
        </a>
      </div>
      <FAQ
        items={[
          {
            question: "What types of mirrors do you install?",
            answer:
              "We install bathroom vanity mirrors, full-wall gym mirrors, decorative mirrors, mirrored closet doors, and antique mirror finishes.",
          },
          {
            question: "Can you cut mirrors to custom shapes?",
            answer:
              "Yes, we can cut mirrors to virtually any shape and size, including circles, ovals, and custom geometric designs.",
          },
          {
            question: "Do you offer framed mirror options?",
            answer:
              "We provide both frameless polished-edge mirrors and can work with your chosen frame or recommend framing options.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
