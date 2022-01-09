import Button from 'components/atoms/Button';
import { env } from 'constants/env';
import { darken, lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { fonts, paddings } from 'styles/theme';

const login = () => {
  window.location.href = `${env.url.blindAPI}/oauth2/authorization/intra42`;
};

const LoginButton = () => {
  return <StyledLoginButton onClick={login}>로그인</StyledLoginButton>;
};

const StyledLoginButton = styled(Button)`
  all: unset;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.default};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.default};
  border-width: 0.1px;
  border-radius: 0.5rem;
  padding: ${paddings.sm};
  font-size: ${fonts.size.lg};
  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.colors.primary)};
  }
`;

export default LoginButton;
