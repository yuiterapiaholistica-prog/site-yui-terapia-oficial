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
  title: 'Yui Terapia Holística | Tarot, Mapeamento Energético e Mentoria',
  description:
    'Abordagem integrativa que une a sabedoria do Tarot à neurociência aplicada e mindfulness. Mapeamento de padrões, organização do cenário mental e suporte para decisões lúcidas. Atendimento online acolhedor.',
  keywords: [
    'Yui Terapia Holística',
    'Terapia Holística Online', 
    'Tarot Terapêutico', 
    'Mapeamento Energético', 
    'Limpeza Energética', 
    'Mapeamento de Padrões', 
    'Organização Mental', 
    'Lucidez nas Decisões',
    'Inquietação', 
    'Ruído Mental',
    'Neurociência Aplicada',
    'Mindfulness no dia a dia',
    'Mentoria Vida e Propósito'
  ],
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
    title: 'Yui Terapia Holística | Discernimento Lógico, Presença e Sabedoria',
    description: 'Panorama lúcido e estruturado das suas dinâmicas internas. Unindo sensibilidade sutil, neurociência aplicada e escuta ativa para escolhas conscientes. Atendimento online flexível.',
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