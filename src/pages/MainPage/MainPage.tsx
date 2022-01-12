import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button';
import MainHeader from 'components/organisms/MainPage/MainHeader';
import styled from 'styled-components';
import { PATH_POST_WRITING } from 'components/utils/AppRouter';
import { containerStyle } from 'styles/mixin';
import MainBoard from 'components/organisms/MainPage/MainBoard';

const MainPage = () => {
  return (
    <section>
      <MainHeader />
      <StyledContainer>
        <MainBoard />
        <Link to={PATH_POST_WRITING}>
          <StyledWriteButton children={'+'} />
        </Link>
      </StyledContainer>
    </section>
  );
};

const StyledContainer = styled.div`
  ${containerStyle}
  position: relative;
`;

const StyledWriteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  width: 3.3rem;
  height: 3.3rem;
  position: sticky;
  left: 100%;
  bottom: 50px;
  font-size: 2rem;
  border-radius: 50px;
  border: none;
`;

export default MainPage;
