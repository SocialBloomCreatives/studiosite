import { testimonials } from "@/data/testimonials";
export function Testimonials({ limit }: { limit?: number }) {
  return (
    <>
      <div className="testimonial-grid">
        {testimonials.slice(0, limit).map((t) => (
          <figure className="testimonial" key={t.author}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <span>{t.author}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
