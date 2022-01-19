import React from 'react';
import MainHeader from 'components/organisms/MainPage/MainHeader';
import styled from 'styled-components';
import { containerStyle } from 'styles/mixin';
import MainBoard from 'components/organisms/MainPage/MainBoard';
import PostWritingButton from 'components/organisms/MainPage/PostWritingButton';

const MainPage = () => {
  return (
    <section>
      <MainHeader />
      <StyledContainer>
        <MainBoard />
        <PostWritingButton />
      </StyledContainer>
    </section>
  );
};

const StyledContainer = styled.div`
  ${containerStyle}
`;

export default MainPage;
