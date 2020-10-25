import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const SecondaryHeading = styled.h2`
  font: normal normal 32px/1em 'Lato', sans-serif;

  @media ${breakpoints.desktop} {
    font-size: 24px;
  }
`;
