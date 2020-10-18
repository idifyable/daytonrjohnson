import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@components/Header.tsx';
import Footer from '@components/Footer.tsx';

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
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
