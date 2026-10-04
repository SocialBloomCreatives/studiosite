export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`page-hero ${className}`}>
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="headline">{title}</h1>
        {(lede || children) && (
          <div className="page-hero-bottom">
            {lede && <p className="copy">{lede}</p>}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
