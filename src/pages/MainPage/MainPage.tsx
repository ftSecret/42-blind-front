import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button';
import MainHeader from 'components/organisms/MainPage/MainHeader';
import styled from 'styled-components';
import { PATH_POST_WRITING } from 'components/utils/AppRouter';
import { containerStyle } from 'styles/mixin';
import MainBoard from 'components/organisms/MainPage/MainBoard';
import AddIcon from 'components/atoms/icons/AddIcon';

const MainPage = () => {
  return (
    <section>
      <MainHeader />
      <StyledContainer>
        <MainBoard />
      </StyledContainer>
      <Link to={PATH_POST_WRITING}>
        <StyledWriteButton>
          <AddIcon />
        </StyledWriteButton>
      </Link>
    </section>
  );
};

const StyledContainer = styled.div`
  ${containerStyle}
  position: relative;
`;

const StyledWriteButton = styled(Button)`
  all: unset;
  display: flex;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 2.2rem;
  width: 1.8em;
  height: 1.8em;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 2.3rem;
  right: 2rem;
`;

export default MainPage;
