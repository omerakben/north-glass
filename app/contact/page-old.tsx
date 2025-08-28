import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title:
    "Contact North Glass – Free Glass & Aluminum Estimates | North Carolina",
  description:
    "Contact North Glass for a free estimate on glass and aluminum services. Professional Interior Architects serving all of North Carolina. Call (984) 268-8490.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact North Glass</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-teal)]">
            Get Your Free Estimate
          </h2>
          <p className="text-[17px] mb-6">
            Ready to discuss your glass and aluminum project? Our Professional
            Interior Architects are standing by to provide expert consultation
            and free AutoCAD design for your North Carolina project.
          </p>

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
                    href="https://www.instagram.com/northglassnc/"
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
    </main>
  );
}
