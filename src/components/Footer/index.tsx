import * as S from './style';
import { Container } from '@components/globals';
import { SocialLinks } from '@components/SocialLinks';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <SocialLinks />
      </Container>
    </S.Footer>
  );
};
