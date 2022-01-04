import { DARK_THEME, LIGHT_THEME } from 'constants/theme';

export type Theme = {
  colors: typeof lightThemeColors;
  fonts: typeof fonts;
  margins: typeof margins;
  paddings: typeof paddings;
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

export const fonts = {
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
  lineHeight: {
    base: 1,
    large: 1.5,
  },
};

export const colors = {
  red: '#ef7566',
  yellow: '#ffdc98',
  green: '#90c37b',
  grey: '#7f808a',
  white: '#fdfcfd',
  blue: '#60deec',
};

export const size = {
  mobile: '280px',
  tablet: '768px',
  desktop: '1440px',
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

/*
primary : 카드색
secondary : ???
background : 배경색
default : 글자색
*/
const lightThemeColors = {
  ...colors,
  primary: '#fdfcfd',
  secondary: '#7f808a',
  background: '#F4F5F7',
  default: '#111216',
};

const darkThemeColors = {
  ...colors,
  primary: '#1e1f22',
  secondary: '#7f808a',
  background: '#111216',
  default: '#f8f8f8',
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
