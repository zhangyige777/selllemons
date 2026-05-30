import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { navSections } from '@/data/navigation'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Wiki - Tools, Keys, Badges & Systems',
  description: 'Complete Sell Lemons wiki hub. All calculators, guides, systems, keys, badges, and hidden content organized by category.',
  path: '/wiki/',
  keywords: ['Sell Lemons wiki', 'Sell Lemons encyclopedia'],
})

export default function WikiPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Wiki' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Wiki</h1>
      <p className="text-gray-600">Complete hub for all Sell Lemons guides, tools, and information.</p>

      {navSections.map((section) => (
        <section key={section.title}>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm"
              >
                <span>{item.emoji}</span>
                <span className="font-medium text-gray-700">{item.label}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
