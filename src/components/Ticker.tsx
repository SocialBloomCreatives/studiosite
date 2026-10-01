export function Ticker({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = [...items, ...items];
  return (
    <div
      aria-hidden
      className={`overflow-hidden border-y py-3 select-none ${
        dark ? "border-sage/25 bg-moss text-cream" : "rule border-y bg-ink text-cream"
      }`}
    >
      <div className="ticker-track flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-[11px] tracking-[0.22em] uppercase whitespace-nowrap">
            {t} <span className="text-clay" style={{ color: "#fe5f00" }}>✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
