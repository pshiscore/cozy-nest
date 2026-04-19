"use client";

import Link from "next/link";
import { useState } from "react";
import FaqModal from "./FaqModal";

const navLinks = [
  { href: "/the-reset", label: "The Reset" },
  { href: "/mommy-reset", label: "Mommy Reset" },
  { href: "/add-ons", label: "Add-Ons" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const mobileLinkStyle = {
  fontFamily: "var(--font-poppins), sans-serif",
  fontSize: "9px",
  letterSpacing: "0.08em",
};

export default function Header() {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <>
      <header className="bg-[#f0ece4] border-b border-[#e8e2d9] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#7a9478] flex items-center justify-center">
              <span
                className="text-xs text-[#3d5c44] tracking-widest"
                style={{ fontFamily: "var(--font-lora), serif" }}
              >
                cn
              </span>
            </div>
            <span
              className="hidden md:inline text-[#3d5c44] text-sm font-light tracking-wide"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Cozy Nest
            </span>
          </Link>

          {/* Mobile nav — inline links, no Book button */}
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#3d5c44] uppercase hover:text-[#c87c6a] transition-colors"
                style={mobileLinkStyle}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setFaqOpen(true)}
              className="text-[#3d5c44] uppercase hover:text-[#c87c6a] transition-colors"
              style={mobileLinkStyle}
            >
              FAQ
            </button>
          </nav>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#3d5c44] text-xs tracking-widest uppercase hover:text-[#c87c6a] transition-colors"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setFaqOpen(true)}
              className="text-[#3d5c44] text-xs tracking-widest uppercase hover:text-[#c87c6a] transition-colors"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Book CTA */}
          <div className="hidden md:block">
            <Link
              href="/book"
              className="bg-[#3d5c44] text-[#f0ece4] text-xs tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-[#2c3a2e] transition-colors"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </header>

      {faqOpen && <FaqModal onClose={() => setFaqOpen(false)} />}
    </>
  );
}
