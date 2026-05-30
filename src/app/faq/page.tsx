import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import LastUpdated from '@/components/ui/LastUpdated'
import { codesFAQ } from '@/data/codes'

const faqItems = [
  ...codesFAQ,
  { question: 'Is Sell Lemons free to play?', answer: 'Yes, Sell Lemons is free to play on Roblox. There are optional gamepasses but you can enjoy the full game without spending real money.' },
  { question: 'What platforms is Sell Lemons on?', answer: 'Sell Lemons is available on PC, Mobile, Xbox, and PlayStation through the Roblox platform.' },
  { question: 'What is the goal of Sell Lemons?', answer: 'Build the most profitable lemon business. Sell lemons, buy upgrades, rebirth for multipliers, discover hidden items, and ascend for permanent bonuses.' },
  { question: 'How do I use the calculators on this site?', answer: 'Each calculator has input fields for your current game stats. Enter your values, and the calculator will show results in real time. Results can be copied and inputs are saved to your browser.' },
  { question: 'Is this site official?', answer: 'No. Sell Lemons Tools is a fan-made, unofficial tool site. We are not affiliated with Roblox Corporation or the Sell Lemons developers.' },
  { question: 'How often is the site updated?', answer: 'We check for codes weekly and monitor game updates. Calculator formulas are updated when new game mechanics are confirmed.' },
  { question: 'Are there active Sell Lemons codes?', answer: 'We check for new codes regularly. Visit the Codes page for the latest active and expired codes. When codes are confirmed, we list them immediately.' },
  { question: 'How accurate are the calculators?', answer: 'Our calculators use formulas based on confirmed game mechanics. Results are estimates and may vary if the game receives updates that change formulas. We update calculators when new mechanics are verified.' },
  { question: 'Does offline income work in Sell Lemons?', answer: 'Yes. The game description confirms 100% offline income, meaning you earn the same rate while offline as online. Use the Offline Income Calculator to estimate your AFK earnings.' },
  { question: 'When should I rebirth?', answer: 'Rebirth when your post-rebirth income can rebuild your current progress within a reasonable time (usually under 30 minutes). Use the Rebirth Calculator to find your exact break-even point.' },
  { question: 'What upgrade should I buy first?', answer: 'In early game, prioritize Lemon Stand and Cash Register upgrades for the fastest ROI. In later stages, use the Upgrade ROI Calculator to compare all available upgrades and pick the one with the shortest payback time.' },
  { question: 'What are Alien Investors?', answer: 'Alien Investors are a special system that provides an income bonus based on a percentage. The bonus stacks multiplicatively with rebirth, boost, gamepass, and event multipliers. Visit the Alien Investors guide for details.' },
  { question: 'What is the Sewer Key?', answer: 'The Sewer Key is a rumored hidden item that may unlock a secret sewer area. Its exact location and method of obtaining are currently unconfirmed. Visit the Sewer Key guide for the latest information.' },
  { question: 'What is the UFO Key?', answer: 'The UFO Key is a rumored hidden item that may unlock alien-themed content or the Redacted Area. Its location is currently unconfirmed. Visit the UFO Key guide for details.' },
  { question: 'Are hidden items confirmed?', answer: 'Most hidden items in Sell Lemons (Sewer Key, UFO Key, Cosmic Cash, Purity Fruit) are currently unconfirmed. We track community reports and game updates to verify items. Visit the Hidden Items page for the latest status.' },
  { question: 'Can I use this site on mobile?', answer: 'Yes, all calculators and guides on this site are fully responsive and work on any device with a web browser, including phones and tablets.' },
  { question: 'Do you offer scripts or exploits?', answer: 'No. We do not provide scripts, exploits, hacks, or any cheating tools. This site only offers calculators and guides for legitimate gameplay.' },
]

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sell Lemons FAQ - Frequently Asked Questions',
  description: 'Sell Lemons FAQ covering codes, calculators, offline income, rebirth timing, upgrades, keys, badges, hidden items, and unofficial tool usage.',
  path: '/faq/',
  keywords: ['Sell Lemons FAQ', 'Sell Lemons questions'],
})

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'FAQ' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sell Lemons FAQ</h1>
      <p className="text-gray-600">Frequently asked questions about Sell Lemons and this tool site.</p>
      <Accordion items={faqItems} />
      <LastUpdated />
    </div>
  )
}
