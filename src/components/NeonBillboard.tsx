import styled, { keyframes } from 'styled-components';
import { breakpoints } from '@constants/breakpoints';

export const NeonBillboard: React.FC = () => {
  return (
    <Section>
      <PrimaryHeading>Dayton Johnson</PrimaryHeading>
      <SecondaryHeading>Web Developer</SecondaryHeading>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 4rem 0;
  max-width: 100%;
  color: white;
  text-align: center;

  @media ${breakpoints.desktop} {
    padding: 5rem 0 7rem 0;
  }
`;

const neonAnimation = keyframes`
  0%,
  20% {
    text-shadow: none;
    color: white;
  }
  50% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff, 0 0 70px #228dff,
      0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
    color: #fff;
  }
  80%,
  100% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff, 0 0 35px #228dff,
      0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
    color: #228dff;
  }
`;

const PrimaryHeading = styled.h1`
  font: normal normal 50px/1em 'Permanent Marker', cursive;
  animation: ${neonAnimation} 7s ease-in-out infinite alternate;

  @media ${breakpoints.desktop} {
    font-size: 80px;
    line-height: 1em;
    margin-bottom: 0.5rem;
  }
`;

const SecondaryHeading = styled.h1`
  font: normal normal 28px/1em 'Permanent Marker', cursive;
  animation: ${neonAnimation} 7s ease-in-out infinite alternate-reverse;

  @media ${breakpoints.desktop} {
    font-size: 48px;
  }
`;
