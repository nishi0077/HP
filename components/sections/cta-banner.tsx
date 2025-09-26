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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {cta.banner.heading}
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {cta.banner.subtext}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href={cta.banner.button.href}>
              {cta.banner.button.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


