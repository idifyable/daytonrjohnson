import Head from 'next/head';
import { NextPage } from 'next';

import Layout, { siteTitle } from '@components/layout';
import NeonBillboard from '@components/NeonBillboard';
import WhoAmI from '@components/WhoAmI';
import Projects from '@components/Projects';
import utilStyles from './styles/utils.module.css';

const Home: NextPage = () => {
  return (
    <Layout home className="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NeonBillboard />
      <WhoAmI />
      <Projects />
    </Layout>
  );
};

export default Home;
