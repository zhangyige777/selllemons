import { Badge } from './Badge'
import type { DataStatus } from '@/data/types'

interface DataStatusBadgeProps {
  status: DataStatus
  className?: string
}

const statusLabels: Record<DataStatus, string> = {
  confirmed: '✓ Confirmed',
  possible: '? Possible',
  unconfirmed: '! Unconfirmed',
}

export function DataStatusBadge({ status, className }: DataStatusBadgeProps) {
  return (
    <Badge variant={status} className={className}>
      {statusLabels[status]}
    </Badge>
  )
}

interface DataStatusBannerProps {
  status: DataStatus
  className?: string
}

export function DataStatusBanner({ status, className }: DataStatusBannerProps) {
  if (status === 'confirmed') return null

  const messages: Record<Exclude<DataStatus, 'confirmed'>, string> = {
    possible: 'This information is based on community reports and speculation. It has not been fully verified in-game.',
    unconfirmed: 'This information is currently unconfirmed. Details may change as the game updates. Check back regularly for verified information.',
  }

  const colors: Record<Exclude<DataStatus, 'confirmed'>, string> = {
    possible: 'bg-primary-50 border-primary-200 text-primary-800',
    unconfirmed: 'bg-red-50 border-red-200 text-red-800',
  }

  return (
    <div className={`rounded-lg border p-3 text-sm ${colors[status]} ${className || ''}`}>
      <p className="font-medium mb-1">Data Status: {statusLabels[status]}</p>
      <p>{messages[status]}</p>
    </div>
  )
}
