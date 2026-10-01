import { Reveal } from "./Reveal";

export function PageHero({
  index,
  eyebrow,
  title,
  lede,
  meta,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  meta?: string[];
}) {
  return (
    <section className="border-b rule">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-10 md:pb-12 md:pt-14">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-fern">
            <span className="inline-block h-px w-10 bg-ink/30" aria-hidden />
            {index} / {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-giant mt-5 max-w-5xl">{title}</h1>
        </Reveal>
        {lede ? (
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">{lede}</p>
          </Reveal>
        ) : null}
        {meta && meta.length ? (
          <Reveal delay={200}>
            <dl className="mt-8 grid grid-cols-2 gap-px border rule bg-[var(--line)] sm:grid-cols-4">
              {meta.map((m) => {
                const [k, v] = m.split("::");
                return (
                  <div key={m} className="bg-cream px-4 py-3">
                    <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">{k}</dt>
                    <dd className="mt-1 text-sm font-medium">{v}</dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
