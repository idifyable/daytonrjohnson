'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'
import SectionWrapper from './SectionWrapper'

const FACTS = [
  'Self-taught — FreeCodeCamp to Senior SWE',
  'Passionate about developer mentorship',
  'Dabbles in embedded synthesizer development',
  'Competed in Men\'s Physique bodybuilding (Top 3 in debut)',
  'Based in Chippewa Falls, WI',
]

export default function About() {
  return (
    <SectionWrapper id="about" label="About">
      <Grid>
        <Bio>
          <p>
            I make software. I develop websites, web apps, and mobile apps —
            and I love the full arc of the process: understanding the problem,
            designing the solution, shipping it, and iterating.
          </p>
          <p>
            I&apos;ve been building on the web for nearly a decade, starting as a
            self-taught developer and growing into senior engineering roles at
            companies like{' '}
            <InlineLink href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">
              HubSpot
            </InlineLink>{' '}
            and WebMD. I care deeply about developing the people around me as
            much as the products we build together.
          </p>
          <p>
            Outside of work I run{' '}
            <InlineLink href="https://github.com/idifyable" target="_blank" rel="noopener noreferrer">
              Appreciate The Discrete
            </InlineLink>
            , my indie software venture, where I explore ideas at the
            intersection of software and the physical world — from SaaS
            products to embedded synthesizer experiments.
          </p>
        </Bio>
        <FactList>
          {FACTS.map((fact) => (
            <FactItem key={fact}>
              <Arrow>▸</Arrow>
              <span>{fact}</span>
            </FactItem>
          ))}
        </FactList>
      </Grid>
    </SectionWrapper>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 64px;
  align-items: start;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 1rem;
    color: ${theme.colors.textMuted};
    line-height: 1.8;
  }
`

const InlineLink = styled.a`
  color: ${theme.colors.text};
  border-bottom: 1px solid ${theme.colors.border};
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }
`

const FactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FactItem = styled.li`
  display: flex;
  gap: 12px;
  font-size: 0.9rem;
  color: ${theme.colors.textMuted};
  line-height: 1.5;
`

const Arrow = styled.span`
  color: ${theme.colors.accent};
  flex-shrink: 0;
  margin-top: 1px;
`
