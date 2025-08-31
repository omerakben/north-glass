import { Calendar, Compass, MapPin, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | Interior Architect Projects | North Glass NC",
  description:
    "Explore detailed case studies showcasing our Interior Architect involvement and AutoCAD design process for premium glass and aluminum installations across North Carolina.",
  keywords:
    "interior architect glass design, AutoCAD architectural glass, case studies North Carolina, professional glass installation, aluminum design process",
  openGraph: {
    title: "Case Studies | Interior Architect Projects | North Glass NC",
    description:
      "Detailed project case studies featuring professional Interior Architect design and AutoCAD precision across North Carolina.",
  },
};

interface CaseStudy {
  id: string;
  title: string;
  location: string;
  projectType: "residential" | "commercial";
  serviceCategory: string;
  completionDate: string;
  clientType: string;
  thumbnailImage: string;
  thumbnailAlt: string;
  featured: boolean;
  excerpt: string;
  tags: string[];
  architectInvolvement: string;
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "luxury-master-bath-cary",
    title: "Luxury Master Bath Transformation with Interior Architect Design",
    location: "Cary, NC",
    projectType: "residential",
    serviceCategory: "Frameless Shower Doors",
    completionDate: "2024",
    clientType: "Homeowner",
    thumbnailImage:
      "/images/frameless-glass-shower-doors/after-shower-door.png",
    thumbnailAlt:
      "Luxury frameless glass shower with interior architect design in Cary master bathroom",
    featured: true,
    excerpt:
      "Complete master bathroom redesign featuring custom frameless glass shower enclosure with precision AutoCAD design and Interior Architect space planning optimization.",
    tags: [
      "Interior Architect",
      "AutoCAD Design",
      "Frameless Shower",
      "Space Planning",
    ],
    architectInvolvement: "Full space planning and design optimization",
    href: "/case-studies/luxury-master-bath-cary",
  },
  {
    id: "commercial-office-raleigh",
    title: "Corporate Office Glass Partition System with Architectural Design",
    location: "Raleigh, NC",
    projectType: "commercial",
    serviceCategory: "Glass Office Doors",
    completionDate: "2024",
    clientType: "Corporate Office",
    thumbnailImage:
      "/images/glass-office-doors/commercial-aluminum-door-system.png",
    thumbnailAlt:
      "Modern glass office partition system designed with AutoCAD precision in Raleigh",
    featured: true,
    excerpt:
      "Multi-floor office renovation featuring integrated glass and aluminum partition systems with AutoCAD-designed workflow optimization and professional space planning.",
    tags: [
      "Commercial Design",
      "Office Partitions",
      "AutoCAD Systems",
      "Workflow Design",
    ],
    architectInvolvement: "Workflow analysis and space optimization",
    href: "/case-studies/commercial-office-raleigh",
  },
  {
    id: "modern-staircase-durham",
    title:
      "Contemporary Staircase Glass Railing with Architectural Integration",
    location: "Durham, NC",
    projectType: "residential",
    serviceCategory: "Staircase Railings",
    completionDate: "2024",
    clientType: "Homeowner",
    thumbnailImage: "/images/staircase-glass-railings/after-stairs.png",
    thumbnailAlt:
      "Modern glass staircase railing with interior architect design integration in Durham home",
    featured: false,
    excerpt:
      "Open-concept home renovation featuring custom glass staircase railings designed to maximize light flow and spatial continuity through professional architectural planning.",
    tags: [
      "Staircase Design",
      "Light Optimization",
      "Open Concept",
      "Architectural Planning",
    ],
    architectInvolvement: "Structural integration and light flow analysis",
    href: "/case-studies/modern-staircase-durham",
  },
];

// Schema markup for case studies
const CaseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "North Glass Case Studies",
  description:
    "Detailed case studies showcasing Interior Architect involvement and AutoCAD design process",
  itemListElement: caseStudies.map((study, index) => ({
    "@type": "CreativeWork",
    position: index + 1,
    name: study.title,
    description: study.excerpt,
    url: `https://northglassnc.com${study.href}`,
    image: `https://northglassnc.com${study.thumbnailImage}`,
    author: {
      "@type": "Organization",
      name: "North Glass LLC",
    },
    datePublished: study.completionDate,
    keywords: study.tags.join(", "),
  })),
};

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter((study) => study.featured);
  const allStudies = caseStudies;

  return (
    <div className="min-h-screen">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CaseStudiesSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-teal)] to-[var(--brand-turquoise)] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies: Interior Architect Excellence
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Explore detailed project stories showcasing our professional
              Interior Architects and precision AutoCAD design process
              delivering exceptional glass and aluminum solutions across North
              Carolina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80">
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>Professional Interior Architects</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass size={20} />
                <span>AutoCAD Precision Design</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Statewide Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Highlighted case studies demonstrating the value of Interior
            Architect involvement and our comprehensive AutoCAD design process
            in delivering exceptional results.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredStudies.map((study) => (
              <Link
                key={study.id}
                href={study.href}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={study.thumbnailImage}
                    alt={study.thumbnailAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        study.projectType === "residential"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {study.projectType === "residential"
                        ? "Residential"
                        : "Commercial"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[var(--brand-turquoise)] text-[var(--brand-teal)]">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--brand-teal)] transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{study.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{study.completionDate}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--brand-teal)]">
                      {study.serviceCategory}
                    </span>
                    <span className="text-[var(--brand-turquoise)] font-medium group-hover:underline">
                      Read Full Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            All Case Studies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Browse our complete collection of project case studies showcasing
            Interior Architect expertise across residential and commercial glass
            and aluminum installations.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {allStudies.map((study) => (
              <Link
                key={study.id}
                href={study.href}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={study.thumbnailImage}
                    alt={study.thumbnailAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        study.projectType === "residential"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {study.projectType === "residential"
                        ? "Residential"
                        : "Commercial"}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--brand-teal)] transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{study.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{study.completionDate}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {study.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-[var(--brand-teal)]">
                      {study.serviceCategory}
                    </span>
                    <span className="text-[var(--brand-turquoise)] group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--brand-teal)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Own Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience the North Glass difference with professional Interior
            Architect design and precision AutoCAD planning for your glass and
            aluminum project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-[var(--brand-turquoise)] text-[var(--brand-teal)] rounded-lg hover:bg-white transition-colors font-semibold"
            >
              Get Free Quote + AutoCAD Design
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[var(--brand-teal)] transition-colors font-semibold"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
