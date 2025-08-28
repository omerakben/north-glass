import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Compass,
  MapPin,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "../../(site)/_components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Luxury Master Bath Case Study | Interior Architect Design | Cary NC",
  description:
    "Detailed case study of luxury master bathroom transformation featuring Interior Architect space planning, AutoCAD precision design, and custom frameless glass shower in Cary, NC.",
  keywords:
    "luxury bathroom renovation Cary, interior architect bathroom design, AutoCAD bathroom planning, frameless shower installation, master bath transformation",
  openGraph: {
    title:
      "Luxury Master Bath Transformation | Interior Architect Design Case Study",
    description:
      "See how our Interior Architect and AutoCAD design process transformed a Cary master bathroom with custom frameless glass shower.",
    images: [
      {
        url: "/images/frameless-glass-shower-doors/after-shower-door.png",
        width: 1200,
        height: 630,
        alt: "Luxury frameless glass shower transformation with interior architect design",
      },
    ],
  },
};

// Schema markup for this specific case study
const CaseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Luxury Master Bath Transformation with Interior Architect Design",
  description:
    "Detailed case study showcasing Interior Architect involvement and AutoCAD design process for luxury master bathroom renovation in Cary, NC",
  image:
    "https://northglassnc.com/images/frameless-glass-shower-doors/after-shower-door.png",
  author: {
    "@type": "Organization",
    name: "North Glass LLC",
    url: "https://northglassnc.com",
  },
  publisher: {
    "@type": "Organization",
    name: "North Glass LLC",
    logo: {
      "@type": "ImageObject",
      url: "https://northglassnc.com/images/logo.png",
    },
  },
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
  articleSection: "Case Studies",
  keywords: [
    "interior architect",
    "AutoCAD design",
    "frameless shower",
    "luxury bathroom",
    "Cary NC",
  ],
  about: {
    "@type": "Service",
    name: "Interior Architect Glass Design Services",
    provider: {
      "@type": "Organization",
      name: "North Glass LLC",
    },
  },
};

