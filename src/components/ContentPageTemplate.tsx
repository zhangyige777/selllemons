import type { ContentPage } from '@/data/pages'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/Accordion'
import { DataStatusBanner } from '@/components/ui/DataStatusBadge'
import RelatedLinks from '@/components/ui/RelatedLinks'
import LastUpdated from '@/components/ui/LastUpdated'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'
import { siteConfig } from '@/lib/config'

interface ContentPageTemplateProps {
  page: ContentPage
}

export default function ContentPageTemplate({ page }: ContentPageTemplateProps) {
  const breadcrumbItems = [
    { name: 'Home', url: `${siteConfig.baseUrl}/` },
    { name: page.h1, url: `${siteConfig.baseUrl}${page.href}` },
  ]

  const allRelatedTools = [
    ...(page.relatedTools || []),
    ...(page.relatedGuides || []),
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: page.h1 }]} />

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{page.h1}</h1>
        <p className="mt-2 text-gray-600">{page.shortAnswer}</p>
      </div>

      <DataStatusBanner status={page.dataStatus} />

      {page.sections.map((section, index) => (
        <section key={index}>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{section.heading}</h2>
          <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            {section.content}
          </div>
        </section>
      ))}

      {page.tips && page.tips.length > 0 && (
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
          <h2 className="text-sm font-semibold text-primary-800 mb-2">💡 Tips</h2>
          <ul className="space-y-1">
            {page.tips.map((tip, i) => (
              <li key={i} className="text-sm text-primary-700">• {tip}</li>
            ))}
          </ul>
        </div>
      )}

      {allRelatedTools.length > 0 && (
        <RelatedLinks
          title="Related Pages"
          items={allRelatedTools.map((r) => ({
            href: r.href,
            label: r.label,
          }))}
        />
      )}

      {page.faq.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">FAQ</h2>
          <Accordion items={page.faq} />
        </section>
      )}

      <LastUpdated />

      <JsonLd data={generateBreadcrumbSchema(breadcrumbItems)} />
      {page.faq.length > 0 && <JsonLd data={generateFAQSchema(page.faq)} />}
    </div>
  )
}
