import { Project } from '@lib/projects';
import Link from 'next/link';
import { ProjectsPreviewItem } from './ProjectsPreviewItem/ProjectsPreviewItem';

interface Props {
  projectsData: Project[];
}

export const ProjectsPreview: React.FC<Props> = ({ projectsData }) => {
  const projectPreviewItems = projectsData.map((projectData) => {
    return <ProjectsPreviewItem projectData={projectData} />;
  });

  return (
    <section className="projects padded">
      <div className="container padded">
        <h3>My Projects</h3>
        <ul className="my-projects-preview">{projectPreviewItems}</ul>
      </div>
    </section>
  );
};
