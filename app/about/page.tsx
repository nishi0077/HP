import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { PageHero } from '@/components/sections/page-hero'
import { About } from '@/components/sections/about'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Footer } from '@/components/ui/footer-section'

export default function AboutPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <PageHero 
          title={site.about.title}
          description="私たちのミッション、ビジョン、そして代表者についてご紹介します。"
          colorScheme="teal"
        />
        <About about={site.about} />
        <CtaBanner cta={site.cta} />
      </main>
      <Footer />
    </div>
  )
}


