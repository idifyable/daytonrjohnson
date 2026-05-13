'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

// Decorative signal-level bars — purely visual, not data-driven
const BARS = [3, 7, 12, 18, 24, 30, 36, 32, 26, 34, 36, 28, 20, 14, 22, 30, 36, 28, 18, 10, 16, 26, 34, 30, 22, 12, 8, 18, 28, 20]

export default function Sidebar() {
  return (
    <Rail aria-hidden="true">
      <RailLabel>SIG</RailLabel>
      <BarStack>
        {BARS.map((w, i) => (
          <Bar key={i} $width={w} />
        ))}
      </BarStack>
      <RailLabel>END</RailLabel>
    </Rail>
  )
}

const Rail = styled.aside`
  position: fixed;
  top: ${theme.navHeight};
  bottom: 0;
  left: max(8px, calc((100vw - ${theme.maxWidth}) / 2 - 52px));
  width: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 0;
  pointer-events: none;
  z-index: 10;

  @media (max-width: calc(${theme.maxWidth} + 120px)) {
    display: none;
  }
`

const RailLabel = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.5rem;
  color: ${theme.colors.textSubtle};
  letter-spacing: 0.14em;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  opacity: 0.5;
`

const BarStack = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 12px 0;
  width: 100%;
`

const Bar = styled.div<{ $width: number }>`
  height: 2px;
  width: ${({ $width }) => $width}px;
  max-width: 36px;
  background: ${theme.colors.phosphor};
  opacity: ${({ $width }) => 0.12 + ($width / 36) * 0.32};
`
