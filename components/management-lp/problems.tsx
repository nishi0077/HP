export function Problems() {
  const problems = [
    {
      emoji: '😣',
      title: '部下が思うように動かない',
      description: '指示を出しても、期待した成果が返ってこない。何度言っても改善されず、自分がやった方が早いと感じている。',
    },
    {
      emoji: '📉',
      title: '成果が安定しない',
      description: 'うまくいった時の理由が説明できない。再現性がなく、メンバーによって結果がバラバラ。',
    },
    {
      emoji: '⏰',
      title: 'マネジメントに時間を取られすぎる',
      description: 'プレイヤー業務とマネジメントの両立ができず、常に時間に追われている。優先順位がつけられない。',
    },
    {
      emoji: '🤔',
      title: '感覚でマネジメントしている',
      description: '体系的に学んだことがなく、先輩や上司の見様見真似。これでいいのか不安を感じている。',
    },
    {
      emoji: '😰',
      title: '評価が上がらず、キャリアに不安',
      description: 'このままでは成長が止まる。管理職として評価されず、キャリアの先が見えない。',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--lp-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base font-semibold text-[hsl(var(--lp-accent))] mb-3">
              こんな悩み、ありませんか？
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[hsl(var(--lp-text))] leading-tight">
              多くの管理職が<br className="md:hidden" />
              <span className="text-[hsl(var(--lp-primary))]">同じ壁</span>に<br className="hidden md:inline" />ぶつかっています
            </h2>
          </div>

          {/* 悩みリスト */}
          <div className="space-y-4 md:space-y-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[hsl(var(--lp-primary-light))] rounded-full flex items-center justify-center text-2xl md:text-3xl">
                    {problem.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--lp-text))] mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 共感メッセージ */}
          <div className="mt-12 text-center">
            <p className="text-base md:text-lg text-[hsl(var(--lp-text-light))] leading-relaxed">
              これらの悩みは、あなただけではありません。<br />
              <span className="font-bold text-[hsl(var(--lp-text))]">原因は明確です。</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
