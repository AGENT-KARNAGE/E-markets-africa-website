import Eyebrow from "@/components/Eyebrow";
import { APPROACH_STEPS, SERVICE_PILLARS } from "@/lib/portfolio";
import Link from "next/link";

export default function WhatWeDoPage() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>What We Do</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl font-display mb-6">
            Six capabilities. One operating philosophy.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            We identify persistent market and operational challenges, design
            commercially viable solutions, assemble the right technology and
            human capabilities, and build ventures capable of creating
            sustainable economic value.
          </p>
        </div>
      </section>

      {/* SERVICE PILLARS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid gap-px bg-navy/8 border border-navy/8">
            {SERVICE_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-10 lg:p-14 grid lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-1">
                  <span className="text-gold text-xs font-bold tracking-widest">
                    {pillar.number}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-bold text-navy font-display mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  {pillar.services.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {pillar.services.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-medium text-[#4B5563] bg-cream px-3 py-1.5 border border-navy/8"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH / METHODOLOGY */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Our Methodology</Eyebrow>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight font-display mb-4">
              The E-Markets Africa Venture Building Framework
            </h2>
            <p className="text-white/50 leading-relaxed">
              A repeatable methodology — not a collection of individual ideas.
              Every venture in our portfolio moves through the same eight
              stages.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {APPROACH_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-navy p-8 hover:bg-navy-light transition-colors duration-200"
              >
                <div className="text-gold text-xs font-bold tracking-widest mb-4">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight font-display mb-6">
            See the framework in action.
          </h2>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 bg-navy text-white font-semibold text-sm px-8 py-4 hover:bg-navy-light transition-colors duration-200 no-underline"
          >
            Explore Our Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
