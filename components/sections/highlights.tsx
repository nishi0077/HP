"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Workflow, DollarSign, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import type { SiteData } from '@/lib/content'

interface HighlightsProps {
  highlights: SiteData['home']['highlights']
}

export function Highlights({ highlights }: HighlightsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-['Zen_Old_Mincho']">
            {highlights.title}
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.items.map((item, index) => {
            const icons = [Workflow, DollarSign, BarChart3];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-['Zen_Old_Mincho']">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-['Zen_Old_Mincho']">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


