'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

const InlineLink = styled.a`
  color: ${theme.colors.text};
  border-bottom: 1px solid ${theme.colors.border};
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: ${theme.colors.phosphor};
    border-color: ${theme.colors.phosphor};
  }
`;

export default InlineLink;
