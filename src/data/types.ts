export type DataStatus = 'confirmed' | 'possible' | 'unconfirmed'
export type CodeStatus = 'active' | 'expired' | 'possible'
export type PagePriority = 'P0' | 'P1' | 'P2'

export interface FAQItem {
  question: string
  answer: string
}

export interface RelatedPage {
  href: string
  label: string
  emoji?: string
}

export interface SourceRef {
  label: string
  url: string
  note: string
}
