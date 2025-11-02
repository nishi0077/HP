"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { motion } from 'motion/react'
import Image from 'next/image'
import type { SiteData } from '@/lib/content'

interface CasesWithChartsProps {
  cases: SiteData['cases']
}

const COLORS = ['#6b7280', '#3b82f6', '#808080', '#a0a0a0', '#c0c0c0'] // グレー、ブルー、その他

export function CasesWithCharts({ cases }: CasesWithChartsProps) {
  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `${(value / 10000000).toFixed(1)}千万円`
    } else if (value >= 10000) {
      return `${(value / 10000).toFixed(0)}万円`
    } else {
      return `${value.toLocaleString()}円`
    }
  }

  const formatNumber = (value: number) => {
    return value.toLocaleString()
  }

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {cases.title}
          </h2>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {cases.items.map((caseItem, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <CardTitle className="text-2xl">{caseItem.title}</CardTitle>
                <p className="text-primary font-semibold text-lg">{caseItem.kpi}</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className={`grid gap-8 ${index === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 xl:grid-cols-4'}`}>
                  {/* 工務店のケース */}
                  {index === 0 && (
                    <>
                      {/* リード数の改善 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">リード数改善</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={[
                            { name: '改善前', value: caseItem.metrics.leads_before, fill: COLORS[0] },
                            { name: '改善後', value: caseItem.metrics.leads_after, fill: COLORS[1] }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 50]} />
                            <Tooltip formatter={(value: number) => [`${value}件`, 'リード数']} />
                            <Bar dataKey="value" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* ROAS & 売上改善 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">ROAS & 売上改善</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={[
                            { name: '改善前', value: 0, fill: COLORS[0] },
                            { name: '改善後', value: 80, fill: COLORS[1] }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 200]} ticks={[0, 50, 100, 150, 200]} tickFormatter={(value) => `${value}`} />
                            <Tooltip formatter={(value: number) => [`${value}百万円`, '売上']} />
                            <Bar dataKey="value" />
                          </BarChart>
                        </ResponsiveContainer>
                        <div className="text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2">
                            ROAS: 1,600%
                          </Badge>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 太陽光のケース */}
                  {index === 1 && (
                    <>
                      {/* CTR比較 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">CTR比較</h4>
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={[
                            { name: '業界平均', value: caseItem.metrics.ctr_industry, fill: COLORS[0] },
                            { name: '実績', value: caseItem.metrics.ctr_actual, fill: COLORS[1] }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value: number) => [`${value}%`, 'CTR']} />
                            <Bar dataKey="value" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* CPA比較 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">CPA比較</h4>
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={[
                            { name: '業界平均', value: caseItem.metrics.cpa_industry, fill: COLORS[0] },
                            { name: '実績', value: caseItem.metrics.cpa_actual, fill: COLORS[1] }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value: number) => [`${value.toLocaleString()}円`, 'CPA']} />
                            <Bar dataKey="value" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* ROAS比較 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">ROAS比較</h4>
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={[
                            { name: '業界平均', value: caseItem.metrics.roas_industry, fill: COLORS[0] },
                            { name: '実績', value: caseItem.metrics.roas_actual, fill: COLORS[1] }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value: number) => [`${value}%`, 'ROAS']} />
                            <Bar dataKey="value" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* 成果サマリー */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">成果サマリー</h4>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-3xl font-bold text-gray-800">{formatCurrency(caseItem.metrics.cost)}</div>
                            <div className="text-sm text-gray-600">総広告費</div>
                          </div>
                          <div className="text-center p-4 bg-gray-100 rounded-lg">
                            <div className="text-3xl font-bold text-gray-800">{formatCurrency(caseItem.metrics.gross_profit)}</div>
                            <div className="text-sm text-gray-600">粗利益</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2 mr-2">
                            成約4件
                          </Badge>
                          <Badge variant="secondary" className="text-lg px-4 py-2">
                            ROI: {caseItem.metrics.roi}%
                          </Badge>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* 改善レバー */}
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-semibold mb-4">改善レバー</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.levers.map((lever, leverIndex) => (
                      <Badge key={leverIndex} variant="outline" className="text-sm">
                        {lever}
                      </Badge>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
