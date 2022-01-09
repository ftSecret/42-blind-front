import LoginButton from 'components/molecules/LoginButton';
import React from 'react';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

const LoginPage = () => {
  return (
    <StyledContainer>
      <LoginButton />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${flexColumn}
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default LoginPage;
