import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('lemon-trading')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Lemon Trading - Complete Guide',
  description: 'Sell Lemons Lemon Trading guide covering trade mechanics, possible rewards, profit impact, upgrade timing, and when trading becomes useful.',
  path: '/lemon-trading/',
  keywords: ['Sell Lemons Lemon Trading'],
})

export default function LemonTradingPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Lemon Trading Guide' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Lemon Trading Guide</h1>
      <p className="text-gray-600">Learn about Lemon Trading in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
