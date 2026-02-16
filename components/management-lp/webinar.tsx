'use client'

import { trackWebinarRegistration } from '@/lib/tracking'

export function Webinar() {
  const handleWebinarClick = () => {
    trackWebinarRegistration()
    // ウェビナー申込ページへ遷移（実際のURLに差し替え）
    const webinarUrl = process.env.NEXT_PUBLIC_WEBINAR_URL || '#'
    window.location.href = webinarUrl
  }

  const features = [
    {
      icon: '🎯',
      title: '7つの核の全体像',
      description: '各項目の関係性と実践の順序を理解',
    },
    {
      icon: '📈',
      title: '初月で変化を出す方法',
      description: 'すぐに実践できる具体的なステップ',
    },
    {
      icon: '💬',
      title: 'Q&Aセッション',
      description: 'あなたの悩みに直接お答えします',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--lp-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-[hsl(var(--lp-accent))] mb-3">
              さらに深く学びたい方へ
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[hsl(var(--lp-text))] leading-tight mb-6">
              無料ウェビナーに<br className="md:hidden" />ご招待します
            </h2>
            <p className="text-base md:text-lg text-[hsl(var(--lp-text-light))] leading-relaxed">
              7つのマネジメント核を体系的に学べる90分
            </p>
          </div>

          {/* ウェビナー内容 */}
          <div className="bg-gradient-to-br from-[hsl(var(--lp-primary-light))] to-blue-50 rounded-2xl p-8 md:p-10 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-base md:text-lg font-bold text-[hsl(var(--lp-text))] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--lp-text-light))]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 開催情報 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--lp-accent))] mb-2">📅 開催日時</p>
                  <p className="text-base font-bold text-[hsl(var(--lp-text))]">
                    毎週火曜 20:00〜21:30<br />
                    毎週土曜 10:00〜11:30
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--lp-accent))] mb-2">💻 参加方法</p>
                  <p className="text-base font-bold text-[hsl(var(--lp-text))]">
                    オンライン（Zoom）<br />
                    顔出し不要・途中退出OK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={handleWebinarClick}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[hsl(var(--lp-primary))] to-[hsl(var(--lp-accent))] hover:opacity-90 text-white font-bold px-10 py-5 rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
            >
              ウェビナーに参加する
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-sm text-[hsl(var(--lp-text-light))] mt-4">
              ※ 参加費無料・先着30名様
            </p>
          </div>

          {/* 補足 */}
          <div className="mt-8 text-center text-sm text-[hsl(var(--lp-text-light))]">
            <p>
              LINE登録いただいた方には、ウェビナーの録画も配信します。<br />
              当日参加できなくても安心です。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
