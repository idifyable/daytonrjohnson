'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';

const PROJECTS = [
  {
    name: 'Posing Perfect',
    tagline: 'A full-stack platform for bodybuilding coaches and athletes.',
    description:
      "Built around a problem I ran into firsthand: preparing for my debut Men's Physique competition. I own everything: product, system architecture, backend (Supabase/PostgreSQL), frontend (Next.js/React), auth, testing (Cypress), and deployment (Vercel).",
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Cypress', 'Vercel'],
    status: 'IN DEV',
  },
  {
    name: 'Career Iterator',
    tagline: 'An AI-powered career management tool.',
    description:
      "Built as sole engineer. A tool for taking a deliberate approach to career growth: tracking what you've done, identifying where to go next, and making progress concrete.",
    tech: ['TypeScript', 'React', 'Hono'],
    status: 'IN DEV',
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" label="Projects">
      <Grid>
        {PROJECTS.map((project, i) => (
          <ProjectPanel key={project.name}>
            <PanelTop>
              <PanelMeta>
                <ChannelId>CH.{String(i + 1).padStart(2, '0')}</ChannelId>
                <StatusBadge>{project.status}</StatusBadge>
              </PanelMeta>
              <ProjectName>{project.name}</ProjectName>
              <ProjectTagline>{project.tagline}</ProjectTagline>
            </PanelTop>
            <ProjectDesc>{project.description}</ProjectDesc>
            <PanelBottom>
              <TechList>
                {project.tech.map((t) => (
                  <TechItem key={t}>{t}</TechItem>
                ))}
              </TechList>
            </PanelBottom>
          </ProjectPanel>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

const Grid = styled.div`
  display: grid;
  gap: 24px;
`;

const ProjectPanel = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-left: 3px solid ${theme.colors.phosphor};
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition:
    background 0.2s,
    border-color 0.2s;

  &:hover {
    background: ${theme.colors.surfaceHover};
    border-color: ${theme.colors.borderHover};
    border-left-color: ${theme.colors.phosphor};
  }
`;

const PanelTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PanelMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ChannelId = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.66rem;
  color: ${theme.colors.textSubtle};
  letter-spacing: 0.1em;
`;

const StatusBadge = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.66rem;
  color: ${theme.colors.phosphor};
  background: ${theme.colors.phosphorDim};
  border: 1px solid rgba(159, 191, 64, 0.22);
  padding: 2px 9px;
  letter-spacing: 0.1em;
`;

const ProjectName = styled.h3`
  font-family: ${theme.fonts.display};
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 900;
  color: ${theme.colors.text};
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 1;
`;

const ProjectTagline = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
`;

const ProjectDesc = styled.p`
  font-size: 0.925rem;
  color: ${theme.colors.textMuted};
  line-height: 1.78;
`;

const PanelBottom = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid ${theme.colors.border};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const TechItem = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  color: ${theme.colors.textMuted};
  background: ${theme.colors.panel};
  border: 1px solid ${theme.colors.border};
  padding: 3px 10px;
  letter-spacing: 0.04em;
`;
