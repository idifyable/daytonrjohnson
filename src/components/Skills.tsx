'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';

const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'React Native'],
  },
  {
    label: 'Backend & Infra',
    skills: ['Node.js', 'PostgreSQL', 'Supabase', 'REST', 'GraphQL', 'Docker'],
  },
  {
    label: 'Tooling & Process',
    skills: ['Cypress', 'System Design', 'Git', 'GitHub', 'Linear'],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" label="Skills">
      <SkillGrid>
        {SKILL_GROUPS.map((group) => (
          <SkillGroup key={group.label}>
            <GroupLabel>{group.label}</GroupLabel>
            <TagRow>
              {group.skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </TagRow>
          </SkillGroup>
        ))}
      </SkillGrid>
    </SectionWrapper>
  );
}

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 36px;
`;

const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const GroupLabel = styled.h3`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  color: ${theme.colors.phosphor};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillTag = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.72rem;
  color: ${theme.colors.textMuted};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  padding: 3px 10px;
  letter-spacing: 0.03em;
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: ${theme.colors.text};
    border-color: ${theme.colors.phosphor};
  }
`;
