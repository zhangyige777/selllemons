import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('purity-fruit')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Purity Fruit - What Is Purity Fruit',
  description: 'Sell Lemons Purity Fruit guide covering possible locations, uses, unlock requirements, endgame connections, and confirmation status.',
  path: '/purity-fruit/',
  keywords: ['Sell Lemons Purity Fruit'],
})

export default function PurityFruitPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Purity Fruit Guide' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Purity Fruit Guide</h1>
      <p className="text-gray-600">Learn about the Purity Fruit in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
