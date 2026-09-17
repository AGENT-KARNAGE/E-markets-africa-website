import Eyebrow from "@/components/Eyebrow";
import { STOCK } from "@/lib/stockImages";

const EXPERIENCE = [
  "Printing",
  "Manufacturing",
  "Hospitality",
  "Customer Contact Centres",
  "Technology",
  "Gaming",
  "Agriculture",
  "Financial Services",
];

export default function AboutPage() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>About E-Markets Africa</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl font-display">
            Our Story
          </h1>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight tracking-tight font-display mb-8">
              Not an IT company. A venture studio built on real-economy
              experience.
            </h2>
            <div className="aspect-[4/3] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={STOCK.teamWide}
                alt="E-Markets Africa in operation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#4B5563] text-lg leading-relaxed lg:pt-4">
            <p>
              E-Markets Africa emerged from years of entrepreneurial
              experience across manufacturing, printing, enterprise
              technology, gaming and IP, and digital ventures. That path gives
              the organisation a proposition most technology companies
              don&apos;t have: deep operational knowledge of the physical
              production economy, applied to digitizing and scaling the
              markets it transforms.
            </p>
            <p>
              We are a venture studio and business transformation platform
              that combines entrepreneurship, market knowledge, technology,
              strategic execution and partnerships to turn real economic
              opportunities into scalable businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 border border-navy/8">
            <div className="text-[11px] font-semibold tracking-widest text-gold uppercase mb-4">
              Our Mission
            </div>
            <p className="text-xl text-navy font-medium leading-snug font-display">
              To build and enable businesses that create sustainable economic
              value through technology, innovation and strategic execution.
            </p>
          </div>
          <div className="bg-white p-10 border border-navy/8">
            <div className="text-[11px] font-semibold tracking-widest text-gold uppercase mb-4">
              Our Vision
            </div>
            <p className="text-xl text-navy font-medium leading-snug font-display">
              To become a leading venture development and business
              transformation platform connecting African opportunities with
              global capital, technology and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={STOCK.techSmall} alt="Technology and product" className="w-full h-40 lg:h-56 object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={STOCK.wideBanner} alt="Operations" className="w-full h-40 lg:h-56 object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={STOCK.teamWide} alt="Team at work" className="w-full h-40 lg:h-56 object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={STOCK.heroPortrait} alt="Team member" className="w-full h-40 lg:h-56 object-cover object-top" />
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Experience That Informs Our Innovation</Eyebrow>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight tracking-tight font-display mb-6">
                We don&apos;t digitize industries from the outside.
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                We understand the operational realities of the markets we
                transform — because we&apos;ve operated inside them.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-navy/8">
                {EXPERIENCE.map((e) => (
                  <div
                    key={e}
                    className="bg-white p-6 flex items-center justify-center text-center hover:bg-navy hover:text-white transition-colors duration-200"
                  >
                    <span className="text-sm font-semibold font-display">
                      {e}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>Institutional Identity</Eyebrow>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight font-display max-w-2xl mb-10">
            E-Markets Africa is bigger than any one person.
          </h2>
          <div className="grid sm:grid-cols-4 gap-px bg-white/10">
            {[
              { label: "Company Brand", value: "E-Markets Africa" },
              { label: "Founder", value: "Omotayo Osinowo" },
              { label: "Portfolio", value: "Multiple Ventures" },
              { label: "Network", value: "Technology · Capital · Institutions" },
            ].map((i) => (
              <div key={i.label} className="bg-navy p-8">
                <div className="text-[10px] font-semibold tracking-widest text-gold uppercase mb-3">
                  {i.label}
                </div>
                <div className="text-white font-semibold font-display">
                  {i.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
