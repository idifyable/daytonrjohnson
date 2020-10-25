import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { getSortedProjectsData, Project } from '@lib/projects';
import Layout, { siteTitle } from '@components/Layout';
import { Section } from '@components/primitives/Section';
import { Container } from '@components/primitives/Container';
import { ProjectsList } from '@components/ProjectsList';

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
