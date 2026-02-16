'use client'

import { useEffect } from 'react'
import { trackScrollDepth } from '@/lib/tracking'

/**
 * スクロール率を自動トラッキングするコンポーネント
 */
export function ScrollTracker() {
  useEffect(() => {
    // スクロールトラッキング開始
    const cleanup = trackScrollDepth()
    
    return () => {
      if (cleanup) {
        cleanup()
      }
    }
  }, [])

  return null
}
