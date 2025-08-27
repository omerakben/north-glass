import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Glass Services in Raleigh–Durham – Residential & Commercial",
  description:
    "Explore all services: frameless shower doors, window replacement, mirrors, storefronts, glass railings and more.",
  alternates: { canonical: "/services" },
}

const services: Array<{ href: string; title: string; blurb: string }> = [
  { href: "/services/frameless-glass-shower-doors", title: "Frameless Glass Shower Doors", blurb: "Custom frameless shower enclosures installed with precision." },
  { href: "/services/window-replacement", title: "Window Replacement", blurb: "Replace foggy or broken glass and improve efficiency." },
  { href: "/services/mirrors", title: "Mirrors & Mirrored Walls", blurb: "Custom-cut mirrors for baths, gyms, and decor." },
  { href: "/services/sliding-glass-patio-doors", title: "Sliding Glass Patio Doors", blurb: "New or replacement sliding door units and panels." },
  { href: "/services/window-and-door-screens", title: "Window & Door Screens", blurb: "Custom screen repair and fabrication." },
  { href: "/services/glass-table-tops-and-shelves", title: "Glass Table Tops & Shelves", blurb: "Protective tops and floating shelves cut to size." },
  { href: "/services/glass-office-doors", title: "Glass Office Doors & Partitions", blurb: "Modern office fronts, conference rooms, and doors." },
  { href: "/services/staircase-glass-railings", title: "Staircase Glass Railings", blurb: "Sleek interior/exterior glass balustrades." },
  { href: "/services/commercial-storefronts", title: "Commercial Storefronts", blurb: "Storefront glass and door services for businesses." },
]

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Our Glass Services</h1>
      <p className="text-balance text-[17px] max-w-prose mb-8">
        North Glass LLC provides end-to-end custom glass solutions for homes and businesses across the Triangle. Explore the services below.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="block rounded-lg border border-black/10 bg-white p-5 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--brand-turquoise)]">
            <div className="font-semibold mb-1">{s.title}</div>
            <div className="text-sm text-black/70">{s.blurb}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
