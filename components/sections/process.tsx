import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Search, Lightbulb, Palette, PlayCircle, BarChart } from 'lucide-react'
import type { SiteData } from '@/lib/content'

interface ProcessProps {
  process: SiteData['process']
}

export function Process({ process }: ProcessProps) {
  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-['Zen_Old_Mincho'] text-white">
            {process.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, index) => {
            const icons = [Search, Lightbulb, Palette, PlayCircle, BarChart];
            const Icon = icons[index % icons.length];
            
            return (
              <div key={step.no} className="relative">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-700 p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                    variant="white"
                  />
                  <Card className="h-full bg-black/80 backdrop-blur-sm border-gray-700">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-full bg-white/10">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <Badge variant="default" className="w-8 h-8 rounded-full mx-auto mb-4 flex items-center justify-center bg-white text-black">
                        {step.no}
                      </Badge>
                      <CardTitle 
                        className="text-lg font-['Zen_Old_Mincho'] text-white" 
                        dangerouslySetInnerHTML={{ __html: step.name }}
                      />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/80 text-center font-['Zen_Old_Mincho']">
                        {step.output}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Arrow for desktop */}
                {index < process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


