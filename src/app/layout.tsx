import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/styles/GlobalStyle';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dayton Johnson — Software Engineer',
  description:
    'Software engineer focused on commerce product systems, pricing workflows, and independent tools for coaches and career growth.',
  icons: {
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Dayton Johnson — Software Engineer',
    description:
      'Software engineer focused on commerce product systems, pricing workflows, and independent tools for coaches and career growth.',
    url: 'https://www.daytonrjohnson.com',
    siteName: 'Dayton Johnson',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
