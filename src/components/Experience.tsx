'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';

const JOBS = [
  {
    company: 'HubSpot',
    url: 'https://www.hubspot.com',
    title: 'Senior Software Engineer, Commerce Platform',
    range: 'Aug 2022 – Present',
    bullets: [
      "Senior engineer in HubSpot's Commerce org, owning frontend architecture across pricing, line items, discounts, and product bundles.",
      'Led end-to-end delivery of tiered pricing across a complex multi-repo system — architectural decisions, dependency resolution, cross-team coordination.',
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
      'Senior frontend engineer on consumer health content and tooling reaching millions of users monthly.',
      'Led frontend architecture decisions and mentored junior engineers.',
    ],
  },
  {
    company: 'Entropy',
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
    company: 'ATD',
    url: '#',
    title: 'Founder & Software Engineer',
    range: 'Jun 2016 – Present',
    bullets: [
      'Founded and operate Appreciate The Discrete — a software consultancy and product development LLC.',
      'Posing Perfect: full-stack platform for bodybuilding coaches and athletes (Next.js, Supabase, Vercel). I own product, architecture, and all engineering.',
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
        <ChannelList role="tablist">
          {JOBS.map((j, i) => (
            <Channel
              key={j.company}
              role="tab"
              aria-selected={i === activeIdx}
              $active={i === activeIdx}
              onClick={() => setActiveIdx(i)}
            >
              <ChannelLed $active={i === activeIdx} />
              <ChannelName $active={i === activeIdx}>{j.company}</ChannelName>
            </Channel>
          ))}
        </ChannelList>

        <Panel role="tabpanel">
          <PanelHeader>
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
          </PanelHeader>
          <Bullets>
            {job.bullets.map((b) => (
              <BulletRow key={b}>
                <BulletMark>▸</BulletMark>
                <span>{b}</span>
              </BulletRow>
            ))}
          </Bullets>
        </Panel>
      </Layout>
    </SectionWrapper>
  );
}

const Layout = styled.div`
  display: flex;
  gap: 0;
  align-items: flex-start;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 180px;
  border-right: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${theme.colors.border};
    margin-bottom: 32px;
  }
`;

const Channel = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px 13px 12px;
  text-align: left;
  width: 100%;
  background: ${({ $active }) =>
    $active ? theme.colors.surface : 'transparent'};
  border-right: 2px solid
    ${({ $active }) => ($active ? theme.colors.phosphor : 'transparent')};
  margin-right: -1px;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.surfaceHover};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    border-right: none;
    border-bottom: 2px solid
      ${({ $active }) => ($active ? theme.colors.phosphor : 'transparent')};
    margin-right: 0;
    margin-bottom: -1px;
    width: auto;
    padding: 10px 14px;
  }
`;

const ChannelLed = styled.div<{ $active: boolean }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ $active }) =>
    $active ? theme.colors.phosphor : theme.colors.border};
  box-shadow: ${({ $active }) =>
    $active ? `0 0 5px ${theme.colors.phosphorGlow}` : 'none'};
  transition:
    background 0.2s,
    box-shadow 0.2s;
`;

const ChannelName = styled.span<{ $active: boolean }>`
  font-family: ${theme.fonts.mono};
  font-size: 0.76rem;
  color: ${({ $active }) =>
    $active ? theme.colors.text : theme.colors.textMuted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s;

  button:hover & {
    color: ${theme.colors.text};
  }
`;

const Panel = styled.div`
  flex: 1;
  padding-left: 40px;
  min-height: 260px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding-left: 0;
  }
`;

const PanelHeader = styled.div`
  margin-bottom: 28px;
`;

const JobTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 8px;
  line-height: 1.5;
`;

const CompanyLink = styled.a`
  color: ${theme.colors.phosphor};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

const Range = styled.p`
  font-family: ${theme.fonts.mono};
  font-size: 0.76rem;
  color: ${theme.colors.textMuted};
  letter-spacing: 0.02em;
`;

const Bullets = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const BulletRow = styled.li`
  display: flex;
  gap: 12px;
  font-size: 0.925rem;
  color: ${theme.colors.textMuted};
  line-height: 1.72;
`;

const BulletMark = styled.span`
  color: ${theme.colors.phosphor};
  flex-shrink: 0;
  margin-top: 3px;
  font-size: 0.8rem;
`;
