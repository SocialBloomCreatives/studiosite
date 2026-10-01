import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "2027 Waitlist — Save Your Spot",
  description: "Fully booked for 2026. Join the 2027 waitlist and be first to know when December 2026 bookings reopen.",
};

export default function WaitlistPage() {
  return (
    <>
      <PageHero
        index="08"
        eyebrow="2027 waitlist"
        title={<>First in line when the books reopen.</>}
        lede="Fully booked for 2026 — bookings estimated to reopen December 2026 for founders ready to begin at the start of 2027. Join below and you'll know the moment a spot opens."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16" aria-label="Waitlist">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <Reveal><WaitlistForm /></Reveal>
          <Reveal delay={90}>
            <div className="border rule bg-paper">
              {[
                ["01", "You join", "One email, no spam. That's the whole commitment."],
                ["02", "Books open Dec 2026", "Waitlist hears first — before public announcement."],
                ["03", "You choose", "Deep Roots, Canopy, or Full Ecosystem for early 2027."],
              ].map(([n, t, d]) => (
                <div key={n} className="flex gap-4 border-b rule p-5 last:border-0">
                  <span className="font-mono text-[11px] text-clay">{n}</span>
                  <div><p className="font-display text-xl">{t}</p><p className="mt-1 text-sm text-ink-soft">{d}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
