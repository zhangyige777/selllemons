import Link from 'next/link'

const footerSections = [
  {
    title: 'Calculators',
    items: [
      { href: '/calculator/', label: 'Main Calculator' },
      { href: '/rebirth-calculator/', label: 'Rebirth Calculator' },
      { href: '/offline-income-calculator/', label: 'Offline Income' },
      { href: '/upgrade-calculator/', label: 'Upgrade ROI' },
      { href: '/multiplier-calculator/', label: 'Multiplier' },
      { href: '/progression-planner/', label: 'Progression Planner' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { href: '/beginner-guide/', label: 'Beginner Guide' },
      { href: '/best-upgrades/', label: 'Best Upgrades' },
      { href: '/money-fast/', label: 'Money Fast' },
      { href: '/codes/', label: 'Codes' },
      { href: '/sewer-key/', label: 'Sewer Key' },
      { href: '/badges/', label: 'Badges' },
    ],
  },
  {
    title: 'Systems',
    items: [
      { href: '/offline-earnings/', label: 'Offline Earnings' },
      { href: '/rebirth-multiplier/', label: 'Rebirth Multiplier' },
      { href: '/multipliers/', label: 'Multipliers' },
      { href: '/alien-investors/', label: 'Alien Investors' },
      { href: '/deals/', label: 'Deals' },
      { href: '/ufo-key/', label: 'UFO Key' },
    ],
  },
  {
    title: 'About',
    items: [
      { href: '/about/', label: 'About' },
      { href: '/privacy-policy/', label: 'Privacy Policy' },
      { href: '/terms/', label: 'Terms of Service' },
      { href: '/contact/', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-200 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            🍋 Sell Lemons Tools is a fan-made, unofficial tool site. Not affiliated with Roblox Corporation or the Sell Lemons developers.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            © {new Date().getFullYear()} Sell Lemons Tools. All game content and trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}
