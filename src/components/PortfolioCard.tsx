import Link from "next/link";
import { PortfolioItem } from "@/lib/portfolio";
import StatusBadge from "./StatusBadge";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group border border-navy/8 p-7 flex flex-col gap-4 transition-all duration-200 hover:shadow-sm hover:border-navy/20 no-underline bg-white"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[10px] font-semibold tracking-widest text-gold uppercase mb-1">
            {item.category}
          </div>
          <h3 className="text-base font-bold text-navy font-display">
            {item.name}
          </h3>
        </div>
        <StatusBadge status={item.status} />
      </div>
      <p className="text-xs text-[#6B7280] leading-relaxed flex-1">
        {item.summary}
      </p>
      <div className="pt-3 border-t border-navy/6 flex items-center justify-between">
        <span className="text-[10px] text-[#9CA3AF] font-medium">
          {item.location}
        </span>
        <span className="text-[10px] font-semibold text-gold group-hover:underline">
          Explore Venture →
        </span>
      </div>
    </Link>
  );
}
