import { useAppDispatch, useAppSelector } from 'app/hooks';
import { toggle, selectTheme } from 'features/theme/themeSlice';
import React from 'react';

import theme from 'assets/styles/theme';
import styled from 'styled-components';

const ThemeToggle = () => {
  const themeState = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  return (
    <ToggleWrapper onClick={() => dispatch(toggle())} theme={theme[themeState]}>
      {themeState === 'darkTheme' ? '🌚' : '🌝'}
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.colors.background};
  font-size: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 35px;

  border-radius: 30px;
`;
export default ThemeToggle;
