import styled from 'styled-components';
import { Navigation } from '@components/Navigation';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  flex-direction: column-reverse;
`;
