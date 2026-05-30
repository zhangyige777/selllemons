import Link from 'next/link'
import { cn } from '@/lib/utils'

interface RelatedLinkItem {
  href: string
  label: string
  emoji?: string
  description?: string
}

interface RelatedLinksProps {
  title?: string
  items: RelatedLinkItem[]
  className?: string
}

export default function RelatedLinks({ title = 'Related Pages', items, className }: RelatedLinksProps) {
  if (items.length === 0) return null

  return (
    <div className={cn('', className)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700"
          >
            {item.emoji && <span>{item.emoji}</span>}
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
