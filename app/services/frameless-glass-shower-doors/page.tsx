import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import {
  Award,
  Calculator,
  MapPin,
  PenTool,
  Ruler,
  Settings,
  ShieldCheck,
  Star,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Frameless Glass Shower Doors & Enclosures | Interior Architect Design | North Glass NC",
  description:
    "Premium frameless shower doors designed by Interior Architects with AutoCAD precision. Custom glass enclosures, professional installation, 2-3 week timeline. Serving all North Carolina. Free consultation.",
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
      telephone: "+1 (984) 900-6201",
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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Premium Frameless Glass Shower Doors
        </h1>
        <p className="text-xl text-primary-600 mb-4 font-medium">
          Designed by Interior Architects • AutoCAD Precision • North
          Carolina&apos;s Trusted Glass Specialists
        </p>
        <p className="max-w-prose text-[17px] mb-6 mx-auto">
          Transform your bathroom with custom frameless shower enclosures
          designed by professional Interior Architects. From AutoCAD precision
          design through expert installation, we deliver complete solutions
          across North Carolina with unmatched quality and craftsmanship.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-black/70 mb-6">
          <span className="flex items-center gap-1">
            ✓ Free AutoCAD Design Consultation
          </span>
          <span className="flex items-center gap-1">
            ✓ 2-3 Week Complete Project Timeline
          </span>
          <span className="flex items-center gap-1">
            ✓ Professional Installation Guarantee
          </span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/frameless-glass-shower-doors/after-shower-door1.png",
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
            {
              src: "/images/frameless-glass-shower-doors/frameless-shower-door.jpg",
              alt: "Custom frameless glass shower enclosure with polished chrome hardware in North Carolina home",
            },
            {
              src: "/images/frameless-glass-shower-doors/frameless-shower-door2.jpg",
              alt: "Sliding frameless glass shower doors with minimal frame design and clear glass panels",
            },
            {
              src: "/images/frameless-glass-shower-doors/frameless-shower-door3.jpg",
              alt: "Corner frameless shower enclosure with hinged door and fixed panel configuration",
            },
            {
              src: "/images/frameless-glass-shower-doors/frameless-shower-door5.jpg",
              alt: "Walk-in frameless glass shower with rainfall showerhead and natural stone tile",
            },
            {
              src: "/images/frameless-glass-shower-doors/frameless-shower-door8.jpg",
              alt: "Contemporary frameless shower door with brushed nickel hardware and clear tempered glass",
            },
            {
              src: "/images/frameless-glass-shower-doors/frameless-shower-enclosure-luxury.jpg",
              alt: "Luxury master bathroom frameless shower enclosure with premium finishes and architectural design",
            },
          ]}
          interval={3000} // 3 seconds for more variety
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-12">
        <a href="/request-quote" className="btn-primary inline-flex gap-2">
          <Calculator size={18} />
          Transform Your Bathroom - Free Estimate
        </a>
      </div>

      {/* Understanding Shower Door Types Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Understanding Shower Door Types: Making the Right Choice
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-black/70">
          Choosing between framed, semi-frameless, and frameless shower doors is
          one of the most important decisions in your bathroom renovation. Our
          Interior Architects help you understand the differences and select the
          perfect option for your space, budget, and design vision.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8 pt-6">
          {/* Framed Doors */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-center">
              Framed Shower Doors
            </h3>
            <div className="mb-4 text-center">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                Budget-Friendly
              </span>
            </div>
            <p className="text-black/70 mb-4 text-sm">
              Traditional design with metal frame providing structural support,
              allowing for thinner glass panels.
            </p>
            <h4 className="font-semibold text-sm mb-2">✓ Advantages:</h4>
            <ul className="text-sm text-black/70 space-y-1 mb-4">
              <li>• Most affordable option</li>
              <li>• Variety of frame finishes</li>
              <li>• Excellent structural support</li>
              <li>• Works well for family bathrooms</li>
            </ul>
            <h4 className="font-semibold text-sm mb-2">Considerations:</h4>
            <ul className="text-sm text-black/70 space-y-1">
              <li>• Requires more cleaning maintenance</li>
              <li>• Metal frames can show wear</li>
              <li>• More traditional appearance</li>
            </ul>
          </div>

          {/* Semi-Frameless Doors */}
          <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-300 relative mt-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg whitespace-nowrap">
                POPULAR CHOICE
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              Semi-Frameless Doors
            </h3>
            <div className="mb-4 text-center">
              <span className="inline-block bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full font-medium">
                Best Value
              </span>
            </div>
            <p className="text-black/70 mb-4 text-sm">
              Modern compromise with minimal framing for support while
              maintaining a clean, contemporary aesthetic.
            </p>
            <h4 className="font-semibold text-sm mb-2">✓ Advantages:</h4>
            <ul className="text-sm text-black/70 space-y-1 mb-4">
              <li>• Balanced price-to-style ratio</li>
              <li>• Modern, clean appearance</li>
              <li>• Easier maintenance than framed</li>
              <li>• Good structural support</li>
            </ul>
            <h4 className="font-semibold text-sm mb-2">Considerations:</h4>
            <ul className="text-sm text-black/70 space-y-1">
              <li>• Some metal cleaning required</li>
              <li>• Mid-range investment</li>
            </ul>
          </div>

          {/* Frameless Doors */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-center">
              Frameless Doors
            </h3>
            <div className="mb-4 text-center">
              <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full font-medium">
                Premium Luxury
              </span>
            </div>
            <p className="text-black/70 mb-4 text-sm">
              Self-supporting thick tempered glass (3/8&quot; to 1/2&quot;) with
              minimal hardware for ultimate modern elegance.
            </p>
            <h4 className="font-semibold text-sm mb-2">✓ Advantages:</h4>
            <ul className="text-sm text-black/70 space-y-1 mb-4">
              <li>• Sleek, modern aesthetic</li>
              <li>• Easiest to clean and maintain</li>
              <li>• Increases home resale value</li>
              <li>• Shows off beautiful tile work</li>
              <li>• Fully customizable</li>
            </ul>
            <h4 className="font-semibold text-sm mb-2">Considerations:</h4>
            <ul className="text-sm text-black/70 space-y-1">
              <li>• Higher investment cost</li>
              <li>• Requires professional installation</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
          <p className="text-black/90 font-medium mb-2">
            <strong>North Glass Specialization:</strong> While we offer all
            three options, we specialize in frameless and semi-frameless designs
            where our Interior Architect expertise and AutoCAD precision deliver
            the most dramatic transformations.
          </p>
          <p className="text-sm text-black/70">
            Our team will help you choose based on your budget, bathroom size,
            design preferences, and long-term maintenance considerations.
          </p>
        </div>
      </section>

      {/* Glass Options & Specifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Premium Glass Options & Specifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Glass Types */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Glass Type Options</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold mb-1">Clear Glass</h4>
                <p className="text-sm text-black/70">
                  Classic transparency showcasing your beautiful tile work and
                  fixtures. Creates open, spacious feel. Most popular choice for
                  modern bathrooms.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold mb-1">Frosted Glass</h4>
                <p className="text-sm text-black/70">
                  Sandblasted or acid-etched for privacy while maintaining light
                  transmission. Perfect for shared bathrooms or street-facing
                  windows.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold mb-1">Rain Glass</h4>
                <p className="text-sm text-black/70">
                  Textured pattern resembling rain on a window. Provides privacy
                  with elegant visual interest and hides water spots naturally.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold mb-1">Low-Iron (Ultra-Clear)</h4>
                <p className="text-sm text-black/70">
                  Premium crystal-clear glass without the green tint. Ideal for
                  luxury bathrooms where color accuracy matters.
                </p>
              </div>
            </div>
          </div>

          {/* Glass Thickness & Hardware */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Thickness & Hardware Options
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">3/8&quot; Tempered Glass</h4>
                <p className="text-sm text-black/70 mb-2">
                  Standard thickness for most frameless enclosures. Excellent
                  strength-to-weight ratio.
                </p>
                <p className="text-xs text-black/60">
                  ✓ Best for: Standard showers, budget-conscious projects
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">1/2&quot; Tempered Glass</h4>
                <p className="text-sm text-black/70 mb-2">
                  Premium thickness for ultimate durability and luxury feel.
                  Heavier, more substantial appearance.
                </p>
                <p className="text-xs text-black/60">
                  ✓ Best for: Luxury showers, large enclosures, maximum
                  durability
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Hardware Finish Options</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-black/70">
                  <div>• Polished Chrome</div>
                  <div>• Brushed Nickel</div>
                  <div>• Matte Black</div>
                  <div>• Oil-Rubbed Bronze</div>
                  <div>• Satin Brass</div>
                  <div>• Custom Finishes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Safety & Quality Standards
          </h4>
          <p className="text-sm text-black/70">
            All our glass is tempered safety glass meeting ANSI Z97.1 and CPSC
            16 CFR 1201 standards. If broken, it shatters into small, relatively
            harmless pieces. Each panel includes polished edges and optional
            protective coatings for easy cleaning and longevity.
          </p>
        </div>
      </section>

      {/* Pricing & Investment Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Investment & Pricing Guidance
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-black/70 mb-8">
            Shower door investment varies based on size, glass type, hardware
            finish, and configuration complexity. Here&apos;s what to expect:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Framed Enclosures</h3>
              <p className="text-3xl font-bold text-primary-600 mb-2">
                $500-$1,500
              </p>
              <p className="text-sm text-black/60">
                Budget-friendly option with reliable performance
              </p>
            </div>

            <div className="bg-primary-50 border-2 border-primary-300 rounded-lg p-6 text-center">
              <h3 className="font-bold text-lg mb-2">
                Semi-Frameless Enclosures
              </h3>
              <p className="text-3xl font-bold text-primary-600 mb-2">
                $1,200-$2,800
              </p>
              <p className="text-sm text-black/60">
                Best value combining style and functionality
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Frameless Enclosures</h3>
              <p className="text-3xl font-bold text-primary-600 mb-2">
                $2,000-$5,000+
              </p>
              <p className="text-sm text-black/60">
                Premium investment with maximum resale value
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold mb-4">
              What&apos;s Included in Your Investment:
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-black/70">
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>
                  <strong>Free AutoCAD Design Consultation</strong> - Interior
                  Architect creates detailed technical drawings
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>
                  <strong>Professional Measurement</strong> - Precise on-site
                  assessment and verification
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>
                  <strong>Custom Fabrication</strong> - CNC precision cutting
                  and edge polishing
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>
                  <strong>Premium Hardware</strong> - Heavy-duty hinges,
                  handles, and support systems
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>
                  <strong>Expert Installation</strong> - Certified technicians
                  with warranty coverage
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600">✓</span>
                <span>
                  <strong>Quality Assurance</strong> - Final inspection and
                  operation testing
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-black/60 mb-4">
              Every project is unique. Get your personalized quote with detailed
              AutoCAD drawings:
            </p>
            <a href="/request-quote" className="btn-primary inline-flex gap-2">
              <Calculator size={18} />
              Get Your Free Detailed Quote
            </a>
          </div>
        </div>
      </section>

      {/* Benefits & Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose North Glass Frameless Shower Doors?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenTool className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Interior Architect Design
            </h3>
            <p className="text-black/70">
              Professional Interior Architects create AutoCAD designs ensuring
              perfect integration with your bathroom aesthetics and optimal
              functionality.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Safety Glass</h3>
            <p className="text-black/70">
              3/8&quot; and 1/2&quot; tempered safety glass with polished edges
              and optional protective coatings for easy cleaning and durability.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Hardware</h3>
            <p className="text-black/70">
              Heavy-duty hinges, handles, and support systems in multiple
              finishes including chrome, brushed nickel, and matte black.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ruler className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AutoCAD Precision</h3>
            <p className="text-black/70">
              Computer-aided design ensures perfect measurements, seamless fit,
              and eliminates installation surprises with detailed technical
              drawings.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Professional Installation
            </h3>
            <p className="text-black/70">
              Certified installers with specialized training ensure proper
              alignment, sealing, and long-lasting performance with warranty
              coverage.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Statewide North Carolina
            </h3>
            <p className="text-black/70">
              Serving all of North Carolina with local expertise in building
              codes, architectural styles, and regional design preferences.
            </p>
          </div>
        </div>

        {/* Shower Door Types */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Frameless Shower Door Configurations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">Swinging Doors</h4>
              <ul className="text-black/70 space-y-2 mb-4">
                <li>• Single hinged door entry</li>
                <li>• Door + fixed panel combinations</li>
                <li>• Inward or outward swing options</li>
                <li>• Ideal for larger openings</li>
              </ul>
              <p className="text-sm text-black/60">
                Perfect for spacious bathrooms where door clearance allows for
                elegant hinged entry.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">Sliding Doors</h4>
              <ul className="text-black/70 space-y-2 mb-4">
                <li>• Space-saving sliding operation</li>
                <li>• Bypass door configurations</li>
                <li>• Smooth rolling hardware systems</li>
                <li>• Great for compact bathrooms</li>
              </ul>
              <p className="text-sm text-black/60">
                Ideal for smaller spaces where swing clearance is limited but
                you want frameless elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Warranty Section */}
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Comprehensive Warranty & Guarantee
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Installation Warranty</h4>
              <p className="text-black/70">
                Professional installation guaranteed with warranty coverage on
                workmanship and proper fit.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Hardware Warranty</h4>
              <p className="text-black/70">
                Premium hardware components backed by manufacturer warranties
                for long-lasting operation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Satisfaction Guarantee</h4>
              <p className="text-black/70">
                We stand behind our AutoCAD design process and professional
                installation with complete satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

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
          {
            question: "What warranty coverage do you provide?",
            answer:
              "We provide comprehensive warranty coverage including installation workmanship warranty, manufacturer warranties on premium hardware components, and a complete satisfaction guarantee. All glass meets ANSI Z97.1 and CPSC 16 CFR 1201 safety standards with lifetime breakage coverage under normal use conditions.",
          },
          {
            question:
              "What preparation is required before shower door installation?",
            answer:
              "Your bathroom should have completed tile work with fully cured grout, installed shower pan or base, and finished wall surfaces. We recommend waiting 7-14 days after tile grouting before installation. Our team provides a detailed pre-installation checklist during the design consultation to ensure your space is ready.",
          },
          {
            question: "Can I use bleach or harsh chemicals on my glass shower?",
            answer:
              "No, avoid bleach, ammonia, and abrasive cleaners as they can damage protective coatings and hardware finishes. Use mild soap with water or specialized glass cleaners. We provide detailed care instructions and recommend a squeegee after each shower to prevent water spots and maintain crystal-clear appearance.",
          },
          {
            question: "How do I prevent water spots and soap scum buildup?",
            answer:
              "Daily squeegeeing after showers (30 seconds) is most effective. We offer optional protective coating treatments during installation that repel water and reduce mineral deposits. Weekly cleaning with vinegar-water solution (50/50 mix) or specialized glass cleaner keeps glass pristine. Proper ventilation also helps minimize moisture buildup.",
          },
          {
            question:
              "What are common installation mistakes I should watch for?",
            answer:
              "Poor installations often show uneven gaps, misaligned doors, inadequate sealing, or loose hardware. Our AutoCAD precision design process and certified installers eliminate these issues through detailed planning, precise measurements, proper anchoring to studs (not just drywall), and comprehensive quality testing before project completion.",
          },
          {
            question: "Do you offer financing options?",
            answer:
              "Yes, we offer flexible financing options to make your bathroom transformation more affordable. Contact us during your free consultation to discuss payment plans that fit your budget. Most customers find the investment worthwhile given the dramatic aesthetic improvement and increased home value.",
          },
        ]}
      />

      {/* Customer Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our North Carolina Customers Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-black/70 mb-4">
              &quot;The AutoCAD drawings they provided were incredibly detailed
              and helped us visualize exactly how the shower would look. The
              installation was flawless and the quality exceeded our
              expectations.&quot;
            </p>
            <p className="font-semibold">Sarah M.</p>
            <p className="text-sm text-black/60">Cary, NC</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-black/70 mb-4">
              &quot;Working with their Interior Architect made all the
              difference. They helped us choose the perfect glass and hardware
              combination that complements our bathroom design
              beautifully.&quot;
            </p>
            <p className="font-semibold">Michael & Jennifer T.</p>
            <p className="text-sm text-black/60">Raleigh, NC</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-black/70 mb-4">
              &quot;The precision design process eliminated any guesswork.
              Everything fit perfectly on the first try, and the frameless
              shower transformed our entire bathroom. Highly recommend!&quot;
            </p>
            <p className="font-semibold">David L.</p>
            <p className="text-sm text-black/60">Durham, NC</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-black/70 mb-4">
            Join hundreds of satisfied customers across North Carolina
          </p>
          <a href="/request-quote" className="btn-primary inline-flex gap-2">
            <Calculator size={18} />
            Get Your Free AutoCAD Design Consultation
          </a>
        </div>
      </section>
      <ServiceJsonLd />
    </main>
  );
}
