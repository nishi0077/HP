"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Monitor, Palette } from 'lucide-react'
import { motion } from 'framer-motion'
import type { SiteData } from '@/lib/content'

interface PortfolioProps {
  portfolio: SiteData['portfolio']
}

export function Portfolio({ portfolio }: PortfolioProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {portfolio.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {portfolio.description}
          </p>
        </motion.div>

        {portfolio.categories.map((category, categoryIndex) => (
          <motion.div 
            key={category.name}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              {category.name === 'Webサイト制作' ? (
                <Monitor className="h-6 w-6 text-primary" />
              ) : (
                <Palette className="h-6 w-6 text-primary" />
              )}
              <h3 className="text-2xl font-bold">{category.name}</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {category.works.map((work, workIndex) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: workIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{work.title}</CardTitle>
                          <Badge variant="secondary" className="mb-2">
                            {work.category}
                          </Badge>
                        </div>
                        {work.url && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={work.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{work.description}</p>
                      
                      {work.tech && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">技術・特徴</h4>
                          <div className="flex flex-wrap gap-1">
                            {work.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {work.deliverables && (
                        <div>
                          <h4 className="text-sm font-medium mb-2">提供内容</h4>
                          <div className="flex flex-wrap gap-1">
                            {work.deliverables.map((deliverable, delIndex) => (
                              <Badge key={delIndex} variant="outline" className="text-xs">
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
