import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: string;
}

export const SecondaryHeading: React.FC<Props> = ({ level, as, ...otherProps }) => {
  as = as || 'h2';
  return <StyledSecondaryHeading as={as} {...otherProps} />;
};

const StyledSecondaryHeading = styled.h2`
  font: normal normal 32px/1em 'Lato', sans-serif;

  @media ${breakpoints.desktop} {
    font-size: 24px;
  }
`;