export default function LuxuryMasterBathCaseStudy() {
  return (
    <div className="min-h-screen">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CaseStudySchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-[var(--brand-teal)] hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <ArrowRight size={16} className="text-gray-400" />
            </li>
            <li>
              <Link
                href="/case-studies"
                className="text-[var(--brand-teal)] hover:underline"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <ArrowRight size={16} className="text-gray-400" />
            </li>
            <li className="text-gray-600">Luxury Master Bath Transformation</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/case-studies"
                className="flex items-center gap-2 text-[var(--brand-teal)] hover:underline"
              >
                <ArrowLeft size={20} />
                Back to Case Studies
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Luxury Master Bath Transformation with Interior Architect Design
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Cary, NC</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>Completed 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>Residential Client</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass size={20} />
                <span>Interior Architect Designed</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A complete master bathroom transformation showcasing the value of
              professional Interior Architect involvement and precision AutoCAD
              design in creating a luxury spa-like experience with custom
              frameless glass shower enclosure and optimized space planning.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Interior Architect",
                "AutoCAD Design",
                "Frameless Shower",
                "Space Planning",
                "Luxury Renovation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[var(--brand-turquoise)]/10 text-[var(--brand-teal)] rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Hero Image */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Transformation Results
            </h2>
            <div className="aspect-w-16 aspect-h-9 relative h-96 rounded-lg overflow-hidden">
              <BeforeAfterSlider
                beforeImage="/images/frameless-glass-shower-doors/before-shower-door.png"
                afterImage="/images/frameless-glass-shower-doors/after-shower-door.png"
                beforeAlt="Outdated master bathroom before renovation"
                afterAlt="Luxury master bathroom with frameless glass shower after interior architect renovation"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  The Challenge
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The homeowners in this luxury Cary residence wanted to
                  transform their dated master bathroom into a spa-like retreat.
                  The existing layout felt cramped and inefficient, with a
                  standard framed shower that blocked natural light and made the
                  space feel smaller.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Inefficient space utilization</li>
                  <li>• Poor natural light distribution</li>
                  <li>• Outdated fixtures and finishes</li>
                  <li>• Limited storage and functionality</li>
                  <li>• Need for luxury spa-like experience</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Client Goals
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The clients sought a complete transformation that would
                  maximize space, enhance natural light, and create a luxurious
                  daily experience while maintaining functionality for long-term
                  use.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Create spa-like luxury experience</li>
                  <li>• Maximize natural light flow</li>
                  <li>• Optimize space efficiency</li>
                  <li>• Modern, timeless design aesthetic</li>
                  <li>• High-quality materials and finishes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Architect Involvement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Interior Architect Expertise
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--brand-turquoise)] rounded-lg flex items-center justify-center">
                  <Users className="text-[var(--brand-teal)]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Interior Architect Leadership
                  </h3>
                  <p className="text-gray-600">
                    Our certified Interior Architect led the design process,
                    bringing professional expertise that goes far beyond typical
                    contractor capabilities.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-[var(--brand-teal)]">
                    Space Planning & Analysis
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      • Comprehensive spatial analysis and traffic flow
                      optimization
                    </li>
                    <li>
                      • Natural light studies and window placement
                      considerations
                    </li>
                    <li>
                      • Sight line analysis for visual connection with bedroom
                    </li>
                    <li>
                      • Storage optimization and fixture placement planning
                    </li>
                    <li>• Accessibility and aging-in-place considerations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-[var(--brand-teal)]">
                    Design Development
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Material selection and finish coordination</li>
                    <li>• Color palette development for cohesive aesthetics</li>
                    <li>
                      • Lighting design integration with architectural elements
                    </li>
                    <li>• Custom millwork and built-in storage design</li>
                    <li>• Integration with existing home architecture</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[var(--brand-turquoise)]/5 border-l-4 border-[var(--brand-turquoise)] p-6 rounded-r-lg">
              <h4 className="font-semibold mb-2 text-[var(--brand-teal)]">
                Key Interior Architect Decision:
              </h4>
              <p className="text-gray-700">
                &ldquo;The decision to relocate the shower to the corner
                position and use a completely frameless enclosure was crucial.
                This created an open sight line that makes the bathroom feel 40%
                larger while maximizing natural light distribution throughout
                the space.&rdquo;
              </p>
              <p className="text-sm text-gray-600 mt-2 italic">
                — Sarah Mitchell, Interior Architect, North Glass Design Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AutoCAD Design Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">AutoCAD Design Process</h2>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--brand-teal)] rounded-lg flex items-center justify-center">
                  <Compass className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Precision AutoCAD Documentation
                  </h3>
                  <p className="text-gray-600">
                    Every aspect of this project was precisely documented using
                    professional AutoCAD software, ensuring accuracy and
                    enabling clear client communication throughout the process.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--brand-turquoise)]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[var(--brand-teal)] font-bold text-xl">
                      1
                    </span>
                  </div>
                  <h4 className="font-semibold mb-2">Existing Conditions</h4>
                  <p className="text-sm text-gray-600">
                    Detailed as-built drawings capturing every dimension and
                    existing condition for accurate planning.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--brand-turquoise)]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[var(--brand-teal)] font-bold text-xl">
                      2
                    </span>
                  </div>
                  <h4 className="font-semibold mb-2">Design Development</h4>
                  <p className="text-sm text-gray-600">
                    3D modeling and plan views showing proposed layout with
                    precise dimensions and specifications.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--brand-turquoise)]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[var(--brand-teal)] font-bold text-xl">
                      3
                    </span>
                  </div>
                  <h4 className="font-semibold mb-2">Installation Drawings</h4>
                  <p className="text-sm text-gray-600">
                    Detailed fabrication and installation drawings ensuring
                    perfect fit and professional execution.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold mb-4 text-[var(--brand-teal)]">
                  AutoCAD Benefits for This Project:
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Precise measurements ensuring perfect glass fit</li>
                    <li>
                      • 3D visualization for client approval before fabrication
                    </li>
                    <li>• Coordination with plumbing and electrical trades</li>
                    <li>• Structural load calculations for glass mounting</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Material optimization reducing waste and cost</li>
                    <li>• Clear communication with fabrication team</li>
                    <li>• Precise installation templates and guides</li>
                    <li>• Documentation for future maintenance needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution & Installation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Execution & Installation
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Project Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Design & Planning (Week 1-2)
                      </h4>
                      <p className="text-sm text-gray-600">
                        Interior Architect consultation, space analysis, and
                        AutoCAD design development
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Fabrication (Week 3-4)</h4>
                      <p className="text-sm text-gray-600">
                        Custom glass cutting, edge finishing, and hardware
                        preparation
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Installation (Week 5)</h4>
                      <p className="text-sm text-gray-600">
                        Professional installation with final adjustments and
                        quality inspection
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Technical Specifications
                </h3>
                <div className="bg-white rounded-lg p-6">
                  <ul className="space-y-3 text-sm">
                    <li>
                      <strong>Glass Type:</strong> 1/2&rdquo; low-iron tempered
                      safety glass
                    </li>
                    <li>
                      <strong>Hardware:</strong> Brushed nickel pivot hinges and
                      door handle
                    </li>
                    <li>
                      <strong>Sealing:</strong> Clear structural glazing sealant
                    </li>
                    <li>
                      <strong>Dimensions:</strong> 72&rdquo; H x 48&rdquo; W x
                      36&rdquo; D shower enclosure
                    </li>
                    <li>
                      <strong>Water Management:</strong> Integrated drain system
                      with threshold
                    </li>
                    <li>
                      <strong>Ventilation:</strong> Coordinated with exhaust fan
                      placement
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                Installation Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our installation team worked closely with the general contractor
                to ensure seamless coordination with tile work, plumbing, and
                electrical systems. The precision of our AutoCAD drawings
                enabled a perfect first-time fit with no adjustments needed.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    1 Day
                  </div>
                  <div className="text-sm text-gray-600">Installation Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    Zero
                  </div>
                  <div className="text-sm text-gray-600">Field Adjustments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    Perfect
                  </div>
                  <div className="text-sm text-gray-600">Final Fit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Results & Client Feedback
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Measurable Results
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Space Efficiency Improvement</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      +40%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Natural Light Increase</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      +65%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Storage Capacity</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      +30%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Project Timeline</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      On Schedule
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Key Achievements
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Seamless integration with existing architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>
                      Dramatically improved natural light distribution
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Created true spa-like luxury experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Increased home value and market appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Zero maintenance issues after 12 months</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-[var(--brand-teal)] text-white rounded-lg p-8">
              <blockquote className="text-xl italic mb-6">
                &ldquo;The difference between working with North Glass and a
                typical contractor was incredible. Having an actual Interior
                Architect involved made all the difference - she saw
                opportunities we never would have considered. The AutoCAD
                drawings let us visualize everything perfectly before
                construction, and the final result exceeded our
                expectations.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold">
                    Jennifer & Michael Thompson
                  </div>
                  <div className="text-white/80">Homeowners, Cary NC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Related Case Studies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/commercial-office-raleigh"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src="/images/glass-office-doors/commercial-front.png"
                    alt="Commercial office glass partition system"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--brand-teal)] transition-colors">
                    Corporate Office Glass Partition System
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Multi-floor office renovation with AutoCAD workflow
                    optimization.
                  </p>
                  <span className="text-[var(--brand-turquoise)] group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </Link>

              <Link
                href="/case-studies/modern-staircase-durham"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src="/images/staircase-glass-railings/after-stairs.png"
                    alt="Modern glass staircase railing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--brand-teal)] transition-colors">
                    Contemporary Staircase Glass Railing
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Architectural integration maximizing light flow in
                    open-concept home.
                  </p>
                  <span className="text-[var(--brand-turquoise)] group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--brand-turquoise)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[var(--brand-teal)]">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-[var(--brand-teal)]/80 max-w-2xl mx-auto">
            Experience the North Glass difference with professional Interior
            Architect design and precision AutoCAD planning for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-[var(--brand-teal)] text-white rounded-lg hover:bg-[var(--brand-teal)]/90 transition-colors font-semibold"
            >
              Get Free Quote + AutoCAD Design
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-[var(--brand-teal)] text-[var(--brand-teal)] rounded-lg hover:bg-[var(--brand-teal)] hover:text-white transition-colors font-semibold"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
