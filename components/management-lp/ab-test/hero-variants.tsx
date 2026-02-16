'use client'

import { useEffect } from 'react'
import { track } from '@/lib/tracking'
import { LineButton } from '../line-button'

/**
 * ABテスト用 FVバリエーション
 * URLパラメータ ?fv=A|B|C で切り替え
 */

interface HeroVariantProps {
  variant: 'A' | 'B' | 'C'
}

export function HeroVariantA() {
  useEffect(() => {
    track('view_content', {
      content_name: 'FV閲覧_A',
      content_category: 'ABテスト',
    })
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--lp-primary))] via-[hsl(var(--lp-accent))] to-[hsl(var(--lp-primary-dark))] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
            <p className="text-base md:text-lg leading-relaxed text-blue-50">
              感覚でマネジメントしていませんか？<br />
              <span className="font-bold text-white">体系的に学ぶことで、成果が再現できる</span>ようになります。
            </p>
          </div>

          <div className="pt-6">
            <LineButton 
              variant="primary"
              size="large"
              trackingLabel="FV_CTA_A"
            >
              無料特典を受け取る
            </LineButton>
            <p className="text-sm text-blue-100 mt-4">
              ※ LINE登録で「7つの核」解説資料をプレゼント
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroVariantB() {
  useEffect(() => {
    track('view_content', {
      content_name: 'FV閲覧_B',
      content_category: 'ABテスト',
    })
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--lp-primary))] via-[hsl(var(--lp-accent))] to-[hsl(var(--lp-primary-dark))] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium text-blue-100 tracking-wider">
              新任〜中堅管理職の方へ
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                7つの核
              </span>で、<br />
              チームが自走する
            </h1>
            <p className="text-lg md:text-2xl font-medium text-blue-50 leading-relaxed mt-6">
              感覚ではなく<span className="font-bold text-yellow-300">「構造」</span>で学ぶから、<br />
              誰でも再現できるマネジメントが身につきます
            </p>
          </div>

          <div className="pt-6">
            <LineButton 
              variant="primary"
              size="large"
              trackingLabel="FV_CTA_B"
            >
              7つの核を知る
            </LineButton>
            <p className="text-sm text-blue-100 mt-4">
              ※ LINE登録で詳細資料をプレゼント
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroVariantC() {
  useEffect(() => {
    track('view_content', {
      content_name: 'FV閲覧_C',
      content_category: 'ABテスト',
    })
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--lp-primary))] via-[hsl(var(--lp-accent))] to-[hsl(var(--lp-primary-dark))] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium text-blue-100 tracking-wider">
              新任〜中堅管理職の方へ
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                20年の現場
              </span>が、<br />
              298,000円に凝縮
            </h1>
            <p className="text-lg md:text-2xl font-medium text-blue-50 leading-relaxed mt-6">
              上場企業で実証済みの<span className="font-bold text-yellow-300">7つのマネジメント核</span>を<br />
              体系的に学べる実践講座
            </p>
          </div>

          <div className="pt-6">
            <LineButton 
              variant="primary"
              size="large"
              trackingLabel="FV_CTA_C"
            >
              今すぐLINEで学ぶ
            </LineButton>
            <p className="text-sm text-blue-100 mt-4">
              ※ 無料特典で講座内容を先行公開
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
