import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { navSections } from '@/data/navigation'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl

  // Static core pages
  const corePages = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/calculator/', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/codes/', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/beginner-guide/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/guide/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/wiki/', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/faq/', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/about/', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy/', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/terms/', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/contact/', priority: 0.2, changeFrequency: 'yearly' as const },
  ]

  // All nav section pages
  const navPages = navSections.flatMap((section) =>
    section.items.map((item) => ({
      path: item.href,
      priority: item.priority === 'P0' ? 0.8 : item.priority === 'P1' ? 0.6 : 0.4,
      changeFrequency: 'weekly' as const,
    }))
  )

  // Combine and deduplicate
  const allPages = [...corePages]
  for (const navPage of navPages) {
    if (!allPages.find((p) => p.path === navPage.path)) {
      allPages.push(navPage)
    }
  }

  return allPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: siteConfig.lastUpdated,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
