import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title:
    "Contact North Glass – Free Consultation & AutoCAD Design | North Carolina",
  description:
    "Get a free consultation with our Interior Architects. Professional glass and aluminum solutions across North Carolina. 24-hour response guarantee. Call (984) 268-8490.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-teal)] to-[var(--brand-turquoise)] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Design Consultation Today
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Connect with our professional Interior Architects for expert glass
              and aluminum solutions across North Carolina. Start with your free
              consultation and AutoCAD design – no obligation required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>Free Consultation</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm">
              <span>✓ Serving all of North Carolina</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Our Professional Interior Architects are standing by to provide
              expert consultation and free AutoCAD design for your North
              Carolina project. Start your journey to beautiful, functional
              glass and aluminum solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>✓ Licensed & Insured</span>
              <span>✓ 24-Hour Response Guarantee</span>
              <span>✓ Free Design Consultation</span>
              <span>✓ AutoCAD Precision Design</span>
              <span>✓ Statewide Service</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      className="text-[var(--brand-turquoise)] hover:underline text-lg"
                      href="tel:+19842688490"
                    >
                      (984) 268-8490
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      className="text-[var(--brand-turquoise)] hover:underline"
                      href="mailto:info@northglassnc.com"
                    >
                      info@northglassnc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-gray-700">All of North Carolina</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61580048543297"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--brand-turquoise)] hover:underline inline-flex items-center gap-1"
                      >
                        <Facebook className="h-4 w-4" />
                        Facebook
                      </a>
                      <a
                        href="https://www.instagram.com/northglassraleigh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--brand-turquoise)] hover:underline inline-flex items-center gap-1"
                      >
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
