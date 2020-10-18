import { Project } from '@lib/projects';
import { ProjectCard } from './ProjectCard/ProjectCard';

interface Props {
  projectsData: Project[];
}

export const MyProjects: React.FC<Props> = ({ projectsData }) => {
  const allProjects = projectsData.map((projectData) => {
    return <ProjectCard projectData={projectData} key={projectData.id} />;
  });
  return (
    <section className="my-projects padded">
      <h3>My Projects</h3>
      <ul className="my-projects container padded">{allProjects}</ul>
    </section>
  );
};
