import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { SiteData } from '@/lib/content'

interface HeroProps {
  hero: SiteData['home']['hero']
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-800/60 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-blue-800/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h1 
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl" 
              dangerouslySetInnerHTML={{ __html: hero.heading }}
            />
            
            <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl">
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


