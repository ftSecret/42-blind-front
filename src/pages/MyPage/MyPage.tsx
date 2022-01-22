import React from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MyHeader from 'components/organisms/MyPage/MyHeader';
import MyTabBar from 'components/organisms/MyPage/MyTabBar';
import { containerStyle, flexColumn } from 'styles/mixin';
import styled from 'styled-components';
import MyCommentBoard from 'components/organisms/MyPage/MyCommentBoard';
import MyPostBoard from 'components/organisms/MyPage/MyPostBoard';
import { useSwipeable } from 'react-swipeable';

const MyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const swipeHandler = useSwipeable({
    onSwipedRight: () => {
      if (location.pathname.includes('/comment')) navigate('/my/post', { replace: true });
      else if (location.pathname.includes('/post')) navigate(-1);
    },
    onSwipedLeft: () => {
      if (location.pathname.includes('/post')) navigate('/my/comment', { replace: true });
    },
  });

  return (
    <StyledMyPageContainer>
      <MyHeader />
      <MyTabBar />
      <StyledContainer {...swipeHandler}>
        <Routes>
          <Route path="/" element={<Navigate to="/my/post" replace />} />
          <Route path="/post" element={<MyPostBoard />} />
          <Route path="/comment" element={<MyCommentBoard />} />
        </Routes>
      </StyledContainer>
    </StyledMyPageContainer>
  );
};

const StyledMyPageContainer = styled.div`
  ${flexColumn}
  height: 100vh;
`;

const StyledContainer = styled.div`
  ${containerStyle}
  flex:auto;
`;

export default MyPage;
