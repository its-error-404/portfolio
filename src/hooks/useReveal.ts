import { useEffect, useRef } from "react";

interface RevealOptions {
  /** Fraction of the element visible before it reveals. */
  threshold?: number;
  /** Reveal slightly before it enters the viewport. */
  rootMargin?: string;
  /** Re-hide when scrolled away (default: reveal once and keep). */
  once?: boolean;
}

/**
 * Attach the returned ref to any element. It starts hidden (via the
 * `[data-reveal]` CSS contract) and gets `.is-visible` when it scrolls in.
 * No-ops gracefully where IntersectionObserver is unavailable.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
) {
  const { threshold = 0.15, rootMargin = "0px 0px -8% 0px", once = true } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        }
      },
      { threshold, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
