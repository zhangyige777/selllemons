import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import MainCalculatorClient from '@/components/calculators/MainCalculatorClient'
import { getToolBySlug } from '@/data/tools'

const tool = getToolBySlug('profit-calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons profit calculator', 'Sell Lemons profit'],
})

export default function ProfitCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Profit Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">{tool.description}</p>
      <MainCalculatorClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Enter your <strong>Cash per Second</strong> from the game, along with <strong>Cash per Lemon</strong> and all active multipliers (rebirth, boost, investor bonus). Set offline hours to see projected AFK earnings. The calculator shows your total profit broken down by time period.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">What Each Input Means</h2>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Cash per Second</strong> — Your base income rate before any multipliers. Find this in-game on your earnings display.</p>
          <p><strong>Cash per Lemon</strong> — How much you earn per lemon sold. This is your base unit price.</p>
          <p><strong>Current Multiplier</strong> — Any active multiplier from events or special bonuses.</p>
          <p><strong>Boost Multiplier</strong> — The multiplier from your currently active boost (1x if no boost is active).</p>
          <p><strong>Rebirth Multiplier</strong> — Your permanent rebirth multiplier (increases with each rebirth).</p>
          <p><strong>Investor Bonus (%)</strong> — The percentage bonus from your Alien Investors.</p>
          <p><strong>Offline Hours</strong> — How many hours you plan to be away from the game.</p>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula and Estimate Logic</h2>
        <p className="text-sm text-gray-600">Effective Income = Base Cash/Second × Rebirth Multiplier × Boost Multiplier × Current Multiplier × (1 + Investor Bonus/100). Profit per Hour = Effective Income × 3600. Offline Profit = Effective Income × 3600 × Offline Hours. The total multiplier shows how much your base income is amplified by all sources combined.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Tool</h2>
        <p className="text-sm text-gray-600">Use this calculator to estimate total profit before logging off, compare income strategies, or decide when to rebirth. It is also useful for seeing how much a new multiplier or boost would increase your actual earnings before you invest in it.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Entering effective income instead of base income — use the raw number before multipliers</li>
          <li>Forgetting to set the rebirth multiplier — this is usually your biggest multiplier source</li>
          <li>Setting investor bonus as a multiplier instead of a percentage (enter 50 for 50%, not 1.5)</li>
          <li>Not recalculating after buying upgrades or rebirthing</li>
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
