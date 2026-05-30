import type { FAQItem, PagePriority } from './types'

export interface ToolDefinition {
  slug: string
  href: string
  title: string
  shortTitle: string
  description: string
  h1: string
  emoji: string
  priority: PagePriority
  faq: FAQItem[]
  relatedTools: { href: string; label: string }[]
  relatedGuides: { href: string; label: string }[]
}

export const tools: ToolDefinition[] = [
  {
    slug: 'calculator',
    href: '/calculator/',
    title: 'Sell Lemons Calculator - Estimate Your Earnings',
    shortTitle: 'Main Calculator',
    description: 'Calculate your Sell Lemons earnings per second, minute, hour, and offline income with this comprehensive calculator.',
    h1: 'Sell Lemons Calculator',
    emoji: '🧮',
    priority: 'P0',
    faq: [
      { question: 'What does the Sell Lemons Calculator do?', answer: 'It estimates your total earnings per second, minute, hour, and offline income based on your current lemons per second, cash per lemon, and all active multipliers.' },
      { question: 'How accurate is the calculator?', answer: 'The calculator uses the formulas described in-game. Results are estimates -actual earnings may vary based on game updates or mechanics not yet fully documented.' },
      { question: 'Does this work on mobile?', answer: 'Yes, the calculator is fully responsive and works on any device with a web browser.' },
    ],
    relatedTools: [
      { href: '/rebirth-calculator/', label: 'Rebirth Calculator' },
      { href: '/offline-income-calculator/', label: 'Offline Income Calculator' },
      { href: '/upgrade-calculator/', label: 'Upgrade ROI Calculator' },
    ],
    relatedGuides: [
      { href: '/beginner-guide/', label: 'Beginner Guide' },
      { href: '/money-fast/', label: 'Money Fast Guide' },
    ],
  },
  {
    slug: 'rebirth-calculator',
    href: '/rebirth-calculator/',
    title: 'Sell Lemons Rebirth Calculator - Rebirth Timing',
    shortTitle: 'Rebirth Calculator',
    description: 'Calculate rebirth timing in Sell Lemons. Compare post-rebirth income, rebuild time, and break-even point to decide if you should rebirth now.',
    h1: 'Sell Lemons Rebirth Calculator',
    emoji: '🔄',
    priority: 'P0',
    faq: [
      { question: 'When should I rebirth in Sell Lemons?', answer: 'You should rebirth when your post-rebirth income (with the new multiplier) can recover your current progress within an acceptable time. Use the calculator above to find your break-even point.' },
      { question: 'What happens when I rebirth?', answer: 'Rebirthing resets your cash and upgrades but gives you a permanent multiplier bonus. The more times you rebirth, the faster you can rebuild.' },
      { question: 'Is there a rebirth cap?', answer: 'This information is currently unconfirmed. Check the Updates page for the latest game changes.' },
    ],
    relatedTools: [
      { href: '/calculator/', label: 'Main Calculator' },
      { href: '/multiplier-calculator/', label: 'Multiplier Calculator' },
      { href: '/progression-planner/', label: 'Progression Planner' },
    ],
    relatedGuides: [
      { href: '/when-to-rebirth/', label: 'When to Rebirth' },
      { href: '/rebirth-multiplier/', label: 'Rebirth Multiplier Guide' },
    ],
  },
  {
    slug: 'offline-income-calculator',
    href: '/offline-income-calculator/',
    title: 'Sell Lemons Offline Income Calculator',
    shortTitle: 'Offline Income Calculator',
    description: 'Calculate your Sell Lemons offline earnings from income per second, offline time, boosts, and multipliers. Estimate how much cash you will earn while away.',
    h1: 'Sell Lemons Offline Income Calculator',
    emoji: '💤',
    priority: 'P0',
    faq: [
      { question: 'Does Sell Lemons have offline income?', answer: 'Yes! The game description confirms 100% offline income. You earn the same rate while offline as you do online.' },
      { question: 'Is there an offline income cap?', answer: 'This information is currently unconfirmed. Some Roblox tycoon games cap offline earnings. Check the last updated date on this page for the latest info.' },
      { question: 'How can I maximize offline income?', answer: 'Before logging off, make sure all your multipliers are active (boosts, investor bonuses) and that you have the best upgrades purchased. Use the calculator to estimate your earnings.' },
    ],
    relatedTools: [
      { href: '/calculator/', label: 'Main Calculator' },
      { href: '/multiplier-calculator/', label: 'Multiplier Calculator' },
    ],
    relatedGuides: [
      { href: '/offline-earnings/', label: 'Offline Earnings Guide' },
      { href: '/boosts/', label: 'Boosts Guide' },
    ],
  },
  {
    slug: 'upgrade-calculator',
    href: '/upgrade-calculator/',
    title: 'Sell Lemons Upgrade ROI Calculator - Best Order',
    shortTitle: 'Upgrade ROI Calculator',
    description: 'Compare Sell Lemons upgrades by cost, income gain, ROI time, and priority score to decide which upgrade pays off fastest.',
    h1: 'Sell Lemons Upgrade ROI Calculator',
    emoji: '📈',
    priority: 'P0',
    faq: [
      { question: 'Which upgrade should I buy first?', answer: 'The upgrade with the shortest ROI time (time to pay for itself) should generally be prioritized. Use the calculator above to compare all available upgrades.' },
      { question: 'How is ROI calculated?', answer: 'ROI Time = Upgrade Cost ÷ Income Gain Per Second. The shorter the ROI, the faster the upgrade pays for itself.' },
      { question: 'Should I always buy the cheapest upgrade?', answer: 'Not necessarily. A more expensive upgrade with a higher income gain might have a shorter ROI time. Always compare using the calculator.' },
    ],
    relatedTools: [
      { href: '/calculator/', label: 'Main Calculator' },
      { href: '/progression-planner/', label: 'Progression Planner' },
      { href: '/roi-calculator/', label: 'ROI Calculator' },
    ],
    relatedGuides: [
      { href: '/best-upgrades/', label: 'Best Upgrades' },
      { href: '/upgrade-priority/', label: 'Upgrade Priority' },
    ],
  },
  {
    slug: 'multiplier-calculator',
    href: '/multiplier-calculator/',
    title: 'Sell Lemons Multiplier Calculator',
    shortTitle: 'Multiplier Calculator',
    description: 'Calculate your total Sell Lemons multiplier from rebirth, boost, gamepass, alien investor, and event multipliers with a full breakdown.',
    h1: 'Sell Lemons Multiplier Calculator',
    emoji: '✖️',
    priority: 'P0',
    faq: [
      { question: 'How do multipliers stack in Sell Lemons?', answer: 'Multipliers from different sources (rebirth, boosts, gamepasses, investors, events) multiply together. This means getting a boost in every category has a compounding effect.' },
      { question: 'What gives the biggest multiplier?', answer: 'Rebirth multiplier typically provides the largest boost. Alien investors can also add significant bonuses. Use the calculator to see exactly how much each source contributes.' },
      { question: 'Do multipliers have a cap?', answer: 'Some multipliers may have caps. Rebirth multiplier appears to scale with rebirth count. Check the Multipliers guide for detailed information.' },
    ],
    relatedTools: [
      { href: '/rebirth-calculator/', label: 'Rebirth Calculator' },
      { href: '/boost-calculator/', label: 'Boost Calculator' },
    ],
    relatedGuides: [
      { href: '/multipliers/', label: 'Multipliers Guide' },
      { href: '/rebirth-multiplier/', label: 'Rebirth Multiplier Guide' },
    ],
  },
  {
    slug: 'progression-planner',
    href: '/progression-planner/',
    title: 'Sell Lemons Progression Planner - What to Do Next',
    shortTitle: 'Progression Planner',
    description: 'Get personalized next-step advice for Sell Lemons. Select your stage, enter your stats, and get recommended goals, upgrades, and tools.',
    h1: 'Sell Lemons Progression Planner',
    emoji: '🗺️',
    priority: 'P0',
    faq: [
      { question: 'What stage am I in?', answer: 'Early game (under 10K cash), Mid game (10K-1M cash, first rebirth), Late game (1M+ cash, multiple rebirths, advanced systems), Endgame (cosmic content, ascend). Select the option that best matches your current progress.' },
      { question: 'What should I focus on first?', answer: 'In early game, focus on income-producing upgrades. In mid game, prepare for rebirth. In late game, optimize multipliers. In endgame, pursue hidden content and ascension.' },
    ],
    relatedTools: [
      { href: '/rebirth-calculator/', label: 'Rebirth Calculator' },
      { href: '/upgrade-calculator/', label: 'Upgrade ROI Calculator' },
      { href: '/multiplier-calculator/', label: 'Multiplier Calculator' },
    ],
    relatedGuides: [
      { href: '/beginner-guide/', label: 'Beginner Guide' },
      { href: '/guide/', label: 'Complete Guide' },
      { href: '/endgame/', label: 'Endgame Guide' },
    ],
  },
  {
    slug: 'profit-calculator',
    href: '/profit-calculator/',
    title: 'Sell Lemons Profit Calculator',
    shortTitle: 'Profit Calculator',
    description: 'Calculate your total profit in Sell Lemons including all income sources and multipliers.',
    h1: 'Sell Lemons Profit Calculator',
    emoji: '💰',
    priority: 'P1',
    faq: [
      { question: 'How is profit calculated?', answer: 'Profit is calculated as your base income multiplied by all active multipliers (rebirth, boost, gamepass, investor, event) over your chosen time period.' },
    ],
    relatedTools: [
      { href: '/calculator/', label: 'Main Calculator' },
      { href: '/money-calculator/', label: 'Money Calculator' },
    ],
    relatedGuides: [
      { href: '/money-fast/', label: 'Money Fast Guide' },
    ],
  },
  {
    slug: 'money-calculator',
    href: '/money-calculator/',
    title: 'Sell Lemons Money Calculator - Income Estimator',
    shortTitle: 'Money Calculator',
    description: 'Calculate how much money you will make in Sell Lemons over any time period with all multipliers applied.',
    h1: 'Sell Lemons Money Calculator',
    emoji: '💵',
    priority: 'P1',
    faq: [
      { question: 'How do I calculate my money per hour?', answer: 'Enter your current income per second and all active multipliers. The calculator will show your earnings per second, minute, hour, and over custom time periods.' },
    ],
    relatedTools: [
      { href: '/calculator/', label: 'Main Calculator' },
      { href: '/profit-calculator/', label: 'Profit Calculator' },
    ],
    relatedGuides: [
      { href: '/money-fast/', label: 'Money Fast Guide' },
    ],
  },
  {
    slug: 'ascend-calculator',
    href: '/ascend-calculator/',
    title: 'Sell Lemons Ascend Calculator - Ascend Timing',
    shortTitle: 'Ascend Calculator',
    description: 'Calculate whether you should ascend in Sell Lemons. Compare the permanent bonus vs the reset cost.',
    h1: 'Sell Lemons Ascend Calculator',
    emoji: '⬆️',
    priority: 'P1',
    faq: [
      { question: 'What is ascending in Sell Lemons?', answer: 'Ascending is a prestige mechanic that resets your progress but grants permanent bonuses, similar to rebirth but at a higher level with different rewards.' },
      { question: 'How is ascend different from rebirth?', answer: 'Rebirth resets cash and upgrades but gives a multiplier. Ascend may reset more progress but provide stronger permanent bonuses. Use both calculators to compare.' },
    ],
    relatedTools: [
      { href: '/rebirth-calculator/', label: 'Rebirth Calculator' },
      { href: '/progression-planner/', label: 'Progression Planner' },
    ],
    relatedGuides: [
      { href: '/when-to-ascend/', label: 'When to Ascend' },
      { href: '/ascend/', label: 'Ascend System Guide' },
    ],
  },
  {
    slug: 'roi-calculator',
    href: '/roi-calculator/',
    title: 'Sell Lemons ROI Calculator',
    shortTitle: 'ROI Calculator',
    description: 'Calculate the return on investment for Sell Lemons upgrades. Compare which upgrades give the best return.',
    h1: 'Sell Lemons ROI Calculator',
    emoji: '📊',
    priority: 'P1',
    faq: [
      { question: 'What is ROI in Sell Lemons?', answer: 'ROI (Return on Investment) measures how quickly an upgrade pays for itself. A lower ROI time means the upgrade is more efficient.' },
    ],
    relatedTools: [
      { href: '/upgrade-calculator/', label: 'Upgrade ROI Calculator' },
      { href: '/calculator/', label: 'Main Calculator' },
    ],
    relatedGuides: [
      { href: '/best-upgrades/', label: 'Best Upgrades' },
    ],
  },
  {
    slug: 'boost-calculator',
    href: '/boost-calculator/',
    title: 'Sell Lemons Boost Calculator - Boost Value',
    shortTitle: 'Boost Calculator',
    description: 'Calculate how much extra income you get from boosts in Sell Lemons. See the impact of each boost on your earnings.',
    h1: 'Sell Lemons Boost Calculator',
    emoji: '🚀',
    priority: 'P1',
    faq: [
      { question: 'How do boosts work in Sell Lemons?', answer: 'Boosts temporarily multiply your income. They can stack with other multipliers for even greater effect. Use this calculator to see exactly how much a boost adds.' },
    ],
    relatedTools: [
      { href: '/multiplier-calculator/', label: 'Multiplier Calculator' },
      { href: '/calculator/', label: 'Main Calculator' },
    ],
    relatedGuides: [
      { href: '/boosts/', label: 'Boosts Guide' },
      { href: '/multipliers/', label: 'Multipliers Guide' },
    ],
  },
]

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return tools.find((t) => t.slug === slug)
}

export function getP0Tools(): ToolDefinition[] {
  return tools.filter((t) => t.priority === 'P0')
}
