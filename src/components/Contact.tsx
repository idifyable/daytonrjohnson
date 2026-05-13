'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import SectionWrapper from './SectionWrapper';

export default function Contact() {
  return (
    <SectionWrapper id="contact" label="Contact">
      <Inner>
        <Heading>
          LET&apos;S WORK
          <br />
          TOGETHER.
        </Heading>
        <Body>
          I&apos;m open to senior engineering roles, interesting consulting engagements, and
          conversations with other builders. If you&apos;ve got something worth talking about, reach
          out.
        </Body>
        <EmailLink href="mailto:dayton@appreciatethediscrete.com">
          dayton@appreciatethediscrete.com
        </EmailLink>
        <SocialLinks>
          <SocialLink href="https://github.com/idifyable" target="_blank" rel="noopener noreferrer">
            GitHub
          </SocialLink>
          <Sep>·</Sep>
          <SocialLink
            href="https://www.linkedin.com/in/daytonrjohnson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SocialLink>
        </SocialLinks>
      </Inner>
    </SectionWrapper>
  );
}

const Inner = styled.div`
  max-width: 560px;
`;

const Heading = styled.h3`
  font-family: ${theme.fonts.display};
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  font-weight: 900;
  color: ${theme.colors.text};
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 0.92;
  margin-bottom: 28px;
`;

const Body = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textMuted};
  line-height: 1.8;
  margin-bottom: 40px;
`;

const EmailLink = styled.a`
  display: inline-block;
  font-family: ${theme.fonts.mono};
  font-size: 0.875rem;
  color: ${theme.colors.phosphor};
  border: 1px solid ${theme.colors.phosphor};
  padding: 14px 28px;
  margin-bottom: 40px;
  letter-spacing: 0.04em;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.phosphorDim};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SocialLink = styled.a`
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  letter-spacing: 0.05em;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.phosphor};
  }
`;

const Sep = styled.span`
  color: ${theme.colors.textSubtle};
`;
