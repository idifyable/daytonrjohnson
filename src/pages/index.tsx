import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getSortedProjectsData, Project } from '@lib/projects';
import Layout, { siteTitle } from '@components/Layout';
import { NeonBillboard } from '@components/NeonBillboard';
import { WhoAmI } from '@components/WhoAmI';
import { ProjectsPreview } from '@components/ProjectsPreview';
import { Container } from '@components/primitives/Container';
import { Section } from '@components/primitives/Section';
import { Particles } from '@components/Particles';

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
