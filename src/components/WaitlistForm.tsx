"use client";

import { useState } from "react";

/** Frontend-only waitlist capture. TODO: connect to email provider / CMS. */
export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<"idle" | "sent" | "error">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("sent");
  }

  if (state === "sent") {
    return (
      <p role="status" className="border rule bg-sage/50 px-5 py-4 text-sm">
        <strong>You&apos;re on the list.</strong> You&apos;ll be first to know when December 2026 bookings open. (Demo — no email sent yet.)
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? "" : "border rule bg-paper p-5 md:p-6"}>
      {!compact && (
        <p className="eyebrow text-fern">2027 waitlist</p>
      )}
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">Email address</label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          placeholder="you@business.com"
          className="w-full border rule bg-cream px-4 py-3 text-[15px] outline-none placeholder:text-muted/60 focus:border-clay"
        />
        <button type="submit" className="shrink-0 bg-clay px-6 py-3 font-mono text-xs tracking-[0.18em] uppercase text-cream transition-colors hover:bg-clay-deep">
          Save my spot
        </button>
      </div>
      {state === "error" ? <p role="alert" className="mt-2 text-xs text-clay-deep">Enter a valid email to join.</p> : null}
      <p className="mt-2 font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted">No spam. One email when bookings reopen.</p>
    </form>
  );
}
