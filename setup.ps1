# Next Sociality セットアップスクリプト

Write-Host "=== Next Sociality セットアップ ===" -ForegroundColor Green

# Node.jsのバージョン確認
Write-Host "Node.jsのバージョンを確認中..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js $nodeVersion が見つかりました" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.jsが見つかりません" -ForegroundColor Red
    Write-Host "Node.jsをインストールしてください: https://nodejs.org/ja/" -ForegroundColor Yellow
    exit 1
}

# 依存関係のインストール
Write-Host "依存関係をインストール中..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ 依存関係のインストールが完了しました" -ForegroundColor Green
} else {
    Write-Host "✗ 依存関係のインストールに失敗しました" -ForegroundColor Red
    exit 1
}

# 環境変数ファイルの作成
if (-not (Test-Path ".env.local")) {
    Write-Host "環境変数ファイルを作成中..." -ForegroundColor Yellow
    Copy-Item "env.example" ".env.local"
    Write-Host "✓ .env.local ファイルを作成しました" -ForegroundColor Green
    Write-Host "⚠️  .env.local ファイルを編集して適切な値を設定してください" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== セットアップ完了 ===" -ForegroundColor Green
Write-Host ""
Write-Host "次のコマンドでサイトを起動できます:" -ForegroundColor White
Write-Host "  開発モード: npm run dev" -ForegroundColor Cyan
Write-Host "  本番ビルド: npm run build" -ForegroundColor Cyan
Write-Host "  本番起動: npm run start" -ForegroundColor Cyan
Write-Host ""
Write-Host "開発サーバーを起動しますか? (y/N)" -ForegroundColor Yellow
$response = Read-Host

if ($response -eq 'y' -or $response -eq 'Y') {
    Write-Host "開発サーバーを起動中..." -ForegroundColor Yellow
    Write-Host "ブラウザで http://localhost:3000 を開いてください" -ForegroundColor Green
    npm run dev
}

