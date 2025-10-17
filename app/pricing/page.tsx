import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/ui/footer-section'
import PricingSection4 from '@/components/ui/pricing-section-4'

export default function PricingPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <PricingSection4 />
      </main>
      <Footer />
    </div>
  )
}
