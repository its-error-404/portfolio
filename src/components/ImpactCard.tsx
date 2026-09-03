import type { CSSProperties } from "react";
import type { ImpactItem } from "@/data/impact";
import { useCountUp } from "@/hooks/useCountUp";
import { useReveal } from "@/hooks/useReveal";

/** Parses a leading integer out of a metric like "~40%" or "150+". */
function splitMetric(metric: string): { prefix: string; num: number; suffix: string } {
  const match = metric.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: metric };
  return { prefix: match[1], num: Number(match[2]), suffix: match[3] };
}

export function ImpactCard({ item, order }: { item: ImpactItem; order: number }) {
  const { prefix, num, suffix } = splitMetric(item.metric);
  const { ref, value } = useCountUp(num);
  const revealRef = useReveal<HTMLElement>();

  return (
    <article
      ref={revealRef}
      className="impact"
      data-reveal
      style={{ "--reveal-delay": `${order * 60}ms` } as CSSProperties}
    >
      <p className="impact__label mono">{item.label}</p>
      <p className="impact__metric">
        <span ref={ref}>
          {prefix}
          {value}
          {suffix}
        </span>
      </p>
      <p className="impact__statement">{item.statement}</p>
      <p className="impact__detail">{item.detail}</p>
    </article>
  );
}
