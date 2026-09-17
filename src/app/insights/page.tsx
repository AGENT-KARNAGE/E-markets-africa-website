import Eyebrow from "@/components/Eyebrow";

const CATEGORIES = [
  "Business Transformation",
  "Technology",
  "African Markets",
  "Manufacturing",
  "FinTech",
  "Entrepreneurship",
  "Digital Transformation",
  "Venture Building",
  "Policy & Economic Development",
];

export default function InsightsPage() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl font-display mb-6">
            Thought leadership, not motivational quotes.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Substantive articles on business transformation, technology and
            African markets — published as the platform grows.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3 mb-16">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="text-sm font-medium text-navy bg-cream px-4 py-2 border border-navy/8"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="border border-dashed border-navy/15 p-16 text-center">
            <p className="text-[#9CA3AF] text-sm">
              Articles will appear here as they&apos;re published.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
