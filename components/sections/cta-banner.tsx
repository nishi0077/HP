import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { SiteData } from '@/lib/content'

interface CtaBannerProps {
  cta: SiteData['cta']
}

export function CtaBanner({ cta }: CtaBannerProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-['Zen_Old_Mincho']">
            {cta.banner.heading}
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {cta.banner.subtext}
          </p>
          <Button size="lg" variant="secondary" asChild>
            {cta.banner.button.href.startsWith('http') ? (
              <a href={cta.banner.button.href} target="_blank" rel="noopener noreferrer">
                {cta.banner.button.label}
              </a>
            ) : (
              <Link href={cta.banner.button.href}>
                {cta.banner.button.label}
              </Link>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}


