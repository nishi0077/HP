import { cn } from "@/lib/utils";
import {
  Megaphone,
  Globe,
  Smartphone,
  Zap,
  Search,
  Target,
  Cpu,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "マーケティング戦略設計",
      description:
        "市場・競合・顧客心理を分析し、「勝てるポジション」と「収益化の道筋」を明確化。中長期的な売上を上げる戦略を設計します。",
      icon: <Target className="h-8 w-8" />,
      href: "/services/strategy",
    },
    {
      title: "広告運用",
      description:
        "Google・Meta・X・Yahooなどの広告運用を代行。費用対効果を最大化させる戦略を設計します。",
      icon: <Megaphone className="h-8 w-8" />,
      href: "/services/advertising",
    },
    {
      title: "LP制作/改善",
      description:
        "お客様がイメージできる文章と構成、信頼性の向上、継続的な改善をデータに基づいて行います。",
      icon: <Globe className="h-8 w-8" />,
      href: "/services/lp",
    },
    {
      title: "バナー/動画クリエイティブ",
      description:
        "媒体ごとや業界・職種ごとに適切なクリエイティブを作成して、利益の最大化を実現します。",
      icon: <Zap className="h-8 w-8" />,
      href: "/services/creative",
    },
    {
      title: "SNS運用",
      description:
        "企業や商品ブランドの魅力を最大限伝え、スムーズに売上へ繋がる設計を行います。",
      icon: <Smartphone className="h-8 w-8" />,
      href: "/services/sns",
    },
    {
      title: "SEO/LLMO",
      description:
        "自然検索（SEO）と生成AI検索（LLMO）の双方に最適化。検索・AIからの安定した流入と指名獲得を実現します。",
      icon: <Search className="h-8 w-8" />,
      href: "/services/website",
    },
    {
      title: "AI導入支援",
      description:
        "業務選定からRAG構築・AIエージェント開発・ガバナンス整備まで。AI活用で生産性と成果を底上げします。",
      icon: <Cpu className="h-8 w-8" />,
      href: "/contact",
    },
    {
      title: "公式LINE構築",
      description:
        "Lステップ等のツールを活用し、集客→教育→販売→リピートまでを自動化してLTVを最大化します。",
      icon: <MessageCircle className="h-8 w-8" />,
      href: "/services/line",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 cursor-pointer hover:bg-white/5 transition-all duration-300",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white max-w-xs relative z-10 px-10">
        {description}
      </p>
      </div>
    </Link>
  );
};
