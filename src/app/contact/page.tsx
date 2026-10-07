import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/data/site";
export const metadata: Metadata = {
  title: "Work with SBC",
  description:
    "Tell Social Bloom Creatives about your brand. Start a branding, strategy, campaign, website, or social media project.",
};
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Every great brand starts with a conversation"
        title={
          <>
            Let’s build something
            <br />
            <span className="serif">unforgettable.</span>
          </>
        }
        lede="Launching your first business, refreshing your brand, or preparing for your next stage of growth? We’d love to hear what you’re building."
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Work with SBC Agency</p>
            <h2 className="section-title">
              Big ideas
              <br />
              <span className="serif">welcome.</span>
            </h2>
            <p className="copy mt-7">
              Tell us a little about your business and the support you’re
              looking for. Choose your project types, then send your inquiry
              directly to SBC.
            </p>
            <div className="contact-links">
              <a className="text-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a
                className="text-link"
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp · {site.phone}{" "}
                <ArrowUpRight size={14} aria-hidden style={{ verticalAlign: "-2px" }} />
              </a>
              <p className="eyebrow">
                {site.location}
                <br />
                {site.working}
              </p>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
