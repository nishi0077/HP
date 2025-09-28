import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { PageHero } from '@/components/sections/page-hero'
import { Pricing } from '@/components/sections/pricing'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Footer } from '@/components/sections/footer'

export default function PricingPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <PageHero 
          title={site.pricing.title}
          description="目的とKPIに合わせて、必要最小コストで最大の成果を設計します。"
          colorScheme="purple"
        />
        <Pricing pricing={site.pricing} />
        <CtaBanner cta={site.cta} />
      </main>
      <Footer footer={site.footer} navigation={site.navigation} site={site.site} />
    </div>
  )
}


