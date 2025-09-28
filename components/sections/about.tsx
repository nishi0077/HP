"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MessageCircle, Target, Eye, Building, User, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import type { SiteData } from '@/lib/content'

interface AboutProps {
  about: SiteData['about']
}

export function About({ about }: AboutProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {about.title}
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* 左側: ミッション・ビジョン・連絡先 */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* ミッション */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  ミッション
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {about.mission}
                </p>
              </CardContent>
            </Card>

            {/* ビジョン */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  ビジョン
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {about.vision}
                </p>
              </CardContent>
            </Card>

            {/* 連絡先 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  連絡先
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <a href={about.contact.line} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    公式LINE
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* 右側: 会社概要・西浦について・強み */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* 会社概要 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  会社概要
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">{about.company.name}</h4>
                  <p className="text-muted-foreground">代表取締役 {about.company.representative}</p>
                </div>
              </CardContent>
            </Card>

            {/* 西浦について */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {about.company.representative}について
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {about.company.profile}
                </p>
              </CardContent>
            </Card>

            {/* 強み・差別化 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  強み・差別化
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {about.strengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {strength}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
