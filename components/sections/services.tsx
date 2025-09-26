import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import type { SiteData } from '@/lib/content'

interface ServicesProps {
  services: SiteData['services']
}

export function Services({ services }: ServicesProps) {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {services.intro}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.cards.map((service) => (
            <Card key={service.slug} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  {service.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm text-muted-foreground">{bullet}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/book">{service.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


