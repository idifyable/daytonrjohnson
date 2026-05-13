'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <Credit>Built by Dayton Johnson</Credit>
        <Signal>
          <SignalDot />
          <SignalText>SYS ONLINE</SignalText>
        </Signal>
      </Inner>
    </FooterEl>
  )
}

const FooterEl = styled.footer`
  padding: 28px 24px;
  border-top: 1px solid ${theme.colors.border};
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

const Credit = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.72rem;
  color: ${theme.colors.textSubtle};
  letter-spacing: 0.05em;
`

const Signal = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`

const SignalDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${theme.colors.phosphor};
  box-shadow: 0 0 5px ${theme.colors.phosphorGlow};
`

const SignalText = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.62rem;
  color: ${theme.colors.textSubtle};
  letter-spacing: 0.12em;
`
