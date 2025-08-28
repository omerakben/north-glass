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
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-turquoise)]";
const variantClasses: Record<Variant, string> = {
  default: "bg-[var(--brand-turquoise)] text-[#00353f] hover:opacity-90",
  outline:
    "border border-black/10 bg-white text-[var(--brand-teal)] hover:bg-[var(--brand-grey)]",
  ghost: "hover:bg-black/5",
  link: "underline text-[var(--brand-teal)] hover:opacity-80",
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
