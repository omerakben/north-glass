import ProcessStepper from "@/components/ProcessStepper";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architectural Design Services | Interior Architects | North Glass",
  description:
    "Professional interior architect design services with AutoCAD precision across North Carolina. Complete glass and aluminum system design from concept to installation.",
  alternates: { canonical: "/services/architectural-design-services" },
  robots: { index: true, follow: true },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Architectural Design Services",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
      email: "info@northglassnc.com",
      url: "https://northglassnc.com/",
      areaServed: "North Carolina",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raleigh",
        addressRegion: "NC",
        addressCountry: "US",
      },
    },
    serviceType: "Interior Architect Consultation",
    description:
      "Professional interior architect design services with AutoCAD precision for glass and aluminum systems across North Carolina. Complete architectural integration from concept to installation.",
    category: [
      "Interior Architecture",
      "AutoCAD Design",
      "Glass System Design",
      "Aluminum System Design",
      "Architectural Consultation",
    ],
    serviceArea: {
      "@type": "State",
      name: "North Carolina",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architectural Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AutoCAD Design Consultation",
            description:
              "Detailed architectural drafting using AutoCAD for precise glass and aluminum system planning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Architecture Planning",
            description:
              "Professional interior architect consultation for residential and commercial spaces",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complete System Design",
            description:
              "Comprehensive design services from concept through installation for glass and aluminum projects",
          },
        },
      ],
    },
    performer: {
      "@type": "Person",
      name: "Professional Interior Architect Team",
      jobTitle: "Licensed Interior Architect",
      hasCredential: [
        "Licensed Interior Architecture",
        "AutoCAD Certification",
        "Professional Design Consultation",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function ArchitecturalDesignServicesPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <ServiceJsonLd />

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
            Architectural Design Services
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-center">
        Professional Architectural Design Services
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Our Professional Interior Architects provide complete design solutions
        using AutoCAD precision for glass and aluminum systems across North
        Carolina. From concept to installation, we deliver comprehensive
        architectural design services.
      </p>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-[var(--brand-grey)] rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-teal)]">
            Interior Architect Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">
                Professional Design Process
              </h3>
              <p className="text-[16px] text-gray-700 mb-4">
                Our Professional Interior Architects use advanced AutoCAD
                software to create precise architectural drawings and 3D
                visualizations for your glass and aluminum projects. Every
                design is meticulously planned to ensure perfect integration
                with your space.
              </p>
              <ul className="text-[16px] text-gray-700 space-y-2">
                <li>• AutoCAD architectural drawings</li>
                <li>• 3D visualization and rendering</li>
                <li>• Structural analysis and planning</li>
                <li>• Code compliance verification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                Complete System Design
              </h3>
              <p className="text-[16px] text-gray-700 mb-4">
                We don&apos;t just install – we design complete systems. Our
                Interior Architects consider every aspect of your project, from
                aesthetic appeal to structural integrity, ensuring your glass
                and aluminum systems are both beautiful and functional.
              </p>
              <ul className="text-[16px] text-gray-700 space-y-2">
                <li>• Comprehensive system planning</li>
                <li>• Material specification and sourcing</li>
                <li>• Integration with existing architecture</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[var(--brand-teal)]">
          Our AutoCAD Design Workflow
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--brand-teal)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Site Analysis</h3>
            <p className="text-sm text-gray-600">
              Detailed measurement and architectural assessment of your space
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--brand-teal)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">AutoCAD Design</h3>
            <p className="text-sm text-gray-600">
              Precision CAD drawings with 3D modeling and visualization
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--brand-teal)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Review & Refine</h3>
            <p className="text-sm text-gray-600">
              Collaborative review process with adjustments to perfect the
              design
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--brand-teal)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2">Installation Planning</h3>
            <p className="text-sm text-gray-600">
              Detailed installation specifications and project management
            </p>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[var(--brand-teal)]">
          Architectural Design Specialties
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Residential Glass Systems</h3>
            <p className="text-sm text-gray-600 mb-4">
              Custom shower enclosures, window configurations, and mirror
              installations designed for optimal aesthetics and functionality.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Frameless shower design</li>
              <li>• Window replacement planning</li>
              <li>• Custom mirror layouts</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Commercial Glass & Aluminum</h3>
            <p className="text-sm text-gray-600 mb-4">
              Professional storefront design, office partitions, and aluminum
              curtain wall systems for commercial applications.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Storefront system design</li>
              <li>• Office partition planning</li>
              <li>• Aluminum curtain walls</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-3">
              Structural Glass Applications
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Advanced structural glass systems including railings, canopies,
              and architectural glazing with aluminum support systems.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Glass railing systems</li>
              <li>• Structural glazing</li>
              <li>• Aluminum support design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Our Architects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[var(--brand-teal)]">
          Why Choose Our Interior Architects?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">✓</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Professional Certification
            </h3>
            <p className="text-gray-600">
              Licensed Interior Architects with extensive experience in glass
              and aluminum system design
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">AutoCAD Precision</h3>
            <p className="text-gray-600">
              Industry-leading AutoCAD software ensures millimeter-perfect
              measurements and professional documentation
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">★</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Integration</h3>
            <p className="text-gray-600">
              Seamless integration from design conception through final
              installation and project completion
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessStepper
        title="Our Professional Architectural Design Process"
        steps={[
          {
            title: "Project Discovery & Site Analysis",
            description:
              "We begin with comprehensive project discovery, understanding your vision, requirements, and conducting detailed site analysis.",
            details: [
              "Initial consultation to understand project goals and vision",
              "Comprehensive site measurement and analysis",
              "Building code and regulatory requirements review",
              "Space functionality and flow assessment",
              "Budget and timeline establishment",
            ],
          },
          {
            title: "Conceptual Design Development",
            description:
              "Our Interior Architects develop initial design concepts, exploring multiple approaches to achieve your vision.",
            details: [
              "Multiple conceptual design approaches",
              "Space planning and layout optimization",
              "Material and system selection preliminary review",
              "Initial 3D visualization and sketches",
              "Client feedback integration and refinement",
            ],
          },
          {
            title: "AutoCAD Technical Documentation",
            description:
              "Detailed AutoCAD drawings and technical specifications are created with precision engineering and compliance verification.",
            details: [
              "Comprehensive AutoCAD technical drawings",
              "Detailed fabrication and installation specifications",
              "Structural engineering calculations and load analysis",
              "Building code compliance verification",
              "Material specifications and sourcing documentation",
            ],
          },
          {
            title: "3D Modeling & Visualization",
            description:
              "Advanced 3D modeling brings your design to life, allowing you to visualize the final result before fabrication begins.",
            details: [
              "Photorealistic 3D modeling and rendering",
              "Virtual walk-throughs and perspective views",
              "Material and finish visualization",
              "Lighting analysis and optimization",
              "Client presentation and design approval",
            ],
          },
          {
            title: "Design Refinement & Approval",
            description:
              "Collaborative refinement process ensures every detail meets your expectations and functional requirements.",
            details: [
              "Detailed client review and feedback sessions",
              "Design modifications and optimization",
              "Final material and finish selections",
              "Cost estimation and value engineering",
              "Final design approval and sign-off",
            ],
          },
          {
            title: "Fabrication Documentation & Project Handoff",
            description:
              "Complete fabrication drawings and project documentation are prepared for seamless execution.",
            details: [
              "Shop drawings and fabrication specifications",
              "Installation sequencing and methodology",
              "Quality control standards and inspection criteria",
              "Project timeline and milestone documentation",
              "Handoff to fabrication and installation teams",
            ],
          },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-[var(--brand-teal)] text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready for Professional Architectural Design?
        </h2>
        <p className="text-lg mb-6">
          Get a free AutoCAD design consultation with our Professional Interior
          Architects
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/request-quote"
            className="inline-flex items-center px-8 py-3 bg-white text-[var(--brand-teal)] rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Design Consultation
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-[var(--brand-teal)] transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
