"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle, LanguageToggle } from "./toggles";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.caseStudies, href: "/case-studies" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <FoundtitionMark className="w-7 h-7" />
          <span className="font-brand text-foreground text-lg sm:text-xl leading-none">
            Foundition
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="tel:+16476186488"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            +1 (647) 618-6488
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background text-xs font-medium rounded-md hover:bg-foreground/90 transition-all"
          >
            {t.nav.ctaShort}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile cluster */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="mt-2 px-4 py-2.5 bg-foreground text-background text-sm font-medium rounded-md text-center"
          >
            {t.nav.ctaLong}
          </a>
        </div>
      )}
    </header>
  );
}

export function FoundtitionMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <rect width="100" height="100" rx="14" fill="#1B6CA8" />
      <path
        d="M22 18 L78 18 L78 36 L40 36 L40 48 L62 48 L62 64 L40 64 L40 86 L22 86 Z"
        fill="white"
      />
      <rect x="52" y="48" width="14" height="16" fill="#E8762C" />
    </svg>
  );
}
