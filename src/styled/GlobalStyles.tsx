import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 16px;
  }

  body {
    background: linear-gradient(black, #0b5fc3, #2970c6, #4e88cd);
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    color: #ffffff;
    font: normal normal 24px/1em 'Lato', sans-serif;
    text-align: center;
    text-shadow: 0px 0px 5px black;
  }
`;
