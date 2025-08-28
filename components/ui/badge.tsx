import { cn } from "@/lib/utils";
import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-[var(--brand-teal)] text-white border-transparent",
        variant === "outline" &&
          "border-black/10 bg-white text-[var(--brand-teal)]",
        className
      )}
      {...props}
    />
  );
}
