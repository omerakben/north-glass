"use client";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Background Wave Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-wave.png"
          alt=""
          fill
          className="object-cover object-center opacity-10"
          priority={false}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-section opacity-95"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Glass Effect Header Strip */}
        <div className="glass-effect-premium border-b border-white/20">
          <div className="container mx-auto px-6 py-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-sm text-blue-100 mt-1">
                  Professional glass & aluminum solutions across North Carolina
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/request-quote"
                  className="btn-primary"
                  data-cta="footer-hero"
                >
                  Get Free Quote + Design
                </Link>
                <button
                  onClick={scrollToTop}
                  className="glass-effect px-4 py-2 rounded-md text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 min-h-[44px]"
                  aria-label="Back to top"
                >
                  <ArrowUp className="h-4 w-4" />
                  <span className="hidden sm:inline">Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="container mx-auto px-6 py-4">
          <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Information Panel */}
            <div className="lg:col-span-2 glass-effect-premium rounded-lg p-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">
                    North Glass LLC
                  </div>
                  <div className="text-sm text-blue-100">
                    Professional Glass & Aluminum Company
                  </div>
                </div>
              </div>

              <div className="text-sm text-blue-100 mb-2">
                Serving All of North Carolina with Interior Architect expertise
              </div>

              {/* Contact Information Grid */}
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="glass-effect rounded-md p-2 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--brand-blue-secondary)]/20 rounded-full flex items-center justify-center">
                      <Phone className="h-4 w-4 text-[var(--brand-blue-secondary)]" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 uppercase tracking-wide">
                        Call Us
                      </div>
                      <a
                        className="text-white font-medium hover:text-[var(--brand-blue-light)] transition-colors"
                        href="tel:+19842688490"
                        data-placement="footer"
                      >
                        (984) 268-8490
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-md p-2 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--brand-blue-secondary)]/20 rounded-full flex items-center justify-center">
                      <Mail className="h-4 w-4 text-[var(--brand-blue-secondary)]" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 uppercase tracking-wide">
                        Email Us
                      </div>
                      <a
                        className="text-white font-medium hover:text-[var(--brand-blue-light)] transition-colors break-all"
                        href="mailto:info@northglassnc.com"
                      >
                        info@northglassnc.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-2 pt-2 border-t border-white/10">
                <div className="text-xs text-blue-200 uppercase tracking-wide mb-1">
                  Follow Us
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61580048543297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-effect w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-[var(--brand-blue-secondary)]/20 hover:text-[var(--brand-blue-light)] transition-all duration-300 group"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-3 w-3 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.instagram.com/northglassraleigh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-effect w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-[var(--brand-blue-secondary)]/20 hover:text-[var(--brand-blue-light)] transition-all duration-300 group"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-3 w-3 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav
              className="glass-effect-premium rounded-lg p-3"
              aria-label="Footer Services"
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-2">
                Services
              </h4>
              <div className="grid gap-2">
                <Link
                  href="/services"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  All Services
                </Link>
                <Link
                  href="/services/frameless-glass-shower-doors"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Shower Doors
                </Link>
                <Link
                  href="/services/window-replacement"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Windows
                </Link>
                <Link
                  href="/services/aluminum-windows"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Aluminum Windows
                </Link>
                <Link
                  href="/services/mirrors"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Mirrors
                </Link>
                <Link
                  href="/services/commercial-storefronts"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Commercial
                </Link>
              </div>
            </nav>

            {/* Company & Legal Links */}
            <nav
              className="glass-effect-premium rounded-lg p-3"
              aria-label="Footer Company"
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-2">
                Company
              </h4>
              <div className="grid gap-2 mb-3">
                <Link
                  href="/about"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Contact
                </Link>
                <Link
                  href="/case-studies"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Case Studies
                </Link>
              </div>

              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-2">
                Legal
              </h4>
              <div className="grid gap-2">
                <Link
                  href="/privacy"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  Terms of Service
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="glass-effect border-t border-white/10">
          <div className="container mx-auto px-6 py-3">
            <div className="text-center text-xs text-blue-200">
              © {new Date().getFullYear()} North Glass LLC. All rights reserved.
              Professional glass and aluminum solutions across North Carolina.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
