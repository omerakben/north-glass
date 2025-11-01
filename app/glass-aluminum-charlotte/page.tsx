import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Charlotte Glass & Aluminum Construction Experts | North Glass",
  description:
    "Professional glass and aluminum construction services in Charlotte, NC. Complete shower enclosures, commercial storefronts, windows, and architectural design with AutoCAD. Free estimates.",
  keywords: [
    "glass construction Charlotte",
    "aluminum construction Charlotte",
    "Charlotte glass contractor",
    "aluminum storefront Charlotte",
    "glass curtain walls Charlotte",
    "Charlotte commercial glazing",
    "architectural glass Charlotte",
    "interior architects Charlotte NC",
    "AutoCAD design Charlotte",
    "Charlotte glass and aluminum",
  ],
  openGraph: {
    title: "Charlotte Glass & Aluminum Construction | North Glass",
    description:
      "Leading glass and aluminum construction company serving Charlotte, NC with professional interior architects and AutoCAD design services.",
    url: "https://northglassnc.com/glass-aluminum-charlotte",
    siteName: "North Glass",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://northglassnc.com/glass-aluminum-charlotte",
  },
};

// Schema markup for Charlotte location
const charlotteLocationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://northglassnc.com/glass-aluminum-charlotte",
  name: "North Glass - Charlotte Services",
  description:
    "Professional glass and aluminum construction services in Charlotte, NC",
  url: "https://northglassnc.com/glass-aluminum-charlotte",
  telephone: "+1-984-900-6201",
  email: "info@northglassnc.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 35.2271,
        longitude: -80.8431,
      },
      geoRadius: "50000", // 50km radius
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 35.2271,
      longitude: -80.8431,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Charlotte Glass & Aluminum Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frameless Glass Shower Doors",
          description: "Custom shower enclosures for Charlotte homes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Aluminum Storefronts",
          description: "Professional storefront design and installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural Design Services",
          description: "AutoCAD-designed glass and aluminum systems",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61580048543297",
    "https://www.instagram.com/northglassraleigh",
  ],
};

