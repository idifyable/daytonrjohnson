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
            I build product-facing SaaS and the systems that help teams move faster without adding
            complexity.
          </p>
          <p>
            At HubSpot Commerce, I help cross-functional teams simplify pricing, catalog, and line
            item workflows so the product can grow with fewer hidden edge cases. I enjoy writing
            RFCs and leaving behind systems that are easier to maintain.
          </p>
          <p>
            Outside work, I ship two products: Posing Perfect, a coach-and-athlete platform born
            from my own competition prep, and Career Iterator, a private corpus for tracking wins
            and mapping the next step.
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
