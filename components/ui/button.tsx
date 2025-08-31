import { cn } from "@/lib/utils";
import * as React from "react";

type Variant = "default" | "outline" | "ghost" | "link";
type Size = "sm" | "default" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue-primary)]/50";
const variantClasses: Record<Variant, string> = {
  default:
    "bg-gradient-to-r from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] text-white hover:from-[var(--brand-blue-dark)] hover:to-[var(--brand-blue-primary)] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
  outline:
    "border border-[var(--brand-blue-secondary)] bg-white text-[var(--brand-blue-primary)] hover:bg-[var(--brand-blue-light)] hover:border-[var(--brand-blue-primary)]",
  ghost: "hover:bg-[var(--brand-blue-light)] text-[var(--brand-blue-primary)]",
  link: "underline text-[var(--brand-blue-primary)] hover:text-[var(--brand-blue-dark)]",
};
const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  default: "h-10 px-5",
  lg: "h-12 px-7 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    if (asChild) {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className={cn(
            base,
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
          {...props}
        />
      );
    }
    return (
      <button
        ref={ref}
        className={cn(
          base,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
