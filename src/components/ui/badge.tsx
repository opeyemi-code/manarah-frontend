import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-neutral-background text-neutral-text",
  primary: "bg-primary-light text-primary-dark",
  secondary: "bg-secondary-light text-secondary-dark",
  verified: "bg-primary text-primary-foreground",
  premium: "bg-secondary text-secondary-foreground",
} as const;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
