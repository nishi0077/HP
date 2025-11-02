"use client"

import { SparklesCore } from '@/components/ui/sparkles'
import { usePerformanceOptimizer } from '@/components/ui/performance-optimizer'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import { motion } from 'motion/react'
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

        
        {/* Feature Section with Hover Effects */}
        <div className="mt-20">
          <FeaturesSectionWithHoverEffects />
        </div>
      </div>
    </section>
  )
}
