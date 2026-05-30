import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Sell Lemons Tools',
  description: 'About Sell Lemons Tools - a fan-made calculator and guide site for the Roblox game Sell Lemons.',
  path: '/about/',
  keywords: ['about Sell Lemons Tools'],
})

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'About' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">About Sell Lemons Tools</h1>

      <section className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>Sell Lemons Tools is an unofficial, fan-made calculator and guide site for the Roblox game <strong>Sell Lemons</strong>.</p>
        <p>Our goal is to provide useful, accurate tools that help players make better decisions - when to rebirth, which upgrades to buy, how much offline income to expect, and more.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Data Accuracy</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <p>We label all information with a data status:</p>
          <ul className="space-y-1 ml-4">
            <li><strong className="text-green-700">Confirmed</strong> - Verified in-game or from official sources.</li>
            <li><strong className="text-primary-700">Possible</strong> - Based on community reports, not fully verified.</li>
            <li><strong className="text-red-700">Unconfirmed</strong> - Information exists but cannot be verified yet.</li>
          </ul>
          <p>We never fabricate codes, invent game mechanics, or present speculation as fact.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Disclaimer</h2>
        <p className="text-sm text-gray-600">
          This site is not affiliated with, endorsed by, or connected to Roblox Corporation or the developers of Sell Lemons.
          All game content, trademarks, and assets belong to their respective owners. This is a fan-made tool site created for educational and entertainment purposes.
        </p>
      </section>
    </div>
  )
}
