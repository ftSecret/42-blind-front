import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';
import { Theme } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
${reset}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scrollbar-gutter: stable;
  background-color: ${({ theme }) => theme.colors.background};
  color:  ${({ theme }) => theme.colors.font};

}

html {
  width: 100%;
  height: 100%;
  scrollbar-gutter: stable;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

*::-webkit-scrollbar {
  width: 0.3rem;
  background-color: rgba(0, 0, 0, 0);
}
*::-webkit-scrollbar-thumb {
  width: 0.3rem;
  background-color: var(--black-color);
}
*::-webkit-scrollbar-track {
  width: 0.3rem;
}
* {
  scrollbar-gutter: unset;
}

a {
  all: unset;
  width: 100%;
}
a:hover,
button:hover {
  cursor: pointer;
}

input:focus {
  outline: none;
}



`;

export default GlobalStyles;
