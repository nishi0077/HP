import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Twitter, Instagram } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { loadSite } from '@/lib/content'

export default function ContactPage() {
  const siteData = loadSite()
  // ナビゲーションデータを直接定義
  const navigation = {
    logo_text: "Next Sociality",
    links: [
      { label: "ホーム", href: "/" },
      { label: "サービス", href: "/services" },
      { label: "価格", href: "/pricing" },
      { label: "実績", href: "/cases" },
      { label: "お問い合わせ", href: "/contact" }
    ],
    cta: { label: "お問い合わせ", href: "/contact" }
  }

  const footer = {
    quick_links: ["ホーム", "サービス", "価格", "実績", "お問い合わせ"],
    legal: ["プライバシーポリシー", "利用規約"],
    copyright: { text: "© 2024 Next Sociality. All rights reserved." }
  }

  const site = {
    name: "Next Sociality",
    locale: "ja",
    domain: "nextsociality.com",
    brand: {
      tagline: "一貫したWebマーケで売上直結",
      phone: "",
      email: "nishiura@nextsociality.com",
      address: "Saitama, Japan"
    },
    seo: {
      title: "一貫型Webマーケ支援｜広告運用・LP制作・バナー・SNS運用",
      description: "戦略設計からクリエイティブ制作、広告運用、計測と改善までを一気通貫で支援。高い再現性でCPA最適化とLTV向上を実現します。",
      keywords: ["広告運用", "LP制作", "バナー制作", "SNS運用", "Webマーケティング", "CAPI", "GA4", "CVR改善"]
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Header navigation={navigation} />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* ヒーローセクション */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Zen_Old_Mincho']">
              お問い合わせ
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              ご質問・ご相談など、お気軽にお問い合わせください。<br />
              丁寧かつ迅速にご対応いたします。
            </p>
          </div>

          {/* お問い合わせフォーム */}
          <div className="mb-20">
            <ContactForm formFields={siteData.contact.form_fields} />
            <p className="text-center text-white/60 text-sm mt-6">
              ※ ご入力内容は担当（{siteData.site.brand.email}）に直接届きます。
            </p>
          </div>

          {/* SNS */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-['Zen_Old_Mincho']">
              SNSでも発信しています
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
            {/* X */}
            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors duration-300 h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-500/20 rounded-full w-fit">
                  <Twitter className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-white text-xl font-['Zen_Old_Mincho']">Xでのお問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80 mb-6">
                  広告運用やマーケティング事例について<br />
                  投稿してます。
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold px-8 py-3 w-full"
                >
                  <a 
                    href="https://x.com/nishi_webmarke" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Xプロフィールを見る
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Threads */}
            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors duration-300 h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-purple-500/20 rounded-full w-fit">
                  <Instagram className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-white text-xl font-['Zen_Old_Mincho']">Threadsでのお問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80 mb-6">
                  私の人間性、スタンスなどが現れています。<br />
                  興味がある方はぜひ
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold px-8 py-3 w-full"
                >
                  <a 
                    href="https://www.threads.com/@nishi.webmarke" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Threadsプロフィールを見る
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* お問い合わせに対するコミットメント */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12 font-['Zen_Old_Mincho']">
              お問い合わせに関して
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-4 font-['Zen_Old_Mincho']">迅速な対応</h3>
                  <p className="text-white/80">
                    基本的に360日くらいは働いているので、迅速に返信します。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-4 font-['Zen_Old_Mincho']">無料相談</h3>
                  <p className="text-white/80">
                    相談ベースではお金を取りません。<br />
                    気軽にご相談ください。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-4 font-['Zen_Old_Mincho']">最適な提案</h3>
                  <p className="text-white/80">
                    ご相談内容に応じて、マーケ目線と経営者目線で最適な提案をいたします。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer footer={footer} navigation={navigation} site={site} />
    </div>
  )
}