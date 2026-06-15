"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BeamsBackground } from '@/components/ui/beams-background'
import { ExternalLink, Monitor, Palette, BarChart3, TrendingUp, Users } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import type { SiteData } from '@/lib/content'

interface PortfolioProps {
  portfolio: SiteData['portfolio']
}

type WorkMetric = { value: string; label: string }

function MetricsCards({ metrics }: { metrics: WorkMetric[] }) {
  return (
    <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {metrics.map((m, i) => (
        <div
          key={`${m.label}-${i}`}
          className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-3 text-center"
        >
          <div className="text-xl font-extrabold leading-tight text-emerald-600 sm:text-2xl">
            {m.value}
          </div>
          <div className="mt-1 text-[11px] font-medium leading-snug text-muted-foreground">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Portfolio({ portfolio }: PortfolioProps) {
  return (
    <section className="py-20 bg-muted/30">
      {/* Beams背景を適用した実績セクション */}
      <BeamsBackground intensity="medium" className="min-h-screen">
        <div className="container relative z-10 py-20">

        {portfolio.categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              {category.name === 'Webマーケティング実績事例' ? (
                <Monitor className="h-6 w-6 text-white" />
              ) : category.name === '広告運用実績' ? (
                <TrendingUp className="h-6 w-6 text-white" />
              ) : category.name === 'SNS運用実績' ? (
                <Users className="h-6 w-6 text-primary" />
              ) : category.name === '制作クリエイティブ' ? (
                <Palette className="h-6 w-6 text-white" />
              ) : (
                <BarChart3 className="h-6 w-6 text-primary" />
              )}
              <h3 className="text-2xl font-bold text-white">{category.name}</h3>
            </div>

            {/* 広告運用実績は左右レイアウト */}
            {(category.name === '広告運用実績') ? (
              <div className="space-y-8">
                {category.works.map((work, workIndex) => (
                  <motion.div
                    key={work.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: workIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row">
                        {/* 左側: 画像 */}
                        <div className="lg:w-1/2">
                          {work.image ? (
                            <div className={`relative w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 ${work.title === '銀座Xiaoma' ? 'h-[400px]' : 'h-[800px]'}`}>
                              <Image
                                src={work.image}
                                alt={`${work.title}の制作事例画像`}
                                fill
                                className={work.title === '銀座Xiaoma' ? 'object-contain' : 'object-cover'}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                          ) : (
                            <div className="relative h-[800px] w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <div className="text-gray-500 text-center">
                                  <div className="text-2xl mb-2">■</div>
                                  <div className="text-sm">{work.title}</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* 右側: コンテンツ */}
                        <div className="lg:w-1/2 p-6">
                          <div className="flex items-start justify-between mb-4">
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
                                className="mb-4 bg-primary text-primary-foreground border-2 border-primary font-medium px-3 py-1"
                              >
                                {work.category}
                              </Badge>
                            </div>
                          </div>
                          
                          {work.metrics && work.metrics.length > 0 && (
                            <MetricsCards metrics={work.metrics} />
                          )}

                          <div className="text-muted-foreground mb-4 whitespace-pre-line space-y-2">
                            {work.description.split('\n').map((line, index) => {
                              if (line.startsWith('**') && line.endsWith('**')) {
                                const content = line.slice(2, -2);
                                // 改善率の数字（+で始まる数字）を緑色にする
                                if (content.includes('+') && (content.includes('%') || content.includes('改善'))) {
                                  return <div key={index} className="font-bold text-green-500">{content}</div>
                                }
                                // 売上やフォロワー数の数字を緑色にする
                                if (content.includes('万円の売上') || content.includes('フォロワー') || content.includes('万の売上')) {
                                  return <div key={index} className="font-bold text-green-500">{content}</div>
                                }
                                return <div key={index} className="font-bold text-black">{content}</div>
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
                            <div className="mb-4">
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
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
                
                {/* お問い合わせボタン - 広告運用実績（地方工務店SNS運用実績）の下に配置 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex justify-center mt-12"
                >
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold px-8 py-3"
                  >
                    <Link href="/contact">
                      無料相談を申し込む
                    </Link>
                  </Button>
                </motion.div>
              </div>
            ) : (
              /* その他のカテゴリーはグリッドレイアウト */
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {category.works.map((work, workIndex) => {
                  // カテゴリーごとに画像の高さを設定
                  const imageHeight = category.name === 'Webマーケティング実績事例' 
                    ? 'h-[240px]' 
                    : work.title === 'ゴルフレッスンクリエイティブ'
                      ? 'h-[640px]'
                      : work.title === '太陽光・蓄電池クリエイティブ2'
                        ? 'h-[640px]'
                        : 'h-[800px]';
                  
                  return (
                  <motion.div
                    key={work.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: workIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      {/* 画像表示 */}
                      {work.image ? (
                        <div className={`relative ${imageHeight} w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200`}>
                          <div className="w-full h-full">
                            <Image
                              src={work.image}
                              alt={`${work.title}の制作事例画像`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      ) : work.url ? (
                        <div className={`relative ${imageHeight} w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200`}>
                          <div className="w-full h-full">
                            <Image
                              src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(work.url)}?w=1200&h=720`}
                              alt={`${work.title}のWebサイトスクリーンショット`}
                              width={1200}
                              height={720}
                              className="w-full h-full object-cover"
                              priority={false}
                              quality={100}
                              unoptimized={false}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className={`relative ${imageHeight} w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200`}>
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <div className="text-gray-500 text-center">
                              <div className="text-2xl mb-2">■</div>
                              <div className="text-sm">{work.title}</div>
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
                            {category.name !== '制作クリエイティブ' && (
                              <Badge 
                                className="mb-2 bg-primary text-primary-foreground border-2 border-primary font-medium px-3 py-1"
                              >
                                {work.category}
                              </Badge>
                            )}
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
                        {work.metrics && work.metrics.length > 0 && (
                          <MetricsCards metrics={work.metrics} />
                        )}
                        <div className="text-muted-foreground mb-4 whitespace-pre-line space-y-2">
                          {work.description.split('\n').map((line, index) => {
                            if (line.startsWith('**') && line.endsWith('**')) {
                              const content = line.slice(2, -2);
                              // 改善率の数字（+で始まる数字）を緑色にする
                              if (content.includes('+') && (content.includes('%') || content.includes('改善'))) {
                                return <div key={index} className="font-bold text-green-500">{content}</div>
                              }
                              // 売上やフォロワー数の数字を緑色にする
                              if (content.includes('万円の売上') || content.includes('フォロワー') || content.includes('万の売上')) {
                                return <div key={index} className="font-bold text-green-500">{content}</div>
                              }
                              return <div key={index} className="font-bold text-black">{content}</div>
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
                        
                        {category.name !== '制作クリエイティブ' && work.tech && (
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

                        {category.name !== '制作クリエイティブ' && work.deliverables && (
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
                  );
                })}
              </div>
            )}
          </motion.div>
        ))}
        
        </div>
      </BeamsBackground>
    </section>
  )
}
