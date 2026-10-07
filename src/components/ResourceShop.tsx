"use client";
import { useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Plus, Minus, ShoppingBag } from "lucide-react";
import { resources } from "@/data/resources";
import { site } from "@/data/site";
type Cart = Record<string, number>;
const storageKey = "sbc-resource-cart-v1",
  cartEvent = "sbc-cart-change";
let fallback = "{}";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(cartEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(cartEvent, callback);
  };
}
function getSnapshot() {
  try {
    return localStorage.getItem(storageKey) || fallback;
  } catch {
    return fallback;
  }
}
function parseCart(raw: string): Cart {
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return {};
    return Object.fromEntries(
      resources
        .filter(
          (r) =>
            Number.isInteger(parsed[r.slug]) &&
            parsed[r.slug] > 0 &&
            parsed[r.slug] <= 20,
        )
        .map((r) => [r.slug, parsed[r.slug]]),
    );
  } catch {
    return {};
  }
}
function persist(cart: Cart) {
  fallback = JSON.stringify(cart);
  try {
    localStorage.setItem(storageKey, fallback);
  } catch {
    /* Private browsing: cart remains available in memory. */
  }
  window.dispatchEvent(new Event(cartEvent));
}
export function ResourceShop() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => "{}"),
    cart = parseCart(raw);
  const [status, setStatus] = useState("");
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const selected = resources.filter((r) => cart[r.slug]);
  const usd = count * 25,
    ngn = count * 20000;
  function update(slug: string, change: number) {
    const next = { ...cart },
      quantity = Math.max(0, Math.min(20, (next[slug] || 0) + change));
    if (quantity) next[slug] = quantity;
    else delete next[slug];
    persist(next);
    setStatus(
      change > 0
        ? `${resources.find((r) => r.slug === slug)?.name} added to your cart.`
        : "Cart updated.",
    );
  }
  const order = [
    "Hello SBC, I would like to purchase:",
    ...selected.map(
      (r) =>
        `${cart[r.slug]} × ${r.name} — $${r.usd * cart[r.slug]} USD / ₦${(r.ngn * cart[r.slug]).toLocaleString("en-NG")}`,
    ),
    `\nTotal: $${usd} USD / ₦${ngn.toLocaleString("en-NG")}`,
    "Please confirm payment instructions and how I will receive the resources.",
  ].join("\n");
  return (
    <>
      <div className="flex justify-between items-center gap-4 mb-8">
        <p className="eyebrow">The SBC resource collection</p>
        <a className="text-link" href="#cart">
          <ShoppingBag size={16} aria-hidden />
          View cart ({count})
        </a>
      </div>
      <div className="resource-grid">
        {resources.map((r) => (
          <article key={r.slug}>
            <div className={`resource-art ${r.accent}`}>
              <p className="eyebrow">SBC College · {r.category}</p>
              <h2>{r.name}</h2>
              <div className="eyebrow">For founders building it themselves</div>
              <span className="resource-symbol" aria-hidden>
                {r.symbol === "02" ? (
                  <svg
                    width="0.9em"
                    height="0.9em"
                    viewBox="0 0 72 72"
                    fill="currentColor"
                  >
                    <path d="M36 0c1.7 18.8 17.2 34.3 36 36-18.8 1.7-34.3 17.2-36 36-1.7-18.8-17.2-34.3-36-36 18.8-1.7 34.3-17.2 36-36Z" />
                  </svg>
                ) : r.symbol === "03" ? (
                  "⊞"
                ) : r.symbol === "04" ? (
                  "◉"
                ) : (
                  <ArrowUpRight width="0.9em" height="0.9em" />
                )}
              </span>
            </div>
            <div className="resource-info">
              <div className="price">
                <span>{r.category}</span>
                <strong>$25 / ₦20,000</strong>
              </div>
              <p className="copy">{r.description}</p>
              <button
                className="button outline"
                onClick={() => update(r.slug, 1)}
                disabled={(cart[r.slug] || 0) >= 20}
              >
                Add to cart <Plus size={16} aria-hidden />
              </button>
            </div>
          </article>
        ))}
      </div>
      <p className="cart-status" role="status" aria-live="polite">
        {status}
      </p>
      <section id="cart" className="cart" aria-label="Your resource cart">
        <h2>
          Your cart <span className="serif">({count})</span>
        </h2>
        {selected.length === 0 ? (
          <p className="cart-empty">
            A little clarity, a little creativity. Add a resource above to start
            your order.
          </p>
        ) : (
          <>
            {selected.map((r) => (
              <div className="cart-line" key={r.slug}>
                <div>
                  <h3>{r.name}</h3>
                  <p className="text-sm mt-2">
                    ${r.usd * cart[r.slug]} / ₦
                    {(r.ngn * cart[r.slug]).toLocaleString("en-NG")}
                  </p>
                </div>
                <div className="quantity">
                  <button
                    onClick={() => update(r.slug, -1)}
                    aria-label={`Remove one ${r.name}`}
                  >
                    <Minus size={13} />
                  </button>
                  <span aria-label={`${cart[r.slug]} copies`}>
                    {cart[r.slug]}
                  </span>
                  <button
                    onClick={() => update(r.slug, 1)}
                    disabled={cart[r.slug] >= 20}
                    aria-label={`Add one ${r.name}`}
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <div>
                <p>
                  Total:{" "}
                  <strong>
                    ${usd} USD / ₦{ngn.toLocaleString("en-NG")}
                  </strong>
                </p>
                <p className="copy">
                  These are the two listed currency prices, not a live
                  conversion. SBC will confirm payment and delivery directly. No
                  payment is collected here.
                </p>
              </div>
              <div className="actions">
                <a
                  className="button"
                  href={`${site.whatsapp}?text=${encodeURIComponent(order)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Send order on WhatsApp <ArrowUpRight size={16} aria-hidden />
                </a>
                <a
                  className="text-link"
                  href={`mailto:${site.email}?subject=${encodeURIComponent("SBC resource order")}&body=${encodeURIComponent(order)}`}
                >
                  Order by email
                </a>
              </div>
            </div>
            <button
              className="text-link mt-8"
              onClick={() => {
                persist({});
                setStatus("Your cart is now empty.");
              }}
            >
              Clear cart
            </button>
          </>
        )}
      </section>
    </>
  );
}
