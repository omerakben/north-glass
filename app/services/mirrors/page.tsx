import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { Award, Calculator, PenTool, Ruler, Settings, ShieldCheck } from "lucide-react";
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
      telephone: "+1 (984) 900-6201",
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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Custom Mirrors & Mirrored Walls</h1>
        <p className="text-xl text-primary-600 mb-4 font-medium">
          Interior Architect Design • Precision Cut • Professional Install
        </p>
        <p className="max-w-prose text-[17px] mb-6 mx-auto">
          Elevate bathrooms, gyms, and living spaces with custom mirrors cut to
          size and designed to fit perfectly. We provide AutoCAD layouts,
          premium materials, and clean, professional installation.
        </p>
      </div>

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
        <a href="/request-quote" className="btn-primary inline-flex gap-2">
          <Calculator size={18} /> Beautiful Custom Mirrors - Free Estimate
        </a>
      </div>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why North Glass Mirrors?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenTool className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Design Precision</h3>
            <p className="text-black/70">AutoCAD drawings guarantee exact sizing around tile, outlets, and fixtures.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safety Options</h3>
            <p className="text-black/70">Safety backing and tempered options where appropriate for added protection.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Installation</h3>
            <p className="text-black/70">Professional mounting systems with polished edges and seamless finish.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Shapes</h3>
            <p className="text-black/70">Cut to size, with notches and cutouts for a perfect fit every time.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Finish</h3>
            <p className="text-black/70">Crisp, polished edges and clear reflection with quality control.</p>
          </div>
        </div>
      </section>

      <ProcessStepper
        title="Our Mirror Design & Install Process"
        steps={[
          {
            title: "Consultation & Measurement",
            description:
              "We review your space, style, and functional needs, then take precise measurements.",
            details: ["Placement and lighting review", "Field measurements", "Edge and finish preferences"],
          },
          {
            title: "AutoCAD Layout",
            description:
              "We create a detailed drawing to coordinate edges, cutouts, and alignment.",
            details: ["Outlet and sconce allowances", "Exact sizing around tile", "Mounting approach"],
          },
          {
            title: "Fabrication",
            description:
              "Your mirror is cut, notched, and polished to specification with quality checks.",
            details: ["Edge polishing", "Cutouts/notches", "Safety backing as needed"],
          },
          {
            title: "Installation",
            description:
              "We mount, level, and secure the mirror using professional adhesives and hardware.",
            details: ["Clean surface prep", "Secure mounting", "Final cleaning"],
          },
        ]}
      />
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
