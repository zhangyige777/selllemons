import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import MultiplierClient from '@/components/calculators/MultiplierClient'
import { getToolBySlug } from '@/data/tools'

const tool = getToolBySlug('boost-calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons boost calculator', 'Sell Lemons boost effect'],
})

export default function BoostCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Boost Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">{tool.description}</p>
      <MultiplierClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Enter your <strong>Base Income per Second</strong> from the game (before any multipliers). Then enter each multiplier you currently have: rebirth, boost, gamepass, investor bonus percentage, and any event multiplier. The calculator shows your total combined multiplier, your final boosted income, and a visual breakdown of how much each source contributes to the total.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">What Each Input Means</h2>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Base Income per Second</strong> — Your raw income from the game with no multipliers applied.</p>
          <p><strong>Rebirth Multiplier</strong> — Permanent multiplier from rebirths (increases with each rebirth).</p>
          <p><strong>Boost Multiplier</strong> — Temporary multiplier from an active boost (1x if no boost active).</p>
          <p><strong>Gamepass Multiplier</strong> — Permanent multiplier from purchased gamepasses (1x if none).</p>
          <p><strong>Investor Bonus (%)</strong> — Percentage bonus from Alien Investors (e.g., enter 50 for 50%).</p>
          <p><strong>Event Multiplier</strong> — Any limited-time event multiplier (1x if no event active).</p>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula</h2>
        <p className="text-sm text-gray-600">Total Multiplier = Rebirth × Boost × Gamepass × Event × (1 + Investor Bonus/100). Final Income = Base Income × Total Multiplier. Each source contributes a percentage of the total. The breakdown bar shows which source has the most impact so you know where to invest next.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Tool</h2>
        <p className="text-sm text-gray-600">Use this calculator to find gaps in your multiplier strategy. If one source is much lower than others, that is where you should focus your investment. It is also useful before buying a gamepass or accepting an investor deal to see exactly how much it increases your total income.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Thinking multipliers add together — they multiply, so every source amplifies all others</li>
          <li>Ignoring one multiplier source — even a small boost compounds with everything else</li>
          <li>Over-investing in one source while neglecting others — balanced multipliers give the best total</li>
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
