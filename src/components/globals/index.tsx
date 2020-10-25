import styled from 'styled-components';

export const Div = styled.div``;
export const Ul = styled.ul``;
export const Li = styled.li``;
export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6``;
export const P = styled.p``;

export const Strong = styled.strong`
  font-weight: bold;
`;

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
