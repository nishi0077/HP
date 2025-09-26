import { loadSite } from '@/lib/content'
import { Header } from '@/components/sections/header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CtaBanner } from '@/components/sections/cta-banner'
import { Footer } from '@/components/sections/footer'

export default function AboutPage() {
  const site = loadSite()

  return (
    <div className="min-h-screen bg-background">
      <Header navigation={site.navigation} />
      <main>
        <div className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {site.about.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                {site.about.mission}
              </p>
            </div>
          </div>
        </div>

        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Values */}
              <Card>
                <CardHeader>
                  <CardTitle>私たちの価値観</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {site.about.values.map((value, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Profile */}
              <Card>
                <CardHeader>
                  <CardTitle>代表者</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">
                    {site.about.profile.representative}
                  </h3>
                  <p className="text-muted-foreground">
                    {site.about.profile.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CtaBanner cta={site.cta} />
      </main>
      <Footer footer={site.footer} navigation={site.navigation} site={site.site} />
    </div>
  )
}


