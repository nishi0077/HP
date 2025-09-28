import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

export interface SiteData {
  site: {
    name: string
    locale: string
    domain: string
    brand: {
      tagline: string
      phone: string
      email: string
      address: string
    }
    seo: {
      title: string
      description: string
      keywords: string[]
    }
  }
  navigation: {
    logo_text: string
    links: Array<{ label: string; href: string }>
    cta: { label: string; href: string }
  }
  home: {
    hero: {
      heading: string
      subheading: string
      primary_cta: { label: string; href: string }
      secondary_cta: { label: string; href: string }
      trust_badges: string[]
    }
    highlights: {
      title: string
      items: Array<{ title: string; text: string }>
    }
  }
  services: {
    title: string
    intro: string
    cards: Array<{
      slug: string
      name: string
      bullets: string[]
      cta: string
    }>
  }
  process: {
    title: string
    steps: Array<{
      no: number
      name: string
      output: string
    }>
  }
  pricing: {
    title: string
    plans: Array<{
      name: string
      target: string
      monthly_fee: number
      setup_fee: number
      includes: string[]
    }>
  }
  cases: {
    title: string
    items: Array<{
      title: string
      kpi: string
      metrics: {
        [key: string]: number
      }
      levers: string[]
    }>
  }
  portfolio: {
    title: string
    description: string
    categories: Array<{
      name: string
      works: Array<{
        title: string
        subtitle?: string
        description: string
        url?: string
        category: string
        tech?: string[]
        deliverables?: string[]
        image?: string
      }>
    }>
  }
  about: {
    title: string
    mission: string
    values: string[]
    profile: {
      representative: string
      description: string
    }
  }
  faq: {
    title: string
    items: Array<{ q: string; a: string }>
  }
  cta: {
    banner: {
      heading: string
      subtext: string
      button: { label: string; href: string }
    }
  }
  contact: {
    form_fields: Array<{
      name: string
      label: string
      required?: boolean
      type?: string
      options?: string[]
      placeholder?: string
    }>
  }
  footer: {
    quick_links: string[]
    legal: string[]
    copyright: {
      text: string
    }
  }
}

export function loadSite(): SiteData {
  const file = fs.readFileSync(path.join(process.cwd(), 'content/site.yaml'), 'utf-8')
  return yaml.load(file) as SiteData
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    minimumFractionDigits: 0,
  }).format(price)
}

