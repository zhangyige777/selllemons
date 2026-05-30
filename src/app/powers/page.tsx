import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('powers')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Unique Powers - All Powers Explained',
  description: 'Sell Lemons Unique Powers guide covering unlocks, possible effects, income bonuses, utility powers, and how powers fit into progression planning.',
  path: '/powers/',
  keywords: ['Sell Lemons powers'],
})

export default function PowersPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Unique Powers Guide' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Unique Powers Guide</h1>
      <p className="text-gray-600">Learn about unique powers in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
