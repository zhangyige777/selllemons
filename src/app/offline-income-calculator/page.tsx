import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import OfflineIncomeClient from '@/components/calculators/OfflineIncomeClient'
import { getToolBySlug } from '@/data/tools'

const tool = getToolBySlug('offline-income-calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons offline income calculator', 'Sell Lemons offline earnings'],
})

export default function OfflineIncomePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Offline Income Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">{tool.description}</p>
      <OfflineIncomeClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Enter your <strong>Income per Second</strong> from the game (this is your base income before multipliers). Set the number of hours you plan to be offline. Add your active multipliers: rebirth multiplier, boost multiplier, and investor bonus percentage. The calculator will show your projected offline earnings.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula and Estimate Logic</h2>
        <p className="text-sm text-gray-600">Total Multiplier = Rebirth Multiplier × Boost Multiplier × (1 + Investor Bonus/100). Effective Income = Base Income × Total Multiplier. Offline Earnings = Effective Income × 3600 × Offline Hours. Sell Lemons offers 100% offline income, meaning you earn at the same rate while AFK. There may be an offline cap, but this is currently unconfirmed.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Use this calculator before logging off to estimate how much cash you will have when you return. This helps you decide whether to buy upgrades before going offline or save the cash for later. It is also useful for planning your return time to maximize income.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Not buying upgrades before logging off - every upgrade increases offline earnings</li>
          <li>Activating boosts right before going offline - boost timer runs while AFK</li>
          <li>Using effective income instead of base income as the input</li>
          <li>Forgetting that investor bonus is a percentage, not a multiplier</li>
        </ul>
      </section>
      <RelatedLinks title="Related Tools" items={tool.relatedTools.map(r => ({ href: r.href, label: r.label }))} />
      <RelatedLinks title="Related Guides" items={tool.relatedGuides.map(r => ({ href: r.href, label: r.label }))} />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">FAQ</h2>
        <Accordion items={tool.faq} />
      </section>
      <LastUpdated />
      <JsonLd data={generateWebApplicationSchema(tool.h1, tool.description, tool.href)} />
    </div>
  )
}
