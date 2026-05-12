'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Arrow = styled.span<{ $marginTop?: string }>`
  color: ${theme.colors.accent};
  flex-shrink: 0;
  margin-top: ${({ $marginTop }) => $marginTop ?? '1px'};
`;

export const BulletItem = styled.li<{
  $fontSize?: string;
  $lineHeight?: string;
}>`
  display: flex;
  gap: 12px;
  font-size: ${({ $fontSize }) => $fontSize ?? '0.95rem'};
  color: ${theme.colors.textMuted};
  line-height: ${({ $lineHeight }) => $lineHeight ?? '1.7'};
`;
