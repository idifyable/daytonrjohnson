import {Container } from 'src/components/globals';
import {SocialLinks } from 'src/components/SocialLinks';
import * as S from './style';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <SocialLinks />
      </Container>
    </S.Footer>
  );
};
