import type { Metadata } from 'next'
import Link from 'next/link'
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
  keywords: ['Sell Lemons rebirth calculator', 'Sell Lemons when to rebirth', 'Sell Lemons rebirth timing', 'Sell Lemons rebirth formula'],
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
        <div className="text-sm text-gray-600 space-y-2">
          <p>Enter your stats from the game and the calculator will tell you whether to <strong>REBIRTH</strong> or <strong>WAIT</strong>.</p>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>Current Cash</strong> — Open the game and note your cash amount.</li>
            <li><strong>Income per Second</strong> — Your total income/sec shown in-game.</li>
            <li><strong>Rebirth Multiplier Bonus</strong> — How much the multiplier increases per rebirth (e.g., +0.5x).</li>
            <li><strong>Current Rebirth Multiplier</strong> — Your current multiplier from previous rebirths.</li>
            <li><strong>Rebuild Time (minutes)</strong> — Estimate how long it takes you to rebuild after rebirth.</li>
            <li><strong>Target Cash</strong> — A cash goal you want to reach after rebirth.</li>
          </ol>
          <p>The calculator compares your current trajectory vs. post-rebirth trajectory and recommends the better option.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Rebirth Formula Explained</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <p>The calculator uses these formulas to determine the optimal rebirth timing:</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-xs space-y-1">
            <p>Base Income = Income/sec ÷ Current Multiplier</p>
            <p>Post-Rebirth Income = Base Income × (Current Multiplier + Bonus)</p>
            <p>Recovery Time = Current Cash ÷ Post-Rebirth Income</p>
            <p>Break-Even = Time for new multiplier to outperform current rate</p>
          </div>
          <p>The calculator recommends <strong>REBIRTH</strong> when the recovery time is within 2× your rebuild window AND post-rebirth income is at least 80% of current income.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Worked Example</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 space-y-2">
            <p className="font-medium text-primary-800">Example: Mid-Game Rebirth Decision</p>
            <p>You have <strong>500,000 cash</strong>, earning <strong>1,000/sec</strong> with a current multiplier of <strong>3x</strong>. The rebirth bonus is <strong>+0.5x</strong>.</p>
            <p>After rebirth: New multiplier = 3.5x</p>
            <p>Post-rebirth income = (1,000 ÷ 3) × 3.5 = <strong>1,167/sec</strong></p>
            <p>Recovery time = 500,000 ÷ 1,167 = <strong>~428 seconds (~7 minutes)</strong></p>
            <p className="font-medium text-primary-800">✅ Recommendation: REBIRTH — you recover in 7 minutes and earn 17% more per second.</p>
          </div>
          <p className="mt-2">Try the calculator above with your own numbers to get a personalized recommendation.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Step-by-Step Rebirth Process</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <ol className="list-decimal list-inside space-y-1">
            <li>Use this calculator to check if now is a good time to rebirth.</li>
            <li>Note your current stats (cash, income/sec, multiplier) for reference.</li>
            <li>Open the Sell Lemons game and find the Rebirth button.</li>
            <li>Click Rebirth and confirm the reset.</li>
            <li>After rebirth, immediately buy upgrades with the best ROI first.</li>
            <li>Use the <Link href="/upgrade-calculator/" className="text-primary-600 hover:underline">Upgrade ROI Calculator</Link> to find the best rebuild order.</li>
            <li>Consider activating boosts during your rebuild for faster recovery.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">When to Use This Calculator</h2>
        <p className="text-sm text-gray-600">Use this calculator every time you consider rebirthing. It is especially useful in mid-to-late game when rebirth decisions become less obvious. If you are unsure whether to rebirth or keep earning, the calculator gives you a data-driven recommendation based on your specific situation.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Common Rebirth Mistakes</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Rebirthing too early when income is very low — the multiplier bonus has minimal impact</li>
          <li>Waiting too long between rebirths — each rebirth compounds future earnings</li>
          <li>Not factoring in rebuild time — a fast rebuild makes frequent rebirths worthwhile</li>
          <li>Forgetting that rebirth resets cash and upgrades, not just multipliers</li>
          <li>Rebirthing right before logging off — you waste rebuild time while not playing</li>
          <li>Not stacking boosts with new rebirth multiplier for maximum compound effect</li>
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
