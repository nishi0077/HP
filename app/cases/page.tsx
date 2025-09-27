import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { CasesWithCharts } from '@/components/sections/cases-with-charts'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Footer } from '@/components/sections/footer'

export default function CasesPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <div className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {site.cases.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                実際の事例を通して、私たちの取り組みと成果をご紹介します。
              </p>
            </div>
          </div>
        </div>
        <CasesWithCharts cases={site.cases} />
        <CtaBanner cta={site.cta} />
      </main>
      <Footer footer={site.footer} navigation={site.navigation} site={site.site} />
    </div>
  )
}


