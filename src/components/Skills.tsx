'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';
import { TagList, SkillTag } from './ui/TagList';

const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'SQL', 'GraphQL', 'PHP'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Next.js', 'React Native', 'Node.js', 'React Testing Library', 'Cypress'],
  },
  {
    label: 'AI Tools',
    skills: ['Claude Code', 'Cursor', 'AI Workflow Automation'],
  },
  {
    label: 'Tools',
    skills: ['PostgreSQL', 'Supabase', 'Git', 'Docker', 'MongoDB'],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" label="Skills">
      <Grid>
        {SKILL_GROUPS.map((group) => (
          <Group key={group.label}>
            <GroupLabel>{group.label}</GroupLabel>
            <TagList>
              {group.skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </TagList>
          </Group>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 32px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const GroupLabel = styled.h3`
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.accent};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
