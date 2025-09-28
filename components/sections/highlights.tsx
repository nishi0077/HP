import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Workflow, DollarSign, BarChart3 } from 'lucide-react'
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
          {highlights.items.map((item, index) => {
            const icons = [Workflow, DollarSign, BarChart3];
            const Icon = icons[index % icons.length];
            
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


