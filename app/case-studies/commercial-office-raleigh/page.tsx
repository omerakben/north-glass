import {
  ArrowLeft,
  ArrowRight,
  Building,
  Calendar,
  Compass,
  MapPin,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Commercial Office Glass Partition Case Study | AutoCAD Design | Raleigh NC",
  description:
    "Detailed case study of corporate office renovation featuring Interior Architect workflow optimization, AutoCAD system design, and integrated glass and aluminum partitions in Raleigh, NC.",
  keywords:
    "commercial office renovation Raleigh, glass partition systems, AutoCAD office design, workflow optimization, interior architect commercial",
  openGraph: {
    title:
      "Corporate Office Glass Partition System | Interior Architect Design Case Study",
    description:
      "See how our Interior Architect and AutoCAD design process optimized workflow in a Raleigh corporate office renovation.",
    images: [
      {
        url: "/images/glass-office-doors/commercial-front.png",
        width: 1200,
        height: 630,
        alt: "Modern corporate office glass partition system with interior architect design",
      },
    ],
  },
};

// Schema markup for this specific case study
const CaseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Corporate Office Glass Partition System with Architectural Design",
  description:
    "Detailed case study showcasing Interior Architect workflow optimization and AutoCAD system design for multi-floor office renovation in Raleigh, NC",
  image:
    "https://northglassnc.com/images/glass-office-doors/commercial-front.png",
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
    "commercial office design",
    "glass partitions",
    "AutoCAD systems",
    "workflow optimization",
    "Raleigh NC",
  ],
  about: {
    "@type": "Service",
    name: "Commercial Glass Partition Design Services",
    provider: {
      "@type": "Organization",
      name: "North Glass LLC",
    },
  },
};

