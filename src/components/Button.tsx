import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
}

type NativeButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;
type NativeAnchor = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className">;

type ButtonProps =
  | (CommonProps & NativeButton & { as?: "button" })
  | (CommonProps & NativeAnchor & { as: "a"; href: string });

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  className,
  ...rest
}: ButtonProps) {
  const cls = ["btn", `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {iconLeft && <span className="btn__icon">{iconLeft}</span>}
      <span className="btn__label">{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </>
  );

  if (rest.as === "a") {
    const { as: _as, ...anchorProps } = rest;
    return (
      <a className={cls} {...(anchorProps as NativeAnchor)}>
        {inner}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = rest;
  return (
    <button className={cls} type={(buttonProps as NativeButton).type ?? "button"} {...(buttonProps as NativeButton)}>
      {inner}
    </button>
  );
}
