import type { PagePriority } from './types'

export interface NavItem {
  href: string
  label: string
  emoji: string
  priority: PagePriority
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    title: 'Calculators',
    items: [
      { href: '/calculator/', label: 'Main Calculator', emoji: '🧮', priority: 'P0' },
      { href: '/rebirth-calculator/', label: 'Rebirth Calculator', emoji: '🔄', priority: 'P0' },
      { href: '/offline-income-calculator/', label: 'Offline Income Calculator', emoji: '💤', priority: 'P0' },
      { href: '/upgrade-calculator/', label: 'Upgrade ROI Calculator', emoji: '📈', priority: 'P0' },
      { href: '/multiplier-calculator/', label: 'Multiplier Calculator', emoji: '✖️', priority: 'P0' },
      { href: '/progression-planner/', label: 'Progression Planner', emoji: '🗺️', priority: 'P0' },
      { href: '/profit-calculator/', label: 'Profit Calculator', emoji: '💰', priority: 'P1' },
      { href: '/money-calculator/', label: 'Money Calculator', emoji: '💵', priority: 'P1' },
      { href: '/ascend-calculator/', label: 'Ascend Calculator', emoji: '⬆️', priority: 'P1' },
      { href: '/roi-calculator/', label: 'ROI Calculator', emoji: '📊', priority: 'P1' },
      { href: '/boost-calculator/', label: 'Boost Calculator', emoji: '🚀', priority: 'P1' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { href: '/beginner-guide/', label: 'Beginner Guide', emoji: '🔰', priority: 'P0' },
      { href: '/guide/', label: 'Complete Guide', emoji: '📖', priority: 'P0' },
      { href: '/best-upgrades/', label: 'Best Upgrades', emoji: '🏆', priority: 'P0' },
      { href: '/upgrade-priority/', label: 'Upgrade Priority', emoji: '📋', priority: 'P0' },
      { href: '/when-to-rebirth/', label: 'When to Rebirth', emoji: '🔄', priority: 'P0' },
      { href: '/money-fast/', label: 'Money Fast', emoji: '⚡', priority: 'P0' },
      { href: '/when-to-ascend/', label: 'When to Ascend', emoji: '⬆️', priority: 'P1' },
      { href: '/best-strategy/', label: 'Best Strategy', emoji: '🧠', priority: 'P1' },
      { href: '/endgame/', label: 'Endgame Guide', emoji: '🎮', priority: 'P1' },
    ],
  },
  {
    title: 'Systems',
    items: [
      { href: '/offline-earnings/', label: 'Offline Earnings', emoji: '💤', priority: 'P0' },
      { href: '/rebirth-multiplier/', label: 'Rebirth Multiplier', emoji: '🔄', priority: 'P0' },
      { href: '/multipliers/', label: 'Multipliers', emoji: '✖️', priority: 'P0' },
      { href: '/alien-investors/', label: 'Alien Investors', emoji: '👽', priority: 'P0' },
      { href: '/deals/', label: 'Deals', emoji: '🤝', priority: 'P0' },
      { href: '/ascend/', label: 'Ascend System', emoji: '⬆️', priority: 'P1' },
      { href: '/boosts/', label: 'Boosts', emoji: '🚀', priority: 'P1' },
      { href: '/managers/', label: 'Managers', emoji: '👔', priority: 'P1' },
      { href: '/npc-deals/', label: 'NPC Deals', emoji: '🧑', priority: 'P1' },
      { href: '/phone-offers/', label: 'Phone Offers', emoji: '📱', priority: 'P1' },
      { href: '/powers/', label: 'Unique Powers', emoji: '⚡', priority: 'P1' },
      { href: '/gamepasses/', label: 'Gamepasses', emoji: '🎫', priority: 'P1' },
    ],
  },
  {
    title: 'Hidden Content',
    items: [
      { href: '/sewer-key/', label: 'Sewer Key', emoji: '🔑', priority: 'P0' },
      { href: '/ufo-key/', label: 'UFO Key', emoji: '🛸', priority: 'P0' },
      { href: '/cosmic-cash/', label: 'Cosmic Cash', emoji: '🌌', priority: 'P0' },
      { href: '/purity-fruit/', label: 'Purity Fruit', emoji: '🍋', priority: 'P0' },
      { href: '/badges/', label: 'Badges', emoji: '🏅', priority: 'P0' },
      { href: '/secrets/', label: 'Secrets', emoji: '🤫', priority: 'P0' },
      { href: '/cosmic-farmer-badge/', label: 'Cosmic Farmer Badge', emoji: '🚜', priority: 'P1' },
      { href: '/good-samaritan-badge/', label: 'Good Samaritan Badge', emoji: '😇', priority: 'P1' },
      { href: '/hidden-items/', label: 'Hidden Items', emoji: '🔍', priority: 'P1' },
      { href: '/redacted-area/', label: 'Redacted Area', emoji: '█', priority: 'P1' },
    ],
  },
  {
    title: 'Areas',
    items: [
      { href: '/lemon-dash/', label: 'Lemon Dash', emoji: '🏃', priority: 'P1' },
      { href: '/lemon-depot/', label: 'Lemon Depot', emoji: '🏪', priority: 'P1' },
      { href: '/lemon-trading/', label: 'Lemon Trading', emoji: '💹', priority: 'P1' },
      { href: '/void-evolution/', label: 'Void Evolution', emoji: '🌀', priority: 'P1' },
      { href: '/oranges/', label: 'Oranges', emoji: '🍊', priority: 'P1' },
      { href: '/lemon-labs/', label: 'Lemon Labs', emoji: '🔬', priority: 'P2' },
      { href: '/robotics/', label: 'Robotics', emoji: '🤖', priority: 'P2' },
      { href: '/hill-expansion/', label: 'Hill Expansion', emoji: '⛰️', priority: 'P2' },
    ],
  },
  {
    title: 'Base',
    items: [
      { href: '/codes/', label: 'Codes Tracker', emoji: '🎁', priority: 'P0' },
      { href: '/updates/', label: 'Updates', emoji: '🆕', priority: 'P1' },
      { href: '/wiki/', label: 'Wiki Hub', emoji: '📚', priority: 'P1' },
      { href: '/faq/', label: 'FAQ', emoji: '❓', priority: 'P1' },
    ],
  },
]

export function getAllNavItems(): NavItem[] {
  return navSections.flatMap((s) => s.items)
}

export function getP0Items(): NavItem[] {
  return getAllNavItems().filter((i) => i.priority === 'P0')
}
