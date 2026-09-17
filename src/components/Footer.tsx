import Link from "next/link";

const EXPLORE = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Leadership", href: "/leadership" },
  { label: "Insights", href: "/insights" },
];

const ENGAGE = [
  { label: "Investors", href: "/investors" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy/8 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 bg-navy flex items-center justify-center">
                <div
                  className="w-2.5 h-2.5 bg-gold"
                  style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
                />
              </div>
              <span className="font-bold text-navy tracking-tight font-display">
                E-Markets <span className="text-gold">Africa</span>
              </span>
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-xs">
              A venture studio and business transformation platform building,
              digitizing and scaling businesses across Africa and emerging
              markets.
            </p>
          </div>

          <div>
            <div className="text-[10px] font-bold tracking-widest text-navy uppercase mb-4">
              Explore
            </div>
            <div className="flex flex-col gap-3">
              {EXPLORE.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-[#6B7280] hover:text-navy no-underline transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold tracking-widest text-navy uppercase mb-4">
              Engage
            </div>
            <div className="flex flex-col gap-3">
              {ENGAGE.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-[#6B7280] hover:text-navy no-underline transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <span className="text-sm text-[#9CA3AF] mt-2">
                Ottawa, Canada · Lagos, Nigeria
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-navy/6 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs text-[#9CA3AF]">
            © {new Date().getFullYear()} E-Markets Africa. All rights reserved.
          </span>
          <div className="flex gap-6">
            <span className="text-xs text-[#9CA3AF]">Privacy Policy</span>
            <span className="text-xs text-[#9CA3AF]">Terms of Use</span>
            <span className="text-xs text-[#9CA3AF]">Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
