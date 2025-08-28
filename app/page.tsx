import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "./(site)/_components/Gallery";
import { HomeHero } from "./(site)/_components/HomeHero";
import ScrollAnimations from "./(site)/_components/ScrollAnimations";
import TestimonialCarousel from "./(site)/_components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "North Glass LLC – Glass and Aluminum Company | North Carolina",
  description:
    "Glass and aluminum company serving all of North Carolina. Frameless showers, windows, mirrors with professional interior architect design. Free quote.",
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

const serviceAreas = [
  "Raleigh",
  "Durham",
  "Cary",
  "Chapel Hill",
  "Charlotte",
  "Greensboro",
  "Winston-Salem",
  "Asheville",
  "Wilmington",
  "High Point",
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
      <HomeHero />

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
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
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
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
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
                Fully licensed professionals with comprehensive insurance for
                your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">★</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Premium materials and expert craftsmanship backed by our
                satisfaction guarantee
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-turquoise)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">
                Quick turnaround times with professional service you can count
                on
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
            From consultation to installation, we make glass services simple and
            stress-free
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
      <section className="py-16 bg-[var(--brand-grey)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <TestimonialCarousel className="max-w-5xl mx-auto" />
        </div>
      </section>

      {/* Service Area + CTA */}
      <section className="py-16 bg-[var(--brand-teal)] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Proudly Serving All of North Carolina
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
              Ready to add beauty & value with custom glass and aluminum?
            </p>
            <Link
              href="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-white text-[var(--brand-teal)] rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Quote + AutoCAD Design Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
