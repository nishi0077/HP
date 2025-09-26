import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { SiteData } from '@/lib/content'

interface HeroProps {
  hero: SiteData['home']['hero']
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {hero.heading}
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              {hero.subheading}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href={hero.primary_cta.href}>
                  {hero.primary_cta.label}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={hero.secondary_cta.href}>
                  {hero.secondary_cta.label}
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {hero.trust_badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
        </div>
      </div>
    </section>
  )
}


