import styled from 'styled-components';
import {breakpoints } from 'src/constants/breakpoints';
import {BulletedList as UnstyledBulletedList } from 'src/components/globals';
import {PrimaryHeading } from 'src/components/typography/PrimaryHeading';
import {SecondaryHeading } from 'src/components/typography/SecondaryHeading';

export const ProjectListItem = styled.li`
  display: block;
  width: calc(100% - 2rem);
  padding: 0 1.5rem;
  margin: 0 auto 3.5rem auto;
  background-color: #ffffff;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ProjectImage = styled.img`
  position: relative;
  bottom: 2rem;
  margin: 0 auto auto auto;
  max-height: 300px;
  border: 10px solid white;
  box-shadow: 0px 10px 20px #000000;
`;

export const ImageWrapper = styled.div`
  @media ${breakpoints.desktop} {
    width: 50%;
  }
`;

export const ContentWrapper = styled.div`
  padding-bottom: 1.5rem;

  @media ${breakpoints.desktop} {
    width: 50%;
    padding-top: 1.5rem;
  }
`;

export const ButtonRow = styled.div`
  font-size: 0;
  text-align: center;

  @media ${breakpoints.desktop} {
    text-align: initial;
  }

  & > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ProjectTitleHeader = styled(PrimaryHeading)`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const TechnologiesUsedHeader = styled(SecondaryHeading)`
  margin-bottom: 1rem;
`;

export const BulletedList = styled(UnstyledBulletedList)`
  margin-bottom: 1rem;
`;
