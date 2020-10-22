import styled from 'styled-components';
import { breakpoints } from '@constants/breakpoints';
import { PrimaryHeading } from '@components/typography/PrimaryHeading';
import { SecondaryHeading } from '@components/typography/SecondaryHeading';
import { Text } from '@components/typography/Text';
import { Strong } from '@components/typography/Strong';
import { BulletedList } from '@components/primitives/BulletedList';

export const WhoAmI: React.FC = () => {
  return (
    <WhoAmIContainer>
      <PortraitImage src="/images/content/portrait.jpg" alt="Dayton Johnson" />
      <ContentWrapper>
        <SecondaryHeading>Who Am I?</SecondaryHeading>
        <PrimaryHeading level={1}>Web Developer</PrimaryHeading>
        <Text>
          Hello, I'm a web developer based in Eau Claire, Wisconsin. I'm passionate in coding and
          creating useful web-based software. I love learning new technologies and am focused on
          becoming a master of the web platform.
        </Text>
        <SkillsContainer>
          <SkillsWrapper>
            <Text>
              <Strong>Strong Skills:</Strong>
            </Text>
            <BulletedList>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>PHP</li>
            </BulletedList>
          </SkillsWrapper>
          <SkillsWrapper>
            <Text>
              <Strong>Growing Skills:</Strong>
            </Text>
            <BulletedList>
              <li>TypeScript</li>
              <li>ReactJS</li>
              <li>React Mobile</li>
              <li>Docker</li>
            </BulletedList>
          </SkillsWrapper>
        </SkillsContainer>
      </ContentWrapper>
    </WhoAmIContainer>
  );
};

const WhoAmIContainer = styled.div`
  position: relative;
  background-color: #ffffff;

  &:after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: -3rem;
    height: 3rem;
    width: 100%;
    background-color: lightslategray;
  }

  @media ${breakpoints.desktop} {
    display: flex;
    justify-content: space-around;
    margin-bottom: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

const ContentWrapper = styled.div`
  padding: 1.5rem;

  @media ${breakpoints.desktop} {
    padding: 1.5rem 0;
    width: 66.666%;
  }
`;

const PortraitImage = styled.img`
  position: relative;
  align-self: flex-start;
  align-self: center;
  bottom: 3rem;
  margin: auto;
  width: 100%;
  max-width: 325px;
  border: 15px solid #ffffff;
  box-shadow: 0px 20px 30px grey;

  @media ${breakpoints.desktop} {
    margin: 0;
    margin-right: 3rem;
    width: 33.333%;
    max-width: 350px;
  }
`;

const SkillsContainer = styled.div`
  @media (min-width: 535px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SkillsWrapper = styled.div`
  @media (min-width: 535px) {
    width: calc(50% - 1rem);
  }
`;
