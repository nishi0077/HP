"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Target, TrendingUp, Users, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import type { SiteData } from '@/lib/content'

interface ServicesProps {
  services: SiteData['services']
}

export function Services({ services }: ServicesProps) {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4 font-['Zen_Old_Mincho']">
            {services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-['Zen_Old_Mincho']">
            {services.intro}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.cards.map((service, index) => {
            const icons = [Target, TrendingUp, Users, BarChart3];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-['Zen_Old_Mincho']">{service.name}</CardTitle>
                  </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  {service.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm text-muted-foreground font-['Zen_Old_Mincho']">{bullet}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/book">{service.cta}</Link>
                </Button>
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


