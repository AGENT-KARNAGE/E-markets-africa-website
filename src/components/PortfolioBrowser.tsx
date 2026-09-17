"use client";

import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import {
  ALL_STATUSES,
  PortfolioItem,
  PortfolioStatus,
  STATUS_CONFIG,
} from "@/lib/portfolio";

export default function PortfolioBrowser({
  ventures,
  operatingBusinesses,
}: {
  ventures: PortfolioItem[];
  operatingBusinesses: PortfolioItem[];
}) {
  const [filter, setFilter] = useState<"All" | PortfolioStatus>("All");
  const [layer, setLayer] = useState<"all" | "ventures" | "operating">("all");

  const filterItems = (items: PortfolioItem[]) =>
    items.filter((p) => filter === "All" || p.status === filter);

  const showVentures = layer === "all" || layer === "ventures";
  const showOperating = layer === "all" || layer === "operating";

  return (
    <div>
      <div className="flex flex-col gap-6 mb-14">
        <div className="flex flex-wrap gap-2">
          {(["all", "ventures", "operating"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLayer(l)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150 ${
                layer === l
                  ? "bg-navy text-white"
                  : "bg-[#F2F2F2] text-[#6B7280] hover:bg-navy/8 hover:text-navy"
              }`}
            >
              {l === "all"
                ? "All"
                : l === "ventures"
                ? "Ventures"
                : "Operating Businesses"}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("All")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
              filter === "All"
                ? "bg-navy text-white"
                : "bg-[#F2F2F2] text-[#6B7280] hover:bg-navy/8 hover:text-navy"
            }`}
          >
            All Statuses
          </button>
          {ALL_STATUSES.map((s) => {
            const cfg = STATUS_CONFIG[s];
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 inline-flex items-center ${
                  filter === s
                    ? "bg-navy text-white"
                    : "bg-[#F2F2F2] text-[#6B7280] hover:bg-navy/8 hover:text-navy"
                }`}
              >
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${cfg.dot}`}
                />
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {showVentures && (
        <div className="mb-16">
          <h2 className="text-xs font-bold tracking-widest text-navy/50 uppercase mb-6">
            Ventures
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filterItems(ventures).map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
          {filterItems(ventures).length === 0 && (
            <p className="text-sm text-[#9CA3AF]">No ventures match this filter.</p>
          )}
        </div>
      )}

      {showOperating && (
        <div>
          <h2 className="text-xs font-bold tracking-widest text-navy/50 uppercase mb-6">
            Operating Businesses
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filterItems(operatingBusinesses).map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
          {filterItems(operatingBusinesses).length === 0 && (
            <p className="text-sm text-[#9CA3AF]">
              No operating businesses match this filter.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
