'use client'

import styled, { keyframes } from 'styled-components'
import { theme } from '@/styles/theme'

export default function Hero() {
  return (
    <Section>
      <Inner>
        <Eyebrow>Hey, I&apos;m</Eyebrow>
        <Name>Dayton Johnson.</Name>
        <Tagline>I make software.</Tagline>
        <Description>
          Senior Software Engineer with ~10 years of experience taking ideas
          from concept to production. Currently building commerce tooling at{' '}
          <Highlight href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">
            HubSpot
          </Highlight>{' '}
          and indie SaaS at{' '}
          <Highlight href="https://github.com/idifyable" target="_blank" rel="noopener noreferrer">
            Appreciate The Discrete
          </Highlight>
          . Passionate about the modern web platform, developer craft, and
          shipping things that matter.
        </Description>
        <CTAs>
          <PrimaryBtn href="#projects">See my work</PrimaryBtn>
          <SecondaryBtn href="#contact">Get in touch</SecondaryBtn>
        </CTAs>
      </Inner>
    </Section>
  )
}

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 24px;
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding-top: ${theme.navHeight};

  & > * {
    animation: ${fadeUp} 0.6s ease both;
  }

  & > *:nth-child(1) { animation-delay: 0.1s; }
  & > *:nth-child(2) { animation-delay: 0.2s; }
  & > *:nth-child(3) { animation-delay: 0.3s; }
  & > *:nth-child(4) { animation-delay: 0.4s; }
  & > *:nth-child(5) { animation-delay: 0.5s; }
`

const Eyebrow = styled.p`
  font-family: ${theme.fonts.mono};
  font-size: 0.9rem;
  color: ${theme.colors.accent};
  margin-bottom: 12px;
  letter-spacing: 0.02em;
`

const Name = styled.h1`
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  color: ${theme.colors.text};
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
`

const Tagline = styled.h2`
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  font-weight: 600;
  color: ${theme.colors.textMuted};
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 28px;
`

const Description = styled.p`
  max-width: 560px;
  font-size: 1.05rem;
  color: ${theme.colors.textMuted};
  line-height: 1.75;
  margin-bottom: 40px;
`

const Highlight = styled.a`
  color: ${theme.colors.text};
  border-bottom: 1px solid ${theme.colors.border};
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }
`

const CTAs = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: ${theme.colors.accent};
  color: #080808;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
`

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 4px;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${theme.colors.borderHover};
    color: ${theme.colors.text};
    transform: translateY(-1px);
  }
`
