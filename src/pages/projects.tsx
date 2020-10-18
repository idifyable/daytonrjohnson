import Head from 'next/head';
import { NextPage } from 'next';
import Layout, { siteTitle } from '@components/Layout';
import { NeonBillboard } from '@components/NeonBillboard';
import { WhoAmI } from '@components/WhoAmI';
import { MyProjects } from '@components/MyProjects';

const Projects: NextPage = () => {
  return (
    <Layout home className="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MyProjects />
    </Layout>
  );
};

export default Projects;
