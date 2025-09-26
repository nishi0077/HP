import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { Services } from '@/components/sections/services'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Footer } from '@/components/sections/footer'

export default function ServicesPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <div className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {site.services.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                {site.services.intro}
              </p>
            </div>
          </div>
        </div>
        <Services services={site.services} />
        <CtaBanner cta={site.cta} />
      </main>
      <Footer footer={site.footer} navigation={site.navigation} site={site.site} />
    </div>
  )
}


