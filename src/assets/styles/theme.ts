/*
https://dkje.github.io/2020/10/13/StyledComponents/ 에서 가져온 코드입니다.
아직 프로젝트에 반영이 제대로 되지 않았기 때문에 불필요하거나 맞지 않는 값이 있을 수 있습니다.
*/

import { DARK_THEME, LIGHT_THEME } from 'constants/theme';

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    red: string;
    yellow: string;
    blue: string;
    white: string;
    orange: string;
    green: string;
    purple: string;
    gray: string;
    font: string;
  };
  margins: { sm: string; base: string; lg: string; xl: string };
  paddings: { sm: string; base: string; lg: string; xl: string };
};

type ThemeGroup = {
  [DARK_THEME]: Theme;
  [LIGHT_THEME]: Theme;
};

const margins = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const paddings = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: '1rem',
    base: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
  lineheight: {
    base: 1.5,
    large: 3.5,
  },
};

export const colors = {
  red: '#ef7566',
  yellow: '#ffdc98',
  blue: '#60deec',
  white: '#fdfcfd',
  orange: '#ed7631',
  green: '#90c37b',
  purple: '#d1c4ff',
  gray: '#7f808a',
};

const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px',
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

const lightThemeColors = {
  ...colors,
  primary: '#fdfcfd',
  secondary: '#7f808a',
  background: '#f7f6f7',
  font: '#111216',
};

const darkThemeColors = {
  ...colors,
  primary: '#1e1f22',
  secondary: '#7f808a',
  background: '#111216',
  font: '#f8f8f8',
};

const defalutTheme = {
  margins,
  paddings,
  fonts,
  device,
};

export const dark: Theme = {
  ...defalutTheme,
  colors: darkThemeColors,
};

export const light: Theme = {
  ...defalutTheme,
  colors: lightThemeColors,
};

const theme: ThemeGroup = {
  [DARK_THEME]: dark,
  [LIGHT_THEME]: light,
};

export default theme;
