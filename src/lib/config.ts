export const siteConfig = {
  siteName: 'Sell Lemons Tools',
  siteTagline: 'Unofficial Sell Lemons Calculator & Tools',
  baseUrl: 'https://selllemonscalculator.online',
  gameName: 'Sell Lemons',
  developer: 'Gavineo',
  genre: 'Simulation / Tycoon',
  robloxUrl: 'https://www.roblox.com/games/79268393072444',
  platforms: ['PC', 'Mobile', 'Xbox', 'PlayStation'] as const,
  lastUpdated: '2026-05-31',
  themeColor: '#FBBF24',
  stats: {
    visits: '6.4M+',
    activePlayers: '51K+',
    active: true,
  },
  seo: {
    titleTemplate: '%s | Sell Lemons Tools',
    defaultDescription:
      'Rebirth timing, offline income, upgrade ROI, multiplier stacking, codes, keys, badges, and progression planning - all in one place.',
    primaryKeywords: [
      'Sell Lemons',
      'Sell Lemons calculator',
      'Sell Lemons tools',
      'Sell Lemons Roblox',
    ],
    secondaryKeywords: [
      'Sell Lemons rebirth calculator',
      'Sell Lemons offline income',
      'Sell Lemons codes',
      'Sell Lemons upgrade calculator',
      'Sell Lemons sewer key',
      'Sell Lemons multiplier calculator',
      'Sell Lemons badges',
      'Sell Lemons UFO key',
    ],
  },
  nav: [
    { label: 'Calculator', href: '/calculator/' },
    { label: 'Rebirth', href: '/rebirth-calculator/' },
    { label: 'Offline Income', href: '/offline-income-calculator/' },
    { label: 'Upgrade ROI', href: '/upgrade-calculator/' },
    { label: 'Codes', href: '/codes/' },
    { label: 'Guide', href: '/beginner-guide/' },
  ],
} as const

export type SiteConfig = typeof siteConfig
