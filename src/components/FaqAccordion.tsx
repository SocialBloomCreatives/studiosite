"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

export function FaqAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <Accordion.Root type="single" collapsible className="border-t rule">
      {items.map((f, i) => (
        <Accordion.Item key={f.q} value={`item-${i}`} className="border-b rule">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left [&[data-state=open]>span:last-child]:rotate-45">
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg md:text-xl">{f.q}</span>
              </span>
              <span className="grid size-8 shrink-0 place-items-center border rule transition-transform duration-300">
                <Plus size={15} aria-hidden />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none data-[state=open]:animate-[accordionIn_0.35s_ease]">
            <p className="max-w-2xl pb-6 pl-8 text-[15px] leading-relaxed text-ink-soft">
              {f.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
