export function Ticker({ items }: { items: string[] }) {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>
            {item}
            <i>✳</i>
          </span>
        ))}
      </div>
    </div>
  );
}
