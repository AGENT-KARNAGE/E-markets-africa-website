import Eyebrow from "@/components/Eyebrow";
import PortfolioBrowser from "@/components/PortfolioBrowser";
import { VENTURES, OPERATING_BUSINESSES } from "@/lib/portfolio";

export const metadata = {
  title: "Portfolio | E-Markets Africa",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="pt-40 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl font-display mb-6">
            Our venture portfolio.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Businesses, platforms and ventures addressing real market
            opportunities across Africa and beyond — spanning technology
            ventures we&apos;re building and operating businesses already
            running today.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PortfolioBrowser
            ventures={VENTURES}
            operatingBusinesses={OPERATING_BUSINESSES}
          />
        </div>
      </section>
    </div>
  );
}
