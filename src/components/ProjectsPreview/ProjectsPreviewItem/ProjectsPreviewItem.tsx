import { Project } from '@lib/projects';
import Link from 'next/link';

interface Props {
  projectData: Project;
}

export const ProjectsPreviewItem: React.FC<Props> = ({ projectData }) => {
  return (
    <li>
      <Link href="/projects" passHref>
        <a>
          {projectData.image && (
            <img src={projectData.image} alt={projectData.title ? projectData.title : ''} />
          )}
          {projectData.title && <p>{projectData.title}</p>}
        </a>
      </Link>
    </li>
  );
};
