import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  /** Show the label text next to the icon. */
  withText?: boolean;
  variant?: "icon" | "row";
}

export function SocialLink({
  href,
  label,
  icon,
  withText = false,
  variant = "icon",
}: SocialLinkProps) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      className={`social-link social-link--${variant}`}
      href={href}
      aria-label={label}
      {...(isMail
        ? {}
        : { target: "_blank", rel: "noreferrer noopener" })}
    >
      <span className="social-link__icon">{icon}</span>
      {(withText || variant === "row") && (
        <span className="social-link__text">{label}</span>
      )}
    </a>
  );
}
