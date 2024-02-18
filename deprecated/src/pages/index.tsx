import {GetStaticProps,NextPage } from 'next';
import Head from 'next/head';
import {getSortedProjectsData,Project } from 'src/lib/projects';
import Layout, {siteTitle } from 'src/components/Layout';
import {Container,Section } from 'src/components/globals';
import {NeonBillboard } from 'src/components/NeonBillboard';
import {WhoAmI } from 'src/components/WhoAmI';
import {ProjectsPreview } from 'src/components/ProjectsPreview';
import {Particles } from 'src/components/Particles';

interface Props {
  allProjects: Project[];
}

const Home: NextPage<Props> = ({ allProjects }) => {
  return (
    <Layout home className="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Particles />
      <NeonBillboard />
      <Container>
        <Section>
          <WhoAmI />
        </Section>
        <Section>
          <ProjectsPreview projectsData={allProjects} />
        </Section>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = getSortedProjectsData();
  return {
    props: {
      allProjects,
    },
  };
};

export default Home;
