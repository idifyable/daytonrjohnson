'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';
import { Arrow, BulletItem } from './ui/BulletItem';

const JOBS = [
  {
    company: 'HubSpot',
    url: 'https://www.hubspot.com',
    title: 'Senior Software Engineer, Commerce',
    range: 'Aug 2022 – Present',
    bullets: [
      'Engineering core commerce features across Commerce Hub — payments, invoices, quotes, discount codes, and billing tooling used by thousands of SMBs.',
      'Contributed to the public launch of Commerce Hub at INBOUND, enabling streamlined billing and revenue workflows for HubSpot customers.',
      'Collaborate cross-functionally with product, design, and GTM to ship high-impact features end-to-end.',
    ],
  },
  {
    company: 'WebMD',
    url: 'https://www.webmd.com',
    title: 'Senior Software Engineer',
    range: 'Feb 2021 – Aug 2022',
    bullets: [
      'Senior frontend engineer on consumer-facing health content and tooling reaching millions of users monthly.',
      'Led frontend architecture decisions and mentored junior engineers on the team.',
    ],
  },
  {
    company: 'Entropy Multimedia',
    url: '#',
    title: 'Full Stack JavaScript Developer',
    range: 'Mar 2019 – Feb 2021',
    bullets: [
      'Built full-stack web applications for clients using React, Node.js, and modern JavaScript tooling.',
      'Worked across the stack from UI to APIs and database integrations.',
    ],
  },
  {
    company: 'First Net Impressions',
    url: '#',
    title: 'Lead Full Stack Web Developer',
    range: 'Apr 2017 – Mar 2019',
    bullets: [
      'Led web development for a small agency, delivering client projects from scoping through launch.',
      'Managed client relationships and technical direction across multiple concurrent engagements.',
    ],
  },
  {
    company: 'Appreciate The Discrete',
    url: '#',
    title: 'Founder',
    range: 'Jun 2016 – Present',
    bullets: [
      'Indie software venture — freelance web development, SaaS products, and software experiments.',
      'Currently building Posing Perfect, a coaching SaaS for competitive bodybuilders.',
    ],
  },
];

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const job = JOBS[activeIdx];

  return (
    <SectionWrapper id="experience" label="Experience">
      <Layout>
        <TabList role="tablist">
          {JOBS.map((j, i) => (
            <Tab
              key={j.company}
              role="tab"
              aria-selected={i === activeIdx}
              $active={i === activeIdx}
              onClick={() => setActiveIdx(i)}
            >
              {j.company}
            </Tab>
          ))}
        </TabList>
        <Panel role="tabpanel">
          <JobTitle>
            {job.title}{' '}
            <CompanyLink
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              @ {job.company}
            </CompanyLink>
          </JobTitle>
          <Range>{job.range}</Range>
          <Bullets>
            {job.bullets.map((b) => (
              <BulletItem key={b}>
                <Arrow $marginTop="3px">▸</Arrow>
                <span>{b}</span>
              </BulletItem>
            ))}
          </Bullets>
        </Panel>
      </Layout>
    </SectionWrapper>
  );
}

const Layout = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 24px;
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-left: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
    border-left: none;
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 12px 20px;
  font-size: 0.85rem;
  font-family: ${theme.fonts.mono};
  text-align: left;
  color: ${({ $active }) =>
    $active ? theme.colors.accent : theme.colors.textMuted};
  background: ${({ $active }) =>
    $active ? theme.colors.accentDim : 'transparent'};
  border-left: 2px solid
    ${({ $active }) => ($active ? theme.colors.accent : 'transparent')};
  margin-left: -1px;
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s;
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.text};
    background: ${theme.colors.surfaceHover};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    border-left: none;
    border-bottom: 2px solid
      ${({ $active }) => ($active ? theme.colors.accent : 'transparent')};
    margin-left: 0;
    margin-bottom: -1px;
  }
`;

const Panel = styled.div`
  flex: 1;
  min-height: 200px;
`;

const JobTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 6px;
`;

const CompanyLink = styled.a`
  color: ${theme.colors.accent};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

const Range = styled.p`
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  margin-bottom: 24px;
`;

const Bullets = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
