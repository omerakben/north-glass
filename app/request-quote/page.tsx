import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Request Free Quote + AutoCAD Design – North Glass | North Carolina",
  description:
    "Get a free estimate and professional AutoCAD design for your glass and aluminum project. North Carolina's premier glass and aluminum company with Interior Architects.",
  alternates: { canonical: "/request-quote" },
};

export default function RequestQuotePage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">
        Request Free Quote + AutoCAD Design
      </h1>
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-12 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-teal)]">
              Professional Design Process
            </h2>
            <p className="text-[17px] mb-6">
              Our Professional Interior Architects provide complimentary AutoCAD
              design consultation for your glass and aluminum project. Get
              expert design guidance plus an accurate estimate for complete
              system delivery.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">
                  Expert Design Consultation
                </h3>
                <p className="text-sm text-gray-700">
                  AutoCAD architectural workflows for precise solutions
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Complete System Solutions
                </h3>
                <p className="text-sm text-gray-700">
                  Not just installation - full design through delivery
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Glass & Aluminum Expertise
                </h3>
                <p className="text-sm text-gray-700">
                  Dual expertise for comprehensive project solutions
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--brand-grey)] rounded-lg p-6">
            <h3 className="font-semibold mb-4">Quick Response</h3>
            <p className="text-[16px] mb-4">
              We typically respond within one business day with your free design
              consultation and estimate.
            </p>
            <p className="text-[16px]">
              Prefer to talk? Call{" "}
              <a
                className="text-[var(--brand-turquoise)] hover:underline font-semibold"
                href="tel:+19842688490"
              >
                (984) 268-8490
              </a>
            </p>
          </div>
        </div>
      </div>
      <QuoteForm />
    </main>
  );
}
