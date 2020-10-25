import * as S from './style';
import { PrimaryHeading } from '@components/typography/PrimaryHeading';
import { SecondaryHeading } from '@components/typography/SecondaryHeading';
import { Text } from '@components/typography/Text';
import { Strong } from '@components/typography/Strong';
import { BulletedList } from '@components/primitives/BulletedList';

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
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>PHP</li>
            </BulletedList>
          </S.SkillsWrapper>
          <S.SkillsWrapper>
            <Text>
              <Strong>Growing Skills:</Strong>
            </Text>
            <BulletedList>
              <li>TypeScript</li>
              <li>ReactJS</li>
              <li>React Mobile</li>
              <li>Docker</li>
            </BulletedList>
          </S.SkillsWrapper>
        </S.SkillsContainer>
      </S.ContentWrapper>
    </S.WhoAmI>
  );
};
