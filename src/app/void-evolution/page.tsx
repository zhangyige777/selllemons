import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('void-evolution')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Void Evolution - Complete Guide',
  description: 'Sell Lemons Void Evolution guide covering possible unlock requirements, effects, late-game progression value, hidden rewards, and related systems.',
  path: '/void-evolution/',
  keywords: ['Sell Lemons Void Evolution'],
})

export default function VoidEvolutionPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Void Evolution Guide' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Void Evolution Guide</h1>
      <p className="text-gray-600">Learn about Void Evolution in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
