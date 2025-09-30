import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Image from 'next/image'
import './globals.css'
import { loadSite } from '@/lib/content'

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata(): Metadata {
  const site = loadSite()
  
  return {
    title: site.site.seo.title,
    description: site.site.seo.description,
    keywords: site.site.seo.keywords,
    metadataBase: new URL(`https://${site.site.domain}`),
    openGraph: {
      title: site.site.seo.title,
      description: site.site.seo.description,
      type: 'website',
      locale: site.site.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: site.site.seo.title,
      description: site.site.seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        
        {/* GA4 */}
        <Script
          id="ga"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `
          }}
        />
        
        {/* Meta Pixel */}
        <Script
          id="fb"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <Image 
            height={1} 
            width={1} 
            style={{display:'none'}} 
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}