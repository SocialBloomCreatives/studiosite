import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 text-center">
      <p className="eyebrow text-clay">404 — Off the path</p>
      <h1 className="font-display mt-4 text-5xl md:text-7xl">Lost in the woods?</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">This trail doesn&apos;t exist. Let&apos;s get you back to tended ground.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="bg-ink px-6 py-3 font-mono text-xs tracking-[0.18em] uppercase text-cream hover:bg-clay">Home</Link>
        <Link href="/portfolio" className="border border-ink px-6 py-3 font-mono text-xs tracking-[0.18em] uppercase hover:bg-ink hover:text-cream">Work</Link>
      </div>
    </section>
  );
}
