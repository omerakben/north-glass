import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-[var(--brand-grey)]/30">
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold">North Glass LLC</div>
          <div className="text-sm mt-2">Raleigh–Durham–Cary, NC</div>
          <div className="text-sm">
            Phone: <a className="underline" href="tel:919-000-0000">919-000-0000</a>
          </div>
          <div className="text-sm">
            Email: <a className="underline" href="mailto:info@northglassnc.com">info@northglassnc.com</a>
          </div>
        </div>
        <nav className="grid gap-2 content-start" aria-label="Footer">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/request-quote">Request a Quote</Link>
        </nav>
        <nav className="grid gap-2 content-start" aria-label="Legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </div>
      <div className="text-center text-xs py-4">© {new Date().getFullYear()} North Glass LLC</div>
    </footer>
  )
}
