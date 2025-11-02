import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, TrendingUp, Target, BarChart3, Smartphone, Users, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// 重いコンポーネントを動的インポート
const DynamicCard = dynamic(() => import('@/components/ui/card').then(mod => ({ default: mod.Card })), {
  loading: () => <div className="bg-white/10 border-white/20 rounded-lg p-6 animate-pulse" />
})

export const metadata: Metadata = {
  title: 'SNS運用サービス | Instagram・TikTok・YouTube運用代行',
  description: 'ブランド認知の向上、魅力的なコンテンツ制作、効果測定を通じて新規顧客の獲得と指名検索の促進を図ります。',
}

export default function SNSServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
                         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-['Zen_Old_Mincho'] mb-6">
               SNS運用サービス
             </h1>
             <p className="text-lg text-white/80 max-w-2xl mx-auto font-['Zen_Old_Mincho'] mb-8">
               商品やサービス、ブランドの認知向上、魅力的なコンテンツ制作、スムーズな導線設計、効果測定を通じて新規顧客の獲得と指名検索の促進を図ります。
             </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2">戦略設計</Badge>
              <Badge variant="secondary" className="px-4 py-2">高エンゲージメント</Badge>
              <Badge variant="secondary" className="px-4 py-2">ファネル構築</Badge>
              <Badge variant="secondary" className="px-4 py-2">売上向上</Badge>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="https://lin.ee/7IVLhKDH">無料相談する</Link>
              </Button>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-white/80 text-sm">運用実績</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNS Marketing Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 font-['Zen_Old_Mincho']">SNSマーケティングのプロフェッショナル</h2>
            <p className="text-lg text-white/80 font-['Zen_Old_Mincho']">戦略立案から運用まで、一貫したSNSマーケティングをサポート</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Users className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">ファネル単位の設計</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">認知→興味・関心→比較→納得といった構造的な設計で高い再現性を実現</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Heart className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">インサイト理解</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">ターゲットのインサイト(本能に基づく隠れた本音)を深く理解します。</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">ファネル構築</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">データに基づく改善提案と、詳細な分析レポートを提供します。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SNS Platforms Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">対応SNSプラットフォーム</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/images/marketing/インスタ.png" alt="Instagram" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                  <CardTitle className="text-white font-['Zen_Old_Mincho']">Instagram運用</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    初期設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    撮影
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    投稿作成
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    広告連携
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/images/marketing/TikTok.png" alt="TikTok" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                  <CardTitle className="text-white font-['Zen_Old_Mincho']">TikTok運用</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    初期設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    撮影
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    投稿作成
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    TikTokライブ戦略
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/images/marketing/YouTube.png" alt="YouTube" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                  <CardTitle className="text-white font-['Zen_Old_Mincho']">YouTube運用</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    動画コンテンツ制作
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    SEO最適化
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    チャンネル運営
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    広告連携
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/images/marketing/LINE②.png" alt="LINE" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                  <CardTitle className="text-white font-['Zen_Old_Mincho']">LINE運用</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    公式アカウント運用
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    広告連携
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    リッチメニュー設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ステップ配信
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
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">運用の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">01</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">戦略立案</h3>
              <p className="text-white/80">目標設定とターゲット層の分析</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">02</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">コンテンツ制作</h3>
              <p className="text-white/80">戦略に基づいたコンテンツ作成</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">03</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">投稿・運用</h3>
              <p className="text-white/80">最適なタイミングで投稿管理</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">04</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">エンゲージメント</h3>
              <p className="text-white/80">コメント対応やユーザー交流</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">05</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">分析・改善</h3>
              <p className="text-white/80">データ分析と継続的な改善</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-['Zen_Old_Mincho']">
              まずはご相談ください
            </h2>
            <p className="text-lg text-white/80 mb-8">
              あなたのビジネスに最適なSNS戦略をご提案いたします
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="https://lin.ee/7IVLhKDH">ご相談はこちら</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/cases">実績はこちら</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
