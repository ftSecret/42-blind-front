/*
https://dkje.github.io/2020/10/13/StyledComponents/ 에서 가져온 코드입니다.
아직 프로젝트에 반영이 제대로 되지 않았기 때문에 불필요하거나 맞지 않는 값이 있을 수 있습니다.
*/

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
    sm: '1.4rem',
    base: '1.6rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  red: '#e43737',
  yellow: '#ffff4d',
  blue: '#0099ff',
  white: '#ffffff',
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
  primary: '#333',
  secondary: '#fff',
  background: '#18191a',
};

const darkThemeColors = {
  ...colors,
  primary: '#242526',
  secondary: '#c4c4c4',
  background: '#18191a',
};

const defalutTheme = {
  margins,
  paddings,
  fonts,
  device,
};

export const darkTheme = {
  ...defalutTheme,
  colors: darkThemeColors,
};

export const lightTheme = {
  ...defalutTheme,
  colors: lightThemeColors,
};
