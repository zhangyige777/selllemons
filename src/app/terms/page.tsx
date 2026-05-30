import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Terms of Service',
  description: 'Terms of Service for Sell Lemons Tools, covering unofficial fan-made calculators, estimated results, site usage, limitations, and Roblox trademark disclaimers.',
  path: '/terms/',
})

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
      <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
      <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
        <p><strong>Last updated:</strong> May 30, 2026</p>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Use of This Site</h2>
          <p>Sell Lemons Tools is provided as-is for informational and entertainment purposes. The calculators and guides are unofficial fan-made tools. Results are estimates and may not reflect exact in-game values.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Accuracy</h2>
          <p>We strive for accuracy but cannot guarantee that all information is correct. Game mechanics may change with updates. Always verify critical information in-game.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Not Affiliated</h2>
          <p>This site is not affiliated with, endorsed by, or connected to Roblox Corporation or the developers of Sell Lemons.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Limitation of Liability</h2>
          <p>We are not responsible for any decisions made based on the information provided on this site. Use the tools and guides at your own risk.</p>
        </section>
      </div>
    </div>
  )
}
