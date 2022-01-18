import { createGlobalStyle, css } from 'styled-components';

import reset from 'styled-reset';
import { Theme } from './theme';

const globalCss = css`
  body {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.default};
  }

  html {
    width: -webkit-fill-available;
    height: 100vh;
    max-height: 100vh;
  }

  *::-webkit-scrollbar {
    width: 0.3rem;
    background-color: rgba(0, 0, 0, 0);
  }
  *::-webkit-scrollbar-thumb {
    width: 0.3rem;
    background-color: ${({ theme }) => theme.colors.grey};
  }
  *::-webkit-scrollbar-track {
    width: 0.3rem;
  }

  a {
    all: unset;
    width: -webkit-fill-available;
  }
  a:hover,
  button:hover {
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
    max-height: 100vh;
  }

  textarea {
    all: unset;
    line-height: 1.5;
  }
`;

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
${reset}
${globalCss}
`;

export default GlobalStyles;
