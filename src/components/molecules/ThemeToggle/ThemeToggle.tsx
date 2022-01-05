import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { toggle, selectTheme } from 'features/theme/themeSlice';
import { DARK_THEME, LIGHT_THEME } from 'constants/theme';
import Button from 'components/atoms/Button/Button';

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
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.colors.background};
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 35px;

  border-radius: 30px;
`;
export default ThemeToggle;
