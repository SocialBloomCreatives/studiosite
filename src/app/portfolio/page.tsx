import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { site } from "@/data/site";
export const metadata: Metadata = {
  title: "Our work",
  description:
    "Explore SBC branding, campaign, and social media projects for beauty, fashion, fragrance, lifestyle, and community brands.",
};
export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Selected work / SBC Agency"
        title={
          <>
            Brands with a story.
            <br />
            Work with <span className="serif">intention.</span>
          </>
        }
        lede="A look at the brands we’ve helped build and the stories we’ve brought to life, across Lagos, the UK, and Canada."
      >
        <a
          className="text-link"
          href={site.portfolio}
          target="_blank"
          rel="noreferrer"
        >
          View the full portfolio PDF <ArrowUpRight size={16} aria-hidden />
        </a>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
