import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About North Glass",
  description:
    "Local, experienced glass specialists serving Raleigh–Durham–Cary with quality craftsmanship and service.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">About North Glass</h1>
      <p className="max-w-prose text-[17px]">
        We proudly serve the Triangle with premium residential and commercial glass solutions.
      </p>
    </main>
  );
}
