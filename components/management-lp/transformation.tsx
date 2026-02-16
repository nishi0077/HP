export function Transformation() {
  const beforeAfter = [
    {
      before: '部下が動かず、自分が疲弊',
      after: 'チームが自走し、時間が生まれる',
      icon: '🚀',
    },
    {
      before: '成果が不安定で再現できない',
      after: '構造的に成果を出せる',
      icon: '📊',
    },
    {
      before: '感覚でマネジメントして不安',
      after: '自信を持って判断できる',
      icon: '💪',
    },
    {
      before: '評価が上がらずキャリア停滞',
      after: '信頼され、昇進の機会が増える',
      icon: '⬆️',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[hsl(var(--lp-primary-light))]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base font-semibold text-[hsl(var(--lp-accent))] mb-3">
              学んだ後の変化
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[hsl(var(--lp-text))] leading-tight">
              あなたの未来は、<br className="md:hidden" />
              <span className="text-[hsl(var(--lp-primary))]">こう変わります</span>
            </h2>
          </div>

          {/* Before → After */}
          <div className="space-y-6">
            {beforeAfter.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md"
              >
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                  {/* Before */}
                  <div className="text-center md:text-right">
                    <p className="text-xs md:text-sm font-semibold text-gray-500 mb-2">BEFORE</p>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {item.before}
                    </p>
                  </div>

                  {/* アイコン */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[hsl(var(--lp-primary))] to-[hsl(var(--lp-accent))] rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-lg">
                      {item.icon}
                    </div>
                  </div>

                  {/* After */}
                  <div className="text-center md:text-left">
                    <p className="text-xs md:text-sm font-semibold text-[hsl(var(--lp-primary))] mb-2">AFTER</p>
                    <p className="text-sm md:text-base font-bold text-[hsl(var(--lp-text))] leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 成果イメージ */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: '初月', description: '変化を実感' },
              { title: '3ヶ月後', description: 'チームが変わる' },
              { title: '6ヶ月後', description: '評価が変わる' },
            ].map((milestone, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200"
              >
                <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--lp-primary))] mb-2">
                  {milestone.title}
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--lp-text-light))]">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

          {/* メッセージ */}
          <div className="mt-12 text-center">
            <p className="text-base md:text-lg text-[hsl(var(--lp-text-light))] leading-relaxed">
              この変化は、<span className="font-bold text-[hsl(var(--lp-text))]">特別な才能</span>がなくても実現できます。<br />
              必要なのは、<span className="font-bold text-[hsl(var(--lp-primary))]">正しい知識</span>と<span className="font-bold text-[hsl(var(--lp-primary))]">実践</span>だけです。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
