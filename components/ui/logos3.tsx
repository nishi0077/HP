"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Logo {
  id: string;
  description: string;
  image: string;
  /** 黒背景のロゴなどをタイルに合わせて色反転する */
  invert?: boolean;
  /** ロゴを大きめに表示する */
  large?: boolean;
}

interface Logos3Props {
  heading?: string;
  subheading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  subheading = "業界をリードする企業様にご支援いただいています",
  logos = [
    {
      id: "dentsu",
      description: "電通",
      image: "/images/marketing/dentsu.png",
      invert: true,
    },
    {
      id: "dentsu-digital",
      description: "電通デジタル",
      image: "/images/marketing/dentsu-digital.png",
      large: true,
    },
    {
      id: "logo-1",
      description: "株式会社ASITIS",
      image: "/images/marketing/2.png",
    },
    {
      id: "logo-2",
      description: "銀座Xiaoma",
      image: "/images/marketing/3.png",
    },
    {
      id: "logo-3",
      description: "CyberAgent",
      image: "/images/marketing/4.png",
    },
    {
      id: "logo-4",
      description: "SEGA",
      image: "/images/marketing/5.png",
    },
    {
      id: "logo-5",
      description: "株式会社ACTLAND",
      image: "/images/marketing/6.png",
    },
    {
      id: "logo-6",
      description: "株式会社ReBORNGROUP",
      image: "/images/marketing/7.png",
      large: true,
    },
    {
      id: "logo-7",
      description: "小学館",
      image: "/images/marketing/8.png",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container flex flex-col items-center text-center">
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
          Our Clients
        </span>
        <h2 className="text-2xl font-bold text-pretty lg:text-4xl text-white">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-4 max-w-xl text-sm text-white/50 sm:text-base">
            {subheading}
          </p>
        )}
      </div>

      <div className="relative mt-12 lg:mt-16">
        <div className="relative mx-auto flex items-center justify-center">
          <InfiniteSlider
            gap={24}
            duration={40}
            durationOnHover={120}
            className="w-full"
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="group flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white px-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_18px_45px_-12px_rgba(0,0,0,0.6)]"
              >
                <Image
                  src={logo.image}
                  alt={logo.description}
                  width={200}
                  height={100}
                  loading="lazy"
                  className={cn(
                    "w-auto object-contain opacity-90 grayscale transition-all duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0",
                    logo.large ? "max-h-20" : "max-h-14",
                    logo.invert && "invert"
                  )}
                />
              </div>
            ))}
          </InfiniteSlider>

          {/* 両端のフェード（背景の暗色になじませる） */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/80 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/80 to-transparent sm:w-24" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
