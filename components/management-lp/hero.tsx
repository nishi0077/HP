'use client'

import { useEffect } from 'react'
import { track } from '@/lib/tracking'
import { LineButton } from './line-button'

export function Hero() {
  useEffect(() => {
    // ページ閲覧トラッキング
    track('view_content', {
      content_name: 'FV閲覧',
      content_category: 'マネジメント講座LP',
    })
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--lp-primary))] via-[hsl(var(--lp-accent))] to-[hsl(var(--lp-primary-dark))] text-white">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* キャッチコピー */}
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium text-blue-100 tracking-wider">
              新任〜中堅管理職の方へ
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              部下が動かない理由、<br className="md:hidden" />
              <span className="inline-block mt-2 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                知っていますか？
              </span>
            </h1>
            <p className="text-lg md:text-2xl font-medium text-blue-50 leading-relaxed mt-6">
              20年の現場経験を体系化した<br className="md:hidden" />
              <span className="font-bold text-yellow-300">「7つのマネジメント核」</span>で、<br />
              チームが自走する未来を手に入れる
            </p>
          </div>

          {/* サブコピー */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
            <p className="text-base md:text-lg leading-relaxed text-blue-50">
              感覚でマネジメントしていませんか？<br />
              <span className="font-bold text-white">体系的に学ぶことで、成果が再現できる</span>ようになります。
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <LineButton 
              variant="primary"
              size="large"
              trackingLabel="FV_CTA"
            >
              無料特典を受け取る
            </LineButton>
            <p className="text-sm text-blue-100 mt-4">
              ※ LINE登録で「7つの核」解説資料をプレゼント
            </p>
          </div>

          {/* ベネフィット */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            {[
              { icon: '📊', text: '再現性のある\nマネジメント' },
              { icon: '🎯', text: '初月から変化を\n実感' },
              { icon: '💼', text: '実務で即使える\nノウハウ' },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-medium whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
