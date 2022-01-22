import React from 'react';
import MainHeader from 'components/organisms/MainPage/MainHeader';
import styled from 'styled-components';
import { containerStyle, flexColumn } from 'styles/mixin';
import MainBoard from 'components/organisms/MainPage/MainBoard';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const MainPage = () => {
  const navigate = useNavigate();
  const swipeHandler = useSwipeable({
    onSwipedLeft: () => {
      navigate('/my');
    },
  });

  return (
    <StyledSection>
      <MainHeader />
      <StyledContainer {...swipeHandler}>
        <MainBoard />
      </StyledContainer>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  ${flexColumn}
  height: 100vh;
`;

const StyledContainer = styled.div`
  ${containerStyle}
  flex: auto;
`;

export default MainPage;
