import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * Subtle accent glow that follows the pointer inside its parent.
 * Render inside a `position: relative` container. Fine-pointer only,
 * disabled under reduced-motion.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");

  useEffect(() => {
    if (reduced || !finePointer) return;
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
        el.style.opacity = "1";
      });
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced, finePointer]);

  if (reduced || !finePointer) return null;
  return <div ref={ref} className="cursor-spotlight" aria-hidden="true" />;
}
