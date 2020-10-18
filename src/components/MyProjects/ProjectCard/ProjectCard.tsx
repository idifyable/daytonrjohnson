import { Project } from '@lib/projects';

interface Props {
  projectData: Project;
}

export const ProjectCard: React.FC<Props> = ({ projectData }) => {
  const technologiesUsed = projectData.technologiesUsed.map((technology, index) => {
    return <li key={technology}>{technology}</li>;
  });
  return (
    <li id={projectData.id}>
      <div className="image-wrapper">
        {projectData.image && (
          <img src={projectData.image} alt={projectData.title ? projectData.title : ''} />
        )}
      </div>
      <div className="wrapper">
        <h1>{projectData.title}</h1>
        {technologiesUsed && (
          <div>
            <h2>Technologies Used</h2>
            <ul className="bulleted">{technologiesUsed}</ul>
          </div>
        )}
        {(projectData.demoUrl || projectData.repoUrl) && (
          <div className="buttons">
            {projectData.demoUrl && (
              <a href={projectData.demoUrl} target="_blank" rel="noopener noreferrer">
                <button type="button">View Live</button>
              </a>
            )}
            {projectData.repoUrl && (
              <a href={projectData.repoUrl} target="_blank" rel="noopener noreferrer">
                <button type="button">View Repo</button>
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  );
};
