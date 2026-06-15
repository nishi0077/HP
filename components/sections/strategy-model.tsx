"use client"

import { motion } from 'motion/react'

interface ModelNode {
  en: string
  ja: string
  items: string[]
}

const nodes: ModelNode[] = [
  {
    en: 'MARKETING STRATEGY',
    ja: '戦略領域',
    items: [
      '市場・競合分析（3C / STP）',
      'ターゲティング・ポジショニング',
      'KPI設計・計測設計（GA4 / CAPI）',
      '予算配分・メディアプランニング',
    ],
  },
  {
    en: 'MARKETING EXECUTION',
    ja: '施策実行領域',
    items: [
      '広告運用',
      'LP制作',
      'SEO / LLMO（自然検索・生成AI検索の最適化）',
      'MEO（Googleマップ等の最適化による実店舗集客）',
    ],
  },
  {
    en: 'AI TRANSFORMATION',
    ja: 'AI導入支援',
    items: [
      'AIアセスメント（業務選定）',
      'プロンプトエンジニアリング（RAG構築）',
      'AIエージェント（ワークフロー開発）',
      'AIガバナンス（リスキリング支援）',
    ],
  },
]

const GOLD = '#c9a96a'

function NodeCard({ node }: { node: ModelNode }) {
  return (
    <div className="rounded-2xl border border-[#c9a96a]/25 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-sm">
      <div className="text-center">
        <h3 className="text-base font-semibold tracking-[0.16em] text-[#e7d3a8] lg:text-lg">
          {node.en}
        </h3>
        <p className="mt-1.5 text-sm text-white/60 lg:text-base">{node.ja}</p>
      </div>
      <ul className="mt-5 space-y-2.5">
        {node.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96a]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CenterBadge() {
  return (
    <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full border border-[#c9a96a]/40 bg-gradient-to-br from-[#c9a96a]/25 via-[#c9a96a]/5 to-transparent text-center shadow-[0_0_60px_-10px_rgba(201,169,106,0.5)] lg:h-60 lg:w-60">
      <span className="text-xs tracking-[0.25em] text-[#e7d3a8] sm:text-sm">
        BUSINESS
      </span>
      <span className="text-2xl font-bold tracking-[0.12em] text-white sm:text-3xl">
        GROWTH
      </span>
      <span className="mt-2 text-sm text-white/70">事業成長・売上拡大</span>
    </div>
  )
}

function CycleRing() {
  const cx = 400
  const cy = 380
  const r = 250
  const arrowAngles = [330, 90, 210]

  return (
    <svg
      viewBox="0 0 800 760"
      className="absolute inset-0 h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      {/* 破線が流れるリング */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        stroke={GOLD}
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeDasharray="4 9"
        animate={{ strokeDashoffset: [0, -52] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      {/* リング上を周回する矢印 */}
      <motion.g
        style={{ transformBox: 'view-box', transformOrigin: `${cx}px ${cy}px` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      >
        {arrowAngles.map((a) => {
          const rad = (a * Math.PI) / 180
          const x = cx + r * Math.cos(rad)
          const y = cy + r * Math.sin(rad)
          return (
            <path
              key={a}
              d="M -9 -6 L 9 0 L -9 6 Z"
              transform={`translate(${x} ${y}) rotate(${a + 90})`}
              fill={GOLD}
              fillOpacity="0.75"
            />
          )
        })}
      </motion.g>
    </svg>
  )
}

export function StrategyModel() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black py-20 lg:py-28">
      <div className="container relative z-10">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a96a]">
            Our Model
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-['Zen_Old_Mincho']">
            成果を最大化する3つの領域
          </h2>
          <p className="mt-5 text-base text-white/70">
            戦略・実行・AI活用を一気通貫で循環させ、事業成長に直結させます。
          </p>
        </motion.div>

        {/* Desktop: 中央 + 3領域の循環図 */}
        <div className="relative mx-auto hidden h-[900px] max-w-6xl lg:block">
          <CycleRing />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <CenterBadge />
          </div>
          <div className="absolute left-1/2 top-0 w-[400px] -translate-x-1/2">
            <NodeCard node={nodes[0]} />
          </div>
          <div className="absolute bottom-0 left-0 w-[440px]">
            <NodeCard node={nodes[1]} />
          </div>
          <div className="absolute bottom-0 right-0 w-[440px]">
            <NodeCard node={nodes[2]} />
          </div>
        </div>

        {/* Mobile / Tablet: スタック表示 */}
        <div className="lg:hidden">
          <div className="mb-10 flex justify-center">
            <CenterBadge />
          </div>
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            {nodes.map((node) => (
              <NodeCard key={node.en} node={node} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
