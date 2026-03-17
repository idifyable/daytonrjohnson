'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <span>Designed & built by Dayton Johnson</span>
        <span>Next.js · styled-components</span>
      </Inner>
    </FooterEl>
  )
}

const FooterEl = styled.footer`
  padding: 32px 24px;
  border-top: 1px solid ${theme.colors.border};
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  color: ${theme.colors.textSubtle};
`
