import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';
import LoginButton from 'components/molecules/LoginButton';

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
