'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';
import InlineLink from './ui/InlineLink';

const FACTS = [
  'Self-taught from the start',
  "Comfortable going deep on things I don't know yet",
  'Embedded synthesizer development on the side',
  "Competed in Men's Physique bodybuilding (Top 3 in debut)",
  'Open to senior remote roles',
];

export default function About() {
  return (
    <SectionWrapper id="about" label="About">
      <Grid>
        <Bio>
          <p>
            I make software. Production SaaS, complex frontend systems at scale,
            and everything in between.
          </p>
          <p>
            By day I&apos;m a senior engineer at{' '}
            <InlineLink
              href="https://www.hubspot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              HubSpot
            </InlineLink>{' '}
            in the Commerce org. I own architecture, cross-team coordination,
            and delivery across complex, large-scale frontend systems. I write
            RFCs, take ownership seriously, and care a lot about the systems I
            leave behind.
          </p>
          <p>
            On the side, I&apos;m building two SaaS products from scratch as
            sole engineer:{' '}
            <InlineLink
              href="https://posingperfect.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Posing Perfect
            </InlineLink>
            , a platform for bodybuilding coaches and athletes, and Career
            Iterator, an AI-powered career management tool.
          </p>
        </Bio>
        <SysInfo>
          <SysInfoLabel>SYS.INFO</SysInfoLabel>
          <FactList>
            {FACTS.map((fact) => (
              <FactItem key={fact}>
                <FactBullet>▸</FactBullet>
                <span>{fact}</span>
              </FactItem>
            ))}
          </FactList>
        </SysInfo>
      </Grid>
    </SectionWrapper>
  );
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
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 1rem;
    color: ${theme.colors.textMuted};
    line-height: 1.8;
  }
`;

const SysInfo = styled.div`
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.surface};
  padding: 24px;
`;

const SysInfoLabel = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.65rem;
  color: ${theme.colors.phosphor};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${theme.colors.border};
`;

const FactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FactItem = styled.li`
  display: flex;
  gap: 10px;
  font-size: 0.875rem;
  color: ${theme.colors.textMuted};
  line-height: 1.5;
`;

const FactBullet = styled.span`
  color: ${theme.colors.phosphor};
  flex-shrink: 0;
  margin-top: 1px;
  font-size: 0.8rem;
`;
