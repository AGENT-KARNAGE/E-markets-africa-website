import Eyebrow from "@/components/Eyebrow";
import Link from "next/link";

const CATEGORIES = [
  {
    label: "Corporates",
    body: "Transformation, technology and market development.",
  },
  {
    label: "Government",
    body: "Digital infrastructure, market systems and economic development.",
  },
  {
    label: "Financial Institutions",
    body: "FinTech, financial inclusion and business infrastructure.",
  },
  {
    label: "Telecommunications",
    body: "Technology infrastructure and digital distribution.",
  },
  {
    label: "Technology Companies",
    body: "Cloud, AI, software and infrastructure partnerships.",
  },
  {
    label: "Investors",
    body: "Capital and strategic venture development.",
  },
];

const POLICY_FOCUS = [
  "SME digitization",
  "Informal-market modernization",
  "Digital marketplaces",
  "Financial inclusion",
  "Agricultural value chains",
  "Manufacturing digitization",
  "Mobility",
  "Workforce development",
  "Digital public infrastructure",
  "Entrepreneurship",
];

export default function PartnersPage() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>Partners</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl font-display">
            Partner with us.
          </h1>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/8 border border-navy/8">
            {CATEGORIES.map((c) => (
              <div key={c.label} className="bg-white p-8">
                <h3 className="text-base font-bold text-navy font-display mb-2">
                  {c.label}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Government &amp; Policy</Eyebrow>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight font-display mb-6">
              Technology for economic development.
            </h2>
            <p className="text-white/50 leading-relaxed">
              We work at the intersection of business, technology,
              infrastructure, markets and policy — a valuable position for
              government and development-institution partners.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              {POLICY_FOCUS.map((p) => (
                <span
                  key={p}
                  className="text-sm font-medium text-white/80 border border-white/15 px-4 py-2"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-bold text-navy tracking-tight font-display mb-6">
            Become a strategic partner.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-navy text-white font-semibold text-sm px-8 py-4 hover:bg-navy-light transition-colors duration-200 no-underline"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
