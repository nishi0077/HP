# パフォーマンス最適化ガイド

## 現在の重い要素と対策

### 1. パーティクルエフェクト（SparklesCore）
**問題**: 大量のパーティクルがCPU/GPUに負荷をかける
**対策**:
- パーティクル数を削減（現在800 → 400に変更推奨）
- モバイルでは無効化
- 低性能デバイスでは簡略化

### 2. アニメーション（Framer Motion）
**問題**: 複数のアニメーションが同時実行される
**対策**:
- `useReducedMotion`でアクセシビリティ対応
- アニメーションの重複を削減
- `will-change`プロパティの適切な使用

### 3. フォント（Zen Old Mincho）
**問題**: 外部フォントの読み込み
**対策**:
- フォントのプリロード
- フォールバックフォントの最適化
- フォントサイズの最適化

## 実装すべき最適化

### 1. パーティクルエフェクトの最適化
```tsx
// モバイルデバイス検出
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

<SparklesCore
  particleDensity={isMobile ? 200 : 400} // モバイルでは削減
  speed={isMobile ? 1 : 2} // モバイルでは低速
/>
```

### 2. 画像の最適化
- WebP/AVIF形式の使用
- 適切なサイズの画像
- 遅延読み込み（lazy loading）

### 3. コード分割
- 動的インポートの活用
- ページごとのバンドルサイズ削減

### 4. キャッシュ戦略
- 静的アセットの長期キャッシュ
- APIレスポンスのキャッシュ

## 監視すべきメトリクス

### Core Web Vitals
- **LCP** (Largest Contentful Paint): 2.5秒以内
- **FID** (First Input Delay): 100ms以内  
- **CLS** (Cumulative Layout Shift): 0.1以内

### その他の指標
- **FCP** (First Contentful Paint)
- **TTI** (Time to Interactive)
- **Bundle Size**

## 推奨ツール

### 分析ツール
- Google PageSpeed Insights
- Lighthouse
- WebPageTest

### 監視ツール
- Vercel Analytics
- Google Analytics
- Real User Monitoring (RUM)

## 緊急対応（即座に実装可能）

1. **パーティクル数を削減**
2. **不要なアニメーションを無効化**
3. **画像を最適化**
4. **フォント読み込みを最適化**
5. **バンドルサイズを分析・削減**
