import { siteConfig } from '@/lib/config'

export default function LastUpdated({ date }: { date?: string }) {
  const displayDate = date || siteConfig.lastUpdated
  return (
    <div className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100">
      <p>Last updated: {displayDate}</p>
      <p className="mt-1">
        🍋 Sell Lemons Tools is a fan-made, unofficial tool site. Not affiliated with Roblox Corporation or the Sell Lemons developers.
      </p>
    </div>
  )
}
