import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full rounded-2xl border border-input-border bg-input-background px-4 py-3 text-md file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-placeholder disabled:cursor-not-allowed disabled:opacity-50 font-medium",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
