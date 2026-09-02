interface StatusDotProps {
  label: string;
  tone?: "ok" | "muted";
}

/** ● OPEN TO OPPORTUNITIES — small animated availability pill. */
export function StatusDot({ label, tone = "ok" }: StatusDotProps) {
  return (
    <span className={`status-dot status-dot--${tone}`}>
      <span className="status-dot__pulse" aria-hidden="true">
        <span className="status-dot__core" />
      </span>
      <span className="status-dot__label mono">{label}</span>
    </span>
  );
}
