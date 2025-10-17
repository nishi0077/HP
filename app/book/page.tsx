import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/sections/footer'

export default function BookPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <div className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                無料相談予約
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                目標、制約、現状の計測環境を共有いただければ、最短の勝ち筋をご提案します。
              </p>
            </div>
          </div>
        </div>

        <section className="py-20 bg-background">
          <div className="container">
            <ContactForm formFields={site.contact.form_fields} />
          </div>
        </section>
      </main>
      <Footer footer={site.footer} navigation={site.navigation} site={site.site} />
    </div>
  )
}


