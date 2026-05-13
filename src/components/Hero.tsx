'use client';

import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';
import InlineLink from './ui/InlineLink';

export default function Hero() {
  return (
    <Section>
      <Waveform aria-hidden="true">
        <WaveScroller>
          <WaveSvg />
          <WaveSvg />
        </WaveScroller>
      </Waveform>
      <Inner>
        <Name>
          <NameLine>DAYTON</NameLine>
          <NameLine>JOHNSON.</NameLine>
        </Name>
        <Tagline>Systems Builder. Frontend Architect.</Tagline>
        <Description>
          Senior engineer at{' '}
          <InlineLink
            href="https://www.hubspot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            HubSpot
          </InlineLink>{' '}
          owning core frontend architecture across Commerce. On the side,
          building{' '}
          <InlineLink
            href="https://posingperfect.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Posing Perfect
          </InlineLink>{' '}
          and Career Iterator as sole engineer. I move fast and go deep.
        </Description>
        <CTAs>
          <PrimaryBtn href="#projects">See my work</PrimaryBtn>
          <SecondaryBtn href="#contact">Get in touch</SecondaryBtn>
        </CTAs>
      </Inner>
    </Section>
  );
}

function WaveSvg() {
  return (
    <svg
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '1200px', height: '100px', flexShrink: 0 }}
    >
      {/* Main wave — period 300px, amplitude ±30px */}
      <path
        d="M0,50 C42,20 108,80 150,50 C192,20 258,80 300,50 C342,20 408,80 450,50 C492,20 558,80 600,50 C642,20 708,80 750,50 C792,20 858,80 900,50 C942,20 1008,80 1050,50 C1092,20 1158,80 1200,50"
        fill="none"
        stroke={theme.colors.phosphor}
        strokeWidth="1.2"
        opacity="0.22"
      />
      {/* Harmonic — same period, double amplitude */}
      <path
        d="M0,50 C42,8 108,92 150,50 C192,8 258,92 300,50 C342,8 408,92 450,50 C492,8 558,92 600,50 C642,8 708,92 750,50 C792,8 858,92 900,50 C942,8 1008,92 1050,50 C1092,8 1158,92 1200,50"
        fill="none"
        stroke={theme.colors.phosphor}
        strokeWidth="0.5"
        opacity="0.08"
      />
    </svg>
  );
}

const waveScroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-1200px); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;


const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: relative;
  overflow: hidden;
`;

const Waveform = styled.div`
  position: absolute;
  bottom: 72px;
  left: 0;
  right: 0;
  height: 100px;
  overflow: hidden;
  pointer-events: none;
`;

const WaveScroller = styled.div`
  display: flex;
  animation: ${waveScroll} 28s linear infinite;
  will-change: transform;
`;

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding-top: ${theme.navHeight};
  position: relative;
  z-index: 1;

  & > * {
    animation: ${fadeUp} 0.7s ease both;
  }
  & > *:nth-child(1) { animation-delay: 0.05s; }
  & > *:nth-child(2) { animation-delay: 0.15s; }
  & > *:nth-child(3) { animation-delay: 0.25s; }
  & > *:nth-child(4) { animation-delay: 0.35s; }
  & > *:nth-child(5) { animation-delay: 0.45s; }
`;


const Name = styled.h1`
  margin-bottom: 16px;
  line-height: 0.9;
`;

const NameLine = styled.span`
  display: block;
  font-family: ${theme.fonts.display};
  font-size: clamp(4rem, 13vw, 10rem);
  font-weight: 900;
  color: ${theme.colors.text};
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const Tagline = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(1rem, 2.8vw, 1.6rem);
  font-weight: 700;
  color: ${theme.colors.textMuted};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 28px;
`;

const Description = styled.p`
  max-width: 520px;
  font-size: 1rem;
  color: ${theme.colors.textMuted};
  line-height: 1.8;
  margin-bottom: 44px;
`;

const CTAs = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 11px 28px;
  background: ${theme.colors.phosphor};
  color: #080806;
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 11px 28px;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    border-color 0.2s,
    color 0.2s,
    transform 0.2s;

  &:hover {
    border-color: ${theme.colors.phosphor};
    color: ${theme.colors.phosphor};
    transform: translateY(-1px);
  }
`;
