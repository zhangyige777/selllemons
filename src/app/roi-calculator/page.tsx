import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import UpgradeROIClient from '@/components/calculators/UpgradeROIClient'
import { getToolBySlug } from '@/data/tools'

const tool = getToolBySlug('roi-calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons ROI calculator', 'Sell Lemons investment return'],
})

export default function ROICalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'ROI Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">{tool.description}</p>
      <UpgradeROIClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Add each upgrade you are considering with its <strong>Cost</strong>, your <strong>Income Before</strong> buying it, and your expected <strong>Income After</strong> buying it. Add multiple upgrades to compare them side by side. The calculator ranks them by ROI time and priority score so you know exactly which upgrade to buy first for maximum efficiency.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">What Each Input Means</h2>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Upgrade Name</strong> — A label for the upgrade so you can identify it in the results.</p>
          <p><strong>Cost</strong> — How much cash the upgrade costs to purchase.</p>
          <p><strong>Income Before</strong> — Your current income per second (after all multipliers).</p>
          <p><strong>Income After</strong> — Your expected income per second after purchasing the upgrade.</p>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula and Estimate Logic</h2>
        <p className="text-sm text-gray-600">ROI Time = Upgrade Cost ÷ (Income After − Income Before). The upgrade with the shortest ROI time pays for itself fastest and should be bought first. Priority Score also factors in cost efficiency and stage weighting. Upgrades that unlock new systems may score higher than pure ROI suggests.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Tool</h2>
        <p className="text-sm text-gray-600">Use this calculator whenever you have enough cash to buy an upgrade and are unsure which one to prioritize. It is especially useful in early-to-mid game when there are multiple competing upgrades. After each purchase, recalculate with updated income values since the best upgrade changes as your situation changes.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Always buying the cheapest upgrade — it may not have the best ROI</li>
          <li>Not recalculating after each purchase — rankings change as income changes</li>
          <li>Using base income instead of post-multiplier income for the &quot;Before&quot; and &quot;After&quot; fields</li>
          <li>Ignoring upgrades that unlock new systems — their value goes beyond pure ROI</li>
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
