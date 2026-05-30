import type { Metadata } from 'next'
import { generateSEOMetadata, generateWebApplicationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import AscendCalculatorClient from '@/components/calculators/AscendCalculatorClient'
import { getToolBySlug } from '@/data/tools'

const tool = getToolBySlug('ascend-calculator')!

export const metadata: Metadata = generateSEOMetadata({
  title: tool.title,
  description: tool.description,
  path: tool.href,
  keywords: ['Sell Lemons ascend calculator', 'Sell Lemons when to ascend'],
})

export default function AscendCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Ascend Calculator' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{tool.h1}</h1>
      <p className="text-gray-600">{tool.description}</p>
      <AscendCalculatorClient />
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Enter your <strong>Current Cash</strong> and <strong>Income per Second</strong> from the game. Set the <strong>Ascend Bonus (%)</strong> — the permanent bonus you would receive from ascending. Enter your <strong>Current Ascend Bonus</strong> (0% if this is your first ascend). Estimate your <strong>Rebuild Time</strong> in hours — how long it would take to recover after ascending. The calculator tells you whether to ascend now or wait.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">What Each Input Means</h2>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Current Cash</strong> — How much cash you have right now (this will be lost on ascend).</p>
          <p><strong>Income per Second</strong> — Your current income rate (this will reset on ascend).</p>
          <p><strong>Ascend Bonus (%)</strong> — The permanent percentage bonus you gain from ascending.</p>
          <p><strong>Current Ascend Bonus (%)</strong> — Your existing ascend bonus (0% for first ascend).</p>
          <p><strong>Rebuild Time (hours)</strong> — Estimated time to rebuild your income after ascending.</p>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Formula</h2>
        <p className="text-sm text-gray-600">Post-Ascend Income = Base Income × (1 + Total Ascend Bonus/100). Recovery Time = Current Cash ÷ Post-Ascend Income. Permanent Gain = Ascend Bonus − Current Ascend Bonus. The calculator recommends ASCEND when the permanent bonus significantly improves long-term income and the recovery time is acceptable.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Tool</h2>
        <p className="text-sm text-gray-600">Use this calculator when your rebirth gains have plateaued and you are considering ascending. Compare the permanent ascend bonus against the rebuild time. Also use it alongside the Rebirth Calculator to decide whether another rebirth or an ascend gives better value at your current stage.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Ascending before collecting hidden items — some may not persist through ascend</li>
          <li>Ascending when rebirth gains are still strong — rebirth first, ascend later</li>
          <li>Underestimating rebuild time — be realistic about how long recovery takes</li>
          <li>Not comparing with the Rebirth Calculator — sometimes one more rebirth is better</li>
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
