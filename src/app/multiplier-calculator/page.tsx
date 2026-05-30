import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import MultiplierClient from '@/components/calculators/MultiplierClient'
import { getToolBySlug } from '@/data/tools'

const tool = getToolBySlug('multiplier-calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons multiplier calculator', 'Sell Lemons total multiplier'],
})

export default function MultiplierCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Multiplier Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">{tool.description}</p>
      <MultiplierClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Enter your <strong>Base Income per Second</strong> from the game (before any multipliers). Then enter each multiplier you have: rebirth, boost, gamepass, investor bonus percentage, and event multiplier. The calculator shows your total combined multiplier, final income, and a visual breakdown of how much each source contributes.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula and Estimate Logic</h2>
        <p className="text-sm text-gray-600">Total Multiplier = Rebirth × Boost × Gamepass × Event × (1 + Investor Bonus/100). Final Income = Base Income × Total Multiplier. Each multiplier source contributes a percentage of the total. The breakdown shows which source has the biggest impact so you know where to invest next.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Use this calculator to identify which multiplier source has the most room for improvement. If your rebirth multiplier is high but your boost is low, you know to focus on boosts. It is also useful before making big decisions like buying a gamepass or accepting an investor deal - you can see exactly how much each option increases your total.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Thinking multipliers add together - they multiply, so every source amplifies all others</li>
          <li>Ignoring one multiplier source - even a small boost compounds with everything else</li>
          <li>Over-investing in one source while neglecting others - balance gives the best total</li>
          <li>Confusing investor bonus (percentage) with a multiplier value</li>
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
