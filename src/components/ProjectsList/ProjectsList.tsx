import styled from 'styled-components';
import { Project } from '@lib/projects';
import { ProjectsListItem } from './ProjectsListItem/ProjectsListItem';

interface Props {
  projectsData: Project[];
}

export const ProjectsList: React.FC<Props> = ({ projectsData }) => {
  const allProjects = projectsData.map((projectData) => {
    return <ProjectsListItem projectData={projectData} key={projectData.id} />;
  });
  return <ul>{allProjects}</ul>;
};
