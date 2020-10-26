import { Project } from '@lib/projects';
import Link from 'next/link';
import * as S from './style';

interface Props {
  projectData: Project;
}

export const ProjectsPreviewItem: React.FC<Props> = ({ projectData }) => {
  return (
    <S.Container>
      <Link href="/projects" passHref>
        <a>
          {projectData.image && (
            <S.Image src={projectData.image} alt={projectData.title ? projectData.title : ''} />
          )}
          {projectData.title && <S.ProjectTitle>{projectData.title}</S.ProjectTitle>}
        </a>
      </Link>
    </S.Container>
  );
};
