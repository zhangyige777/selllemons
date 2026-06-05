import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { generateSEOMetadata, generateFAQSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { Accordion } from '@/components/ui/Accordion'
import LastUpdated from '@/components/ui/LastUpdated'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons Calculator, Codes & Rebirth Guide - All Tools',
  description: 'Sell Lemons calculator, rebirth guide, codes tracker, offline income, upgrade ROI, multiplier calculator, and progression planner. All Sell Lemons tools in one place.',
  path: '/',
  keywords: ['Sell Lemons calculator', 'Sell Lemons codes', 'Sell Lemons rebirth', 'Sell Lemons tools', 'Sell Lemons offline income', 'Sell Lemons upgrade'],
})

const primaryCTAs = [
  { href: '/rebirth-calculator/', label: 'Rebirth Calculator', emoji: '🔄', desc: 'Should you rebirth now?' },
  { href: '/offline-income-calculator/', label: 'Offline Income', emoji: '💤', desc: '100% offline earnings' },
  { href: '/upgrade-calculator/', label: 'Upgrade ROI', emoji: '📈', desc: 'Best upgrade order' },
  { href: '/codes/', label: 'Codes Tracker', emoji: '🎁', desc: 'Active & expired codes' },
]

const toolCards = [
  { href: '/calculator/', label: 'Main Calculator', emoji: '🧮', desc: 'Comprehensive earnings estimate' },
  { href: '/rebirth-calculator/', label: 'Rebirth Calculator', emoji: '🔄', desc: 'Rebirth timing calculator' },
  { href: '/offline-income-calculator/', label: 'Offline Income', emoji: '💤', desc: 'Offline earnings calculator' },
  { href: '/upgrade-calculator/', label: 'Upgrade ROI', emoji: '📈', desc: 'Compare upgrade payback' },
  { href: '/multiplier-calculator/', label: 'Multiplier Calc', emoji: '✖️', desc: 'Total multiplier breakdown' },
  { href: '/progression-planner/', label: 'Progression', emoji: '🗺️', desc: 'What to do next' },
]

const guideCards = [
  { href: '/beginner-guide/', label: 'Beginner Guide', emoji: '🔰' },
  { href: '/best-upgrades/', label: 'Best Upgrades', emoji: '🏆' },
  { href: '/money-fast/', label: 'Money Fast', emoji: '⚡' },
  { href: '/sewer-key/', label: 'Sewer Key', emoji: '🔑' },
  { href: '/ufo-key/', label: 'UFO Key', emoji: '🛸' },
  { href: '/badges/', label: 'Badges', emoji: '🏅' },
  { href: '/secrets/', label: 'Secrets', emoji: '🤫' },
]

const systemCards = [
  { href: '/offline-earnings/', label: 'Offline Earnings', emoji: '💤' },
  { href: '/rebirth-multiplier/', label: 'Rebirth Multiplier', emoji: '🔄' },
  { href: '/multipliers/', label: 'Multipliers', emoji: '✖️' },
  { href: '/alien-investors/', label: 'Alien Investors', emoji: '👽' },
  { href: '/deals/', label: 'Deals', emoji: '🤝' },
  { href: '/ufo-key/', label: 'UFO Key', emoji: '🛸' },
]

const homeFAQ = [
  { question: 'Is this an official Sell Lemons site?', answer: 'No. Sell Lemons Tools is a fan-made, unofficial tool site. We are not affiliated with Roblox Corporation or the Sell Lemons developers.' },
  { question: 'Are there Sell Lemons codes?', answer: 'We check for codes regularly. When verified codes are confirmed, we list them on our Codes page. Currently, no verified codes are available.' },
  { question: 'How does offline income work?', answer: 'Sell Lemons features 100% offline income - you earn the same rate while offline as you do online. Use our Offline Income Calculator to estimate your earnings.' },
  { question: 'When should I rebirth?', answer: 'Rebirth when your post-rebirth income can recover your current progress within an acceptable time. Use the Rebirth Calculator to find your break-even point.' },
  { question: 'What is the best upgrade?', answer: 'The best upgrade depends on your stage. Use the Upgrade ROI Calculator to compare all available upgrades and find the one with the shortest payback time.' },
]

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <section className="text-center py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Sell Lemons <span className="text-primary-500">Calculator, Codes & Rebirth Guide</span>
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Rebirth calculator, codes tracker, offline income, upgrade ROI, multiplier breakdown, and progression planning — all Sell Lemons tools in one place.
        </p>

        {/* Game Status */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {siteConfig.stats.active && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Game Active
            </span>
          )}
          <span className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
            {siteConfig.stats.visits} visits
          </span>
          <span className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
            {siteConfig.stats.activePlayers} active players
          </span>
          <span className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
            Last checked: {siteConfig.lastUpdated}
          </span>
        </div>
      </section>

      {/* Primary CTAs - 4 cards */}
      <section className="grid grid-cols-2 gap-3 mb-10">
        {primaryCTAs.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-primary-200 bg-primary-50 hover:border-primary-400 hover:shadow-md transition-all"
          >
            <span className="text-2xl">{cta.emoji}</span>
            <div>
              <span className="font-semibold text-gray-900 text-sm">{cta.label}</span>
              <p className="text-xs text-gray-500">{cta.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Tools Grid */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Calculators & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {toolCards.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-start gap-2 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
            >
              <span className="text-lg">{tool.emoji}</span>
              <div>
                <span className="text-sm font-medium text-gray-900">{tool.label}</span>
                <p className="text-xs text-gray-500">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Guides */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Popular Guides</h2>
        <div className="flex flex-wrap gap-2">
          {guideCards.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 text-sm text-gray-700 transition-colors"
            >
              <span>{guide.emoji}</span>
              <span>{guide.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Systems & Mechanics - NEW */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Systems & Mechanics</h2>
        <div className="flex flex-wrap gap-2">
          {systemCards.map((sys) => (
            <Link
              key={sys.href}
              href={sys.href}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 text-sm text-gray-700 transition-colors"
            >
              <span>{sys.emoji}</span>
              <span>{sys.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">FAQ</h2>
        <Accordion items={homeFAQ} />
      </section>

      <LastUpdated />

      <JsonLd data={generateFAQSchema(homeFAQ)} />
    </div>
  )
}
