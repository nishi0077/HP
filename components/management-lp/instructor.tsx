export function Instructor() {
  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--lp-bg-secondary))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-[hsl(var(--lp-accent))] mb-3">
              誰から学ぶのか
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[hsl(var(--lp-text))] leading-tight">
              講師紹介
            </h2>
          </div>

          {/* 講師情報 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              {/* 写真エリア */}
              <div className="mx-auto md:mx-0">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-[hsl(var(--lp-primary))] to-[hsl(var(--lp-accent))] rounded-2xl flex items-center justify-center text-6xl shadow-lg">
                  👤
                </div>
              </div>

              {/* プロフィール */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--lp-text))] mb-2">
                  山田 太郎
                </h3>
                <p className="text-base md:text-lg font-medium text-[hsl(var(--lp-primary))] mb-6">
                  マネジメント実践講座 主宰
                </p>

                <div className="space-y-4 text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
                  <p>
                    IT業界で20年のキャリアを持つ。新卒でソフトウェア開発エンジニアとしてキャリアをスタートし、30歳でチームリーダー、35歳でプロジェクトマネージャーに就任。
                  </p>
                  <p>
                    部下が動かない、成果が出ないという壁にぶつかり、試行錯誤の末にマネジメントを体系的に学び直す。その結果、チームの生産性が2倍に向上し、離職率も大幅に改善。
                  </p>
                  <p>
                    現在は上場企業を含む複数の企業でマネジメント研修を実施。「感覚ではなく構造で学ぶ」をモットーに、再現性のあるマネジメント手法を伝えている。
                  </p>
                </div>

                {/* 実績 */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { number: '20年', label: '現場経験' },
                    { number: '500名+', label: '支援実績' },
                    { number: '98%', label: '満足度' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--lp-primary))]">
                        {stat.number}
                      </p>
                      <p className="text-xs md:text-sm text-[hsl(var(--lp-text-light))] mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* メッセージ */}
          <div className="mt-8 bg-[hsl(var(--lp-primary-light))] rounded-xl p-6 md:p-8">
            <p className="text-sm font-semibold text-[hsl(var(--lp-primary))] mb-3">
              講師からのメッセージ
            </p>
            <p className="text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
              マネジメントは「才能」ではなく「技術」です。正しい知識と実践を積み重ねれば、誰でも成果を出せます。あなたの成長を全力でサポートします。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
