import Footer4Col from "@/components/ui/footer-column";

export default function DemoFooter() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">フッターデモページ</h1>
        <p className="text-lg text-muted-foreground mb-8">
          新しい4カラムフッターコンポーネントのデモページです。
        </p>
        
        <div className="prose max-w-none">
          <h2>コンポーネントの特徴</h2>
          <ul>
            <li>4カラムレイアウト（レスポンシブ対応）</li>
            <li>ソーシャルメディアリンク</li>
            <li>会社情報、サービス、ヘルプ、お問い合わせセクション</li>
            <li>アニメーション付きライブチャットインジケーター</li>
            <li>ダークモード対応</li>
          </ul>
        </div>
      </main>
      
      <Footer4Col />
    </div>
  );
}

