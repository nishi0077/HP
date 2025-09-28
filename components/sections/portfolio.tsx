"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Monitor, Palette } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
                    {(work.image || work.url) && (
                      <div className="relative h-56 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200">
                        {work.image ? (
                          <Image
                            src={work.image}
                            alt={`${work.title}のWebサイトスクリーンショット`}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover transition-opacity duration-300 image-render-crisp"
                            quality={95}
                            priority={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={(e) => {
                              console.log('Image load error:', work.image);
                              const target = e.currentTarget as HTMLImageElement;
                              target.src = `https://via.placeholder.com/800x600/e5e7eb/6b7280?text=${encodeURIComponent(work.title.substring(0, 20))}`
                            }}
                            onLoad={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.opacity = '1';
                            }}
                            style={{ opacity: 0 }}
                          />
                        ) : (
                          <Image
                            src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(work.url!)}?w=800&h=600`}
                            alt={`${work.title}のWebサイトスクリーンショット`}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover transition-opacity duration-300 image-render-crisp"
                            quality={95}
                            priority={false}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.src = `https://via.placeholder.com/800x600/e5e7eb/6b7280?text=${encodeURIComponent(work.title.substring(0, 20))}`
                            }}
                            onLoad={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.opacity = '1';
                            }}
                            style={{ opacity: 0 }}
                          />
                        )}
                        {/* ローディングアニメーション */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                          <div className="animate-pulse">
                            <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl">{work.title}</CardTitle>
                            {work.subtitle && (
                              <Badge variant="outline" className="text-xs">
                                {work.subtitle}
                              </Badge>
                            )}
                          </div>
                          <Badge 
                            className="mb-2 bg-primary text-primary-foreground border-2 border-primary font-medium px-3 py-1"
                          >
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
                      <p className="text-muted-foreground mb-4 whitespace-pre-line">{work.description}</p>
                      
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

                      {work.url && (
                        <div className="mt-4 pt-4 border-t">
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <a href={work.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              会社HPはこちら
                            </a>
                          </Button>
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
