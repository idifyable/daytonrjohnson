'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';
import InlineLink from './ui/InlineLink';
import { Arrow, BulletItem } from './ui/BulletItem';

const FACTS = [
  'Self-taught from the start',
  "Comfortable going deep on things I don't know yet",
  'Dabbles in embedded synthesizer development',
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
            in the Commerce org. I own architecture,
            cross-team coordination, and delivery across complex, large-scale
            frontend systems. I write RFCs, take ownership seriously, and care a
            lot about the systems I leave behind.
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
        <FactList>
          {FACTS.map((fact) => (
            <BulletItem key={fact} $fontSize="0.9rem" $lineHeight="1.5">
              <Arrow $marginTop="1px">▸</Arrow>
              <span>{fact}</span>
            </BulletItem>
          ))}
        </FactList>
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

const FactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
