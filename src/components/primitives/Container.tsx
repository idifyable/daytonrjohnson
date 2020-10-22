import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  max-width: 1008px;

  @media ${breakpoints.desktop} {
    padding: 0;
  }
`;
