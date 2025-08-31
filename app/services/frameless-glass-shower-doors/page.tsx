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
              src: "/images/frameless-glass-shower-doors/frameless-shower-door7.jpg",
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
