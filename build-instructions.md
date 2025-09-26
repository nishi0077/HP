# Next Sociality ビルド手順

## 前提条件
- Node.js 18以上がインストールされていること
- PowerShellまたはコマンドプロンプトが使用可能

## ビルド手順

### 1. プロジェクトディレクトリに移動
```powershell
cd D:\HP\next-sociality
```

### 2. 依存関係のインストール
```powershell
npm install
```

### 3. 環境変数の設定（オプション）
```powershell
# env.example を .env.local にコピー
copy env.example .env.local
```

`.env.local` を編集して必要な値を設定：
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
MAIL_TO=info@example.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 4. 開発サーバーの起動（テスト用）
```powershell
npm run dev
```
ブラウザで http://localhost:3000 を開く

### 5. 本番用ビルド
```powershell
npm run build
```

### 6. 本番サーバーの起動
```powershell
npm run start
```

## トラブルシューティング

### エラー: 'node' は認識されません
- Node.jsが正しくインストールされていない
- PowerShellを再起動する
- PATHの設定を確認する

### エラー: パッケージが見つからない
```powershell
npm install
```
を再実行

### エラー: ポート3000が使用中
```powershell
npm run dev -- -p 3001
```
で別のポートを使用

## デプロイオプション

### Vercel（推奨）
1. https://vercel.com でアカウント作成
2. プロジェクトをGitHubにpush
3. Vercelでimport
4. 自動デプロイ完了

### 手動デプロイ
1. `npm run build` 実行
2. `.next` フォルダと `public` フォルダをサーバーにアップロード
3. Node.jsサーバーで起動

