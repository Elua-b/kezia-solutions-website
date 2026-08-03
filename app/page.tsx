import Link from "next/link";
import Image from "next/image";
import { sql, ensureFliersTable } from "../lib/db";
import {
  Briefcase,
  TrendingUp,
  Globe2,
  ArrowRight,
  Handshake,
  Cpu,
  Car,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// The flyers grid reads from the DB on every request — without this, Next
// prerenders "/" once at build time and production would keep serving that
// frozen snapshot until the next deploy, never showing newly uploaded flyers.
export const dynamic = "force-dynamic";

const heroFeatures = [
  {
    icon: Briefcase,
    title: "Business Planning & Market Access",
    body: "Helping entrepreneurs and companies enter African and global markets with a clear strategy.",
  },
  {
    icon: TrendingUp,
    title: "Investment Facilitation",
    body: "Connecting businesses, entrepreneurs, and investors with scalable growth opportunities.",
  },
  {
    icon: Globe2,
    title: "International Business Opportunities",
    body: "Building bridges between African markets and global partners, technology, and trade.",
  },
];

const topDivisions = [
  {
    id: "keziaa-solutions",
    icon: Briefcase,
    title: "Keziaa Solutions",
    tag: "Global Business Access",
    body: "Helps entrepreneurs, startups, and businesses access international opportunities and global networks.",
  },
  {
    id: "keziaa-capital",
    icon: TrendingUp,
    title: "Keziaa Capital",
    tag: "Investment Facilitation",
    body: "Connects businesses, entrepreneurs, and investors with growth and financing opportunities.",
  },
  {
    id: "technology",
    icon: Cpu,
    title: "Technology & Innovation",
    tag: "Digital & Fintech",
    body: "Connects businesses with digital technologies, AI, fintech, and emerging solutions.",
  },
  {
    id: "key-car",
    icon: Car,
    title: "Key Car",
    tag: "Automotive & Mobility",
    body: "An automotive platform connecting African customers, dealers, and international suppliers.",
  },
];

const reasons = [
  { icon: MapPinned, title: "Understanding of African Markets" },
  { icon: Globe2, title: "International Business Networks" },
  { icon: Handshake, title: "Market Entry Support" },
  { icon: ShieldCheck, title: "Long-Term Partnership Commitment" },
];

const platforms = [
  { name: "ChangeNOW", place: "Paris, France" },
  { name: "Emerging Valley", place: "Marseille, France" },
  { name: "CES", place: "Las Vegas, USA" },
  { name: "Business Leaders Forum", place: "South Korea" },
  { name: "International Youth Fellowship", place: "Global Network" },
];

const stats = [
  { value: "8", label: "Business Divisions" },
  { value: "5", label: "Global Platforms" },
  { value: "2", label: "Int'l Memberships" },
  { value: "4", label: "Continents Reached" },
];

async function getFliers() {
  try {
    await ensureFliersTable();
    const rows = await sql`
      SELECT id, title, image_url FROM fliers
      WHERE image_url IS NOT NULL
      ORDER BY created_at DESC
    `;
    return rows as { id: number; title: string | null; image_url: string }[];
  } catch {
    return [];
  }
}

export default async function Home() {
  const fliers = await getFliers();

  return (
    <div className="min-h-screen bg-white text-[#101828]">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-16 sm:pt-20 lg:pt-28 pb-40 sm:pb-48 lg:pb-56 px-6 lg:px-10 overflow-hidden">
        <Image
          src="/images/keziaa-blf-korea-group-photo.jpg"
          alt="Keziaa Business Group delegation at the Business Leaders Forum, South Korea"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1730]/88" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #F5B700 0%, transparent 40%), radial-gradient(circle at 80% 60%, #F5B700 0%, transparent 45%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[12px] tracking-[0.35em] uppercase text-[#F5B700] mb-6 font-semibold">
            Keziaa Business Group
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-white mb-6">
            Connecting Africa With<br />Global Business Opportunities
          </h1>
          <p className="text-[15px] sm:text-base text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            An African diversified business group facilitating trade, investment, technology,
            innovation, and strategic partnerships — building a trusted bridge between Africa
            and the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="text-[13px] font-bold uppercase tracking-wide bg-[#F5B700] text-[#0F1F3D] px-8 py-4 rounded-md hover:bg-white transition-colors duration-300"
            >
              Get In Touch
            </Link>
            <Link
              href="/divisions"
              className="text-[13px] font-bold uppercase tracking-wide border border-white/25 text-white px-8 py-4 rounded-md hover:border-white hover:bg-white/8 transition-colors duration-300"
            >
              Explore Our Divisions
            </Link>
          </div>
        </div>

        {/* Floating feature strip */}
        <div className="relative z-10 max-w-6xl mx-auto mt-16 lg:mt-20 -mb-64 sm:-mb-72 lg:-mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-white rounded-2xl shadow-2xl shadow-black/20 p-6 sm:p-8">
            {heroFeatures.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col sm:flex-row gap-4 px-2">
                <div className="w-12 h-12 rounded-lg bg-[#F4F6FB] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#0F1F3D]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0F1F3D] leading-snug mb-1">{title}</h3>
                  <p className="text-[12.5px] text-[#5B6B85] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* spacer to clear the floating strip */}
      <div className="h-64 sm:h-72 lg:h-28" />

      {/* ── FLIERS ───────────────────────────────────────────────── */}
      {fliers.length > 0 && (
        <section className="px-6 lg:px-10 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#0F1F3D]/45 mb-3 block">
                Latest Updates
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F1F3D] leading-tight">
                Flyers & Announcements
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {fliers.map(({ id, title, image_url }) => (
                <div key={id} className="rounded-xl overflow-hidden shadow-sm border border-[#0F1F3D]/8 bg-white">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={image_url}
                      alt={title || "Keziaa Business Group flyer"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {title && (
                    <p className="px-3 py-2.5 text-[12px] font-semibold text-[#0F1F3D] text-center truncate">
                      {title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHO WE ARE ───────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#F5B700]/90 bg-[#0F1F3D] inline-block px-3 py-1.5 rounded mb-5">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#0F1F3D]">
              We Believe Africa's Growth Is Accelerated Through Strong Partnerships.
            </h2>
          </div>
          <div className="lg:pt-2">
            <div className="w-10 h-[3px] bg-[#F5B700] mb-6" />
            <p className="text-[15px] text-[#5B6B85] leading-relaxed mb-4">
              Keziaa Business Group is an African diversified business group focused on connecting
              Africa with global opportunities through trade, investment, technology, innovation,
              and strategic partnerships.
            </p>
            <p className="text-[15px] text-[#5B6B85] leading-relaxed mb-8">
              We support entrepreneurs, startups, companies, investors, and international
              organizations by creating connections between African markets and global business
              ecosystems.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wide text-[#0F1F3D] group"
            >
              More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TOP DIVISIONS ────────────────────────────────────────── */}
      <section className="bg-[#F4F6FB] px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#0F1F3D]/45 mb-3 block">
              Our Business Divisions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F1F3D] leading-tight">
              Diversified Companies Driving African Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDivisions.map(({ id, icon: Icon, title, tag, body }) => (
              <Link
                key={id}
                href={`/divisions#${id}`}
                className="group bg-white rounded-xl p-7 border border-[#0F1F3D]/6 hover:border-[#F5B700] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0F1F3D] flex items-center justify-center mb-6 group-hover:bg-[#F5B700] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white group-hover:text-[#0F1F3D] transition-colors duration-300" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#F5B700] font-bold mb-2 block">
                  {tag}
                </span>
                <h3 className="text-[16px] font-bold text-[#0F1F3D] mb-2">{title}</h3>
                <p className="text-[13px] text-[#5B6B85] leading-relaxed">{body}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/divisions"
              className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wide bg-[#0F1F3D] text-white px-8 py-4 rounded-md hover:bg-[#F5B700] hover:text-[#0F1F3D] transition-colors duration-300"
            >
              View All 8 Divisions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER ──────────────────────────────────────────── */}
      <section className="bg-[#0F1F3D] px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#F5B700]/80 mb-3 block">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              The Right African Partner for Global Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map(({ icon: Icon, title }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 rounded-full border border-[#F5B700]/30 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-[#F5B700]" />
                </div>
                <h3 className="text-[14px] font-bold text-white leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0F1F3D]/8 border-y border-[#0F1F3D]/8">
          {stats.map(({ value, label }) => (
            <div key={label} className="py-10 md:py-14 text-center bg-white">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F1F3D] mb-2">{value}</div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#5B6B85]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GLOBAL PLATFORMS ─────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#0F1F3D]/45 mb-3 block">
                International Exposure
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F1F3D] leading-tight">
                Engaged With Global Platforms
              </h2>
            </div>
            <Link
              href="/about#international-exposure"
              className="text-[13px] font-bold uppercase tracking-wide text-[#0F1F3D] border-b-2 border-[#F5B700] pb-1"
            >
              Learn More
            </Link>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 mb-10">
            <Image
              src="/images/keziaa-blf-korea-presentation-2.jpg"
              alt="Keziaa delegates at the Business Leaders Forum, South Korea"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1730]/85 via-[#0A1730]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#F5B700] font-bold mb-2 block">
                Business Leaders Forum
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Keziaa Delegates Engaging With Global Partners in South Korea
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {platforms.map(({ name, place }) => (
              <div
                key={name}
                className="rounded-xl border border-[#0F1F3D]/8 p-6 hover:border-[#F5B700] hover:shadow-lg transition-all duration-300"
              >
                <Globe2 className="w-6 h-6 text-[#F5B700] mb-4" />
                <h3 className="text-[14px] font-bold text-[#0F1F3D] mb-1 leading-snug">{name}</h3>
                <p className="text-[12px] text-[#5B6B85]">{place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1730] px-6 py-20 sm:py-24 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, #F5B700 0%, transparent 35%), radial-gradient(circle at 85% 70%, #F5B700 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#F5B700]/80 mb-5 block">
            Partnership Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            Ready to Build Bridges Between Africa and the World?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="text-[13px] font-bold uppercase tracking-wide bg-[#F5B700] text-[#0F1F3D] px-9 py-4 rounded-md hover:bg-white transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/divisions"
              className="text-[13px] font-bold uppercase tracking-wide border border-white/25 text-white px-9 py-4 rounded-md hover:border-white hover:bg-white/8 transition-colors duration-300"
            >
              Explore Divisions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
