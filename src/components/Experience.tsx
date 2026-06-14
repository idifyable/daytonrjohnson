'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';

const JOBS = [
  {
    company: 'HubSpot',
    url: 'https://www.hubspot.com',
    title: 'Senior Software Engineer',
    range: 'Aug 2022 – Present',
    summary:
      'At HubSpot Commerce, I build frontend architecture for enterprise commerce workflows, including pricing, product records, and line item experiences.',
  },
  {
    company: 'WebMD Provider Services',
    url: 'https://webmdignite.com/',
    title: 'Senior Software Engineer',
    range: 'Feb 2021 – Aug 2022',
    summary:
      'At WebMD Provider Services, I led frontend development for patient education platforms and authoring systems, designed mobile experiences that delivered personalized content based on EHR data, and established modern React and Node.js practices for a small hybrid engineering team.',
  },
  {
    company: 'Entropy Multimedia',
    url: 'https://entropy.cc/',
    title: 'Full Stack JavaScript Developer',
    range: 'Mar 2019 – Feb 2021',
    summary:
      'At Entropy Multimedia, I built consistent frontend architecture across a large hospitality property portfolio, implemented internationalization and accessibility compliance for a multi-language enterprise platform, and delivered internal React Native tooling for operations workflows.',
  },
  {
    company: 'First Net Impressions',
    url: 'https://www.firstnetimpressions.com/',
    title: 'Lead Full Stack Web Developer',
    range: 'Apr 2017 – Mar 2019',
    summary:
      'At First Net Impressions, I created reusable templating and theming systems to accelerate client delivery, maintained a large legacy website portfolio through incremental updates, and managed infrastructure and hosting operations including routine maintenance and incident response.',
  },
  {
    company: 'Appreciate The Discrete',
    url: '#',
    title: 'Founder & Software Engineer',
    range: 'Jun 2016 – Present',
    summary:
      'I founded and operate a software consultancy and product development LLC, building SaaS products independently from concept through launch while owning frontend, backend, testing, and deployment across customer-facing tools and internal workflows.',
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
            <CompanyLink href={job.url} target="_blank" rel="noopener noreferrer">
              @ {job.company}
            </CompanyLink>
          </JobTitle>
          <Range>{job.range}</Range>
          <Summary>{job.summary}</Summary>
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

  @media (max-width: 420px) {
    gap: 16px;
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-left: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-left: none;
    border-bottom: 1px solid ${theme.colors.border};
    padding: 0 12px 8px;
    width: 100%;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 12px 20px;
  font-size: 0.85rem;
  font-family: ${theme.fonts.mono};
  text-align: left;
  color: ${({ $active }) => ($active ? theme.colors.accent : theme.colors.textMuted)};
  background: ${({ $active }) => ($active ? theme.colors.accentDim : 'transparent')};
  border-left: 2px solid ${({ $active }) => ($active ? theme.colors.accent : 'transparent')};
  margin-left: -1px;
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s;
  white-space: nowrap;
  flex: 0 0 auto;

  &:hover {
    color: ${theme.colors.text};
    background: ${theme.colors.surfaceHover};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    border-left: none;
    border-bottom: 2px solid ${({ $active }) => ($active ? theme.colors.accent : 'transparent')};
    margin-left: 0;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;

const Panel = styled.div`
  flex: 1;
  min-height: 200px;
`;

const Summary = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textMuted};
  line-height: 1.8;
  margin-top: 0;
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
