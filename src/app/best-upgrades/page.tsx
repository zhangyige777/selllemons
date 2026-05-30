import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('best-upgrades')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Upgrades in Sell Lemons - What to Buy First',
  description: 'Discover the best upgrades in Sell Lemons by stage, including early income upgrades, mid-game automation, late-game multipliers, and ROI-based priority tips.',
  path: '/best-upgrades/',
  keywords: ['Sell Lemons best upgrades'],
})

export default function BestUpgradesPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Best Upgrades in Sell Lemons' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Best Upgrades in Sell Lemons</h1>
      <p className="text-gray-600">Discover the best upgrades in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
