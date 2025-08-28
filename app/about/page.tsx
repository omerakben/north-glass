import { Layers, PenTool, Settings, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About North Glass – Glass and Aluminum Company in North Carolina",
  description:
    "Glass and aluminum company serving all of North Carolina. Complete shower enclosures, windows, mirrors with professional interior architect design solutions and AutoCAD precision.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
        About North Glass LLC
      </h1>

      <div className="max-w-4xl">
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-shadow">
            Glass and Aluminum Company
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
            North Glass is a glass and aluminum company based in the Triangle
            area, proudly serving all of North Carolina. We specialize in
            complete shower enclosure systems with tempered glass, offering
            modern, durable and elegant solutions for homeowners and businesses.
          </p>
          <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
            Our expertise extends to high-quality aluminum applications, glass,
            windows, doors and mirrors. With custom-made designs and
            professional installation, we bring both style and functionality to
            your spaces while maintaining our mission to combine trust,
            aesthetics and quality in every project.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-shadow-medium-blue">
            Professional Interior Architect Design Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-professional p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-brand-light">
                  <PenTool className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-brand-primary">
                  Interior Architects (Our Competitive Edge)
                </h3>
              </div>
              <p className="text-base md:text-lg text-brand-dark leading-relaxed">
                Our professional interior architects provide innovative
                solutions that set us apart from the competition. Using detailed
                AutoCAD architectural programs, we ensure a transparent and
                professional experience for every client.
              </p>
            </div>
            <div className="card-professional p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-brand-light">
                  <Settings className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-brand-primary">
                  Complete System Delivery
                </h3>
              </div>
              <p className="text-base md:text-lg text-brand-dark leading-relaxed">
                We provide complete system solutions, not just installations.
                From design through final implementation, we handle every aspect
                of your project with precision and care.
              </p>
            </div>
            <div className="card-professional p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-brand-light">
                  <Layers className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-brand-primary">
                  Glass and Aluminum Expertise
                </h3>
              </div>
              <p className="text-base md:text-lg text-brand-dark leading-relaxed">
                Our dual expertise in both glass and aluminum materials allows
                us to recommend the best solutions for your specific needs and
                budget, delivering modern, durable and elegant results.
              </p>
            </div>
            <div className="card-professional p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-brand-light">
                  <Users className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-brand-primary">
                  Community-Focused Values
                </h3>
              </div>
              <p className="text-base md:text-lg text-brand-dark leading-relaxed">
                We consider it our responsibility to support not only our
                customers but also our employees, their families and the
                community as a whole. This principle is one of the core values
                that makes us stand out in the industry.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Statewide Service Coverage
          </h2>
          <div className="glass-effect p-8 rounded-xl">
            <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
              Proudly serving all of North Carolina, from the Triangle (Raleigh,
              Durham, Cary) to Charlotte, Greensboro, Winston-Salem, Asheville,
              Wilmington, and everywhere in between.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Contact us today to learn how our Professional Interior Architects
              and expert craftsmen can transform your space with custom glass
              and aluminum solutions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-teal)]">
            Get In Touch
          </h2>
          <div className="bg-[var(--brand-grey)] rounded-lg p-6">
            <p className="text-[17px] mb-4">
              Ready to start your project? Our professional interior architects
              are standing by to provide a free consultation and detailed
              AutoCAD design for your glass and aluminum needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
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
            <div className="flex gap-4 items-center">
              <span className="text-[16px] font-medium">Follow us:</span>
              <a
                href="https://www.facebook.com/profile.php?id=61580048543297"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-teal)] hover:text-[var(--brand-turquoise)] transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/northglassraleigh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-teal)] hover:text-[var(--brand-turquoise)] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
