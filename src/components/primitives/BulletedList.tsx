import styled from 'styled-components';

export const BulletedList = styled.ul`
  margin-bottom: 1rem;
  padding-left: 20px;
  list-style: disc;

  & > li {
    margin-bottom: 0.5em;
  }
`;
