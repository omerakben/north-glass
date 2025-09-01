import AutoCarousel from "@/app/(site)/_components/AutoCarousel";
import FAQ from "@/app/(site)/_components/FAQ";
import ProcessStepper from "@/components/ProcessStepper";
import { ShieldCheck, Sun, Settings } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window & Door Screens | Aluminum Frames | North Glass",
  description:
    "Professional window and door screen repair with aluminum frames across North Carolina. Custom screens and frame systems.",
  alternates: { canonical: "/services/window-and-door-screens" },
};

function ServiceJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window & Door Screen Repair",
    category: "Residential Glass Service",
    areaServed: { "@type": "AreaServed", name: "North Carolina" },
    provider: {
      "@type": "LocalBusiness",
      name: "North Glass LLC",
      telephone: "+1 (984) 268-8490",
    },
    url: "https://northglassnc.com/services/window-and-door-screens",
    description:
      "Professional screen repair and replacement for windows, doors, and porches including pet-resistant and solar screen options.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function ScreensPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <nav aria-label="Breadcrumb" className="text-sm mb-4">
        <ol className="flex flex-wrap gap-1 text-black/70">
          <li>
            <Link href="/" className="underline">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/services" className="underline">
              Services
            </Link>
          </li>
          <li>/</li>
          <li aria-current="page" className="text-black">
            Window & Door Screens
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Window & Door Screens
      </h1>
      <p className="max-w-prose text-[17px] mb-6 mx-auto text-center">
        Complete screen system solutions for enhanced home comfort. From
        consultation and custom sizing through fabrication and installation, we
        deliver comprehensive screen solutions for windows and doors.
      </p>

      {/* Image Carousel */}
      <div className="flex justify-center my-8">
        <AutoCarousel
          images={[
            {
              src: "/images/window-and-door-screens/bug-screen-installation-nc.jpg",
              alt: "Professional window and door screen installation with aluminum frames in North Carolina",
            },
          ]}
          className="max-w-4xl w-full"
        />
      </div>

      <div className="text-center mb-8">
        <a href="/request-quote" className="btn-primary inline-block">
          Screen Solutions - Free Estimate
        </a>
      </div>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Our Screen Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Aluminum Frames</h3>
            <p className="text-black/70">
              Strong, long-lasting frames built to your exact openings.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pet & Solar Screens</h3>
            <p className="text-black/70">
              Options to resist pet damage or block heat and UV.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Installation</h3>
            <p className="text-black/70">
              Quick turnaround with professional results.
            </p>
          </div>
        </div>
      </section>

      <ProcessStepper
        steps={[
          {
            title: "Consultation & Measurement",
            description:
              "We inspect your existing screens and take precise measurements.",
            details: [
              "On-site evaluation",
              "Material and mesh recommendations",
              "Budget discussion",
            ],
          },
          {
            title: "Fabrication",
            description: "Screens and frames are built to your specifications.",
            details: [
              "Aluminum frame cutting",
              "Screen mesh selection",
            ],
          },
          {
            title: "Installation",
            description: "Our team installs and adjusts each screen for a perfect fit.",
            details: [
              "Removal of old screens",
              "Final inspection",
            ],
          },
        ]}
      />

      <FAQ
        items={[
          {
            question: "Do you use aluminum frames for screens?",
            answer:
              "Yes, we specialize in high-quality aluminum screen frames across North Carolina. Our aluminum frames provide superior durability, weather resistance, and long-term performance compared to plastic alternatives.",
          },
          {
            question: "What's better: aluminum or plastic screen frames?",
            answer:
              "Aluminum frames offer superior strength, weather resistance, and longevity. They won't warp, crack, or fade like plastic frames, making them ideal for North Carolina's varied climate conditions.",
          },
          {
            question: "Do you offer pet-resistant screens?",
            answer:
              "Yes, we install heavy-duty pet screens that are 7 times stronger than standard screens, perfect for homes with dogs or cats. Combined with our aluminum frames, they provide maximum durability.",
          },
          {
            question: "Can you make custom-sized screens with aluminum frames?",
            answer:
              "Absolutely. We fabricate custom aluminum-framed screens to fit any window or door opening, including unusual shapes and oversized applications using precise AutoCAD measurements.",
          },
          {
            question: "What is solar screening?",
            answer:
              "Solar screens block up to 90% of UV rays and reduce heat gain, lowering cooling costs while maintaining visibility from inside. Our aluminum frames ensure long-term solar screen performance.",
          },
          {
            question: "Do you service screens statewide in North Carolina?",
            answer:
              "Yes, we provide aluminum screen frame services across all of North Carolina, from the Triangle to the mountains and coast, with the same quality standards everywhere.",
          },
        ]}
      />
      <ServiceJsonLd />
    </main>
  );
}

