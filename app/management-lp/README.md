# マネジメント実践講座 LP

## 📋 概要

マネジメント実践講座のランディングページ。
20年の現場経験を体系化した「7つのマネジメント核」を学べる講座のLP。

**目標:**
- Primary: ウェビナー参加者獲得、LINE登録（見込み顧客化）
- Secondary: 個別相談、講座購入（298,000円）

---

## 🎯 ターゲット

- **年齢:** 25〜39歳
- **役職:** 新任〜中堅管理職、プレイングマネージャー
- **業種:** IT/Web、医療・ヘルスケア、クリエイティブ職、中小〜中堅企業
- **課題:** 部下が動かない、成果が再現できない、感覚でマネジメント

---

## 🚀 技術スタック

- **フレームワーク:** Next.js 14 (App Router)
- **言語:** TypeScript
- **スタイリング:** Tailwind CSS
- **計測:** Meta Pixel + GTM + GA4
- **デプロイ:** Vercel (推奨)
- **UTAGE連携:** 対応済み

---

## 📁 ファイル構成

```
app/management-lp/
├── layout.tsx              # LP専用レイアウト（GTM/Pixel設定）
├── page.tsx                # メインページ
└── README.md               # このファイル

components/management-lp/
├── hero.tsx                # ファーストビュー
├── problems.tsx            # 悩みセクション
├── pain-points.tsx         # 痛みセクション
├── solution.tsx            # 7つの核
├── transformation.tsx      # 変化後の未来
├── line-benefits.tsx       # LINE特典
├── webinar.tsx             # ウェビナー案内
├── instructor.tsx          # 講師紹介
├── faq.tsx                 # FAQ
├── final-cta.tsx           # 最終CTA
├── footer.tsx              # フッター
├── line-button.tsx         # LINE登録ボタン
└── scroll-tracker.tsx      # スクロールトラッキング

lib/
└── tracking.ts             # トラッキングユーティリティ
```

---

## ⚙️ セットアップ

### 1. 環境変数の設定

`.env.local` ファイルを作成し、以下を設定：

```bash
# Meta Pixel ID
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id

# Google Tag Manager ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# LINE公式アカウントURL
NEXT_PUBLIC_LINE_URL=https://line.me/R/ti/p/@xxxxx

# ウェビナー申込URL
NEXT_PUBLIC_WEBINAR_URL=https://your-webinar-url.com

# UTAGE URL（オプション）
NEXT_PUBLIC_UTAGE_URL=https://your-utage-url.com
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000/management-lp` にアクセス

### 3. 本番ビルド

```bash
npm run build
npm run start
```

---

## 📊 トラッキングイベント

### Meta Pixel イベント

| イベント | タイミング | 用途 |
|---------|-----------|------|
| `PageView` | ページ表示 | リーチ計測 |
| `ViewContent` | FV閲覧 | 興味度 |
| `Scroll_20` | 20%スクロール | エンゲージメント |
| `Scroll_50` | 50%スクロール | エンゲージメント |
| `InitiateCheckout` | 70%スクロール（CTA到達） | 意欲度 |
| `Lead` | LINE登録完了 | CV（主要） |
| `CompleteRegistration` | ウェビナー申込完了 | CV |
| `Schedule` | 個別相談予約完了 | CV |
| `Purchase` | 講座購入完了（298,000円） | 最終CV |

### GTM & GA4

同様のイベントを `dataLayer` にプッシュ

---

## 🎨 デザインカラー

### カラーパレット（青色系 - 信頼感）

```css
--lp-primary: 214 100% 45%;           /* メインブルー */
--lp-primary-dark: 214 100% 35%;      /* ダークブルー */
--lp-primary-light: 214 100% 95%;     /* ライトブルー */
--lp-accent: 199 89% 48%;             /* アクセントブルー */
--lp-text: 220 20% 20%;               /* テキスト */
--lp-text-light: 220 15% 40%;         /* ライトテキスト */
--lp-bg: 0 0% 100%;                   /* 背景白 */
--lp-bg-secondary: 214 32% 97%;       /* セカンダリ背景 */
```

---

## 🔄 ABテスト設計

### テスト項目（優先度順）

#### 1. FVキャッチコピー
- **パターンA（現在）:** 「部下が動かない理由、知っていますか？」
- **パターンB:** 「7つの核で、チームが自走する」
- **パターンC:** 「20年の現場が、298,000円に凝縮」

#### 2. CTA文言
- **パターンA（現在）:** 「無料特典を受け取る」
- **パターンB:** 「7つの核を知る」
- **パターンC:** 「今すぐLINEで学ぶ」

#### 3. 特典の見せ方
- **パターンA（現在）:** リスト形式
- **パターンB:** カード形式
- **パターンC:** 動画埋め込み

**実装方法:**
- Vercel Edge Config
- GTMのサーバーサイドタグ
- URLパラメータ（`?variant=A`）

---

## 📱 レスポンシブ対応

- **モバイルファースト設計**
- **ブレークポイント:**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

---

## 🔗 UTAGE連携

### 1. LINE登録後の自動タグ付け

```javascript
// LINE Messaging API経由でUTAGEにユーザー情報送信
fetch('/api/utage/register', {
  method: 'POST',
  body: JSON.stringify({ lineUserId, source: 'management-lp' })
})
```

### 2. ウェビナー申込フラグ

UTAGEのカスタムフィールドに `webinar_registered: true` を設定

### 3. 決済完了トラッキング

```javascript
// 決済完了ページでPixelイベント送信
trackPurchase(298000)
```

---

## ✅ チェックリスト（公開前）

- [ ] `.env.local` に正しい値を設定
- [ ] Meta Pixel IDの動作確認（Meta Events Managerで確認）
- [ ] GTM コンテナの動作確認
- [ ] LINE公式アカウントURLの確認
- [ ] ウェビナー申込URLの確認
- [ ] 講師情報（名前・写真・プロフィール）の更新
- [ ] 会社情報（フッター）の更新
- [ ] 利用規約・プライバシーポリシーのリンク設定
- [ ] スマホ実機での表示確認
- [ ] ページ速度の確認（Lighthouse スコア 90+目標）
- [ ] UTAGE連携テスト

---

## 🚀 デプロイ

### Vercel（推奨）

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

### 環境変数の設定（Vercel）

Vercel Dashboard > Settings > Environment Variables で設定

---

## 📈 改善ポイント

### 初期データ収集後（2週間）

1. **FV通過率の確認**
   - 目標: 80%以上
   - 改善: キャッチコピー、ファーストビュー高さ調整

2. **LINE登録率**
   - 目標: 3〜5%
   - 改善: CTA文言、特典内容の見直し

3. **離脱ポイント分析**
   - Hotjarやヒートマップツールで確認
   - 離脱が多いセクションを改善

---

## 🆘 トラブルシューティング

### Metaピクセルが動かない

1. `.env.local` の `NEXT_PUBLIC_META_PIXEL_ID` を確認
2. ブラウザのコンソールで `window.fbq` が定義されているか確認
3. Meta Pixel Helper拡張機能で確認

### LINEボタンが動かない

1. `NEXT_PUBLIC_LINE_URL` の設定確認
2. ブラウザのコンソールでエラー確認

---

## 📞 お問い合わせ

制作に関する質問は、[info@example.com](mailto:info@example.com) まで。
