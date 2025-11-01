"use client";
import {
  BookOpen,
  Building2,
  Calculator,
  ChevronDown,
  ChevronRight,
  FileText,
  Grid3x3,
  Home,
  Info,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [mobileResidentialOpen, setMobileResidentialOpen] = useState(false);
  const [mobileCommercialOpen, setMobileCommercialOpen] = useState(false);
  const resRef = useRef<HTMLDivElement>(null);
  const comRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (resRef.current && !resRef.current.contains(e.target as Node))
        setResidentialOpen(false);
      if (comRef.current && !comRef.current.contains(e.target as Node))
        setCommercialOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  // Ensure portal is only rendered client-side and lock body scroll when menu is open
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const original = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original || "";
    }
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [open, mounted]);
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-black/10">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 md:gap-4 group"
          aria-label="North Glass home"
        >
          {/* Logo Icon */}
          <div className="relative h-12 w-12 md:h-16 md:w-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/north-glass-logo.png"
              alt="North Glass"
              width={64}
              height={64}
              className="h-full w-full object-contain drop-shadow-md"
              priority
            />
          </div>
          {/* Company Name & Tagline */}
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
              North Glass
            </span>
            <span className="hidden sm:block text-[10px] md:text-xs text-gray-600 font-medium tracking-wide uppercase">
              Residential · Commercial · Design
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <div className="relative" ref={resRef}>
            <button
              className="font-medium inline-flex items-center gap-1 h-10"
              aria-expanded={residentialOpen}
              aria-haspopup="true"
              onClick={() => setResidentialOpen((v) => !v)}
            >
              <Home size={16} />
              Residential
              <ChevronDown size={16} />
            </button>
            {residentialOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-72 rounded-md border border-black/10 bg-white p-2 shadow-lg"
              >
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/frameless-glass-shower-doors"
                >
                  Frameless Shower Doors
                </Link>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/window-replacement"
                >
                  Window Replacement
                </Link>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/aluminum-windows"
                >
                  Aluminum Windows
                </Link>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/sliding-glass-patio-doors"
                >
                  Sliding Patio Doors
                </Link>
              </div>
            )}
          </div>
          <div className="relative" ref={comRef}>
            <button
              className="font-medium inline-flex items-center gap-1 h-10"
              aria-haspopup="true"
              aria-expanded={commercialOpen}
              onClick={() => setCommercialOpen((v) => !v)}
            >
              <Building2 size={16} />
              Commercial <ChevronDown size={16} />
            </button>
            {commercialOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-72 rounded-md border border-black/10 bg-white p-2 shadow-lg"
              >
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/glass-office-doors"
                >
                  Glass Office Doors &amp; Partitions
                </Link>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/staircase-glass-railings"
                >
                  Staircase Glass Railings
                </Link>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/commercial-storefronts"
                >
                  Commercial Storefronts
                </Link>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/pergolas"
                >
                  Pergolas
                </Link>
                <div className="border-t border-black/10 my-2"></div>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5 font-medium"
                  href="/services/architectural-design-services"
                >
                  <span className="text-sm font-normal text-black/60">
                    Professional
                  </span>
                  <br />
                  Architectural Design Services
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/services"
            className="font-medium inline-flex items-center gap-1 h-10"
          >
            <Grid3x3 size={16} />
            All Services
          </Link>
          <Link
            href="/about"
            className="font-medium inline-flex items-center gap-1 h-10"
          >
            <Info size={16} />
            About
          </Link>
          <Link
            href="/case-studies"
            className="font-medium inline-flex items-center gap-1 h-10"
          >
            <FileText size={16} />
            Case Studies
          </Link>
          <Link
            href="/blog"
            className="font-medium inline-flex items-center gap-1 h-10"
          >
            <BookOpen size={16} />
            Blog
          </Link>
          <Link
            href="/contact"
            className="font-medium inline-flex items-center gap-1 h-10"
          >
            <Mail size={16} />
            Contact
          </Link>
          <Link
            href="/request-quote"
            className="ml-4 inline-flex items-center gap-2 h-10 px-4 rounded-md text-white font-bold hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-opacity-90"
            style={{
              backgroundColor: "var(--brand-turquoise)",
            }}
            data-cta="header_nav"
          >
            <Calculator size={18} />
            Get Free Estimate
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:+19849006201"
            aria-label="Call North Glass"
            className="p-3 -mr-2"
            style={{ color: "var(--brand-teal)" }}
            data-placement="header_mobile"
          >
            <Phone size={22} />
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="p-3"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {mounted &&
        open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[10000] bg-black/40"
            onClick={() => setOpen(false)}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-black/10">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="p-6" aria-label="Mobile">
                <div className="flex flex-col gap-1">
                  {/* Residential Services Section */}
                  <div>
                    <button
                      onClick={() =>
                        setMobileResidentialOpen(!mobileResidentialOpen)
                      }
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors"
                      aria-expanded={mobileResidentialOpen ? "true" : "false"}
                    >
                      <div className="flex items-center gap-3">
                        <Home size={20} className="text-blue-600" />
                        <span className="font-medium">
                          Residential Services
                        </span>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileResidentialOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {mobileResidentialOpen && (
                      <div className="ml-6 mt-2 space-y-1">
                        <Link
                          href="/services/frameless-glass-shower-doors"
                          onClick={() => setOpen(false)}
                          className="block p-2 pl-8 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Frameless Shower Doors
                        </Link>
                        <Link
                          href="/services/window-replacement"
                          onClick={() => setOpen(false)}
                          className="block p-2 pl-8 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Window Replacement
                        </Link>
                        <Link
                          href="/services/aluminum-windows"
                          onClick={() => setOpen(false)}
                          className="block p-2 pl-8 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Aluminum Windows
                        </Link>
                        <Link
                          href="/services/sliding-glass-patio-doors"
                          onClick={() => setOpen(false)}
                          className="block p-2 pl-8 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Sliding Patio Doors
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Commercial Services Section */}
                  <div>
                    <button
                      onClick={() =>
                        setMobileCommercialOpen(!mobileCommercialOpen)
                      }
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors"
                      aria-expanded={mobileCommercialOpen ? "true" : "false"}
                    >
                      <div className="flex items-center gap-3">
                        <Building2 size={20} className="text-blue-600" />
                        <span className="font-medium">Commercial Services</span>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileCommercialOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {mobileCommercialOpen && (
                      <div className="ml-6 mt-2 space-y-1">
                        <Link
                          href="/services/glass-office-doors"
                          onClick={() => setOpen(false)}
                          className="block p-2 pl-8 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Glass Office Doors & Partitions
                        </Link>
                        <Link
                          href="/services/staircase-glass-railings"
                          onClick={() => setOpen(false)}
                          className="block p-2 pl-8 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Staircase Glass Railings
                        </Link>
                        <Link
                          href="/services/commercial-storefronts"
                          onClick={() => setOpen(false)}
                          className="block p-2 pl-8 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Commercial Storefronts
                        </Link>
                        <Link
                          href="/services/pergolas"
                          onClick={() => setOpen(false)}
                          className="block p-2 pl-8 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Pergolas
                        </Link>
                        <div className="border-t border-gray-200 my-2 ml-8"></div>
                        <Link
                          href="/services/architectural-design-services"
                          onClick={() => setOpen(false)}
                          className="block p-2 pl-8 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <span className="text-sm text-gray-500">
                            Professional
                          </span>
                          <br />
                          <span className="font-medium">
                            Architectural Design Services
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-4"></div>

                  {/* Main Navigation Links */}
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <Grid3x3 size={20} className="text-blue-600" />
                    <span className="font-medium">All Services</span>
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <Info size={20} className="text-blue-600" />
                    <span className="font-medium">About</span>
                  </Link>

                  <Link
                    href="/case-studies"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <FileText size={20} className="text-blue-600" />
                    <span className="font-medium">Case Studies</span>
                  </Link>

                  <Link
                    href="/blog"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <BookOpen size={20} className="text-blue-600" />
                    <span className="font-medium">Blog</span>
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <Mail size={20} className="text-blue-600" />
                    <span className="font-medium">Contact</span>
                  </Link>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <Link
                      href="/request-quote"
                      onClick={() => setOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md text-white font-bold bg-[var(--brand-turquoise)] hover:bg-opacity-90 transition-all duration-200 min-h-[48px]"
                    >
                      <Calculator size={18} />
                      Get Free Estimate
                    </Link>
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a
                      href="tel:+19849006201"
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
                      data-placement="header_mobile_menu"
                    >
                      <Phone size={20} className="text-blue-600" />
                      <div>
                        <div className="font-medium">(984) 900-6201</div>
                        <div className="text-sm text-gray-500">
                          Call for immediate help
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
