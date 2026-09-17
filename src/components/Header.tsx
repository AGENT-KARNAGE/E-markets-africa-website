"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Investors", href: "/investors" },
  { label: "Partners", href: "/partners" },
  { label: "Leadership", href: "/leadership" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-navy/8 shadow-sm"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20 py-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-8 h-8 bg-navy flex items-center justify-center shrink-0">
            <div
              className="w-3 h-3 bg-gold"
              style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            />
          </div>
          <span className="font-bold text-navy text-base tracking-tight font-display whitespace-nowrap">
            E-Markets <span className="text-gold">Africa</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-[#4B5563] hover:text-navy transition-colors duration-150 no-underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-semibold text-white bg-navy px-5 py-2.5 hover:bg-navy-light transition-colors duration-200 no-underline"
          >
            Work With Us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-3 h-0.5 bg-current" />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-navy/8 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-navy no-underline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-sm font-semibold text-white bg-navy px-5 py-3 text-center no-underline"
          >
            Work With Us
          </Link>
        </div>
      )}
    </header>
  );
}
