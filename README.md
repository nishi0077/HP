# Next Sociality 公式サイト

一貫型Webマーケティング支援サービスの公式ウェブサイト

## 概要

戦略設計からクリエイティブ制作、広告運用、計測と改善までを一気通貫で支援する、BtoBリード取得に特化したWebサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIライブラリ**: shadcn/ui
- **フォーム**: React Hook Form + Zod
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **メール送信**: Resend
- **分析**: GA4, Meta Pixel

## セットアップ

### 前提条件

- Node.js 18以上
- npm または pnpm

### インストール

```bash
# 依存関係のインストール
npm install
# または
pnpm install

# 環境変数の設定
cp env.example .env.local
```

### 環境変数の設定

`.env.local` ファイルを作成し、以下の値を設定してください：

```env
# 必須: GA4設定
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 必須: Meta Pixel設定
NEXT_PUBLIC_META_PIXEL_ID=123456789

# メール送信（オプション）
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
MAIL_TO=info@example.com

# サイトURL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 開発サーバーの起動

```bash
npm run dev
# または
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## プロジェクト構造

```
├── app/                    # App Router ページ
│   ├── api/               # API routes
│   ├── services/          # サービスページ
│   ├── pricing/           # 価格ページ
│   ├── cases/             # 事例ページ
│   ├── about/             # 会社情報ページ
│   ├── faq/               # FAQページ
│   └── book/              # 相談予約ページ
├── components/
│   ├── ui/                # shadcn/ui コンポーネント
│   ├── sections/          # セクションコンポーネント
│   └── contact-form.tsx   # お問い合わせフォーム
├── content/
│   └── site.yaml          # サイトコンテンツ
└── lib/
    ├── content.ts         # コンテンツ読み込み
    └── utils.ts           # ユーティリティ関数
```

## コンテンツ管理

サイトのコンテンツは `content/site.yaml` で管理されています。このファイルを編集することで、サイトの内容を変更できます。

## ビルドとデプロイ

### ビルド

```bash
npm run build
npm run start
```

### Vercel へのデプロイ

1. Vercel にプロジェクトを接続
2. 環境変数を設定
3. 自動デプロイが実行されます

### その他のプラットフォーム

Next.js は様々なプラットフォームでホスティング可能です：
- Netlify
- AWS Amplify
- Railway
- など

## 機能

### 主要セクション

- **ヒーロー**: メインビジュアルとCTA
- **選ばれる理由**: 3つの特徴を紹介
- **サービス**: 4つのサービスをカード形式で表示
- **進め方**: 5ステップのプロセス
- **価格**: 3つの料金プラン
- **実績**: 成果事例の紹介
- **FAQ**: よくある質問
- **CTA**: 行動促進バナー

### フォーム機能

- バリデーション付きお問い合わせフォーム
- Resend による自動メール送信
- GA4 / Meta Pixel イベント追跡

### SEO対応

- メタタグ最適化
- sitemap.xml 自動生成
- robots.txt 設定
- 構造化データ（将来的に対応予定）

## カスタマイズ

### コンテンツの変更

`content/site.yaml` を編集してサイトの内容を変更できます。

### スタイルの変更

- `app/globals.css`: グローバルスタイル
- `tailwind.config.ts`: Tailwind設定
- コンポーネント内のクラス名を変更

### 新機能の追加

1. 新しいコンポーネントを `components/` に作成
2. 必要に応じて `content/site.yaml` にデータを追加
3. ページに組み込み

## パフォーマンス目標

- LCP < 2.5s
- CLS < 0.1
- TTI < 3.5s
- Lighthouse スコア 90+ (全指標)

## ライセンス

このプロジェクトは Next Sociality の所有物です。

## サポート

質問や問題がある場合は、プロジェクト管理者にお問い合わせください。


