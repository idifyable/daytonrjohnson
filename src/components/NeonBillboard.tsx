import styled from 'styled-components';

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
  animation: neon 7s ease-in-out infinite alternate;
`;
const SecondaryHeading = styled.h1`
  font: normal normal 48px/1em 'Permanent Marker', cursive;
  animation: neon 7s ease-in-out infinite alternate-reverse;
`;

export const NeonBillboard: React.FC = () => {
  return (
    <Section>
      <PrimaryHeading>Dayton Johnson</PrimaryHeading>
      <SecondaryHeading>Web Developer</SecondaryHeading>
    </Section>
  );
};
