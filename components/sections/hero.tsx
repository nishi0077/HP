import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { SiteData } from '@/lib/content'

interface HeroProps {
  hero: SiteData['home']['hero']
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-20 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-gray-100/60 to-gray-200/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-300/20 via-transparent to-gray-100/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h1 
              className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl" 
              dangerouslySetInnerHTML={{ __html: hero.heading }}
            />
            
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              {hero.subheading}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                {hero.primary_cta.href.startsWith('http') ? (
                  <a href={hero.primary_cta.href} target="_blank" rel="noopener noreferrer">
                    {hero.primary_cta.label}
                  </a>
                ) : (
                  <Link href={hero.primary_cta.href}>
                    {hero.primary_cta.label}
                  </Link>
                )}
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


