import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium",
        variant === "default" && "bg-black text-white",
        variant === "outline" && "border border-gray-300 text-gray-700",
        className
      )}
      {...props}
    />
  )
}
