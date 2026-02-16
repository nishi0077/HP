'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Solution() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const cores = [
    {
      number: '01',
      title: '目標設定の核',
      subtitle: 'チームが迷わない目標の立て方',
      description: '曖昧な目標では、チームは動けません。SMARTの法則を超えた、実践的な目標設定の技術を学びます。',
      icon: '🎯',
    },
    {
      number: '02',
      title: '優先順位の核',
      subtitle: '時間を生み出す判断力',
      description: '重要度と緊急度のマトリクスを使いこなし、チーム全体の生産性を最大化する方法を習得します。',
      icon: '⚡',
    },
    {
      number: '03',
      title: 'コミュニケーションの核',
      subtitle: '部下が動く伝え方',
      description: '指示・質問・フィードバックの3つの型を使い分け、部下の自発性を引き出すコミュニケーションを実現します。',
      icon: '💬',
    },
    {
      number: '04',
      title: '育成の核',
      subtitle: '成長を加速させる仕組み',
      description: 'OJTに頼らない、再現性のある育成プログラムを構築。部下の成長速度を2倍にする方法を学びます。',
      icon: '🌱',
    },
    {
      number: '05',
      title: 'モチベーションの核',
      subtitle: 'やる気を引き出す科学',
      description: '内発的動機づけと外発的動機づけを使い分け、チーム全体のエネルギーを高める技術を習得します。',
      icon: '🔥',
    },
    {
      number: '06',
      title: '問題解決の核',
      subtitle: '課題を確実に潰す思考法',
      description: 'ロジックツリーとPDCAを組み合わせ、どんな問題も構造的に解決できるフレームワークを身につけます。',
      icon: '🔍',
    },
    {
      number: '07',
      title: 'リーダーシップの核',
      subtitle: '信頼されるリーダーの在り方',
      description: '権限ではなく信頼で人を動かす。自己認識とビジョン設定で、真のリーダーシップを確立します。',
      icon: '👑',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--lp-bg-secondary))]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base font-semibold text-[hsl(var(--lp-accent))] mb-3">
              原因は「体系的に学んでいない」こと
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[hsl(var(--lp-text))] leading-tight mb-6">
              <span className="text-[hsl(var(--lp-primary))]">7つのマネジメント核</span>で<br className="md:hidden" />
              すべてが変わる
            </h2>
            <p className="text-base md:text-lg text-[hsl(var(--lp-text-light))] leading-relaxed">
              20年の現場経験を体系化。<br className="md:hidden" />感覚ではなく<span className="font-bold text-[hsl(var(--lp-text))]">構造</span>で学ぶから、<br />
              誰でも再現できます。
            </p>
          </div>

          {/* 7つの核 */}
          <div className="space-y-4">
            {cores.map((core, index) => (
              <div
                key={index}
                className={cn(
                  'bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-md',
                  activeIndex === index && 'ring-2 ring-[hsl(var(--lp-primary))] shadow-lg'
                )}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* アイコン */}
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[hsl(var(--lp-primary))] to-[hsl(var(--lp-accent))] rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-lg">
                      {core.icon}
                    </div>

                    {/* コンテンツ */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-[hsl(var(--lp-accent))]">
                          {core.number}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--lp-text))]">
                          {core.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base font-medium text-[hsl(var(--lp-primary))] mb-2">
                        {core.subtitle}
                      </p>
                      
                      {/* 展開アイコン */}
                      <div className="flex items-center gap-2 text-xs md:text-sm text-[hsl(var(--lp-text-light))]">
                        <span>詳細を見る</span>
                        <svg 
                          className={cn(
                            'w-4 h-4 transition-transform',
                            activeIndex === index && 'rotate-180'
                          )}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* 詳細説明（展開時） */}
                  {activeIndex === index && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
                        {core.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 補足メッセージ */}
          <div className="mt-12 text-center bg-gradient-to-r from-[hsl(var(--lp-primary-light))] to-blue-50 rounded-2xl p-6 md:p-8">
            <p className="text-base md:text-lg font-bold text-[hsl(var(--lp-text))] mb-3">
              この7つの核を習得すれば
            </p>
            <p className="text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
              感覚に頼らず、<span className="font-bold text-[hsl(var(--lp-primary))]">構造的に</span>チームをマネジメントできるようになります。<br />
              それが、<span className="font-bold text-[hsl(var(--lp-primary))]">再現性</span>を生み出します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
