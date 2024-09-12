import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
}

export const Loading = ({ className }: LoadingProps) => {
  return (
    <div className={cn("w-4 h-4 animate-spin border-2 border-t-blue-400 rounded-[50%]", className)} />
  )
}
