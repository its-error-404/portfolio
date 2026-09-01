import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface SectionHeadingProps {
  /** Two-digit index, e.g. "03". */
  index?: string;
  /** Small mono kicker above the title. */
  kicker: string;
  title: ReactNode;
  /** Optional supporting line under the title. */
  lead?: ReactNode;
  /** Slot on the right (e.g. a "View all" link or LastUpdated). */
  aside?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  kicker,
  title,
  lead,
  aside,
  align = "left",
}: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <header
      ref={ref}
      data-reveal
      className={`section-heading section-heading--${align}`}
    >
      <div className="section-heading__top">
        <p className="section-heading__kicker mono">
          {index && <span className="section-heading__index">{index}</span>}
          {kicker}
        </p>
        {aside && <div className="section-heading__aside">{aside}</div>}
      </div>
      <h2 className="section-heading__title">{title}</h2>
      {lead && <p className="section-heading__lead">{lead}</p>}
    </header>
  );
}
