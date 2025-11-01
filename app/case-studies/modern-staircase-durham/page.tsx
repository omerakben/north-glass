import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Compass,
  Home,
  MapPin,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "../../(site)/_components/BeforeAfterSlider";

export const metadata: Metadata = {
  title:
    "Modern Staircase Glass Railing Case Study | Architectural Integration | Durham NC",
  description:
    "Detailed case study of contemporary staircase glass railing featuring Interior Architect light optimization, structural integration, and AutoCAD design in Durham, NC open-concept home.",
  keywords:
    "modern staircase glass railing Durham, architectural integration, light optimization design, open concept staircase, interior architect structural design",
  openGraph: {
    title:
      "Contemporary Staircase Glass Railing | Architectural Integration Case Study",
    description:
      "See how our Interior Architect maximized light flow and structural integration in a Durham open-concept home staircase renovation.",
    images: [
      {
        url: "/images/staircase-glass-railings/after-stairs.png",
        width: 1200,
        height: 630,
        alt: "Modern glass staircase railing with architectural integration in Durham open-concept home",
      },
    ],
  },
};

// Schema markup for this specific case study
const CaseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Contemporary Staircase Glass Railing with Architectural Integration",
  description:
    "Detailed case study showcasing Interior Architect light optimization and structural integration for modern staircase glass railing in Durham, NC",
  image:
    "https://northglassnc.com/images/staircase-glass-railings/after-stairs.png",
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
      url: "https://northglassnc.com/images/north-glass-logo.png",
    },
  },
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
  articleSection: "Case Studies",
  keywords: [
    "staircase design",
    "glass railings",
    "architectural integration",
    "light optimization",
    "Durham NC",
  ],
  about: {
    "@type": "Service",
    name: "Architectural Glass Railing Design Services",
    provider: {
      "@type": "Organization",
      name: "North Glass LLC",
    },
  },
};

