import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  /** Draw a hairline divider on top. */
  divider?: boolean;
  className?: string;
  /** Accessible name for the landmark (falls back to id). */
  ariaLabel?: string;
}

export function Section({ id, children, divider = true, className, ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel ?? id}
      className={["section", divider && "section-divider", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container">{children}</div>
    </section>
  );
}
