import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "./(site)/_components/Footer";
import Header from "./(site)/_components/Header";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://northglassnc.com"),
  title: {
    default:
      "North Glass LLC – Residential & Commercial Glass in Raleigh–Durham",
    template: "%s | North Glass LLC",
  },
  description:
    "Premium glass services in the Triangle: frameless shower doors, window replacement, mirrors, storefronts. Free estimates.",
  applicationName: "North Glass LLC",
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://northglassnc.com/",
    title:
      "North Glass LLC – Glass Shower Doors, Windows, Mirrors | Raleigh–Durham",
    description:
      "Residential & commercial glass: frameless showers, window replacement, mirrors, storefronts. Request a free quote.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "North Glass – custom glass solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Glass LLC – Custom Glass in Raleigh–Durham",
    description:
      "Frameless showers, windows, mirrors, storefronts. Get a free estimate from North Glass.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "North Glass LLC",
    url: "https://northglassnc.com/",
    telephone: "919-000-0000",
    email: "mailto:info@northglassnc.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: "Raleigh–Durham–Cary, NC",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JPCMSF26RJ"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JPCMSF26RJ', { anonymize_ip: true });
          `}
        </Script>
        <Header />
        {children}
        <Footer />
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
