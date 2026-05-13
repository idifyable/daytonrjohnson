'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';
import { FeaturedCard } from './ui/Card';
import { TagList, TechTag } from './ui/TagList';

const PROJECTS = [
  {
    name: 'Posing Perfect',
    tagline: 'A full-stack platform for bodybuilding coaches and athletes.',
    description:
      "Built around a problem I ran into firsthand: preparing for my debut Men's Physique competition. I own everything: product, system architecture, backend (Supabase/PostgreSQL), frontend (Next.js/React), auth, testing (Cypress), and deployment (Vercel).",
    tech: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Cypress',
      'Vercel',
    ],
    status: 'In development',
    featured: true,
  },
  {
    name: 'Career Iterator',
    tagline: 'An AI-powered career management tool.',
    description:
      "Built as sole engineer. A tool for taking a deliberate approach to career growth: tracking what you've done, identifying where to go next, and making progress concrete.",
    tech: ['TypeScript', 'React', 'Hono'],
    status: 'In development',
    featured: true,
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" label="Projects">
      <FeaturedGrid>
        {PROJECTS.map((project) => (
          <FeaturedCard key={project.name}>
            <CardTop>
              <CardMeta>
                <StatusBadge>{project.status}</StatusBadge>
              </CardMeta>
              <CardName>{project.name}</CardName>
              <CardTagline>{project.tagline}</CardTagline>
            </CardTop>
            <CardDescription>{project.description}</CardDescription>
            <CardBottom>
              <TagList>
                {project.tech.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </TagList>
            </CardBottom>
          </FeaturedCard>
        ))}
      </FeaturedGrid>

    </SectionWrapper>
  );
}

const FeaturedGrid = styled.div`
  display: grid;
  gap: 24px;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatusBadge = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: ${theme.colors.accent};
  background: ${theme.colors.accentDim};
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.accentGlow};
`;

const CardName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
`;

const CardTagline = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textMuted};
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  line-height: 1.75;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;
