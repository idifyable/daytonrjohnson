import styled, { keyframes } from 'styled-components';

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
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 7rem 0;
  max-width: 100%;
  color: white;
  text-align: center;
`;
const PrimaryHeading = styled.h1`
  font: normal normal 80px/1em 'Permanent Marker', cursive;
  animation: ${neonAnimation} 7s ease-in-out infinite alternate;
`;
const SecondaryHeading = styled.h1`
  font: normal normal 48px/1em 'Permanent Marker', cursive;
  animation: ${neonAnimation} 7s ease-in-out infinite alternate-reverse;
`;

export const NeonBillboard: React.FC = () => {
  return (
    <Section>
      <PrimaryHeading>Dayton Johnson</PrimaryHeading>
      <SecondaryHeading>Web Developer</SecondaryHeading>
    </Section>
  );
};
