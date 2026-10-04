import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ResourceShop } from "@/components/ResourceShop";
export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore The Visibility Blueprint, Build Faster with AI, the Content Calendar Template, and The Vault from SBC College.",
};
export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="SBC College / Resources"
        title={
          <>
            Less guesswork.
            <br />
            More <span className="serif">getting started.</span>
          </>
        }
        lede="A collection of resources for founders building their own brands. Find your next step, add it to your cart, and connect with SBC to purchase."
      />
      <section className="section">
        <div className="wrap">
          <ResourceShop />
        </div>
      </section>
    </>
  );
}
