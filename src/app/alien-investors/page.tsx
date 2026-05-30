import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('alien-investors')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Alien Investors - Deals Guide',
  description: 'Sell Lemons Alien Investors guide covering deals, income multipliers, possible rewards, when to accept offers, and related progression tools.',
  path: '/alien-investors/',
  keywords: ['Sell Lemons alien investors'],
})

export default function AlienInvestorsPage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Alien Investors Guide' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Alien Investors Guide</h1>
      <p className="text-gray-600">Learn how alien investors work.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
