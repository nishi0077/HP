"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    nameJa: "土台と導線設計を整備したい方向け",
    price: 100000,
    setupFee: 100000,
    buttonText: "お問い合わせ",
    buttonVariant: "outline" as const,
    includes: [
      "含まれる内容:",
      "ペルソナ/訴求整理/導線設計",
      "広告設計(キーワード/広告文/ターゲティング)",
      "計測実装(ピクセル+CAPI/GA4)",
      "レポーティング週1回/定例30分",
    ],
  },
  {
    name: "Standard",
    nameJa: "広告とLPを一体で最適化",
    price: 300000,
    setupFee: 100000,
    buttonText: "お問い合わせ",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "含まれる内容:",
      "Meta/Google運用（月30〜100万円目安）",
      "LP改善ABテスト（月1回）",
      "広告クリエイティブ作成",
      "レポーティング週1回/定例30分",
    ],
  },
  {
    name: "Premium",
    nameJa: "複数チャネルで拡大",
    price: 500000,
    setupFee: 200000,
    buttonText: "お問い合わせ",
    buttonVariant: "outline" as const,
    includes: [
      "含まれる内容:",
      "配信拡張（Google/Meta/Yahoo/Line）",
      "クリエイティブ作成",
      "LP新規作成&LPO(LP最適化)",
      "公式LINE構築",
      "レポーティング週1回/定例30分",
    ],
  },
];

export default function PricingSection4() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      className="min-h-screen mx-auto relative bg-black overflow-x-hidden"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(circle_at_50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={1800}
          direction="bottom"
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(circle_at_50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>
      
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 1"
          ></div>
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 2"
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-2 relative z-50 px-4">
        <h2 className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl font-['Zen_Old_Mincho']">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            サービス価格
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-400 text-xs"
        >
          ※全て税抜き価格です。
        </TimelineContent>
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, #206ce8 0%, transparent 70%)`,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="grid md:grid-cols-3 max-w-5xl gap-4 py-6 mx-auto px-4 pb-20">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative text-white border-neutral-800 ${
                plan.popular
                  ? "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#0900ff] z-20"
                  : "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 z-10"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl mb-2 font-['Zen_Old_Mincho']">{plan.name} Plan</h3>
                    <p className="text-sm text-gray-300 mb-4 font-['Zen_Old_Mincho']">{plan.nameJa}</p>
                  </div>
                  {plan.popular && (
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full h-fit whitespace-nowrap font-['Zen_Old_Mincho']">
                      人気
                    </span>
                  )}
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold font-['Zen_Old_Mincho']">
                    ¥
                    <NumberFlow
                      value={plan.price}
                      format={{ 
                        notation: "standard",
                        maximumFractionDigits: 0,
                      }}
                      className="text-4xl font-semibold font-['Zen_Old_Mincho']"
                    />
                  </span>
                  <span className="text-gray-300 ml-1 font-['Zen_Old_Mincho']">/月</span>
                </div>
                <p className="text-sm text-gray-400 mt-1 font-['Zen_Old_Mincho']">
                  初期費用: ¥{plan.setupFee.toLocaleString()}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={`w-full mb-6 p-4 text-xl rounded-xl font-['Zen_Old_Mincho'] ${
                    plan.popular
                      ? "bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-800 border border-blue-500 text-white"
                      : plan.buttonVariant === "outline"
                        ? "bg-gradient-to-t from-neutral-950 to-neutral-600 shadow-lg shadow-neutral-900 border border-neutral-800 text-white"
                        : ""
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="font-medium text-base mb-3 font-['Zen_Old_Mincho']">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2"
                      >
                        <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center mt-1.5 flex-shrink-0"></span>
                        <span className="text-sm text-gray-300 font-['Zen_Old_Mincho']">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
