import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – North Glass LLC",
  description:
    "Terms and conditions for our glass and aluminum services across North Carolina. Professional installation and design.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="max-w-prose text-[17px]">Coming soon.</p>
    </main>
  );
}
