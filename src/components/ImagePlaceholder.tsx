/**
 * Placeholder visual block used until real photography is available.
 * Renders a subtle brand-toned gradient with a small label, rather than
 * generic stock photography, per the design brief. Swap out any usage of
 * this component for a real <Image /> once real photos exist — each
 * instance below is commented with what kind of photo should replace it.
 */
export default function ImagePlaceholder({
  label,
  variant = "navy",
  className = "",
}: {
  label: string;
  variant?: "navy" | "cream" | "gold";
  className?: string;
}) {
  const styles = {
    navy: "bg-gradient-to-br from-navy via-navy-light to-navy text-white/30",
    cream: "bg-gradient-to-br from-cream via-white to-cream text-navy/20",
    gold: "bg-gradient-to-br from-gold/20 via-cream to-gold/10 text-navy/25",
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${styles[variant]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <span className="relative text-[11px] font-semibold tracking-widest uppercase text-center px-6 opacity-70">
        {label}
      </span>
    </div>
  );
}
