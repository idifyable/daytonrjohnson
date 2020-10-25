import styled from 'styled-components';
import { Project } from '@lib/projects';
import { Button } from '@components/primitives/Button';
import { breakpoints } from '@constants/breakpoints';
import { BulletedList } from '@components/primitives/BulletedList';
import { PrimaryHeading } from '@components/typography/PrimaryHeading';
import { SecondaryHeading } from '@components/typography/SecondaryHeading';

interface Props {
  projectData: Project;
}

export const ProjectsListItem: React.FC<Props> = ({ projectData }) => {
  const technologiesUsed = projectData.technologiesUsed.map((technology, index) => {
    return <li key={technology}>{technology}</li>;
  });

  return (
    <StyledProjectListItem id={projectData.id}>
      <ImageWrapper>
        {projectData.image && (
          <ProjectImage src={projectData.image} alt={projectData.title ? projectData.title : ''} />
        )}
      </ImageWrapper>
      <ContentWrapper>
        <ProjectTitleHeader>{projectData.title}</ProjectTitleHeader>
        {technologiesUsed && <TechnologiesUsedHeader>Technologies Used</TechnologiesUsedHeader>}
        {technologiesUsed && <StyledBulletedList>{technologiesUsed}</StyledBulletedList>}
        {(projectData.demoUrl || projectData.repoUrl) && (
          <ButtonRow>
            {projectData.demoUrl && (
              <a href={projectData.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button text="View Live" />
              </a>
            )}
            {projectData.repoUrl && (
              <a href={projectData.repoUrl} target="_blank" rel="noopener noreferrer">
                <Button text="View Repo" />
              </a>
            )}
          </ButtonRow>
        )}
      </ContentWrapper>
    </StyledProjectListItem>
  );
};

const StyledProjectListItem = styled.li`
  display: block;
  width: calc(100% - 2rem);
  padding: 0 1.5rem;
  margin: 0 auto 3.5rem auto;
  background-color: #ffffff;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const ProjectImage = styled.img`
  position: relative;
  bottom: 2rem;
  margin: 0 auto auto auto;
  max-height: 300px;
  border: 10px solid white;
  box-shadow: 0px 10px 20px #000000;
`;

const ImageWrapper = styled.div`
  @media ${breakpoints.desktop} {
    width: 50%;
  }
`;

const ContentWrapper = styled.div`
  padding-bottom: 1.5rem;

  @media ${breakpoints.desktop} {
    width: 50%;
    padding-top: 1.5rem;
  }
`;

const ButtonRow = styled.div`
  font-size: 0;
  text-align: center;

  @media ${breakpoints.desktop} {
    text-align: initial;
  }

  & > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ProjectTitleHeader = styled(PrimaryHeading)`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const TechnologiesUsedHeader = styled(SecondaryHeading)`
  margin-bottom: 1rem;
`;

const StyledBulletedList = styled(BulletedList)`
  margin-bottom: 1rem;
`;
