import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    background-color: ${theme.colors.bg};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.sans};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ::selection {
    background: ${theme.colors.phosphorGlow};
    color: ${theme.colors.phosphor};
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.bg};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.border};
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.phosphor};
  }
`

export default GlobalStyle
