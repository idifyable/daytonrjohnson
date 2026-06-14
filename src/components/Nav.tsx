'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <NavBar $scrolled={scrolled}>
      <NavInner>
        <Logo href="#">DJ</Logo>
        <NavLinks>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
        <MenuButton
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon $open={menuOpen} />
        </MenuButton>
      </NavInner>

      <MobileMenu $open={menuOpen}>
        {NAV_LINKS.map((link) => (
          <MobileNavLink key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </NavBar>
  );
}

const NavBar = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(246, 245, 242, 0.95)' : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? theme.colors.border : 'transparent')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 18px 30px rgba(36, 41, 46, 0.08)' : 'none')};
`;

const NavInner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  min-height: ${theme.navHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const Logo = styled.a`
  font-family: ${theme.fonts.mono};
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.accent};
  letter-spacing: 0.05em;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  color: ${theme.colors.textMuted};
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.text};
  }
`;

const MenuButton = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.surface};
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuIcon = styled.span<{ $open: boolean }>`
  position: relative;
  width: 18px;
  height: 2px;
  background: ${theme.colors.text};
  transition:
    transform 0.25s ease,
    background 0.25s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 18px;
    height: 2px;
    background: ${theme.colors.text};
    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
  }

  &::before {
    top: -6px;
    transform: ${({ $open }) => ($open ? 'translateY(6px) rotate(45deg)' : 'none')};
  }

  &::after {
    top: 6px;
    transform: ${({ $open }) => ($open ? 'translateY(-6px) rotate(-45deg)' : 'none')};
  }

  ${({ $open }) =>
    $open &&
    `
      background: transparent;
    `}
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${theme.breakpoints.md}) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 16px 24px 24px;
    background: ${theme.colors.surface};
    border-bottom: 1px solid ${theme.colors.border};
    box-shadow: 0 16px 40px rgba(36, 41, 46, 0.08);
  }
`;

const MobileNavLink = styled.a`
  font-size: 1rem;
  color: ${theme.colors.text};
  padding: 10px 0;
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const ResumeLink = styled.a`
  font-size: 0.875rem;
  color: ${theme.colors.accent};
  border: 1px solid ${theme.colors.accent};
  padding: 6px 14px;
  border-radius: 4px;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: ${theme.colors.accentDim};
  }
`;
