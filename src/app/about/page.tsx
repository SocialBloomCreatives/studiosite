import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pillars } from "@/data/services";
export const metadata: Metadata = {
  title: "About SBC",
  description:
    "Meet Social Bloom Creatives, a Lagos-based creative agency led by Midey. Strategy, creativity, and AI for ambitious brands.",
};
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="The people behind the possibilities"
        title={
          <>
            More than a<br />
            <span className="serif">creative agency.</span>
          </>
        }
        lede="Social Bloom Creatives was built for founders with big ideas but limited time. We know what it’s like to wear every hat in your business."
      />
      <section className="section">
        <div className="wrap split">
          <div className="portrait">
            <Image
              src="/brand/about-page-v2.webp"
              alt="Midey, SBC creative director"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <div>
            <p className="eyebrow">This is SBC Agency</p>
            <h2 className="section-title">
              A creative partner
              <br />
              for your <span className="serif">next chapter.</span>
            </h2>
            <div className="copy mt-7">
              <p>
                Social Bloom Creatives Agency creative agency led by brand
                strategist and creative director Midey. We design identities
                that feel current, create content that people actually engage
                with, and build brands that are clear, cohesive, and instantly
                recognisable.
              </p>
              <p>
                From visuals, brand strategy to social media management and full
                content direction, we deliver work that&apos;s intentional and
                designed to work using a modern creative system designed for how
                brands grow today, through storytelling, identity, and culture
                grounded in insight and built to last.
              </p>
              <p>
                Every engagement starts with understanding- your audience, your
                vision, your market. We bring the creative architecture to make
                it real.
              </p>
            </div>
            <Link className="text-link mt-8" href="/portfolio">
              See what we’ve been creating{" "}
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Why we exist</p>
            <h2 className="section-title">
              Beautiful is
              <br />
              just the <span className="serif">beginning.</span>
            </h2>
          </div>
          <div className="copy">
            <p>
              Too many businesses invest in logos before strategy, websites
              before positioning, and content before understanding their
              audience. The result? Brands that look good but struggle to
              connect, convert, and grow.
            </p>
            <p>
              We created Social Bloom Creatives to change that. Every project
              begins with strategy because great design is powerful when it
              solves the right problem.
            </p>
            <p>
              Every business has different goals, audiences, and opportunities.
              We take time to understand your vision before creating a brand
              experience that’s intentional, memorable, and built for long-term
              growth.
            </p>
          </div>
        </div>
      </section>
      <section id="approach" className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our approach"
            title={
              <>
                Built around your business.
                <br />
                <span className="serif">Always.</span>
              </>
            }
          />
          <p className="copy">
            Whether we’re developing your identity, designing your website,
            planning your content, or helping you integrate AI into your
            workflow, every recommendation starts with your business goals.
          </p>
          <div className="process-grid">
            {pillars.map((p, i) => (
              <div className="belief" key={p.name}>
                <p className="eyebrow">0{i + 1}</p>
                <h3>{p.name}</h3>
                <p className="copy">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section divider">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we believe"
            title={
              <>
                The things we
                <br />
                <span className="serif">stand behind.</span>
              </>
            }
          />
          <div className="beliefs">
            {[
              [
                "Strategy before design.",
                "The clearest direction creates the most intentional work.",
              ],
              [
                "Creative, still human.",
                "AI should make businesses more creative, without losing the people or personality behind them.",
              ],
              [
                "Consistency over trends.",
                "Great brands are built through a recognisable presence that carries across every touchpoint.",
              ],
              [
                "Knowledge worth sharing.",
                "Every founder deserves access to the tools and knowledge needed to grow with confidence.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="belief">
                <h3>{t}</h3>
                <p className="copy">{d}</p>
              </div>
            ))}
          </div>
          <div className="actions mt-12">
            <Link className="button" href="/contact">
              Let’s build something great <ArrowUpRight size={16} aria-hidden />
            </Link>
            <Link className="text-link" href="/college">
              Discover SBC College <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
