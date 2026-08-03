"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/divisions", label: "Divisions" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden sm:block bg-[#141414] text-white/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-9 flex items-center justify-between text-[11px]">
          <span className="tracking-wide">Connecting Africa with Global Business Opportunities</span>
          <div className="flex items-center gap-6">
            <a href="tel:+250795296952" className="flex items-center gap-1.5 hover:text-[#F5B700] transition-colors">
              <Phone className="w-3 h-3" /> +250 795 296 952
            </a>
            <a href="mailto:info@keziaa.rw" className="flex items-center gap-1.5 hover:text-[#F5B700] transition-colors">
              <Mail className="w-3 h-3" /> info@keziaa.rw
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-[#141414]/8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <Link href="/">
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center gap-9">
              {NAV_LINKS.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-[13px] font-semibold tracking-wide transition-colors relative pb-1 ${
                      active ? "text-[#141414]" : "text-[#141414]/60 hover:text-[#141414]"
                    }`}
                  >
                    {label}
                    {active && <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#F5B700]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="text-[12px] font-bold uppercase tracking-wide bg-[#F5B700] text-[#141414] px-6 py-3 rounded-md hover:bg-[#141414] hover:text-white transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-[#141414]"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#141414]/60" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-400 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#141414]/8">
            <Logo size="sm" />
            <button onClick={() => setMobileOpen(false)} className="text-[#141414] p-1">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="px-6 py-8 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold py-3 border-b border-[#141414]/8 ${
                  pathname === href ? "text-[#141414]" : "text-[#141414]/60"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-center text-[12px] font-bold uppercase tracking-wide bg-[#F5B700] text-[#141414] px-6 py-3.5 rounded-md"
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