export default function CharlotteLocationPage() {
  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(charlotteLocationSchema),
        }}
      />

      <div className="min-h-screen">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#40E0D0]">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
              Charlotte Glass & Aluminum Services
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#40E0D0] to-[#005F73] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Charlotte Glass & Aluminum Construction Experts
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Professional glass and aluminum construction services throughout
                Charlotte, NC. Complete shower enclosures, commercial
                storefronts, and architectural design solutions with AutoCAD
                precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/request-quote"
                  className="bg-white text-[#00353f] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get Free Charlotte Estimate
                </Link>
                <a
                  href="tel:+19849006201"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00353f] transition-colors text-lg"
                >
                  Call (984) 900-6201
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Charlotte-Specific Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Glass & Aluminum Services for Charlotte Residents & Businesses
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Serving Charlotte&apos;s diverse neighborhoods from Uptown and
                South End to Myers Park and Ballantyne with professional glass
                and aluminum solutions backed by interior architect expertise.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Residential Services */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#00353f]">
                    Charlotte Residential Glass
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Frameless glass shower doors for luxury homes
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Energy-efficient window replacement
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Custom bathroom and wall mirrors
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Glass table tops and shelving
                    </li>
                  </ul>
                </div>

                {/* Commercial Services */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#00353f]">
                    Charlotte Commercial Glass
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Modern storefront design & installation
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Office glass doors and partitions
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Glass curtain wall systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Glass railings for commercial spaces
                    </li>
                  </ul>
                </div>

                {/* Aluminum Systems */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#00353f]">
                    Charlotte Aluminum Systems
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Custom aluminum storefront frames
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Aluminum window and door systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      Architectural aluminum fabrication
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#40E0D0] mr-2">•</span>
                      AutoCAD-designed complete systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose North Glass for Charlotte Projects */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Charlotte Chooses North Glass
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-[#00353f]">
                    Professional Interior Architects
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Unlike typical glass contractors serving Charlotte, North
                    Glass employs professional interior architects who bring
                    innovative design solutions to your architectural projects.
                    Our team understands Charlotte&apos;s diverse architectural
                    styles, from historic Myers Park homes to modern Uptown
                    high-rises.
                  </p>

                  <h3 className="text-2xl font-semibold mb-6 text-[#00353f]">
                    AutoCAD Design Process
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Every Charlotte project includes detailed AutoCAD
                    architectural designs, ensuring precision and professional
                    presentation. This technical capability sets us apart from
                    competitors who rely on basic measurements and sketches.
                  </p>

                  <h3 className="text-2xl font-semibold mb-6 text-[#00353f]">
                    Complete System Solutions
                  </h3>
                  <p className="text-gray-700">
                    We specialize in complete glass and aluminum systems, not
                    just installation. From consultation and design to
                    fabrication and installation, we handle every aspect of your
                    Charlotte project with professional expertise.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 text-center text-[#00353f]">
                    Charlotte Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-[#40E0D0] mb-2">
                        Urban Charlotte
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Uptown/Center City</li>
                        <li>• South End</li>
                        <li>• NoDa</li>
                        <li>• Plaza Midwood</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#40E0D0] mb-2">
                        Charlotte Suburbs
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Myers Park</li>
                        <li>• Ballantyne</li>
                        <li>• Dilworth</li>
                        <li>• SouthPark</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#40E0D0] mb-2">
                        East Charlotte
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Matthews</li>
                        <li>• Mint Hill</li>
                        <li>• University City</li>
                        <li>• Concord</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#40E0D0] mb-2">
                        South Charlotte
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Pineville</li>
                        <li>• Fort Mill</li>
                        <li>• Waxhaw</li>
                        <li>• Indian Trail</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charlotte Project Gallery Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Charlotte Glass & Aluminum Projects
              </h2>
              <p className="text-gray-600 mb-8">
                Recent installations throughout the Charlotte metropolitan area
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/commercial-storefronts/commercial-front.png"
                      alt="Modern glass and aluminum storefront in Charlotte"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Uptown Storefront</h3>
                    <p className="text-gray-600 text-sm">
                      Commercial glass & aluminum
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/frameless-glass-shower-doors/shower-big.png"
                      alt="Luxury frameless shower in Charlotte home"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Myers Park Residence</h3>
                    <p className="text-gray-600 text-sm">
                      Frameless shower enclosure
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/glass-office-doors/commercial-office3.jpg"
                      alt="Professional glass office doors in Charlotte"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">South End Office</h3>
                    <p className="text-gray-600 text-sm">
                      Glass office doors & partitions
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/services"
                className="inline-block bg-[#40E0D0] text-[#00353f] px-8 py-3 rounded-lg font-semibold hover:bg-[#36c5d0] transition-colors"
              >
                View All Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#00353f] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Charlotte Glass & Aluminum Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get your free estimate with custom design consultation. Our
              professional team is ready to transform your Charlotte space with
              premium glass and aluminum solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-quote"
                className="bg-[#40E0D0] text-[#00353f] px-8 py-4 rounded-lg font-semibold hover:bg-[#36c5d0] transition-colors text-lg"
              >
                Get Free Charlotte Estimate
              </Link>
              <a
                href="tel:+19849006201"
                className="border-2 border-[#40E0D0] text-[#40E0D0] px-8 py-4 rounded-lg font-semibold hover:bg-[#40E0D0] hover:text-[#00353f] transition-colors text-lg"
              >
                Call Our Charlotte Team
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-6">
                North Glass - Charlotte Services
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold text-[#00353f] mb-2">Phone</h4>
                  <a
                    href="tel:+19849006201"
                    className="text-[#40E0D0] hover:underline"
                  >
                    (984) 900-6201
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-[#00353f] mb-2">Email</h4>
                  <a
                    href="mailto:info@northglassnc.com"
                    className="text-[#40E0D0] hover:underline"
                  >
                    info@northglassnc.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-[#00353f] mb-2">
                    Service Area
                  </h4>
                  <p>Charlotte Metro & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
