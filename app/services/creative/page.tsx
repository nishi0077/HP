import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Zap, Target, BarChart3, Video, Image } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'

export const metadata: Metadata = {
  title: 'バナー/動画クリエイティブ制作 | 高成果クリエイティブ制作サービス',
  description: 'お客様の段階に合わせた訴求、反応の良いクリエイティブ、広告とクリエイティブの連携で効果的な組み合わせを実現します。',
}

export default function CreativeServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-['Zen_Old_Mincho'] mb-6">
              成果にこだわるクリエイティブ制作
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-['Zen_Old_Mincho'] mb-8">
              お客様の段階に合わせた訴求、反応の良いクリエイティブ、<br />
              広告とクリエイティブの連携で効果的な組み合わせを実現します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2">バナー制作</Badge>
              <Badge variant="secondary" className="px-4 py-2">動画制作</Badge>
              <Badge variant="secondary" className="px-4 py-2">A/Bテスト</Badge>
              <Badge variant="secondary" className="px-4 py-2">高成果</Badge>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="https://lin.ee/7IVLhKDH">無料相談する</Link>
              </Button>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
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
              <div className="text-4xl font-bold text-white mb-2">150%</div>
              <div className="text-white/80">平均CTR改善率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">80%</div>
              <div className="text-white/80">平均CVR改善率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">制作実績</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">クリエイティブ制作サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Target className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">ターゲット分析</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">お客様の段階に合わせた訴求で、効果的なクリエイティブを制作</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">高反応クリエイティブ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">データに基づいた反応の良いクリエイティブ設計</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Video className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">動画制作</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">バナーから動画まで、多様なクリエイティブに対応</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">A/Bテスト</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">複数パターンのテストで最適なクリエイティブを発見</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Creative Types Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">制作可能なクリエイティブ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Image className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">バナー広告</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    リスティング広告バナー
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ディスプレイ広告バナー
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    SNS広告バナー
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    LP用バナー
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Video className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">動画広告</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    YouTube広告動画
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    TikTok動画
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Instagram Reels
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Facebook動画広告
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">その他クリエイティブ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    LP用ヒーロー画像
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    アイコン・ロゴ制作
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    インフォグラフィック
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    パンフレット・チラシ
                  </li>
                </ul>
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
              <p className="text-white/80">ターゲット分析と競合調査で効果的なクリエイティブ戦略を策定</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">02</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">コンセプト設計</h3>
              <p className="text-white/80">ブランドイメージと成果を両立するコンセプトを設計</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">03</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">デザイン制作</h3>
              <p className="text-white/80">複数パターンのクリエイティブを制作</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">04</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">A/Bテスト</h3>
              <p className="text-white/80">データに基づいて最適なクリエイティブを選定</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">05</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">最適化・改善</h3>
              <p className="text-white/80">継続的な改善でクリエイティブの成果を最大化</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">料金プラン</h2>
          <p className="text-center text-white/80 mb-12">お客様のニーズに合わせた最適なプランをご用意しています。全てのプランで高品質なクリエイティブ制作と継続的なサポートを提供します。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">ライトプラン</CardTitle>
                <div className="text-3xl font-bold text-white">¥100,000〜</div>
                <div className="text-white/80">基本料金</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    バナー5点制作
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    基本デザイン
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    2回までの修正対応
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
                <div className="text-3xl font-bold text-white">¥200,000〜</div>
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
                    バナー10点制作
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    A/Bテスト対応
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
                <div className="text-3xl font-bold text-white">¥350,000〜</div>
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
                    動画制作対応
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    戦略的クリエイティブ設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    継続的な最適化サポート
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
              成果を最大化するクリエイティブで、<br />
              ビジネスを加速させませんか？
            </h2>
            <p className="text-lg text-white/80 mb-8">
              私たちのクリエイティブ制作サービスは、ただのデザインではなく、<br />
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
