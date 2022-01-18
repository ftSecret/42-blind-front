import React from 'react';
import MyPostCards from 'components/organisms/MyPage/MyPostCards';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

const MyPostBoard = () => {
  return (
    <StyledContainer>
      <MyPostCards />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`;

export default MyPostBoard;
