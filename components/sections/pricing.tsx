import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { formatPrice } from '@/lib/content'
import type { SiteData } from '@/lib/content'

interface PricingProps {
  pricing: SiteData['pricing']
}

export function Pricing({ pricing }: PricingProps) {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {pricing.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricing.plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`h-full flex flex-col ${
                index === 1 ? 'border-primary border-2 scale-105' : ''
              }`}
            >
              <CardHeader className="text-center">
                {index === 1 && (
                  <Badge variant="default" className="mx-auto mb-4">
                    おすすめ
                  </Badge>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.target}</p>
                <div className="mt-4">
                  <div className="text-3xl font-bold">
                    {formatPrice(plan.monthly_fee)}
                    <span className="text-sm font-normal text-muted-foreground">/月</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    初期費用: {formatPrice(plan.setup_fee)}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  {plan.includes.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button 
                  variant={index === 1 ? "default" : "outline"} 
                  className="w-full" 
                  asChild
                >
                  <Link href="/book">相談を予約</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


