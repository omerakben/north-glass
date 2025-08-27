import Link from "next/link";
import type { Metadata } from "next";
import Gallery from "./(site)/_components/Gallery";
import ScrollAnimations from "./(site)/_components/ScrollAnimations";

export const metadata: Metadata = {
  title: "North Glass LLC – Glass Shower Doors, Windows, Mirrors | Raleigh–Durham",
  description:
    "North Glass offers premium residential & commercial glass services in Raleigh, Durham, Cary and the Triangle. Frameless shower doors, window replacement, custom mirrors & more. Call for a free quote!",
};

const residentialServices = [
  {
    title: "Frameless Glass Shower Doors",
    description: "Custom shower enclosures that elevate your bathroom",
    href: "/services/frameless-glass-shower-doors",
  },
  {
    title: "Window Replacement",
    description: "Energy-efficient glass to reduce utility costs",
    href: "/services/window-replacement",
  },
  {
    title: "Custom Mirrors",
    description: "Bathroom vanities, gym walls, and decorative mirrors",
    href: "/services/mirrors",
  },
];

const commercialServices = [
  {
    title: "Glass Office Doors",
    description: "Modern office fronts and conference room partitions",
    href: "/services/glass-office-doors",
  },
  {
    title: "Commercial Storefronts",
    description: "Storefront glass installation and emergency repair",
    href: "/services/commercial-storefronts",
  },
  {
    title: "Glass Railings",
    description: "Sleek glass balustrades for stairs and balconies",
    href: "/services/staircase-glass-railings",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free Consultation",
    description: "We discuss your vision and measure your space",
  },
  {
    step: "2",
    title: "Custom Design",
    description: "Tailored solutions to fit your style and budget",
  },
  {
    step: "3",
    title: "Professional Installation",
    description: "Expert installation with attention to detail",
  },
  {
    step: "4",
    title: "Quality Guarantee",
    description: "Backed by our warranty and commitment to excellence",
  },
];

const testimonials = [
  {
    quote:
      "North Glass did an amazing job on our shower enclosure – professional, on time, and the result is gorgeous. Highly recommend!",
    author: "Jane D.",
    location: "Raleigh",
  },
  {
    quote:
      "Excellent service replacing our storefront glass after storm damage. Quick response and quality work.",
    author: "Mike T.",
    location: "Durham",
  },
  {
    quote:
      "The team was professional and the custom mirrors they installed look fantastic. Great attention to detail.",
    author: "Sarah L.",
    location: "Cary",
  },
];

const serviceAreas = [
  "Raleigh",
  "Durham",
  "Cary",
  "Chapel Hill",
  "Apex",
  "Holly Springs",
  "Morrisville",
  "Wake Forest",
  "Garner",
  "Fuquay-Varina",
];

export default function Home() {
  return (
    <main>
      <ScrollAnimations />
      {/* Hero Section */}
      <section className="hero-section container mx-auto px-6 py-20">
        <div className="hero-content text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Clearly Better Glass Solutions for Your Home or Business
          </h1>
          <p className="text-[18px] max-w-2xl text-balance mb-8">
            Frameless showers, windows, mirrors, railings, and storefronts in
            the Raleigh–Durham–Cary Triangle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/request-quote" className="btn-primary">
              Request a Free Quote
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section bg-white py-16 fade-in-section">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Residential & Commercial Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Residential Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--brand-teal)]">
                Residential Services
              </h3>
              <div className="space-y-4">
                {residentialServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-block mt-6 text-[var(--brand-turquoise)] font-medium hover:underline"
              >
                View All Residential Services →
              </Link>
            </div>

            {/* Commercial Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--brand-teal)]">
                Commercial Services
              </h3>
              <div className="space-y-4">
                {commercialServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-block mt-6 text-[var(--brand-turquoise)] font-medium hover:underline"
              >
                View All Commercial Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose North Glass */}
      <section className="py-16 bg-[var(--brand-grey)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose North Glass?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed professionals with comprehensive insurance for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">★</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Premium materials and expert craftsmanship backed by our satisfaction guarantee
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">
                Quick turnaround times with professional service you can count on
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From consultation to installation, we make glass services simple and stress-free
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[var(--brand-teal)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery/Featured Projects */}
      <Gallery />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[var(--brand-grey)] rounded-lg p-6">
                <div className="mb-4">
                  <span className="text-[var(--brand-turquoise)] text-2xl">★★★★★</span>
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold">
                  – {testimonial.author}, {testimonial.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area + CTA */}
      <section className="py-16 bg-[var(--brand-teal)] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Proudly Serving the Triangle Area
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white/10 rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xl mb-8">
              Ready to add beauty & value with custom glass?
            </p>
            <Link
              href="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-white text-[var(--brand-teal)] rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Quote Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}