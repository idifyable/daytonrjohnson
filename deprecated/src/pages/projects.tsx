import Head from 'next/head';
import {GetStaticProps,NextPage } from 'next';
import {getSortedProjectsData,Project } from 'src/lib/projects';
import Layout, {siteTitle } from 'src/components/Layout';
import {Container,Section } from 'src/components/globals';
import {ProjectsList } from 'src/components/ProjectsList';

interface Props {
  allProjects: Project[];
}

const Projects: NextPage<Props> = ({ allProjects }) => {
  return (
    <Layout className="projects">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Section>
          <ProjectsList projectsData={allProjects} />
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

export default Projects;
