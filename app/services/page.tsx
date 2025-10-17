import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { PageHero } from '@/components/sections/page-hero'
import { Services } from '@/components/sections/services'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Footer } from '@/components/sections/footer'

export default function ServicesPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <PageHero 
          title={site.services.title}
          description={site.services.intro}
          colorScheme="green"
        />
        <Services services={site.services} />
        <CtaBanner cta={site.cta} />
      </main>
      <Footer footer={site.footer} navigation={site.navigation} site={site.site} />
    </div>
  )
}


