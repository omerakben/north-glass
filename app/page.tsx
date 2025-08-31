import { ArrowRight, CheckCircle, Shield, Star, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "./(site)/_components/Gallery";
import { HomeHero } from "./(site)/_components/HomeHero";
import TestimonialCarousel from "./(site)/_components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "North Glass LLC – Glass and Aluminum Company | North Carolina",
  description:
    "Glass and aluminum company serving all of North Carolina. Frameless showers, windows, mirrors with professional interior architect design. Free quote.",
  keywords: [
    "glass",
    "aluminum",
    "Hotel",
    "Hotel Shower",
    "Hotel Shower Door",
    "Hotel Projects",
  ],
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
    title: "Aluminum Windows",
    description: "Durable, modern frames with excellent longevity",
    href: "/services/aluminum-windows",
  },
  {
    title: "Custom Mirrors",
    description: "Bathroom vanities, gym walls, and decorative mirrors",
    href: "/services/mirrors",
  },
  {
    title: "Bug Screens",
    description: "Window and door screen repair and fabrication",
    href: "/services/window-and-door-screens",
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
  {
    title: "Pergolas",
    description: "Aluminum shade structures for hospitality and retail",
    href: "/services/pergolas",
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
      <HomeHero />

      {/* Services Overview */}
      <section className="services-section bg-gradient-to-b from-slate-100 to-slate-200 py-20 fade-in-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Residential & Commercial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom residential solutions to large-scale commercial
              projects, we deliver exceptional glass and aluminum services
              across North Carolina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Residential Services */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-[var(--brand-blue-primary)]/10 to-[var(--brand-blue-secondary)]/10 rounded-2xl" />
              <div className="relative bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-xl ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold mb-6 text-[var(--brand-blue-primary)] flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  Residential Services
                </h3>
                <div className="space-y-4">
                  {residentialServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group block p-6 bg-white backdrop-blur-sm border border-gray-200 rounded-xl hover:shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-[var(--brand-blue-primary)] transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 mt-3 text-[var(--brand-blue-secondary)] font-medium">
                            <span className="text-sm">Learn more</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 mt-6 text-[var(--brand-blue-secondary)] font-medium hover:text-[var(--brand-blue-primary)] transition-colors group"
                >
                  View All Residential Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Commercial Services */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-[var(--brand-blue-primary)]/10 to-[var(--brand-blue-secondary)]/10 rounded-2xl" />
              <div className="relative bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-xl ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold mb-6 text-[var(--brand-blue-primary)] flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  Commercial Services
                </h3>
                <div className="space-y-4">
                  {commercialServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group block p-6 bg-white backdrop-blur-sm border border-gray-200 rounded-xl hover:shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-[var(--brand-blue-primary)] transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 mt-3 text-[var(--brand-blue-secondary)] font-medium">
                            <span className="text-sm">Learn more</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 mt-6 text-[var(--brand-blue-secondary)] font-medium hover:text-[var(--brand-blue-primary)] transition-colors group"
                >
                  View All Commercial Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed professionals with comprehensive insurance for
                your peace of mind
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Premium materials and expert craftsmanship backed by our
                satisfaction guarantee
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
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
              <div key={index} className="text-center group">
                <div className="relative w-12 h-12 bg-gradient-to-br from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-lg font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {step.step}
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
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
      <section className="py-16 bg-gradient-to-br from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] text-white relative overflow-hidden">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            Proudly Serving All of North Carolina
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-white/20 transition-colors duration-300"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xl mb-8 text-white/90">
              Ready to add beauty & value with custom glass and aluminum?
            </p>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--brand-blue-primary)] rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Transform Your Space - Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
      </section>
    </main>
  );
}
