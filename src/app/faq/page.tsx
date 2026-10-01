import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ — Pricing, Platforms & Process",
  description: "Payment plans, platforms, revisions, timelines, and fit. Answers from Kohi Design Studio before you inquire.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="FAQ"
        title={<>Everything founders ask before rooting.</>}
        lede="Pricing starts, platforms, process, and fit — answered from the source site. Anything else? Email serena@kohidesignstudio.com."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16" aria-label="FAQs">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <FaqAccordion items={faqs} />
          <aside className="space-y-4">
            <div className="border rule bg-ink p-6 text-cream">
              <p className="eyebrow text-sage">Still unsure?</p>
              <p className="font-display mt-2 text-2xl">If this page didn&apos;t settle it, an inquiry will.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 bg-cream px-5 py-3 font-mono text-xs tracking-[0.18em] uppercase text-ink hover:bg-clay hover:text-cream">Inquire <ArrowRight size={14} aria-hidden /></Link>
            </div>
            <div className="border rule bg-paper p-6">
              <SectionHeading index="—" eyebrow="At a glance" title={<>Starts & timelines.</>} />
              <ul className="space-y-2 font-mono text-[11.5px] tracking-[0.12em] uppercase text-ink-soft">
                <li className="flex justify-between border-b rule pb-2"><span>Deep Roots</span><span>$2,900 · 3 wks</span></li>
                <li className="flex justify-between border-b rule pb-2"><span>The Canopy</span><span>$4,900 · 4 wks</span></li>
                <li className="flex justify-between"><span>Full Ecosystem</span><span>$6,500 · 6 wks</span></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
