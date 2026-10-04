"use client";
import { useEffect, useRef } from "react";
export function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0,
      x = 0,
      y = 0,
      tx = 0,
      ty = 0,
      active = false;
    const animate = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      if (active) frame = requestAnimationFrame(animate);
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === "touch") return;
      tx = event.clientX;
      ty = event.clientY;
      const editable =
        event.target instanceof Element &&
        event.target.closest("input,textarea,select");
      dot.style.opacity = editable ? "0" : "1";
      if (!active) {
        active = true;
        x = tx;
        y = ty;
        frame = requestAnimationFrame(animate);
      }
    };
    const over = (event: PointerEvent) => {
      dot.classList.toggle(
        "is-hovering",
        Boolean(
          event.target instanceof Element && event.target.closest("a,button"),
        ),
      );
    };
    const hide = () => {
      active = false;
      cancelAnimationFrame(frame);
      dot.style.opacity = "0";
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    media.addEventListener("change", hide);
    return () => {
      hide();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      media.removeEventListener("change", hide);
    };
  }, []);
  return <div ref={ref} className="cursor-dot" aria-hidden="true" />;
}
