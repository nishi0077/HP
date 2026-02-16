import { LineButton } from './line-button'

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--lp-primary))] via-[hsl(var(--lp-accent))] to-[hsl(var(--lp-primary-dark))] text-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* メインメッセージ */}
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              チームが自走する未来を、<br />
              <span className="text-yellow-300">今日から</span>始めませんか？
            </h2>
            <p className="text-base md:text-lg text-blue-100 leading-relaxed">
              7つのマネジメント核を学べば、<br className="md:hidden" />
              あなたのマネジメントは確実に変わります。<br />
              <span className="font-bold text-white">行動するのは、今この瞬間です。</span>
            </p>
          </div>

          {/* ベネフィットの再確認 */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '🎁', text: '無料特典\nプレゼント' },
              { icon: '🎥', text: 'ウェビナー\n招待' },
              { icon: '💬', text: '個別相談\n可能' },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-medium whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <LineButton 
              variant="secondary"
              size="large"
              trackingLabel="Final_CTA"
            >
              今すぐ無料特典を受け取る
            </LineButton>
            <p className="text-sm text-blue-100 mt-4">
              ※ 登録は30秒で完了します
            </p>
          </div>

          {/* 最終メッセージ */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm md:text-base leading-relaxed text-blue-100">
              マネジメントは「才能」ではなく「技術」です。<br />
              正しく学べば、誰でも成果を出せます。<br />
              <span className="font-bold text-white">あなたの一歩を、心からお待ちしています。</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
