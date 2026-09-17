import { PortfolioStatus, STATUS_CONFIG } from "@/lib/portfolio";

export default function StatusBadge({ status }: { status: PortfolioStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${cfg.bg} ${cfg.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
}
