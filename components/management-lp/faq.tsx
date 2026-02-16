'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'マネジメント経験が浅くても大丈夫ですか？',
      answer: 'はい、問題ありません。むしろ、早い段階で体系的に学ぶことで、悪い癖がつく前に正しい型を身につけられます。基礎から丁寧に解説しますので、安心してご参加ください。',
    },
    {
      question: '忙しくて時間が取れないのですが…',
      answer: '講座は週1回90分のオンライン形式です。また、録画も提供しますので、ご自身のペースで学習できます。実践ワークも、日常業務の中で取り組める内容に設計しています。',
    },
    {
      question: '他のマネジメント研修との違いは何ですか？',
      answer: '最大の違いは「再現性」です。抽象的な精神論ではなく、具体的なフレームワークと実践ステップを提供します。また、20年の現場経験に基づいた、実務で即使えるノウハウが学べます。',
    },
    {
      question: '業種が違っても効果はありますか？',
      answer: 'はい、効果があります。この講座で学ぶ「7つの核」は、業種を問わず普遍的なマネジメントの原理原則です。IT、医療、製造、クリエイティブなど、様々な業種の方が成果を出しています。',
    },
    {
      question: '上司の許可は必要ですか？',
      answer: '個人でのご参加なので、上司の許可は不要です。ただし、学んだ内容をチームで実践する際は、上司や組織と連携することで、より大きな成果が得られます。',
    },
    {
      question: '返金保証はありますか？',
      answer: '初回セッション後7日以内であれば、理由を問わず全額返金いたします。内容に自信があるからこそ、安心して学んでいただきたいと考えています。',
    },
    {
      question: 'すぐに成果は出ますか？',
      answer: '初月から変化を実感できるよう設計していますが、成果の出方は個人差があります。重要なのは、焦らず継続することです。3〜6ヶ月後には、明確な変化が現れるはずです。',
    },
    {
      question: 'LINE登録だけでも大丈夫ですか？',
      answer: 'もちろんです。まずは無料特典を受け取って、内容を確かめてください。その上で、講座に興味を持たれたらウェビナーや個別相談にお進みください。無理な勧誘は一切ありません。',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--lp-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-[hsl(var(--lp-accent))] mb-3">
              よくある質問
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[hsl(var(--lp-text))] leading-tight">
              FAQ
            </h2>
          </div>

          {/* FAQ リスト */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[hsl(var(--lp-primary-light))] rounded-full flex items-center justify-center text-[hsl(var(--lp-primary))] font-bold text-sm">
                      Q
                    </span>
                    <div className="flex-1">
                      <p className="text-base md:text-lg font-bold text-[hsl(var(--lp-text))] pr-8">
                        {faq.question}
                      </p>
                    </div>
                    <svg 
                      className={cn(
                        'flex-shrink-0 w-5 h-5 text-[hsl(var(--lp-text-light))] transition-transform',
                        activeIndex === index && 'rotate-180'
                      )}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {activeIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="flex items-start gap-4 pl-12">
                      <div className="flex-1 pt-2 border-t border-gray-200">
                        <div className="flex items-start gap-3 mt-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                            A
                          </span>
                          <p className="flex-1 text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 追加質問の案内 */}
          <div className="mt-12 text-center bg-[hsl(var(--lp-primary-light))] rounded-xl p-6 md:p-8">
            <p className="text-sm md:text-base text-[hsl(var(--lp-text-light))] leading-relaxed">
              その他のご質問は、<span className="font-bold text-[hsl(var(--lp-text))]">LINE</span>または<span className="font-bold text-[hsl(var(--lp-text))]">個別相談</span>でお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
