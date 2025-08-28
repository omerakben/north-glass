import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "North Glass Blog – Glass & Aluminum Tips | North Carolina",
  description:
    "Expert tips on glass and aluminum solutions across North Carolina. Shower doors, windows, mirrors, and architectural design insights from interior architects.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <p className="max-w-prose text-[17px]">
        Insights and guides from the North Glass team.
      </p>
      {/* TODO: Blog list */}
    </main>
  );
}
