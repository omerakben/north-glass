import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsEvents from "./(site)/_components/AnalyticsEvents";
import ConsentBanner from "./(site)/_components/ConsentBanner";
import Footer from "./(site)/_components/Footer";
import Header from "./(site)/_components/Header";
import "./globals.css";
import { ScrollProvider } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northglassnc.com"),
  title: {
    default:
      "North Glass LLC – Residential Glass Experts Across North Carolina",
    template: "%s | North Glass LLC",
  },
  description:
    "Premium residential glass solutions across North Carolina: frameless shower doors, window replacement, custom mirrors. Commercial & aluminum capabilities when needed. Free estimates.",
  applicationName: "North Glass LLC",
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://northglassnc.com/",
    title: "North Glass LLC – Residential Glass (Showers, Windows, Mirrors) NC",
    description:
      "Frameless showers, window replacement & custom mirrors statewide. Residential-first specialists with design support. Free quote.",
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
    title: "North Glass LLC – Residential Glass Specialists NC",
    description:
      "Residential glass: showers, windows, mirrors across North Carolina. Design & aluminum support when projects need it.",
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
    "@type": "LocalBusiness",
    name: "North Glass LLC",
    url: "https://northglassnc.com/",
    telephone: "+1 (984) 268-8490",
    email: "mailto:info@northglassnc.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: ["North Carolina", "Raleigh", "Durham", "Cary", "Chapel Hill"],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61580048543297",
      "https://www.instagram.com/northglassraleigh",
    ],
    description:
      "Residential glass specialists (frameless showers, windows, mirrors) serving all of North Carolina with supporting commercial & aluminum capabilities.",
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
        <ScrollProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ScrollProvider>
        <ConsentBanner />
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
