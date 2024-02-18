import Head from 'next/head';
import {NextPage } from 'next';
import {Header } from 'src/components/Header';
import {Footer } from 'src/components/Footer';

const name = 'Dayton Johnson';
export const siteTitle = 'Dayton Johnson | Web Developer';

interface Props {
  children?: any;
  home?: boolean;
  className?: string;
}

const Layout: NextPage<Props> = ({ children, home, className }: Props) => {
  return (
    <div className={className}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="description"
          content="Hello, I'm a web developer based in Eau Claire, Wisconsin. I'm passionate in coding and creating useful web-based software. I love learning new technologies and am focused on becoming a master of the web platform."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
