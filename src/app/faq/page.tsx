import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/data/faqs";
export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Find out how to work with SBC, explore College, purchase resources, and view the agency portfolio.",
};
export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="A little clarity"
        title={
          <>
            Good <span className="serif">questions.</span>
          </>
        }
        lede="A few things to know about the agency, College, and resources before you get started."
      />
      <section className="section">
        <div className="wrap max-w-4xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
