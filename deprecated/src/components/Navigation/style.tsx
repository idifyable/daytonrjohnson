import styled from 'styled-components';

export const Navigation = styled.nav`
  margin: auto;
  max-width: 350px;
  width: 100%;
  text-shadow: 0px 0px 5px black;
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LinksListItem = styled.li`
  flex-grow: 1;
`;

export const Link = styled.a`
  display: block;
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  border-top: 4px solid transparent;
  transition: border-top 0.25s;

  &:hover {
    border-top: 4px solid #ffffff;
    text-shadow: 0px 0px 10px grey;
  }

  ${({ active }) =>
    active &&
    `
    border-top: 4px solid #ffffff;
    text-shadow: 0px 0px 10px grey;
  `}
`;
