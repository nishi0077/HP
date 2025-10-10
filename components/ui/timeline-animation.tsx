'use client'

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { RefObject } from "react"

interface TimelineContentProps {
  children: React.ReactNode
  animationNum: number
  timelineRef: RefObject<HTMLElement>
  customVariants?: Variants
  className?: string
  as?: keyof typeof motion
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
  as = "div",
}: TimelineContentProps) {
  const MotionComponent = motion[as] as any

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <MotionComponent
      custom={animationNum}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={customVariants || defaultVariants}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  )
}

