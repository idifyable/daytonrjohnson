import * as S from './style';
import { Project } from '@lib/projects';
import { ProjectsListItem } from './ProjectsListItem';

interface Props {
  projectsData: Project[];
}

export const ProjectsList: React.FC<Props> = ({ projectsData }) => {
  const allProjects = projectsData.map((projectData) => {
    return <ProjectsListItem projectData={projectData} key={projectData.id} />;
  });

  return <S.StyledProjectsList>{allProjects}</S.StyledProjectsList>;
};
