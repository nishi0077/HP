import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Route, Target, Users, TrendingUp, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '集客導線設計 | 認知→興味→行動まで一貫した売れる仕組み構築',
  description: 'ユーザーの感情と行動心理に基づき、「認知 → 興味 → 行動」までを一貫設計。LP、公式LINE、広告の導線を最適化し、自然に申し込みへとつながる「売れる仕組み」を構築します。',
}

export default function FunnelServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-['Zen_Old_Mincho'] mb-6">
              集客導線設計
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-['Zen_Old_Mincho'] mb-8">
              ユーザーの感情と行動心理に基づき、「認知 → 興味 → 行動」までを一貫設計。<br />
              LP、公式LINE、広告の導線を最適化し、自然に申し込みへとつながる「売れる仕組み」を構築します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2">導線設計</Badge>
              <Badge variant="secondary" className="px-4 py-2">心理設計</Badge>
              <Badge variant="secondary" className="px-4 py-2">統合最適化</Badge>
              <Badge variant="secondary" className="px-4 py-2">売れる仕組み</Badge>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="https://lin.ee/7IVLhKDH">無料相談する</Link>
              </Button>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">60+</div>
                <div className="text-white/80 text-sm">導線設計実績</div>
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
              <div className="text-4xl font-bold text-white mb-2">400%</div>
              <div className="text-white/80">平均CV改善率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">250%</div>
              <div className="text-white/80">平均LTV向上率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">60+</div>
              <div className="text-white/80">導線設計実績</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">集客導線設計の特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Users className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">心理設計</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">ユーザーの感情と行動心理に基づいた導線設計</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Route className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">一貫設計</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">認知→興味→行動まで一貫した導線を設計</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Target className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">統合最適化</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">LP・LINE・広告の導線を統合して最適化</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">売れる仕組み</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">自然に申し込みへとつながる仕組みを構築</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funnel Stages Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">導線設計の段階</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <CardTitle className="text-white font-['Zen_Old_Mincho'] text-center">認知段階</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    広告・SNSでの認知獲得
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ブランド認知向上
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ターゲット層へのリーチ
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    興味喚起コンテンツ
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <CardTitle className="text-white font-['Zen_Old_Mincho'] text-center">興味段階</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    LPでの詳細情報提供
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    価値提案の明確化
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    信頼性の構築
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    興味を行動に転換
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <CardTitle className="text-white font-['Zen_Old_Mincho'] text-center">行動段階</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    公式LINE登録
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    問い合わせ・申し込み
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    購入・契約
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    リピート・紹介
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Channel Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">統合チャネル設計</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Target className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">LP設計</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ヒーローセクション設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    価値提案の明確化
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    CTA最適化
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    信頼性構築要素
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">LINE設計</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    友達追加導線設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    リッチメニュー設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    メッセージ配信設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    タグ管理・セグメント
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">広告設計</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ターゲティング設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    クリエイティブ設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ランディング設計
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    計測・最適化設計
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">導線設計の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">01</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">現状分析</h3>
              <p className="text-white/80">既存の導線とユーザー行動を詳細に分析</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">02</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">心理分析</h3>
              <p className="text-white/80">ターゲットの感情と行動心理を深く理解</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">03</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">導線設計</h3>
              <p className="text-white/80">認知→興味→行動の一貫した導線を設計</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">04</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">統合実装</h3>
              <p className="text-white/80">LP・LINE・広告を統合して実装</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">05</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">最適化</h3>
              <p className="text-white/80">データに基づく継続的な最適化</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">料金プラン</h2>
          <p className="text-center text-white/80 mb-12">お客様のニーズに合わせた最適なプランをご用意しています。全てのプランで高品質な導線設計と継続的なサポートを提供します。</p>
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
                    基本導線設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    LP設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    基本LINE設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    設計レポート提出
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
                    詳細心理分析
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    広告導線設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    統合実装支援
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
                    完全統合設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    実装・運用支援
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    継続的最適化
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
              売れる仕組みで、<br />
              ビジネスを加速させませんか？
            </h2>
            <p className="text-lg text-white/80 mb-8">
              私たちの集客導線設計は、ただの設計ではなく、<br />
              成果にコミットする「売れる仕組み」を構築します。
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
