import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import dynamic from 'next/dynamic'

// 重いコンポーネントを動的インポート（ユーザーが見るまで読み込まない）
const HeroHighlights = dynamic(() => import('@/components/sections/hero-highlights').then(mod => ({ default: mod.HeroHighlights })), {
  loading: () => <div className="py-20 lg:py-32 bg-neutral-950" />,
  ssr: true,
})

const Services = dynamic(() => import('@/components/sections/services').then(mod => ({ default: mod.Services })), {
  loading: () => <div className="py-20 bg-black" />,
  ssr: true,
})

const Process = dynamic(() => import('@/components/sections/process').then(mod => ({ default: mod.Process })), {
  loading: () => <div className="py-20 bg-black" />,
  ssr: true,
})

const PricingSection4 = dynamic(() => import('@/components/ui/pricing-section-4'), {
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: true,
})

const CtaBanner = dynamic(() => import('@/components/sections/cta-banner').then(mod => ({ default: mod.CtaBanner })), {
  loading: () => <div className="py-20 bg-black" />,
  ssr: true,
})

const Footer = dynamic(() => import('@/components/sections/footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="py-20 bg-black" />,
  ssr: true,
})

export default function HomePage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <HeroHighlights hero={site.home.hero} highlights={site.home.highlights} />
        <Services services={site.services} />
        <Process process={site.process} />
        <PricingSection4 />
        <CtaBanner cta={site.cta} />
      </main>
      <Footer footer={site.footer} navigation={site.navigation} site={site.site} />
    </div>
  )
}


