import styled from 'styled-components';

export const BulletedList = styled.ul`
  padding-left: 20px;
  list-style: disc;

  & > li {
    margin-bottom: 0.5em;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
