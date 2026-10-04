"use client";
import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";
export function ContactDraftForm({
  kind = "project",
}: {
  kind?: "project" | "campus";
}) {
  const id = useId(),
    [draft, setDraft] = useState(""),
    [error, setError] = useState("");
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
    services: [] as string[],
  });
  const campus = kind === "campus";
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selected = data.getAll("services").map(String);
    if (!campus && selected.length === 0) {
      setError("Please choose at least one project type.");
      return;
    }
    setError("");
    setDetails({
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      business: String(data.get("business") || ""),
      message: String(data.get("message") || ""),
      services: selected,
    });
    setDraft(
      [
        campus
          ? "Hello SBC, I would like to join the Campus waitlist."
          : "Hello SBC, I would love to discuss a project.",
        `Name: ${String(data.get("name") || "").trim()}`,
        `Email: ${String(data.get("email") || "").trim()}`,
        data.get("phone") ? `Phone: ${String(data.get("phone")).trim()}` : "",
        !campus ? `Project types: ${selected.join(", ")}` : "",
        data.get("business")
          ? `Business: ${String(data.get("business")).trim()}`
          : "",
        data.get("message") ? `\n${String(data.get("message")).trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }
  if (draft) {
    const subject = campus
      ? "SBC Campus waitlist request"
      : "SBC project inquiry";
    return (
      <div className="draft-preview" role="status">
        <p className="eyebrow mb-4">
          Your {campus ? "waitlist request" : "inquiry"} is ready to send
        </p>
        <pre>{draft}</pre>
        <div className="actions">
          <a
            className="button"
            href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`}
          >
            Open email draft <ArrowUpRight size={16} aria-hidden />
          </a>
          <a
            className="text-link"
            href={`${site.whatsapp}?text=${encodeURIComponent(draft)}`}
            target="_blank"
            rel="noreferrer"
          >
            Open WhatsApp <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
        <p className="form-note mt-5">
          Complete sending in your email app or WhatsApp. This website has not
          sent or saved your details.
        </p>
        <button className="text-link mt-5" onClick={() => setDraft("")}>
          Edit details
        </button>
      </div>
    );
  }
  return (
    <form className="contact-form" onSubmit={prepare}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor={`${id}-name`}>Your name *</label>
          <input
            id={`${id}-name`}
            name="name"
            defaultValue={details.name}
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
          />
        </div>
        <div className="field">
          <label htmlFor={`${id}-email`}>Email address *</label>
          <input
            id={`${id}-email`}
            name="email"
            defaultValue={details.email}
            autoComplete="email"
            type="email"
            required
            maxLength={200}
            placeholder="you@business.com"
          />
        </div>
      </div>
      {!campus && (
        <>
          <div className="form-grid">
            <div className="field">
              <label htmlFor={`${id}-phone`}>Phone number (optional)</label>
              <input
                id={`${id}-phone`}
                name="phone"
                defaultValue={details.phone}
                autoComplete="tel"
                type="tel"
                maxLength={50}
                placeholder="Including country code"
              />
            </div>
            <div className="field">
              <label htmlFor={`${id}-business`}>Business name (optional)</label>
              <input
                id={`${id}-business`}
                name="business"
                defaultValue={details.business}
                autoComplete="organization"
                maxLength={100}
                placeholder="Your brand"
              />
            </div>
          </div>
          <fieldset aria-describedby={error ? `${id}-error` : undefined}>
            <legend>What can we help with? Choose all that apply. *</legend>
            <div className="check-grid">
              {services.map((s) => (
                <label className="check-label" key={s.slug}>
                  <input
                    type="checkbox"
                    name="services"
                    value={s.name}
                    defaultChecked={details.services.includes(s.name)}
                  />
                  {s.name}
                </label>
              ))}
            </div>
            {error && (
              <p id={`${id}-error`} className="form-error mt-3" role="alert">
                {error}
              </p>
            )}
          </fieldset>
          <div className="field">
            <label htmlFor={`${id}-message`}>
              Tell us a little about your vision (optional)
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              defaultValue={details.message}
              maxLength={2000}
              rows={4}
              placeholder="What are you building, and where would you like to take it?"
            />
          </div>
        </>
      )}
      <div>
        <button className={`button ${campus ? "light" : ""}`} type="submit">
          {campus ? "Prepare waitlist request" : "Prepare inquiry"}{" "}
          <ArrowUpRight size={16} aria-hidden />
        </button>
        <p className="form-note mt-4">
          Next, choose email or WhatsApp to send your{" "}
          {campus ? "request" : "inquiry"} directly to SBC. Your details stay in
          this page until you choose to send.
        </p>
      </div>
    </form>
  );
}
