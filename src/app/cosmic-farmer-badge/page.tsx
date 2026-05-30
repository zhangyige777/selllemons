import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('cosmic-farmer-badge')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Cosmic Farmer Badge - How to Get It',
  description: 'Learn how to get the Cosmic Farmer Badge in Sell Lemons, including possible requirements, related cosmic systems, unlock status, and reward notes.',
  path: '/cosmic-farmer-badge/',
  keywords: ['Sell Lemons Cosmic Farmer badge'],
})

export default function CosmicFarmerBadgePage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Cosmic Farmer Badge' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Cosmic Farmer Badge</h1>
      <p className="text-gray-600">Learn how to earn the Cosmic Farmer Badge.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
