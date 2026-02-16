import { Hero } from '@/components/management-lp/hero'
import { Problems } from '@/components/management-lp/problems'
import { PainPoints } from '@/components/management-lp/pain-points'
import { Solution } from '@/components/management-lp/solution'
import { Transformation } from '@/components/management-lp/transformation'
import { LineBenefits } from '@/components/management-lp/line-benefits'
import { Webinar } from '@/components/management-lp/webinar'
import { Instructor } from '@/components/management-lp/instructor'
import { FAQ } from '@/components/management-lp/faq'
import { FinalCTA } from '@/components/management-lp/final-cta'
import { Footer } from '@/components/management-lp/footer'
import { ScrollTracker } from '@/components/management-lp/scroll-tracker'

export default function ManagementLPPage() {
  return (
    <>
      <ScrollTracker />
      <main className="min-h-screen bg-white">
        <Hero />
        <Problems />
        <PainPoints />
        <Solution />
        <Transformation />
        <LineBenefits />
        <Webinar />
        <Instructor />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
