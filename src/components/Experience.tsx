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
    title: 'Senior Software Engineer, Commerce Platform',
    range: 'Aug 2022 – Present',
    bullets: [
      "Senior engineer in HubSpot's Commerce org, owning frontend architecture across a large multi-repo system spanning pricing, line items, discounts, and product bundles.",
      'Led end-to-end delivery of tiered pricing across a complex multi-repo system, driving architectural decisions, resolving dependency challenges, and coordinating across teams to ship at scale.',
      'Independently designed and built the Bundle Item Edit Panel, owning state management architecture, product logic, and multicurrency integration.',
      'Served as frontend DRI for Discount Codes Enhancements, owning requirements alignment with backend and full implementation independently.',
      'Drove Line Item Field-Level Permissions to rollout under critical production conditions, coordinating across multiple teams and frontend surfaces.',
      'Authored RFCs, technical explainers, and cross-team planning artifacts.',
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
    url: 'https://entropy.cc/',
    title: 'Full Stack JavaScript Developer',
    range: 'Mar 2019 – Feb 2021',
    bullets: [
      'Built full-stack web applications for clients using React, Node.js, and modern JavaScript tooling.',
      'Worked across the stack from UI to APIs and database integrations.',
    ],
  },
  {
    company: 'First Net Impressions',
    url: 'https://www.firstnetimpressions.com/',
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
    title: 'Founder & Software Engineer',
    range: 'Jun 2016 – Present',
    bullets: [
      'Founded and operate a software consultancy and product development LLC. Currently building two SaaS products as sole engineer and product owner.',
      'Posing Perfect: a full-stack platform for bodybuilding coaches and athletes. I own product, architecture, backend (Supabase/PostgreSQL), frontend (Next.js/React), auth, testing (Cypress), and deployment (Vercel).',
      'Career Iterator: an AI-powered career management tool, built as sole engineer.',
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
