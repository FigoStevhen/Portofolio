import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

type ButtonProps = {
  children: ReactNode;
  /** Kalau diisi, tombol dirender sebagai link <a>. */
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
  title?: string;
  /** true = tampil nonaktif (dipakai untuk link project yang belum tersedia). */
  disabled?: boolean;
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  outline: "border border-border bg-background hover:bg-muted",
  ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "gap-1.5 rounded-md px-3 py-1.5 text-xs",
  md: "gap-2 rounded-lg px-5 py-2.5 text-sm",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  title,
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-colors",
    variants[variant],
    sizes[size],
    disabled && "cursor-not-allowed opacity-50",
    className,
  );

  if (href && !disabled) {
    const isExternal = href.startsWith("http");

    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        title={title}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </button>
  );
}
