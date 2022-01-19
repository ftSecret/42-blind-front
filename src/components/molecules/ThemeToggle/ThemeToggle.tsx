import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { toggle, selectTheme } from 'features/theme/themeSlice';
import { DARK_THEME, LIGHT_THEME } from 'constants/theme';
import Button from 'components/atoms/Button';
import { centerRowStyle } from 'styles/mixin';

export const themeIcon = {
  [DARK_THEME]: '🌚',
  [LIGHT_THEME]: '🌝',
};

const ThemeToggle = () => {
  const themeState = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  return <ToggleWrapper onClick={() => dispatch(toggle())}>{themeIcon[themeState]}</ToggleWrapper>;
};

const ToggleWrapper = styled(Button)`
  ${centerRowStyle}
  border: ${(props) => props.theme.colors.background};
  font-size: ${({ theme }) => theme.fonts.size.base};
  background-color: rgba(0, 0, 0, 0);
`;
export default ThemeToggle;
