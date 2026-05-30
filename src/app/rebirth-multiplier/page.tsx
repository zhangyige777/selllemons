import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('rebirth-multiplier')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Rebirth Multiplier - How It Works',
  description: 'Learn how the Sell Lemons rebirth multiplier works, how it stacks with boosts and investors, and when rebirth gives the best long-term income gain.',
  path: '/rebirth-multiplier/',
  keywords: ['Sell Lemons rebirth multiplier'],
})

export default function RebirthMultiplierPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Rebirth Multiplier' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Rebirth Multiplier</h1>
      <p className="text-gray-600">Learn how the rebirth multiplier works.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
