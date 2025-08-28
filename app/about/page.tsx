import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About North Glass – Residential Glass Specialists in North Carolina",
  description:
    "Residential-first glass company: frameless showers, windows, mirrors across North Carolina with interior architect design support when needed.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">About North Glass LLC</h1>

      <div className="max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-teal)]">
            Residential Glass First
          </h2>
          <p className="text-[17px] mb-6">
            North Glass LLC specializes in premium residential glass—frameless
            shower doors, window replacement, and custom mirrors—serving
            homeowners across North Carolina.
          </p>
          <p className="text-[17px] mb-6">
            When projects call for more, our interior architect design support
            and aluminum capabilities come in as a secondary advantage—helping
            deliver cohesive results without complicating the homeowner
            experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-teal)]">
            Professional Design Support (When Needed)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">
                Interior Architect Design (Optional)
              </h3>
              <p className="text-[16px] text-gray-700">
                Our Professional Interior Architects utilize AutoCAD design
                workflows to create precise, custom solutions that perfectly fit
                your space and vision.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                Complete System Delivery
              </h3>
              <p className="text-[16px] text-gray-700">
                We provide complete system solutions, not just installations.
                From design through final implementation, we handle every aspect
                of your project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                Glass Expertise + Aluminum Support
              </h3>
              <p className="text-[16px] text-gray-700">
                Our dual expertise in both glass and aluminum materials allows
                us to recommend the best solutions for your specific needs and
                budget.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                Community-Focused Values
              </h3>
              <p className="text-[16px] text-gray-700">
                We&apos;re committed to serving our North Carolina communities
                with integrity, quality craftsmanship, and exceptional customer
                service.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-teal)]">
            Statewide Service Coverage
          </h2>
          <p className="text-[17px] mb-4">
            Proudly serving all of North Carolina, from the Triangle (Raleigh,
            Durham, Cary) to Charlotte, Greensboro, Winston-Salem, Asheville,
            Wilmington, and everywhere in between.
          </p>
          <p className="text-[17px]">
            Contact us today to learn how our Professional Interior Architects
            and expert craftsmen can transform your space with custom glass and
            aluminum solutions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-teal)]">
            Get In Touch
          </h2>
          <div className="bg-[var(--brand-grey)] rounded-lg p-6">
            <p className="text-[17px] mb-4">
              Ready to start your project? Our Professional Interior Architects
              are standing by to provide a free consultation and AutoCAD design
              for your glass and aluminum needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+19842688490"
                className="inline-flex items-center px-6 py-3 bg-[var(--brand-turquoise)] text-[var(--brand-teal)] rounded-md font-semibold hover:bg-[var(--brand-turquoise)]/90 transition-colors"
              >
                Call (984) 268-8490
              </a>
              <a
                href="/request-quote"
                className="inline-flex items-center px-6 py-3 border border-[var(--brand-teal)] text-[var(--brand-teal)] rounded-md font-semibold hover:bg-[var(--brand-teal)] hover:text-white transition-colors"
              >
                Request Free Quote + AutoCAD Design
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
