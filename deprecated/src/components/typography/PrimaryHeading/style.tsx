import styled from 'styled-components';
import {breakpoints } from 'src/constants/breakpoints';

export const PrimaryHeading = styled.h1`
  font: normal bold 32px/1em 'Lato', sans-serif;

  @media ${breakpoints.desktop} {
    font-size: 42px;
  }
`;
