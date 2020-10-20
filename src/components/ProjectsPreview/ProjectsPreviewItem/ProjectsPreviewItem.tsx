import styled from 'styled-components';
import { Project } from '@lib/projects';
import Link from 'next/link';

interface Props {
  projectData: Project;
}

export const ProjectsPreviewItem: React.FC<Props> = ({ projectData }) => {
  return (
    <Container>
      <Link href="/projects" passHref>
        <a>
          {projectData.image && (
            <Image src={projectData.image} alt={projectData.title ? projectData.title : ''} />
          )}
          {projectData.title && <ProjectTitle>{projectData.title}</ProjectTitle>}
        </a>
      </Link>
    </Container>
  );
};

const Container = styled.li`
  position: relative;
  width: calc(25% - 1.5rem);
`;

const Image = styled.img`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 275px;
  height: auto;
  border: 4px solid #ffffff;
`;

const ProjectTitle = styled.p`
  color: #10243c;
  font: normal bold 14px/1em 'Lato';
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;
