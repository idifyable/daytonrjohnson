'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const CardBase = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.2s,
    background 0.2s;

  &:hover {
    border-color: ${theme.colors.borderHover};
    background: ${theme.colors.surfaceHover};
  }
`;

export const FeaturedCard = styled(CardBase)`
  border-left: 3px solid ${theme.colors.phosphor};
  padding: 36px;
  gap: 20px;

  &:hover {
    border-left-color: ${theme.colors.phosphor};
  }
`;

export const OtherCard = styled(CardBase)`
  padding: 24px;
  gap: 12px;
  cursor: pointer;
  transition:
    border-color 0.2s,
    background 0.2s,
    transform 0.2s;

  &:hover {
    border-color: ${theme.colors.borderHover};
    transform: translateY(-2px);
  }
`;
