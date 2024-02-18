import type { Metadata } from 'next';
import { Permanent_Marker, Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanent-marker',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dayton Johnson | Web Developer',
  description:
    "Hello, I'm a web developer based in Eau Claire, Wisconsin. I'm passionate in coding and creating useful web-based software. I love learning new technologies and am focused on becoming a master of the web platform.",
  openGraph: {
    title: 'Dayton Johnson | Web Developer',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${permanentMarker.variable} ${lato.className}`}
      >
        {children}
      </body>
    </html>
  );
}