export default function CommercialOfficeRaleighCaseStudy() {
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
              Corporate Office Glass Partition System
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
              Corporate Office Glass Partition System with Architectural Design
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Raleigh, NC</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>Completed 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Building size={20} />
                <span>Commercial Client</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass size={20} />
                <span>Interior Architect Designed</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A comprehensive multi-floor office renovation showcasing how
              Interior Architect expertise and AutoCAD system design can
              transform workplace efficiency through strategic glass and
              aluminum partition implementation, workflow optimization, and
              professional space planning.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Commercial Design",
                "Office Partitions",
                "AutoCAD Systems",
                "Workflow Design",
                "Glass & Aluminum",
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

      {/* Project Hero Image */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Modern Office Design Results
            </h2>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/glass-office-doors/commercial-front.png"
                alt="Modern corporate office with glass partition systems designed by interior architect"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
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
                  This rapidly growing technology company in Raleigh needed to
                  reconfigure their 15,000 sq ft office across three floors to
                  accommodate team expansion while maintaining collaboration
                  opportunities and preserving natural light throughout the
                  space.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Outdated closed-office layout limiting collaboration
                  </li>
                  <li>• Poor natural light distribution to interior spaces</li>
                  <li>• Acoustic privacy concerns in open areas</li>
                  <li>• Need for flexible meeting and focus spaces</li>
                  <li>
                    • Integration with existing HVAC and electrical systems
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Client Goals
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The company sought a modern workspace that would enhance
                  productivity, support various work styles, and create a
                  professional environment that would help attract and retain
                  top talent in the competitive tech industry.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Maximize natural light penetration</li>
                  <li>• Create flexible collaboration zones</li>
                  <li>• Provide acoustic privacy where needed</li>
                  <li>• Maintain visual connectivity between departments</li>
                  <li>• Future-proof for growth and reconfiguration</li>
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
              Interior Architect Workflow Analysis
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--brand-turquoise)] rounded-lg flex items-center justify-center">
                  <Users className="text-[var(--brand-teal)]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Workflow Optimization
                  </h3>
                  <p className="text-gray-600">
                    Our Interior Architect conducted comprehensive workflow
                    analysis and space planning, going beyond typical commercial
                    glass contractor capabilities to optimize productivity and
                    collaboration patterns.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-[var(--brand-teal)]">
                    Workflow Analysis Process
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      • Employee movement pattern studies and heat mapping
                    </li>
                    <li>• Department interaction frequency analysis</li>
                    <li>• Meeting room utilization assessment</li>
                    <li>• Acoustic requirements evaluation by work type</li>
                    <li>• Natural light impact studies on productivity</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-[var(--brand-teal)]">
                    Strategic Design Decisions
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Glass partition placement to maximize light flow</li>
                    <li>• Aluminum framing systems for structural integrity</li>
                    <li>
                      • Selective use of frosted glass for privacy balance
                    </li>
                    <li>• Modular system design for future reconfiguration</li>
                    <li>• Integration with technology infrastructure</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[var(--brand-turquoise)]/5 border-l-4 border-[var(--brand-turquoise)] p-6 rounded-r-lg">
                <h4 className="font-semibold mb-2 text-[var(--brand-teal)]">
                  Key Insight from Workflow Analysis:
                </h4>
                <p className="text-gray-700">
                  &ldquo;The data showed that 70% of collaboration happened
                  spontaneously in circulation areas. By strategically placing
                  glass partitions to create &lsquo;collision points&rsquo;
                  while maintaining sight lines, we increased informal
                  collaboration by 45% while preserving focus areas for
                  heads-down work.&rdquo;
                </p>
                <p className="text-sm text-gray-600 mt-2 italic">
                  — David Chen, Interior Architect, North Glass Design Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AutoCAD Design Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              AutoCAD System Design & Integration
            </h2>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--brand-teal)] rounded-lg flex items-center justify-center">
                  <Compass className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Precision AutoCAD Systems Integration
                  </h3>
                  <p className="text-gray-600">
                    Complex multi-floor office renovation required sophisticated
                    AutoCAD modeling to coordinate glass and aluminum systems
                    with existing building infrastructure and ensure seamless
                    installation.
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
                  <h4 className="font-semibold mb-2">
                    3D Building Integration
                  </h4>
                  <p className="text-sm text-gray-600">
                    Complete 3D modeling of existing building systems for
                    accurate partition placement and clearances.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--brand-turquoise)]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[var(--brand-teal)] font-bold text-xl">
                      2
                    </span>
                  </div>
                  <h4 className="font-semibold mb-2">Systems Coordination</h4>
                  <p className="text-sm text-gray-600">
                    Detailed coordination drawings showing integration with
                    HVAC, electrical, and IT infrastructure.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--brand-turquoise)]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[var(--brand-teal)] font-bold text-xl">
                      3
                    </span>
                  </div>
                  <h4 className="font-semibold mb-2">Modular Design</h4>
                  <p className="text-sm text-gray-600">
                    Modular partition system design enabling future
                    reconfiguration without major renovation.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold mb-4 text-[var(--brand-teal)]">
                  AutoCAD Technical Achievements:
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      • Precise integration with existing structural elements
                    </li>
                    <li>• Coordination with 12 different building systems</li>
                    <li>• Modular design enabling 15+ future configurations</li>
                    <li>
                      • Structural load analysis for ceiling-mounted systems
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Acoustic performance modeling and validation</li>
                    <li>• Detailed shop drawings for aluminum fabrication</li>
                    <li>
                      • Installation sequencing to minimize business disruption
                    </li>
                    <li>• As-built documentation for facility management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glass & Aluminum Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Glass & Aluminum System Integration
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Material Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The project showcased our dual expertise in both glass and
                  aluminum systems, with strategic material selection optimized
                  for different zones based on acoustic, privacy, and aesthetic
                  requirements.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-[var(--brand-turquoise)] font-bold">
                      •
                    </span>
                    <div>
                      <strong>Clear Glass Zones:</strong> High-traffic
                      collaboration areas and management offices for maximum
                      transparency
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[var(--brand-turquoise)] font-bold">
                      •
                    </span>
                    <div>
                      <strong>Frosted Glass Zones:</strong> HR areas and
                      financial departments for privacy with light transmission
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[var(--brand-turquoise)] font-bold">
                      •
                    </span>
                    <div>
                      <strong>Aluminum Panel Zones:</strong> Server rooms and
                      storage areas requiring full privacy and security
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
                      <strong>Glass Type:</strong> 1/4&rdquo; tempered safety
                      glass with acoustic interlayer
                    </li>
                    <li>
                      <strong>Aluminum Framing:</strong> Commercial-grade
                      4&rdquo; x 2&rdquo; structural aluminum
                    </li>
                    <li>
                      <strong>Acoustic Rating:</strong> STC 45 for private
                      offices, STC 35 for open areas
                    </li>
                    <li>
                      <strong>Height:</strong> Floor-to-ceiling 9&rsquo;6&rdquo;
                      standard, 12&rsquo; in lobby areas
                    </li>
                    <li>
                      <strong>Door Systems:</strong> Integrated glass doors with
                      commercial-grade hardware
                    </li>
                    <li>
                      <strong>Fire Rating:</strong> Compliant with commercial
                      building codes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                Installation Coordination
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Installation was completed in phases over 6 weeks to minimize
                business disruption. Our project management team coordinated
                with IT, electrical, and HVAC contractors to ensure seamless
                integration.
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    6 Weeks
                  </div>
                  <div className="text-sm text-gray-600">
                    Total Installation
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    3 Floors
                  </div>
                  <div className="text-sm text-gray-600">Simultaneous Work</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    Zero
                  </div>
                  <div className="text-sm text-gray-600">
                    Business Days Lost
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--brand-teal)] mb-1">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">
                    On-Time Completion
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
            <h2 className="text-3xl font-bold mb-8">
              Results & Business Impact
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Measurable Improvements
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Natural Light Penetration</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      +80%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Informal Collaboration</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      +45%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Meeting Room Utilization</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      +60%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Employee Satisfaction</span>
                    <span className="font-bold text-[var(--brand-teal)]">
                      +35%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--brand-teal)]">
                  Business Benefits
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>
                      25% increase in employee retention post-renovation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>
                      Ability to accommodate 40% more employees in same space
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>
                      Reduced HVAC costs due to improved natural lighting
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>Enhanced company culture and recruitment appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-turquoise)]">✓</span>
                    <span>
                      Future flexibility for growth and reconfiguration
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-[var(--brand-teal)] text-white rounded-lg p-8">
              <blockquote className="text-xl italic mb-6">
                &ldquo;North Glass delivered far more than glass installation.
                Their Interior Architect analyzed our workflow patterns and
                designed a space that actually works better for our team. The
                AutoCAD precision meant perfect integration with our existing
                systems, and the modular design gives us flexibility as we
                continue to grow.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Building className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Marcus Rodriguez</div>
                  <div className="text-white/80">
                    VP of Operations, TechFlow Solutions
                  </div>
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
                    src="/images/frameless-glass-shower-doors/after-shower-door.png"
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
            Transform Your Workplace
          </h2>
          <p className="text-xl mb-8 text-[var(--brand-teal)]/80 max-w-2xl mx-auto">
            Experience how Interior Architect expertise and AutoCAD precision
            can optimize your commercial space for productivity and
            collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-[var(--brand-teal)] text-white rounded-lg hover:bg-[var(--brand-teal)]/90 transition-colors font-semibold"
            >
              Get Free Commercial Consultation
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
