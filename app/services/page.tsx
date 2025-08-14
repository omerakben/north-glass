import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glass Services in Raleigh–Durham – Residential & Commercial",
  description:
    "Explore all services: frameless shower doors, window replacement, mirrors, storefronts, glass railings and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Our Glass Services</h1>
      <p className="text-balance text-[17px] max-w-prose">
        North Glass LLC provides end-to-end custom glass solutions for homes and
        businesses across the Triangle. Choose a category below.
      </p>
      {/* TODO: Replace with ServiceCard grid and IA-compliant links */}
    </main>
  );
}
