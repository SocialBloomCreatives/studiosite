import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
export const metadata: Metadata = {
  title: "Preview testimonials",
  description: "Simulated testimonial copy for the SBC website design preview.",
  robots: { index: false, follow: true },
};
export default function Love() {
  return (
    <>
      <PageHero
        eyebrow="Design preview / Demo testimonials"
        title={
          <>
            The space for
            <br />
            <span className="serif">kind words.</span>
          </>
        }
        lede="A preview of how client stories will appear. All seven quotes below are simulated copy for review and need verified customer wording before publication."
      />
      <section className="section">
        <div className="wrap">
          <Testimonials />
        </div>
      </section>
    </>
  );
}
