import { testimonials } from "@/data/testimonials";
export function Testimonials({ limit }: { limit?: number }) {
  return (
    <>
      <p className="demo-notice">
        Preview testimonials — simulated copy for design review. These are not
        verified customer endorsements.
      </p>
      <div className="testimonial-grid">
        {testimonials.slice(0, limit).map((t) => (
          <figure className="testimonial" key={t.author}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <span>{t.author}</span>
              <span className="demo-label">Demo quote</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
