import styled from 'styled-components';
import {breakpoints } from 'src/constants/breakpoints';

export const WhoAmI = styled.div`
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

export const ContentWrapper = styled.div`
  padding: 1.5rem;

  @media ${breakpoints.desktop} {
    padding: 1.5rem 0;
    width: 66.666%;
  }
`;

export const PortraitImage = styled.img`
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

export const SkillsContainer = styled.div`
  @media (min-width: 535px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SkillsWrapper = styled.div`
  @media (min-width: 535px) {
    width: calc(50% - 1rem);
  }
`;
