import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('secrets')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Secrets - All Known Secrets',
  description: 'Discover Sell Lemons secrets, hidden items, secret keys, badges, redacted areas, UFO content, and player-reported mysteries with confirmation status.',
  path: '/secrets/',
  keywords: ['Sell Lemons secrets'],
})

export default function SecretsPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Secrets Guide' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Secrets Guide</h1>
      <p className="text-gray-600">Discover all known secrets in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
