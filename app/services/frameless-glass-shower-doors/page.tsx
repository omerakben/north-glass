import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { Calculator } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frameless Glass Shower Doors – North Glass | North Carolina",
  description:
    "Custom frameless shower enclosures by North Glass across North Carolina. Professional interior architect design with AutoCAD precision. Free estimates.",
  alternates: { canonical: "/services/frameless-glass-shower-doors" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Frameless Glass Shower Door Installation",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
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
      <h1 className="text-3xl font-bold mb-4 text-center">
        Frameless Glass Shower Doors
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Transform your bathroom with beautiful frameless shower enclosures. We
        deliver comprehensive solutions from custom design through precision
        fabrication and professional installation.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/frameless-glass-shower-doors/after-shower-door.png",
              alt: "Modern frameless glass shower enclosure with premium hardware and architectural design elements",
            },
            {
              src: "/images/frameless-glass-shower-doors/before-shower-door.png",
              alt: "Traditional bathroom before frameless glass shower door installation by interior architects",
            },
            {
              src: "/images/frameless-glass-shower-doors/shower-big.png",
              alt: "Luxury frameless shower with tempered glass and precision architectural installation",
            },
          ]}
          interval={2000} // 2 seconds as requested
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-flex gap-2">
          <Calculator size={18} />
          Transform Your Bathroom - Free Estimate
        </a>
      </div>

      <ProcessStepper
        title="Our Professional Design & Installation Process"
        steps={[
          {
            title: "Initial Consultation & Assessment",
            description:
              "We begin with a comprehensive consultation to understand your vision, assess your bathroom space, and discuss design preferences.",
            details: [
              "In-home or virtual consultation",
              "Space assessment and feasibility review",
              "Design style and functional requirements discussion",
              "Budget and timeline planning",
            ],
          },
          {
            title: "Professional AutoCAD Design Development",
            description:
              "Our Interior Architects create precise digital designs using AutoCAD, ensuring perfect fit and optimal functionality.",
            details: [
              "Detailed measurements and site survey",
              "3D AutoCAD modeling and technical drawings",
              "Multiple design options and configurations",
              "Client review and design refinement",
            ],
          },
          {
            title: "Material Selection & Engineering",
            description:
              "We help you select the perfect glass type and hardware, while our team engineers the structural requirements.",
            details: [
              'Glass thickness and type selection (3/8" or 1/2" tempered)',
              "Hardware and finish options",
              "Structural engineering and load calculations",
              "Safety and code compliance verification",
            ],
          },
          {
            title: "Precision Fabrication",
            description:
              "Your shower enclosure is custom fabricated to exact specifications using premium materials and advanced techniques.",
            details: [
              "CNC glass cutting to AutoCAD specifications",
              "Edge polishing and safety tempering",
              "Hardware preparation and assembly",
              "Quality control and pre-installation inspection",
            ],
          },
          {
            title: "Expert Installation",
            description:
              "Our certified installers bring your design to life with meticulous attention to detail and craftsmanship.",
            details: [
              "Professional installation by certified technicians",
              "Precise alignment and leveling",
              "Seal application and waterproofing",
              "Hardware adjustment and operation testing",
            ],
          },
          {
            title: "Quality Assurance & Final Inspection",
            description:
              "We conduct a thorough inspection and provide you with care instructions for long-lasting performance.",
            details: [
              "Complete functionality and safety testing",
              "Final quality inspection and adjustments",
              "Client walk-through and operation demonstration",
              "Care instructions and warranty information",
            ],
          },
        ]}
      />

      <FAQ
        items={[
          {
            question: "What makes your shower door design process different?",
            answer:
              "Our professional Interior Architects create precise AutoCAD designs for every shower enclosure, ensuring perfect fit, optimal functionality, and aesthetic integration with your bathroom design across North Carolina.",
          },
          {
            question: "Do I get architectural drawings with my quote?",
            answer:
              "Yes, every free quote includes detailed AutoCAD drawings showing exact measurements, hardware placement, and installation specifications. This precision design approach ensures no surprises during installation.",
          },
          {
            question: "Do frameless shower doors leak?",
            answer:
              "When properly measured and installed using our AutoCAD precision process, frameless enclosures are designed with minimal gaps and optimal seals to keep water contained.",
          },
          {
            question:
              "How does your Interior Architect involvement benefit my project?",
            answer:
              "Our Interior Architects ensure your shower enclosure integrates seamlessly with your bathroom's aesthetic while optimizing functionality, storage, and safety considerations you might not have considered.",
          },
          {
            question:
              "How long does the complete design-to-installation process take?",
            answer:
              "From AutoCAD design consultation to installation, most projects take 2-3 weeks. The precision design phase ensures faster, more accurate installation with fewer adjustments needed on-site.",
          },
          {
            question: "What thickness of glass do you use?",
            answer:
              'Typically 3/8" or 1/2" tempered safety glass, with thickness determined through our AutoCAD structural analysis based on your specific enclosure configuration and size.',
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}
