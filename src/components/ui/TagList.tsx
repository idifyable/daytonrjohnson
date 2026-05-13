'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TagBase = styled.span`
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.mono};
  letter-spacing: 0.03em;
`;

export const TechTag = styled(TagBase)`
  font-size: 0.72rem;
  background: ${theme.colors.panel};
  padding: 3px 10px;
`;

export const SkillTag = styled(TagBase)`
  font-size: 0.78rem;
  background: ${theme.colors.surface};
  padding: 4px 12px;
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: ${theme.colors.text};
    border-color: ${theme.colors.phosphor};
  }
`;
