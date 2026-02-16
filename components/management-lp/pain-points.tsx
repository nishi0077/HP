export function PainPoints() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base font-semibold text-red-600 mb-3">
              このまま放置すると…
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[hsl(var(--lp-text))] leading-tight">
              待っているのは、<br className="md:hidden" />
              <span className="text-red-600">さらに厳しい現実</span>です
            </h2>
          </div>

          {/* 未来の痛み */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-red-500">
              <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--lp-text))] mb-3 flex items-center gap-2">
                <span className="text-red-500">⚠️</span>
                評価が下がり、昇進の機会を失う
              </h3>
              <p className="text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
                成果が出せない管理職として認識され、次のステップに進めない。後輩に追い抜かれ、キャリアが停滞する。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-red-500">
              <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--lp-text))] mb-3 flex items-center gap-2">
                <span className="text-red-500">⚠️</span>
                チームの信頼を失い、孤立する
              </h3>
              <p className="text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
                部下からの信頼を失い、指示が通らなくなる。チーム内で孤立し、精神的に追い込まれる。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-red-500">
              <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--lp-text))] mb-3 flex items-center gap-2">
                <span className="text-red-500">⚠️</span>
                時間だけが過ぎ、成長が止まる
              </h3>
              <p className="text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
                何も変わらないまま、ただ年齢だけを重ねる。気づいたときには、転職も厳しい年齢に。
              </p>
            </div>
          </div>

          {/* メッセージ */}
          <div className="mt-12 bg-gradient-to-r from-[hsl(var(--lp-primary))] to-[hsl(var(--lp-accent))] rounded-2xl p-8 md:p-10 text-white text-center">
            <p className="text-lg md:text-xl font-bold mb-4">
              でも、安心してください。
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              これらの問題は、<span className="font-bold text-yellow-300">すべて解決できます。</span><br />
              必要なのは、<span className="font-bold text-yellow-300">「正しい知識」と「実践」</span>だけです。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
