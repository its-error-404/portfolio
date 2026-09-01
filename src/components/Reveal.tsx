import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  /** Stagger index — multiplied by `step` ms for a cascade. */
  order?: number;
  step?: number;
  className?: string;
}

/** Wrapper that fades + lifts its child into view when scrolled to. */
export function Reveal({
  children,
  as: Tag = "div",
  order = 0,
  step = 70,
  className,
}: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-reveal
      className={className}
      style={{ "--reveal-delay": `${order * step}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
