import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  dark = false,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal>
        <p className={`eyebrow flex items-center gap-3 ${dark ? "text-sage" : "text-fern"}`}>
          <span className={`inline-block h-px w-10 ${dark ? "bg-sage/60" : "bg-ink/30"}`} aria-hidden />
          {index} / {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="font-display mt-4 max-w-4xl text-3xl leading-[1.02] font-medium text-balance md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={160}>
          <p className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${dark ? "text-sage/85" : "text-ink-soft"}`}>
            {lede}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
