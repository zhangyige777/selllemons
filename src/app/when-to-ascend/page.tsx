import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('when-to-ascend')

export const metadata: Metadata = generateSEOMetadata({
  title: 'When to Ascend in Sell Lemons',
  description: 'Learn when to ascend in Sell Lemons by comparing reset cost, permanent bonus, rebuild time, endgame progress, and whether ascending is worth it now.',
  path: '/when-to-ascend/',
  keywords: ['Sell Lemons when to ascend'],
})

export default function WhenToAscendPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'When to Ascend in Sell Lemons' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">When to Ascend in Sell Lemons</h1>
      <p className="text-gray-600">Learn when to ascend in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
