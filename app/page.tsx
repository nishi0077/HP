import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Highlights } from '@/components/sections/highlights'
import { Services } from '@/components/sections/services'
import { Process } from '@/components/sections/process'
import { Pricing } from '@/components/sections/pricing'
import { CasesWithCharts } from '@/components/sections/cases-with-charts'
import { Faq } from '@/components/sections/faq'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <Hero hero={site.home.hero} />
        <Highlights highlights={site.home.highlights} />
        <Services services={site.services} />
        <Process process={site.process} />
        <Pricing pricing={site.pricing} />
        <CasesWithCharts cases={site.cases} />
        <Faq faq={site.faq} />
        <CtaBanner cta={site.cta} />
      </main>
      <Footer footer={site.footer} navigation={site.navigation} site={site.site} />
    </div>
  )
}


