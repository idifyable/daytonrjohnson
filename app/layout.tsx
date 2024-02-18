import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
