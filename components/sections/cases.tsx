import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { SiteData } from '@/lib/content'

interface CasesProps {
  cases: SiteData['cases']
}

export function Cases({ cases }: CasesProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {cases.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cases.items.map((caseItem, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                <p className="text-primary font-semibold">{caseItem.kpi}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">成果数値</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {caseItem.results.map((result, resultIndex) => (
                      <Badge key={resultIndex} variant="secondary" className="justify-start">
                        {result}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">改善レバー</h4>
                  <div className="space-y-2">
                    {caseItem.levers.map((lever, leverIndex) => (
                      <div key={leverIndex} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="text-sm text-muted-foreground">{lever}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


