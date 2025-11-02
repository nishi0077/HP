"use client"

import { motion } from 'motion/react'

interface PageHeroProps {
  title: string
  description: string
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange' | 'teal'
}

const colorSchemes = {
  blue: 'bg-gradient-to-br from-black via-slate-900 to-black',
  green: 'bg-gradient-to-br from-black via-slate-900 to-black', 
  purple: 'bg-gradient-to-br from-black via-slate-900 to-black',
  orange: 'bg-gradient-to-br from-black via-slate-900 to-black',
  teal: 'bg-gradient-to-br from-black via-slate-900 to-black'
}

const overlaySchemes = {
  blue: 'from-blue-900/40 via-slate-800/60 to-slate-900/80',
  green: 'from-emerald-900/40 via-slate-800/60 to-slate-900/80',
  purple: 'from-purple-900/40 via-slate-800/60 to-slate-900/80', 
  orange: 'from-orange-900/40 via-slate-800/60 to-slate-900/80',
  teal: 'from-teal-900/40 via-slate-800/60 to-slate-900/80'
}

const gradientSchemes = {
  blue: 'from-blue-600/20 via-transparent to-transparent',
  green: 'from-emerald-600/20 via-transparent to-transparent',
  purple: 'from-purple-600/20 via-transparent to-transparent',
  orange: 'from-orange-600/20 via-transparent to-transparent', 
  teal: 'from-teal-600/20 via-transparent to-transparent'
}

export function PageHero({ title, description, colorScheme = 'blue' }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${colorSchemes[colorScheme]} py-20 lg:py-32`}>
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${overlaySchemes[colorScheme]}`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-800/30"></div>
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${gradientSchemes[colorScheme]}`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl">
              {description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
        </div>
      </div>
    </section>
  )
}


