import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Sell Lemons Tools, explaining basic site usage, analytics, local calculator inputs, cookies, and how unofficial tool data is handled.',
  path: '/privacy-policy/',
})

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
      <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
        <p><strong>Last updated:</strong> May 30, 2026</p>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect</h2>
          <p>This site uses LocalStorage to save your calculator inputs for convenience. No personal data is collected or sent to any server. Calculator inputs stay in your browser and are never transmitted.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h2>
          <p>We may use Google Analytics to understand site traffic. This collects anonymous data such as page views, time on site, and device type. No personally identifiable information is collected.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Advertising</h2>
          <p>We may display ads through Google AdSense or similar services. These services may use cookies to serve relevant ads. You can opt out of personalized advertising through your browser settings.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Links</h2>
          <p>This site may contain links to Roblox or other external sites. We are not responsible for the privacy practices of those sites.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
          <p>If you have questions about this privacy policy, please contact us through our <a href="/contact/" className="text-primary-600 hover:underline">contact page</a>.</p>
        </section>
      </div>
    </div>
  )
}
