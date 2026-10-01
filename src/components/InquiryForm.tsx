"use client";

import { useState } from "react";

const inquiryFields = [
  { name: "name", label: "Your name", type: "text", required: true, placeholder: "Jane Doe" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@business.com" },
  { name: "business", label: "Business name", type: "text", required: true, placeholder: "Studio Name" },
  { name: "website", label: "Current website (if any)", type: "url", required: false, placeholder: "https://" },
] as const;

/**
 * Frontend-only inquiry form.
 * TODO(back-end): connect `handleSubmit` to Formspree / Resend / Next route handler.
 * Validation runs client-side; submission currently simulates success.
 */
export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    for (const f of inquiryFields) {
      const v = String(data.get(f.name) ?? "").trim();
      if (f.required && !v) next[f.name] = "Required";
      if (f.type === "email" && v && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) next[f.name] = "Enter a valid email";
    }
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "").trim();
    if (!service) next.service = "Choose an offering";
    if (message.length < 20) next.message = "Tell us a little more (20+ characters)";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }
    // Simulated — replace with fetch to API route.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border rule bg-sage/40 p-8" role="status">
        <p className="eyebrow text-fern">Received — thank you</p>
        <p className="font-display mt-3 text-3xl">Your vision is in good soil.</p>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          This demo form doesn&apos;t send email yet. In production it will notify{" "}
          <strong>serena@kohidesignstudio.com</strong> and add you to the inquiry queue.
          Meanwhile, email Serena directly or join the 2027 waitlist.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border rule bg-paper">
      <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
        {inquiryFields.map((f) => (
          <div key={f.name} className="bg-paper p-5">
            <label htmlFor={`inq-${f.name}`} className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted">
              {f.label} {f.required ? "*" : "(optional)"}
            </label>
            <input
              id={`inq-${f.name}`}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              aria-invalid={!!errors[f.name]}
              className="mt-2 w-full border-b rule bg-transparent pb-2 text-[15px] outline-none placeholder:text-muted/60 focus:border-clay"
            />
            {errors[f.name] ? <p className="mt-1 text-xs text-clay-deep" role="alert">{errors[f.name]}</p> : null}
          </div>
        ))}
      </div>
      <div className="grid gap-px border-t rule bg-[var(--line)] sm:grid-cols-2">
        <div className="bg-paper p-5">
          <label htmlFor="inq-service" className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted">
            I&apos;m dreaming about *
          </label>
          <select id="inq-service" name="service" className="mt-2 w-full border-b rule bg-transparent pb-2 text-[15px] outline-none focus:border-clay" defaultValue="">
            <option value="" disabled>Choose an offering…</option>
            <option>Deep Roots — Brand Identity (from $2,900)</option>
            <option>The Canopy — Website (from $4,900)</option>
            <option>The Full Ecosystem — Brand + Web (from $6,500)</option>
            <option>Not sure yet — help me decide</option>
          </select>
          {errors.service ? <p className="mt-1 text-xs text-clay-deep" role="alert">{errors.service}</p> : null}
        </div>
        <div className="bg-paper p-5">
          <label htmlFor="inq-budget" className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted">
            Timeline
          </label>
          <select id="inq-budget" name="timeline" className="mt-2 w-full border-b rule bg-transparent pb-2 text-[15px] outline-none focus:border-clay" defaultValue="Early 2027">
            <option>Early 2027</option>
            <option>Mid 2027</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>
      <div className="border-t rule bg-paper p-5">
        <label htmlFor="inq-message" className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted">
          Tell me about your vision *
        </label>
        <textarea
          id="inq-message"
          name="message"
          rows={5}
          placeholder="Where is your business now, and where is it growing toward?"
          className="mt-2 w-full border-b rule bg-transparent pb-2 text-[15px] outline-none placeholder:text-muted/60 focus:border-clay"
        />
        {errors.message ? <p className="mt-1 text-xs text-clay-deep" role="alert">{errors.message}</p> : null}
      </div>
      <div className="flex flex-col gap-3 border-t rule p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted">
          ● Fully booked 2026 — now gathering 2027 inquiries
        </p>
        <button type="submit" className="bg-ink px-6 py-3.5 font-mono text-xs tracking-[0.18em] uppercase text-cream transition-colors hover:bg-clay">
          Plant the first seed →
        </button>
      </div>
      {status === "error" ? (
        <p className="border-t rule px-5 py-3 text-sm text-clay-deep" role="alert">
          A couple of fields need attention above.
        </p>
      ) : null}
    </form>
  );
}
