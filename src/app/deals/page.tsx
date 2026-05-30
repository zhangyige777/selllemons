import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('deals')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Deals Guide - How Deals Work',
  description: 'Learn how deals work in Sell Lemons, including NPC offers, phone offers, possible rewards, income boosts, risks, and when a deal is worth accepting.',
  path: '/deals/',
  keywords: ['Sell Lemons deals'],
})

export default function DealsPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Deals Guide' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Deals Guide</h1>
      <p className="text-gray-600">Learn how deals work in Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
