export function Ticker({ items }: { items: string[] }) {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>
            {item}
            <i aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 72 72"
                fill="currentColor"
              >
                <path d="M36 0c1.7 18.8 17.2 34.3 36 36-18.8 1.7-34.3 17.2-36 36-1.7-18.8-17.2-34.3-36-36 18.8-1.7 34.3-17.2 36-36Z" />
              </svg>
            </i>
          </span>
        ))}
      </div>
    </div>
  );
}
