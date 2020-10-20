import styled from 'styled-components';

interface Props {
  href: string;
  icon: string;
  title: string;
}

export const SocialLink: React.FC<Props> = ({ href, icon, title }) => {
  return (
    <SocialLinkListItem>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <SocialLinkIcon className={icon} title={title} />
      </a>
    </SocialLinkListItem>
  );
};

const SocialLinkListItem = styled.li`
  margin-bottom: 0;
`;

const SocialLinkIcon = styled.i`
  font-size: 26px;
  line-height: 26px;
  color: #5a6e87;
  transition: color 0.5s;

  &:hover {
    color: #4d7ab3;
  }
`;
