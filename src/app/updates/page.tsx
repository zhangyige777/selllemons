import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { navSections } from '@/data/navigation'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Updates - Codes and New Features',
  description: 'Track the latest Sell Lemons game updates, new codes, changed mechanics, and new features.',
  path: '/updates/',
  keywords: ['Sell Lemons update', 'Sell Lemons patch notes'],
})

export default function UpdatesPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Updates' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons Updates</h1>
      <p className="text-gray-600">Track the latest Sell Lemons game updates, new systems, and changed mechanics.</p>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Latest Known Update</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
          <p>Last checked: May 31, 2026. No major updates tracked since launch. We monitor the game for changes and update this page accordingly.</p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">What We Track</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2"><span><strong>New systems and mechanics</strong> — Any new gameplay systems added to Sell Lemons, such as Void Evolution, Oranges, Robotics, or Hill Expansion.</span></li>
          <li className="flex items-start gap-2"><span><strong>New codes and rewards</strong> — When codes are added or expired, the Codes page is updated immediately. Check the Codes Tracker for the latest list.</span></li>
          <li className="flex items-start gap-2"><span><strong>Changed mechanics</strong> — Adjustments to multipliers, offline income rate, rebirth scaling, ascend bonuses, or other core systems that affect calculator accuracy.</span></li>
          <li className="flex items-start gap-2"><span><strong>New hidden items or areas</strong> — Discoveries like the Sewer Key, UFO Key, Cosmic Cash, Purity Fruit, Redacted Area, or new badges are tracked and verified.</span></li>
          <li className="flex items-start gap-2"><span><strong>Bug fixes and balance changes</strong> — Changes that affect gameplay strategy, income rates, or upgrade costs.</span></li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">How We Verify Updates</h2>
        <p className="text-sm text-gray-600">We monitor multiple sources for Sell Lemons updates: the official Roblox game page changelog, the developer&apos;s social media (Twitter/X, Discord), community reports from Reddit and YouTube, and direct in-game testing. When a change is confirmed, we update the relevant pages within 24 hours and adjust calculator formulas if needed.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Pages Updated After Patches</h2>
        <p className="text-sm text-gray-600">When a game update is confirmed, we update these pages:</p>
        <ul className="space-y-1 text-sm text-gray-600 mt-2">
          <li>• <strong>Codes</strong> — New or expired codes are listed immediately</li>
          <li>• <strong>Calculators</strong> — Formulas adjusted if mechanics change</li>
          <li>• <strong>Hidden Items</strong> — New discoveries added and verified</li>
          <li>• <strong>System Guides</strong> — Updated with new mechanics or changed values</li>
          <li>• <strong>Progression Guides</strong> — Strategies revised for new balance</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Recent Game Status</h2>
        <div className="text-sm text-gray-600 space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="font-medium text-blue-800">Game Active</p>
            <p className="text-blue-700">Sell Lemons is actively maintained by Gavineo. The game has 6.4M+ visits and 51K+ active players. New content and updates are released periodically.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <p className="font-medium text-gray-800">Codes Status</p>
            <p className="text-gray-600">No verified codes are currently available. We check for new codes at least weekly. Visit the <Link href="/codes/" className="text-primary-600 hover:underline">Codes page</Link> for the latest status.</p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Pages to Check</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/codes/" className="p-3 rounded-lg border border-gray-200 text-sm hover:border-primary-300 transition-colors">
            <span className="font-medium text-gray-900">🎁 Codes</span>
            <p className="text-gray-500 text-xs mt-0.5">Active and expired codes</p>
          </Link>
          <Link href="/hidden-items/" className="p-3 rounded-lg border border-gray-200 text-sm hover:border-primary-300 transition-colors">
            <span className="font-medium text-gray-900">🔍 Hidden Items</span>
            <p className="text-gray-500 text-xs mt-0.5">All tracked hidden content</p>
          </Link>
          <Link href="/calculator/" className="p-3 rounded-lg border border-gray-200 text-sm hover:border-primary-300 transition-colors">
            <span className="font-medium text-gray-900">🧮 Calculator</span>
            <p className="text-gray-500 text-xs mt-0.5">Updated earning formulas</p>
          </Link>
          <Link href="/wiki/" className="p-3 rounded-lg border border-gray-200 text-sm hover:border-primary-300 transition-colors">
            <span className="font-medium text-gray-900">📚 Wiki</span>
            <p className="text-gray-500 text-xs mt-0.5">All guides and systems</p>
          </Link>
        </div>
      </section>

      <LastUpdated />
    </div>
  )
}
