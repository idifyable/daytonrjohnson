import {breakpoints } from 'src/constants/breakpoints';
import styled from 'styled-components';

export const SecondaryHeading = styled.h2`
  font: normal normal 24px/1em 'Lato', sans-serif;

  @media ${breakpoints.desktop} {
    font-size: 32px;
  }
`;
