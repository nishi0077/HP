import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { PageHero } from '@/components/sections/page-hero'
import { Portfolio } from '@/components/sections/portfolio'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Footer } from '@/components/ui/footer-section'

export default function CasesPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <PageHero 
          title={site.cases.title}
          description="実際の実績を通して、私たちの取り組みと成果をご紹介します。"
          colorScheme="orange"
        />
        <Portfolio portfolio={site.portfolio} />
        <CtaBanner cta={site.cta} />
      </main>
      <Footer />
    </div>
  )
}


