import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyHeader from 'components/organisms/MyPage/MyHeader/MyHeader';
import MyTabBar from 'components/organisms/MyPage/MyTabBar/MyTabBar';
import { containerStyle } from 'styles/mixin';
import styled from 'styled-components';
import MyPostBoard from 'components/organisms/MyPage/MyPostBoard/MyPostBoard';
import MyCommentBoard from 'components/organisms/MyPage/MyCommentBoard/MyCommentBoard';

const MyPage = () => {
  return (
    <div>
      <MyHeader />
      <MyTabBar />
      <StyledContainer>
        <Routes>
          <Route path="/post" element={<MyPostBoard />} />
          <Route path="/comment" element={<MyCommentBoard />} />
        </Routes>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled.div`
  ${containerStyle}
`;

export default MyPage;
