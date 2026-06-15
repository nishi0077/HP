"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // すでに表示済みのセッションではスキップ
    if (typeof window !== "undefined" && sessionStorage.getItem("ns_preloaded")) {
      setVisible(false);
      return;
    }

    let raf = 0;
    let current = 0;
    let pageLoaded = document.readyState === "complete";

    const onLoad = () => {
      pageLoaded = true;
    };
    window.addEventListener("load", onLoad);

    const start = performance.now();
    const MIN_DURATION = 1100; // 最低表示時間(ms)

    const tick = (now: number) => {
      const elapsed = now - start;
      // 読み込み完了 & 最低表示時間経過で100%まで詰める。それまでは90%付近で待機。
      const ceiling = pageLoaded && elapsed > MIN_DURATION ? 100 : 90;
      const speed = ceiling === 100 ? 0.18 : 0.05;
      current += (ceiling - current) * speed + 0.4;
      if (current >= 100) current = 100;
      setProgress(Math.round(current));

      if (current >= 100) {
        sessionStorage.setItem("ns_preloaded", "1");
        // 少し待ってからフェードアウト
        setTimeout(() => setVisible(false), 350);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* 背景のほのかなグロー */}
          <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_50%_at_50%_45%,rgba(56,120,255,0.12),transparent_70%)]" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/40"
            >
              Next Sociality
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="ns-shimmer bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl"
            >
              あなたの会社に<span className="ns-cmo">CMO</span>を
            </motion.div>

            {/* プログレスバー */}
            <div className="mt-10 h-px w-56 overflow-hidden bg-white/10 sm:w-72">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 font-mono text-xs tracking-widest text-white/40">
              {String(progress).padStart(3, "0")}%
            </div>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
                .ns-shimmer {
                  background-image: linear-gradient(110deg, #ffffff 30%, #8fb6ff 45%, #ffffff 60%);
                  background-size: 200% 100%;
                  animation: nsShimmer 2.2s linear infinite;
                }
                .ns-cmo {
                  background-image: linear-gradient(110deg, #67e8f9, #60a5fa, #818cf8);
                  -webkit-background-clip: text;
                  background-clip: text;
                  color: transparent;
                }
                @keyframes nsShimmer {
                  0% { background-position: 200% 0; }
                  100% { background-position: -200% 0; }
                }
              `,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
