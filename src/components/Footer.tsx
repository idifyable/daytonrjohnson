import styled from 'styled-components';
import { Container } from '@components/primitives/Container';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <SocialLinks />
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 1rem 0;
  background-color: #08111c;
`;
