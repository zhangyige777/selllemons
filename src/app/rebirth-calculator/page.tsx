import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import RebirthCalculatorClient from '@/components/calculators/RebirthCalculatorClient'
import { getToolBySlug } from '@/data/tools'

const tool = getToolBySlug('rebirth-calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons rebirth calculator', 'Sell Lemons when to rebirth'],
})

export default function RebirthCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Rebirth Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">{tool.description}</p>
      <RebirthCalculatorClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Enter your <strong>Current Cash</strong> and <strong>Income per Second</strong> from the game. Set the <strong>Rebirth Multiplier Bonus</strong> (how much the multiplier increases per rebirth) and your <strong>Current Rebirth Multiplier</strong>. Estimate your <strong>Rebuild Time</strong> (how long to recover after rebirth) and a <strong>Target Cash</strong> goal. The calculator tells you whether to rebirth now or wait.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula and Estimate Logic</h2>
        <p className="text-sm text-gray-600">Post-Rebirth Income = Base Income × (Current Multiplier + Bonus). Recovery Time = Current Cash ÷ Post-Rebirth Income. Break-Even = time for the new multiplier to outperform your current state. The calculator recommends REBIRTH when the recovery time is within your rebuild window and the long-term gain is positive.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Use this calculator every time you consider rebirthing. It is especially useful in mid-to-late game when rebirth decisions become less obvious. If you are unsure whether to rebirth or keep earning, the calculator gives you a data-driven recommendation based on your specific situation.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Rebirthing too early when income is very low - the multiplier bonus has minimal impact</li>
          <li>Waiting too long between rebirths - each rebirth compounds future earnings</li>
          <li>Not factoring in rebuild time - a fast rebuild makes frequent rebirths worthwhile</li>
          <li>Forgetting that rebirth resets cash and upgrades, not just multipliers</li>
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
