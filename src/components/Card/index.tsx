import { cn } from "@/lib/utils"

interface CardProps {
  children?: React.ReactNode
  className?: string
}

export const Card = ({
  children,
  className,
}: CardProps) => {
  return (
    <section className={cn("bg-card w-full p-6 py-4 text-center rounded-2xl mt-4", className)}>
      {children}
    </section>
  )
}
