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
            I build production SaaS, large frontend systems, and the glue between product and
            engineering.
          </p>
          <p>
            At HubSpot Commerce, I focus on reliable architecture, cross-team execution, and making
            growing products easier to maintain. I write RFCs, partner closely with backend and
            product teams, and care about the systems I leave behind.
          </p>
          <p>
            Otherwise, I'm shipping two products from concept to launch: Posing Perfect, a coaching
            platform born from prep for my debut Men's Physique competition, and Career Iterator, an
            AI-driven career management tool.
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
