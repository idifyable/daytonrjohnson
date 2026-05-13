'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

const CHANNEL_MAP: Record<string, string> = {
  about: 'CH.01',
  experience: 'CH.02',
  projects: 'CH.03',
  skills: 'CH.04',
  contact: 'CH.05',
};

interface Props {
  id: string;
  label: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, label, children }: Props) {
  const channel = CHANNEL_MAP[id] ?? 'CH.00';
  return (
    <Section id={id}>
      <Inner>
        <Header>
          <Channel>{channel}</Channel>
          <SectionLabel>{label}</SectionLabel>
          <HeaderLine />
          <SignalStatus>SIGNAL: ACTIVE</SignalStatus>
        </Header>
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

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 56px;
`;

const Channel = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.68rem;
  color: ${theme.colors.phosphor};
  letter-spacing: 0.1em;
  flex-shrink: 0;
`;

const SectionLabel = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: 1.75rem;
  font-weight: 900;
  color: ${theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1;
`;

const HeaderLine = styled.div`
  height: 1px;
  flex: 1;
  background: ${theme.colors.border};
  min-width: 20px;
`;

const SignalStatus = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.62rem;
  color: ${theme.colors.textSubtle};
  letter-spacing: 0.12em;
  flex-shrink: 0;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;
