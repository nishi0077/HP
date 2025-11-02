import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import type { SiteData } from '@/lib/content'

interface CtaBannerProps {
  cta: SiteData['cta']
}

export function CtaBanner({ cta }: CtaBannerProps) {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-['Zen_Old_Mincho']">
            {cta.banner.heading}
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {cta.banner.subtext}
          </p>
          {cta.banner.button && cta.banner.button.href ? (
            cta.banner.button.href.startsWith('http') ? (
              <a href={cta.banner.button.href} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton text={cta.banner.button.label} className="w-48" />
              </a>
            ) : (
              <Link href={cta.banner.button.href}>
                <InteractiveHoverButton text={cta.banner.button.label} className="w-48" />
              </Link>
            )
          ) : null}
        </div>
      </div>
    </section>
  )
}


