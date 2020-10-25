import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

export const PrimaryHeading = styled.h1`
  font: normal bold 42px/1em 'Lato', sans-serif;

  @media ${breakpoints.desktop} {
    font-size: 32px;
  }
`;
