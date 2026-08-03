"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, LinkedinIcon } from "lucide-react";
import Logo from "./Logo";

const LINKEDIN_URL = "https://www.linkedin.com/company/kezia-businesses/";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/divisions", label: "Divisions" },
  { href: "/contact", label: "Contact" },
];

const DIVISIONS = [
  { href: "/divisions#keziaa-solutions", label: "Keziaa Solutions" },
  { href: "/divisions#keziaa-capital", label: "Keziaa Capital" },
  { href: "/divisions#korea-africa", label: "Korea–Africa Business Dev." },
  { href: "/divisions#technology", label: "Technology & Innovation" },
  { href: "/divisions#key-car", label: "Key Car" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Pre-footer CTA */}
      <div className="bg-[#0A0A0A] px-6 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#F5B700]/70 mb-3">
              Keziaa Business Group · Rwanda, Africa
            </p>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.1] text-white">
              Let's Build the Bridge Between<br className="hidden sm:block" /> Africa and the World
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="text-[12px] font-bold uppercase tracking-wide bg-[#F5B700] text-[#141414] px-8 py-4 rounded-md hover:bg-white transition-colors duration-300 text-center"
            >
              Partner With Us
            </Link>
            <Link
              href="/divisions"
              className="text-[12px] font-bold uppercase tracking-wide border border-white/25 text-white px-8 py-4 rounded-md hover:border-white hover:bg-white/8 transition-colors duration-300 text-center"
            >
              Explore Divisions
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#141414] px-6 lg:px-20 pt-14 pb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Logo light size="sm" />
            <p className="text-[13px] text-white/45 leading-relaxed mt-5">
              An African diversified business group connecting Africa with global trade,
              investment, technology, and strategic partnerships.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="text-[11px] tracking-[0.3em] uppercase text-[#F5B700]/70 mb-6">Navigate</h5>
            <nav className="flex flex-col gap-[14px]">
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-[#F5B700]/40 group-hover:w-5 group-hover:bg-[#F5B700] transition-all duration-300" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Divisions */}
          <div>
            <h5 className="text-[11px] tracking-[0.3em] uppercase text-[#F5B700]/70 mb-6">Divisions</h5>
            <nav className="flex flex-col gap-[14px]">
              {DIVISIONS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] text-white/50 hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[11px] tracking-[0.3em] uppercase text-[#F5B700]/70 mb-6">Contact</h5>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5B700]/60 mt-0.5 flex-shrink-0" />
                <span className="text-[13px] text-white/50 leading-relaxed">Rwanda, Africa</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5B700]/60 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+250795296952" className="text-[13px] text-white/50 hover:text-white transition-colors duration-300">
                    +250 795 296 952
                  </a>
                  <a href="tel:+250785680659" className="text-[13px] text-white/50 hover:text-white transition-colors duration-300">
                    +250 785 680 659
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5B700]/60 flex-shrink-0" />
                <a href="mailto:info@keziaa.rw" className="text-[13px] text-white/50 hover:text-white transition-colors duration-300">
                  info@keziaa.rw
                </a>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-md bg-white/8 flex items-center justify-center group-hover:bg-[#F5B700] flex-shrink-0 transition-colors duration-300">
                  <LinkedinIcon className="w-4 h-4 text-[#F5B700] group-hover:text-[#141414] transition-colors duration-300" />
                </span>
                <span className="text-[13px] text-white/50 group-hover:text-white transition-colors duration-300">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30 tracking-wide">
            © {year} Keziaa Business Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
