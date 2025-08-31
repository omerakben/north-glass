import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsEvents from "./(site)/_components/AnalyticsEvents";
import ConsentBanner from "./(site)/_components/ConsentBanner";
import Footer from "./(site)/_components/Footer";
import Header from "./(site)/_components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northglassnc.com"),
  title: {
    default: "North Glass LLC – Glass and Aluminum Company | North Carolina",
    template: "%s | North Glass LLC",
  },
  description:
    "Professional glass and aluminum company across North Carolina: frameless shower doors, window replacement, custom mirrors, storefronts. Interior architect design. Free estimates.",
  keywords: [
    "glass company",
    "aluminum company",
    "Hotel",
    "Hotel Shower",
    "Hotel Shower Door",
    "Hotel Projects",
  ],
  applicationName: "North Glass LLC",
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://northglassnc.com/",
    title: "North Glass LLC – Glass and Aluminum Company | North Carolina",
    description:
      "Professional glass and aluminum solutions statewide. Frameless showers, windows, mirrors, storefronts with interior architect design. Free quote.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "North Glass – custom glass and aluminum solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Glass LLC – Glass and Aluminum Company | North Carolina",
    description:
      "Professional glass and aluminum solutions across North Carolina. Frameless showers, windows, mirrors, storefronts with interior architect design.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "North Glass LLC",
    url: "https://northglassnc.com/",
    telephone: "+1 (984) 268-8490",
    email: "mailto:info@northglassnc.com",
    logo: "https://northglassnc.com/favicon.ico",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: [
      "North Carolina",
      "Raleigh",
      "Durham",
      "Cary",
      "Chapel Hill",
      "Charlotte",
      "Greensboro",
      "Winston-Salem",
      "Asheville",
      "Wilmington",
      "High Point",
      "Apex",
      "Holly Springs",
      "Morrisville",
      "Wake Forest",
      "Garner",
      "Fuquay-Varina",
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61580048543297",
      "https://www.instagram.com/northglassraleigh",
    ],
    description:
      "Professional glass and aluminum company serving all of North Carolina. Frameless showers, windows, mirrors, storefronts with interior architect design capabilities.",
    serviceOffered: [
      {
        "@type": "Service",
        name: "Frameless Glass Shower Doors",
        description:
          "Custom frameless glass shower enclosures with professional installation",
        serviceType: "Glass shower door installation",
        areaServed: "North Carolina",
      },
      {
        "@type": "Service",
        name: "Window Replacement",
        description:
          "Energy-efficient window replacement with aluminum framing systems",
        serviceType: "Window installation and replacement",
        areaServed: "North Carolina",
      },
      {
        "@type": "Service",
        name: "Commercial Glass Storefronts",
        description:
          "Custom glass and aluminum storefront systems for commercial buildings",
        serviceType: "Commercial glass installation",
        areaServed: "North Carolina",
      },
      {
        "@type": "Service",
        name: "Custom Mirrors",
        description:
          "Precision-cut custom mirrors with professional installation",
        serviceType: "Mirror installation",
        areaServed: "North Carolina",
      },
      {
        "@type": "Service",
        name: "Glass Staircase Railings",
        description: "Modern tempered glass railings with aluminum framework",
        serviceType: "Glass railing installation",
        areaServed: "North Carolina",
      },
      {
        "@type": "Service",
        name: "Architectural Design Services",
        description:
          "Professional interior architect consultation with AutoCAD design capabilities",
        serviceType: "Architectural design consultation",
        areaServed: "North Carolina",
      },
      {
        "@type": "Service",
        name: "AutoCAD Design Consultation",
        description:
          "Detailed architectural drafting and design using AutoCAD for glass and aluminum projects",
        serviceType: "AutoCAD drafting services",
        areaServed: "North Carolina",
      },
      {
        "@type": "Service",
        name: "Aluminum System Integration",
        description:
          "Custom aluminum framing and curtain wall systems for residential and commercial projects",
        serviceType: "Aluminum construction systems",
        areaServed: "North Carolina",
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Professional Interior Architect Team",
        jobTitle: "Interior Architect",
        description:
          "Licensed interior architects specializing in glass and aluminum architectural integration",
      },
    ],
    knowsAbout: [
      "Interior Architecture",
      "AutoCAD Design",
      "Glass Installation",
      "Aluminum Systems",
      "Commercial Storefronts",
      "Residential Glass Solutions",
      "Architectural Integration",
      "Custom Design Consultation",
    ],
    hasCredential: [
      "Licensed Interior Architects",
      "Professional Glass Installation",
      "AutoCAD Certified Design",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  } as const;
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <Script id="ga4-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K2THJ25R');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2THJ25R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />        <ConsentBanner />
        <AnalyticsEvents />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
