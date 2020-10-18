import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/">
              <a className={router.pathname === '/projects/' ? 'active' : ''}>Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
