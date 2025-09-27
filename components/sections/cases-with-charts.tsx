"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import type { SiteData } from '@/lib/content'

interface CasesWithChartsProps {
  cases: SiteData['cases']
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

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
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* 工務店のケース */}
                  {index === 0 && (
                    <>
                      {/* ROI と成果指標 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">ROI & パフォーマンス</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={[
                            { name: '広告費', value: caseItem.metrics.cost, color: COLORS[0] },
                            { name: '売上', value: caseItem.metrics.revenue, color: COLORS[1] },
                            { name: 'ROI', value: caseItem.metrics.roi, suffix: '%', color: COLORS[2] }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={formatCurrency} />
                            <Tooltip 
                              formatter={(value: number, name) => [
                                name === 'ROI' ? `${value}%` : formatCurrency(value),
                                name
                              ]}
                            />
                            <Bar dataKey="value" fill={COLORS[1]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* リード成約率 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">リード成約率</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={[
                                { name: '成約', value: caseItem.metrics.conversions, color: COLORS[1] },
                                { name: '未成約', value: caseItem.metrics.leads - caseItem.metrics.conversions, color: COLORS[3] }
                              ]}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              dataKey="value"
                              label={({ name, value, percent }) => `${name}: ${value}件 (${(percent * 100).toFixed(1)}%)`}
                            >
                              {[
                                { name: '成約', value: caseItem.metrics.conversions, color: COLORS[1] },
                                { name: '未成約', value: caseItem.metrics.leads - caseItem.metrics.conversions, color: COLORS[3] }
                              ].map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2">
                            成約率: {((caseItem.metrics.conversions / caseItem.metrics.leads) * 100).toFixed(1)}%
                          </Badge>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 太陽光のケース */}
                  {index === 1 && (
                    <>
                      {/* パフォーマンス指標 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">パフォーマンス指標</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={[
                            { name: 'CTR', value: caseItem.metrics.ctr, unit: '%' },
                            { name: 'CV率', value: caseItem.metrics.conversion_rate, unit: '%' },
                            { name: 'CPA', value: caseItem.metrics.cpa / 1000, unit: '千円' }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip 
                              formatter={(value: number, name) => {
                                if (name === 'CPA') return [`${(value * 1000).toLocaleString()}円`, name]
                                return [`${value}%`, name]
                              }}
                            />
                            <Bar dataKey="value" fill={COLORS[2]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* リード数と費用効率 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">リード数と費用効率</h4>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-3xl font-bold text-blue-600">{caseItem.metrics.leads}</div>
                            <div className="text-sm text-blue-600">リード数</div>
                          </div>
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-3xl font-bold text-green-600">{formatCurrency(caseItem.metrics.cost)}</div>
                            <div className="text-sm text-green-600">総広告費</div>
                          </div>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                          <LineChart data={[
                            { month: '開始前', cpa: 8000, leads: 15 },
                            { month: '1ヶ月', cpa: 6500, leads: 22 },
                            { month: '2ヶ月', cpa: 4200, leads: 32 },
                            { month: '3ヶ月', cpa: 3200, leads: 38 }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis yAxisId="left" orientation="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Line yAxisId="left" type="monotone" dataKey="cpa" stroke={COLORS[0]} strokeWidth={3} name="CPA (円)" />
                            <Line yAxisId="right" type="monotone" dataKey="leads" stroke={COLORS[1]} strokeWidth={3} name="リード数" />
                          </LineChart>
                        </ResponsiveContainer>
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
