"use client";

import { MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[var(--color-navbar-bg)] backdrop-blur-xl border-[var(--color-border)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className={`flex items-center justify-between px-8 max-w-7xl mx-auto transition-all duration-500 ${scrolled ? "py-4" : "py-12"}`}>
        <div className="flex items-center gap-6">

        <Link href="/" className="relative shrink-0 group">
          <Image
            src="/images/logo/logo.png"
            alt="Introvera"
            width={140}
            height={36}
            className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = link.href === "/" 
               ? pathname === "/" 
               : link.href.startsWith("/") 
                  ? pathname.startsWith(link.href) 
                  : false;

            return (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 text-m transition-colors duration-300 rounded-lg group ${isActive ? "text-[var(--color-accent)] font-medium" : "font-light text-white hover:text-[var(--color-accent)]"}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-[var(--color-accent)] transition-all duration-300 rounded-full ${isActive ? "w-3/5" : "w-0 group-hover:w-3/5"}`} />
              </Link>
            </li>
            );
          })}
        </ul>
        </div>

        <span className="hidden md:inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
          <Link
            href="https://wa.me/94783640894"
            className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
          >
            Get Started
            <MessageCircleMore size={22} />
          </Link>
        </span>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
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
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[var(--color-navbar-bg)] backdrop-blur-xl border-t border-[var(--color-border)]">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" 
                 ? pathname === "/" 
                 : link.href.startsWith("/") 
                    ? pathname.startsWith(link.href) 
                    : false;

              return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-sm rounded-lg transition-colors duration-200 ${isActive ? "font-semibold text-[var(--color-accent)] bg-[var(--color-accent-subtle)]" : "font-medium text-[var(--color-text-secondary)] hover:text-white"}`}
                >
                  {link.label}
                </Link>
              </li>
              );
            })}
          </ul>
          <Link
            href="https://wa.me/94783640894"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block w-full text-center px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
