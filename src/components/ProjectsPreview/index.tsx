import { Fragment } from 'react';
import { Project } from '@lib/projects';
import * as S from './style';
import { ProjectsPreviewItem } from './ProjectsPreviewItem';

interface Props {
  projectsData: Project[];
}

export const ProjectsPreview: React.FC<Props> = ({ projectsData }) => {
  const projectPreviewItems = projectsData.map((projectData) => {
    return <ProjectsPreviewItem key={projectData.id} projectData={projectData} />;
  });

  return (
    <Fragment>
      <S.Heading>My Projects</S.Heading>
      <S.ProjectsList>{projectPreviewItems}</S.ProjectsList>
    </Fragment>
  );
};
