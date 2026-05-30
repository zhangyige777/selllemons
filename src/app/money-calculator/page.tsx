import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import MainCalculatorClient from '@/components/calculators/MainCalculatorClient'
import { getToolBySlug } from '@/data/tools'

const tool = getToolBySlug('money-calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons money calculator', 'Sell Lemons money per hour'],
})

export default function MoneyCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Money Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">{tool.description}</p>
      <MainCalculatorClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Enter your base income stats and all active multipliers from Sell Lemons. The calculator instantly shows your earnings per second, per minute, per hour, and projected offline income. Use this to compare strategies or plan your next rebirth.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">What Each Input Means</h2>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Cash per Second</strong> — Your raw income rate from the game, before multipliers.</p>
          <p><strong>Cash per Lemon</strong> — The selling price per individual lemon.</p>
          <p><strong>Current Multiplier</strong> — Any additional multiplier from events or bonuses.</p>
          <p><strong>Boost Multiplier</strong> — Your active boost multiplier (1x if none).</p>
          <p><strong>Rebirth Multiplier</strong> — Your permanent multiplier from rebirths.</p>
          <p><strong>Investor Bonus (%)</strong> — Income bonus percentage from Alien Investors.</p>
          <p><strong>Offline Hours</strong> — Hours you plan to be away from the game.</p>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula</h2>
        <p className="text-sm text-gray-600">Total Multiplier = Rebirth × Boost × Current × (1 + Investor Bonus/100). Money per Hour = Base Income × Total Multiplier × 3600. Offline Money = Money per Hour × Offline Hours. All multipliers stack multiplicatively for compounding growth.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Tool</h2>
        <p className="text-sm text-gray-600">Use before logging off to estimate AFK earnings, before rebirthing to see how your income changes, or when comparing whether a boost or upgrade is worth the cost. This is the most versatile calculator on the site.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Using post-multiplier income as the base input — always enter pre-multiplier values</li>
          <li>Forgetting that investor bonus is a percentage, not a flat multiplier</li>
          <li>Not accounting for boost expiration during offline hours</li>
          <li>Comparing results before and after an upgrade without recalculating multipliers</li>
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
