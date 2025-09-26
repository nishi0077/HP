import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { SiteData } from '@/lib/content'

interface HighlightsProps {
  highlights: SiteData['home']['highlights']
}

export function Highlights({ highlights }: HighlightsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {highlights.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.items.map((item, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


