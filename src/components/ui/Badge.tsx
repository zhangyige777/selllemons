import { cn } from '@/lib/utils'

type BadgeVariant = 'active' | 'expired' | 'confirmed' | 'possible' | 'unconfirmed' | 'default'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  active: 'bg-green-100 text-green-800 border-green-200',
  expired: 'bg-gray-100 text-gray-600 border-gray-200',
  confirmed: 'bg-blue-100 text-blue-800 border-blue-200',
  possible: 'bg-primary-100 text-primary-800 border-primary-200',
  unconfirmed: 'bg-red-100 text-red-800 border-red-200',
  default: 'bg-gray-100 text-gray-700 border-gray-200',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
