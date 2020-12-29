import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './style';

export const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <S.Navigation>
      <S.LinksList>
        <S.LinksListItem>
          <Link href="/" passHref>
            <S.Link active={router.pathname === '/'}>Home</S.Link>
          </Link>
        </S.LinksListItem>
        <S.LinksListItem>
          <Link href="/projects" passHref>
            <S.Link active={router.pathname === '/projects'}>Projects</S.Link>
          </Link>
        </S.LinksListItem>
      </S.LinksList>
    </S.Navigation>
  );
};
