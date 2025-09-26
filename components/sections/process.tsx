import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { SiteData } from '@/lib/content'

interface ProcessProps {
  process: SiteData['process']
}

export function Process({ process }: ProcessProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {process.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, index) => (
            <div key={step.no} className="relative">
              <Card className="h-full">
                <CardHeader className="text-center">
                  <Badge variant="default" className="w-8 h-8 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {step.no}
                  </Badge>
                  <CardTitle className="text-lg">{step.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {step.output}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow for desktop */}
              {index < process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


