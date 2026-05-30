import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('offline-earnings')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Offline Earnings Guide',
  description: 'Learn how offline earnings work in Sell Lemons with 100% offline income rate, tips to maximize passive earnings, and the Offline Income Calculator.',
  path: '/offline-earnings/',
  keywords: ['Sell Lemons offline earnings'],
})

export default function OfflineEarningsPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Offline Earnings' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Offline Earnings</h1>
      <p className="text-gray-600">Learn how offline earnings work in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
