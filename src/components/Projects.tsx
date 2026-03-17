'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'
import SectionWrapper from './SectionWrapper'

const PROJECTS = [
  {
    name: 'Posing Perfect',
    tagline: 'Coaching SaaS for competitive bodybuilders.',
    description:
      'A micro-SaaS platform connecting competitive bodybuilders with posing coaches. Built to solve a real problem I experienced firsthand — preparing for my debut Men\'s Physique competition. Features include video submission, coach feedback, and session scheduling.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'React', 'Vercel'],
    status: 'In development',
    featured: true,
  },
]

const SIDE_PROJECTS = [
  {
    name: 'Personal Portfolio',
    description: 'This site. Built with Next.js, App Router, and styled-components.',
    tech: ['Next.js', 'TypeScript', 'styled-components'],
    url: 'https://www.daytonrjohnson.com',
  },
]

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
              <TechList>
                {project.tech.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </TechList>
            </CardBottom>
          </FeaturedCard>
        ))}
      </FeaturedGrid>

      <OtherHeading>Other work</OtherHeading>
      <OtherGrid>
        {SIDE_PROJECTS.map((project) => (
          <OtherCard
            key={project.name}
            as={project.url ? 'a' : 'div'}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <OtherCardName>{project.name}</OtherCardName>
            <OtherCardDesc>{project.description}</OtherCardDesc>
            <TechList>
              {project.tech.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </TechList>
          </OtherCard>
        ))}
      </OtherGrid>
    </SectionWrapper>
  )
}

const FeaturedGrid = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 64px;
`

const FeaturedCard = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${theme.colors.borderHover};
  }
`

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const StatusBadge = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: ${theme.colors.accent};
  background: ${theme.colors.accentDim};
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.accentGlow};
`

const CardName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
`

const CardTagline = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textMuted};
`

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  line-height: 1.75;
`

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const TechTag = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  color: ${theme.colors.textMuted};
  background: ${theme.colors.surfaceHover};
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.border};
`

const OtherHeading = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.textMuted};
  margin-bottom: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.8rem;
`

const OtherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`

const OtherCard = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 6px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.borderHover};
    transform: translateY(-2px);
  }
`

const OtherCardName = styled.h4`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.text};
`

const OtherCardDesc = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.textMuted};
  line-height: 1.6;
  flex: 1;
`
