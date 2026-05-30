import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/config'
import { generateVideoGameSchema, generateWebSiteSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AdSlot from '@/components/ui/AdSlot'
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YV2HRZ0HB0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-YV2HRZ0HB0');`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 font-sans antialiased">
        {/* Ad: EffectiveCPM Popunder */}
        <AdSlot network="effectivecpmnetwork" keyId="b3e76d718f5ff3463b4a5eabfefe82aa" className="fixed top-0 left-0 w-0 h-0 overflow-hidden" />
        <Header />
        {/* Ad: 728x90 Leaderboard */}
        <AdSlot network="highperformanceformat" keyId="13077c3ecdc3c8110a518a4c1926dc84" width={728} height={90} className="py-2" />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:py-8">
          {children}
        </main>
        {/* Ad: 300x250 Sidebar */}
        <AdSlot network="highperformanceformat" keyId="3b43f3c92167042d4c387bbb51aa4725" width={300} height={250} className="py-2" />
        {/* Ad: 320x50 Mobile Banner */}
        <AdSlot network="highperformanceformat" keyId="d75c75df7aec6b8e4749fa5e1bc48467" width={320} height={50} className="py-2" />
        <Footer />
        <JsonLd data={generateWebSiteSchema()} />
        <JsonLd data={generateVideoGameSchema()} />
      </body>
    </html>
  )
}
