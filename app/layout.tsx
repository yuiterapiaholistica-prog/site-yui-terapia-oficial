import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Yui Terapia Holística | Tarot Terapêutico Online e Mentoria',
  description:
    'Diagnóstico e clareza para bloqueios emocionais e transições de vida. Atendimento online de Tarot Terapêutico, Limpeza Energética e Mentoria. Agende sua sessão.',
  keywords: ['Terapia Holística Online', 'Tarot Terapêutico', 'Mesa da Ascensão', 'Limpeza Energética', 'Ansiedade', 'Mentoria Espiritual'],
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
    description: 'Diagnóstico profundo para bloqueios emocionais. Atendimento especializado online.',
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
