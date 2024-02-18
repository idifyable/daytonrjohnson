import {PrimaryHeading } from 'src/components/typography/PrimaryHeading';
import {SecondaryHeading } from 'src/components/typography/SecondaryHeading';
import {Text } from 'src/components/typography/Text';
import {BulletedList,Li,Strong } from 'src/components/globals';
import * as S from './style';

export const WhoAmI: React.FC = () => {
  return (
    <S.WhoAmI>
      <S.PortraitImage src="/images/content/portrait.jpg" alt="Dayton Johnson" />
      <S.ContentWrapper>
        <SecondaryHeading>Who Am I?</SecondaryHeading>
        <PrimaryHeading level={1}>Web Developer</PrimaryHeading>
        <Text>
          Hello, I'm a web developer based in Eau Claire, Wisconsin. I'm passionate in coding and
          creating useful web-based software. I love learning new technologies and am focused on
          becoming a master of the web platform.
        </Text>
        <S.SkillsContainer>
          <S.SkillsWrapper>
            <Text>
              <Strong>Strong Skills:</Strong>
            </Text>
            <BulletedList>
              <Li>HTML/CSS</Li>
              <Li>JavaScript/TypeScript</Li>
              <Li>Node.js</Li>
              <Li>PHP</Li>
            </BulletedList>
          </S.SkillsWrapper>
          <S.SkillsWrapper>
            <Text>
              <Strong>Growing Skills:</Strong>
            </Text>
            <BulletedList>
              <Li>ReactJS</Li>
              <Li>React Native</Li>
              <Li>GraphQL</Li>
              <Li>Docker</Li>
            </BulletedList>
          </S.SkillsWrapper>
        </S.SkillsContainer>
      </S.ContentWrapper>
    </S.WhoAmI>
  );
};
