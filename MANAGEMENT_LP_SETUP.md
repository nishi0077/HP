# マネジメント講座LP セットアップガイド

## 🚀 クイックスタート

### 1. 開発環境の起動

```bash
cd d:\HP\next-sociality
npm run dev
```

ブラウザで `http://localhost:3000/management-lp` にアクセス

---

## 📝 設定手順

### ステップ1: 環境変数の設定

`.env.local` ファイルを編集：

```bash
# Meta Pixel（Meta広告管理画面から取得）
NEXT_PUBLIC_META_PIXEL_ID=YOUR_PIXEL_ID

# Google Tag Manager（GTM管理画面から取得）
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# LINE公式アカウントURL
NEXT_PUBLIC_LINE_URL=https://line.me/R/ti/p/@your_line_id

# ウェビナー申込URL（Zoom、Googleフォームなど）
NEXT_PUBLIC_WEBINAR_URL=https://your-webinar-form-url.com

# UTAGE URL（オプション）
NEXT_PUBLIC_UTAGE_URL=https://utage.example.com
```

---

### ステップ2: 講師情報の更新

`components/management-lp/instructor.tsx` を編集：

```tsx
// 講師名
<h3 className="text-2xl md:text-3xl font-bold">
  山田 太郎  {/* ← ここを変更 */}
</h3>

// プロフィール文章
<p>IT業界で20年のキャリア... {/* ← ここを変更 */}</p>
```

**写真の追加（推奨）:**

```tsx
// 現在（アイコン）
<div className="w-40 h-40 bg-gradient-to-br ...">
  👤
</div>

// 写真に変更
<img 
  src="/images/instructor.jpg"
  alt="講師名"
  className="w-40 h-40 rounded-2xl object-cover"
/>
```

---

### ステップ3: 会社情報の更新

`components/management-lp/footer.tsx` を編集：

```tsx
<p className="mb-2">
  運営会社：株式会社〇〇〇〇<br />  {/* ← 変更 */}
  所在地：〒000-0000 東京都〇〇区〇〇〇<br />  {/* ← 変更 */}
  お問い合わせ：info@example.com  {/* ← 変更 */}
</p>
```

---

### ステップ4: トラッキングの確認

#### Meta Pixel の確認

1. Chrome拡張機能「Meta Pixel Helper」をインストール
2. LPにアクセスして、拡張機能アイコンをクリック
3. `PageView` イベントが送信されているか確認

#### GTM の確認

1. ブラウザのコンソールで `dataLayer` を確認
2. GTMプレビューモードで各イベントを確認

---

## 🎨 デザインのカスタマイズ

### カラーの変更

`app/management-lp/layout.tsx` の `:root` 変数を編集：

```css
:root {
  --lp-primary: 214 100% 45%;        /* メインカラー */
  --lp-primary-dark: 214 100% 35%;   /* ダーク */
  --lp-primary-light: 214 100% 95%;  /* ライト */
  --lp-accent: 199 89% 48%;          /* アクセント */
}
```

**色の調整方法:**
- Hue（色相）: 0〜360
- Saturation（彩度）: 0〜100%
- Lightness（明度）: 0〜100%

例：緑色系にする場合
```css
--lp-primary: 150 60% 45%;  /* 緑色 */
```

---

### フォントの変更

`app/management-lp/layout.tsx` でフォント変更：

```tsx
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})
```

---

## 🧪 ABテストの実装

### URLパラメータでバリエーション切り替え

`app/management-lp/page.tsx` を編集：

```tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { Hero } from '@/components/management-lp/hero'
import { HeroVariantA, HeroVariantB, HeroVariantC } from '@/components/management-lp/ab-test/hero-variants'

export default function ManagementLPPage() {
  const searchParams = useSearchParams()
  const fvVariant = searchParams.get('fv') || 'default'

  const HeroComponent = () => {
    switch (fvVariant) {
      case 'A': return <HeroVariantA />
      case 'B': return <HeroVariantB />
      case 'C': return <HeroVariantC />
      default: return <Hero />
    }
  }

  return (
    <>
      <ScrollTracker />
      <main className="min-h-screen bg-white">
        <HeroComponent />
        {/* 他のセクション */}
      </main>
    </>
  )
}
```

