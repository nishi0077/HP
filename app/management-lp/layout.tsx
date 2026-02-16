import type { Metadata } from 'next'
import { IBM_Plex_Sans_JP } from 'next/font/google'
import Script from 'next/script'

const ibmPlexSansJP = IBM_Plex_Sans_JP({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans-jp',
  preload: true,
})

export const metadata: Metadata = {
  title: '7つのマネジメント核で、チームが自走する | マネジメント実践講座',
  description: '部下が動かない、成果が再現できない。その原因は「体系的に学んでいないこと」です。20年の現場経験を凝縮した7つのマネジメント核を学び、再現性のあるマネジメントを身につけませんか？',
  keywords: 'マネジメント,管理職,リーダーシップ,組織改善,チームビルディング,マネジメント講座',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '7つのマネジメント核で、チームが自走する',
    description: '部下が動かない、成果が再現できない。20年の現場経験を凝縮した7つのマネジメント核を学び、再現性のあるマネジメントを身につけませんか？',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '7つのマネジメント核で、チームが自走する',
    description: '部下が動かない、成果が再現できない。20年の現場経験を凝縮した7つのマネジメント核を学び、再現性のあるマネジメントを身につけませんか？',
  },
}

export default function ManagementLPLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style jsx global>{`
        :root {
          --lp-primary: 214 100% 45%;
          --lp-primary-dark: 214 100% 35%;
          --lp-primary-light: 214 100% 95%;
          --lp-accent: 199 89% 48%;
          --lp-text: 220 20% 20%;
          --lp-text-light: 220 15% 40%;
          --lp-bg: 0 0% 100%;
          --lp-bg-secondary: 214 32% 97%;
        }
      `}</style>
      <div className={`${ibmPlexSansJP.variable} font-sans`}>
        {children}
      </div>
      
      {/* GTM Container (LP専用) */}
      <Script
        id="gtm-management-lp"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}');
          `
        }}
      />
      
      {/* Meta Pixel (LP専用イベント) */}
      <Script
        id="fb-management-lp"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID || ''}');
            fbq('track', 'PageView');
          `
        }}
      />
      
      <noscript>
        <iframe 
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}`}
          height="0" 
          width="0" 
          style={{display:'none',visibility:'hidden'}}
        />
      </noscript>
    </>
  )
}
