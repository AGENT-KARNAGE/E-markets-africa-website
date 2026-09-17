import { notFound } from "next/navigation";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import StatusBadge from "@/components/StatusBadge";
import { STOCK } from "@/lib/stockImages";
import { PORTFOLIO } from "@/lib/portfolio";

export function generateStaticParams() {
  return PORTFOLIO.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = PORTFOLIO.find((p) => p.slug === slug);
  if (!item) return {};
  return { title: `${item.name} | E-Markets Africa` };
}

export default async function VenturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = PORTFOLIO.find((p) => p.slug === slug);
  if (!item) notFound();

  const related = PORTFOLIO.filter(
    (p) => p.type === item.type && p.slug !== item.slug
  ).slice(0, 3);

  return (
    <div>
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            href="/portfolio"
            className="text-white/40 text-sm font-medium hover:text-white/70 no-underline inline-flex items-center gap-2 mb-8"
          >
            ← Back to Portfolio
          </Link>
          <Eyebrow>
            {item.type === "operating-business"
              ? "Operating Business"
              : "Venture"}{" "}
            · {item.category}
          </Eyebrow>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight font-display">
              {item.name}
            </h1>
            <StatusBadge status={item.status} />
          </div>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            {item.tagline}
          </p>
        </div>
      </section>

      <div className="relative h-56 lg:h-80 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.type === "operating-business" ? STOCK.wideBanner : STOCK.teamWide}
          alt={`${item.name} — operations`}
          className="w-full h-full object-cover"
        />
      </div>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-14">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-gold uppercase mb-4">
                The Opportunity
              </h2>
              <p className="text-lg text-[#4B5563] leading-relaxed">
                {item.opportunity}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-bold tracking-widest text-gold uppercase mb-4">
                Our Solution
              </h2>
              <p className="text-lg text-[#4B5563] leading-relaxed">
                {item.solution}
              </p>
            </div>
            {item.detail && (
              <div>
                <h2 className="text-xs font-bold tracking-widest text-gold uppercase mb-4">
                  Additional Detail
                </h2>
                <p className="text-lg text-[#4B5563] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="border border-navy/8 p-8 space-y-6 sticky top-28">
              <div>
                <div className="text-[10px] font-bold tracking-widest text-navy/50 uppercase mb-2">
                  Category
                </div>
                <div className="text-sm font-semibold text-navy">
                  {item.category}
                </div>
              </div>
              <div className="pt-6 border-t border-navy/8">
                <div className="text-[10px] font-bold tracking-widest text-navy/50 uppercase mb-2">
                  Location
                </div>
                <div className="text-sm font-semibold text-navy">
                  {item.location}
                </div>
              </div>
              <div className="pt-6 border-t border-navy/8">
                <div className="text-[10px] font-bold tracking-widest text-navy/50 uppercase mb-2">
                  Development Status
                </div>
                <StatusBadge status={item.status} />
              </div>
              <div className="pt-6 border-t border-navy/8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full gap-2 bg-navy text-white font-semibold text-sm px-6 py-3.5 hover:bg-navy-light transition-colors duration-200 no-underline"
                >
                  Partner or Invest →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-xs font-bold tracking-widest text-navy/50 uppercase mb-8">
              More from the Portfolio
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/portfolio/${r.slug}`}
                  className="bg-white border border-navy/8 p-6 no-underline hover:border-navy/20 transition-colors"
                >
                  <div className="text-[10px] font-semibold tracking-widest text-gold uppercase mb-1">
                    {r.category}
                  </div>
                  <div className="text-base font-bold text-navy font-display">
                    {r.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
