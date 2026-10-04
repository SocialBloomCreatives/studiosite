import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { WaitlistForm } from "@/components/WaitlistForm";
import { site } from "@/data/site";
export const metadata: Metadata = {
  title: "SBC College",
  description:
    "Your space for launching and building a brand. Explore toolkits, courses, AI resources, and the upcoming SBC Campus community.",
};
export default function College() {
  return (
    <>
      <PageHero
        className="college-hero"
        eyebrow="DIY coded :) / Welcome to SBC College"
        title={
          <>
            Building it yourself.
            <br />
            <span className="serif">Never alone.</span>
          </>
        }
        lede="Your space for launching and building a successful brand. Building a business is hard enough. Figuring out branding, marketing, and AI on your own doesn’t have to be."
      >
        <a className="button" href="#college-breakdown">
          Find your next step <ArrowUpRight size={16} aria-hidden />
        </a>
      </PageHero>
      <section id="college-breakdown" className="section">
        <div className="wrap">
          <p className="eyebrow mb-7">The College breakdown</p>
          <h2 className="section-title mb-12">
            A little knowledge.
            <br />A lot of <span className="serif">possibility.</span>
          </h2>
          <div className="college-pillars">
            <div className="college-pillar">
              <p className="eyebrow">01 / Practical support</p>
              <h2>Modules & toolkits</h2>
              <p className="copy">
                Practical guides, templates, and plug-and-play resources you can
                start using today. Skip the guesswork and bring more clarity to
                what you’re building.
              </p>
              <Link className="text-link" href="/resources">
                Explore resources <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
            <div className="college-pillar">
              <p className="eyebrow">02 / Learn the frameworks</p>
              <h2>Courses</h2>
              <p className="copy">
                Step-by-step lessons that simplify branding, marketing, and AI,
                so you know what to do next. Actionable programs designed to
                help you launch, market, and grow.
              </p>
              <a
                className="text-link"
                href={`mailto:${site.email}?subject=SBC%20College%20course%20inquiry`}
              >
                Ask about courses <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
            <div className="college-pillar">
              <p className="eyebrow">03 / AI Lab</p>
              <h2>AI resources</h2>
              <p className="copy">
                Learn how to use AI to work smarter, create faster, and grow
                your business without losing your brand’s personality. Turn AI
                into a useful business assistant.
              </p>
              <Link className="text-link" href="/resources">
                Explore Build Faster with AI{" "}
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
            <div className="college-pillar">
              <p className="eyebrow">04 / Coming soon</p>
              <h2>The Campus</h2>
              <p className="copy">
                A space to learn alongside other founders, ask questions, share
                wins, and keep each other accountable. Stay inspired, up to
                date, and connected.
              </p>
              <a className="text-link" href="#campus">
                Discover Campus <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="campus" className="section dark">
        <div className="wrap split">
          <div>
            <p className="eyebrow">SBC Campus / Coming soon</p>
            <h2 className="section-title">
              Your people.
              <br />
              Your <span className="serif">next chapter.</span>
            </h2>
            <p className="copy mt-7">
              Learn alongside ambitious founders who are building just like you.
              Inside Campus, you’ll get:
            </p>
            <ul className="campus-benefits mt-7">
              {[
                "A community of founders building real businesses",
                "Monthly social media trend reports",
                "An AI prompt library for branding, marketing, and content",
                "Branding and marketing discussions",
                "50% off community in-person learning events",
                "Early access to upcoming toolkits and courses",
                "A place to ask questions, get feedback, and keep growing",
              ].map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-6">Join the Campus waitlist</p>
            <p className="copy mb-9">
              Campus is coming soon. Send SBC a request to join the waitlist and
              learn more about the launch.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
