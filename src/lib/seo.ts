import type { Metadata } from 'next'
import { siteConfig } from './config'

interface SEOProps {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
}

export function generateSEOMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${siteConfig.baseUrl}${path}`
  const allKeywords = [...siteConfig.seo.primaryKeywords, ...keywords]

  return {
    title,
    description,
    keywords: allKeywords,
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {
          robots: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(
  items: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function generateVideoGameSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: siteConfig.gameName,
    description: siteConfig.seo.defaultDescription,
    genre: siteConfig.genre,
    gamePlatform: [...siteConfig.platforms],
    applicationCategory: 'Game',
    operatingSystem: 'Roblox',
    url: siteConfig.robloxUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.developer,
    },
  }
}

export function generateWebApplicationSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `${siteConfig.baseUrl}${url}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.baseUrl,
    description: siteConfig.seo.defaultDescription,
  }
}

export function generateItemListSchema(
  name: string,
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  }
}
