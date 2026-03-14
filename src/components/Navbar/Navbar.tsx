"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-navbar-bg)] backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-6">

        <Link href="/" className="relative shrink-0 group">
          <Image
            src="images/logo/logo.svg"
            alt="Introvera"
            width={140}
            height={36}
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-m font-light text-[var(--color-text-primary)] transition-colors duration-300 hover:text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-accent-subtle)] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-3/5 rounded-full" />
              </Link>
            </li>
          ))}
        </ul>
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full ring-2 ring-[var(--color-accent)]/50 ring-offset-2 ring-offset-black shadow-[0_0_20px_var(--color-accent-glow)] transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_35px_var(--color-accent-glow)]"
        >
          Get Started
          <MessageCircleMore size={18} />
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--color-accent-subtle)] transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {/* <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[var(--color-navbar-bg)] backdrop-blur-xl border-t border-[var(--color-border)]">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] hover:bg-[var(--color-accent-subtle)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block w-full text-center px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
          >
            Get Started
          </Link>
        </div>
      </div> */}
    </nav>
  );
}
