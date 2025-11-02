import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, FileText, Target, TrendingUp, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LP制作/改善サービス | 高コンバージョンランディングページ制作',
  description: 'お客様の声を伝える分かりやすい構成と文章、信頼性の向上、成果の測定、継続的な改善をデータに基づいて行います。',
}

export default function LPServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-['Zen_Old_Mincho'] mb-6">
              成果にこだわるLP制作
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-['Zen_Old_Mincho'] mb-8">
              戦略的なデザインと効果的なコピーライティングで、<br />
              高いコンバージョン率を実現するランディングページを制作します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2">戦略設計</Badge>
              <Badge variant="secondary" className="px-4 py-2">高CVR</Badge>
              <Badge variant="secondary" className="px-4 py-2">A/Bテスト</Badge>
              <Badge variant="secondary" className="px-4 py-2">SEO対策</Badge>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="https://lin.ee/7IVLhKDH">無料相談する</Link>
              </Button>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-white/80 text-sm">制作実績</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200%</div>
              <div className="text-white/80">平均問い合わせ増加率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2件→20件</div>
              <div className="text-white/80">CV増加数</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">制作実績</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">LP制作サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Target className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">戦略的デザイン</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">ユーザー心理を考慮した、高コンバージョンを実現するデザイン設計</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <FileText className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">コピーライティング</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">商品の価値を最大限に引き出す、説得力のある文章作成</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">レスポンシブ対応</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">すべてのデバイスで最適な表示を実現する完全レスポンシブ対応</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">SEO対策</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">検索エンジンからの自然流入を増やすための最適化</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">制作の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">01</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">ヒアリング・分析</h3>
              <p className="text-white/80">市場分析やターゲット設定など、戦略的なマーケティングプランを策定します</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">02</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">ワイヤーフレーム作成</h3>
              <p className="text-white/80">ユーザーの行動心理を考慮した、効果的な導線設計を行います</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">03</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">デザイン制作</h3>
              <p className="text-white/80">ブランドの世界観とコンバージョン率の両立を意識したデザインを制作</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">04</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">コーディング</h3>
              <p className="text-white/80">表示速度にこだわった最適化と、レスポンシブ対応の実装</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">05</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">運用・改善</h3>
              <p className="text-white/80">A/Bテストや分析による継続的な改善で、成果を最大化します</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">料金プラン</h2>
          <p className="text-center text-white/80 mb-12">お客様のニーズに合わせた最適なプランをご用意しています。全てのプランで高品質なLP制作と継続的なサポートを提供します。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">ライトプラン</CardTitle>
                <div className="text-3xl font-bold text-white">¥200,000〜</div>
                <div className="text-white/80">基本料金</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    1ページLP制作（レスポンシブ対応）
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    問い合わせフォーム設置
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    SEO基本対策
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    広告配信前提の設計を省略し、導線設計を簡略化
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">おすすめ</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">スタンダードプラン</CardTitle>
                <div className="text-3xl font-bold text-white">¥250,000〜</div>
                <div className="text-white/80">基本料金</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    ライトプランの全機能
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    広告運用戦略設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    修正2回対応
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    広告配信前提の構成案＋計測初期セット（GA4／タグ等）
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">プレミアムプラン</CardTitle>
                <div className="text-3xl font-bold text-white">¥400,000〜</div>
                <div className="text-white/80">基本料金</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    スタンダードプランの全機能
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    マーケティング戦略設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    ユーザー心理分析
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    コンバージョン最適化（CTA改善・ヒートマップ初期分析）
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    無制限修正対応
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    LINE導線設計・Pixel/CAPI整備
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-['Zen_Old_Mincho']">
              成果を最大化するLPで、<br />
              ビジネスを加速させませんか？
            </h2>
            <p className="text-lg text-white/80 mb-8">
              私たちのLP制作サービスは、ただのデザインではなく、<br />
              成果にコミットする戦略的なマーケティングツールです。
            </p>
            <Button asChild className="bg-white text-black hover:bg-white/90">
              <Link href="https://lin.ee/7IVLhKDH">ご相談はこちら</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
