import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yuiterapiaholistica.com.br'),
  alternates: {
    canonical: '/',
  },
  title: 'Yui Terapia Holística | Tarot Terapêutico Online e Mentoria',
  description:
    'Mapeamento e discernimento para bloqueios emocionais e transições de vida. Atendimento online de Tarot Terapêutico, Limpeza Energética e Mentoria. Agende sua sessão.',
  keywords: ['Terapia Holística Online', 'Tarot Terapêutico', 'Mesa da Ascensão', 'Limpeza Energética', 'abandono', 'rejeição','tristeza','Ansiedade', 'Mentoria Espiritual'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Yui Terapia Holística | Clareza Lógica e Espiritual',
    description: 'Mapeamento profundo para bloqueios emocionais. Atendimento acolhedor online. Horários extendidos para sua conveniência. Agende sua sessão de Tarot Terapêutico, Limpeza Energética ou Mentoria.',
    url: 'https://www.yuiterapiaholistica.com.br',
    siteName: 'Yui Terapia Holística',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F3F0FF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">
        
        {/* Google Tag Manager - Script Principal */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TZ78ZGH6');
          `}
        </Script>

        {/* Google Tag Manager - Noscript (Para segurança em falhas de JS) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZ78ZGH6"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}