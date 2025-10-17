"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SparklesCore } from '@/components/ui/sparkles'
import { usePerformanceOptimizer } from '@/components/ui/performance-optimizer'
import Link from 'next/link'
import { Target, TrendingUp, Users, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import type { SiteData } from '@/lib/content'

interface ServicesProps {
  services: SiteData['services']
}

export function Services({ services }: ServicesProps) {
  const { particleDensity } = usePerformanceOptimizer();
  
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesservices"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={particleDensity}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      
      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 font-['Zen_Old_Mincho'] text-white">
            {services.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-['Zen_Old_Mincho']">
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
                <Card className="h-full flex flex-col bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-['Zen_Old_Mincho'] text-white">{service.name}</CardTitle>
                  </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  {service.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-white mt-2 shrink-0" />
                      <p className="text-sm text-white/80 font-['Zen_Old_Mincho']">{bullet}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild className="border-white/30 text-black bg-white hover:bg-white/80">
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


