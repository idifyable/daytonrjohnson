import { SocialLink } from './SocialLink';
import * as S from './style';

export const SocialLinks: React.FC = () => {
  return (
    <S.SocialLinksList>
      <SocialLink href="mailto:daytonrjohnson@gmail.com" icon="far fa-envelope" title="Email" />
      <SocialLink href="https://github.com/idifyable" icon="fab fa-github" title="GitHub" />
      <SocialLink href="http://codepen.io/idifyable/" icon="fab fa-codepen" title="CodePen" />
      <SocialLink href="https://twitter.com/idifyable" icon="fab fa-twitter" title="Twitter" />
    </S.SocialLinksList>
  );
};
