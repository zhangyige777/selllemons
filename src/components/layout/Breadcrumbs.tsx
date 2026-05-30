import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { generateBreadcrumbSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [
    { name: 'Home', url: `${siteConfig.baseUrl}/` },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `${siteConfig.baseUrl}${item.href}` : '',
    })),
  ]

  const schema = generateBreadcrumbSchema(allItems)

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className="text-gray-300">›</span>
              {item.href && index < items.length - 1 ? (
                <Link href={item.href} className="hover:text-primary-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={schema} />
    </>
  )
}
