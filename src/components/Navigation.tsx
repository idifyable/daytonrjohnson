import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <NavigationContainer>
      <NavigationLinksList>
        <NavigationLinksListItem>
          <Link href="/" passHref>
            <NavigationLink active={router.pathname === '/'}>Home</NavigationLink>
          </Link>
        </NavigationLinksListItem>
        <NavigationLinksListItem>
          <Link href="/projects/" passHref>
            <NavigationLink active={router.pathname === '/projects'}>Projects</NavigationLink>
          </Link>
        </NavigationLinksListItem>
      </NavigationLinksList>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.nav`
  margin: auto;
  max-width: 350px;
  width: 100%;
  text-shadow: 0px 0px 5px black;
`;

const NavigationLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  list-style: none;
`;

const NavigationLinksListItem = styled.li`
  flex-grow: 1;
`;

const NavigationLink = styled.a`
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
