import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact North Glass",
  description:
    "Call or email North Glass for a free estimate. We respond within 1 business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="max-w-prose text-[17px]">
        Prefer to talk now? Call us at <a className="underline" href="tel:919-000-0000">919-000-0000</a> or email
        <a className="underline ml-1" href="mailto:info@northglassnc.com">info@northglassnc.com</a>.
      </p>
      {/* TODO: Contact form per PRD */}
    </main>
  );
}
