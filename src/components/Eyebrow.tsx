export default function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-6 h-0.5 bg-gold" />
      <span
        className={`text-[11px] font-semibold tracking-widest uppercase ${
          light ? "text-gold" : "text-gold"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
