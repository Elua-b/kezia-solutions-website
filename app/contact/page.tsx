import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ArrowUpRight, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const info = [
  {
    icon: MapPin,
    label: "Location",
    value: "Rwanda, Africa",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+250 795 296 952",
    value2: "+250 785 680 659",
    href: "tel:+250795296952",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@keziaa.rw",
    href: "mailto:info@keziaa.rw",
  },
  {
    icon: Globe,
    label: "Website",
    value: "keziaabusinessgroup.com",
    href: "https://keziaabusinessgroup.com",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0F1F3D] px-6 py-16 sm:py-20 text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#F5B700] mb-4 font-semibold">
          We'd Love to Hear From You
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">Contact Us</h1>
        <p className="text-[15px] text-white/55 max-w-xl mx-auto leading-relaxed mt-5">
          Reach out directly for partnership inquiries, investment opportunities, or market entry
          support — our team responds to every message personally.
        </p>
      </section>

      {/* Contact cards */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map(({ icon: Icon, label, value, value2, href }) => {
            const Card = href ? "a" : "div";
            return (
              <Card
                key={label}
                {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                className={`group flex flex-col rounded-xl border border-[#0F1F3D]/8 p-7 transition-all duration-300 ${
                  href ? "hover:border-[#F5B700] hover:shadow-lg" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#0F1F3D] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#F5B700]" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#5B6B85] font-semibold">
                    {label}
                  </span>
                  {href && (
                    <ArrowUpRight className="w-4 h-4 text-[#0F1F3D]/30 group-hover:text-[#F5B700] transition-colors" />
                  )}
                </div>
                <span className="text-[15px] font-bold text-[#0F1F3D] leading-snug">{value}</span>
                {value2 && <span className="text-[15px] font-bold text-[#0F1F3D] leading-snug">{value2}</span>}
              </Card>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-10 rounded-xl bg-[#F4F6FB] p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <p className="text-sm text-[#5B6B85] leading-relaxed max-w-md">
            Based in Rwanda, Keziaa Business Group connects entrepreneurs, investors, and
            organizations across Africa and the world. Email or call us directly and our team
            will follow up.
          </p>
          <a
            href="mailto:info@keziaa.rw"
            className="flex-shrink-0 inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wide bg-[#0F1F3D] text-white px-8 py-4 rounded-md hover:bg-[#F5B700] hover:text-[#0F1F3D] transition-colors duration-300"
          >
            Email Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1730] px-6 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-6 max-w-2xl mx-auto">
          Explore How We Can Work Together
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/divisions"
            className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wide bg-[#F5B700] text-[#0F1F3D] px-9 py-4 rounded-md hover:bg-white transition-colors duration-300"
          >
            View Our Divisions
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wide border border-white/25 text-white px-9 py-4 rounded-md hover:border-white hover:bg-white/8 transition-colors duration-300"
          >
            More About Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
