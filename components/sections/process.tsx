import { Badge } from '@/components/ui/badge'
import { 
  MessageSquare,
  Search,
  Lightbulb,
  Rocket,
  CheckCircle
} from 'lucide-react'
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
            const icons = [MessageSquare, Search, Lightbulb, Rocket, CheckCircle];
            const Icon = icons[index % icons.length];
            
            return (
              <div key={step.no} className="relative">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-700 p-2 md:rounded-[1.5rem] md:p-3">
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black/80 backdrop-blur-sm border-gray-700 p-6 shadow-sm">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-full bg-white/10">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-center">
                          <Badge variant="default" className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-black">
                            {step.no}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-['Zen_Old_Mincho'] text-white text-center min-h-[3.5rem] flex items-center justify-center" dangerouslySetInnerHTML={{ __html: step.name }} />
                        <p className="text-sm text-white/80 text-center font-['Zen_Old_Mincho']">
                          {step.output}
                        </p>
                      </div>
                    </div>
                  </div>
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