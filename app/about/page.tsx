import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Globe2,
  Handshake,
  MapPinned,
  ShieldCheck,
  Building,
  CheckCircle2,
  ArrowRight,
  Award,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const mission = [
  "Creating international business connections.",
  "Supporting companies entering African markets.",
  "Helping African businesses access global opportunities.",
  "Facilitating trade, investment, and technology partnerships.",
  "Building long-term relationships between Africa and global partners.",
];

const platforms = [
  {
    name: "ChangeNOW",
    place: "Paris, France",
    body: "A global impact platform connecting entrepreneurs, investors, innovators, and organizations focused on sustainable solutions.",
  },
  {
    name: "Emerging Valley",
    place: "Marseille, France",
    body: "A platform connecting Africa and Europe through entrepreneurship, innovation, investment, and partnerships.",
  },
  {
    name: "CES (Consumer Electronics Show)",
    place: "Las Vegas, United States",
    body: "A global technology platform showcasing innovation and emerging technologies.",
  },
  {
    name: "Business Leaders Forum (BLF)",
    place: "South Korea",
    body: "An international leadership and business network connecting entrepreneurs, leaders, and organizations.",
  },
  {
    name: "International Youth Fellowship (IYF)",
    place: "Global Network",
    body: "An international organization focused on leadership development, education, and global exchange.",
  },
];

const memberships = [
  {
    name: "European Business Chamber (EBCR)",
    place: "Rwanda",
    body: "Membership supporting connections between European and Rwandan businesses, investment opportunities, and private sector collaboration.",
  },
  {
    name: "American Chamber of Commerce (AmCham)",
    place: "Rwanda",
    body: "Membership connecting businesses, investors, and entrepreneurs through international business networks.",
  },
];

const strengths = [
  { icon: MapPinned, title: "Understanding of African Markets" },
  { icon: Globe2, title: "International Business Networks" },
  { icon: Handshake, title: "Market Entry Support" },
  { icon: Building, title: "Business Development Experience" },
  { icon: ShieldCheck, title: "Ability to Connect Companies With Local Partners" },
  { icon: CheckCircle2, title: "Strong Entrepreneurial Ecosystem" },
  { icon: Award, title: "Commitment to Long-Term Partnerships" },
];

const partnerTypes = [
  "Global companies seeking African markets.",
  "Manufacturers and technology providers.",
  "Investors interested in Africa.",
  "African businesses seeking international partners.",
  "Distributors and representatives.",
  "Innovation and entrepreneurship organizations.",
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <Header />

      {/* Hero */}
      <section className="relative px-6 py-20 sm:py-24 text-center overflow-hidden">
        <Image
          src="/images/keziaa-blf-korea-presentation-1.jpg"
          alt="Keziaa Business Group at an international business forum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
        <div className="relative z-10">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#F5B700] mb-4 font-semibold">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            A Trusted Bridge Between Africa and the World
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 lg:px-10 py-16 sm:py-20 max-w-4xl mx-auto text-center">
        <p className="text-[16px] text-[#5C5C5C] leading-relaxed mb-4">
          Keziaa Business Group is an African diversified business group focused on connecting
          Africa with global opportunities through trade, investment, technology, innovation, and
          strategic partnerships.
        </p>
        <p className="text-[16px] text-[#5C5C5C] leading-relaxed mb-4">
          We support entrepreneurs, startups, companies, investors, and international
          organizations by creating connections between African markets and global business
          ecosystems. Through our different companies and business divisions, Keziaa works to
          facilitate market access, international partnerships, investment opportunities, and
          sustainable business growth.
        </p>
        <p className="text-[16px] text-[#141414] font-semibold leading-relaxed">
          Our vision is to become a trusted bridge connecting Africa with the world.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#F2F2F0] px-6 lg:px-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-[#141414]/6">
            <div className="w-12 h-12 rounded-lg bg-[#141414] flex items-center justify-center mb-6">
              <Eye className="w-5 h-5 text-[#F5B700]" />
            </div>
            <h2 className="text-2xl font-black text-[#141414] mb-4">Vision</h2>
            <p className="text-[15px] text-[#5C5C5C] leading-relaxed">
              To become a leading African business platform connecting global companies,
              investors, technologies, and opportunities with African markets.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 sm:p-10 border border-[#141414]/6">
            <div className="w-12 h-12 rounded-lg bg-[#141414] flex items-center justify-center mb-6">
              <Target className="w-5 h-5 text-[#F5B700]" />
            </div>
            <h2 className="text-2xl font-black text-[#141414] mb-5">Mission</h2>
            <ul className="space-y-3">
              {mission.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-[#5C5C5C] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B700] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* International Exposure */}
      <section id="international-exposure" className="px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#141414]/45 mb-3 block">
              International Exposure & Global Platforms
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#141414] leading-tight">
              Engaged With Entrepreneurship, Innovation & Investment Networks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { src: "/images/keziaa-blf-korea-roundtable-1.jpg", alt: "Keziaa delegates in a roundtable session at the Business Leaders Forum, South Korea" },
              { src: "/images/keziaa-blf-korea-roundtable-2.jpg", alt: "Keziaa delegates networking at the Business Leaders Forum, South Korea" },
              { src: "/images/keziaa-blf-korea-delegation.jpg", alt: "Keziaa delegation touring an exhibit in South Korea" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative h-48 sm:h-56 rounded-xl overflow-hidden">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#5C5C5C] text-center mb-14">
            Keziaa delegates at the Business Leaders Forum (BLF), South Korea.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map(({ name, place, body }) => (
              <div key={name} className="rounded-xl border border-[#141414]/8 p-7">
                <Globe2 className="w-6 h-6 text-[#F5B700] mb-4" />
                <h3 className="text-[15px] font-bold text-[#141414] mb-1 leading-snug">{name}</h3>
                <p className="text-[11px] tracking-wide uppercase text-[#F5B700] font-semibold mb-3">{place}</p>
                <p className="text-[13px] text-[#5C5C5C] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-[#F2F2F0] px-6 lg:px-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#141414]/45 mb-3 block">
              International Business Memberships
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#141414] leading-tight">
              Connected With Global Business Communities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {memberships.map(({ name, place, body }) => (
              <div key={name} className="bg-white rounded-xl p-7 border border-[#141414]/6">
                <h3 className="text-[15px] font-bold text-[#141414] mb-1 leading-snug">{name}</h3>
                <p className="text-[11px] tracking-wide uppercase text-[#F5B700] font-semibold mb-3">{place}</p>
                <p className="text-[13px] text-[#5C5C5C] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-[#141414] px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#F5B700]/80 mb-3 block">
              Why Partner With Keziaa Business Group
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              The Right African Partner for Global Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#F5B700]/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#F5B700]" />
                </div>
                <h3 className="text-[14px] font-bold text-white leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities & Commitment */}
      <section className="px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#141414]/45 mb-3 block">
              Partnership Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#141414] leading-tight mb-6">
              Keziaa Welcomes Partnerships With
            </h2>
            <ul className="space-y-3">
              {partnerTypes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-[#5C5C5C] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B700] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#141414]/45 mb-3 block">
              Our Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#141414] leading-tight mb-6">
              Accelerating Africa's Growth
            </h2>
            <p className="text-[14px] text-[#5C5C5C] leading-relaxed mb-6">
              Keziaa Business Group believes that Africa's growth will be accelerated through
              strong partnerships, innovation, investment, technology exchange, and international
              collaboration. We are committed to building bridges between Africa and the world.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wide bg-[#141414] text-white px-8 py-4 rounded-md hover:bg-[#F5B700] hover:text-[#141414] transition-colors duration-300"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
