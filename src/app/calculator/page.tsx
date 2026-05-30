import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import MainCalculatorClient from '@/components/calculators/MainCalculatorClient'
import { getToolBySlug } from '@/data/tools'
import { siteConfig } from '@/lib/config'

const tool = getToolBySlug('calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons calculator', 'Sell Lemons earnings'],
})

export default function CalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">Calculate your Sell Lemons earnings per second, minute, hour, and estimate offline income.</p>
      <MainCalculatorClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Enter your current game stats from Sell Lemons into the fields above. <strong>Cash per Second</strong> is your base income before multipliers. <strong>Cash per Lemon</strong> is how much each lemon sells for. Enter all your active multipliers (rebirth, boost, investor bonus) to see your effective income. Set offline hours to estimate AFK earnings.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula and Estimate Logic</h2>
        <p className="text-sm text-gray-600">Effective Income = Base Cash/Second × Rebirth Multiplier × Boost Multiplier × (1 + Investor Bonus/100). Offline Income = Effective Income × Offline Hours × 3600. The total multiplier shows how much your base income is amplified by all active multiplier sources combined.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Use this calculator before logging off to estimate your offline earnings, before buying upgrades to see how they affect your income, and when comparing different multiplier strategies. It is also useful for planning when to rebirth by showing your current effective income.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Forgetting to include the rebirth multiplier in your calculation</li>
          <li>Not accounting for boost expiration while offline</li>
          <li>Confusing base income with effective income (after multipliers)</li>
          <li>Setting investor bonus as a multiplier instead of a percentage</li>
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
