import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Inquire — Start Your Project",
  description: "Tell Serena about your vision. Now gathering 2027 inquiries for Deep Roots, The Canopy, and The Full Ecosystem.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="07"
        eyebrow="Inquire"
        title={<>Your next level starts with one decision.</>}
        lede="Bookings are currently closed — the client list is full and every current client gets full depth of attention. Tell us about your vision now and we'll line you up for early 2027."
        meta={["Status::Booked 2026", "Reopening::Dec 2026", "For::Early 2027 starts", "Reply::serena@kohidesignstudio.com"]}
      />
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16" aria-label="Inquiry">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal><InquiryForm /></Reveal>
          <Reveal delay={100}>
            <aside className="space-y-4">
              <div className="border rule bg-moss p-6 text-cream">
                <p className="eyebrow text-sage">Prefer email?</p>
                <a href={`mailto:${site.email}`} className="font-display mt-2 block text-2xl break-all">{site.email}</a>
                <p className="mt-2 text-sm text-cream/75">For collaborations & all other inquiries.</p>
              </div>
              <div className="border rule bg-paper p-6">
                <p className="eyebrow text-fern">What happens next (new)</p>
                <ol className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-soft">
                  <li><strong className="text-ink">1 — You share the vision.</strong> 5 minutes, honest answers.</li>
                  <li><strong className="text-ink">2 — We review for fit.</strong> Right offer, right timing, right chemistry.</li>
                  <li><strong className="text-ink">3 — You choose your season.</strong> 2027 waitlist or proposal when books open.</li>
                </ol>
              </div>
              <Link href="/waitlist" className="block border border-clay bg-blush/50 p-5 font-mono text-[11px] tracking-[0.16em] uppercase text-clay-deep hover:bg-blush">
                → Just want the waitlist? Skip straight there
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
