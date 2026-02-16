import { LineButton } from './line-button'

export function LineBenefits() {
  const benefits = [
    {
      icon: '📄',
      title: '7つのマネジメント核 解説資料',
      description: '各項目の詳細と実践ステップをまとめたPDF資料（30ページ）',
    },
    {
      icon: '📋',
      title: 'セルフチェックシート',
      description: '現在のマネジメント力を可視化。改善ポイントが明確になります',
    },
    {
      icon: '🎥',
      title: '限定ミニ講義動画',
      description: '「目標設定の核」を15分で学べる実践動画',
    },
    {
      icon: '💡',
      title: '毎週の実践ヒント配信',
      description: 'すぐに使えるマネジメントTipsを週1回お届け',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--lp-primary))] via-[hsl(var(--lp-accent))] to-[hsl(var(--lp-primary-dark))] text-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base font-semibold text-yellow-300 mb-3">
              LINE登録で今すぐ受け取れる
            </p>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
              無料特典の内容
            </h2>
            <p className="text-base md:text-lg text-blue-100 leading-relaxed">
              登録後すぐに、実践に使える教材をお届けします
            </p>
          </div>

          {/* 特典リスト */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-blue-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <LineButton 
              variant="secondary"
              size="large"
              trackingLabel="Benefits_CTA"
            >
              無料特典を今すぐ受け取る
            </LineButton>
            <p className="text-sm text-blue-100 mt-4">
              ※ 登録後すぐに自動配信されます
            </p>
          </div>

          {/* 追加メッセージ */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
            <p className="text-center text-sm md:text-base leading-relaxed">
              さらに、<span className="font-bold text-yellow-300">無料ウェビナー</span>にもご招待します。<br />
              7つの核の概要と、初月で変化を実感するためのステップを詳しく解説します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
