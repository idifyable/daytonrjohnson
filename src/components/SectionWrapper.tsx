'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface Props {
  id: string;
  label: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, label, children }: Props) {
  return (
    <Section id={id}>
      <Inner>
        <SectionHeader>
          <SectionLabel>{label}</SectionLabel>
          <Divider />
        </SectionHeader>
        {children}
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 100px 24px;
`;

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 52px;
`;

const SectionLabel = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.text};
  white-space: nowrap;
  letter-spacing: -0.02em;
`;

const Divider = styled.div`
  height: 1px;
  flex: 1;
  background: ${theme.colors.border};
`;
