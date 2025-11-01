"use client";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Star,
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
        <div className="container mx-auto px-6 py-8">
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {/* Company Information Panel */}
            <div className="glass-effect-premium rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    src="/images/north-glass-logo.png"
                    alt="North Glass logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain drop-shadow-md"
                  />
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

              <div className="text-sm text-blue-100 mb-4">
                Serving All of North Carolina with Interior Architect expertise
              </div>

              {/* Contact Information - Phone */}
              <div className="glass-effect rounded-md p-3 border border-white/10">
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
                      href="tel:+19849006201"
                      data-placement="footer"
                    >
                      (984) 900-6201
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="glass-effect rounded-md p-3 border border-white/10 mt-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--brand-blue-secondary)]/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-[var(--brand-blue-secondary)]" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">
                      Visit Us
                    </div>
                    <a
                      className="text-white font-medium hover:text-[var(--brand-blue-light)] transition-colors"
                      href="https://maps.app.goo.gl/yek2U69dXjiMEWYc7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      920 W Chatham St #1
                      <br />
                      Cary, NC 27511
                    </a>
                  </div>
                </div>
              </div>

              {/* Email & Social Media Combined */}
              <div className="mt-4 pt-4 border-t border-white/10">
                {/* Email */}
                <div className="glass-effect rounded-md p-3 border border-white/10 mb-4">
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

                {/* Social Media */}
                <div>
                  <div className="text-xs text-blue-200 uppercase tracking-wide mb-3">
                    Follow Us
                  </div>
                  <div className="flex gap-3">
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
                      href="https://www.instagram.com/northglassNC/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-effect w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-[var(--brand-blue-secondary)]/20 hover:text-[var(--brand-blue-light)] transition-all duration-300 group"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-3 w-3 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://www.yelp.com/biz/north-glass-cary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-effect w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-[var(--brand-blue-secondary)]/20 hover:text-[var(--brand-blue-light)] transition-all duration-300 group"
                      aria-label="Find us on Yelp"
                    >
                      <Star className="h-3 w-3 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav
              className="glass-effect-premium rounded-lg p-6"
              aria-label="Footer Services"
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                Services
              </h4>
              <div className="grid gap-3">
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
              className="glass-effect-premium rounded-lg p-6"
              aria-label="Footer Company"
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                Company
              </h4>
              <div className="grid gap-3 mb-6">
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

              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4 pt-4 border-t border-white/10">
                Legal
              </h4>
              <div className="grid gap-3">
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
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col items-center gap-4">
              {/* Main Copyright */}
              <div className="text-center text-xs text-blue-200">
                © {new Date().getFullYear()} North Glass LLC. All rights
                reserved. Professional glass and aluminum solutions across North
                Carolina.
              </div>

              {/* Signature - Built with Care */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-blue-200/80">
                <div className="flex items-center gap-2">
                  <span>Crafted with</span>
                  <span
                    className="text-red-400 animate-pulse"
                    aria-label="love"
                  >
                    ❤️
                  </span>
                  <span>by</span>
                  <a
                    href="https://omerakben.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-100 hover:text-white transition-colors duration-200 underline decoration-dotted underline-offset-4"
                  >
                    Omer Akben
                  </a>
                </div>
                <span className="hidden sm:inline text-blue-300/50">•</span>
                <span className="text-blue-200/70 text-center sm:text-left">
                  Built to industry standards, designed for excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
