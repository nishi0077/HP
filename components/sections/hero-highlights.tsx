"use client"

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { BeamsBackground } from '@/components/ui/beams-background'
import { motion } from 'motion/react'
import type { SiteData } from '@/lib/content'

interface HeroHighlightsProps {
  hero: SiteData['home']['hero']
}

export function HeroHighlights({ hero }: HeroHighlightsProps) {
  return (
    <BeamsBackground intensity="medium" className="pt-20 pb-4 lg:pt-32 lg:pb-6">
      <div className="container relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-8">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-white/80 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Fractional CMO Service ｜ 外部CMOという選択
              </span>
            </motion.div>

            <div className="space-y-6">
              <h1 
                className="text-4xl font-black leading-[1.15] tracking-[-0.01em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-7xl font-['Zen_Old_Mincho']" 
                dangerouslySetInnerHTML={{ __html: hero.heading }}
              />

              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              <p 
                className="mx-auto max-w-2xl text-lg text-white/85 sm:text-xl tracking-wide font-['Zen_Old_Mincho']"
                dangerouslySetInnerHTML={{ __html: hero.subheading }}
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {hero.primary_cta.href.startsWith('http') ? (
                <a href={hero.primary_cta.href} target="_blank" rel="noopener noreferrer">
                  <InteractiveHoverButton text={hero.primary_cta.label} className="w-52" hideDot />
                </a>
              ) : (
                <Link href={hero.primary_cta.href}>
                  <InteractiveHoverButton text={hero.primary_cta.label} className="w-52" hideDot />
                </Link>
              )}
              {hero.secondary_cta.href.startsWith('http') ? (
                <a href={hero.secondary_cta.href} target="_blank" rel="noopener noreferrer">
                  <InteractiveHoverButton text={hero.secondary_cta.label} className="w-52" hideDot />
                </a>
              ) : (
                <Link href={hero.secondary_cta.href}>
                  <InteractiveHoverButton text={hero.secondary_cta.label} className="w-52" hideDot />
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
