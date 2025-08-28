import {
  Building2,
  DoorOpen,
  Grid3X3,
  Home,
  MapPin,
  Navigation,
  PenTool,
  RectangleHorizontal,
  ShowerHead,
  Sparkles,
  Store,
  Table2,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Glass & Aluminum Services – Residential & Commercial | North Carolina",
  description:
    "Complete glass and aluminum services across North Carolina. Frameless showers, windows, mirrors, storefronts, railings by professional interior architects.",
  alternates: { canonical: "/services" },
};

const services: Array<{
  href: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
}> = [
  {
    href: "/services/architectural-design-services",
    title: "Architectural Design Services",
    blurb: "Professional custom design consultation and planning services.",
    icon: PenTool,
  },
  {
    href: "/services/frameless-glass-shower-doors",
    title: "Frameless Glass Shower Doors",
    blurb: "Custom frameless shower enclosures installed with precision.",
    icon: ShowerHead,
  },
  {
    href: "/services/window-replacement",
    title: "Window Replacement",
    blurb: "Replace foggy or broken glass and improve efficiency.",
    icon: RectangleHorizontal,
  },
  {
    href: "/services/mirrors",
    title: "Mirrors & Mirrored Walls",
    blurb: "Custom-cut mirrors for baths, gyms, and decor.",
    icon: Sparkles,
  },
  {
    href: "/services/sliding-glass-patio-doors",
    title: "Sliding Glass Patio Doors",
    blurb: "New or replacement sliding door units and panels.",
    icon: DoorOpen,
  },
  {
    href: "/services/window-and-door-screens",
    title: "Window & Door Screens",
    blurb: "Custom screen repair and fabrication.",
    icon: Grid3X3,
  },
  {
    href: "/services/glass-table-tops-and-shelves",
    title: "Glass Table Tops & Shelves",
    blurb: "Protective tops and floating shelves cut to size.",
    icon: Table2,
  },
  {
    href: "/services/glass-office-doors",
    title: "Glass Office Doors & Partitions",
    blurb: "Modern office fronts, conference rooms, and doors.",
    icon: Building2,
  },
  {
    href: "/services/staircase-glass-railings",
    title: "Staircase Glass Railings",
    blurb: "Sleek interior/exterior glass balustrades.",
    icon: Navigation,
  },
  {
    href: "/services/commercial-storefronts",
    title: "Commercial Storefronts",
    blurb: "Storefront glass and door services for businesses.",
    icon: Store,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-teal)] to-[var(--brand-turquoise)] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Glass & Aluminum Services
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professional residential and commercial glass and aluminum
              solutions across North Carolina. From custom design to expert
              installation, we deliver exceptional results with Interior
              Architect precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80">
              <div className="flex items-center gap-2">
                <Home size={20} />
                <span>Residential Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={20} />
                <span>Commercial Services</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Statewide Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            North Glass LLC provides end-to-end custom glass and aluminum
            solutions for homes and businesses across North Carolina. Explore
            our comprehensive services below.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const IconComponent = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group block rounded-xl card-professional p-6 focus:outline-none focus-brand"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-brand-light group-hover:bg-brand-secondary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div className="font-semibold text-lg md:text-xl text-brand-primary group-hover:text-brand-secondary transition-colors text-shadow-soft">
                      {s.title}
                    </div>
                  </div>
                  <div className="text-base text-brand-gray-medium leading-relaxed">
                    {s.blurb}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
