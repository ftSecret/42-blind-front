import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from 'app/hooks';
import { DARK_THEME } from 'constants/theme';
import { selectTheme } from 'features/theme/themeSlice';

import LogoWhite from 'assets/logo/logo-white.png';
import LogoBlack from 'assets/logo/logo-black.png';

const Logo = () => {
  const themeState = useAppSelector(selectTheme);
  return <StyledLogo src={themeState === DARK_THEME ? LogoWhite : LogoBlack} alt="logo" />;
};

const StyledLogo = styled.img`
  width: 55px;
`;

export default Logo;
