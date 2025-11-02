import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, TrendingUp, Target, BarChart3, Megaphone, Zap, Globe, Smartphone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '広告運用サービス | Meta・Google・YouTube広告の運用代行',
  description: '獲得単価と利益の最適化、効果的なクリエイティブ、一貫した広告戦略を設計します。',
}

export default function AdvertisingServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-['Zen_Old_Mincho'] mb-6">
              成果にこだわる広告運用
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-['Zen_Old_Mincho'] mb-8">
              戦略的な広告設計と効果的なクリエイティブで、<br />
              高いROIを実現する広告運用を提供します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2">戦略設計</Badge>
              <Badge variant="secondary" className="px-4 py-2">高ROI</Badge>
              <Badge variant="secondary" className="px-4 py-2">LPO</Badge>
              <Badge variant="secondary" className="px-4 py-2">データ分析</Badge>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="https://lin.ee/7IVLhKDH">無料相談する</Link>
              </Button>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-white/80 text-sm">運用実績</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">広告運用サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Target className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">戦略的設計</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">心の動きから逆算した高成果クリエイティブ設計</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Megaphone className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">クリエイティブ制作</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">ブランド価値を引き立て、成果を生むクリエイティブ設計</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">データ分析</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">数値の裏にある&ldquo;ユーザーの動きと心理&rdquo;を可視化し、次の一手を導く分析を行います。</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white font-['Zen_Old_Mincho']">LPO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">広告から遷移したユーザー心理を考慮し、取りこぼすことなくCVに到達させる設計</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advertising Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">対応広告媒体</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/images/marketing/Google③.png" alt="Google" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                  <CardTitle className="text-white font-['Zen_Old_Mincho']">Google広告</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    リスティング広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ディスプレイ広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    P-max
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/images/marketing/Meta②.png" alt="Meta" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                  <CardTitle className="text-white font-['Zen_Old_Mincho']">Meta広告</CardTitle>
                </div>
                <p className="text-white/60 text-sm">(Instagram/Facebook)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    フィード広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ストーリーズ広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    リール広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    スレッズ広告
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
                  <CardTitle className="text-white font-['Zen_Old_Mincho']">LINE広告</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    タイムライン広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    LINE NEWS広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    LINE VOOM広告
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image src="/images/marketing/Yahoo➃.png" alt="Yahoo" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                  <CardTitle className="text-white font-['Zen_Old_Mincho']">Yahoo広告</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    検索広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ディスプレイ広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    動画広告
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    ショッピング広告
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">運用実績</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="text-sm text-white/60 mb-2">Energy</div>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">太陽光・蓄電池</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">ROAS+200％改善、ROI+250%改善</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="text-sm text-white/60 mb-2">housing</div>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">地方工務店</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">ROAS +8,000%、ROI +4,000%</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <div className="text-sm text-white/60 mb-2">Luxury Asset Business</div>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">高級ブランド買取業者</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">サイト流入数 東京+2,148%、福岡+3,322%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Process */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">運用の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">01</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">ヒアリング・分析</h3>
              <p className="text-white/80">市場分析やターゲット設定など、戦略的なマーケティングプランを策定します</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">02</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">戦略設計</h3>
              <p className="text-white/80">ユーザーの行動心理を考慮した、効果的な広告戦略を設計</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">03</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">クリエイティブ制作</h3>
              <p className="text-white/80">ブランドの世界観とコンバージョン率の両立を意識したクリエイティブを制作</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">04</div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Zen_Old_Mincho']">配信開始</h3>
              <p className="text-white/80">最適化された広告の配信開始とリアルタイム監視</p>
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
          <p className="text-center text-white/80 mb-12">お客様のニーズに合わせた最適なプランをご用意しています。全てのプランで高品質な広告運用と継続的なサポートを提供します。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-['Zen_Old_Mincho']">ライトプラン</CardTitle>
                <div className="text-3xl font-bold text-white">¥150,000〜</div>
                <div className="text-white/80">基本料金</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    アカウント構築・キャンペーン初期設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    tCPA最適化による効率的な配信設計
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    月1回の成果レポート＋改善提案
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    LP改善アドバイス
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
                    ライトプラン全機能
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    マルチチャネル運用（Google＋Meta／LINE連携可）
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    週次レポート＋改善アクションプラン
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    クリエイティブABテスト設計＋LP構成改善
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
                    マーケティング戦略設計・経営導線の可視化
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    ブランド・クリエイティブ戦略ディレクション
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    経営レポート＆伴走型コンサルティング
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-['Zen_Old_Mincho']">よくある質問</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Zen_Old_Mincho']">Q 運用期間はどのくらいですか？</h3>
              <p className="text-white/80">標準的な広告運用の場合、約1〜3ヶ月程度です。ただし、プロジェクトの規模や複雑さによって変動する場合があります。急ぎの場合は、ご相談ください。</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Zen_Old_Mincho']">Q どのような業界の広告運用に対応していますか？</h3>
              <p className="text-white/80">美容、健康、不動産、教育、BtoB、SaaSなど、幅広い業界の広告運用実績があります。業界特性を踏まえた効果的な戦略とクリエイティブで、高いROIを実現します。</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Zen_Old_Mincho']">Q 運用後の修正は可能ですか？</h3>
              <p className="text-white/80">はい、納品後2週間以内の軽微な修正は無償で対応しています。それ以降の修正や大幅な変更については、別途お見積りいたします。</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Zen_Old_Mincho']">Q LPOとは何ですか？</h3>
              <p className="text-white/80">LPO（Landing Page Optimization）とは、ランディングページの最適化手法です。広告から遷移したユーザーの心理と行動を分析し、コンバージョン率を向上させるための継続的な改善を行います。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-['Zen_Old_Mincho']">
              成果を最大化する広告運用で、<br />
              ビジネスを加速させませんか？
            </h2>
            <p className="text-lg text-white/80 mb-8">
              私たちの広告運用サービスは、ただの配信ではなく、<br />
              成果にコミットする戦略的なマーケティングツールです。
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="https://lin.ee/7IVLhKDH">ご相談はこちら</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
