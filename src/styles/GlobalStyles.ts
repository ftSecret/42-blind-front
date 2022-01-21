import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './theme';

const resetCSS = css`
  /* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const globalCSS = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.default};
  }

  *::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.3rem;
    background-color: rgba(0, 0, 0, 0);
  }
  *::-webkit-scrollbar-thumb {
    width: 0.3rem;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.grey};
  }
  *::-webkit-scrollbar-track {
    width: 0.3rem;
    height: 0.3rem;
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
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  textarea {
    all: unset;
    line-height: 1.5;
  }
`;

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
${resetCSS}
${globalCSS}
`;

export default GlobalStyles;
