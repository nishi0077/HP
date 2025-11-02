import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Monitor, Target, TrendingUp, Globe, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HP制作/最適化サービス | 成果を出すサイト制作・改善',
  description: '目的は「見せる」ではなく「成果を出す」サイトづくり。事業戦略と顧客導線を踏まえた構成設計により、ブランド価値と成約率を同時に高めます。',
}

export default function WebsiteServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-['Zen_Old_Mincho'] mb-6">
              成果にこだわるHP制作
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-['Zen_Old_Mincho'] mb-8">
              目的は「見せる」ではなく「成果を出す」サイトづくり。<br />
              事業戦略と顧客導線を踏まえた構成設計により、ブランド価値と成約率を同時に高めます。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2">成果重視</Badge>
              <Badge variant="secondary" className="px-4 py-2">戦略設計</Badge>
              <Badge variant="secondary" className="px-4 py-2">SEO対策</Badge>
              <Badge variant="secondary" className="px-4 py-2">レスポンシブ</Badge>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="https://lin.ee/7IVLhKDH">無料相談する</Link>
              </Button>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">20+</div>
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
              <div className="text-4xl font-bold text-white mb-2">250%</div>
              <div className="text-white/80">平均CV改善率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">180%</div>
              <div className="text-white/80">平均滞在時間向上</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80">制作実績</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">HP制作サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Target className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">戦略的設計</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">事業戦略と顧客導線を踏まえた構成設計</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">成果重視</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">「見せる」ではなく「成果を出す」サイトづくり</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">広告連携</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">Web広告からの流入させ、問い合わせを最大化</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Monitor className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">レスポンシブ対応</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">全デバイスで最適な表示を実現</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">制作の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">01</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">ヒアリング・分析</h3>
              <p className="text-white/80">事業戦略とターゲット分析で最適なサイト戦略を策定</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">02</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">サイト設計</h3>
              <p className="text-white/80">ユーザー導線と成果を重視したサイト構成を設計</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">03</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">デザイン制作</h3>
              <p className="text-white/80">ブランド価値と成果を両立するデザインを制作</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">04</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">コーディング</h3>
              <p className="text-white/80">高速表示とSEO最適化を実装</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">05</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">運用・改善</h3>
              <p className="text-white/80">データ分析による継続的な改善で成果を最大化</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">料金プラン</h2>
          <p className="text-center text-white/80 mb-12">お客様のニーズに合わせた最適なプランをご用意しています。全てのプランで高品質なサイト制作と継続的なサポートを提供します。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">ライトプラン</CardTitle>
                <div className="text-3xl font-bold text-white">¥300,000〜</div>
                <div className="text-white/80">基本料金</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    5ページ以内のサイト制作
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    レスポンシブ対応
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    SEO基本対策
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    お問い合わせフォーム
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
                <div className="text-3xl font-bold text-white">¥500,000〜</div>
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
                    10ページ以内のサイト制作
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    戦略的サイト設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    無制限修正対応
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">プレミアムプラン</CardTitle>
                <div className="text-3xl font-bold text-white">¥800,000〜</div>
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
                    無制限ページ制作
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    EC機能・会員機能
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    運用サポート
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-['Zen_Old_Mincho']">
              成果を最大化するサイトで、<br />
              ビジネスを加速させませんか？
            </h2>
            <p className="text-lg text-white/80 mb-8">
              私たちのHP制作サービスは、ただのサイトではなく、<br />
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
