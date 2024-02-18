import {Project } from 'src/lib/projects';
import * as S from './style';
import {ProjectsListItem } from './ProjectsListItem';

interface Props {
  projectsData: Project[];
}

export const ProjectsList: React.FC<Props> = ({ projectsData }) => {
  const allProjects = projectsData.map((projectData) => {
    return <ProjectsListItem projectData={projectData} key={projectData.id} />;
  });

  return <S.StyledProjectsList>{allProjects}</S.StyledProjectsList>;
};
