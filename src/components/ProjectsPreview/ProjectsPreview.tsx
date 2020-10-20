import styled from 'styled-components';
import { Project } from '@lib/projects';
import { ProjectsPreviewItem } from './ProjectsPreviewItem/ProjectsPreviewItem';

interface Props {
  projectsData: Project[];
}

export const ProjectsPreview: React.FC<Props> = ({ projectsData }) => {
  const projectPreviewItems = projectsData.map((projectData) => {
    return <ProjectsPreviewItem key={projectData.id} projectData={projectData} />;
  });

  return (
    <div>
      <Heading>My Projects</Heading>
      <ProjectsList>{projectPreviewItems}</ProjectsList>
    </div>
  );
};

const Heading = styled.h3`
  margin-bottom: 2rem;
`;

const ProjectsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
