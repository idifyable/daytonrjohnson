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
  border-radius: 4px;
  color: ${theme.colors.textMuted};
`;

export const TechTag = styled(TagBase)`
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  background: ${theme.colors.surfaceHover};
  padding: 4px 10px;
`;

export const SkillTag = styled(TagBase)`
  font-size: 0.875rem;
  background: ${theme.colors.surface};
  padding: 5px 12px;
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: ${theme.colors.text};
    border-color: ${theme.colors.borderHover};
  }
`;
