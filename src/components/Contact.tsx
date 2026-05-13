'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  return (
    <SectionWrapper id="contact" label="Contact">
      <Inner>
        <Heading>Let&apos;s work together.</Heading>
        <Body>
          I&apos;m open to senior engineering roles, interesting consulting
          engagements, and conversations with other builders. If you&apos;ve got
          something worth talking about, reach out.
        </Body>
        <EmailLink href="mailto:dayton@appreciatethediscrete.com">
          dayton@appreciatethediscrete.com
        </EmailLink>
        <SocialLinks>
          <SocialLink href="https://github.com/idifyable" target="_blank" rel="noopener noreferrer">
            GitHub
          </SocialLink>
          <Dot>·</Dot>
          <SocialLink href="https://www.linkedin.com/in/daytonrjohnson/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
        </SocialLinks>
      </Inner>
    </SectionWrapper>
  )
}

const Inner = styled.div`
  max-width: 560px;
`

const Heading = styled.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`

const Body = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textMuted};
  line-height: 1.75;
  margin-bottom: 36px;
`

const EmailLink = styled.a`
  display: inline-block;
  font-size: 1.1rem;
  font-family: ${theme.fonts.mono};
  color: ${theme.colors.accent};
  border: 1px solid ${theme.colors.accent};
  padding: 14px 28px;
  border-radius: 4px;
  margin-bottom: 40px;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.accentDim};
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const SocialLink = styled.a`
  font-size: 0.9rem;
  color: ${theme.colors.textMuted};
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`

const Dot = styled.span`
  color: ${theme.colors.textSubtle};
`