**テスト方法:**
- パターンA: `http://localhost:3000/management-lp?fv=A`
- パターンB: `http://localhost:3000/management-lp?fv=B`
- パターンC: `http://localhost:3000/management-lp?fv=C`

---

## 📱 スマホでの確認

### ローカル環境でスマホ確認

1. PCとスマホを同じWi-Fiに接続
2. PCのIPアドレスを確認：
   ```bash
   ipconfig  # Windows
   ```
3. スマホブラウザで `http://[PCのIPアドレス]:3000/management-lp` にアクセス

---

## 🚀 本番デプロイ（Vercel）

### 初回デプロイ

```bash
# Vercel CLIのインストール
npm i -g vercel

# ログイン
vercel login

# デプロイ
vercel
```

### 環境変数の設定

Vercel Dashboard で設定：
1. プロジェクトを選択
2. **Settings** > **Environment Variables**
3. `.env.local` の内容を追加

### 本番環境へデプロイ

```bash
vercel --prod
```

---

## 🔗 UTAGE連携

### LINE登録後のUTAGE自動登録

`app/api/utage/register/route.ts` を作成：

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { lineUserId } = await request.json()
  
  // UTAGEのAPIにユーザー情報を送信
  const response = await fetch(`${process.env.NEXT_PUBLIC_UTAGE_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.UTAGE_API_KEY}`,
    },
    body: JSON.stringify({
      line_user_id: lineUserId,
      source: 'management-lp',
      tags: ['管理職', 'LP経由'],
    }),
  })
  
  return NextResponse.json(await response.json())
}
```

### LINEボタンから自動登録

`components/management-lp/line-button.tsx` を編集：

```tsx
const handleClick = async () => {
  // トラッキング送信
  trackLineRegistration()
  
  // UTAGE登録API呼び出し
  await fetch('/api/utage/register', {
    method: 'POST',
    body: JSON.stringify({ lineUserId: 'USER_ID' })
  })
  
  // LINE遷移
  window.open(lineUrl, '_blank', 'noopener,noreferrer')
}
```

---

## ✅ 公開前チェックリスト

### 必須項目

- [ ] `.env.local` の全項目を設定
- [ ] Meta Pixel が動作確認済み
- [ ] GTM が動作確認済み
- [ ] LINE登録ボタンの遷移確認
- [ ] ウェビナー申込ボタンの遷移確認
- [ ] 講師情報を更新
- [ ] 会社情報（フッター）を更新
- [ ] スマホ実機で表示確認
- [ ] ページ速度確認（Lighthouse 90+）

### 推奨項目

- [ ] 講師の写真を追加
- [ ] ロゴ画像を追加
- [ ] OGP画像を設定
- [ ] Favicon設定
- [ ] 利用規約・プライバシーポリシーページ作成
- [ ] 特定商取引法ページ作成
- [ ] Google Analyticsで計測確認

---

## 🆘 トラブルシューティング

### 開発サーバーが起動しない

```bash
# node_modulesを削除して再インストール
rm -rf node_modules
npm install
npm run dev
```

### Metaピクセルが動かない

1. `.env.local` の `NEXT_PUBLIC_META_PIXEL_ID` を確認
2. ブラウザのコンソールで `window.fbq` をチェック
3. Meta Pixel Helperで確認

### スタイルが崩れる

```bash
# Tailwind CSSをリビルド
npm run build
```

---

## 📞 サポート

質問・不具合報告は以下まで：
- **Email:** info@example.com
- **LINE:** @xxxxx

---

## 📚 参考資料

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [Tailwind CSS公式](https://tailwindcss.com/docs)
- [Meta Pixel 設定ガイド](https://www.facebook.com/business/help/952192354843755)
- [GTM 設定ガイド](https://support.google.com/tagmanager/answer/6103696)
