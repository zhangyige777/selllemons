import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('money-fast')

export const metadata: Metadata = generateSEOMetadata({
  title: 'How to Make Money Fast in Sell Lemons',
  description: 'Learn how to make money fast in Sell Lemons with upgrade priority, offline income, rebirth timing, multipliers, and calculator-based progression tips.',
  path: '/money-fast/',
  keywords: ['Sell Lemons money fast'],
})

export default function MoneyFastPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'How to Make Money Fast in Sell Lemons' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">How to Make Money Fast in Sell Lemons</h1>
      <p className="text-gray-600">Learn the fastest ways to earn money in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
