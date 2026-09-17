import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";

const HIGHLIGHTS = [
  "Founder of E-Markets Africa",
  "Founder/owner of CRIM Resources",
  "Founder of DARE Metamorfosis",
  "Co-founder of TAYARM Resources",
  "25+ years entrepreneurship",
  "Manufacturing experience",
  "Technology leadership",
  "International orientation — Canada / Nigeria",
];

export default function LeadershipPage() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>Leadership</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl font-display">
            Omotayo Osinowo
          </h1>
          <p className="text-gold text-lg font-semibold mt-4">
            Founder &amp; Executive Director
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          {/* Photo column */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream mb-4">
              <Image
                src="/images/leadership/omotayo-headshot.png"
                alt="Omotayo Osinowo, Founder & Executive Director of E-Markets Africa"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
              <Image
                src="/images/leadership/omotayo-portrait.png"
                alt="Omotayo Osinowo"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Bio column */}
          <div className="lg:col-span-8">
            <p className="text-lg text-[#4B5563] leading-relaxed mb-8">
              Omotayo Osinowo is a serial entrepreneur, venture builder and
              business transformation leader with more than 25 years of
              experience building and managing businesses across
              manufacturing, printing, hospitality, enterprise technology,
              intellectual property, gaming and digital ventures.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed mb-12">
              That entrepreneurial path — spanning desktop publishing,
              graphic design, commercial and offset printing, industrial
              printing equipment, equipment installation, and African market
              expansion — now informs E-Markets Africa&apos;s approach to
              digital transformation: the philosophy that fragmented
              industries are best transformed by people who have operated
              inside them.
            </p>

            <div className="border border-navy/8 p-8">
              <div className="text-[10px] font-bold tracking-widest text-navy/50 uppercase mb-6">
                At a Glance
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {HIGHLIGHTS.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span className="text-sm font-medium text-navy">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
