"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/the-reset", label: "The Reset" },
  { href: "/mommy-reset", label: "Mommy Reset" },
  { href: "/add-ons", label: "Add-Ons" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#f0ece4] border-b border-[#e8e2d9] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-[#7a9478] flex items-center justify-center">
            <span
              className="text-xs text-[#3d5c44] tracking-widest"
              style={{ fontFamily: "var(--font-lora), serif" }}
            >
              cn
            </span>
          </div>
          <span
            className="text-[#3d5c44] text-sm font-light tracking-wide"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Cozy Nest
          </span>
        </Link>

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
        </nav>

        {/* Book CTA */}
        <div className="hidden md:block">
          <Link
            href="/book"
            className="bg-[#3d5c44] text-[#f0ece4] text-xs tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-[#2c3a2e] transition-colors"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book a Visit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#3d5c44]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#f0ece4] border-t border-[#e8e2d9] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#3d5c44] text-xs tracking-widest uppercase hover:text-[#c87c6a] transition-colors"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="bg-[#3d5c44] text-[#f0ece4] text-xs tracking-widest uppercase px-5 py-2.5 rounded-full text-center hover:bg-[#2c3a2e] transition-colors"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book a Visit
          </Link>
        </div>
      )}
    </header>
  );
}
