import * as S from './style';

interface Props {
  href: string;
  icon: string;
  title: string;
}

export const SocialLink: React.FC<Props> = ({ href, icon, title }) => {
  return (
    <S.SocialLinkListItem>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <S.SocialLinkIcon className={icon} title={title} />
      </a>
    </S.SocialLinkListItem>
  );
};
