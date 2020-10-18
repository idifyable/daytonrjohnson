import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Layout, { siteTitle } from '@components/Layout';
import { MyProjects } from '@components/MyProjects/MyProjects';
import { getSortedProjectsData, Project } from '@lib/projects';

interface Props {
  allProjects: Project[];
}

const Projects: NextPage<Props> = ({ allProjects }) => {
  return (
    <Layout className="projects">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MyProjects projectsData={allProjects} />
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
