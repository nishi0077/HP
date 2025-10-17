"use client";
import { useEffect, useState } from 'react';

export function usePerformanceOptimizer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // モバイルデバイス検出
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // 低性能デバイス検出（簡易版）
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const memory = (navigator as any).deviceMemory || 4;
      const isLowEnd = hardwareConcurrency < 4 || memory < 4;
      setIsLowEndDevice(isLowEnd);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return {
    isMobile,
    isLowEndDevice,
    shouldReduceParticles: isMobile || isLowEndDevice,
    particleDensity: isMobile ? 100 : isLowEndDevice ? 150 : 300,
  };
}
