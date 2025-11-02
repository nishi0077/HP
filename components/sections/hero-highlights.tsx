"use client"

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { BeamsBackground } from '@/components/ui/beams-background'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Workflow, DollarSign, BarChart3 } from 'lucide-react'
import { motion } from 'motion/react'
import type { SiteData } from '@/lib/content'

interface HeroHighlightsProps {
  hero: SiteData['home']['hero']
  highlights: SiteData['home']['highlights']
}

export function HeroHighlights({ hero, highlights }: HeroHighlightsProps) {
  return (
    <BeamsBackground intensity="medium" className="py-20 lg:py-32">
      <div className="container relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="mx-auto max-w-4xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h1 
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-['Zen_Old_Mincho']" 
              dangerouslySetInnerHTML={{ __html: hero.heading }}
            />
            
            <p 
              className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl font-['Zen_Old_Mincho']"
              dangerouslySetInnerHTML={{ __html: hero.subheading }}
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {hero.primary_cta.href.startsWith('http') ? (
                <a href={hero.primary_cta.href} target="_blank" rel="noopener noreferrer">
                  <InteractiveHoverButton text={hero.primary_cta.label} className="w-48" />
                </a>
              ) : (
                <Link href={hero.primary_cta.href}>
                  <InteractiveHoverButton text={hero.primary_cta.label} className="w-48" />
                </Link>
              )}
              {hero.secondary_cta.href.startsWith('http') ? (
                <a href={hero.secondary_cta.href} target="_blank" rel="noopener noreferrer">
                  <InteractiveHoverButton text={hero.secondary_cta.label} className="w-48" />
                </a>
              ) : (
                <Link href={hero.secondary_cta.href}>
                  <InteractiveHoverButton text={hero.secondary_cta.label} className="w-48" />
                </Link>
              )}
            </div>

            {hero.trust_badges.length > 0 && (
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {hero.trust_badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-['Zen_Old_Mincho'] text-white mb-16">
            {highlights.title}
          </h2>

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
                  <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-primary/20">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-['Zen_Old_Mincho'] text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 font-['Zen_Old_Mincho']">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </BeamsBackground>
  )
}
