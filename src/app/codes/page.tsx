import type { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { Accordion } from '@/components/ui/Accordion'
import { codes, getActiveCodes, getExpiredCodes, getLastCheckedDate, noCodesMessage, codesFAQ } from '@/data/codes'
import { Badge } from '@/components/ui/Badge'
import CopyButton from '@/components/ui/CopyButton'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Codes June 2026 - Active & Expired Codes',
  description: 'All Sell Lemons codes for June 2026. We monitor updates and list only confirmed active codes. Also find rebirth calculators, guides, and tools.',
  path: '/codes/',
  keywords: ['Sell Lemons codes', 'Sell Lemons codes June 2026', 'Sell Lemons active codes', 'Sell Lemons code redeem', 'Sell Lemons working codes'],
})

export default function CodesPage() {
  const activeCodes = getActiveCodes()
  const expiredCodes = getExpiredCodes()
  const lastChecked = getLastCheckedDate()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Codes' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Codes — June 2026</h1>
      <p className="text-gray-600">All Sell Lemons codes in one place. We only list codes that have been verified. While waiting for new codes, boost your earnings with our <Link href="/rebirth-calculator/" className="text-primary-600 hover:underline font-medium">Rebirth Calculator</Link>, <Link href="/upgrade-calculator/" className="text-primary-600 hover:underline font-medium">Upgrade ROI Calculator</Link>, and <Link href="/alien-investors/" className="text-primary-600 hover:underline font-medium">Alien Investors Guide</Link>.</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 text-sm text-primary-800 mt-3">
        No verified Sell Lemons codes are available right now. We check updates regularly and will list active codes here only after they are confirmed.
      </div>

      <div className="text-sm text-gray-500">
        Last checked: <span className="font-medium text-gray-700">{lastChecked}</span>
      </div>

      {/* How to Redeem */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Redeem Sell Lemons Codes</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <p>To redeem codes in Sell Lemons, follow these steps:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Open Sell Lemons on Roblox.</li>
            <li>Look for the code redemption button — usually a Twitter icon, gear icon, or a dedicated &quot;Codes&quot; button on the side of the screen.</li>
            <li>Click or tap the button to open the code input field.</li>
            <li>Type or paste the code exactly as shown (codes are case-sensitive).</li>
            <li>Press &quot;Redeem&quot; or &quot;Submit&quot; to claim your reward.</li>
          </ol>
          <p>If the game does not have a code redemption system yet, codes may be added in a future update. Bookmark this page and check back regularly.</p>
        </div>
      </section>

      {/* Where New Codes Appear */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Where Do Sell Lemons Codes Come From?</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <p>New codes for Sell Lemons are typically released through these channels:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Developer social media</strong> — Follow the game creator on Twitter/X and join the official Discord server for the fastest code announcements.</li>
            <li><strong>Roblox game description</strong> — The game page on Roblox sometimes includes active codes in the description or update notes.</li>
            <li><strong>Milestone events</strong> — Codes are often released when the game reaches player milestones (e.g., 1M visits, 5M visits) or during holiday events.</li>
            <li><strong>YouTube content creators</strong> — Some creators receive early access to codes and share them in videos.</li>
          </ul>
        </div>
      </section>

      {/* Why No Codes */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Why Are There No Verified Codes Yet?</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <p>We only list codes that have been confirmed to work in the current version of the game. Many Roblox games rotate codes frequently, and some codes that appear on other sites may be outdated, fake, or from a different game.</p>
          <p>Our policy is to verify each code before listing it. This means our list may be shorter than other sites, but every code we list actually works. When new codes are confirmed, they appear here immediately.</p>
        </div>
      </section>

      {/* Active Codes */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          Active Codes <Badge variant="active">{activeCodes.length}</Badge>
        </h2>
        {activeCodes.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
            <p>{noCodesMessage}</p>
          </div>
        ) : (
          <div className="table-scroll">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Code</th>
                  <th className="px-4 py-2 text-left text-gray-600">Reward</th>
                  <th className="px-4 py-2 text-left text-gray-600">Status</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {activeCodes.map((code, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-4 py-2 font-mono font-medium text-gray-900">{code.code}</td>
                    <td className="px-4 py-2 text-gray-600">{code.reward}</td>
                    <td className="px-4 py-2"><Badge variant="active">Active</Badge></td>
                    <td className="px-4 py-2"><CopyButton text={code.code} label="Copy" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Expired Codes */}
      {expiredCodes.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            Expired Codes <Badge variant="expired">{expiredCodes.length}</Badge>
          </h2>
          <div className="table-scroll">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Code</th>
                  <th className="px-4 py-2 text-left text-gray-600">Reward</th>
                  <th className="px-4 py-2 text-left text-gray-600">Expired</th>
                </tr>
              </thead>
              <tbody>
                {expiredCodes.map((code, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-4 py-2 font-mono text-gray-400 line-through">{code.code}</td>
                    <td className="px-4 py-2 text-gray-400">{code.reward}</td>
                    <td className="px-4 py-2"><Badge variant="expired">Expired</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Internal Links - Tools & Guides */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Boost Your Earnings — Tools & Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Link href="/rebirth-calculator/" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700">
            <span>🔄</span>
            <span className="font-medium">Rebirth Calculator</span>
          </Link>
          <Link href="/rebirth-multiplier/" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700">
            <span>✖️</span>
            <span className="font-medium">Rebirth Multiplier Guide</span>
          </Link>
          <Link href="/when-to-rebirth/" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700">
            <span>🔄</span>
            <span className="font-medium">When to Rebirth Guide</span>
          </Link>
          <Link href="/upgrade-calculator/" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700">
            <span>📈</span>
            <span className="font-medium">Upgrade ROI Calculator</span>
          </Link>
          <Link href="/alien-investors/" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700">
            <span>👽</span>
            <span className="font-medium">Alien Investors Guide</span>
          </Link>
          <Link href="/multiplier-calculator/" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700">
            <span>✖️</span>
            <span className="font-medium">Multiplier Calculator</span>
          </Link>
          <Link href="/money-fast/" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700">
            <span>⚡</span>
            <span className="font-medium">How to Make Money Fast</span>
          </Link>
          <Link href="/progression-planner/" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm text-gray-700">
            <span>🗺️</span>
            <span className="font-medium">Progression Planner</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">FAQ</h2>
        <Accordion items={codesFAQ} />
      </section>

      <LastUpdated />
      <JsonLd data={generateFAQSchema(codesFAQ)} />
    </div>
  )
}
