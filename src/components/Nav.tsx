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
      </NavInner>
    </NavBar>
  );
}

const NavBar = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${theme.navHeight};
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(246, 245, 242, 0.95)' : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? theme.colors.border : 'transparent')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 18px 30px rgba(36, 41, 46, 0.08)' : 'none')};
`;

const NavInner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  gap: 32px;
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  color: ${theme.colors.textMuted};
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.text};
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
