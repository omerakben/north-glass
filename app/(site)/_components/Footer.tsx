import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-[var(--brand-grey)]/30">
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold">North Glass LLC</div>
          <div className="text-sm mt-2">Serving All of North Carolina</div>
          <div className="text-sm flex items-center gap-2 mt-2">
            <Phone className="h-4 w-4 text-blue-600" />
            Phone:{" "}
            <a
              className="underline"
              href="tel:+19842688490"
              data-placement="footer"
            >
              (984) 268-8490
            </a>
          </div>
          <div className="text-sm flex items-center gap-2 mt-2">
            <Mail className="h-4 w-4 text-blue-600" />
            Email:{" "}
            <a className="underline" href="mailto:info@northglassnc.com">
              info@northglassnc.com
            </a>
          </div>
          <div className="text-sm mt-2 flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61580048543297"
              target="_blank"
              rel="noopener noreferrer"
              className="underline flex items-center gap-1"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/northglassraleigh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline flex items-center gap-1"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
        <nav className="grid gap-2 content-start" aria-label="Footer">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/request-quote" data-cta="footer">
            Free Quote + Design
          </Link>
        </nav>
        <nav className="grid gap-2 content-start" aria-label="Legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </div>
      <div className="text-center text-xs py-4">
        © {new Date().getFullYear()} North Glass LLC
      </div>
    </footer>
  );
}
