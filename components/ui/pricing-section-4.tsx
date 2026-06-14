"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Plan {
  displayName: string;
  tagline: string;
  price?: number;
  setupFee?: number;
  buttonText: string;
  buttonHref: string;
  badge?: string;
  popular?: boolean;
  consultationRequired?: boolean;
  accent: string;
  features: string[];
}

const plans: Plan[] = [
  {
    displayName: "スタートプラン",
    tagline: "土台と導線設計を整備したい方向け",
    price: 100000,
    setupFee: 100000,
    buttonText: "このプランで相談する",
    buttonHref: "/contact",
    badge: "スモールスタート",
    accent: "from-sky-300 to-cyan-300",
    features: [
      "ペルソナ / 訴求整理 / 導線設計",
      "広告設計（キーワード / 広告文 / ターゲティング）",
      "計測実装（ピクセル + CAPI / GA4）",
      "レポーティング週1回 / 定例30分",
    ],
  },
  {
    displayName: "スタンダードプラン",
    tagline: "広告とLPを一体で最適化",
    price: 300000,
    setupFee: 100000,
    buttonText: "このプランで相談する",
    buttonHref: "/contact",
    badge: "人気",
    popular: true,
    accent: "from-blue-300 via-indigo-300 to-violet-300",
    features: [
      "Meta / Google 運用（月30〜100万円目安）",
      "LP改善ABテスト（月1回）",
      "広告クリエイティブ作成",
      "レポーティング週1回 / 定例30分",
    ],
  },
  {
    displayName: "プレミアムプラン",
    tagline: "複数チャネルで拡大",
    buttonText: "相談する",
    buttonHref: "/contact",
    badge: "相談必須",
    consultationRequired: true,
    accent: "from-amber-200 via-amber-300 to-yellow-200",
    features: [
      "配信拡張（Google / Meta / Yahoo / LINE）",
      "クリエイティブ作成",
      "LP新規作成 & LPO（LP最適化）",
      "公式LINE構築",
      "レポーティング週1回 / 定例30分",
    ],
  },
];

export default function PricingSection4() {
  return (
    <section className="relative bg-gradient-to-b from-black via-neutral-950 to-black py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Pricing
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-['Zen_Old_Mincho']">
            サービス価格
          </h2>
          <p className="mt-4 text-sm text-white/50">
            ※ 表示はすべて税抜き価格です。
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.displayName}
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-gradient-to-b from-neutral-900 to-neutral-950 p-7",
                plan.popular
                  ? "border-blue-500/50 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] md:-translate-y-3"
                  : "border-white/10",
              )}
            >
              {plan.badge && (
                <span
                  className={cn(
                    "mb-3 inline-block w-fit rounded-full px-3 py-1 text-[11px] font-semibold",
                    plan.popular
                      ? "bg-blue-600 text-white"
                      : plan.consultationRequired
                        ? "bg-amber-500 text-black"
                        : "bg-white/10 text-white/70",
                  )}
                >
                  {plan.badge}
                </span>
              )}

              <h3
                className={cn(
                  "bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent font-['Zen_Old_Mincho']",
                  plan.accent,
                )}
              >
                {plan.displayName}
              </h3>

              <div className="mt-4 flex items-baseline gap-1.5">
                {plan.consultationRequired ? (
                  <span className="text-3xl font-bold text-white">要相談</span>
                ) : (
                  <>
                    <span className="text-sm text-white/60">月額</span>
                    <span className="text-4xl font-bold text-white">
                      ¥{plan.price?.toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              {plan.setupFee && (
                <p className="mt-1.5 text-xs text-white/50">
                  初期費用 ¥{plan.setupFee.toLocaleString()}
                </p>
              )}
              {plan.consultationRequired && (
                <p className="mt-1.5 text-xs text-white/50">
                  ご要望をヒアリングの上、最適なプランをご提案します。
                </p>
              )}

              <p className="mt-4 text-sm text-white/70">{plan.tagline}</p>

              <Link
                href={plan.buttonHref}
                className={cn(
                  "mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors",
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "border border-white/20 text-white hover:bg-white/10",
                )}
              >
                {plan.buttonText}
              </Link>

              <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white/80">含まれる内容</p>
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
