import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import UpgradeROIClient from '@/components/calculators/UpgradeROIClient'
import { getToolBySlug } from '@/data/tools'

const tool = getToolBySlug('upgrade-calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons upgrade calculator', 'Sell Lemons upgrade ROI'],
})

export default function UpgradeCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Upgrade ROI Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">{tool.description}</p>
      <UpgradeROIClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Add each upgrade you are considering with its <strong>Cost</strong>, <strong>Income Before</strong> (your current income), and <strong>Income After</strong> (your income after buying the upgrade). You can add multiple upgrades to compare them side by side. The calculator ranks them by ROI time and priority score so you know which to buy first.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula and Estimate Logic</h2>
        <p className="text-sm text-gray-600">ROI Time = Upgrade Cost ÷ Income Gain Per Second. Income Gain = Income After - Income Before. Priority Score factors in ROI time, cost efficiency, and stage weighting. A shorter ROI means the upgrade pays for itself faster. The #1 ranked upgrade is the best purchase at your current stage.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Use this calculator whenever you have enough cash to buy an upgrade and are unsure which one to prioritize. It is especially useful in early-to-mid game when there are multiple competing upgrades. In late game, factor in whether an upgrade unlocks new mechanics in addition to its ROI.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Always buying the cheapest upgrade - it may not have the best ROI</li>
          <li>Ignoring upgrades that unlock new systems - ROI does not capture unlock value</li>
          <li>Not recalculating after each purchase - the best upgrade changes as your income changes</li>
          <li>Using income before multipliers instead of after - use your effective income</li>
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
