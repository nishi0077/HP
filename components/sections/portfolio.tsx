"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Monitor, Palette, BarChart3, TrendingUp, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { SiteData } from '@/lib/content'

interface PortfolioProps {
  portfolio: SiteData['portfolio']
}

export function Portfolio({ portfolio }: PortfolioProps) {
  // デバッグ: ポートフォリオデータの確認
  console.log('Portfolio data:', portfolio);
  
  // 各作品の画像パスをデバッグ
  portfolio.categories.forEach(category => {
    console.log(`Category: ${category.name}`);
    category.works.forEach(work => {
      console.log(`Work: ${work.title}`);
      console.log(`Image path: ${work.image}`);
      if (work.image && typeof window !== 'undefined') {
        console.log(`Full URL: ${window.location.origin}${work.image}`);
      }
    });
  });
  
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
              {category.name === 'Webマーケティング実績事例' ? (
                <Monitor className="h-6 w-6 text-primary" />
              ) : category.name === '広告運用実績' ? (
                <TrendingUp className="h-6 w-6 text-primary" />
              ) : category.name === 'SNS運用実績' ? (
                <Users className="h-6 w-6 text-primary" />
              ) : category.name === '制作クリエイティブ' ? (
                <Palette className="h-6 w-6 text-primary" />
              ) : (
                <BarChart3 className="h-6 w-6 text-primary" />
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
                    {/* 画像表示をカテゴリーごとに制御 */}
                    {(category.name === 'Webマーケティング実績事例' || category.name === '広告運用実績' || category.name === 'SNS運用実績' || category.name === '制作クリエイティブ') && work.image ? (
                      <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="w-full h-full">
                          <Image
                            src={work.image}
                            alt={`${work.title}の制作事例画像`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={(e) => {
                              console.error('画像読み込みエラー:', {
                                パス: work.image,
                                タイトル: work.title,
                                試行URL: e.currentTarget.src
                              });
                              // フォールバック画像に切り替え
                              e.currentTarget.src = 'https://via.placeholder.com/400x240/e5e7eb/9ca3af?text=No+Image';
                            }}
                            onLoad={() => {
                              console.log('画像読み込み成功:', work.title);
                            }}
                          />
                        </div>
                      </div>
                    ) : (category.name === 'Webマーケティング実績事例' || category.name === '広告運用実績' || category.name === 'SNS運用実績' || category.name === '制作クリエイティブ') && work.url ? (
                      <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="w-full h-full">
                          <Image
                            src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(work.url)}?w=800&h=600`}
                            alt={`${work.title}のWebサイトスクリーンショット`}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                            priority={false}
                            onError={(e) => {
                              console.error('Screenshot load error:', work.url);
                            }}
                            onLoad={() => {
                              console.log('Screenshot loaded:', work.url);
                            }}
                          />
                        </div>
                      </div>
                    ) : (category.name === 'Webマーケティング実績事例' || category.name === '広告運用実績' || category.name === 'SNS運用実績' || category.name === '制作クリエイティブ') ? (
                      <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <div className="text-gray-500 text-center">
                            <div className="text-2xl mb-2">■</div>
                            <div className="text-sm">{work.title}</div>
                          </div>
                        </div>
                      </div>
                    ) : null}
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
                      <div className="text-muted-foreground mb-4 whitespace-pre-line space-y-2">
                        {work.description.split('\n').map((line, index) => {
                          // Markdownライクなスタイリング
                          if (line.startsWith('**') && line.endsWith('**')) {
                            return <div key={index} className="font-bold text-foreground">{line.slice(2, -2)}</div>
                          }
                          if (line.startsWith('• ')) {
                            return <div key={index} className="ml-4">{line}</div>
                          }
                          if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
                            return <div key={index} className="ml-4 font-medium">{line}</div>
                          }
                          return line ? <div key={index}>{line}</div> : <div key={index} className="h-2"></div>
                        })}
                      </div>
                      
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
