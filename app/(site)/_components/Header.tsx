"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, Phone } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-[18px] tracking-tight">North Glass</Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <div className="relative group">
            <button className="font-medium" aria-haspopup="true" aria-expanded="false">Residential</button>
            {/* TODO: dropdown links */}
          </div>
          <div className="relative group">
            <button className="font-medium" aria-haspopup="true" aria-expanded="false">Commercial</button>
            {/* TODO: dropdown links */}
          </div>
          <Link href="/services" className="font-medium">All Services</Link>
          <Link href="/about" className="font-medium">About</Link>
          <Link href="/blog" className="font-medium">Blog</Link>
          <Link href="/contact" className="font-medium">Contact</Link>
          <Link href="/request-quote" className="ml-4 inline-flex items-center h-10 px-4 rounded-md text-white" style={{backgroundColor: "var(--brand-turquoise)", color: "#00353f"}}>Request a Quote</Link>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <a href="tel:919-000-0000" aria-label="Call North Glass" className="p-2" style={{color: "var(--brand-teal)"}}>
            <Phone size={22} />
          </a>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              <Link href="/services" onClick={() => setOpen(false)}>All Services</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              <Link href="/request-quote" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center h-10 px-4 rounded-md text-white" style={{backgroundColor: "var(--brand-turquoise)", color: "#00353f"}}>Request a Quote</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
