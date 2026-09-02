import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  /** Optional richer info revealed on hover / focus. */
  title?: string;
  variant?: "default" | "accent" | "muted";
  /** Render as a focusable element so the tooltip is keyboard-reachable. */
  interactive?: boolean;
}

export function Tag({ children, title, variant = "default", interactive }: TagProps) {
  const className = ["tag", `tag--${variant}`, interactive && "tag--interactive"]
    .filter(Boolean)
    .join(" ");

  if (interactive) {
    return (
      <span className={className} tabIndex={0} title={title} data-tip={title}>
        {children}
      </span>
    );
  }
  return (
    <span className={className} title={title}>
      {children}
    </span>
  );
}
