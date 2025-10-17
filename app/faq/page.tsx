import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { PageHero } from '@/components/sections/page-hero'
import { Faq } from '@/components/sections/faq'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Footer } from '@/components/ui/footer-section'

export default function FaqPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <PageHero 
          title={site.faq.title}
          description="よくお寄せいただく質問とその回答をまとめました。"
          colorScheme="purple"
        />
        <Faq faq={site.faq} />
        <CtaBanner cta={site.cta} />
      </main>
      <Footer />
    </div>
  )
}


