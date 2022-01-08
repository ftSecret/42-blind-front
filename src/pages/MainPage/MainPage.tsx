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
          <StyledWriteButton children={'글쓰기'} />
        </Link>
      </StyledContainer>
    </section>
  );
};

const StyledContainer = styled.div`
  ${containerStyle}
`;

const StyledWriteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  width: 80px;
  height: 40px;
  position: sticky;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  border-radius: 50px;
  border: none;
  font-weight: bold;
`;

export default MainPage;
