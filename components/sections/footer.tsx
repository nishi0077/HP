import Link from 'next/link'
import type { SiteData } from '@/lib/content'

interface FooterProps {
  footer: SiteData['footer']
  navigation: SiteData['navigation']
  site: SiteData['site']
}

export function Footer({ footer, navigation, site }: FooterProps) {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">{navigation.logo_text}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {site.brand.tagline}
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{site.brand.email}</p>
              <p>{site.brand.phone}</p>
              <p>{site.brand.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">クイックリンク</h4>
            <ul className="space-y-2">
              {footer.quick_links.map((link) => {
                const href = navigation.links.find(nav => nav.label === link)?.href || '/'
                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">法的情報</h4>
            <ul className="space-y-2">
              {footer.legal.map((legal) => (
                <li key={legal}>
                  <Link
                    href={`/${legal.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {legal}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">お問い合わせ</h4>
            <Link
              href="/book"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              相談を予約する
            </Link>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {footer.copyright.text}
          </p>
        </div>
      </div>
    </footer>
  )
}


