import { formatFullDate, formatMonthYear, formatYear } from "@/lib/site";

type Granularity = "full" | "month" | "year";

interface LastUpdatedProps {
  /** ISO date string: "2026-09-07", "2026-09", or "2026". */
  iso: string;
  granularity?: Granularity;
  /** "LAST UPDATED" by default; "UPDATED" reads better on experience rows. */
  label?: string;
  /** Visual scale of the date. */
  size?: "sm" | "md" | "lg";
  /** Stack label above date (default) or inline. */
  layout?: "stack" | "inline";
  className?: string;
}

/**
 * The global "actively maintained" signal. The DATE carries the visual weight —
 * the label stays quiet. Used in the hero, on project cards, blog cards,
 * experience rows, and the footer.
 */
export function LastUpdated({
  iso,
  granularity = "full",
  label = "Last updated",
  size = "md",
  layout = "stack",
  className,
}: LastUpdatedProps) {
  const text =
    granularity === "full"
      ? formatFullDate(iso)
      : granularity === "month"
        ? formatMonthYear(iso)
        : formatYear(iso);

  return (
    <div
      className={["last-updated", `lu-${size}`, `lu-${layout}`, className]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="last-updated__label mono">{label}</span>
      <time className="last-updated__date" dateTime={iso}>
        {text}
      </time>
    </div>
  );
}
