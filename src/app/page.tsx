import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import PortfolioCard from "@/components/PortfolioCard";
import StatCounter from "@/components/StatCounter";
import { STOCK } from "@/lib/stockImages";
import { PORTFOLIO, SECTORS, APPROACH_STEPS } from "@/lib/portfolio";

const STATS = [
  { value: "12", suffix: "", label: "Ventures & Operating Businesses" },
  { value: "5", suffix: "", label: "African Markets of Operation" },
  { value: "2", suffix: "", label: "Global Base Locations" },
  { value: "8", suffix: "", label: "Sectors of Focus" },
];

const FEATURED_SLUGS = ["everyprintings", "crim-resources", "sharaloge", "hedybles"];

export default function Home() {
  const featured = PORTFOLIO.filter((p) => FEATURED_SLUGS.includes(p.slug));

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-navy">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold z-10" />

        <div className="relative grid lg:grid-cols-2 min-h-[92vh] w-full">
          <div className="relative max-w-7xl px-6 lg:pl-10 lg:pr-16 pt-32 pb-24 w-full flex flex-col justify-center">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-10">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-[11px] font-semibold tracking-widest text-gold uppercase">
                  Venture Studio · Africa &amp; Emerging Markets
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8 font-display">
                Building businesses.{" "}
                <span className="text-gold">Digitizing markets.</span>{" "}
                Creating scale.
              </h1>

              <p className="text-lg lg:text-xl text-white/60 font-normal leading-relaxed mb-14">
                From manufacturing and commerce to financial services, agriculture,
                mobility and technology, E-Markets Africa builds and transforms
                businesses addressing real economic opportunities across Africa and
                emerging markets.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 bg-gold text-white font-semibold text-sm px-8 py-4 hover:bg-gold-light transition-colors duration-200 no-underline"
                >
                  Explore Our Ventures
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white/10 text-white font-semibold text-sm px-8 py-4 hover:bg-white/20 transition-colors duration-200 no-underline border border-white/20"
                >
                  Work With Us
                </Link>
              </div>

              <Link
                href="/investors"
                className="inline-flex items-center gap-2 mt-8 text-white/40 text-sm font-medium hover:text-white/70 transition-colors duration-200 no-underline"
              >
                For Investors
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STOCK.heroPortrait}
              alt="E-Markets Africa team at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-navy/8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-navy/8">
            {STATS.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* FROM PROBLEMS TO SOLUTIONS */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight font-display">
                From market problems to scalable solutions.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
                E-Markets Africa is a venture studio and business
                transformation platform building, digitizing and scaling
                businesses and fragmented markets across Africa and emerging
                markets.
              </p>
              <p className="text-base text-[#6B7280] leading-relaxed mb-10">
                We identify persistent market and operational challenges,
                design commercially viable solutions, assemble the right
                technology and human capabilities, and build ventures capable
                of creating sustainable economic value — combining
                entrepreneurship, market knowledge, technology, strategic
                execution and partnerships.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {APPROACH_STEPS.slice(0, 4).map((a) => (
                  <div key={a.number} className="border-l-2 border-gold/30 pl-4">
                    <div className="text-sm font-bold text-navy mb-1 font-display">
                      {a.title}
                    </div>
                    <div className="text-xs text-[#9CA3AF] leading-relaxed">
                      {a.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <Eyebrow>Sectors</Eyebrow>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight font-display">
                Where we build.
              </h2>
            </div>
            <p className="text-sm text-[#6B7280] max-w-sm lg:text-right leading-relaxed">
              Eight distinct sectors selected for structural opportunity,
              fragmentation and transformation potential — not speculation.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-navy/8">
            {SECTORS.map((s) => (
              <div
                key={s.name}
                className="bg-white p-8 group hover:bg-navy transition-colors duration-200 cursor-default"
              >
                <div className="text-sm font-bold text-navy group-hover:text-white transition-colors font-display">
                  {s.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <Eyebrow>Portfolio</Eyebrow>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight font-display">
                A portfolio built on real markets.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-gold hover:underline no-underline"
            >
              View full portfolio →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GRID + STATEMENT */}
      <section className="grid lg:grid-cols-2 gap-1 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={STOCK.teamWide}
          alt="Team collaborating"
          className="w-full h-64 lg:h-full object-cover"
        />
        <div className="grid grid-rows-2 gap-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={STOCK.techSmall}
            alt="Technology and product development"
            className="w-full h-32 lg:h-full object-cover"
          />
          <div className="bg-navy flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <p className="relative text-white text-lg lg:text-2xl font-bold text-center leading-snug font-display">
              &ldquo;Real businesses. Real markets.{" "}
              <span className="text-gold">Real transformation.</span>&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* STATEMENT BREAK */}
      <section className="h-64 lg:h-80 relative overflow-hidden bg-navy flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={STOCK.wideBanner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative flex items-center justify-center px-6">
          <p className="text-white text-2xl lg:text-4xl font-bold text-center max-w-3xl leading-tight font-display">
            We don&apos;t digitize industries from the outside. We understand
            the operational realities of the markets we{" "}
            <span className="text-gold">transform.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Get In Touch</Eyebrow>
              <h2 className="text-3xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-6 font-display">
                Ready to build, transform, or invest?
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed max-w-xl">
                Whether you are a corporation seeking transformation, an
                entrepreneur building in a sector we operate, a government
                partner, or a capital partner — tell us what you are trying to
                accomplish.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-navy text-white font-semibold text-sm px-8 py-4 hover:bg-navy-light transition-colors duration-200 no-underline"
              >
                Start a Conversation
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center justify-center gap-3 border border-navy/20 text-navy font-semibold text-sm px-8 py-4 hover:border-navy/50 transition-colors duration-200 no-underline"
              >
                Request Investor Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
