export function Footer() {
  return (
    <footer className="bg-[hsl(var(--lp-text))] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 会社情報 */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              マネジメント実践講座
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              体系的に学び、再現性のあるマネジメントを実現する
            </p>
          </div>

          {/* リンク */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-3">サービス</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">講座概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">カリキュラム</a></li>
                <li><a href="#" className="hover:text-white transition-colors">料金プラン</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">サポート</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
                <li><a href="#" className="hover:text-white transition-colors">個別相談</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">法的情報</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">特定商取引法</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">SNS</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">LINE公式</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>

          {/* 区切り線 */}
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center text-sm">
              <p className="mb-2">
                運営会社：株式会社〇〇〇〇<br />
                所在地：〒000-0000 東京都〇〇区〇〇〇<br />
                お問い合わせ：info@example.com
              </p>
              <p className="text-xs text-gray-500 mt-6">
                © {new Date().getFullYear()} Management Training. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
