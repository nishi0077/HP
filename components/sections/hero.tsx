"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { BeamsBackground } from '@/components/ui/beams-background'
import { motion } from 'framer-motion'
import type { SiteData } from '@/lib/content'

interface HeroProps {
  hero: SiteData['home']['hero']
}

export function Hero({ hero }: HeroProps) {
  return (
    <BeamsBackground intensity="medium" className="py-20 lg:py-32">
      <div className="container relative z-10">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
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
      </div>
    </BeamsBackground>
  )
}


