"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
];

// Pages with a full-bleed dark hero — navbar starts transparent
const HERO_PAGES = ["/", "/nosotros", "/servicios", "/contacto"];

export default function Navbar() {
  const pathname = usePathname();
  const hasHero = HERO_PAGES.includes(pathname);
  const [scrolled, setScrolled] = useState(!hasHero);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Reset when navigating to a new page
    setScrolled(!hasHero || window.scrollY > 50);
    const handleScroll = () => setScrolled(!hasHero || window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasHero]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="4 Ases Sales"
            width={280}
            height={97}
            className={`h-28 w-auto transition-all duration-500 ${
              !scrolled ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-ink/60 hover:text-ink"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className={`text-sm font-medium px-6 py-2.5 border transition-all duration-300 tracking-wide ${
              scrolled
                ? "border-navy text-navy hover:bg-navy hover:text-white"
                : "border-white/50 text-white hover:bg-white hover:text-ink"
            }`}
          >
            Contacto
          </Link>
        </div>

        <button
          className={`md:hidden p-3 transition-colors ${
            scrolled ? "text-ink" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-8 pb-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-ink/70 hover:text-ink py-3.5 text-sm border-b border-border last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-4 block border border-navy text-navy text-center py-3 text-sm font-medium hover:bg-navy hover:text-white transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
