import Eyebrow from "@/components/Eyebrow";
import Link from "next/link";

const ACCESS = [
  "Proprietary venture concepts",
  "Technology-enabled businesses",
  "African market opportunities",
  "Emerging-market platforms",
  "Cross-sector innovation",
  "Venture-building capabilities",
  "Local market knowledge",
  "International expansion opportunities",
];

const MODELS = [
  "Venture Investment",
  "Strategic Investment",
  "Joint Ventures",
  "Technology Partnerships",
  "Corporate Partnerships",
  "Growth Capital",
  "Market Expansion Partnerships",
];

export default function InvestorsPage() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>Investors</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl font-display mb-6">
            Invest with E-Markets Africa.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            We build businesses designed around real markets, real problems
            and scalable commercial opportunities.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-navy leading-tight tracking-tight font-display mb-6">
              What investors gain access to
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              A structured venture-building organisation operating across
              fragmented, high-potential markets — not a single company, but
              a repeatable engine for creating them.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-navy/8 border border-navy/8">
              {ACCESS.map((a) => (
                <div key={a} className="bg-white p-6">
                  <span className="text-sm font-medium text-navy">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>Investment Models</Eyebrow>
          <h2 className="text-3xl font-bold text-navy tracking-tight font-display mb-10">
            How partners engage
          </h2>
          <div className="flex flex-wrap gap-3">
            {MODELS.map((m) => (
              <span
                key={m}
                className="text-sm font-semibold text-navy bg-white border border-navy/10 px-5 py-3"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Investor Centre</Eyebrow>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight tracking-tight font-display mb-6">
              Request access to detailed venture and financial information.
            </h2>
            <p className="text-[#6B7280] leading-relaxed max-w-xl">
              Sensitive investor information — corporate profile, venture
              summaries, financial models, market studies and due-diligence
              materials — is shared directly with qualified investors after
              verification, not published openly on the website.
            </p>
          </div>
          <div className="lg:col-span-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full gap-3 bg-navy text-white font-semibold text-sm px-8 py-4 hover:bg-navy-light transition-colors duration-200 no-underline"
            >
              Request Investor Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
