import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us',
  description: 'Contact the Sell Lemons Tools team to report outdated information, suggest calculator improvements, share verified codes, or submit Sell Lemons guide corrections.',
  path: '/contact/',
})

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
      <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
        <p>Have questions, found a bug, or want to report verified game information? We would love to hear from you.</p>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Report Verified Information</h2>
          <p>If you have confirmed information about Sell Lemons (verified codes, exact game mechanics, hidden item locations), please reach out so we can update the site with accurate data.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Report a Bug</h2>
          <p>If a calculator is giving incorrect results or a page is not working properly, let us know and we will fix it as soon as possible.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Email</h2>
          <p>Contact us at: <span className="text-primary-600">contact@selllemons.gg</span></p>
        </section>
      </div>
    </div>
  )
}
