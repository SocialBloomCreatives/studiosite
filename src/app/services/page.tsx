import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { services, pillars } from "@/data/services";
import { faqs } from "@/data/faqs";
export const metadata: Metadata = {
  title: "Our services",
  description:
    "Brand building, strategy, campaigns, websites, and social media management by Social Bloom Creatives.",
};
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Your next level.
            <br />
            Our <span className="serif">creative thinking.</span>
          </>
        }
        lede="From the foundations of your brand to the way it shows up every day, we bring strategy and creativity together to help your business grow."
      >
        <Link className="button" href="/contact">
          Start a conversation <ArrowUpRight size={17} aria-hidden />
        </Link>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="service-list">
            {services.map((s, i) => (
              <Link
                className="service-row"
                href={`/services/${s.slug}`}
                key={s.slug}
              >
                <span className="eyebrow">0{i + 1}</span>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <ArrowUpRight className="row-arrow" size={27} aria-hidden />
              </Link>
            ))}
          </div>
          <p className="copy mt-9">
            Every project is shaped around your goals. We agree the
            deliverables, timeline, and investment with you directly.
          </p>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap">
          <SectionHeading
            eyebrow="How we approach the work"
            title={
              <>
                Clear thinking.
                <br />
                <span className="serif">Intentional creation.</span>
              </>
            }
          />
          <div className="process-grid">
            {pillars.map((p, i) => (
              <div key={p.name}>
                <p className="eyebrow">0{i + 1}</p>
                <h3>{p.name}</h3>
                <p className="copy">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <SectionHeading
            eyebrow="A little clarity"
            title={
              <>
                Before we
                <br />
                <span className="serif">begin.</span>
              </>
            }
          />
          <FaqAccordion items={faqs.slice(0, 2)} />
        </div>
      </section>
    </>
  );
}