export default function ModernStaircaseDurhamCaseStudy() {
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
            <li className="text-gray-600">
              Contemporary Staircase Glass Railing
            </li>
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
              Contemporary Staircase Glass Railing with Architectural
              Integration
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Durham, NC</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>Completed 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Home size={20} />
                <span>Residential Client</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass size={20} />
                <span>Interior Architect Designed</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A sophisticated open-concept home renovation demonstrating how
              Interior Architect expertise in structural integration and light
              optimization can transform a traditional staircase into a stunning
              architectural feature that enhances spatial flow and maximizes
              natural light distribution.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Staircase Design",
                "Light Optimization",
                "Open Concept",
                "Architectural Planning",
                "Structural Integration",
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
              Architectural Transformation
            </h2>
            <div className="aspect-w-16 aspect-h-9 relative h-96 rounded-lg overflow-hidden">
              <BeforeAfterSlider
                beforeImage="/images/staircase-glass-railings/before-stairs.png"
                afterImage="/images/staircase-glass-railings/after-stairs.png"
                beforeAlt="Traditional staircase with closed railings before renovation"
                afterAlt="Modern glass staircase railing with architectural integration maximizing light flow"
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
                  This contemporary Durham home featured an open-concept design
                  that was hindered by a traditional staircase with solid
                  railings that blocked natural light flow and created visual
                  barriers between the main living areas and second floor.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Traditional solid railings blocking light transmission
                  </li>
                  <li>• Visual separation reducing open-concept feeling</li>
                  <li>
                    • Structural constraints from existing staircase design
                  </li>
                  <li>• Safety and building code compliance requirements</li>
                  <li>
                    • Integration with existing hardwood and modern finishes
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Design Goals
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The homeowners wanted to maximize the architectural potential
                  of their open-concept space by creating visual continuity
                  between floors while maintaining safety and enhancing the
                  sophisticated aesthetic of their contemporary home.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Maximize natural light flow between floors</li>
                  <li>• Create unobstructed sight lines across spaces</li>
                  <li>• Maintain safety without compromising aesthetics</li>
                  <li>• Integrate seamlessly with existing architecture</li>
                  <li>• Enhance the modern, sophisticated design theme</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Architect Light Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Interior Architect Light Optimization
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--brand-turquoise)] rounded-lg flex items-center justify-center">
                  <Users className="text-[var(--brand-teal)]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Light Flow Analysis
                  </h3>
                  <p className="text-gray-600">
                    Our Interior Architect conducted comprehensive daylight
                    studies and spatial analysis to understand how the staircase
                    railing design would impact natural light distribution
                    throughout the open-concept living areas.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-[var(--brand-teal)]">
                    Daylight Analysis Process
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Solar path studies and seasonal light variations</li>
                    <li>
                      • Existing light obstruction mapping and measurement
                    </li>
                    <li>• Shadow pattern analysis throughout the day</li>
                    <li>
                      • Light penetration modeling for different railing designs
                    </li>
                    <li>• Visual connectivity impact assessment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-[var(--brand-teal)]">
                    Architectural Integration
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      • Structural load analysis for glass railing mounting
                    </li>
                    <li>• Handrail height optimization for code compliance</li>
                    <li>• Glass specification for safety and clarity</li>
                    <li>
                      • Hardware selection complementing existing finishes
                    </li>
                    <li>
                      • Installation method preserving staircase integrity
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[var(--brand-turquoise)]/5 border-l-4 border-[var(--brand-turquoise)] p-6 rounded-r-lg">
                <h4 className="font-semibold mb-2 text-[var(--brand-teal)]">
                  Key Design Innovation:
                </h4>
                <p className="text-gray-700">
                  &ldquo;By analyzing the solar angles and existing furniture
                  layout, we determined that a completely transparent glass
                  railing with minimal structural elements would increase light
                  penetration to the lower level by 65% while creating dramatic
                  sight lines that make the space feel 50% larger.&rdquo;
                </p>
                <p className="text-sm text-gray-600 mt-2 italic">
                  — Lisa Park, Interior Architect, North Glass Design Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Integration & AutoCAD */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Structural Integration & AutoCAD Precision
            </h2>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--brand-teal)] rounded-lg flex items-center justify-center">
                  <Compass className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Engineering-Grade AutoCAD Design
                  </h3>
                  <p className="text-gray-600">
                    This project required sophisticated structural analysis and
                    precision mounting solutions, all documented through
                    detailed AutoCAD drawings that ensured perfect integration
                    with the existing staircase structure.
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
                  <h4 className="font-semibold mb-2">Structural Analysis</h4>
                  <p className="text-sm text-gray-600">
                    Detailed load calculations and mounting point analysis for
                    safe glass panel installation.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--brand-turquoise)]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[var(--brand-teal)] font-bold text-xl">
                      2
                    </span>
                  </div>
                  <h4 className="font-semibold mb-2">Custom Fabrication</h4>
                  <p className="text-sm text-gray-600">
                    Precise measurements and custom hardware design for seamless
                    integration.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--brand-turquoise)]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[var(--brand-teal)] font-bold text-xl">
                      3
                    </span>
                  </div>
                  <h4 className="font-semibold mb-2">Installation Planning</h4>
                  <p className="text-sm text-gray-600">
                    Step-by-step installation drawings minimizing disruption to
                    finished spaces.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold mb-4 text-[var(--brand-teal)]">
                  Technical Achievements:
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      • Structural mounting preserving hardwood stair integrity
                    </li>
                    <li>
                      • Custom hardware matching existing brushed nickel
                      finishes
                    </li>
                    <li>
                      • Code-compliant handrail height with minimal visual
                      impact
                    </li>
                    <li>
                      • Seamless integration with existing architectural
                      elements
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Zero modification to existing staircase structure</li>
                    <li>
                      • Glass specification optimized for clarity and safety
                    </li>
                    <li>
                      • Installation method requiring no floor refinishing
                    </li>
                    <li>• Future accessibility for maintenance and cleaning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Selection & Installation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Material Selection & Installation Excellence
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Precision Specifications
                </h3>
                <div className="bg-white rounded-lg p-6">
                  <ul className="space-y-3 text-sm">
                    <li>
                      <strong>Glass Type:</strong> 1/2&rdquo; low-iron tempered
                      safety glass
                    </li>
                    <li>
                      <strong>Mounting System:</strong> Structural glazing with
                      hidden fasteners
                    </li>
                    <li>
                      <strong>Handrail:</strong> Brushed nickel round tube,
                      2&rdquo; diameter
                    </li>
                    <li>
                      <strong>Height:</strong> 42&rdquo; code-compliant with
                      architectural proportions
                    </li>
                    <li>
                      <strong>Glass Treatment:</strong> Polished edges, crystal
                      clear finish
                    </li>
                    <li>
                      <strong>Safety Features:</strong> Tempered glass exceeding
                      building codes
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Installation Process
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Precision Measurement</h4>
                      <p className="text-sm text-gray-600">
                        Laser measurement and template creation for perfect fit
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Custom Fabrication</h4>
                      <p className="text-sm text-gray-600">
                        Glass cutting and edge finishing in controlled
                        environment
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Installation</h4>
                      <p className="text-sm text-gray-600">
                        Professional installation with furniture protection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                Installation Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Installation was completed in a single day with complete
                protection of existing hardwood floors and furniture. Our
                precision measurements and AutoCAD templates enabled perfect
                first-time fit with no adjustments required.
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    4 Hours
                  </div>
                  <div className="text-sm text-gray-600">Installation Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    Zero
                  </div>
                  <div className="text-sm text-gray-600">
                    Damage to Existing
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    Perfect
                  </div>
                  <div className="text-sm text-gray-600">Fit Achieved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Transformation Results</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Measurable Improvements
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Natural Light Penetration</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      +65%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Visual Space Perception</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      +50%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Architectural Cohesion</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      Enhanced
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Safety Compliance</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      Exceeded
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Design Achievements
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Seamless integration with existing architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Dramatically improved light flow between levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Enhanced open-concept living experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Increased home value and market appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Created stunning architectural focal point</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-[var(--brand-teal)] text-white rounded-lg p-8">
              <blockquote className="text-xl italic mb-6">
                &ldquo;The transformation is incredible! Our Interior Architect
                from North Glass understood exactly how to maximize the light
                flow in our open-concept home. The glass railing looks like it
                was always part of the original design, and the difference in
                natural light throughout our living areas is remarkable. The
                precision and professionalism were outstanding.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Home className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Amanda & David Kim</div>
                  <div className="text-white/80">Homeowners, Durham NC</div>
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
                href="/case-studies/luxury-master-bath-cary"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src="/images/frameless-glass-shower-doors/frameless-shower-door11.jpg"
                    alt="Luxury master bathroom transformation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--brand-teal)] transition-colors">
                    Luxury Master Bath Transformation
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Interior Architect space planning and AutoCAD precision for
                    spa-like luxury.
                  </p>
                  <span className="text-[var(--brand-turquoise)] group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </Link>

              <Link
                href="/case-studies/commercial-office-raleigh"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src="/images/glass-office-doors/commercial-office2.jpg"
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--brand-turquoise)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[var(--brand-teal)]">
            Transform Your Home&rsquo;s Architecture
          </h2>
          <p className="text-xl mb-8 text-[var(--brand-teal)]/80 max-w-2xl mx-auto">
            Discover how Interior Architect expertise and precision AutoCAD
            design can enhance your home&rsquo;s light, space, and architectural
            beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-[var(--brand-teal)] text-white rounded-lg hover:bg-[var(--brand-teal)]/90 transition-colors font-semibold"
            >
              Get Free Design Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-[var(--brand-teal)] text-[var(--brand-teal)] rounded-lg hover:bg-[var(--brand-teal)] hover:text-white transition-colors font-semibold"
            >
              Discuss Your Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
