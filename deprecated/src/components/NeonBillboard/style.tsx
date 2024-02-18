import {breakpoints } from 'src/constants/breakpoints';
import styled, {keyframes } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  max-width: 100%;
  color: white;
  text-align: center;

  @media ${breakpoints.desktop} {
    padding: 6rem 0;
  }
`;

export const neonAnimation = keyframes`
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

export const PrimaryHeading = styled.h1`
  margin: 0 0 0.5rem 0;
  color: white;
  font: normal normal 50px/1em 'Permanent Marker', cursive;

  @media only screen and (min-width: 500px) {
    animation: ${neonAnimation} 7s ease-in-out infinite alternate;
  }

  @media ${breakpoints.desktop} {
    font-size: 80px;
    line-height: 1em;
    margin-bottom: 1rem;
  }
`;

export const SecondaryHeading = styled.h1`
  margin: 0;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff, 0 0 35px #228dff,
    0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
  color: #228dff;
  font: normal normal 28px/1em 'Permanent Marker', cursive;

  @media only screen and (min-width: 500px) {
    animation: ${neonAnimation} 7s ease-in-out infinite alternate-reverse;
  }

  @media ${breakpoints.desktop} {
    font-size: 48px;
  }
`;

export const Wrapper = styled.div``;
