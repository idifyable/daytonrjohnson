import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from '@/styles/GlobalStyle'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dayton Johnson — Software Engineer',
  description:
    'Senior Software Engineer specializing in full-stack web development. I take ideas from concept to production.',
  icons: {
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Dayton Johnson — Software Engineer',
    description: 'Senior Software Engineer specializing in full-stack web development.',
    url: 'https://www.daytonrjohnson.com',
    siteName: 'Dayton Johnson',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
