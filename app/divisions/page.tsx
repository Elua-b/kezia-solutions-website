import Link from "next/link";
import {
  Briefcase,
  TrendingUp,
  Globe2,
  Cpu,
  Car,
  Sun,
  Building2,
  Hotel,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const divisions = [
  {
    id: "keziaa-solutions",
    icon: Briefcase,
    name: "Keziaa Solutions",
    tag: "Global Business Access & Market Expansion",
    intro:
      "Keziaa Solutions helps entrepreneurs, startups, and businesses access international opportunities and global networks.",
    points: [
      "Supporting entrepreneurs and companies to participate in international conferences, exhibitions, and business forums.",
      "Connecting businesses with investors, partners, and international organizations.",
      "Helping startups gain international visibility.",
      "Facilitating business delegations and global networking.",
      "Supporting companies seeking market expansion opportunities.",
    ],
    closing: "Keziaa Solutions helps African businesses connect with global ecosystems for growth and collaboration.",
  },
  {
    id: "keziaa-capital",
    icon: TrendingUp,
    name: "Keziaa Capital",
    tag: "Investment Facilitation & Business Growth",
    intro: "Keziaa Capital focuses on connecting businesses, entrepreneurs, and investors with growth opportunities.",
    points: [
      "Facilitating access to investment opportunities.",
      "Connecting businesses with investors and financing networks.",
      "Supporting entrepreneurs with scalable business ideas.",
      "Linking investors with promising opportunities in Africa.",
      "Supporting business expansion and development.",
    ],
    closing: "Keziaa Capital contributes to business growth by connecting opportunities with resources.",
  },
  {
    id: "korea-africa",
    icon: Globe2,
    name: "Korea–Africa Business Development",
    tag: "Strategic Africa–Korea Connections",
    intro: "Keziaa Business Group is developing strategic connections between Africa and South Korea.",
    points: [
      "Connecting African businesses with Korean manufacturers and suppliers.",
      "Supporting Korean companies exploring African markets.",
      "Facilitating distribution and representation opportunities.",
      "Promoting technology exchange and business partnerships.",
      "Creating opportunities for Korea–Africa trade and investment cooperation.",
    ],
    closing: null,
  },
  {
    id: "technology",
    icon: Cpu,
    name: "Technology & Innovation",
    tag: "Digital, AI & Fintech Solutions",
    intro: "Keziaa promotes access to innovative solutions that support African development.",
    points: [
      "Digital technologies.",
      "Artificial Intelligence solutions.",
      "Smart business solutions.",
      "Fintech opportunities.",
      "Emerging technologies.",
    ],
    closing: "We connect businesses with innovative solutions that improve competitiveness and growth.",
  },
  {
    id: "key-car",
    icon: Car,
    name: "Key Car",
    tag: "Automotive & Mobility Solutions",
    intro: "Key Car is an automotive platform developed to connect African customers, dealers, and international automotive suppliers.",
    points: [
      "Quality vehicles from international markets.",
      "Electric vehicles (EVs).",
      "Trucks and buses.",
      "Commercial vehicles.",
      "Automotive spare parts.",
      "Mobility solutions.",
    ],
    closing: "Key Car aims to create a trusted automotive marketplace connecting Africa with reliable suppliers.",
  },
  {
    id: "renewable-energy",
    icon: Sun,
    name: "Renewable Energy & Solar Solutions",
    tag: "Sustainable Energy Partnerships",
    intro: "Keziaa explores opportunities in sustainable energy solutions by connecting African markets with innovative technologies.",
    points: [
      "Solar technologies.",
      "Renewable energy solutions.",
      "Clean technology partnerships.",
      "Sustainable development opportunities.",
    ],
    closing: null,
  },
  {
    id: "sento-architech",
    icon: Building2,
    name: "Sento Architech",
    tag: "Construction & Real Estate Development",
    intro: "Through its construction and real estate activities, Keziaa supports infrastructure development and investment opportunities in Africa.",
    points: [
      "Architectural solutions.",
      "Construction projects.",
      "Real estate development.",
      "Strategic partnerships with investors and industry players.",
    ],
    closing: "Through Sento Architech, a company within Keziaa Business Group, we strengthen our capacity in architecture, construction, and development solutions.",
  },
  {
    id: "hospitality",
    icon: Hotel,
    name: "Hospitality & Business Ventures",
    tag: "African Hospitality & Service Sector",
    intro: "Keziaa Business Group has experience developing and managing businesses within Africa's hospitality and service sectors.",
    points: [
      "Building, operating, and growing successful hospitality businesses.",
      "Managing service-sector ventures across African markets.",
    ],
    closing: "These ventures demonstrate Keziaa's ability to build, operate, and grow successful businesses in African markets.",
  },
];

export default function Divisions() {
  return (
    <div className="min-h-screen bg-white text-[#101828]">
      <Header />

      {/* Hero */}
      <section className="bg-[#0F1F3D] px-6 py-20 sm:py-24 text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#F5B700] mb-4 font-semibold">
          Our Business Divisions
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-3xl mx-auto mb-5">
          Diversified Companies Driving African Growth
        </h1>
        <p className="text-[15px] text-white/55 max-w-xl mx-auto leading-relaxed">
          Through our different companies and business divisions, Keziaa works to facilitate
          market access, international partnerships, investment opportunities, and sustainable
          business growth.
        </p>
      </section>

      {/* Divisions list */}
      <section className="px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {divisions.map(({ id, icon: Icon, name, tag, intro, points, closing }, i) => (
            <div
              key={id}
              id={id}
              className="scroll-mt-24 rounded-2xl border border-[#0F1F3D]/8 p-8 sm:p-10 bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#0F1F3D] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#F5B700]" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#F5B700] font-bold mb-1 block">
                    Division {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F1F3D] leading-tight">{name}</h2>
                  <p className="text-[13px] text-[#5B6B85] mt-1">{tag}</p>
                </div>
              </div>

              <p className="text-[15px] text-[#5B6B85] leading-relaxed mb-6">{intro}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B700] mt-0.5 flex-shrink-0" />
                    <span className="text-[13.5px] text-[#5B6B85] leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {closing && (
                <p className="text-[13.5px] text-[#0F1F3D] font-semibold leading-relaxed border-t border-[#0F1F3D]/8 pt-5">
                  {closing}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1730] px-6 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-6 max-w-2xl mx-auto">
          Interested in Partnering With One of Our Divisions?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wide bg-[#F5B700] text-[#0F1F3D] px-9 py-4 rounded-md hover:bg-white transition-colors duration-300"
        >
          Contact Us
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
