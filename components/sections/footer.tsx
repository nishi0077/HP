import Link from 'next/link'
import type { SiteData } from '@/lib/content'

interface FooterProps {
  footer: SiteData['footer']
  navigation: SiteData['navigation']
  site: SiteData['site']
}

export function Footer({ footer, navigation, site }: FooterProps) {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">{navigation.logo_text}</span>
            </Link>
            <p className="text-sm text-white/80">
              {site.brand.tagline}
            </p>
            <div className="space-y-1 text-sm text-white/80">
              <p>{site.brand.email}</p>
              <p>{site.brand.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">クイックリンク</h4>
            <ul className="space-y-2">
              {footer.quick_links.map((link) => {
                const href = navigation.links.find(nav => nav.label === link)?.href || '/'
                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
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
            <h4 className="font-semibold text-white">法的情報</h4>
            <ul className="space-y-2">
              {footer.legal.map((legal) => (
                <li key={legal}>
                  <Link
                    href={`/${legal.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {legal}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-white/80">
            {footer.copyright.text}
          </p>
        </div>
      </div>
    </footer>
  )
}


