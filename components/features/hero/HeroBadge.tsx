import { cn } from "@/lib/utils"
import { IMessageDots } from "@/components/icons/IMessageDots"

interface BadgeProps {
  className?: string
  children: React.ReactNode
}

export function HeroBadge({ className, children }: BadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-[8px] rounded-[200px] bg-white pt-[4px] pr-[8px] pb-[5px] pl-[8px] shadow-sm border border-blue-100", className)}>
      <IMessageDots />
      <span className="text-brand-dark font-medium text-[16px] leading-[120%] tracking-[-0.02em] whitespace-nowrap font-sans">
        {children}
      </span>
    </div>
  )
}
