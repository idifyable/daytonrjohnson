import styled from 'styled-components';
import { SocialLink } from './SocialLink';
export const SocialLinks: React.FC = () => {
  return (
    <SocialLinksList>
      <SocialLink href="mailto:daytonrjohnson@gmail.com" icon="far fa-envelope" title="Email" />
      <SocialLink href="https://github.com/idifyable" icon="fab fa-github" title="GitHub" />
      <SocialLink href="http://codepen.io/idifyable/" icon="fab fa-codepen" title="CodePen" />
      <SocialLink href="https://twitter.com/idifyable" icon="fab fa-twitter" title="Twitter" />
    </SocialLinksList>
  );
};

const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  max-width: 300px;
  list-style: none;
`;
