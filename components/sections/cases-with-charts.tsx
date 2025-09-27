"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import type { SiteData } from '@/lib/content'

interface CasesWithChartsProps {
  cases: SiteData['cases']
}

const COLORS = ['#000000', '#404040', '#808080', '#a0a0a0', '#c0c0c0']

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
                      {/* リード数の改善 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">リード数改善</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={[
                            { name: '改善前', value: caseItem.metrics.leads_before },
                            { name: '改善後', value: caseItem.metrics.leads_after }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 50]} />
                            <Tooltip formatter={(value: number) => [`${value}件`, 'リード数']} />
                            <Bar dataKey="value" fill={COLORS[1]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* ROAS & 売上改善 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">ROAS & 売上改善</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={[
                            { name: '改善前', value: caseItem.metrics.revenue_before / 1000000, unit: '百万円' },
                            { name: '改善後', value: caseItem.metrics.revenue_after / 1000000, unit: '百万円' }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}百万円`} />
                            <Tooltip formatter={(value: number) => [`${value}百万円`, '売上']} />
                            <Bar dataKey="value" fill={COLORS[2]} />
                          </BarChart>
                        </ResponsiveContainer>
                        <div className="text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2">
                            ROAS: {(caseItem.metrics.roas / 100).toFixed(0)}倍
                          </Badge>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 太陽光のケース */}
                  {index === 1 && (
                    <>
                      {/* 業界平均 vs 実績比較 */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">業界平均 vs 実績比較</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={[
                            { 
                              name: 'CTR', 
                              業界平均: caseItem.metrics.ctr_industry, 
                              実績: caseItem.metrics.ctr_actual,
                              unit: '%'
                            },
                            { 
                              name: 'CPA', 
                              業界平均: caseItem.metrics.cpa_industry / 1000, 
                              実績: caseItem.metrics.cpa_actual / 1000,
                              unit: '千円'
                            },
                            { 
                              name: 'ROAS', 
                              業界平均: caseItem.metrics.roas_industry, 
                              実績: caseItem.metrics.roas_actual / 100,
                              unit: '倍'
                            }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip 
                              formatter={(value: number, name, props) => {
                                const unit = props.payload.unit;
                                if (unit === '千円') return [`${(value * 1000).toLocaleString()}円`, name];
                                if (unit === '倍') return [`${value.toFixed(0)}倍`, name];
                                return [`${value}%`, name];
                              }}
                            />
                            <Bar dataKey="業界平均" fill={COLORS[3]} />
                            <Bar dataKey="実績" fill={COLORS[1]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* 成果サマリー */}
                      <div className="space-y-6">
                        <h4 className="font-semibold text-lg mb-4">成果サマリー</h4>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-3xl font-bold text-gray-800">{caseItem.metrics.conversions}</div>
                            <div className="text-sm text-gray-600">成約数</div>
                          </div>
                          <div className="text-center p-4 bg-gray-100 rounded-lg">
                            <div className="text-3xl font-bold text-gray-800">{formatCurrency(caseItem.metrics.cost)}</div>
                            <div className="text-sm text-gray-600">総広告費</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2 mr-2">
                            CTR: {caseItem.metrics.ctr_actual}% (業界平均の{(caseItem.metrics.ctr_actual / caseItem.metrics.ctr_industry).toFixed(1)}倍)
                          </Badge>
                          <Badge variant="secondary" className="text-lg px-4 py-2">
                            ROAS: {(caseItem.metrics.roas_actual / 100).toFixed(0)}倍
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
