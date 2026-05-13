'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <NavBar $scrolled={scrolled}>
      <NavInner>
        <Logo href="#">DJ.</Logo>
        <NavLinks>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavInner>
    </NavBar>
  )
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
    border-color 0.3s ease;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(8, 8, 6, 0.94)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  border-bottom: 1px solid
    ${({ $scrolled }) => ($scrolled ? theme.colors.border : 'transparent')};
`

const NavInner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a`
  font-family: ${theme.fonts.display};
  font-size: 1.6rem;
  font-weight: 900;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
  text-transform: uppercase;
  line-height: 1;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.phosphor};
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 16px;
  }
`

const NavLink = styled.a`
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  color: ${theme.colors.textMuted};
  transition: color 0.2s;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${theme.colors.phosphor};
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${theme.colors.text};
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`
