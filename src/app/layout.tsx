import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import { generateVideoGameSchema, generateWebSiteSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.siteName} - ${siteConfig.siteTagline}`,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.primaryKeywords, ...siteConfig.seo.secondaryKeywords],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    siteName: siteConfig.siteName,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content={siteConfig.themeColor} />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 font-sans antialiased">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:py-8">
          {children}
        </main>
        <Footer />
        <JsonLd data={generateWebSiteSchema()} />
        <JsonLd data={generateVideoGameSchema()} />
      </body>
    </html>
  )
}
