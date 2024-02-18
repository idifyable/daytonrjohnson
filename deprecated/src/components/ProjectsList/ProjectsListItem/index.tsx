import {Project } from 'src/lib/projects';
import {Button } from 'src/components/primitives/Button';
import * as S from './style';

interface Props {
  projectData: Project;
}

export const ProjectsListItem: React.FC<Props> = ({ projectData }) => {
  const technologiesUsed = projectData.technologiesUsed.map((technology, index) => {
    return <li key={technology}>{technology}</li>;
  });

  return (
    <S.ProjectListItem id={projectData.id}>
      <S.ImageWrapper>
        {projectData.image && (
          <S.ProjectImage
            src={projectData.image}
            alt={projectData.title ? projectData.title : ''}
          />
        )}
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.ProjectTitleHeader>{projectData.title}</S.ProjectTitleHeader>
        {technologiesUsed && <S.TechnologiesUsedHeader>Technologies Used</S.TechnologiesUsedHeader>}
        {technologiesUsed && <S.BulletedList>{technologiesUsed}</S.BulletedList>}
        {(projectData.demoUrl || projectData.repoUrl) && (
          <S.ButtonRow>
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
          </S.ButtonRow>
        )}
      </S.ContentWrapper>
    </S.ProjectListItem>
  );
};
