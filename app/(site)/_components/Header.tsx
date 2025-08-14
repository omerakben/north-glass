"use client";
import { ChevronDown, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const resRef = useRef<HTMLDivElement>(null);
  const comRef = useRef<HTMLDivElement>(null);
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
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-[18px] tracking-tight">
          North Glass
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <div className="relative" ref={resRef}>
            <button
              className="font-medium inline-flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded={residentialOpen}
              onClick={() => setResidentialOpen((v) => !v)}
            >
              Residential <ChevronDown size={16} />
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
                  href="/services/mirrors"
                >
                  Mirrors &amp; Mirrored Walls
                </Link>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/sliding-glass-patio-doors"
                >
                  Sliding Patio Doors
                </Link>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/window-and-door-screens"
                >
                  Window &amp; Door Screens
                </Link>
                <Link
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  href="/services/glass-table-tops-and-shelves"
                >
                  Glass Table Tops &amp; Shelves
                </Link>
              </div>
            )}
          </div>
          <div className="relative" ref={comRef}>
            <button
              className="font-medium inline-flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded={commercialOpen}
              onClick={() => setCommercialOpen((v) => !v)}
            >
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
              </div>
            )}
          </div>
          <Link href="/services" className="font-medium">
            All Services
          </Link>
          <Link href="/about" className="font-medium">
            About
          </Link>
          <Link href="/blog" className="font-medium">
            Blog
          </Link>
          <Link href="/contact" className="font-medium">
            Contact
          </Link>
          <Link
            href="/request-quote"
            className="ml-4 inline-flex items-center h-10 px-4 rounded-md text-white"
            style={{
              backgroundColor: "var(--brand-turquoise)",
              color: "#00353f",
            }}
            data-cta="header_nav"
          >
            Request a Quote
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:919-000-0000"
            aria-label="Call North Glass"
            className="p-2"
            style={{ color: "var(--brand-teal)" }}
            data-placement="header_mobile"
          >
            <Phone size={22} />
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              <Link href="/services" onClick={() => setOpen(false)}>
                All Services
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/blog" onClick={() => setOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
              <Link
                href="/request-quote"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center h-10 px-4 rounded-md text-white"
                style={{
                  backgroundColor: "var(--brand-turquoise)",
                  color: "#00353f",
                }}
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
