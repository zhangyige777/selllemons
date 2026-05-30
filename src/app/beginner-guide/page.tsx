import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('beginner-guide')

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Beginner Guide - How to Get Started',
  description: 'Sell Lemons beginner guide covering the first upgrades, money-making basics, offline income, first rebirth timing, codes, tools, and common early mistakes.',
  path: '/beginner-guide/',
  keywords: ['Sell Lemons beginner guide'],
})

export default function BeginnerGuidePage() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Sell Lemons Beginner Guide' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Beginner Guide</h1>
      <p className="text-gray-600">Everything you need to know to start playing Sell Lemons.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
